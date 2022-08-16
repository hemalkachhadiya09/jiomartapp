import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';


const url = "https://jiomartapi.herokuapp.com";

class ProductDetails extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            userItem:'',
            
        }
    }
    
    addToCart = (data) => {
        this.setState({userItem:data})
    }
    proceed = () => {
        
        this.props.history.push(`/placeOrder/${this.state.details.Product_name}`)
    }

    render()
    {   let details=this.state.details
        return(
            <>  <div id="demain">
                    <div id="subdemain1">
                        <img src={details.Image} alt="image" class="reat"/>
                        
                    </div>
                    <div id="subdemain2">
                        <h3>{details.Info}</h3>
                        
                        <h3>{details.Rating} rating</h3>
                        <h3>Price :{details.Price}+tax </h3>
                        <h3>Price:<strike>₹1499</strike></h3>
                        <h3>You Save:₹500</h3>
                       
                        <h1 id="a1">Available</h1>
                        <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/"><button class="btn btn-success b1"> Add to cart </button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-danger b2" onClick={this.proceed}> Checkout </button>
            
            
                    </div>
                </div>
                
                    
                
                
                
            </>
            )
    }

           
    

    // calling with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/product/${restId}`)
        console.log(">>>>",restId)
        // let menu = await axios.get(`${url}/menu/${restId}`)
        this.setState({details:response.data[0]})
    }
}


export default ProductDetails;