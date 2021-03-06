import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { Toaster } from 'react-hot-toast';
import Blogs from './Pages/Blogs/Blogs';
import Error404 from './Pages/Shared/Error404';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import IndexDash from './Pages/Dashboard/IndexDash';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import Portfolio from './Pages/Portfolio/Portfolio';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ManageBookings from './Pages/Dashboard/ManageBookings';
import PaymentPage from './Pages/Dashboard/PaymentPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <PurchasePage />
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<IndexDash></IndexDash>}></Route>
          <Route path='orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='pay/:id' element={<PaymentPage></PaymentPage>}></Route>
          <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          <Route path='managebookings' element={<RequireAdmin><ManageBookings></ManageBookings></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<Error404 />}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div >
  );
}

export default App;
