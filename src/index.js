import AppText from './components/AppText'
import AddImage from './components/AddImage'
import { bake } from './components/shake'
import './styles/index.sass'

document.getElementById('root').appendChild(AppText('Nature'))
document.getElementById('root').appendChild(AddImage())

bake()
