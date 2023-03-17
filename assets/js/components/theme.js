function theme() {
    const btn = document.getElementById('btn--theme')
const body = document.body
const footer = document.querySelector('.footer')
const ls = window.localStorage



// comprabar si la clase esta en ls

// si esta aplicamos al body esa clase

// removemos del body esa clase

const theme = ls.getItem('theme')

if(theme === 'dark') {
  body.classList.add('dark')
  footer.classList.add('dark')
  
} else { 
  body.classList.remove('dark')
}
btn.addEventListener('click', function () {
 body.classList.toggle('dark')
 // tenemos que detectar que el body tenga la clase dark
 if (body.classList.contains('dark')) {
   // si la tiene gurdamos esa clase en ls
   ls.setItem('theme', 'dark')
  } else {
    // guardamos ese valor ls
    ls.setItem('theme', 'light')
 }
})
}

export default theme