(function () {
  'use strict';

  // ——— Счётчик корзины (храним в переменной) ———
  var cartCount = 0;

  function updateCartDisplay() {
    var el = document.getElementById('cartCount');
    if (el) el.textContent = cartCount;
  }

  // ——— Кнопки «В корзину» ———
  function initCart() {
    var buttons = document.querySelectorAll('.add-to-cart');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var name = this.getAttribute('data-name') || 'Товар';
        console.log('Товар ' + name + ' добавлен');
        alert('Товар "' + name + '" добавлен в корзину');
        cartCount += 1;
        updateCartDisplay();
      });
    }
  }

  // ——— Текущий год в подвале ———
  function initYear() {
    var els = document.querySelectorAll('.current-year');
    var year = new Date().getFullYear();
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = year;
    }
  }

  // ——— Бургер-меню ———
  function initBurger() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      this.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  // ——— Табы на странице товара ———
  function initTabs() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    var tabContents = document.querySelectorAll('.tab-content');
    if (tabBtns.length === 0) return;
    for (var i = 0; i < tabBtns.length; i++) {
      tabBtns[i].addEventListener('click', function () {
        var tabId = this.getAttribute('data-tab');
        for (var j = 0; j < tabBtns.length; j++) {
          tabBtns[j].classList.remove('active');
        }
        this.classList.add('active');
        for (var k = 0; k < tabContents.length; k++) {
          var content = tabContents[k];
          if (content.id === 'tab-' + tabId) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        }
      });
    }
  }

  // ——— Фильтр категорий в каталоге ———
  function initCatalogFilter() {
    var links = document.querySelectorAll('.filter-cat');
    var cards = document.querySelectorAll('.catalog-grid .product-card');
    if (links.length === 0 || cards.length === 0) return;
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (e) {
        e.preventDefault();
        var category = this.getAttribute('data-category');
        for (var j = 0; j < links.length; j++) {
          links[j].classList.remove('active-cat');
        }
        this.classList.add('active-cat');
        for (var k = 0; k < cards.length; k++) {
          var card = cards[k];
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    }
  }

  // ——— Форма контактов: alert при отправке ———
  function initContactForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Сообщение отправлено');
    });
  }

  // ——— Форма рассылки на главной (демо, без отправки) ———
  function initNewsletter() {
    var form = document.querySelector('.newsletter-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }

  // ——— Запуск при загрузке DOM ———
  function init() {
    initCart();
    initYear();
    initBurger();
    initTabs();
    initCatalogFilter();
    initContactForm();
    initNewsletter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
