/* Renders every page from data/projects.js. No dependencies.
 * Each page fills one landscape screen; navigation is page-by-page
 * (nav links; arrow keys step through project photos). */
(function () {
  "use strict";

  var DATA = window.PORTFOLIO || { owner: {}, projects: [] };
  var owner = DATA.owner || {};
  var projects = DATA.projects || [];
  var PAGE = document.body.getAttribute("data-page") || "home";

  // Pages in the top menu
  var NAV = [
    { key: "home", href: "index.html" },
    { key: "projects", href: "projects.html" }
  ];

  /* ---------- Language ---------- */

  var UI = {
    en: {
      home: "Home", projects: "Projects",
      brand: "{name}'s Portfolio",
      projects_lead: "Robots, mechanisms, circuits and code. Open a project for photos, video and source.",
      year: "Year", role: "Role", stack: "Stack", status: "Status", repo: "Repository", demo: "Demo",
      images: "Photos", source: "Source code",
      all_projects: "← All projects",
      lines: "lines", loading: "Loading", raw: "Raw", download: "Download",
      no_projects: "No projects yet. Edit data/projects.js.",
      not_found: "Project not found in data/projects.js.",
      load_fail: "Could not load",
      local_hint: "If you opened this file directly from disk, run a local server instead:"
    },
    th: {
      home: "หน้าแรก", projects: "ผลงาน",
      brand: "พอร์ตโฟลิโอ {name}",
      projects_lead: "หุ่นยนต์ กลไก วงจร และโค้ด เปิดผลงานเพื่อดูรูปภาพ วิดีโอ และซอร์สโค้ด",
      year: "ปี", role: "หน้าที่", stack: "เครื่องมือ", status: "สถานะ", repo: "Repository", demo: "เดโม",
      images: "รูปภาพ", source: "ซอร์สโค้ด",
      all_projects: "← ผลงานทั้งหมด",
      lines: "บรรทัด", loading: "กำลังโหลด", raw: "ไฟล์ดิบ", download: "ดาวน์โหลด",
      no_projects: "ยังไม่มีผลงาน แก้ไขได้ที่ data/projects.js",
      not_found: "ไม่พบผลงานนี้ใน data/projects.js",
      load_fail: "โหลดไฟล์ไม่สำเร็จ",
      local_hint: "หากเปิดไฟล์จากเครื่องโดยตรง ให้รันเซิร์ฟเวอร์ในเครื่องแทน:"
    }
  };

  function readLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "th") return q;
    try { var s = localStorage.getItem("lang"); if (s === "en" || s === "th") return s; } catch (e) {}
    return (navigator.language || "").toLowerCase().indexOf("th") === 0 ? "th" : "en";
  }

  var lang = readLang();

  function L(key) { var v = UI[lang][key]; return v != null ? v : (UI.en[key] || key); }

  // Localized data value: plain string/array, or { en, th }
  function t(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) return v[lang] != null ? v[lang] : v.en;
    return v == null ? "" : v;
  }

  /* ---------- Helpers ---------- */

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function fileName(path) { return String(path || "").split("/").pop(); }

  function projectHref(p) { return "project.html?id=" + encodeURIComponent(p.id); }

  function isExternal(url) { return /^https?:/.test(url); }

  function linkAttrs(url) {
    return 'href="' + esc(url) + '"' + (isExternal(url) ? ' target="_blank" rel="noopener"' : "");
  }

  function paras(list) {
    return [].concat(list || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  }

  function socialIcons() {
    return (owner.socials || []).map(function (s) {
      return '<a class="social" ' + linkAttrs(s.url) + ' aria-label="' + esc(t(s.label)) +
        '" title="' + esc(t(s.label)) + '"><i class="' + esc(s.icon) + '"></i></a>';
    }).join("");
  }

  /* ---------- Header ---------- */

  function renderHeader() {
    document.documentElement.lang = lang;
    var active = PAGE === "project" ? "projects" : PAGE;

    $("site-header").innerHTML = '<header class="site-header">' +
      '<nav class="nav-links">' + NAV.map(function (n) {
        return '<a href="' + n.href + '"' + (n.key === active ? ' class="active"' : "") + ">" + esc(L(n.key)) + "</a>";
      }).join("") + "</nav>" +
      '<div class="nav-right">' + socialIcons() +
      '<span class="lang-switch">' + ["en", "th"].map(function (c) {
        return '<button type="button" data-lang="' + c + '" aria-pressed="' + (c === lang) + '">' + c.toUpperCase() + "</button>";
      }).join("") + "</span></div></header>";
  }

  /* ---------- Home ---------- */

  function renderHome(app) {
    var hero = owner.hero || {};
    document.title = L("brand").replace("{name}", t(owner.name));
    app.innerHTML =
      '<div class="screen hero">' +
        '<div class="hero-photo"><img src="' + esc(owner.photo) + '" alt="' + esc(t(owner.name)) + '"></div>' +
        '<div class="hero-text">' +
          (hero.eyebrow ? '<div class="eyebrow">' + esc(t(hero.eyebrow)) + "</div>" : "") +
          "<h1>" + esc(t(hero.line1)) + (t(hero.line2) ? "<br>" + esc(t(hero.line2)) : "") + "</h1>" +
          '<div class="intro">' + paras(t(hero.intro)) + "</div>" +
          ((hero.facts || []).length ? '<dl class="facts">' + hero.facts.map(function (f) {
            return "<div><dt>" + esc(t(f.label)) + "</dt><dd>" + esc(t(f.value)) + "</dd></div>";
          }).join("") + "</dl>" : "") +
          ((hero.buttons || []).length ? '<div class="btn-col">' + hero.buttons.map(function (b) {
            return '<a class="btn" ' + linkAttrs(b.url) + ">" + esc(t(b.label)) + "</a>";
          }).join("") + "</div>" : "") +
        "</div>" +
      "</div>";
  }

  /* ---------- Projects (scrolling grid) ---------- */

  function card(p) {
    var cover = p.cover || (p.images && p.images[0] && p.images[0].src) || "";
    return '<a class="card" href="' + projectHref(p) + '">' +
      '<div class="card-img">' + (cover ? '<img src="' + esc(cover) + '" alt="" loading="lazy">' : "") + "</div>" +
      '<div class="card-body">' + (t(p.year) ? '<span class="year-label">' + esc(t(p.year)) + "</span>" : "") +
      "<h3>" + esc(t(p.title)) + "</h3>" +
      "<p>" + esc(t(p.summary)) + "</p>" +
      '<div class="tags">' + esc((p.stack || []).join("  /  ")) + "</div>" +
      "</div></a>";
  }

  function renderProjects(app) {
    document.title = L("projects") + " - " + t(owner.name);
    // This page scrolls normally instead of fitting one screen
    document.body.classList.add("scroll-page");
    app.innerHTML =
      '<div class="screen">' +
        '<div class="screen-head"><div><h1>' + esc(L("projects")) + '</h1><p class="lead">' + esc(L("projects_lead")) + "</p></div></div>" +
        (projects.length ? '<div class="cards">' + projects.map(card).join("") + "</div>"
                         : '<p class="lead">' + esc(L("no_projects")) + "</p>") +
      "</div>";
  }

  /* ---------- Project detail: media left, text right ---------- */

  var currentFile = 0;
  var galleryIndex = 0;
  var showSource = false;

  // Images and videos together, in one gallery
  function mediaItems(p) {
    return (p.images || []).map(function (m) { return { item: m, video: false }; })
      .concat((p.videos || []).map(function (m) { return { item: m, video: true }; }));
  }

  function renderProject(app) {
    var id = new URLSearchParams(location.search).get("id");
    var index = -1;
    for (var i = 0; i < projects.length; i++) if (projects[i].id === id) index = i;
    var p = projects[index];

    if (!p) {
      app.innerHTML = '<div class="screen"><a class="back" href="projects.html">' + esc(L("all_projects")) +
        '</a><div class="screen-head"><h1>404</h1></div><p class="lead">' + esc(L("not_found")) + "</p></div>";
      return;
    }

    document.title = t(p.title) + " - " + t(owner.name);
    var hasLeft = mediaItems(p).length || (p.source || []).length;

    var btns = (p.repo ? '<a class="btn" ' + linkAttrs(p.repo) + ">" + esc(L("repo")) + "</a>" : "") +
      (p.demo ? '<a class="btn outline" ' + linkAttrs(p.demo) + ">" + esc(L("demo")) + "</a>" : "") +
      ((p.source || []).length && mediaItems(p).length
        ? '<button type="button" class="btn outline" data-src>' + esc(L(showSource ? "images" : "source")) + "</button>" : "");

    app.innerHTML =
      '<div class="screen">' +
        '<div class="screen-head"><div><a class="back" href="projects.html">' + esc(L("all_projects")) + "</a>" +
          (t(p.year) ? '<span class="year-label">' + esc(t(p.year)) + "</span>" : "") +
          "<h1>" + esc(t(p.title)) + "</h1></div></div>" +
        '<div class="screen-body detail' + (hasLeft ? "" : " text-only") + '">' +
          (hasLeft ? '<div class="detail-media" id="pane"></div>' : "") +
          '<div class="detail-text scroll-y">' +
            '<p class="lead">' + esc(t(p.summary)) + "</p>" + paras(t(p.description)) +
            '<table class="kv">' +
              "<tr><th>" + esc(L("year")) + "</th><td>" + esc(t(p.year)) + "</td></tr>" +
              (p.role ? "<tr><th>" + esc(L("role")) + "</th><td>" + esc(t(p.role)) + "</td></tr>" : "") +
              (p.status ? "<tr><th>" + esc(L("status")) + "</th><td>" + esc(t(p.status)) + "</td></tr>" : "") +
              ((p.stack || []).length ? "<tr><th>" + esc(L("stack")) + "</th><td>" + esc(p.stack.join(", ")) + "</td></tr>" : "") +
            "</table>" + (btns ? '<div class="btn-row">' + btns + "</div>" : "") +
          "</div>" +
        "</div>" +
      "</div>";

    if (hasLeft) renderLeft(p);
  }

  function renderLeft(p) {
    var pane = $("pane");
    var items = mediaItems(p);
    if ((showSource || !items.length) && (p.source || []).length) {
      pane.innerHTML = '<div class="pane code-box"><div class="file-tabs" role="tablist" id="file-tabs">' +
        p.source.map(function (s, n) {
          return '<button type="button" role="tab" data-i="' + n + '">' + esc(fileName(s.path)) + "</button>";
        }).join("") + '</div><div class="file-bar" id="file-bar"></div><pre class="code" id="code-view"></pre></div>';
      initSource(p.source);
    } else {
      renderGallery(pane, items);
    }
  }

  function renderGallery(pane, items) {
    var n = Math.min(Math.max(galleryIndex, 0), items.length - 1);
    galleryIndex = n;
    var it = items[n].item;
    var cap = t(it.caption) || fileName(it.src || it.embed);
    var media;
    if (!items[n].video) {
      media = '<a href="' + esc(it.src) + '" target="_blank" rel="noopener"><img src="' + esc(it.src) + '" alt="' + esc(cap) + '"></a>';
    } else if (it.embed) {
      media = '<iframe src="' + esc(it.embed) + '" title="' + esc(cap) + '" allowfullscreen></iframe>';
    } else {
      media = '<video controls preload="metadata" src="' + esc(it.src) + '"' + (it.poster ? ' poster="' + esc(it.poster) + '"' : "") + "></video>";
    }

    var thumbs = items.length > 1 ? '<div class="thumbs">' + items.map(function (m, k) {
      var img = m.video ? (m.item.poster ? '<img src="' + esc(m.item.poster) + '" alt="">' : '<i class="fa-solid fa-play"></i>')
                        : '<img src="' + esc(m.item.src) + '" alt="">';
      return '<button type="button" data-g="' + k + '" aria-current="' + (k === n) + '">' + img + "</button>";
    }).join("") + "</div>" : "";

    pane.innerHTML = '<div class="pane gallery">' +
      '<div class="stage">' + media + "</div>" +
      '<div class="cap">' + esc(cap) + (items.length > 1 ? '<span class="count">' + (n + 1) + " / " + items.length + "</span>" : "") + "</div>" +
      (items.length > 1
        ? '<div class="gal-bar">' +
            '<button type="button" class="arrow icon' + (n > 0 ? "" : " disabled") + '" data-g="' + (n - 1) + '">\u2190</button>' +
            thumbs +
            '<button type="button" class="arrow icon' + (n < items.length - 1 ? "" : " disabled") + '" data-g="' + (n + 1) + '">\u2192</button>' +
          "</div>"
        : "") +
      "</div>";
  }

  function initSource(sources) {
    var tabs = $("file-tabs").querySelectorAll("button");
    var view = $("code-view");
    var bar = $("file-bar");

    function show(n) {
      currentFile = n;
      var s = sources[n];
      for (var k = 0; k < tabs.length; k++) tabs[k].setAttribute("aria-selected", k === n ? "true" : "false");
      bar.innerHTML = '<span id="file-name">' + esc(s.path) + "</span><span>" +
        '<a href="' + esc(s.path) + '" target="_blank" rel="noopener">' + esc(L("raw")) + "</a>" +
        '<a href="' + esc(s.path) + '" download>' + esc(L("download")) + "</a></span>";
      view.textContent = L("loading") + " " + s.path + " ...";

      fetch(s.path).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      }).then(function (text) {
        if (currentFile !== n) return;
        var lines = text.replace(/\r\n/g, "\n").replace(/\n$/, "").split("\n");
        view.innerHTML = lines.map(function (l) { return '<span class="line">' + (esc(l) || " ") + "</span>"; }).join("");
        var fn = $("file-name");
        if (fn) fn.textContent = s.path + "  (" + lines.length + " " + L("lines") + ")";
      }).catch(function (e) {
        view.innerHTML = '<span class="line">' + esc(L("load_fail")) + " " + esc(s.path) + " (" + esc(e.message) + ")</span>" +
          '<span class="line">' + esc(L("local_hint")) + "</span>" +
          '<span class="line">  python3 -m http.server 8000</span>';
      });
    }

    for (var k = 0; k < tabs.length; k++) {
      tabs[k].addEventListener("click", function () { show(Number(this.getAttribute("data-i"))); });
    }
    show(Math.min(currentFile, sources.length - 1));
  }

  function currentProject() {
    var id = new URLSearchParams(location.search).get("id");
    for (var i = 0; i < projects.length; i++) if (projects[i].id === id) return projects[i];
    return null;
  }

  /* ---------- Events ---------- */

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target : null;
    if (!el) return;

    var b = el.closest("[data-lang]");
    if (b) {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("lang", lang); } catch (err) {}
      var url = new URL(location.href);
      if (url.searchParams.has("lang")) { url.searchParams.set("lang", lang); history.replaceState(null, "", url); }
      render();
      return;
    }

    var src = el.closest("[data-src]");
    if (src) {
      showSource = !showSource;
      render();
      return;
    }

    var g = el.closest("[data-g]");
    if (g) {
      galleryIndex = Number(g.getAttribute("data-g"));
      renderGallery($("pane"), mediaItems(currentProject()));
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "video" || tag === "input" || tag === "textarea" || tag === "pre") return;
    var dir = e.key === "ArrowLeft" ? -1 : 1;

    // Arrow keys only step through a project's photos and videos
    if (PAGE === "project" && currentProject() && !showSource && $("pane")) {
      var items = mediaItems(currentProject());
      if (galleryIndex + dir >= 0 && galleryIndex + dir < items.length) {
        galleryIndex += dir;
        renderGallery($("pane"), items);
        return;
      }
    }
  });

  /* ---------- Main ---------- */

  function render() {
    renderHeader();
    var app = $("app");
    if (PAGE === "home") renderHome(app);
    else if (PAGE === "projects") renderProjects(app);
    else if (PAGE === "project") renderProject(app);
  }

  render();
})();
