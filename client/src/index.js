import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import registerServiceWorker from './registerServiceWorker'

import Store from './Services/Store'

import {Provider} from 'react-redux'

const Project = (props) => (
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(<Project />, document.getElementById('root'))
registerServiceWorker()