function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "https://pbs.twimg.com/profile_images/1727456991499448320/RhtXt7Ot_400x400.jpg"
    )
    img.setAttribute(
      "alt",
      "Ilustração do Edu com fantasia de haloween e um pokèmon mimikyu no ombro"
    )
  }
  //se tiver light mode, adicionar a imagem light
  else {
    img.setAttribute(
      "src",
      "https://pbs.twimg.com/media/F98RODbXwAATped?format=jpg&name=large"
    )
    img.setAttribute(
      "alt",
      "Foto do Edu com roupa social ao lado do seu parceiro"
    )
  }

  //se tiver sem light mode, manter a imagem normal
}
