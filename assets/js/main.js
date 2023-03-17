const btn = document.getElementById('btn--theme')
const body = document.body
const footer = document.querySelector('.footer')
const ls = window.localStorage
 const main = document.querySelector('.main-main')
const loade = document.querySelector('.loader') 
const header =document.querySelector('.header')

const cartCss = document.querySelector('.cart') 


// comprabar si la clase esta en ls

// si esta aplicamos al body esa clase

// removemos del body esa clase

const theme = ls.getItem('theme')

if(theme === 'dark') {
    header.classList.add('dark')
  body.classList.add('dark')
  footer.classList.add('dark')
  loade.classList.add('dark')
    main.classList.add('dark')
    cartCss.classList.add('dark')

} else { 
    header.classList.remove('dark')
  body.classList.remove('dark')
  footer.classList.remove('dark')
  loade.classList.remove('dark')
    main.classList.remove('dark')
    cartCss.classList.remove('dark')
 
}

btn.addEventListener('click', function () {
 body.classList.toggle('dark')
 footer.classList.toggle('dark')
 loade.classList.toggle('dark')
 main.classList.toggle('dark')
 header.classList.toggle('dark')
 cartCss.classList.toggle('dark')
 // tenemos que detectar que el body tenga la clase dark
 if (body.classList.contains('dark')) {
   // si la tiene gurdamos esa clase en ls
   ls.setItem('theme', 'dark')
  } else {
    // guardamos ese valor ls
    ls.setItem('theme', 'light')
 }
})




import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'

/* UI Elements */
/* Ocultando loader */

loader() 

/* Mostrar menu */
showMenu()

/* Mostar carrito */
showCart()

/* Ens UI Elements */

/* Productos */
const {db, printProducts} = products(await getProducts())


/* Carrito */
cart(db, printProducts)
