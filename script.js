function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag image
  const img = document.querySelector("#profile img")

  //susbstituir a imagem
  if (html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/Mobile/Logo icon/avatar.png')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Mobile/Logo icon/avatar-sol.png")
  }


}