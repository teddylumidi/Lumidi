/* Teddy Lumidi — site behaviour
 * Pages are sections of index.html switched by the URL hash (#about, #blog,
 * #blog/<slug>), so the back button, refresh and shared links all work on
 * static hosting such as GitHub Pages.
 */
(function () {
  'use strict';

  var SITE = window.SITE || { projects: [], posts: [], gallery: [], youtube: [] };
  var PAGES = ['home', 'about', 'portfolio', 'hobbies', 'vlog', 'blog', 'contact'];
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function waLink(text) {
    return 'https://wa.me/' + SITE.whatsapp + (text ? '?text=' + encodeURIComponent(text) : '');
  }

  function toast(message) {
    var el = $('#toast');
    if (!el) return;
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { el.classList.remove('show'); }, 3200);
  }

  /* ── Navigation ─────────────────────────────────────────── */
  var navbar = $('#navbar');
  var hamburger = $('#hamburger');
  var mobileMenu = $('#mobile-menu');

  function setMenu(open) {
    mobileMenu.classList.toggle('open', open);
    navbar.classList.toggle('menu-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  hamburger.addEventListener('click', function () { setMenu(!mobileMenu.classList.contains('open')); });
  mobileMenu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  var currentPage = null;

  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var parts = hash.split('/');
    var page = parts[0] || 'home';

    // In-page anchors such as #who or #main: scroll within the current page.
    if (PAGES.indexOf(page) === -1) {
      var target = hash && document.getElementById(hash);
      if (target && target.closest('.page.active, main')) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      page = 'home';
    }

    var changed = page !== currentPage || (page === 'blog');
    currentPage = page;
    $$('.page').forEach(function (p) { p.classList.toggle('active', p.id === 'page-' + page); });
    $$('[data-page]').forEach(function (a) {
      var on = a.dataset.page === page;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    setMenu(false);

    var pageEl = document.getElementById('page-' + page);
    var title = pageEl && pageEl.dataset.title;

    if (page === 'blog') title = showBlog(parts[1]) || title;
    if (page === 'about') animateBars();
    if (title) document.title = title;

    window.scrollTo(0, 0);
    if (changed || page === 'blog') $('#main').focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  /* ── Projects ───────────────────────────────────────────── */
  function projectCard(p) {
    return '<article class="card">' +
      '<a class="card-media" href="' + esc(p.url) + '" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">' +
        '<img src="' + esc(p.preview) + '" alt="" width="1280" height="720" loading="lazy" decoding="async"></a>' +
      '<div class="card-body">' +
        '<span class="card-tag">Web Development</span>' +
        '<h3><a class="card-title-link" href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + '</a></h3>' +
        '<p>' + esc(p.summary) + '</p>' +
        '<div class="chips">' + p.tech.map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<a class="card-link" href="' + esc(p.url) + '" target="_blank" rel="noopener"><i class="fa fa-external-link-alt" aria-hidden="true"></i> Visit site<span class="sr-only">: ' + esc(p.title) + '</span></a>' +
      '</div></article>';
  }
  $$('[data-projects]').forEach(function (el) {
    var n = el.dataset.projects;
    var list = n === 'all' ? SITE.projects : SITE.projects.slice(0, Number(n));
    el.innerHTML = list.map(projectCard).join('');
  });

  /* ── Blog ───────────────────────────────────────────────── */
  var CAT_LABELS = { personal: 'Personal', career: 'Career', web: 'Web Dev', tech: 'Technology', marketing: 'Marketing', business: 'Business' };
  var posts = SITE.posts.slice().sort(function (a, b) { return Number(b.date) - Number(a.date); });

  function postCard(p) {
    var href = '#blog/' + encodeURIComponent(p.slug);
    return '<article class="card" data-cat="' + esc(p.cat) + '">' +
      '<a class="card-media" href="' + href + '" tabindex="-1" aria-hidden="true">' +
        '<img src="' + esc(p.img) + '" alt="" loading="lazy" decoding="async" style="object-position:center"></a>' +
      '<div class="card-body">' +
        '<div class="blog-meta"><span class="date">' + esc(p.date) + '</span><span class="card-tag">' + esc(CAT_LABELS[p.cat] || p.cat) + '</span></div>' +
        '<h3><a class="card-title-link" href="' + href + '">' + esc(p.title) + '</a></h3>' +
        '<p>' + esc(p.excerpt) + '</p>' +
        '<a class="read-more" href="' + href + '">Read More<span class="sr-only">: ' + esc(p.title) + '</span> <i class="fa fa-arrow-right" aria-hidden="true"></i></a>' +
      '</div></article>';
  }
  $$('[data-posts]').forEach(function (el) {
    var n = el.dataset.posts;
    el.innerHTML = (n === 'all' ? posts : posts.slice(0, Number(n))).map(postCard).join('');
  });

  // Filters only for categories that actually have posts
  var filterBar = $('#blog-filters');
  var counts = {};
  posts.forEach(function (p) { counts[p.cat] = (counts[p.cat] || 0) + 1; });
  var cats = Object.keys(counts);
  if (cats.length > 1) {
    filterBar.innerHTML = '<button type="button" class="filter-btn" data-cat="all" aria-pressed="true">All<span class="count">' + posts.length + '</span></button>' +
      cats.map(function (c) { return '<button type="button" class="filter-btn" data-cat="' + esc(c) + '" aria-pressed="false">' + esc(CAT_LABELS[c] || c) + '<span class="count">' + counts[c] + '</span></button>'; }).join('');
    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', filterBar).forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      $$('[data-posts="all"] .card').forEach(function (card) {
        card.hidden = !(btn.dataset.cat === 'all' || card.dataset.cat === btn.dataset.cat);
      });
    });
  } else {
    filterBar.hidden = true;
  }

  function showBlog(slug) {
    var list = $('#blog-list');
    var view = $('#blog-article');
    var post = slug && posts.filter(function (p) { return p.slug === slug; })[0];
    list.hidden = !!post;
    view.hidden = !post;
    if (!post) return null;
    var i = posts.indexOf(post);
    var prev = posts[i - 1], next = posts[i + 1];
    $('.article', view).innerHTML =
      '<a class="article-back" href="#blog"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back to Blog</a>' +
      '<p class="label">' + esc(post.date) + ' &bull; ' + esc(CAT_LABELS[post.cat] || post.cat) + '</p>' +
      '<h1>' + esc(post.title) + '</h1>' +
      '<img class="article-img" src="' + esc(post.img) + '" alt="">' +
      '<div class="article-body">' + post.body + '</div>' +
      '<nav class="article-nav" aria-label="More articles">' +
        (prev ? '<a href="#blog/' + encodeURIComponent(prev.slug) + '"><small>Previous</small>' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a class="next" href="#blog/' + encodeURIComponent(next.slug) + '"><small>Next</small>' + esc(next.title) + '</a>' : '') +
      '</nav>';
    return post.title + ' | Teddy Lumidi';
  }

  /* ── YouTube ────────────────────────────────────────────── */
  // A channel's uploads playlist ID is its channel ID with "UC" replaced by "UU".
  function uploadsEmbed(channel) {
    return 'https://www.youtube-nocookie.com/embed/videoseries?list=UU' + channel.id.slice(2) + '&autoplay=1&rel=0';
  }

  function playerHtml(channel) {
    return '<div class="yt-player">' +
      '<button type="button" class="yt-facade" data-embed="' + esc(uploadsEmbed(channel)) + '" aria-label="Play latest videos from @' + esc(channel.handle) + '">' +
        '<i class="fa fa-play-circle" aria-hidden="true"></i><strong>Play latest videos</strong><span>@' + esc(channel.handle) + ' on YouTube</span>' +
      '</button></div>';
  }

  function videoCards(videos) {
    return '<div class="vlog-grid">' + videos.map(function (v) {
      return '<button type="button" class="vlog-card" data-video="' + esc(v.videoId) + '">' +
        '<span class="vlog-thumb"><img src="' + esc(v.thumb) + '" alt="" loading="lazy"><i class="fa fa-play-circle" aria-hidden="true"></i></span>' +
        '<h4>' + esc(v.title) + '</h4></button>';
    }).join('') + '</div>';
  }

  // When the site runs on the Node server (Replit / npm start), /api/youtube
  // returns the latest videos as cards. On static hosting it doesn't exist,
  // so the channel's uploads playlist player is shown instead.
  function loadVideos(channel, limit) {
    if (location.protocol === 'file:' || /github\.io$/.test(location.hostname)) return Promise.resolve([]);
    return fetch('api/youtube?channel=' + encodeURIComponent(channel.handle) + '&limit=' + limit)
      .then(function (r) { return r.ok ? r.json() : { videos: [] }; })
      .then(function (d) { return (d.videos || []).filter(function (v) { return /^[\w-]{11}$/.test(v.videoId); }); })
      .catch(function () { return []; });
  }

  $$('[data-channel]').forEach(function (el) {
    var channel = SITE.youtube.filter(function (c) { return c.handle === el.dataset.channel; })[0];
    if (!channel) return;
    var compact = el.hasAttribute('data-compact');
    var body = '<div class="yt-body">' + playerHtml(channel) + '</div>';
    if (compact) {
      el.innerHTML = body;
    } else {
      el.className = 'yt-card' + (channel.music ? ' music' : '');
      el.innerHTML =
        '<div class="yt-head">' +
          '<span class="yt-avatar"><i class="fa-brands fa-youtube" aria-hidden="true"></i></span>' +
          '<div class="yt-info"><h3>@' + esc(channel.handle) + '</h3><span class="yt-type">' + esc(channel.type) + '</span><p>' + esc(channel.about) + '</p></div>' +
          '<a class="btn yt-sub" href="https://www.youtube.com/@' + esc(channel.handle) + '?sub_confirmation=1" target="_blank" rel="noopener"><i class="fa-brands fa-youtube" aria-hidden="true"></i> Subscribe</a>' +
        '</div>' + body;
    }
    loadVideos(channel, compact ? 4 : 4).then(function (videos) {
      if (videos.length) $('.yt-body', el).innerHTML = videoCards(videos);
    });
  });

  document.addEventListener('click', function (e) {
    var facade = e.target.closest('.yt-facade');
    if (facade) {
      var frame = document.createElement('iframe');
      frame.src = facade.dataset.embed;
      frame.title = 'YouTube video player';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      facade.replaceWith(frame);
      return;
    }
    var card = e.target.closest('.vlog-card[data-video]');
    if (card) openVideo(card.dataset.video);
  });

  var videoModal = $('#video-modal');
  var lastFocus = null;
  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    $('[data-close]', modal).focus();
  }
  function closeModal(modal) {
    modal.classList.remove('open');
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  function openVideo(id) {
    $('.modal-video', videoModal).innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(id) + '?autoplay=1&rel=0" title="YouTube video player" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    openModal(videoModal);
  }
  function closeVideo() {
    $('.modal-video', videoModal).innerHTML = '';
    closeModal(videoModal);
  }
  videoModal.addEventListener('click', function (e) { if (e.target === videoModal || e.target.closest('[data-close]')) closeVideo(); });

  /* ── Gallery lightbox ───────────────────────────────────── */
  var galleryEl = $('#gallery');
  var lightbox = $('#lightbox');
  var lbIndex = 0;
  function galleryName(file) { return file.replace(/\.[a-z]+$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  galleryEl.innerHTML = SITE.gallery.map(function (g, i) {
    return '<button type="button" data-index="' + i + '" aria-label="View photo: ' + esc(g.alt) + '">' +
      '<img src="img/gallery/' + galleryName(g.file) + '-sm.webp" alt="' + esc(g.alt) + '" width="480" height="480" loading="lazy" decoding="async"></button>';
  }).join('');
  function showPhoto(i) {
    lbIndex = (i + SITE.gallery.length) % SITE.gallery.length;
    var g = SITE.gallery[lbIndex];
    var img = $('img', lightbox);
    img.src = 'img/gallery/' + galleryName(g.file) + '.webp';
    img.alt = g.alt;
    $('figcaption', lightbox).textContent = g.alt + ' (' + (lbIndex + 1) + ' / ' + SITE.gallery.length + ')';
  }
  galleryEl.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-index]');
    if (!b) return;
    showPhoto(Number(b.dataset.index));
    openModal(lightbox);
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target.closest('.lb-prev')) return showPhoto(lbIndex - 1);
    if (e.target.closest('.lb-next')) return showPhoto(lbIndex + 1);
    if (e.target === lightbox || e.target.closest('[data-close]')) closeModal(lightbox);
  });
  var touchX = null;
  lightbox.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) showPhoto(lbIndex + (dx < 0 ? 1 : -1));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (videoModal.classList.contains('open')) closeVideo();
      else if (lightbox.classList.contains('open')) closeModal(lightbox);
      else if (mobileMenu.classList.contains('open')) { setMenu(false); hamburger.focus(); }
    }
    if (lightbox.classList.contains('open')) {
      if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
      if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
    }
  });

  /* ── About: tabs, skill bars, accordion ─────────────────── */
  var tabs = $$('[role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (tab.id === 't-general') animateBars();
    });
  });
  function animateBars() {
    setTimeout(function () {
      $$('.bar-fill').forEach(function (b) { b.style.width = (b.dataset.w || 0) + '%'; });
    }, 150);
  }
  $$('.accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      $$('.accordion-btn').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.hidden = true;
      });
      if (!open) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.hidden = false;
      }
    });
  });

  /* ── Social links ───────────────────────────────────────── */
  var SOCIAL = [
    ['https://github.com/teddylumidi', 'fa-github', 'GitHub'],
    ['https://www.youtube.com/@teddylumidi', 'fa-youtube', 'YouTube (tech channel)'],
    ['https://www.youtube.com/@teddylumidimusic', 'fa-youtube', 'YouTube (music channel)'],
    [waLink(), 'fa-whatsapp', 'WhatsApp']
  ];
  $$('[data-social]').forEach(function (el) {
    el.innerHTML = SOCIAL.map(function (s) {
      return '<a class="social-icon" href="' + esc(s[0]) + '" target="_blank" rel="noopener" aria-label="' + esc(s[2]) + '" title="' + esc(s[2]) + '"><i class="fa-brands ' + s[1] + '" aria-hidden="true"></i></a>';
    }).join('');
  });

  /* ── Contact ────────────────────────────────────────────── */
  var form = $('#contact-form');
  var note = $('#form-note');
  var subject = $('#f-subject');

  // "Pick a service" links preselect the subject
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-subject]');
    if (!link) return;
    var value = link.dataset.subject;
    for (var i = 0; i < subject.options.length; i++) {
      if (subject.options[i].text === value) { subject.selectedIndex = i; break; }
    }
    setTimeout(function () { $('#f-first').focus({ preventScroll: true }); }, 400);
  });

  // "Request my CV" opens WhatsApp directly
  $$('[data-wa]').forEach(function (a) {
    a.href = waLink(a.dataset.wa);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var F = form.elements;
    var first = F.first.value.trim(), message = F.message.value.trim();
    if (!first || !message) {
      note.textContent = 'Please add your first name and a message.';
      note.classList.add('error');
      (!first ? F.first : F.message).focus();
      return;
    }
    note.classList.remove('error');
    var name = [first, F.last.value.trim()].filter(Boolean).join(' ');
    var lines = ['Hi Teddy,', '', 'Name: ' + name];
    if (F.email.value.trim()) lines.push('Email: ' + F.email.value.trim());
    if (F.phone.value.trim()) lines.push('Phone: ' + F.phone.value.trim());
    if (F.subject.value) lines.push('Subject: ' + F.subject.value);
    lines.push('', message);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
    note.textContent = '';
    toast('Opening WhatsApp...');
    form.reset();
  });

  /* ── Misc ───────────────────────────────────────────────── */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  // An earlier version registered a service worker that cached images
  // aggressively. Remove it so visitors always get the current site.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (r) { r.unregister(); });
    }).catch(function () {});
    if (window.caches) caches.keys().then(function (keys) { keys.forEach(function (k) { caches.delete(k); }); }).catch(function () {});
  }

  route();
})();
