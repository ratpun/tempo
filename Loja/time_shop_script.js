document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.actions button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (!button.disabled) {
                alert('Produto adicionado ao carrinho!');
            }
        });
    });

    // Exemplo de funcionalidade adicional: alternar a disponibilidade de produtos
    const toggleAvailability = () => {
        const products = document.querySelectorAll('.product');

        products.forEach(product => {
            const status = product.querySelector('.status');
            const button = product.querySelector('button');

            if (status.classList.contains('unavailable')) {
                status.textContent = 'Disponível';
                status.classList.remove('unavailable');
                status.classList.add('available');
                button.disabled = false;
                button.textContent = 'Comprar';
            } else {
                status.textContent = 'Esgotado';
                status.classList.remove('available');
                status.classList.add('unavailable');
                button.disabled = true;
                button.textContent = 'Indisponível';
            }
        });
    };

    // Exemplo: Alternar disponibilidade ao pressionar uma tecla (tecla "T")
    document.addEventListener('keydown', (event) => {
        if (event.key === 't' || event.key === 'T') {
            toggleAvailability();
        }
    });
});
