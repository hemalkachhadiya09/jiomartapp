import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import ProductDetails from './component/details/proDetails';
import Header from './header';
import Footer from './footer';
import Login from './component/login/login';
import Register from './component/login/register';
import PlaceOrder from './component/booking/placeOrder';


const Routing =() =>{
    return(
            <BrowserRouter>
                <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/listing/:id" component={Listing}/>
                    <Route path="/details" component={ProductDetails}/>
                    <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                    
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                <Footer/>
            </BrowserRouter>
               
        )
            
}


export default Routing