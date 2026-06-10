/* ========================================
   周荣豪 个人作品集 — 交互逻辑
   数据驱动画廊 · 分类筛选 · 灯箱 · 视差 · 涟漪
   ======================================== */

// ============================================================
// 1. 作品数据 (来源: 根目录 插画/动图/制品/视频)
// ============================================================
const ARTWORKS = [
  // ---- 插画 (30件: 壁纸横图优先) ----
  { file: '插画/1 (1).png', title: '壁纸插画 01', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (22).png', title: '壁纸插画 02', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (32).png', title: '壁纸插画 03', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (33).png', title: '壁纸插画 04', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (34).png', title: '壁纸插画 05', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (35).png', title: '壁纸插画 06', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (39).png', title: '壁纸插画 07', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (41).png', title: '壁纸插画 08', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (56).png', title: '壁纸插画 09', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (57).png', title: '壁纸插画 10', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (1).gif', title: '插画作品 11', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (30).png', title: '插画作品 12', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (31).png', title: '插画作品 13', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (36).png', title: '插画作品 14', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (37).png', title: '插画作品 15', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (38).png', title: '插画作品 16', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (42).png', title: '插画作品 17', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (43).png', title: '插画作品 18', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (44).png', title: '插画作品 19', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (45).png', title: '插画作品 20', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (46).png', title: '插画作品 21', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (47).png', title: '插画作品 22', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (48).png', title: '插画作品 23', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (49).png', title: '插画作品 24', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (50).png', title: '插画作品 25', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (51).png', title: '插画作品 26', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (52).png', title: '插画作品 27', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (53).png', title: '插画作品 28', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (54).png', title: '插画作品 29', cat: 'illustration', catLabel: '插画' },
  { file: '插画/1 (55).png', title: '插画作品 30', cat: 'illustration', catLabel: '插画' },

  // ---- 动图 (16件) ----
  { file: '动图/1 (1).gif', title: '动图作品 01', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (2).gif', title: '动图作品 02', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (3).gif', title: '动图作品 03', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (4).gif', title: '动图作品 04', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (5).gif', title: '动图作品 05', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (6).gif', title: '动图作品 06', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (7).gif', title: '动图作品 07', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (8).gif', title: '动图作品 08', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (9).gif', title: '动图作品 09', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (10).gif', title: '动图作品 10', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (11).gif', title: '动图作品 11', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (12).gif', title: '动图作品 12', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (14).gif', title: '动图作品 13', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (15).gif', title: '动图作品 14', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (16).gif', title: '动图作品 15', cat: 'gif', catLabel: '动图' },
  { file: '动图/1 (18).gif', title: '动图作品 16', cat: 'gif', catLabel: '动图' },

  // ---- 制品 (29件) ----
  { file: '制品/1 徽章/1.png', title: '徽章 01', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/2.png', title: '徽章 02', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/3.png', title: '徽章 03', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/4.png', title: '徽章 04', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/5.png', title: '徽章 05', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/6.png', title: '徽章 06', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/8.png', title: '徽章 07', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/9.png', title: '徽章 08', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/10.png', title: '徽章 09', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/11.png', title: '徽章 10', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/12.png', title: '徽章 11', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/13.png', title: '徽章 12', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/14.png', title: '徽章 13', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/15.png', title: '徽章 14', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/16.png', title: '徽章 15', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/17.png', title: '徽章 16', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/18.png', title: '徽章 17', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/19.png', title: '徽章 18', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/20.png', title: '徽章 19', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/1 徽章/25.png', title: '徽章 20', cat: 'product', catLabel: '制品', subcat: 'badge' },
  { file: '制品/3 fumo/1 (1).png', title: 'Fumo 01', cat: 'product', catLabel: '制品', subcat: 'fumo' },
  { file: '制品/3 fumo/1 (2).png', title: 'Fumo 02', cat: 'product', catLabel: '制品', subcat: 'fumo' },
  { file: '制品/2 活动/1.jpg', title: '活动 01', cat: 'product', catLabel: '制品', subcat: 'event' },
  { file: '制品/2 活动/1.png', title: '活动 02', cat: 'product', catLabel: '制品', subcat: 'event' },
  { file: '制品/2 活动/Image_1781073442174_759.jpg', title: '活动 03', cat: 'product', catLabel: '制品', subcat: 'event' },
  { file: '制品/2 活动/Image_1781073457561_430.jpg', title: '活动 04', cat: 'product', catLabel: '制品', subcat: 'event' },
  { file: '制品/4 杂项/1 (1).jpg', title: '杂项 01', cat: 'product', catLabel: '制品', subcat: 'other' },
  { file: '制品/4 杂项/1 (2).jpg', title: '杂项 02', cat: 'product', catLabel: '制品', subcat: 'other' },
  { file: '制品/4 杂项/1 (3).jpg', title: '杂项 03', cat: 'product', catLabel: '制品', subcat: 'other' },

  // ---- 视频 (1件) ----
  { file: '视频/01-cover.png', title: '视频作品 01', cat: 'video', catLabel: '视频', video: '视频/1.mp4' }
];

function getImgPath(work) {
  return 'images/' + work.file;
}

function getThumbPath(work) {
  return 'images/thumbnails/' + work.file;
}

// ============================================================
// 2. 分类 & 状态
// ============================================================
const CATEGORIES = ['illustration', 'product', 'gif', 'video'];
const CAT_LABELS = { illustration: '插画', product: '制品', gif: '动图', video: '视频' };
let currentCat = 'illustration';
let lightboxIndex = -1;
let filteredWorks = [];

// ============================================================
// 3. 分类标签栏
// ============================================================
function getCatCounts() {
  const counts = {};
  CATEGORIES.forEach(function(c) {
    counts[c] = ARTWORKS.filter(function(w) { return w.cat === c; }).length;
  });
  return counts;
}

function renderCategoryBar() {
  const bar = document.getElementById('categoryBar');
  if (!bar) return;
  const html = CATEGORIES.map(function(c) {
    return '<button class="cat-btn' + (c === currentCat ? ' active' : '') +
      '" data-cat="' + c + '">' + CAT_LABELS[c] + '</button>';
  }).join('');
  bar.innerHTML = html;
  bar.querySelectorAll('.cat-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      currentCat = this.dataset.cat;
      refreshGallery();
    });
  });

  // 同步底部导航高亮
  document.querySelectorAll('.section-nav-card').forEach(function(card) {
    card.classList.toggle('active', card.dataset.cat === currentCat);
  });
}

// 底部分类导航点击
(function() {
  document.getElementById('sectionNav').addEventListener('click', function(e) {
    const card = e.target.closest('.section-nav-card');
    if (!card) return;
    currentCat = card.dataset.cat;
    refreshGallery();
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();

// ============================================================
// 4. 画廊 (分批加载)
// ============================================================
const BATCH_SIZE = 4;
let renderedCount = 0;
let displayIndex = 0;
let allFiltered = [];
let loadTimeout = null;

function getFilteredWorks() {
  let works = ARTWORKS.filter(function(w) { return w.cat === currentCat; });
  works = insertProductSpacers(works);
  return works;
}

function createItemHTML(work, idx) {
  const isGif = work.file.endsWith('.gif');
  const isVideo = !!work.video;
  // GIF 保持原图（动画），其他用响应式缩略图
  var imgTag;
  if (isGif) {
    imgTag = '<img src="' + getImgPath(work) + '" alt="' + work.title + '" loading="lazy" decoding="async">';
  } else {
    imgTag = '<img src="' + getThumbPath(work) + '" srcset="images/thumbnails-sm/' + work.file + ' 200w, ' + getThumbPath(work) + ' 400w" sizes="(max-width: 768px) 200px, 400px" alt="' + work.title + '" loading="lazy" decoding="async">';
  }
  return '<div class="gallery-item fade-in" data-index="' + idx +
    '" data-cat="' + work.cat + '"' +
    (isVideo ? ' data-video="images/' + work.video + '"' : '') + '>' +
    (isGif && work.cat !== 'illustration' ? '<span class="gif-badge">GIF</span>' : '') +
    '<span class="cat-badge">' + work.catLabel + '</span>' +
    imgTag +
    '<div class="gallery-item-overlay">' +
    '<div class="gallery-item-title">' + work.title + '</div>' +
    '<div class="gallery-item-cat">' + work.catLabel + (isVideo ? ' ▶' : '') + '</div>' +
    '</div></div>';
}

/* 为制品插入子分类间隔 */
function insertProductSpacers(works) {
  if (currentCat !== 'product') return works;
  const result = [];
  let lastSubcat = null;
  const subcatLabels = { fumo: 'Fumo', badge: '吧唧', other: '杂项', event: '活动' };
  works.forEach(function(w) {
    const sc = w.subcat || '';
    if (lastSubcat && sc !== lastSubcat) {
      result.push({ type: 'spacer', cat: 'product', catLabel: '制品' });
    }
    result.push(w);
    lastSubcat = sc;
  });
  return result;
}

function bindItemClicks() {
  document.querySelectorAll('.gallery-item').forEach(function(item) {
    if (item.dataset.bound) return;
    item.dataset.bound = '1';
    item.addEventListener('click', function() {
      openLightbox(parseInt(this.dataset.index));
    });
  });
}

function loadBatch() {
  if (renderedCount >= allFiltered.length) return;
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const batch = allFiltered.slice(renderedCount, renderedCount + BATCH_SIZE);
  const parts = [];
  batch.forEach(function(work, i) {
    if (work.type === 'spacer') {
      parts.push('<div class="product-spacer-full"></div>');
    } else {
      parts.push(createItemHTML(work, displayIndex));
      displayIndex++;
    }
  });
  grid.insertAdjacentHTML('beforeend', parts.join(''));
  renderedCount += batch.length;
  bindItemClicks();
  observeItems();
  detectLandscape();
}

/* 插画 Grid 模式 — 检测横图跨列 */
function detectLandscape() {
  if (currentCat !== 'illustration') return;
  document.querySelectorAll('.gallery-item:not(.landscape-checked) img').forEach(function(img) {
    var item = img.closest('.gallery-item');
    if (!item || item.classList.contains('landscape-checked')) return;
    item.classList.add('landscape-checked');
    if (img.complete && img.naturalWidth > 0) {
      if (img.naturalWidth >= img.naturalHeight * 1.3) {
        item.classList.add('landscape');
      }
    } else {
      img.addEventListener('load', function() {
        if (img.naturalWidth >= img.naturalHeight * 1.3) {
          item.classList.add('landscape');
        }
      });
    }
  });
}

function onScrollCheck() {
  if (loadTimeout) return;
  loadTimeout = setTimeout(function() {
    loadTimeout = null;
    const grid = document.getElementById('galleryGrid');
    if (!grid || !grid.lastElementChild) return;
    const rect = grid.lastElementChild.getBoundingClientRect();
    if (rect.top < window.innerHeight + 400) loadBatch();
  }, 100);
}

function renderGallery() {
  allFiltered = getFilteredWorks();
  // 灯箱浏览跳过间隔元素
  filteredWorks = allFiltered.filter(function(w) { return w.type !== 'spacer'; });
  renderedCount = 0;
  const grid = document.getElementById('galleryGrid');
  const empty = document.getElementById('galleryEmpty');
  if (!grid) return;
  if (allFiltered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';
  grid.innerHTML = '';
  displayIndex = 0;

  // Adjust column class based on category
  grid.classList.remove('cols-3', 'cols-4', 'cols-5', 'cols-center', 'cols-grid');
  if (currentCat === 'video') {
    grid.classList.add('cols-center');
  } else if (currentCat === 'product') {
    grid.classList.add('cols-4');
  } else if (currentCat === 'gif') {
    grid.classList.add('cols-4');
  } else if (currentCat === 'illustration') {
    grid.classList.add('cols-grid');
  } else {
    grid.classList.add('cols-3');
  }

  loadBatch();
  setTimeout(function() {
    const lastItem = grid.lastElementChild;
    if (lastItem) {
      const rect = lastItem.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && renderedCount < allFiltered.length) {
        loadBatch();
      }
    }
  }, 300);
}

function refreshGallery() {
  renderCategoryBar();
  renderGallery();
}

window.addEventListener('scroll', onScrollCheck, { passive: true });

// ============================================================
// 5. Intersection Observer — 渐入动画
// ============================================================
function observeItems() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });

  document.querySelectorAll('.gallery-item.fade-in:not(.visible)').forEach(function(el) {
    observer.observe(el);
  });

  // Also observe about-section elements
  document.querySelectorAll('.about-section.fade-in:not(.visible)').forEach(function(el) {
    observer.observe(el);
  });
}

// ============================================================
// 6. 灯箱 (图片 + 视频)
// ============================================================
function openLightbox(index) {
  if (index < 0 || index >= filteredWorks.length) return;
  const work = filteredWorks[index];

  // 视频作品走视频灯箱
  if (work.video) {
    openVideoLightbox(index);
    return;
  }

  lightboxIndex = index;
  var lb = document.getElementById('lightbox');
  lb.classList.add('open');
  // 动图 / 徽章 → 透明模糊背景
  var isGifOrBadge = work.file.endsWith('.gif') || (work.subcat === 'badge');
  lb.classList.toggle('blur-bg', isGifOrBadge);
  document.body.style.overflow = 'hidden';
  updateLightboxImage();
}

function updateLightboxImage() {
  if (lightboxIndex < 0 || lightboxIndex >= filteredWorks.length) return;
  const work = filteredWorks[lightboxIndex];
  // 灯箱用原图
  document.getElementById('lightboxImg').src = getImgPath(work);
  document.getElementById('lightboxImg').alt = work.title;
  document.getElementById('lightboxInfo').textContent =
    work.title + ' — ' + work.catLabel;
  document.getElementById('lightboxCounter').textContent =
    (lightboxIndex + 1) + ' / ' + filteredWorks.length;
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  lb.classList.remove('open', 'blur-bg');
  document.body.style.overflow = '';
  lightboxIndex = -1;
  setTimeout(function() {
    document.getElementById('lightboxImg').src = '';
  }, 300);
}

function lightboxNext() {
  if (filteredWorks.length === 0) return;
  lightboxIndex = (lightboxIndex + 1) % filteredWorks.length;
  // Skip video items in image lightbox
  while (filteredWorks[lightboxIndex].video) {
    lightboxIndex = (lightboxIndex + 1) % filteredWorks.length;
  }
  updateLightboxImage();
}

function lightboxPrev() {
  if (filteredWorks.length === 0) return;
  lightboxIndex = (lightboxIndex - 1 + filteredWorks.length) % filteredWorks.length;
  while (filteredWorks[lightboxIndex].video) {
    lightboxIndex = (lightboxIndex - 1 + filteredWorks.length) % filteredWorks.length;
  }
  updateLightboxImage();
}

// 视频灯箱
function openVideoLightbox(index) {
  const work = filteredWorks[index];
  const videoSrc = 'images/' + work.video;
  const videoLightbox = document.getElementById('videoLightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');

  lightboxVideo.src = videoSrc;
  videoLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxVideo.load();
  lightboxVideo.play().catch(function() {});
}

function closeVideoLightbox() {
  const videoLightbox = document.getElementById('videoLightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');
  videoLightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxVideo.pause();
  setTimeout(function() {
    lightboxVideo.src = '';
  }, 300);
}

// 灯箱事件绑定
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', function(e) { e.stopPropagation(); lightboxNext(); });
document.getElementById('lightboxPrev').addEventListener('click', function(e) { e.stopPropagation(); lightboxPrev(); });
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.getElementById('videoLightboxClose').addEventListener('click', closeVideoLightbox);
document.getElementById('videoLightbox').addEventListener('click', function(e) {
  if (e.target === document.getElementById('videoLightbox')) closeVideoLightbox();
});

// 键盘控制
document.addEventListener('keydown', function(e) {
  const lb = document.getElementById('lightbox');
  const vlb = document.getElementById('videoLightbox');
  if (!lb.classList.contains('open') && !vlb.classList.contains('open')) return;

  if (e.key === 'Escape') {
    closeLightbox();
    closeVideoLightbox();
  }
  if (lb.classList.contains('open')) {
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
  }
});

// 触摸滑动
let touchStartX = 0;
document.getElementById('lightbox').addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
});
document.getElementById('lightbox').addEventListener('touchend', function(e) {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) lightboxNext();
    else lightboxPrev();
  }
});

// ============================================================
// 7. 导航栏
// ============================================================
(function() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  // 滚动阴影
  let scrollTicking = false;
  window.addEventListener('scroll', function() {
    if (!scrollTicking) {
      requestAnimationFrame(function() {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 10);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // 汉堡菜单
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }
})();

// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ============================================================
// 8. 3D 卡片倾斜
// ============================================================
(function() {
  document.addEventListener('mousemove', function(e) {
    document.querySelectorAll('.gallery-item:hover').forEach(function(item) {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      item.style.transform = 'perspective(800px) rotateY(' + (x * 8) +
        'deg) rotateX(' + (-y * 8) + 'deg) scale3d(1.02,1.02,1.02)';
    });
  });
  const grid = document.getElementById('galleryGrid');
  if (grid) {
    grid.addEventListener('mouseleave', function() {
      document.querySelectorAll('.gallery-item').forEach(function(el) {
        el.style.transform = '';
      });
    });
  }
})();

// ============================================================
// 9. Hero 视差
// ============================================================
(function() {
  const heroContent = document.getElementById('heroContent');
  if (heroContent) {
    document.addEventListener('mousemove', function(e) {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      heroContent.style.transform = 'translate(' +
        ((e.clientX - rect.left) / rect.width - 0.5) * 16 + 'px, ' +
        ((e.clientY - rect.top) / rect.height - 0.5) * 16 + 'px)';
    });
  }
})();

// ============================================================
// 10. 点击涟漪
// ============================================================
(function() {
  document.addEventListener('click', function(e) {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = item.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    item.appendChild(ripple);
    ripple.addEventListener('animationend', function() { ripple.remove(); });
  });
})();

// ============================================================
// 11. 浮动按钮
// ============================================================
(function() {
  const btns = document.getElementById('floatBtns');
  if (!btns) return;
  function toggle() {
    btns.classList.toggle('visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
  document.getElementById('btnToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('btnToBottom').addEventListener('click', function() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
})();

// ============================================================
// 12. 初始化
// ============================================================
function init() {
  renderCategoryBar();
  renderGallery();
  // Observe about sections
  observeItems();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
