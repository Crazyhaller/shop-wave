import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Shipping from './Pages/Shipping/Shipping'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipping" element={<Shipping />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
