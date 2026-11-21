// Component 1: Danh sách câu hỏi bên trái (#sidebar)
// Hoạt động độc lập với khung câu hỏi bên phải (#quiz-main / #app)
window.SidebarComponent = {
  el: null,
  mountedSessionKey: null,
  buttons: [],
  scrollTop: 0,
  onSelectQuestion: null,

  init({ onSelectQuestion } = {}) {
    this.onSelectQuestion = onSelectQuestion;
    let el = document.querySelector('#sidebar');
    if (!el) {
      el = document.createElement('aside');
      el.id = 'sidebar';
      el.className = 'sidebar hidden';
      el.setAttribute('aria-label', 'Danh sách câu hỏi');
      document.body.prepend(el);
    }
    this.el = el;

    this.el.addEventListener('scroll', () => {
      if (!this.el.classList.contains('hidden')) {
        this.scrollTop = this.el.scrollTop;
        if (state.session) {
          state.session.sidebarScroll = this.scrollTop;
        }
      }
    }, { passive: true });

    this.el.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button || !state.session) return;

      if (button.dataset.action === 'menu') {
        this.toggleMobileMenu();
        return;
      }

      if (button.dataset.go !== undefined) {
        event.preventDefault();
        const nextIndex = Number(button.dataset.go);
        if (typeof this.onSelectQuestion === 'function') {
          this.onSelectQuestion(nextIndex);
        }
      }
    });
  },

  mount(session) {
    if (!this.el || !session) return;
    this.el.classList.remove('hidden');

    const sessionKey = `${session.id || session.examId}-${session.questions.length}`;
    if (this.mountedSessionKey === sessionKey && this.buttons.length === session.questions.length) {
      const lockedScroll = this.el.scrollTop || this.scrollTop;
      this.syncAllStatuses(session);
      this.restoreScroll(lockedScroll);
      return;
    }

    this.mountedSessionKey = sessionKey;
    this.el.innerHTML = `
      <div class="side-head">
        <div>
          <div class="side-title">${esc(session.title)}</div>
          <div class="side-meta">${session.questions.length} câu · ${session.mode === 'study' ? 'Ôn tập' : 'Thi thử'}</div>
        </div>
        <button type="button" class="icon-btn mobile-menu" data-action="menu">×</button>
      </div>
      <div class="legend">
        <span><i class="answered"></i>Đã trả lời</span>
        <span><i class="partial"></i>Làm dở</span>
        <span><i></i>Chưa làm</span>
        <span><i class="flagged"></i>Xem lại</span>
      </div>
      <div class="question-grid">${session.questions.map((item, i) => {
        const isAns = isQuestionAnswered(item, session.answers[item.id]);
        const isPart = isQuestionPartiallyAnswered(item, session.answers[item.id]);
        return `<button type="button" class="q-num ${isAns ? 'answered' : ''} ${isPart ? 'partial' : ''} ${session.flags[item.id] ? 'flagged' : ''} ${i === session.current ? 'current' : ''}" data-go="${i}" aria-label="Câu ${i + 1}">${i + 1}</button>`;
      }).join('')}</div>`;

    this.buttons = Array.from(this.el.querySelectorAll('.q-num'));

    const initialScroll = typeof session.sidebarScroll === 'number' ? session.sidebarScroll : 0;
    this.restoreScroll(initialScroll);
  },

  unmount() {
    if (!this.el) return;
    this.el.classList.add('hidden');
    this.el.classList.remove('open');
    this.el.innerHTML = '';
    this.mountedSessionKey = null;
    this.buttons = [];
    this.scrollTop = 0;
  },

  toggleMobileMenu() {
    this.el?.classList.toggle('open');
  },

  setActiveQuestion(prevIndex, nextIndex) {
    if (!this.el) return;
    const lockedScroll = this.el.scrollTop;
    if (this.buttons[prevIndex]) {
      this.buttons[prevIndex].classList.remove('current');
    }
    if (this.buttons[nextIndex]) {
      this.buttons[nextIndex].classList.add('current');
    }
    this.restoreScroll(lockedScroll);
  },

  updateQuestionStatus(index, session = state.session) {
    if (!this.el) return;
    const lockedScroll = this.el.scrollTop;
    const btn = this.buttons[index];
    const item = session?.questions[index];
    if (!btn || !item) return;
    const ans = session.answers[item.id];
    btn.classList.toggle('answered', isQuestionAnswered(item, ans));
    btn.classList.toggle('partial', isQuestionPartiallyAnswered(item, ans));
    btn.classList.toggle('flagged', Boolean(session.flags[item.id]));
    this.restoreScroll(lockedScroll);
  },

  syncAllStatuses(session = state.session) {
    if (!session || !this.el) return;
    const lockedScroll = this.el.scrollTop;
    session.questions.forEach((item, i) => {
      const btn = this.buttons[i];
      if (!btn) return;
      const ans = session.answers[item.id];
      btn.classList.toggle('answered', isQuestionAnswered(item, ans));
      btn.classList.toggle('partial', isQuestionPartiallyAnswered(item, ans));
      btn.classList.toggle('flagged', Boolean(session.flags[item.id]));
      btn.classList.toggle('current', i === session.current);
    });
    this.restoreScroll(lockedScroll);
  },

  restoreScroll(targetScroll) {
    if (!this.el) return;
    this.scrollTop = targetScroll;
    this.el.scrollTop = targetScroll;
    if (state.session) {
      state.session.sidebarScroll = targetScroll;
    }
    requestAnimationFrame(() => {
      if (this.el && !this.el.classList.contains('hidden')) {
        this.el.scrollTop = targetScroll;
      }
    });
  }
};
