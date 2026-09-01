/**
 * Luare baby 公式サイト メインJavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  applyDynamicConfigValues();
  initScrollAnimations();
  setCurrentYear();
});

/**
 * モバイルナビゲーション（ハンバーガーメニュー）の制御
 */
function initMobileNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.nav-mobile-list .nav-link');

  if (!hamburgerBtn || !mobileOverlay) return;

  function toggleMenu() {
    const isActive = hamburgerBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (hamburgerBtn.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/**
 * config.js から動的リンク（Amazon、Google Form等）をHTML要素に適用
 */
function applyDynamicConfigValues() {
  if (typeof LUARE_CONFIG === 'undefined') return;

  // Amazon購入リンクをセット (.js-amazon-url)
  const amazonLinks = document.querySelectorAll('.js-amazon-url');
  amazonLinks.forEach(el => {
    if (LUARE_CONFIG.product && LUARE_CONFIG.product.purchaseUrl) {
      el.setAttribute('href', LUARE_CONFIG.product.purchaseUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // 卸取引フォームリンクをセット (.js-business-form-url)
  const businessFormLinks = document.querySelectorAll('.js-business-form-url');
  businessFormLinks.forEach(el => {
    if (LUARE_CONFIG.urls && LUARE_CONFIG.urls.businessContactForm) {
      el.setAttribute('href', LUARE_CONFIG.urls.businessContactForm);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // 一般お問い合わせフォームリンクをセット (.js-customer-form-url)
  const customerFormLinks = document.querySelectorAll('.js-customer-form-url');
  customerFormLinks.forEach(el => {
    if (LUARE_CONFIG.urls && LUARE_CONFIG.urls.customerContactForm) {
      el.setAttribute('href', LUARE_CONFIG.urls.customerContactForm);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/**
 * スクロールフェードインアニメーション
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // 古いブラウザ向けフォールバック
    animatedElements.forEach(el => el.classList.add('visible'));
  }
}

/**
 * フッターの著作権年表示
 */
function setCurrentYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
