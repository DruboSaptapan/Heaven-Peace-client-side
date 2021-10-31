import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import AddPackages from './Components/AddPackage/AddPackage';
import MyOrders from './Components/MyOrders/MyOrders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import ManageOrders from './Components/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <PrivateRoute path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/addpackages">
              <AddPackages></AddPackages>
            </PrivateRoute>

            <Route path="/bookingDetails/:bookingId">
              <BookingDetails></BookingDetails>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
