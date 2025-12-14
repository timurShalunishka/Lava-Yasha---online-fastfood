let cart = [];
let total = 0;

function addToCart(name, price) {
    // якщо товар вже є — збільшуємо кількість
    let item = cart.find(i => i.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.name} — ${item.price} грн</span>
            <div class="qty-controls">
                <button onclick="changeQty('${item.name}', -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty('${item.name}', 1)">+</button>
            </div>
        `;

        cartItems.appendChild(div);
    });

    document.getElementById("totalPrice").textContent = total;
}

function changeQty(name, change) {
    let item = cart.find(i => i.name === name);

    if (!item) return;

    // Зменшення
    if (change === -1) {
        item.qty--;
        total -= item.price;

        // Якщо кількість стала 0 — видаляємо товар
        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }

    // Збільшення
    if (change === 1) {
        item.qty++;
        total += item.price;
    }

    updateCart();
}

// Кнопка відкрити/закрити кошик
document.getElementById("toggleCartBtn").addEventListener("click", () => {
    const cart = document.getElementById("cart");

    if (cart,order.classList.contains("hidden")) {
        cart.classList.remove("hidden");
        toggleCartBtn.textContent = "Сховати кошик";
    } else {
        cart,order.classList.add("hidden");
        toggleCartBtn.textContent = "Показати кошик";
    }
});

if button"order" press = alert("1488")
