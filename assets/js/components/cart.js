
function cart (db, printProducts) {
    let cart = []

    const productsDOM = document.querySelector('.products__container')
    const productDOM = document.querySelectorAll('.product')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart__body')
    const countDOM = document.querySelector('.cart__count--item')
    const totalDOM = document.querySelector('.cart__total--item')
    const subTotalDOM = document.querySelector('.cart__subTotal--item')
    const ivaDOM = document.querySelector('.cart__iva--item')
    const checkoutDOM = document.querySelector('.btn--buy')
    const qtyDOM = document.querySelectorAll('.product__stock')

    function printCart() {
     /*    console.log(cart)
        console.log('Items: ' + showItemsCount())
        console.log('Total: ' + showTotal()) */

        let htmlCart = ''


        if (cart.length === 0 ){
            htmlCart += `
            <div class="cart__empty">
            <i class="bx bx-cart"></i>
            <p class="cart__empty--text">No hay productos en el carrito</p>
        </div>
            `
            notifyDOM.classList.remove('show--notify')
        } else{
            for (const item of cart) {
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <div class="article">
                    <div class="article__image">
                        <img src="${product.image}"
                            alt="${product.name}">
                    </div>

                    <div class="article__content">
                        <h3 class="article__title">${product.name} </h3>
                        <span class="article__price">
                            $${product.price}
                        </span>
                        <div class="article__quantity">
                        
                        <button type="button" class="aricle__quantity-btn article--minus" data-id="${item.id}">
                            <i class="bx bx-minus"></i>
                        </button>
                        <span class="article__quantity-text" >${item.qty}</span>
                        <button type="button" class="aricle__quantity-btn article--plus" data-id="${item.id}">
                            <i class="bx bx-plus"></i>
                        </button>
                        </div>
                        <button type="button" class="aricle__btn remove-from-cart" data-id="${item.id}">
                            <i class="bx bx-trash"></i>
                        </button>
                    </div>
                </div>
                `
            }
            notifyDOM.classList.add('show--notify')
            
        }

        cartDOM.innerHTML= htmlCart


        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()

        totalDOM.innerHTML = ' $' + showTotal()
        subTotalDOM.innerHTML = ' $' + (showTotal()*.84 ).toFixed(2)
        ivaDOM.innerHTML = ' $' + (showTotal()*.16).toFixed(2)

    }

    function addToCart(id, qty= 1) {
        
        const itemFinded = cart.find(i => i.id === id)
        if(itemFinded ){
/*             console.log('El producto con el id ' + id + ' ya esta')

 */            
            if (itemFinded.qty < db[id-1].quantity) {
    itemFinded.qty += qty
            }

        }else{
/*             console.log('El producto con el id ' + id + ' no esta')
 */
            cart.push({id, qty})
        }
        printCart()
    }

    function lowerStock(id) {
        const idStock = id-1
        const itemFinded = cart.find(i => i.id === id)
        let res =  db[idStock].quantity - itemFinded.qty
        let htmlProduct = 'Disponible: '
        let stock= qtyDOM[idStock].dataset.idStock
       
        for (const item of cart) {
            if (stock = item.id){
                qtyDOM[idStock].innerHTML = htmlProduct +res
                console.log(res)
                if (res === 0) {
                    qtyDOM[idStock].innerHTML = 'AGOTADO'
                    productDOM[idStock].classList.add('product__sold')
/*                     productDOM[idStock].classList.add('img_a')
 */                    productDOM[idStock].classList.add('sold__out')
                    let img = productDOM[idStock].querySelector('.product__image')
                    /* img.outerHTML = '<img src="./assets/imgs/soldOut.png" alt="">'  */
                    let contProd = productDOM[idStock].querySelector('.product__btn')
                    contProd.classList.add('hidden')
                }
            }
        }
        
        return res
        

    }
    

/*  */
    function removeFromCart(id, qty = 1) {
        const itemFinded = cart.find (i => i.id === id)
        
        const result = itemFinded.qty - qty
        /* console.log(itemFinded)
        console.log(result) */
        if (result > 0) {
            /* console.log('Quedan productos con el id ' + id) */
            itemFinded.qty -= qty
        }else{
            /* console.log('No quedan productos con el id ' + id) */
            cart = cart.filter(i => i.id !==id)/*  */
            
        }
        printCart()
    }


    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !==id)
       /*  console.log('Se elimino el producto ' + id) */
        printCart()
    }

    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
        }
        return suma
    }


    function showTotal (){
        let total = 0
        for (const item of cart) {
            const productsFinded = db.find(p => p.id === item.id)
            total += item.qty * productsFinded.price
        }
        return total
    }

    function checkout() {
        for (const item of cart) {
            const productsFinded = db.find(p => p.id === item.id)
            console.log(productsFinded)
            productsFinded.quantity - item.qty
        }

        cart = []
        printCart()
        printProducts()
         window.alert('Gracias por su compra') 
        
    }
    printCart()
    //Eventos
    productsDOM.addEventListener('click', function (e) {
        if (e.target.closest('.add--to--cart')) {
            const id = +e.target.closest('.add--to--cart').dataset.id
            addToCart(id)
            console.log(lowerStock(id))
        }
 
    })

    cartDOM.addEventListener('click', function (e) {
           
    if (e.target.closest('.article--minus')) {
        const id = +e.target.closest('.article--minus').dataset.id
        removeFromCart(id)
    }
    if (e.target.closest('.remove-from-cart')) {
        const id = +e.target.closest('.remove-from-cart').dataset.id
        deleteFromCart(id)
    }

    if (e.target.closest('.article--plus')) {
        const id = +e.target.closest('.article--plus').dataset.id
        console.log(db[id].id)
        addToCart(id)
        
    }

   
}) 

checkoutDOM.addEventListener('click', function () {
    checkout()
})




}

export default cart 