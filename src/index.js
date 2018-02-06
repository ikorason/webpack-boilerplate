import App from './components/App'
import 'react' // testing bundle spliting
import './index.sass'

document.getElementById('root').appendChild(App('Hello Webpack'))
