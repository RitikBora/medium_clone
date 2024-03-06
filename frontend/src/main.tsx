import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Appbar from './components/Appbar.tsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Appbar/>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
