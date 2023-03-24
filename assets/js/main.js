import verifyTheme from './helpers/localStorage.js'
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

/* cambiar tema */

verifyTheme()