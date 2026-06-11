// State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const closeCartBtn = document.getElementById('closeCart');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotalValue = document.getElementById('cartTotalValue');
const checkoutBtn = document.getElementById('checkoutBtn');

// Format Currency
const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
};

// Render Products
const renderProducts = () => {
    productsGrid.innerHTML = '';
    
    // products array is loaded from products.js
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-bottom">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})" title="Adicionar ao Carrinho">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
};

// Toast Notification System
const showToast = (productName, productImage) => {
    let toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `
        <img src="${productImage}" alt="${productName}" class="toast-img">
        <div class="toast-content">
            <span class="toast-title">Adicionado ao carrinho!</span>
            <span class="toast-text">${productName}</span>
        </div>
        <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    // Click on toast to open the cart (except on close button)
    toast.addEventListener('click', (e) => {
        if (!e.target.closest('.toast-close')) {
            openCart();
            toast.remove();
        }
    });
    
    // Close button event
    toast.querySelector('.toast-close').addEventListener('click', (e) => {
        e.stopPropagation();
        toast.classList.add('toast-fade-out');
        setTimeout(() => toast.remove(), 300);
    });
    
    toastContainer.appendChild(toast);
    
    // Auto-remove after 3.5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('toast-fade-out');
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 300);
        }
    }, 3500);
};

// Cart Logic
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(product.name, product.image);
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

const changeQuantity = (productId, delta) => {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
};

const updateCartUI = () => {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.innerText = totalItems;
    
    // Toggle body class for active cart FAB and toast positioning
    document.body.classList.toggle('cart-active', cart.length > 0);
    
    // Update Total
    const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalValue.innerText = formatPrice(totalValue);
    
    // Toggle Checkout Button
    checkoutBtn.disabled = cart.length === 0;
    
    // Render Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Seu carrinho está vazio.</div>';
        return;
    }
    
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        
        cartItemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });
};

// UI Interactions
const openCart = () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeCart = () => {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
};

const checkout = () => {
    if (cart.length === 0) return;
    
    let message = "Olá! Gostaria de finalizar a seguinte compra na Brincamente:\n\n";
    cart.forEach(item => {
        message += `- ${item.quantity}x ${item.name} (${formatPrice(item.price)})\n`;
    });
    
    const totalValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*Total: ${formatPrice(totalValue)}*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5515991340419?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
};

// Contact Form Submission (via Web3Forms AJAX)
const contactForm = document.querySelector('.contact-form');
const contactModal = document.getElementById('contactSuccessModal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (contactForm && contactModal) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const accessKeyInput = contactForm.querySelector('input[name="access_key"]');
        const accessKey = accessKeyInput ? accessKeyInput.value : '';
        
        if (accessKey === 'COLOQUE_SUA_CHAVE_AQUI' || !accessKey) {
            alert('Por favor, obtenha sua chave de acesso gratuita no site do Web3Forms (https://web3forms.com) e insira ela no arquivo "index.html" na linha 122 (no atributo value de access_key).');
            return;
        }

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        const botcheck = contactForm.querySelector('input[name="botcheck"]').checked;
        const subject = contactForm.querySelector('input[name="subject"]').value;
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                Nome: nome,
                Email: email,
                Mensagem: mensagem,
                botcheck: botcheck,
                subject: subject
            })
        })
        .then(async response => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            const resJson = await response.json();
            
            if (response.ok && resJson.success) {
                // Show success modal
                contactModal.classList.add('active');
                contactForm.reset();
            } else {
                console.error('Web3Forms Error:', resJson);
                alert('Erro ao enviar: ' + (resJson.message || 'Ocorreu um erro ao processar seu envio.'));
            }
        })
        .catch(error => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            console.error('Error during AJAX submission:', error);
            
            // Check if running on file:// protocol (local file)
            if (window.location.protocol === 'file:') {
                alert('Você está testando o site localmente abrindo o arquivo direto no navegador (file://).\n\nPara que o envio ocorra sem recarregar a página (AJAX), é necessário rodar através de um servidor local (ex: extensão Live Server do VS Code).\n\nVamos enviar o formulário de forma tradicional agora.');
                contactForm.submit();
            } else {
                if (confirm('Ocorreu um erro de conexão ao enviar a mensagem. Deseja enviar de forma tradicional?')) {
                    contactForm.submit();
                }
            }
        });
    });
    
    // Close modal actions
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });
    }
}

// Event Listeners
cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
checkoutBtn.addEventListener('click', checkout);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    
    // Initialize Promo Swiper
    if (typeof Swiper !== 'undefined') {
        new Swiper('.promoSwiper', {
            loop: true,
            effect: 'fade',
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
