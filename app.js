const STORAGE = {
  attempts: 'mln111_attempts_v4',
  sessions: 'mln111_sessions_v4',
  wrong: 'mln111_wrong_v4',
  theme: 'mln111_theme_v1'
};

const app = document.querySelector('#app');
const toastEl = document.querySelector('#toast');
let data;
let courses = {};
let state = { screen: 'courses', courseId: null, session: null, configExam: null, configMode: 'study' };

const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const esc = (value = '') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const shuffle = array => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const keyFor = examId => state.courseId === 'mln111' ? `exam-${examId}` : `${state.courseId}-exam-${examId}`;
const questionKey = id => state.courseId === 'mln111' ? String(id) : `${state.courseId}:${id}`;
const allQuestions = () => data.exams.flatMap(exam => exam.questions.map(q => ({...q, examId: exam.id, courseId: state.courseId})));
const isMulti = q => Array.isArray(q.correctAnswers) && q.correctAnswers.length > 1;
const knownQuestion = q => Number.isInteger(q.correctAnswer) || isMulti(q) || (q.variant && Number.isInteger(q.variant.correctAnswer));
const selectedIndexes = answer => Array.isArray(answer) ? answer : (Number.isInteger(answer) ? [answer] : []);
const isCorrectAnswer = (q, answer) => {
  const selected = selectedIndexes(answer).slice().sort((a,b)=>a-b);
  const correct = (isMulti(q) ? q.correctAnswers : [q.correctAnswer]).slice().sort((a,b)=>a-b);
  return selected.length === correct.length && selected.every((value,index) => value === correct[index]);
};

const normalizeAnswer = (q, ans) => {
  if (!q || !q.variant) return ans;
  if (typeof ans === 'object' && ans !== null && !Array.isArray(ans)) return { main: ans.main, variant: ans.variant };
  if (Array.isArray(ans) && ans.length >= 2) {
    return {
      main: ans[0],
      variant: ans[1] >= (q.options?.length || 4) ? ans[1] - (q.options?.length || 4) : ans[1]
    };
  }
  if (Number.isInteger(ans)) return { main: ans, variant: undefined };
  return { main: undefined, variant: undefined };
};

const isQuestionAnswered = (q, ans) => {
  if (ans === undefined || ans === null) return false;
  if (q.variant) {
    const n = normalizeAnswer(q, ans);
    return n.main !== undefined && n.variant !== undefined;
  }
  if (Array.isArray(ans)) return ans.length > 0;
  return Number.isInteger(ans);
};

const isQuestionPartiallyAnswered = (q, ans) => {
  if (!q || !q.variant || ans === undefined || ans === null) return false;
  const n = normalizeAnswer(q, ans);
  return (n.main !== undefined && n.variant === undefined) || (n.main === undefined && n.variant !== undefined);
};

const toast = message => {
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toastEl.classList.remove('show'), 1900);
};

function header(showCourseSwitch = false) {
  return `<header class="topbar">
    <div class="brand"><span class="brand-mark">M</span><span>MLN Quiz</span></div>
    <div class="top-actions">${showCourseSwitch ? '<button class="btn btn-ghost" data-action="courses">Đổi học phần</button>' : ''}<button class="icon-btn" data-action="theme" aria-label="Đổi giao diện sáng tối">${document.body.classList.contains('dark') ? '☀' : '☾'}</button></div>
  </header>`;
}

function renderCourseSelection() {
  state.screen = 'courses'; state.courseId = null; data = null; state.session = null;
  app.innerHTML = `${header()}<main class="page course-page">
    <section class="hero course-hero"><div><p class="eyebrow">Chọn học phần</p><h1>Bạn muốn ôn môn nào?</h1><p class="hero-copy">Mỗi học phần có kho câu hỏi, kết quả và tiến độ được lưu riêng trên thiết bị này.</p></div></section>
    <section class="course-grid">${Object.values(courses).map(course => {
      const total=course.exams.reduce((sum,e)=>sum+e.questions.length,0);
      return `<button class="course-card" data-action="select-course" data-course="${course.course.id}"><span class="course-code">${esc(course.course.title)}</span><strong>${course.exams.length} đề ôn tập</strong><span>${total} câu hỏi</span><i>Vào học phần →</i></button>`;
    }).join('')}</section>
  </main>`;
}

function renderHome(courseId = state.courseId) {
  state.courseId = courseId;
  data = courses[courseId];
  state.screen = 'home';
  state.session = null;
  const attempts = read(STORAGE.attempts, {});
  const sessions = read(STORAGE.sessions, {});
  const total = allQuestions().length;
  const cards = [...data.exams.map(exam => ({...exam, mixed:false})), {
    id:'mixed', title:'Luyện tập tổng hợp', questions:allQuestions(), mixed:true
  }];
  app.innerHTML = `${header(true)}<main class="page">
    <section class="hero">
      <div><p class="eyebrow">Kho câu hỏi ${esc(data.course.title)}</p><h1>Học chắc hơn,<br>từng câu một.</h1><p class="hero-copy">Ôn tập theo từng đề hoặc luyện ngẫu nhiên. Tiến độ của bạn được lưu tự động ngay trên thiết bị này.</p></div>
      <div class="hero-stat"><strong>${total}</strong><span>câu hỏi từ tài liệu gốc</span></div>
    </section>
    <section class="exam-grid" aria-label="Danh sách đề thi">
      ${cards.map(card => {
        const attempt = attempts[keyFor(card.id)];
        const saved = sessions[keyFor(card.id)];
        const done = saved?.questions ? saved.questions.filter(q => isQuestionAnswered(q, saved.answers?.[q.id])).length : (saved ? Object.keys(saved.answers || {}).length : 0);
        return `<article class="exam-card ${card.mixed ? 'mixed':''}">
          <div class="card-icon">${card.mixed ? '✦' : '▤'}</div>
          <h2>${esc(card.title)}</h2><div class="count">${card.questions.length} câu hỏi</div>
          <div class="card-metrics">
            <div class="metric"><strong>${attempt ? `${attempt.score.toFixed(1)}/10` : '—'}</strong><span>Điểm gần nhất</span></div>
            <div class="metric"><strong>${done}/${saved?.questionOrder?.length || card.questions.length}</strong><span>Đã hoàn thành</span></div>
          </div>
          <div class="card-actions">
            <button class="btn btn-primary btn-wide" data-action="configure" data-exam="${card.id}">${saved ? 'Tiếp tục ôn tập' : 'Bắt đầu ôn tập'}</button>
            <button class="btn btn-ghost" data-action="restart" data-exam="${card.id}" title="Làm lại">↻</button>
          </div>
        </article>`;
      }).join('')}
    </section>
  </main>`;
}

function configModal(examId, forceNew = false) {
  const exam = examId === 'mixed' ? {id:'mixed',title:'Luyện tập tổng hợp',questions:allQuestions()} : data.exams.find(x => String(x.id) === String(examId));
  state.configExam = exam;
  const saved = read(STORAGE.sessions, {})[keyFor(exam.id)];
  if (saved && !forceNew) {
    if (Array.isArray(saved.questions)) {
      const qMap = new Map(exam.questions.map(q => [q.id, q]));
      saved.questions.forEach(sq => {
        const src = qMap.get(sq.id);
        if (src?.variant && !sq.variant) {
          sq.variant = { ...src.variant };
          sq.options = [...src.options];
          sq.correctAnswer = src.correctAnswer;
          sq.correctAnswers = src.correctAnswers;
        }
      });
    }
    state.session = saved;
    renderQuiz();
    toast('Đã khôi phục tiến độ gần nhất');
    return;
  }
  state.configMode = 'study';
  const wrongStore = read(STORAGE.wrong, {});
  const wrongCount = allQuestions().filter(q => wrongStore[questionKey(q.id)]).length;
  app.insertAdjacentHTML('beforeend', `<div class="modal-backdrop" data-modal>
    <section class="modal" role="dialog" aria-modal="true" aria-labelledby="setup-title">
      <div class="modal-head"><div><h2 id="setup-title">${esc(exam.title)}</h2><p>Chọn cách bạn muốn bắt đầu lượt này.</p></div><button class="icon-btn" data-action="close-modal">×</button></div>
      <div class="choice-row">
        <button class="choice-tile active" data-mode="study"><strong>📖 Ôn tập</strong><span>Biết đúng sai ngay sau khi chọn</span></button>
        <button class="choice-tile" data-mode="exam"><strong>⏱ Thi thử</strong><span>Chấm điểm sau khi nộp bài</span></button>
      </div>
      ${exam.id === 'mixed' ? `<div class="field"><label for="question-count">Số câu trong lượt</label><select id="question-count">
        ${[10,20,30,50,100,exam.questions.length].filter((n,i,a)=>n<=exam.questions.length&&a.indexOf(n)===i).map(n => `<option value="${n}">${n === exam.questions.length ? `Toàn bộ ${exam.questions.length} câu` : `${n} câu ngẫu nhiên`}</option>`).join('')}
        <option value="wrong" ${wrongCount ? '' : 'disabled'}>Chỉ câu từng làm sai (${wrongCount})</option>
      </select></div>` : ''}
      <div class="switch-row"><div><strong>Trộn thứ tự câu hỏi</strong><small>Mỗi lượt có thứ tự khác nhau</small></div><label class="switch"><input id="shuffle-questions" type="checkbox"><span class="slider"></span></label></div>
      <div class="switch-row"><div><strong>Trộn vị trí đáp án</strong><small>Đáp án đúng luôn được bảo toàn</small></div><label class="switch"><input id="shuffle-options" type="checkbox"><span class="slider"></span></label></div>
      <div class="modal-actions"><button class="btn btn-ghost" data-action="close-modal">Hủy</button><button class="btn btn-primary btn-wide" data-action="start">Bắt đầu làm bài</button></div>
    </section>
  </div>`);
}

function createSession() {
  const exam = state.configExam;
  let questions = [...exam.questions];
  const countEl = document.querySelector('#question-count');
  if (exam.id === 'mixed' && countEl?.value === 'wrong') {
    const wrongIds = read(STORAGE.wrong, {});
    questions = questions.filter(q => wrongIds[questionKey(q.id)]);
  } else if (exam.id === 'mixed') {
    questions = shuffle(questions).slice(0, Math.min(Number(countEl.value), questions.length));
  }
  const shuffleQuestions = document.querySelector('#shuffle-questions').checked;
  const shuffleOptions = document.querySelector('#shuffle-options').checked;
  if (shuffleQuestions) questions = shuffle(questions);
  const prepared = questions.map(q => {
    const optionEntries = q.options.map((text, originalIndex) => ({text, originalIndex}));
    const arranged = shuffleOptions ? shuffle(optionEntries) : optionEntries;
    let variantPrepared = null;
    if (q.variant) {
      const vEntries = q.variant.options.map((text, originalIndex) => ({text, originalIndex}));
      const vArranged = shuffleOptions ? shuffle(vEntries) : vEntries;
      variantPrepared = {
        title: q.variant.title || 'Kiểu hỏi khác',
        question: q.variant.question,
        options: vArranged.map(x => x.text),
        correctAnswer: Number.isInteger(q.variant.correctAnswer) ? vArranged.findIndex(x => x.originalIndex === q.variant.correctAnswer) : null,
        correctAnswers: Array.isArray(q.variant.correctAnswers) ? q.variant.correctAnswers.map(ans => vArranged.findIndex(x => x.originalIndex === ans)).sort((a,b)=>a-b) : null,
        explanation: q.variant.explanation || null
      };
    }
    return {
      id:q.id, examId:q.examId || Math.ceil(q.id / 60), courseId:state.courseId, question:q.question,
      options:arranged.map(x => x.text),
      correctAnswer:Number.isInteger(q.correctAnswer) ? arranged.findIndex(x => x.originalIndex === q.correctAnswer) : null,
      correctAnswers:Array.isArray(q.correctAnswers) ? q.correctAnswers.map(answer => arranged.findIndex(x => x.originalIndex === answer)).sort((a,b)=>a-b) : null,
      variant:variantPrepared,
      explanation:q.explanation || null, needsReview:q.needsReview
    };
  });
  state.session = {
    id:`${Date.now()}-${Math.random().toString(16).slice(2)}`,
    examId:exam.id, courseId:state.courseId, title:exam.title, mode:state.configMode, questions:prepared,
    questionOrder:prepared.map(q => q.id), answers:{}, flags:{}, revealed:{}, current:0,
    submitted:false, createdAt:Date.now(), updatedAt:Date.now()
  };
  saveSession();
  renderQuiz();
}

function saveSession() {
  if (!state.session) return;
  state.session.updatedAt = Date.now();
  const sessions = read(STORAGE.sessions, {});
  sessions[keyFor(state.session.examId)] = state.session;
  write(STORAGE.sessions, sessions);
}

function renderQuiz() {
  state.screen = 'quiz';
  const s = state.session;
  const q = s.questions[s.current];
  const answeredCount = s.questions.filter(item => isQuestionAnswered(item, s.answers[item.id])).length;
  const rawAns = s.answers[q.id];
  const normAns = q.variant ? normalizeAnswer(q, rawAns) : null;
  const mainChosen = q.variant ? (normAns.main !== undefined ? [normAns.main] : []) : selectedIndexes(rawAns);
  const varChosen = q.variant ? (normAns.variant !== undefined ? [normAns.variant] : []) : [];
  const reveal = s.submitted || (s.mode === 'study' && s.revealed?.[q.id]);

  const resultClass = (index, targetCorrect, chosenArr) => {
    if (!reveal) return chosenArr.includes(index) ? 'selected' : '';
    const correctArr = Array.isArray(targetCorrect) ? targetCorrect : (Number.isInteger(targetCorrect) ? [targetCorrect] : []);
    if (correctArr.includes(index)) return 'correct';
    if (chosenArr.includes(index) && !correctArr.includes(index)) return 'wrong';
    return chosenArr.includes(index) ? 'selected' : '';
  };

  const isLast = s.current === s.questions.length - 1;
  const canCheckStudy = q.variant ? (normAns.main !== undefined) : (mainChosen.length > 0);

  app.innerHTML = `<div class="quiz-shell">
    <aside class="sidebar" id="sidebar">
      <div class="side-head"><div><div class="side-title">${esc(s.title)}</div><div class="side-meta">${s.questions.length} câu · ${s.mode === 'study' ? 'Ôn tập' : 'Thi thử'}</div></div><button class="icon-btn mobile-menu" data-action="menu">×</button></div>
      <div class="legend"><span><i class="answered"></i>Đã trả lời</span><span><i class="partial"></i>Làm dở</span><span><i></i>Chưa làm</span><span><i class="flagged"></i>Xem lại</span></div>
      <div class="question-grid">${s.questions.map((item,i) => {
        const isAns = isQuestionAnswered(item, s.answers[item.id]);
        const isPart = isQuestionPartiallyAnswered(item, s.answers[item.id]);
        return `<button class="q-num ${isAns ? 'answered':''} ${isPart ? 'partial':''} ${s.flags[item.id] ? 'flagged':''} ${i === s.current ? 'current':''}" data-go="${i}" aria-label="Câu ${i+1}">${i+1}</button>`;
      }).join('')}</div>
    </aside>
    <main class="quiz-main">
      <header class="quiz-top">
        <div class="quiz-top-left"><button class="icon-btn mobile-menu" data-action="menu">☰</button><button class="icon-btn" data-action="home" title="Về trang chủ">←</button><span class="mode-pill">${s.mode === 'study' ? 'Ôn tập' : 'Thi thử'}</span></div>
        <div class="progress-wrap"><div class="progress-label"><span>Tiến độ</span><strong>${answeredCount}/${s.questions.length}</strong></div><div class="progress"><div style="width:${answeredCount/s.questions.length*100}%"></div></div></div>
        <button class="btn btn-primary" data-action="submit">Nộp bài</button>
      </header>
      <div class="question-stage"><article class="question-card">
        <div class="question-kicker"><span>Câu ${s.current+1} / ${s.questions.length}</span><button class="flag-btn ${s.flags[q.id] ? 'active':''}" data-action="flag">${s.flags[q.id] ? '★ Đã đánh dấu' : '☆ Đánh dấu xem lại'}</button></div>
        
        ${q.variant ? `<div class="question-part-badge"><span class="badge-part">Phần 1: Câu hỏi chính</span></div>` : ''}
        <h1 class="question-text">${esc(q.question)}</h1>
        ${isMulti(q) ? `<div class="multi-hint">▣ Câu hỏi nhiều đáp án · Chọn ${q.correctAnswers.length} phương án</div>` : ''}
        
        <div class="options">${q.options.map((option,index) => `<button class="option ${resultClass(index, isMulti(q) ? q.correctAnswers : q.correctAnswer, mainChosen)}" data-answer="${index}" ${s.submitted || reveal ? 'disabled':''}><span class="option-letter">${String.fromCharCode(65+index)}</span><span>${esc(option)}</span></button>`).join('')}</div>
        
        ${q.variant && normAns.main === undefined ? `
          <div class="variant-prompt-card">
            <div class="variant-prompt-icon">💡</div>
            <div class="variant-prompt-content">
              <strong>Câu này có thêm 1 kiểu hỏi khác</strong>
              <p>Hãy chọn câu trả lời ở trên để hiển thị tiếp kiểu hỏi khác bên dưới.</p>
            </div>
          </div>
        ` : ''}

        ${q.variant && normAns.main !== undefined ? `
          <section class="variant-card">
            <div class="variant-card-header">
              <div class="variant-part-tag">
                <span class="badge-part variant-accent">Phần 2: ${esc(q.variant.title || 'Kiểu hỏi khác')}</span>
                <span class="variant-indicator">${normAns.variant !== undefined ? '✓ Đã chọn đáp án' : '👉 Hãy chọn đáp án cho kiểu hỏi này'}</span>
              </div>
            </div>
            <h2 class="variant-question-title">${esc(q.variant.question)}</h2>
            <div class="options">
              ${q.variant.options.map((opt, vIdx) => `<button class="option ${resultClass(vIdx, q.variant.correctAnswer, varChosen)}" data-variant-answer="${vIdx}" ${s.submitted || reveal ? 'disabled':''}><span class="option-letter">${String.fromCharCode(65+vIdx)}</span><span>${esc(opt)}</span></button>`).join('')}
            </div>
          </section>
        ` : ''}

        ${s.mode === 'study' && !reveal ? `<button class="btn btn-primary check-answer" data-action="check-answer" ${canCheckStudy ? '' : 'disabled'}>Kiểm tra đáp án ${q.variant && normAns.variant === undefined ? '(Nên làm cả 2 phần)' : ''}</button>` : ''}
        ${feedback(q, rawAns, reveal)}
      </article></div>
      <nav class="quiz-nav"><button class="btn btn-ghost" data-action="prev" ${s.current===0?'disabled':''}>← Câu trước</button><button class="btn btn-primary" data-action="next">${isLast ? 'Nộp bài' : 'Câu tiếp theo →'}</button></nav>
    </main>
  </div>`;
}

function feedback(q, rawAns, reveal) {
  if (!reveal) return '';
  const explanation = q.explanation ? `<div class="explanation"><strong>Giải thích từ tài liệu:</strong><br>${esc(q.explanation)}</div>` : '';
  
  if (q.variant) {
    const norm = normalizeAnswer(q, rawAns);
    const isMainGood = norm.main === q.correctAnswer;
    const isVarGood = norm.variant === q.variant.correctAnswer;
    const allGood = isMainGood && isVarGood;
    return `<div class="feedback ${allGood ? 'good' : 'bad'}">
      <div><strong>${allGood ? '🎉 Chính xác cả 2 phần!' : '⚠️ Kết quả trả lời:'}</strong></div>
      <div class="feedback-part">
        <span class="fb-tag ${isMainGood ? 'fb-good' : 'fb-bad'}">${isMainGood ? '✓ Phần 1 (Câu chính): Đúng' : '✗ Phần 1 (Câu chính): Chưa đúng'}</span>
        ${!isMainGood ? `<div class="fb-ans">Đáp án đúng: <strong>${String.fromCharCode(65 + q.correctAnswer)}. ${esc(q.options[q.correctAnswer])}</strong></div>` : ''}
      </div>
      <div class="feedback-part">
        <span class="fb-tag ${isVarGood ? 'fb-good' : 'fb-bad'}">${isVarGood ? '✓ Phần 2 (Kiểu hỏi khác): Đúng' : '✗ Phần 2 (Kiểu hỏi khác): Chưa đúng'}</span>
        ${!isVarGood ? `<div class="fb-ans">Đáp án đúng: <strong>${String.fromCharCode(65 + q.variant.correctAnswer)}. ${esc(q.variant.options[q.variant.correctAnswer])}</strong></div>` : ''}
      </div>
      ${explanation}
    </div>`;
  }

  if (!knownQuestion(q)) return `<div class="feedback review"><strong>Câu này cần rà soát.</strong> Tài liệu không đánh dấu đáp án nên hệ thống không tự suy đoán và không chấm câu này.${explanation}</div>`;
  const selected = selectedIndexes(rawAns);
  const correctIndexes = isMulti(q) ? q.correctAnswers : [q.correctAnswer];
  const correctText = correctIndexes.map(index => `${String.fromCharCode(65+index)}. ${esc(q.options[index])}`).join('<br>');
  if (isCorrectAnswer(q, selected)) return `<div class="feedback good"><strong>Chính xác!</strong> Bạn đã chọn đúng.${explanation}</div>`;
  return `<div class="feedback bad"><strong>Chưa đúng.</strong><br>Đáp án đúng:<br>${correctText}${explanation}</div>`;
}

function answerQuestion(index, isVariant = false) {
  const s = state.session;
  const q = s.questions[s.current];
  if (s.submitted || (s.mode === 'study' && s.revealed?.[q.id])) return;

  if (!q.variant) {
    if (isMulti(q)) {
      const current = selectedIndexes(s.answers[q.id]);
      s.answers[q.id] = current.includes(index) ? current.filter(x => x !== index) : [...current, index].sort((a,b)=>a-b);
      if (!s.answers[q.id].length) delete s.answers[q.id];
    } else {
      s.answers[q.id] = index;
    }
  } else {
    const current = normalizeAnswer(q, s.answers[q.id]);
    if (!isVariant) {
      current.main = index;
    } else {
      current.variant = index;
    }
    s.answers[q.id] = current;
  }
  saveSession();
  renderQuiz();
}

function calculateResult(s) {
  let correct = 0, wrong = 0, blank = 0, review = 0;
  const wrongItems = [];
  s.questions.forEach((q, i) => {
    const answer = s.answers[q.id];
    if (!knownQuestion(q)) { review++; return; }
    if (!q.variant) {
      if (answer === undefined || (Array.isArray(answer) && !answer.length)) { blank++; return; }
      if (isCorrectAnswer(q, answer)) correct++;
      else { wrong++; wrongItems.push({ q, index: i, answer }); }
    } else {
      const norm = normalizeAnswer(q, answer);
      if (norm.main === undefined && norm.variant === undefined) { blank++; return; }
      const isMainCorrect = norm.main === q.correctAnswer;
      const isVarCorrect = norm.variant === q.variant.correctAnswer;
      if (isMainCorrect && isVarCorrect) {
        correct++;
      } else {
        wrong++;
        wrongItems.push({ q, index: i, answer: norm });
      }
    }
  });
  const gradable = s.questions.length - review;
  const score = gradable ? correct / gradable * 10 : 0;
  const accuracy = correct + wrong ? correct / (correct + wrong) * 100 : 0;
  return { correct, wrong, blank, review, score, accuracy, wrongItems, gradable };
}

function submitQuiz() {
  const s = state.session;
  s.submitted = true;
  s.result = calculateResult(s);
  saveSession();
  const attempts = read(STORAGE.attempts, {});
  attempts[keyFor(s.examId)] = { score: s.result.score, date: Date.now(), correct: s.result.correct, total: s.result.gradable };
  write(STORAGE.attempts, attempts);
  const wrong = read(STORAGE.wrong, {});
  s.result.wrongItems.forEach(item => { wrong[questionKey(item.q.id)] = { lastWrongAt: Date.now() }; });
  s.questions.forEach(q => {
    if (knownQuestion(q)) {
      if (!q.variant && isCorrectAnswer(q, s.answers[q.id])) {
        delete wrong[questionKey(q.id)];
      } else if (q.variant) {
        const norm = normalizeAnswer(q, s.answers[q.id]);
        if (norm.main === q.correctAnswer && norm.variant === q.variant.correctAnswer) {
          delete wrong[questionKey(q.id)];
        }
      }
    }
  });
  write(STORAGE.wrong, wrong);
  renderResult();
}

function renderResult() {
  state.screen = 'result';
  const s = state.session;
  const r = s.result || calculateResult(s);
  app.innerHTML = `${header()}<main class="result-page">
    <section class="result-hero"><p class="eyebrow" style="color:#dce9ff">Kết quả · ${esc(s.title)}</p><h1>${r.score>=8?'Xuất sắc!':r.score>=5?'Bạn đã hoàn thành!':'Tiếp tục cố gắng nhé!'}</h1><div class="score-ring" style="--score:${r.score*10}%"><strong>${r.score.toFixed(1)}</strong></div><p>Điểm theo thang 10 · ${r.review ? `${r.review} câu không chấm do cần rà soát` : 'Tất cả câu đã được chấm'}</p></section>
    <section class="result-stats"><div class="stat-card"><strong style="color:var(--green)">${r.correct}</strong><span>Câu đúng</span></div><div class="stat-card"><strong style="color:var(--red)">${r.wrong}</strong><span>Câu sai</span></div><div class="stat-card"><strong>${r.blank}</strong><span>Bỏ trống</span></div><div class="stat-card"><strong>${r.accuracy.toFixed(0)}%</strong><span>Chính xác</span></div></section>
    <div class="result-actions"><button class="btn btn-ghost" data-action="home">Về trang chủ</button><button class="btn btn-ghost" data-action="review-result">Xem lại toàn bộ bài</button><button class="btn btn-primary" data-action="redo">Làm lại đề</button>${r.wrong ? '<button class="btn btn-ghost" data-action="review-wrong">Xem lại câu sai</button><button class="btn btn-danger" data-action="practice-wrong">Làm lại câu sai</button>':''}</div>
    <section class="wrong-list"><h2>Các câu trả lời sai</h2>${r.wrongItems.length ? r.wrongItems.map(item => {
      const q = item.q;
      if (q.variant) {
        const norm = normalizeAnswer(q, item.answer);
        const isMainGood = norm.main === q.correctAnswer;
        const isVarGood = norm.variant === q.variant.correctAnswer;
        const mainChosen = norm.main !== undefined ? `${String.fromCharCode(65 + norm.main)}. ${esc(q.options[norm.main])}` : 'Chưa chọn';
        const mainCorrect = `${String.fromCharCode(65 + q.correctAnswer)}. ${esc(q.options[q.correctAnswer])}`;
        const varChosen = norm.variant !== undefined ? `${String.fromCharCode(65 + norm.variant)}. ${esc(q.variant.options[norm.variant])}` : 'Chưa chọn';
        const varCorrect = `${String.fromCharCode(65 + q.variant.correctAnswer)}. ${esc(q.variant.options[q.variant.correctAnswer])}`;
        return `<article class="wrong-item">
          <p><strong>Câu ${item.index + 1}</strong> (Gồm câu hỏi chính & kiểu hỏi khác)</p>
          <div style="margin:8px 0 6px 12px; padding-left:10px; border-left:3px solid ${isMainGood ? 'var(--green)' : 'var(--red)'}">
            <small><strong>Phần 1:</strong> ${esc(q.question)}</small>
            <small>Bạn chọn: <strong>${mainChosen}</strong> (${isMainGood ? 'Đúng' : 'Sai'})</small>
            ${!isMainGood ? `<small>Đáp án đúng: <strong>${mainCorrect}</strong></small>` : ''}
          </div>
          <div style="margin:8px 0 6px 12px; padding-left:10px; border-left:3px solid ${isVarGood ? 'var(--green)' : 'var(--red)'}">
            <small><strong>Phần 2 (${esc(q.variant.title || 'Kiểu hỏi khác')}):</strong> ${esc(q.variant.question)}</small>
            <small>Bạn chọn: <strong>${varChosen}</strong> (${isVarGood ? 'Đúng' : 'Sai'})</small>
            ${!isVarGood ? `<small>Đáp án đúng: <strong>${varCorrect}</strong></small>` : ''}
          </div>
          ${q.explanation ? `<div class="result-explanation"><strong>Giải thích:</strong> ${esc(q.explanation)}</div>` : ''}
        </article>`;
      }
      const picked = selectedIndexes(item.answer).map(i => `${String.fromCharCode(65 + i)}. ${esc(q.options[i])}`).join('; ');
      const correct = (isMulti(q) ? q.correctAnswers : [q.correctAnswer]).map(i => `${String.fromCharCode(65 + i)}. ${esc(q.options[i])}`).join('; ');
      return `<article class="wrong-item">
        <p>Câu ${item.index + 1}. ${esc(q.question)}</p>
        <small>Bạn chọn: ${picked || 'Chưa chọn'}</small>
        <small>Đáp án đúng: ${correct}</small>
        ${q.explanation ? `<div class="result-explanation"><strong>Giải thích từ tài liệu:</strong> ${esc(q.explanation)}</div>` : ''}
      </article>`;
    }).join('') : '<div class="empty-state">Không có câu trả lời sai. Tuyệt vời!</div>'}</section>
  </main>`;
}

function practiceWrong() {
  const wrongQuestions = state.session.result.wrongItems.map(x => x.q);
  state.session = { id:`wrong-${Date.now()}`, examId:'wrong-practice', title:'Làm lại câu sai', mode:'study', questions:wrongQuestions, questionOrder:wrongQuestions.map(q => q.id), answers:{}, flags:{}, revealed:{}, current:0, submitted:false, createdAt:Date.now() };
  saveSession();
  renderQuiz();
}

function reviewWrong() {
  const source = state.session;
  const items = source.result.wrongItems;
  const wrongQuestions = items.map(x => x.q);
  const answers = {};
  items.forEach(item => { answers[item.q.id] = item.answer; });
  state.session = {
    id:`review-wrong-${Date.now()}`, examId:'wrong-review', title:'Xem lại câu sai', mode:'study',
    questions:wrongQuestions, questionOrder:wrongQuestions.map(q => q.id), answers, flags:{}, revealed:{},
    current:0, submitted:true, createdAt:Date.now(), result:calculateResult({questions:wrongQuestions, answers})
  };
  renderQuiz();
}

function removeSession(examId) {
  const sessions = read(STORAGE.sessions, {});
  delete sessions[keyFor(examId)];
  write(STORAGE.sessions, sessions);
}

app.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  const action = button.dataset.action;
  if (button.dataset.mode) {
    state.configMode = button.dataset.mode;
    document.querySelectorAll('[data-mode]').forEach(x => x.classList.toggle('active', x === button));
    return;
  }
  if (button.dataset.answer !== undefined) {
    answerQuestion(Number(button.dataset.answer), false);
    return;
  }
  if (button.dataset.variantAnswer !== undefined) {
    answerQuestion(Number(button.dataset.variantAnswer), true);
    return;
  }
  if (button.dataset.go !== undefined) {
    state.session.current = Number(button.dataset.go);
    saveSession();
    renderQuiz();
    return;
  }
  if (action === 'theme') {
    document.body.classList.toggle('dark');
    write(STORAGE.theme, document.body.classList.contains('dark'));
    state.screen === 'courses' ? renderCourseSelection() : state.screen === 'home' ? renderHome() : state.screen === 'result' ? renderResult() : renderQuiz();
    return;
  }
  if (action === 'courses') renderCourseSelection();
  if (action === 'select-course') renderHome(button.dataset.course);
  if (action === 'configure') configModal(button.dataset.exam);
  if (action === 'restart') { removeSession(button.dataset.exam); configModal(button.dataset.exam, true); }
  if (action === 'close-modal') document.querySelector('[data-modal]')?.remove();
  if (action === 'start') createSession();
  if (action === 'home') { saveSession(); renderHome(); }
  if (action === 'menu') document.querySelector('#sidebar')?.classList.toggle('open');
  if (action === 'flag') {
    const q = state.session.questions[state.session.current];
    state.session.flags[q.id] = !state.session.flags[q.id];
    saveSession();
    renderQuiz();
  }
  if (action === 'check-answer') {
    const q = state.session.questions[state.session.current];
    const raw = state.session.answers[q.id];
    if (raw === undefined) return;
    if (q.variant) {
      const n = normalizeAnswer(q, raw);
      if (n.main === undefined) return;
    } else if (Array.isArray(raw) && !raw.length) {
      return;
    }
    state.session.revealed ||= {};
    state.session.revealed[q.id] = true;
    saveSession();
    renderQuiz();
  }
  if (action === 'prev' && state.session.current > 0) {
    state.session.current--;
    saveSession();
    renderQuiz();
  }
  if (action === 'next') {
    if (state.session.current < state.session.questions.length - 1) {
      state.session.current++;
      saveSession();
      renderQuiz();
    } else {
      submitQuiz();
    }
  }
  if (action === 'submit') submitQuiz();
  if (action === 'review-result') { state.session.current = 0; renderQuiz(); }
  if (action === 'review-wrong') reviewWrong();
  if (action === 'redo') {
    const examId = state.session.examId;
    removeSession(examId);
    renderHome();
    configModal(examId, true);
  }
  if (action === 'practice-wrong') practiceWrong();
});

async function init() {
  document.body.classList.toggle('dark', read(STORAGE.theme, false));
  try {
    const [mln111Response, mln122Response] = await Promise.all([fetch('questions.json'), fetch('questions-mln122.json')]);
    if (!mln111Response.ok || !mln122Response.ok) throw new Error(`HTTP ${mln111Response.status}/${mln122Response.status}`);
    const [mln111, mln122] = await Promise.all([mln111Response.json(), mln122Response.json()]);
    courses = { mln111, mln122 };
    renderCourseSelection();
  } catch(error) {
    app.innerHTML = `<div class="loading"><h2>Không tải được dữ liệu</h2><p>Hãy chạy website qua web server cục bộ, không mở trực tiếp file HTML.</p><code>python -m http.server 8000</code></div>`;
    console.error(error);
  }
}
init();
