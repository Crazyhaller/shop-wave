import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Shipping from './Pages/Shipping/Shipping'
import Payment from './Pages/Payment/Payment'
import PlaceOrder from './Pages/Place Order/PlaceOrder'
import Order from './Pages/Order/Order'
import Profile from './Pages/Profile/Profile'
import OrderList from './Pages/Admin/OrderList'
import ProductList from './Pages/Admin/ProductList'
import ProductEdit from './Pages/Admin/ProductEdit'
import UserList from './Pages/Admin/UserList'
import PrivateRoute from './components/Private Route/PrivateRoute'
import AdminRoute from './components/Admin Route/AdminRoute'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/productlist" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
        <Route path="/admin/userlist" element={<UserList />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
