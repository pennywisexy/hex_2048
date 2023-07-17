import { createRoot } from 'react-dom/client'
import { App } from '@view/index'

import './index.css'


const container = document.getElementById('root')
let root

if (container) {
  root = createRoot(container)
} else {
  const htmlMainContainer = document.createElement('div')

  htmlMainContainer.setAttribute('id', 'root')
  document.body.insertAdjacentElement('afterbegin', htmlMainContainer)

  root = createRoot(htmlMainContainer)
}

root.render(<App />)





