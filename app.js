import { DECODING_HACKS, ROSETTA_SETS, WINNY_GLOSSARY } from './data/glossary.js';
import { CHAUCER_THEMES, ANCHOR_PASSAGES, NARRATIVE_BEATS } from './data/chaucer.js';
import { POEM_CLUSTERS, POEMS_DATA } from './data/poems.js';
import { CHAUCER_PAST_QUESTIONS, SECTION_A_SCENARIOS } from './data/pastpapers.js';

// Conditional polyfill for Popover API (modern-web-guidance: content-first-noise-reduction)
if (!Object.hasOwn(HTMLElement.prototype, 'popover')) {
  import('https://unpkg.com/@oddbird/popover-polyfill@latest/dist/popover.min.js');
}

// Fallback for scroll-state sticky header hiding where unsupported
if (!CSS.supports('container-type', 'scroll-state')) {
  const bar = document.querySelector('.top-bar');
  let lastY = scrollY;
  addEventListener('scroll', () => {
    const y = Math.max(0, Math.min(scrollY, document.documentElement.scrollHeight - innerHeight));
    if (y === lastY) return;
    bar?.classList.toggle('is-hidden', y > lastY && y > bar.offsetHeight);
    lastY = y;
  }, { passive: true });
}

const STORAGE_KEY = 'edexcel_9et0_03_sprint_v1';

const ROADMAP_BLOCKS = [
  {
    id: 'block-1',
    time: 'Block 1 • 12 min',
    title: 'Middle English Rosetta Stone (5 Hacks + 40 Words)',
    desc: 'Crack Chaucer’s power verbs, 3 meanings of "but", stacked negatives, and faux-friends so any printed extract makes sense.',
    targetTab: 'tab-rosetta'
  },
  {
    id: 'block-2',
    time: 'Block 2 • 33 min',
    title: '10 Universal Chaucer Anchor Passages',
    desc: 'Read in Tap-to-Gloss or Side-by-Side mode and lock in 2–3 Kill-Shot quotes per passage with exact Winny page refs.',
    targetTab: 'tab-chaucer'
  },
  {
    id: 'block-3',
    time: 'Block 3 • 15 min',
    title: '12-Beat Plot Map + 2017–2025 Past-Paper Drills',
    desc: 'Practice instantly pairing any printed extract with your strongest 2nd extract & AO3 angle.',
    targetTab: 'tab-drills'
  },
  {
    id: 'block-4',
    time: 'Block 4 • 30 min',
    title: 'Poems of the Decade Top-14 Priority Sprint (92.1% Hit Rate)',
    desc: 'Master the 10-Second Unlock + 3 AO2 moves + Unseen comparison hooks for the 14 high-yield poems (+ 6 morning backups).',
    targetTab: 'tab-poems'
  }
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore storage errors */ }
  return {
    theme: 'dark',
    activeTab: 'tab-sprint',
    roadmapDone: {},
    rosettaCleared: {},
    passagesMastered: {},
    poemsMastered: {},
    drillsSolved: {},
    readingMode: 'tap',
    chaucerTheme: 'All',
    poemCluster: 'All',
    poemRecallMode: false,
    timerRemainingSec: 90 * 60
  };
}

const state = loadState();
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch { /* ignore storage errors */ }
}

// Build fast case-insensitive lookup from Winny Glossary
const glossaryLookup = new Map();
for (const entry of WINNY_GLOSSARY) {
  const parts = entry.w.split('/').map(s => s.trim().toLowerCase());
  for (const p of parts) glossaryLookup.set(p, entry.d);
}

// ===================== THEME & TIMER =====================
const htmlEl = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme() {
  htmlEl.setAttribute('data-theme', state.theme);
  themeToggle.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  saveState();
});
applyTheme();

let timerInterval = null;
const timerBtn = document.getElementById('timer-toggle');
const timerDisplay = document.getElementById('timer-display');

function renderTimer() {
  const mins = Math.floor(state.timerRemainingSec / 60);
  const secs = state.timerRemainingSec % 60;
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
renderTimer();

timerBtn.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerBtn.classList.remove('running');
  } else {
    timerBtn.classList.add('running');
    timerInterval = setInterval(() => {
      if (state.timerRemainingSec > 0) {
        state.timerRemainingSec -= 1;
        renderTimer();
        if (state.timerRemainingSec % 10 === 0) saveState();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        timerBtn.classList.remove('running');
      }
    }, 1000);
  }
});

// ===================== TAB NAVIGATION =====================
const navBtns = [...document.querySelectorAll('.nav-btn')];
const tabPanels = [...document.querySelectorAll('.tab-panel')];

function switchTab(tabId) {
  state.activeTab = tabId;
  saveState();
  for (const panel of tabPanels) {
    const isMatch = panel.id === tabId;
    panel.hidden = !isMatch;
    panel.classList.toggle('active', isMatch);
  }
  for (const btn of navBtns) {
    const isMatch = btn.dataset.tab === tabId;
    btn.classList.toggle('active', isMatch);
    if (isMatch) btn.setAttribute('aria-current', 'page');
    else btn.removeAttribute('aria-current');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
}

for (const btn of navBtns) {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
}

// ===================== GLOBAL READINESS & METRICS =====================
function calcPoemHitProb(k) {
  if (k <= 0) return 0;
  if (k >= 19) return 100;
  const probMissBoth = ((20 - k) * (19 - k)) / (20 * 19);
  return Math.round((1 - probMissBoth) * 1000) / 10;
}

function updateMetrics() {
  const rosettaCount = Object.keys(state.rosettaCleared).length;
  const passagesCount = Object.keys(state.passagesMastered).length;
  const poemsCount = Object.keys(state.poemsMastered).length;
  const drillsCount = Object.keys(state.drillsSolved).length;
  const blocksCount = Object.keys(state.roadmapDone).length;

  const poemProb = calcPoemHitProb(poemsCount);

  // Weighted readiness score: Chaucer comprehension (55%) + Poems hit prob (35%) + Past papers (10%)
  const chaucerScore = ((rosettaCount / 40) * 0.4 + (passagesCount / 10) * 0.6) * 55;
  const poemScore = (poemProb / 100) * 35;
  const drillScore = (drillsCount / CHAUCER_PAST_QUESTIONS.length) * 10;
  const readiness = Math.min(100, Math.round(chaucerScore + poemScore + drillScore));

  document.getElementById('readiness-label').textContent = `Readiness: ${readiness}%`;
  document.getElementById('readiness-fill').style.width = `${readiness}%`;
  document.getElementById('readiness-bar').setAttribute('aria-valuenow', String(readiness));

  const rosettaBadge = document.getElementById('rosetta-score-badge');
  if (rosettaBadge) rosettaBadge.textContent = `${rosettaCount} / 40 Cleared`;

  const probValue = document.getElementById('poem-prob-value');
  if (probValue) probValue.textContent = `${poemProb.toFixed(1)}%`;

  const tier1Mastered = POEMS_DATA.filter(p => p.tier === 1 && state.poemsMastered[p.id]).length;
  const tier1Badge = document.getElementById('tier1-count');
  if (tier1Badge) tier1Badge.textContent = `${tier1Mastered} / 14`;

  const drillBadge = document.getElementById('drill-score-badge');
  if (drillBadge) drillBadge.textContent = `${drillsCount} / ${CHAUCER_PAST_QUESTIONS.length} Nailed`;

  const metricsGrid = document.getElementById('hero-metrics');
  if (metricsGrid) {
    metricsGrid.innerHTML = `
      <div class="metric-box"><span class="metric-val">${rosettaCount}/40</span><span class="metric-lbl">Rosetta Words Cleared</span></div>
      <div class="metric-box"><span class="metric-val">${passagesCount}/10</span><span class="metric-lbl">Chaucer Anchors Ready</span></div>
      <div class="metric-box"><span class="metric-val">${poemProb.toFixed(1)}%</span><span class="metric-lbl">Section A ≥1 Poem Hit</span></div>
      <div class="metric-box"><span class="metric-val">${drillsCount}/14</span><span class="metric-lbl">Past Papers Matched</span></div>
      <div class="metric-box"><span class="metric-val">${blocksCount}/4</span><span class="metric-lbl">Sprint Blocks Done</span></div>
    `;
  }
}

// ===================== TAB 1: SPRINT ROADMAP =====================
function renderRoadmap() {
  const list = document.getElementById('roadmap-list');
  list.innerHTML = '';
  for (const block of ROADMAP_BLOCKS) {
    const done = Boolean(state.roadmapDone[block.id]);
    const item = document.createElement('div');
    item.className = `roadmap-item${done ? ' done' : ''}`;
    item.innerHTML = `
      <label class="roadmap-check-label">
        <input type="checkbox" ${done ? 'checked' : ''} data-block="${block.id}">
        <span>
          <span class="roadmap-time">${block.time}</span>
          <span class="roadmap-title">${block.title}</span>
          <span class="roadmap-desc">${block.desc}</span>
        </span>
      </label>
      <button type="button" class="jump-btn" data-jump="${block.targetTab}">Open →</button>
    `;
    list.appendChild(item);
  }

  list.addEventListener('change', (e) => {
    const cb = e.target.closest('input[data-block]');
    if (!cb) return;
    if (cb.checked) state.roadmapDone[cb.dataset.block] = true;
    else delete state.roadmapDone[cb.dataset.block];
    cb.closest('.roadmap-item').classList.toggle('done', cb.checked);
    saveState();
    updateMetrics();
  });

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-jump]');
    if (btn) switchTab(btn.dataset.jump);
  });
}

// ===================== TAB 2: ROSETTA STONE & FLASHCARDS =====================
function renderHacks() {
  const grid = document.getElementById('hacks-grid');
  grid.innerHTML = DECODING_HACKS.map(hack => `
    <article class="hack-card">
      <div class="hack-badge">${hack.badge}</div>
      <h3>${hack.title}</h3>
      <p class="hack-rule">${hack.rule}</p>
      <div class="hack-rows">
        ${hack.items.map(it => `
          <div class="hack-row">
            <div><span class="hack-me">${it.me}</span> → <strong>${it.mod}</strong></div>
            <div class="hack-ex">${it.ex}</div>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

let activeSetIdx = 0;
let cardQueue = [];
let answerVisible = false;

function initSetQueue(idx) {
  activeSetIdx = idx;
  const set = ROSETTA_SETS[idx];
  const unmastered = set.cards.filter(c => !state.rosettaCleared[`${set.id}:${c.word}`]);
  cardQueue = unmastered.length > 0 ? [...unmastered] : [...set.cards];
  answerVisible = false;
  renderRosettaTabs();
  renderFlashcard();
}

function renderRosettaTabs() {
  const tabs = document.getElementById('rosetta-set-tabs');
  tabs.innerHTML = ROSETTA_SETS.map((s, i) => {
    const clearedInSet = s.cards.filter(c => state.rosettaCleared[`${s.id}:${c.word}`]).length;
    return `<button type="button" class="chip-btn${i === activeSetIdx ? ' active' : ''}" role="tab" aria-selected="${i === activeSetIdx}" data-set="${i}">${s.title.split(':')[0]} (${clearedInSet}/${s.cards.length})</button>`;
  }).join('');
}

function renderFlashcard() {
  const stage = document.getElementById('flashcard-stage');
  const set = ROSETTA_SETS[activeSetIdx];
  const card = cardQueue[0];
  if (!card) {
    stage.innerHTML = `<p>Set complete! Pick another set above or reset to drill again.</p>`;
    return;
  }
  const key = `${set.id}:${card.word}`;
  const clearedCount = set.cards.filter(c => state.rosettaCleared[`${set.id}:${c.word}`]).length;

  stage.innerHTML = `
    <div>
      <div class="flashcard-meta">
        <span>${set.title}</span>
        <span>Remaining in queue: ${cardQueue.length} • Cleared: ${clearedCount}/${set.cards.length}</span>
      </div>
      <div class="flashcard-word">${card.word}</div>
      <p class="flashcard-snippet">${card.snippet}</p>
      ${answerVisible ? `
        <div class="flashcard-answer">
          <p class="flashcard-meaning">${card.meaning}</p>
          <p class="flashcard-nuance">${card.nuance}</p>
        </div>
      ` : ''}
    </div>
    <div class="flashcard-actions">
      ${!answerVisible ? `
        <button type="button" class="action-btn primary" id="reveal-card-btn">Reveal Meaning</button>
      ` : `
        <button type="button" class="action-btn warn" id="drill-again-btn">Drill Again (Re-queue)</button>
        <button type="button" class="action-btn success" id="got-it-btn">${state.rosettaCleared[key] ? 'Next Card →' : 'Got It ✓'}</button>
      `}
    </div>
  `;
}

document.getElementById('rosetta-set-tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-set]');
  if (btn) initSetQueue(Number(btn.dataset.set));
});

document.getElementById('flashcard-stage').addEventListener('click', (e) => {
  const set = ROSETTA_SETS[activeSetIdx];
  if (e.target.id === 'reveal-card-btn') {
    answerVisible = true;
    renderFlashcard();
  } else if (e.target.id === 'got-it-btn') {
    const card = cardQueue.shift();
    if (card) state.rosettaCleared[`${set.id}:${card.word}`] = true;
    if (cardQueue.length === 0) cardQueue = [...set.cards];
    answerVisible = false;
    saveState();
    updateMetrics();
    renderRosettaTabs();
    renderFlashcard();
  } else if (e.target.id === 'drill-again-btn') {
    const card = cardQueue.shift();
    if (card) {
      delete state.rosettaCleared[`${set.id}:${card.word}`];
      cardQueue.push(card);
    }
    answerVisible = false;
    saveState();
    updateMetrics();
    renderRosettaTabs();
    renderFlashcard();
  }
});

// ===================== TAB 3: CHAUCER ANCHOR PASSAGES =====================
function renderChaucerFilters() {
  const box = document.getElementById('chaucer-theme-filters');
  box.innerHTML = CHAUCER_THEMES.map(theme => `
    <button type="button" class="chip-btn${state.chaucerTheme === theme ? ' active' : ''}" data-ctheme="${theme}">${theme}</button>
  `).join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function tokenizeMeLine(text, passageGlosses) {
  if (state.readingMode === 'exam') return escapeHtml(text);

  // Split preserving whitespace and punctuation while matching alphabetic/hyphenated words
  return text.split(/([A-Za-z’'-]+)/).map(part => {
    if (!/^[A-Za-z’'-]+$/.test(part)) return escapeHtml(part);
    const clean = part.toLowerCase().replace(/^['’]+|['’]+$/g, '');
    const gloss = passageGlosses[clean] || glossaryLookup.get(clean);
    if (!gloss) return escapeHtml(part);
    return `<button type="button" class="gloss-word" data-word="${escapeHtml(part)}" data-gloss="${escapeHtml(gloss)}">${escapeHtml(part)}</button>`;
  }).join('');
}

function renderPassages() {
  const list = document.getElementById('passages-list');
  const filtered = state.chaucerTheme === 'All'
    ? ANCHOR_PASSAGES
    : ANCHOR_PASSAGES.filter(p => p.themes.includes(state.chaucerTheme));

  list.innerHTML = '';
  for (const p of filtered) {
    const mastered = Boolean(state.passagesMastered[p.id]);
    const details = document.createElement('details');
    if (mastered) details.classList.add('mastered');
    if (filtered.length <= 3) details.open = true;

    const stanzasHtml = p.stanzas.map(st => `
      <div class="stanza-block${state.readingMode === 'side' ? ' side-mode' : ''}">
        <div>
          <div class="stanza-range">${st.range}</div>
          <div class="me-verse">${tokenizeMeLine(st.me, p.glosses)}</div>
        </div>
        <div class="mod-prose" ${state.readingMode === 'side' ? '' : 'hidden'}>
          <strong>Plain English:</strong> ${escapeHtml(st.mod)}
        </div>
        ${state.readingMode !== 'side' ? `<button type="button" class="jump-btn peek-mod-btn">Peek Modern English</button>` : ''}
      </div>
    `).join('');

    const quotesHtml = p.quotes.map(q => `
      <div class="quote-pill">
        <div class="quote-me">${escapeHtml(q.quote)}</div>
        <div class="quote-mean"><strong>Meaning:</strong> ${escapeHtml(q.meaning)}</div>
        <div class="quote-ao"><strong>AO2:</strong> ${escapeHtml(q.ao2)} • <strong>AO3:</strong> ${escapeHtml(q.ao3)}</div>
      </div>
    `).join('');

    details.innerHTML = `
      <summary>
        <div class="summary-row">
          <span class="summary-title">${p.code}: ${escapeHtml(p.title)}</span>
          <span class="summary-meta">${p.section} ${p.lines} • ${p.winnyPages} ${mastered ? '• ✓ Ready' : ''}</span>
        </div>
      </summary>
      <div class="passage-body">
        <p class="passage-summary">${escapeHtml(p.summary)}</p>
        ${stanzasHtml}
        <div>
          <h3 class="poem-subhead">3 Kill-Shot Exam Quotes</h3>
          <div class="quotes-grid">${quotesHtml}</div>
        </div>
        <label class="master-toggle">
          <input type="checkbox" ${mastered ? 'checked' : ''} data-pmaster="${p.id}">
          <span>Mark Passage Ready for Tomorrow</span>
        </label>
      </div>
    `;
    list.appendChild(details);
  }
}

function renderBeats() {
  const acc = document.getElementById('beats-accordion');
  acc.innerHTML = NARRATIVE_BEATS.map(b => `
    <details>
      <summary>
        <div class="summary-row">
          <span class="summary-title">${escapeHtml(b.beat)}</span>
          <span class="summary-meta">${escapeHtml(b.lines)} • ${escapeHtml(b.pages)}</span>
        </div>
      </summary>
      <div class="beat-body">
        <p class="passage-summary">${escapeHtml(b.summary)}</p>
      </div>
    </details>
  `).join('');
}

document.querySelectorAll('[data-reading-mode]').forEach(btn => {
  btn.addEventListener('click', () => {
    state.readingMode = btn.dataset.readingMode;
    document.querySelectorAll('[data-reading-mode]').forEach(b => b.classList.toggle('active', b === btn));
    saveState();
    renderPassages();
  });
});

document.getElementById('chaucer-theme-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-ctheme]');
  if (!btn) return;
  state.chaucerTheme = btn.dataset.ctheme;
  saveState();
  renderChaucerFilters();
  renderPassages();
});

document.getElementById('passages-list').addEventListener('click', (e) => {
  const wordBtn = e.target.closest('.gloss-word');
  if (wordBtn) {
    document.querySelectorAll('.gloss-word.active').forEach(el => el.classList.remove('active'));
    wordBtn.classList.add('active');
    const banner = document.getElementById('live-gloss-banner');
    banner.innerHTML = `<span><strong style="color:var(--accent)">${escapeHtml(wordBtn.dataset.word)}</strong> → ${escapeHtml(wordBtn.dataset.gloss)}</span>`;
    return;
  }
  const peekBtn = e.target.closest('.peek-mod-btn');
  if (peekBtn) {
    const prose = peekBtn.parentElement.querySelector('.mod-prose');
    if (prose) {
      const showing = !prose.hidden;
      prose.hidden = showing;
      peekBtn.textContent = showing ? 'Peek Modern English' : 'Hide Modern English';
    }
  }
});

document.getElementById('passages-list').addEventListener('change', (e) => {
  const cb = e.target.closest('input[data-pmaster]');
  if (!cb) return;
  if (cb.checked) state.passagesMastered[cb.dataset.pmaster] = true;
  else delete state.passagesMastered[cb.dataset.pmaster];
  cb.closest('details').classList.toggle('mastered', cb.checked);
  saveState();
  updateMetrics();
});

// ===================== TAB 4: POEMS OF THE DECADE =====================
function renderPoemFilters() {
  const box = document.getElementById('poem-cluster-filters');
  box.innerHTML = POEM_CLUSTERS.map(cl => `
    <button type="button" class="chip-btn${state.poemCluster === cl ? ' active' : ''}" data-pcluster="${cl}">${cl}</button>
  `).join('');
}

function createPoemCard(poem) {
  const mastered = Boolean(state.poemsMastered[poem.id]);
  const card = document.createElement('article');
  card.className = `poem-card${mastered ? ' mastered' : ''}`;
  card.innerHTML = `
    <div class="poem-head">
      <div>
        <h3 class="poem-title">${escapeHtml(poem.title)}</h3>
        <div class="poem-meta">${escapeHtml(poem.poet)}</div>
      </div>
      <span class="poem-page">p. ${poem.page}</span>
    </div>
    <div class="poem-body${state.poemRecallMode ? ' hidden-recall' : ''}" title="${state.poemRecallMode ? 'Tap to reveal recall check' : ''}">
      <div class="poem-unlock"><strong>10s Unlock:</strong> ${escapeHtml(poem.unlock)}</div>
      <div class="poem-subhead">3 Killer AO2 Moves</div>
      <ul class="poem-list">
        ${poem.ao2.map(m => `<li><strong>${escapeHtml(m.move)}:</strong> ${escapeHtml(m.detail)}</li>`).join('')}
      </ul>
      <div class="poem-subhead">Unseen Comparison Hooks (AO4)</div>
      <ul class="poem-list">
        ${poem.hooks.map(h => `<li>${escapeHtml(h)}</li>`).join('')}
      </ul>
    </div>
    <div class="poem-foot">
      <label class="master-toggle">
        <input type="checkbox" ${mastered ? 'checked' : ''} data-poem-id="${poem.id}">
        <span>${mastered ? 'Mastered ✓' : 'Mark Mastered'}</span>
      </label>
      <span class="poem-meta">Tier ${poem.tier}</span>
    </div>
  `;
  return card;
}

function renderPoems() {
  const t1Container = document.getElementById('poems-tier1');
  const t2Container = document.getElementById('poems-tier2');
  t1Container.innerHTML = '';
  t2Container.innerHTML = '';

  const filtered = state.poemCluster === 'All'
    ? POEMS_DATA
    : POEMS_DATA.filter(p => p.clusters.includes(state.poemCluster));

  for (const p of filtered) {
    const card = createPoemCard(p);
    if (p.tier === 1) t1Container.appendChild(card);
    else t2Container.appendChild(card);
  }
}

document.getElementById('poem-cluster-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-pcluster]');
  if (!btn) return;
  state.poemCluster = btn.dataset.pcluster;
  saveState();
  renderPoemFilters();
  renderPoems();
});

const studyBtn = document.getElementById('poems-study-btn');
const recallBtn = document.getElementById('poems-recall-btn');

function syncPoemModeBtns() {
  studyBtn.classList.toggle('active', !state.poemRecallMode);
  recallBtn.classList.toggle('active', state.poemRecallMode);
}
syncPoemModeBtns();

studyBtn.addEventListener('click', () => {
  state.poemRecallMode = false;
  syncPoemModeBtns();
  saveState();
  renderPoems();
});
recallBtn.addEventListener('click', () => {
  state.poemRecallMode = true;
  syncPoemModeBtns();
  saveState();
  renderPoems();
});

document.getElementById('tab-poems').addEventListener('click', (e) => {
  const hiddenBody = e.target.closest('.poem-body.hidden-recall');
  if (hiddenBody) hiddenBody.classList.remove('hidden-recall');
});

document.getElementById('tab-poems').addEventListener('change', (e) => {
  const cb = e.target.closest('input[data-poem-id]');
  if (!cb) return;
  if (cb.checked) state.poemsMastered[cb.dataset.poemId] = true;
  else delete state.poemsMastered[cb.dataset.poemId];
  const card = cb.closest('.poem-card');
  card.classList.toggle('mastered', cb.checked);
  cb.nextElementSibling.textContent = cb.checked ? 'Mastered ✓' : 'Mark Mastered';
  saveState();
  updateMetrics();
});

// ===================== TAB 5: PAST PAPER DRILLS =====================
function renderChaucerDrills() {
  const container = document.getElementById('chaucer-drills-list');
  container.innerHTML = '';
  for (const q of CHAUCER_PAST_QUESTIONS) {
    const chosen = state.drillsSolved[q.id];
    const card = document.createElement('article');
    card.className = 'drill-card';
    card.innerHTML = `
      <div class="section-row">
        <span class="card-tag tag-chaucer">${q.year} • ${escapeHtml(q.theme)}</span>
        ${chosen ? `<span class="badge-pill">${chosen === q.bestId || chosen === q.altValidId ? '✓ Strong Pair' : 'Reviewed'}</span>` : ''}
      </div>
      <p class="drill-prompt">${escapeHtml(q.prompt)}</p>
      <div class="drill-extract"><strong>Printed Extract:</strong> ${escapeHtml(q.printedExtractSummary)}</div>
      <div class="mcq-grid">
        ${q.options.map(opt => {
          let cls = 'mcq-btn';
          if (chosen) {
            if (opt.id === q.bestId) cls += ' correct';
            else if (opt.id === chosen && opt.id !== q.altValidId) cls += ' wrong';
          }
          return `<button type="button" class="${cls}" data-qid="${q.id}" data-opt="${opt.id}">${escapeHtml(opt.label)}</button>`;
        }).join('')}
      </div>
      ${chosen ? `
        <div class="blueprint-box">
          <div><strong>Level 5 Thesis:</strong> ${escapeHtml(q.blueprint.thesis)}</div>
          <div><strong>1. Printed Extract:</strong> ${escapeHtml(q.blueprint.printedMove)}</div>
          <div><strong>2. Second Extract:</strong> ${escapeHtml(q.blueprint.secondMove)}</div>
          <div><strong>3. Context:</strong> ${escapeHtml(q.blueprint.ao3)}</div>
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  }
}

document.getElementById('chaucer-drills-list').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-qid]');
  if (!btn) return;
  state.drillsSolved[btn.dataset.qid] = btn.dataset.opt;
  saveState();
  updateMetrics();
  renderChaucerDrills();
});

function renderSectionADrills() {
  const container = document.getElementById('sectiona-drills-list');
  container.innerHTML = SECTION_A_SCENARIOS.map(sc => `
    <details>
      <summary>
        <div class="summary-row">
          <span class="summary-title">${escapeHtml(sc.unseenTitle)}</span>
          <span class="summary-meta">Best Choice: ${escapeHtml(sc[sc.bestChoice === sc.choiceA.id ? 'choiceA' : 'choiceB'].label)}</span>
        </div>
      </summary>
      <div class="beat-body">
        <p class="passage-summary"><strong>Unseen Prompt:</strong> ${escapeHtml(sc.unseenSummary)}</p>
        <p class="passage-summary"><strong>Options on Paper:</strong> ${escapeHtml(sc.choiceA.label)} <em>vs.</em> ${escapeHtml(sc.choiceB.label)}</p>
        <div class="blueprint-box">
          ${sc.plan.map(pt => `<div>${escapeHtml(pt)}</div>`).join('')}
        </div>
      </div>
    </details>
  `).join('');
}

// ===================== SEARCHABLE WINNY GLOSSARY POPOVER =====================
const glossarySearch = document.getElementById('glossary-search');
const glossaryList = document.getElementById('glossary-list');
const glossaryCount = document.getElementById('glossary-count');

function renderGlossary(query = '') {
  const q = query.trim().toLowerCase();
  const matches = q
    ? WINNY_GLOSSARY.filter(item => item.w.toLowerCase().includes(q) || item.d.toLowerCase().includes(q))
    : WINNY_GLOSSARY.slice(0, 60);

  glossaryCount.textContent = q
    ? `Showing ${matches.length} matching entries`
    : `Showing top 60 of ${WINNY_GLOSSARY.length} entries — type to filter all`;

  glossaryList.innerHTML = matches.map(item => `
    <div class="glossary-item">
      <span class="glossary-word">${escapeHtml(item.w)}</span>
      <span class="glossary-def">${escapeHtml(item.d)}</span>
    </div>
  `).join('');
}

glossarySearch.addEventListener('input', (e) => renderGlossary(e.target.value));

// ===================== INITIAL BOOT =====================
renderRoadmap();
renderHacks();
initSetQueue(0);
renderChaucerFilters();
document.querySelectorAll('[data-reading-mode]').forEach(b => b.classList.toggle('active', b.dataset.readingMode === state.readingMode));
renderPassages();
renderBeats();
renderPoemFilters();
renderPoems();
renderChaucerDrills();
renderSectionADrills();
renderGlossary('');
updateMetrics();
switchTab(state.activeTab);
