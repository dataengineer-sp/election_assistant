/* ── Election Assistant — script.js ── */
'use strict';

/* ─── DATA ─── */
const stages = [
    {
        id: 0, label: "Registration", icon: "📋",
        color: "var(--blue-50)", accent: "var(--blue-700)",
        title: "Voter registration",
        subtitle: "The essential first step to participating in democracy",
        stats: [
            { label: "Global avg. registration rate", val: "~72%" },
            { label: "Typical deadline before election", val: "30–90 days" }
        ],
        steps: [
            { title: "Check your eligibility", note: "Must be a citizen, meet the minimum age (18 in most countries), and be a legal resident of the constituency." },
            { title: "Locate your registration authority", note: "Usually your local election commission, municipal office, or national electoral body. Many offer online portals." },
            { title: "Submit required documents", note: "Typically: proof of identity (passport/national ID), proof of address, and a completed registration form." },
            { title: "Receive your voter ID or confirmation", note: "Many countries issue a voter card. Keep it safe — you may need it on election day at the polling booth." },
            { title: "Verify your registration", note: "Before election day, check official voter rolls to confirm you are listed correctly at the right address." }
        ],
        timeline: [
            { date: "30–90 days before election", event: "Registration deadline in most countries. Some jurisdictions allow same-day registration." },
            { date: "After deadline", event: "Voter rolls compiled, verified, and published by election authorities." },
            { date: "1–2 weeks before election", event: "Voter ID cards or polling booth assignment letters are mailed to registered voters." }
        ],
        faqs: [
            { q: "What if I miss the registration deadline?", a: "Some countries and states allow late or same-day registration. Contact your local election authority. In many places, missing the deadline means waiting for the next election cycle." },
            { q: "Can I register to vote online?", a: "Many countries now offer secure online voter registration through official government portals. Always use only verified government websites (look for .gov domains)." },
            { q: "What if I move before the election?", a: "You typically need to update your registration with your new address, or you may still be able to vote at your old polling station. Check your local rules immediately after moving." }
        ],
        prompts: ["How do I register to vote in India?", "What documents are needed for voter registration?", "What is the voter registration deadline?"]
    },
    {
        id: 1, label: "Primaries", icon: "🏁",
        color: "var(--green-50)", accent: "var(--green-400)",
        title: "Primary elections",
        subtitle: "How political parties select their candidates",
        stats: [
            { label: "Common primary types", val: "Open & Closed" },
            { label: "Typical primary season", val: "3–6 months" }
        ],
        steps: [
            { title: "Parties announce candidate selection process", note: "Could be a primary election, caucus, party convention, or internal committee vote — varies by country and party rules." },
            { title: "Candidates formally declare their candidacy", note: "Candidates file official paperwork, pay any required deposits, and submit to background eligibility checks." },
            { title: "Primary campaigns begin", note: "Candidates compete within their own party through debates, town halls, rallies, and voter outreach to win the nomination." },
            { title: "Citizens vote in the primary", note: "In open primaries, any registered voter may participate. Closed primaries restrict voting to registered party members only." },
            { title: "Party officially nominates its candidate", note: "The primary winner becomes the party's official nominee, typically confirmed at a national party convention." }
        ],
        timeline: [
            { date: "6–12 months before general", event: "Primary season opens. Candidates file candidacy paperwork and begin campaigns." },
            { date: "3–6 months before general", event: "Primary elections held across regions, states, or constituencies." },
            { date: "1–3 months before general", event: "Party conventions confirm nominees. Running mates announced. Campaign pivots to general election." }
        ],
        faqs: [
            { q: "What is the difference between a primary and a caucus?", a: "A primary is a standard secret-ballot election held at polling stations. A caucus is a public community meeting where voters physically group by candidate preference. Caucuses are more participatory but less accessible." },
            { q: "Do all countries hold primaries?", a: "No. Many countries (like the UK and much of Europe) have parties select candidates internally without a public vote. The United States has the most extensive public primary election system globally." },
            { q: "What happens if a primary is uncontested?", a: "If only one candidate files, they are typically declared the nominee automatically without a formal vote — called an 'uncontested' or 'walkover' primary." }
        ],
        prompts: ["What is an open vs closed primary?", "How are candidates chosen in parliamentary systems?", "What happens at a party convention?"]
    },
    {
        id: 2, label: "Campaigning", icon: "📣",
        color: "var(--amber-50)", accent: "var(--amber-400)",
        title: "The campaign period",
        subtitle: "Candidates make their case to the voting public",
        stats: [
            { label: "US 2020 total campaign spend", val: "$14.4 billion" },
            { label: "Typical campaign duration", val: "3–18 months" }
        ],
        steps: [
            { title: "Form campaign committees and hire staff", note: "Campaign teams manage strategy, communications, fundraising, data analytics, field organizing, and ground operations." },
            { title: "Fundraising and mandatory financial reporting", note: "Campaigns raise money from individual donors, PACs, and party committees. Most democracies require public disclosure of campaign finances." },
            { title: "Develop and publish policy platform", note: "Candidates publish detailed positions — called a manifesto or platform — on key issues like economy, healthcare, education, and foreign policy." },
            { title: "Participate in debates and public appearances", note: "Televised debates, town halls, and rallies allow voters to compare candidates directly and ask questions." },
            { title: "Launch get out the vote (GOTV) efforts", note: "In the final weeks, campaigns mobilize their supporters through canvassing, phone banking, digital advertising, and targeted voter outreach." }
        ],
        timeline: [
            { date: "After primary nomination", event: "General election campaign officially kicks off. Party support machinery activates." },
            { date: "Several weeks before election", event: "Major televised debates held. Political advertising reaches peak intensity." },
            { date: "48–72 hours before polls", event: "Final rallies, canvassing drives, and voter contact pushes. Campaign spending reaches maximum." }
        ],
        faqs: [
            { q: "Are there limits on how much campaigns can spend?", a: "Most democracies have campaign finance laws, though specifics vary widely. The US system involves complex rules around PACs, Super PACs, and dark money. Many countries set strict caps and operate public financing systems." },
            { q: "What is a political manifesto?", a: "A manifesto is an official published document outlining a party's or candidate's policy promises, values, and vision for government. Voters use it to evaluate candidates before voting." },
            { q: "What is a political 'ground game'?", a: "Ground game refers to door-to-door canvassing, phone banking, and community organizing efforts by campaign volunteers to identify and turn out supporters." }
        ],
        prompts: ["How is campaign finance regulated globally?", "What makes an effective political campaign?", "What is the role of political ads in elections?"]
    },
    {
        id: 3, label: "Voting day", icon: "🗳️",
        color: "var(--coral-50)", accent: "var(--coral-400)",
        title: "Election day — casting your vote",
        subtitle: "The moment citizens exercise their democratic right",
        stats: [
            { label: "Global average voter turnout", val: "~66%" },
            { label: "Typical polling station hours", val: "12–14 hours" }
        ],
        steps: [
            { title: "Find your assigned polling station", note: "Check your voter registration card, the official election authority website, or a government app for your exact polling location and booth number." },
            { title: "Bring required identification", note: "Requirements vary significantly. Some places require a government-issued photo ID; others accept utility bills or rely solely on voter rolls." },
            { title: "Check in with poll workers and receive your ballot", note: "Poll workers verify your identity against the voter roll and issue the appropriate ballot for your constituency." },
            { title: "Mark your ballot clearly and correctly", note: "Follow the instructions on the ballot exactly. Mark your chosen candidate(s) clearly. Spoiled or unclear ballots may be invalidated." },
            { title: "Submit your vote", note: "Place your paper ballot into the sealed ballot box, or confirm your selection on an electronic voting machine. Your vote is now cast." }
        ],
        timeline: [
            { date: "Election day — opening", event: "Polling stations open, typically at 7:00 AM. Opening procedures verified by officials and registered observers." },
            { date: "Throughout the day", event: "Voters may cast ballots at any time during polling hours. Queues are managed by poll workers." },
            { date: "Polling station close", event: "Polls close (commonly 6–8 PM). Anyone already in line retains the right to vote before the station closes." }
        ],
        faqs: [
            { q: "What is early voting and absentee voting?", a: "Many countries allow voting before election day at designated early voting centers, or by mail-in/absentee ballot. This improves access for people who cannot vote on election day due to work, health, or travel." },
            { q: "What if I make a mistake on my ballot?", a: "In most systems you can request a fresh 'spoiled' ballot from a poll worker and receive a new one before submitting. Once a ballot has been cast and deposited, it generally cannot be retrieved or changed." },
            { q: "How is the secrecy of my vote protected?", a: "Modern election systems use numbered but separated ballot stubs, privacy booths, and strict chain-of-custody procedures to ensure no one can link your identity to your vote." }
        ],
        prompts: ["How does voting work in India?", "What is the difference between in-person and mail-in voting?", "What accessibility accommodations exist at polling stations?"]
    },
    {
        id: 4, label: "Results", icon: "✅",
        color: "var(--teal-50)", accent: "var(--teal-400)",
        title: "Results and certification",
        subtitle: "Counting the votes, declaring the winner, and the transition of power",
        stats: [
            { label: "Typical official count duration", val: "1–14 days" },
            { label: "Certification deadline (typical)", val: "2–6 weeks" }
        ],
        steps: [
            { title: "Ballot counting begins immediately after polls close", note: "Election officials count ballots — manually, by machine, or a combination. Registered observers from all parties can watch the count." },
            { title: "Preliminary results announced", note: "Unofficial results emerge as counting progresses. Media outlets project winners based on exit polls and partial counts, but these are NOT official." },
            { title: "Provisional and mail-in ballots processed", note: "Ballots received by mail or issued to voters whose registration was questioned (provisional) are verified and counted separately." },
            { title: "Official vote count certified by electoral authority", note: "The electoral commission formally verifies all vote totals, reviews any irregularity reports, and issues a legal certificate of results." },
            { title: "Winner declared — transition of power begins", note: "The certified winner is officially declared. Government transition preparations begin. The winner prepares to assume office on inauguration day." }
        ],
        timeline: [
            { date: "Election night", event: "Preliminary counts begin immediately. Major races often projected within hours based on partial results and exit polling." },
            { date: "Days 1–14 after election", event: "Official ballot counting completed. Provisional, absentee, and overseas ballots fully processed." },
            { date: "Weeks 2–6 after election", event: "Electoral commission certifies final results. Any legal challenges must be filed within defined deadlines." }
        ],
        faqs: [
            { q: "What is an exit poll and how accurate is it?", a: "An exit poll surveys voters leaving polling stations to estimate results before official counts. They can be reasonably accurate for major races but have been significantly wrong in cases of high turnout from unexpected demographic groups." },
            { q: "What happens if election results are disputed?", a: "Candidates may challenge results in court within a specified time window. Election tribunals, high courts, or supreme courts adjudicate disputes. International observers may also issue findings on election integrity." },
            { q: "What is the US Electoral College?", a: "The Electoral College is an indirect system unique to the US where voters elect state-level representatives (electors) who then formally elect the president. Most other democracies use a direct popular vote." }
        ],
        prompts: ["How are election results officially certified?", "What happens if an election result is contested in court?", "How does the US Electoral College work?"]
    }
];

/* ─── STATE ─── */
let activeStage = 0;
let openFaq = null;
let geminiKey = '';
let chatHistory = [];

/**
 * Safely retrieves the stored API key from localStorage.
 * Handles cases where localStorage is unavailable (private browsing, storage blocked).
 * @returns {string} The stored key or empty string.
 */
function loadStoredKey() {
    try {
        return localStorage.getItem('gemini_key') || '';
    } catch (e) {
        console.warn('localStorage unavailable:', e.message);
        return '';
    }
}

/**
 * Safely persists the API key to localStorage.
 * @param {string} key
 */
function persistKey(key) {
    try {
        localStorage.setItem('gemini_key', key);
    } catch (e) {
        console.warn('Could not persist API key:', e.message);
    }
}

/**
 * Sanitizes a string for safe insertion into HTML text content (XSS prevention).
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

/* ─── RENDER: PROGRESS BAR ─── */
function renderProgress() {
    const track = document.getElementById('progressTrack');
    if (!track) return;
    track.setAttribute('aria-valuenow', activeStage + 1);
    let html = '';
    stages.forEach((s, i) => {
        const dotCls = i < activeStage ? 'done' : i === activeStage ? 'active' : '';
        const lineCls = i < activeStage ? 'done' : '';
        html += `<div class="pt-step"><div class="pt-dot ${dotCls}" aria-hidden="true">${i < activeStage ? '✓' : i + 1}</div></div>`;
        if (i < stages.length - 1) html += `<div class="pt-line ${lineCls}" aria-hidden="true"></div>`;
    });
    track.innerHTML = html;
}

/* ─── RENDER: STAGE NAV ─── */
function renderNav() {
    const nav = document.getElementById('stageNav');
    if (!nav) return;
    nav.innerHTML = stages.map(s => `
      <button class="stage-btn ${s.id === activeStage ? 'active' : ''}" role="tab"
        aria-selected="${s.id === activeStage}" aria-controls="contentPanel"
        onclick="selectStage(${s.id})" aria-label="Stage ${s.id + 1}: ${s.title}">
        <span class="s-icon" aria-hidden="true">${s.icon}</span>
        <span class="s-num">Stage ${s.id + 1}</span>
        <span class="s-name">${escapeHtml(s.label)}</span>
      </button>`).join('');
}

/* ─── RENDER: CONTENT PANEL ─── */
function renderPanel() {
    const s = stages[activeStage];
    const panel = document.getElementById('contentPanel');
    if (!panel) return;
    openFaq = null;

    panel.innerHTML = `
      <div class="panel-header">
        <div class="panel-icon" style="background:${s.color};" aria-hidden="true">${s.icon}</div>
        <div><h2>${escapeHtml(s.title)}</h2><p>${escapeHtml(s.subtitle)}</p></div>
      </div>
      <div class="panel-body">
        <div class="stats-row" aria-label="Key statistics">
          ${s.stats.map(st => `<div class="stat-card"><div class="stat-label">${escapeHtml(st.label)}</div><div class="stat-val">${escapeHtml(st.val)}</div></div>`).join('')}
        </div>
        <p class="steps-heading">Step-by-step process</p>
        <ol class="steps-list" aria-label="Steps in the ${escapeHtml(s.title)} stage">
          ${s.steps.map((step, i) => `
            <li class="step-item">
              <div class="step-num" aria-hidden="true">${i + 1}</div>
              <div><div class="step-title">${escapeHtml(step.title)}</div><div class="step-note">${escapeHtml(step.note)}</div></div>
            </li>`).join('')}
        </ol>
        <p class="steps-heading">Timeline</p>
        <div class="timeline" aria-label="Timeline for ${escapeHtml(s.title)}">
          ${s.timeline.map(t => `<div class="tl-item"><span class="tl-badge">${escapeHtml(t.date)}</span><span class="tl-text">${escapeHtml(t.event)}</span></div>`).join('')}
        </div>
        <p class="steps-heading">Common questions</p>
        <div class="faq-list" id="faqList">
          ${s.faqs.map((f, i) => `
            <div class="faq-item">
              <button class="faq-q" aria-expanded="false" aria-controls="faqA${i}" id="faqQ${i}" onclick="toggleFaq(${i})">
                ${escapeHtml(f.q)}<span class="faq-chevron" aria-hidden="true">▾</span>
              </button>
              <div class="faq-a" id="faqA${i}" role="region" aria-labelledby="faqQ${i}">${escapeHtml(f.a)}</div>
            </div>`).join('')}
        </div>
        <div class="nav-btns">
          <button class="btn" onclick="selectStage(${activeStage - 1})" ${activeStage === 0 ? 'disabled' : ''} aria-label="Go to previous stage">← Previous</button>
          ${activeStage < stages.length - 1
            ? `<button class="btn primary" onclick="selectStage(${activeStage + 1})" aria-label="Go to next stage: ${stages[activeStage + 1].label}">Next: ${escapeHtml(stages[activeStage + 1].label)} →</button>`
            : `<button class="btn primary" onclick="document.getElementById('ask').scrollIntoView({behavior:'smooth'})" aria-label="Go to AI assistant section">Ask the AI assistant →</button>`}
        </div>
      </div>
      <div class="panel-footer">
        <p class="prompt-label">Suggested questions for the AI assistant</p>
        <div class="prompt-chips" role="list">
          ${s.prompts.map(p => `<button class="prompt-chip" role="listitem" onclick="askFromChip('${p.replace(/'/g, "\\'")}'); document.getElementById('ask').scrollIntoView({behavior:'smooth'})" aria-label="Ask: ${escapeHtml(p)}">${escapeHtml(p)}</button>`).join('')}
        </div>
      </div>`;
}

/* ─── STAGE SELECTION ─── */
function selectStage(id) {
    if (typeof id !== 'number' || id < 0 || id >= stages.length) return;
    activeStage = id;
    renderProgress();
    renderNav();
    renderPanel();
    const guideSection = document.getElementById('guide');
    if (guideSection) guideSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── FAQ TOGGLE ─── */
function toggleFaq(i) {
    const btn = document.getElementById('faqQ' + i);
    const ans = document.getElementById('faqA' + i);
    if (!btn || !ans) return;
    const isOpen = openFaq === i;
    if (openFaq !== null) {
        const prevBtn = document.getElementById('faqQ' + openFaq);
        const prevAns = document.getElementById('faqA' + openFaq);
        if (prevBtn) prevBtn.setAttribute('aria-expanded', 'false');
        if (prevAns) prevAns.classList.remove('open');
    }
    if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        ans.classList.add('open');
        openFaq = i;
    } else {
        openFaq = null;
    }
}

/* ─── API KEY ─── */
function saveApiKey(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('apiKeyInput');
    if (!input) return;
    const key = input.value.trim();

    // Validate key format (Google API keys start with "AIza")
    if (!key) { addBotMessage('⚠️ Please enter a valid API key.'); return; }
    if (!key.startsWith('AIza')) { addBotMessage('⚠️ That doesn\'t look like a valid Google API key. Keys should start with "AIza".'); return; }

    geminiKey = key;
    persistKey(key);
    // Clear the input value for security after saving
    input.value = '';
    const bar = document.getElementById('apiKeyBar');
    if (bar) bar.style.display = 'none';
    addBotMessage("✅ API key saved! I'm ready to answer your election questions. What would you like to know?");
}

/* ─── CHAT HELPERS ─── */
function addBotMessage(text) {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'msg bot';
    div.setAttribute('role', 'article');
    div.setAttribute('aria-label', 'Assistant response');
    div.innerHTML = `<div class="msg-avatar" aria-hidden="true">🤖</div><div class="msg-bubble">${text}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    chatHistory.push({ role: 'assistant', content: text });
}

function addUserMessage(text) {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'msg user';
    div.setAttribute('role', 'article');
    div.setAttribute('aria-label', 'Your message');
    div.innerHTML = `<div class="msg-avatar" aria-hidden="true">You</div><div class="msg-bubble">${escapeHtml(text)}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    chatHistory.push({ role: 'user', content: text });
}

function showTyping() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'msg bot'; div.id = 'typingIndicator';
    div.setAttribute('aria-label', 'Assistant is typing');
    div.innerHTML = `<div class="msg-avatar" aria-hidden="true">🤖</div><div class="msg-bubble"><div class="msg-typing"><span></span><span></span><span></span></div></div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function hideTyping() {
    const t = document.getElementById('typingIndicator');
    if (t) t.remove();
}

/* ─── SEND MESSAGE ─── */
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    if (!input || !sendBtn) return;

    const text = input.value.trim();
    if (!text) return;

    // Enforce message length limit to prevent abuse
    if (text.length > 1000) {
        addBotMessage('⚠️ Your message is too long. Please keep questions under 1000 characters.');
        return;
    }

    addUserMessage(text);
    input.value = '';
    input.style.height = 'auto';

    if (!geminiKey) {
        addBotMessage("Please enter your Google Gemini API key above to enable AI responses.");
        return;
    }

    sendBtn.disabled = true;
    showTyping();

    // Abort controller for request timeout handling
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
        const systemInstruction = `You are ElectED, a friendly and authoritative election education assistant. You help citizens understand the election process, voter registration, campaigning, voting procedures, and how results are certified. You are non-partisan and focus purely on civic education. Keep answers clear, concise, and accessible. Use simple language. Always encourage civic participation. If asked about a specific country's elections, tailor your response to that context. Never discuss partisan topics or express political opinions.`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${encodeURIComponent(geminiKey)}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ role: 'user', parts: [{ text: systemInstruction + '\n\nUser question: ' + text }] }],
                    generationConfig: { maxOutputTokens: 512, temperature: 0.4 }
                }),
                signal: controller.signal
            }
        );

        clearTimeout(timeout);

        if (response.status === 400) {
            throw new Error('Invalid request. Please check your API key format.');
        } else if (response.status === 401 || response.status === 403) {
            throw new Error('API key is invalid or lacks permission. Please verify your key at aistudio.google.com.');
        } else if (response.status === 429) {
            throw new Error('Rate limit reached. Please wait a moment and try again.');
        } else if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `Server error (${response.status}). Please try again.`);
        }

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!reply) throw new Error("The assistant returned an empty response. Please try rephrasing your question.");
        hideTyping();
        addBotMessage(escapeHtml(reply).replace(/\n/g, '<br/>'));

    } catch (err) {
        clearTimeout(timeout);
        hideTyping();
        if (err.name === 'AbortError') {
            addBotMessage('⏱️ The request timed out. Please check your connection and try again.');
        } else {
            addBotMessage(`⚠️ ${escapeHtml(err.message)}`);
        }
    } finally {
        sendBtn.disabled = false;
    }
}

function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
}

function askFromChip(text) {
    const input = document.getElementById('chatInput');
    if (input) input.value = text;
    sendMessage();
}

/* ─── SCROLLSPY ─── */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= (section.offsetTop - 150)) current = section.getAttribute('id');
        });
        if (current) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
            });
        }
    }, { passive: true });
}

/* ─── INIT ─── */
function init() {
    geminiKey = loadStoredKey();
    renderProgress();
    renderNav();
    renderPanel();
    initScrollSpy();

    if (geminiKey) {
        const bar = document.getElementById('apiKeyBar');
        if (bar) bar.style.display = 'none';
        addBotMessage("Welcome to ElectED! I'm your election education assistant, powered by Google Gemini. Ask me anything about voter registration, how to vote, how votes are counted, or how elections work around the world.");
    } else {
        addBotMessage("Welcome to ElectED! To ask me election questions, please enter your free Google Gemini API key above. You can get one at aistudio.google.com");
    }

    const textarea = document.getElementById('chatInput');
    if (textarea) {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 120) + 'px';
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
