import './Functions.css'
export const printFunctions = () => {
  const appContainer = document.querySelector('#app')
  const main = document.createElement('main')

  const divImg1 = document.createElement('div')
  const img1 = document.createElement('img')
  img1.src =
    'https://supermario3dworld.nintendo.com/assets/img/home/features/coin.gif'
  const title1 = document.createElement('p')
  title1.textContent = 'Find The Flea'
  const link1 = document.createElement('a')
  link1.href = 'https://findthefleavc.netlify.app/'

  const divImg2 = document.createElement('div')
  const img2 = document.createElement('img')
  img2.src =
    'https://supermario3dworld.nintendo.com/assets/img/home/features/coin.gif'
  const title2 = document.createElement('p')
  title2.textContent = 'Juego de Memoria'
  const link2 = document.createElement('a')
  link2.href = 'https://memorygamevc.netlify.app/'

  const divImg3 = document.createElement('div')
  const img3 = document.createElement('img')
  img3.src =
    'https://supermario3dworld.nintendo.com/assets/img/home/features/coin.gif'
  const title3 = document.createElement('p')
  title3.textContent = 'Tres En Raya'
  const link3 = document.createElement('a')
  link3.href = 'https://tresenrayavc.netlify.app/'

  divImg1.className = 'img-container'
  divImg2.className = 'img-container'
  divImg3.className = 'img-container'
  title1.className = 'text'
  title2.className = 'text'
  title3.className = 'text'

  link1.append(img1)
  link2.append(img2)
  link3.append(img3)
  divImg1.append(link1, title1)
  divImg2.append(link2, title2)
  divImg3.append(link3, title3)
  main.append(divImg1, divImg2, divImg3)
  appContainer.append(main)
}
