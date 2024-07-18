import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {BrowserRouter} from'react-router-dom'
import Routes from '../Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

<Routes/>

    </BrowserRouter>

  </React.StrictMode>,
)

export default App