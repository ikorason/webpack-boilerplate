import nature from '../../public/static/images/background.jpg'

export default () => {
  const element = document.createElement('img')
  element.src = nature
  return element
}
