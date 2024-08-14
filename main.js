import './style.css'
import { printHeader } from './src/Header/Header'
import { printFunctions } from './src/Functions/Functions'
import { printFooter } from './src/Footer/Footer'

const init = () => {
  printHeader()
  printFunctions()
  printFooter()
}
init()
