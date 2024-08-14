export const printFooter = () => {
  const appContainer = document.querySelector('#app')
  const footer = document.createElement('footer')
  const p = document.createElement('p')
  p.textContent = 'Juegos desarrollados por © Verónica Centeno'
  const linkedin = document.createElement('img')
  linkedin.className = 'linkedin'
  linkedin.src = 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png'
  footer.append(p, linkedin)
  appContainer.append(footer)
}
