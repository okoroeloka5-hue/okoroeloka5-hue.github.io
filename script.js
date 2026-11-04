(function () {
  const data = window.PORTFOLIO_CONTENT;
  if (!data) return;

  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

  function renderFlow(items) {
    return `<div class="flow-diagram" aria-label="${escapeHTML(items.join(" then "))}">${items.map((item, i) => `${i ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ''}<span class="flow-node">${escapeHTML(item)}</span>`).join("")}</div>`;
  }

  function renderProject(project) {
    const tags = project.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("");
    const details = project.details.map(([heading, body]) => `<div class="detail-item"><h4>${escapeHTML(heading)}</h4><p>${escapeHTML(body)}</p></div>`).join("");
    const evidence = project.evidence.map(item => `<li>${escapeHTML(item)}</li>`).join("");
    const next = project.next.map(item => `<li>${escapeHTML(item)}</li>`).join("");
    const repo = project.github
      ? `<a class="text-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener">${escapeHTML(project.githubLabel || "View repository")} ↗</a>`
      : `<span class="repo-pending">${escapeHTML(project.githubLabel || "Repository not yet public")}</span>`;
    const doc = project.localDoc ? `<a class="text-link" href="${escapeHTML(project.localDoc)}" target="_blank" rel="noopener">Open corrected engineering notes ↗</a>` : "";
    const video = project.specialVideo ? renderVibeGuardVideo() : "";
    const gallery = project.gallery?.length ? `<div class="project-gallery" aria-label="${escapeHTML(project.title)} image evidence">${project.gallery.map((item, i) => `<a class="project-gallery-item" href="${escapeHTML(item.src)}" target="_blank" rel="noopener"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}" loading="lazy"><span>${escapeHTML(item.caption)}</span></a>`).join("")}</div>` : "";
    return `<article class="project-card" data-category="${escapeHTML(project.category)}" id="project-${escapeHTML(project.id)}">
      <div class="project-card-top"><span class="project-number">PROJECT / ${escapeHTML(project.number)}</span><span class="project-status ${escapeHTML(project.statusClass)}">${escapeHTML(project.status)}</span></div>
      <div class="project-title-row"><div><p class="project-category">${escapeHTML(project.categoryLabel)}</p><h3>${escapeHTML(project.title)}</h3><p class="project-subtitle">${escapeHTML(project.subtitle)}</p></div><span class="project-arrow" aria-hidden="true">↗</span></div>
      <p class="project-summary">${escapeHTML(project.summary)}</p>
      ${gallery}
      ${renderFlow(project.architecture)}
      <div class="project-role"><span>MY ROLE</span><p>${escapeHTML(project.role)}</p></div>
      <div class="tag-row">${tags}</div>
      ${video}
      <details class="project-details"><summary>Explore the engineering detail <span aria-hidden="true">＋</span></summary>
        <div class="details-body"><div class="details-grid">${details}</div>
          <div class="evidence-next"><div><h4>Evidence available</h4><ul>${evidence}</ul></div><div><h4>Next validation steps</h4><ul>${next}</ul></div></div>
          <div class="limitation"><strong>Scope &amp; limitations</strong><p>${escapeHTML(project.limitations)}</p></div>
        </div>
      </details>
      <div class="project-links">${repo}${doc}</div>
    </article>`;
  }

  function renderVibeGuardVideo() {
    const source = data.vibeGuardVideo || "";
    if (source) {
      const isYouTube = /youtube\.com|youtu\.be/.test(source);
      if (isYouTube) {
        const idMatch = source.match(/(?:youtube\.com\/(?:watch\?.*?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
        const embedUrl = idMatch ? `https://www.youtube-nocookie.com/embed/${idMatch[1]}` : source;
        return `<div class="demo-video-block"><div class="demo-video-heading"><span>VIBEGUARD / LIVE DEMONSTRATION</span><span class="demo-available">VIDEO LINK SET</span></div><div class="video-frame"><iframe src="${escapeHTML(embedUrl)}" title="VibeGuard project demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="video-caption">Project demonstration. Edit this caption in script.js to describe the exact setup, test conditions and outputs shown.</p></div>`;
      }
      return `<div class="demo-video-block"><div class="demo-video-heading"><span>VIBEGUARD / LIVE DEMONSTRATION</span><span class="demo-available">VIDEO FILE SET</span></div><div class="video-frame"><video controls preload="metadata" poster="assets/images/video-poster.svg"><source src="${escapeHTML(source)}" type="video/mp4">Your browser does not support HTML video.</video></div><p class="video-caption">Project demonstration. Describe the setup and what the video actually shows in this caption before publishing.</p></div>`;
    }
    return `<div class="demo-video-block demo-video-missing"><div class="demo-video-heading"><span>VIBEGUARD / DEMO VIDEO</span><span class="demo-pending">VIDEO SLOT READY</span></div><div class="video-placeholder"><div class="play-symbol">▶</div><div><strong>Add the VibeGuard demo recording here</strong><p>No demo video file or direct video URL was included in the supplied materials for this build. The player will activate when a video path is added to <code>content.js</code>.</p></div></div><p class="video-caption">Recommended: show the Proteus sensor input, STM32 feature values, UART stream and Python dashboard in one continuous recording. State clearly that the sensor and acquisition limits are simulated.</p></div>`;
  }

  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = data.projects.map(renderProject).join("");

  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const searchInput = document.getElementById("project-search");
  const projectCount = document.getElementById("project-count");
  let activeFilter = "all";
  function applyProjectFilters() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const cards = [...document.querySelectorAll(".project-card")];
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
      const queryMatch = !query || card.textContent.toLowerCase().includes(query);
      const show = categoryMatch && queryMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    if (projectCount) projectCount.textContent = `${String(visible).padStart(2,"0")} / 05 PROJECTS VISIBLE`;
  }
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach(b => {
        const active = b === button;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      applyProjectFilters();
    });
  });
  searchInput?.addEventListener("input", applyProjectFilters);
  applyProjectFilters();

  const expandAll = document.getElementById("expand-all");
  expandAll?.addEventListener("click", () => {
    const details = [...document.querySelectorAll(".project-details")];
    const shouldOpen = expandAll.getAttribute("aria-pressed") !== "true";
    details.forEach(item => { item.open = shouldOpen; });
    expandAll.setAttribute("aria-pressed", String(shouldOpen));
    expandAll.textContent = shouldOpen ? "COLLAPSE ALL −" : "EXPAND ALL +";
  });

  // The method console is a small interactive explanation of the portfolio's
  // central research thread. Its copy is intentionally editable here.
  const methodStages = {
    measure: {
      stage: "STAGE 01 / MEASUREMENT",
      heading: "Capture the world\nwithout losing its meaning.",
      body: "Every useful decision begins with a trustworthy input. I pay attention to sensor interfaces, analogue conditioning, conversion, sampling assumptions and the boundary between a physical signal and its digital representation.",
      link: "SEE THE INSTRUMENTATION WORK", href: "#project-powerscope",
      principle: "A measurement is only useful when its range, timing and uncertainty are understood.", projects: "POWERSCOPE"
    },
    interpret: {
      stage: "STAGE 02 / SIGNAL INTERPRETATION",
      heading: "Turn raw readings into\nuseful evidence.",
      body: "A sensor value is not yet a diagnosis. Filtering, feature extraction, baseline comparison and data-quality checks help distinguish meaningful changes from noise, modelling artefacts or poor acquisition assumptions.",
      link: "SEE THE EDGE-DIAGNOSTICS WORK", href: "#project-vibeguard",
      principle: "A detection claim should be traceable to a signal, a method and a repeatable test.", projects: "VIBEGUARD · UAV MONITORING"
    },
    decide: {
      stage: "STAGE 03 / DECISION LOGIC",
      heading: "Make the logic\nvisible and accountable.",
      body: "Embedded decisions must respect timing, resource limits and operating context. I am interested in how deterministic protection logic and supervisory intelligence can cooperate without confusing their responsibilities.",
      link: "SEE THE CYBER-PHYSICAL DESIGN", href: "#project-gridpulse",
      principle: "The supervisory layer may recommend; the protection layer must retain its authority.", projects: "GRIDPULSE-RESTORE"
    },
    act: {
      stage: "STAGE 04 / CONTROLLED RESPONSE",
      heading: "Respond with a reason\n—and a way to verify it.",
      body: "An output is only responsible when its preconditions, interlocks and feedback are understood. That means testing normal operation, faults, degraded communications and recovery—not just showing a successful demonstration.",
      link: "EXPLORE THE FIVE PROJECTS", href: "#projects",
      principle: "A system is not finished when it reacts; it is stronger when the reaction can be explained and checked.", projects: "PROTECTION · RESTORATION · PCB BRING-UP"
    }
  };
  const methodTabs = [...document.querySelectorAll(".method-tab")];
  function selectMethod(key, focusTab = false) {
    const item = methodStages[key];
    if (!item) return;
    methodTabs.forEach(tab => {
      const active = tab.dataset.method === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focusTab) tab.focus();
    });
    const heading = document.getElementById("method-heading");
    const stage = document.querySelector(".method-stage");
    const body = document.getElementById("method-description");
    const link = document.querySelector(".method-project-link");
    const principle = document.getElementById("method-principle");
    const projects = document.getElementById("method-projects");
    const panel = document.getElementById("method-panel");
    if (stage) stage.textContent = item.stage;
    if (heading) heading.innerHTML = item.heading.replace("\n", "<br>").replace(/(without losing its meaning\.|useful evidence\.|visible and accountable\.|and a way to verify it\.)$/, "<em>$1</em>");
    if (body) body.textContent = item.body;
    if (link) { link.innerHTML = `${escapeHTML(item.link)} <span>↗</span>`; link.href = item.href; }
    if (principle) principle.textContent = item.principle;
    if (projects) projects.textContent = item.projects;
    if (panel) panel.setAttribute("aria-labelledby", methodTabs.find(t => t.dataset.method === key)?.id || "method-tab-01");
  }
  methodTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectMethod(tab.dataset.method));
    tab.addEventListener("keydown", event => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % methodTabs.length;
      if (event.key === "ArrowLeft") next = (index - 1 + methodTabs.length) % methodTabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = methodTabs.length - 1;
      selectMethod(methodTabs[next].dataset.method, true);
    });
  });
  selectMethod("measure");

  const experience = document.getElementById("experience-list");
  experience.innerHTML = data.experience.map(item => `<article class="timeline-item"><div class="timeline-date">${escapeHTML(item.date)}</div><div class="timeline-marker"><span></span></div><div class="timeline-content"><h3>${escapeHTML(item.role)}</h3><p class="timeline-org">${escapeHTML(item.organisation)}</p><ul>${item.points.map(p => `<li>${escapeHTML(p)}</li>`).join("")}</ul>${item.document ? `<a class="text-link" href="${escapeHTML(item.document)}" target="_blank" rel="noopener">${escapeHTML(item.documentLabel)} ↗</a>` : ""}</div></article>`).join("");

  const credentials = document.getElementById("credentials-grid");
  credentials.innerHTML = data.credentials.map((item, i) => `<article class="credential-card"><span class="credential-index">C / ${String(i + 1).padStart(2,"0")}</span><h3>${escapeHTML(item.title)}</h3><p class="credential-provider">${escapeHTML(item.provider)}</p><p class="credential-note">${escapeHTML(item.note)}</p>${item.link ? `<a class="text-link" href="${escapeHTML(item.link)}" target="_blank" rel="noopener">${escapeHTML(item.linkLabel || "View credential")} ↗</a>` : `<span class="credential-no-link">Verification link not supplied</span>`}</article>`).join("");

  document.getElementById("current-year").textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));

  // Section-aware navigation, reading progress and return-to-top control.
  const pageSections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...document.querySelectorAll(".primary-nav a[href^='#'], .chapter-rail a[href^='#']")];
  function setActiveSection(id) {
    navAnchors.forEach(anchor => {
      const active = anchor.getAttribute("href") === `#${id}`;
      if (active) anchor.setAttribute("aria-current", "location");
      else anchor.removeAttribute("aria-current");
    });
  }
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      const active = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (active) setActiveSection(active.target.id);
    }, {rootMargin: "-20% 0px -62% 0px", threshold: [0, .1, .25, .5]});
    pageSections.forEach(section => sectionObserver.observe(section));
  }
  const progressBar = document.getElementById("reading-progress-bar");
  const backToTop = document.getElementById("back-to-top");
  function updateScrollUI() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 650);
  }
  window.addEventListener("scroll", updateScrollUI, {passive:true});
  window.addEventListener("resize", updateScrollUI);
  updateScrollUI();
  backToTop?.addEventListener("click", () => window.scrollTo({top:0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"}));

  // A small reveal effect that respects reduced-motion preferences.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".project-card, .research-card, .timeline-item, .credential-card").forEach(el => observer.observe(el));
  }
})();
