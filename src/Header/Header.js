import './Header.css'

export const printHeader = () => {
  const appContainer = document.querySelector('#app')
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  h1.textContent = 'VC GAMES'
  header.append(h1)
  appContainer.append(header)
}
