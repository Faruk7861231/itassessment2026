function buyProduct(name) {
    alert(name + " has been added to cart 🛒");
}

document.addEventListener('keyup', e => {
    if (e.target.id === 'searchPhones') {
        let term = e.target.value.toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            let title = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = title.includes(term) ? "block" : "none";
        });
    }
});