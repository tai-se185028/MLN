// Component 2: Nội dung câu hỏi bên phải (#quiz-main)
// Chỉ cập nhật vùng câu hỏi, hoàn toàn không can thiệp vào #sidebar bên trái
window.QuestionComponent = {
  getContainer() {
    let mainContainer = app.querySelector('#quiz-main');
    if (!mainContainer) {
      app.innerHTML = `<div class="quiz-shell"><main class="quiz-main" id="quiz-main"></main></div>`;
      mainContainer = app.querySelector('#quiz-main');
    }
    return mainContainer;
  },

  render(s = state.session) {
    if (!s) return;
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

    const mainContainer = this.getContainer();
    mainContainer.innerHTML = `
      <header class="quiz-top">
        <div class="quiz-top-left"><button type="button" class="icon-btn mobile-menu" data-action="menu">☰</button><button type="button" class="icon-btn" data-action="home" title="Về trang chủ">←</button><span class="mode-pill">${s.mode === 'study' ? 'Ôn tập' : 'Thi thử'}</span></div>
        <div class="progress-wrap"><div class="progress-label"><span>Tiến độ</span><strong>${answeredCount}/${s.questions.length}</strong></div><div class="progress"><div style="width:${answeredCount / s.questions.length * 100}%"></div></div></div>
        <button type="button" class="btn btn-primary" data-action="submit">Nộp bài</button>
      </header>
      <div class="question-stage"><article class="question-card">
        <div class="question-kicker"><span>Câu ${s.current + 1} / ${s.questions.length}</span><button type="button" class="flag-btn ${s.flags[q.id] ? 'active' : ''}" data-action="flag">${s.flags[q.id] ? '★ Đã đánh dấu' : '☆ Đánh dấu xem lại'}</button></div>
        
        ${q.variant ? `<div class="question-part-badge"><span class="badge-part">Phần 1: Câu hỏi chính</span></div>` : ''}
        <h1 class="question-text">${esc(q.question)}</h1>
        ${isMulti(q) ? `<div class="multi-hint">▣ Câu hỏi nhiều đáp án · Chọn ${q.correctAnswers.length} phương án</div>` : ''}
        
        <div class="options">${q.options.map((option, index) => `<button type="button" class="option ${resultClass(index, isMulti(q) ? q.correctAnswers : q.correctAnswer, mainChosen)}" data-answer="${index}" ${s.submitted || reveal ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${esc(option)}</span></button>`).join('')}</div>
        
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
              ${q.variant.options.map((opt, vIdx) => `<button type="button" class="option ${resultClass(vIdx, q.variant.correctAnswer, varChosen)}" data-variant-answer="${vIdx}" ${s.submitted || reveal ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + vIdx)}</span><span>${esc(opt)}</span></button>`).join('')}
            </div>
          </section>
        ` : ''}

        ${s.mode === 'study' && !reveal ? `<button type="button" class="btn btn-primary check-answer" data-action="check-answer" ${canCheckStudy ? '' : 'disabled'}>Kiểm tra đáp án ${q.variant && normAns.variant === undefined ? '(Nên làm cả 2 phần)' : ''}</button>` : ''}
        ${feedback(q, rawAns, reveal)}
      </article></div>
      <nav class="quiz-nav"><button type="button" class="btn btn-ghost" data-action="prev" ${s.current === 0 ? 'disabled' : ''}>← Câu trước</button><button type="button" class="btn btn-primary" data-action="next">${isLast ? 'Nộp bài' : 'Câu tiếp theo →'}</button></nav>`;
  }
};
