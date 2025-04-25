import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mining from './component/Mining.jsx';
import Home from './component/Home.jsx';
import Wallet from './component/wallet/Wallet.jsx';
import Profile from './component/wallet/Profile.jsx';
import Payment from './component/wallet/Payment.jsx';
import WithdrawDetails from './component/wallet/WithdrawDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/mining',
        element: <Mining></Mining>
      },
      {
        path: '/wallet',
        element: <Wallet></Wallet>
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/withdrawDetails',
        element: <WithdrawDetails></WithdrawDetails>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
