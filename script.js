document.addEventListener("DOMContentLoaded", () => {

    let cart = [];
    let total = 0;

    // ДОДАТИ В КОШИК
    window.addToCart = function (name, price) {
        let item = cart.find(i => i.name === name);

        if (item) {
            item.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        total += price;
        updateCart();
    };

    // ОНОВИТИ КОШИК
    function updateCart() {
        const cartItems = document.getElementById("cartItems");
        const totalPrice = document.getElementById("totalPrice");

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

        totalPrice.textContent = total;
    }

    // ЗМІНИТИ КІЛЬКІСТЬ
    window.changeQty = function (name, change) {
        let item = cart.find(i => i.name === name);
        if (!item) return;

        if (change === -1) {
            item.qty--;
            total -= item.price;

            if (item.qty <= 0) {
                cart = cart.filter(i => i.name !== name);
            }
        }

        if (change === 1) {
            item.qty++;
            total += item.price;
        }

        updateCart();
    };

    // ПОКАЗАТИ / СХОВАТИ КОШИК
    const toggleCartBtn = document.getElementById("toggleCartBtn");
    const cartBlock = document.getElementById("cart");

    toggleCartBtn.addEventListener("click", () => {
        cartBlock.classList.toggle("hidden");
        toggleCartBtn.textContent = cartBlock.classList.contains("hidden")
            ? "Показати кошик"
            : "Сховати кошик";
    });

    // ЗАМОВИТИ
    document.querySelector(".order").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Кошик порожній!");
            return;
        }

        alert("Замовлення прийнято! Сума: " + total + " грн");

        cart = [];
        total = 0;
        updateCart();
    });

});
