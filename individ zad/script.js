document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Корзина: кнопки "В корзину"
  // =========================
  const CART_COUNT_STORAGE_KEY = "steamwiki_cart_count";

  const readStoredCartCount = () => {
    try {
      const raw = localStorage.getItem(CART_COUNT_STORAGE_KEY);
      const parsed = Number.parseInt(raw ?? "0", 10);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    } catch {
      return 0;
    }
  };

  const writeStoredCartCount = (value) => {
    try {
      localStorage.setItem(CART_COUNT_STORAGE_KEY, String(value));
    } catch {
      // ignore storage errors (private mode / blocked storage)
    }
  };

  let cartCount = readStoredCartCount();
  const cartCountElement = document.querySelector("#cart-count");

  const updateCartCount = () => {
    if (cartCountElement) {
      cartCountElement.textContent = String(cartCount);
    }
    writeStoredCartCount(cartCount);
  };

  updateCartCount();

  const cartButtons = document.querySelectorAll("[data-add-to-cart]");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const element = button;
      const productName =
        element.getAttribute("data-product-name") || "Неизвестная модификация";

      console.log(`Модификация "${productName}" добавлена в корзину`);
      alert(`Модификация "${productName}" добавлена в корзину`);

      cartCount += 1;
      updateCartCount();
    });
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== CART_COUNT_STORAGE_KEY) return;
    cartCount = readStoredCartCount();
    updateCartCount();
  });

  // =========================
  // Текущий год в подвале
  // =========================
  const currentYearElement = document.querySelector(".current-year");
  if (currentYearElement) {
    const year = new Date().getFullYear();
    currentYearElement.textContent = String(year);
  }

  // =========================
  // Бургер-меню
  // =========================
  const burger = document.querySelector(".burger");
  const mainNav = document.querySelector(".main-nav");

  if (burger && mainNav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("burger--active");
      mainNav.classList.toggle("main-nav--open");
    });
  }

  // =========================
  // Табы на странице товара
  // =========================
  const tabButtons = document.querySelectorAll("[data-tab-button]");
  const tabPanels = document.querySelectorAll("[data-tab-panel]");

  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab-button");
        if (!target) return;

        tabButtons.forEach((btn) => {
          btn.classList.remove("tabs__button--active");
          btn.setAttribute("aria-selected", "false");
        });

        tabPanels.forEach((panel) => {
          const panelElement = panel;
          if (panelElement.getAttribute("data-tab-panel") === target) {
            panelElement.classList.add("tabs__panel--active");
          } else {
            panelElement.classList.remove("tabs__panel--active");
          }
        });

        button.classList.add("tabs__button--active");
        button.setAttribute("aria-selected", "true");
      });
    });
  }

  // =========================
  // Фильтрация каталога по категориям
  // =========================
  const categoryLinks = document.querySelectorAll("[data-category-link]");
  const productCards = document.querySelectorAll("[data-category]");

  if (categoryLinks.length && productCards.length) {
    categoryLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const category = link.getAttribute("data-category-link") || "all";

        categoryLinks.forEach((item) => {
          item.classList.remove("category-list__link--active");
        });
        link.classList.add("category-list__link--active");

        productCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          const hideCard = category !== "all" && cardCategory !== category;
          if (hideCard) {
            card.classList.add("card--hidden");
          } else {
            card.classList.remove("card--hidden");
          }
        });
      });
    });
  }

  // =========================
  // Форма обратной связи (contacts.html)
  // =========================
  const feedbackForm = document.querySelector("#feedback-form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Сообщение отправлено");
      const form = feedbackForm;
      form.reset();
    });
  }
});

