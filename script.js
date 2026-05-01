const products = [
    {
        id: 1,
        name: "Перчатки хлопковые с ПВХ",
        description: "Универсальные рабочие перчатки с точечным покрытием ПВХ для надежного захвата",
        price: 45,
        category: "cotton",
        icon: "🧤",
        badge: "Хит продаж"
    },
    {
        id: 2,
        name: "Перчатки латексные усиленные",
        description: "Прочные латексные перчатки для строительных и ремонтных работ",
        price: 120,
        category: "latex",
        icon: "🧤",
        badge: null
    },
    {
        id: 3,
        name: "Перчатки нитриловые маслостойкие",
        description: "Маслостойкие нитриловые перчатки для механиков и автосервиса",
        price: 150,
        category: "latex",
        icon: "🧤",
        badge: "Новинка"
    },
    {
        id: 4,
        name: "Перчатки спилковые сварочные",
        description: "Кожаные перчатки из спилка для сварочных работ с усиленной защитой",
        price: 280,
        category: "leather",
        icon: "🧤",
        badge: null
    },
    {
        id: 5,
        name: "Перчатки утепленные зимние",
        description: "Зимние рабочие перчатки с утеплителем для работы в холодное время года",
        price: 200,
        category: "winter",
        icon: "🧤",
        badge: null
    },
    {
        id: 6,
        name: "Перчатки резиновые диэлектрические",
        description: "Диэлектрические перчатки для электриков с защитой до 1000В",
        price: 350,
        category: "latex",
        icon: "🧤",
        badge: null
    },
    {
        id: 7,
        name: "Перчатки кожаные комбинированные",
        description: "Комбинированные перчатки из натуральной кожи для тяжелых работ",
        price: 320,
        category: "leather",
        icon: "🧤",
        badge: "Хит продаж"
    },
    {
        id: 8,
        name: "Перчатки трикотажные с покрытием",
        description: "Легкие трикотажные перчатки с полиуретановым покрытием",
        price: 35,
        category: "cotton",
        icon: "🧤",
        badge: null
    },
    {
        id: 9,
        name: "Перчатки краги сварщика",
        description: "Удлиненные краги из спилка для максимальной защиты при сварке",
        price: 450,
        category: "leather",
        icon: "🧤",
        badge: "Премиум"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';
let currentSort = 'default';

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);

    renderProducts();
    updateCart();
    initScrollTop();
});

function renderProducts() {
    const productsContainer = document.getElementById('products');
    let filteredProducts = [...products];

    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }

    if (currentSort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    productsContainer.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-image-container">
                <div class="product-image">${product.icon}</div>
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price} ₽</div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6 2L4 6H2L4 16H16L18 6H16L14 2H6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                        </svg>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'cotton': 'Хлопковые',
        'latex': 'Латексные',
        'leather': 'Кожаные',
        'winter': 'Зимние'
    };
    return categories[category] || 'Рабочие';
}

function filterProducts(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    renderProducts();
}

function sortProducts(sortType) {
    currentSort = sortType;
    renderProducts();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showNotification('Товар добавлен в корзину!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (totalItems > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }

    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Корзина пуста</p>
            </div>
        `;
        totalPrice.textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Удалить">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 5L15 15M5 15L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');

    if (cartModal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function openCheckout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }

    const checkoutModal = document.getElementById('checkout-modal');
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>${item.price * item.quantity} ₽</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderTotal.textContent = total;

    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function submitOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const orderData = {
        customer: {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            address: formData.get('address'),
            comment: formData.get('comment')
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };

    console.log('Заказ оформлен:', orderData);

    showNotification('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.', 'success');

    cart = [];
    saveCart();
    updateCart();
    closeCheckout();
    toggleCart();

    event.target.reset();
}

function toggleSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');

    searchOverlay.classList.toggle('active');

    if (searchOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    } else {
        document.body.style.overflow = '';
        searchInput.value = '';
        document.getElementById('search-results').innerHTML = '';
    }
}

function searchProducts(query) {
    const searchResults = document.getElementById('search-results');

    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }

    const results = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">Ничего не найдено</div>';
        return;
    }

    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="selectSearchResult(${product.id})">
            <strong>${product.name}</strong>
            <div style="color: var(--text-light); font-size: 14px;">${product.price} ₽</div>
        </div>
    `).join('');
}

function selectSearchResult(productId) {
    addToCart(productId);
    toggleSearch();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icon = type === 'success' ? '✓' : '✕';

    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-message">${message}</div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const searchOverlay = document.getElementById('search-overlay');
        const cartModal = document.getElementById('cart-modal');
        const checkoutModal = document.getElementById('checkout-modal');

        if (searchOverlay.classList.contains('active')) {
            toggleSearch();
        } else if (checkoutModal.classList.contains('active')) {
            closeCheckout();
        } else if (cartModal.classList.contains('active')) {
            toggleCart();
        }
    }
});