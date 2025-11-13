
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    event.target.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCart(productName, price) {
    alert(`✅ ${productName} adicionado ao carrinho!\n💰 Preço: R$ ${price.toFixed(2)}\n\nClique em "Compras" para ver seu carrinho.`);
}
