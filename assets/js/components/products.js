function products(products) {
    const db = [...products]

    function printProducts() {
        const productsDOM = document.querySelector('.products__container')

        let htmlProduct = ''

        for (let product of db) {
            htmlProduct += `
            <article class="product" data-product-id="${product.id}">

                <div class="product__image">
                    <img src="${product.image}"
                        alt="${product.name}" height="100px">
                </div>

                <div class="product__content">

                    <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                        <i class='bx bx-cart-add'></i>
                    </button>
                    <span class="product__price">$${product.price}</span>
                    <span class="product__stock" data-id-Stock="${product.id}" >Disponible: ${product.quantity}</span>
                    <h3 class="product__title">${product.name} </h3>
                </div>
            </article>
            `
        }

        productsDOM.innerHTML = htmlProduct
    }

    printProducts()

    return {
        db,
        printProducts
    }
}

export default products