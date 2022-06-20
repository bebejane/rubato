// global level js can go here



window.addEventListener('load', (event) => {

  var menu = document.getElementById('menu')
  var menuToggle = document.getElementById('menu-toggle')
  var nav = document.getElementById('nav')

  menuToggle.addEventListener('click', function(e){
    menuToggle.classList.toggle('menu--toggle-active')
    nav.classList.toggle('nav-active')
    menu.classList.toggle('menu-active')
  })

  var bar = document.getElementById('preview-bar-iframe')
  if(bar) bar.remove()
  
});