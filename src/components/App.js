import 'font-awesome/scss/font-awesome.scss'

export default text => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
