import React,{Component} from 'react';
import './placeOrder.css';

const url = "https://jiomartapi.herokuapp.com/menuItem";
const purl = "https://jiomartapi.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.restName,
            name:'Hemal',
            email:'hemal@gmail.com',
            cost:0,
            phone:'079657654',
            address:'Ahmedabad,Gujrat',
            menuItem:''
        }
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(purl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewBooking'))
    }
    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems"  key={item.Product_id}>
                        <img src={item.Image} alt={item.Product_name}/>
                        <h3>{item.Product_name}</h3>
                        <h4>Rs. {item.Price}</h4>
                    </div>
                )
            })
        }
    }

    handleChange =(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order For {this.state.Product_name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group col-md-6">
                                <label for="fname">Name</label>
                                <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="phone">Phone</label>
                                <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="address">Address</label>
                                <input id="address" name="address" className="form-control"
                                value={this.state.address} onChange={this.handleChange}/>
                            </div>
                        </div>
                        {this.renderItem(this.state.menuItem)}
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Total Price is Rs.{this.state.Price}</h2>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.checkout}>PlaceOrder</button>
                    </div>
                </div>
            </>
        )
    }

    //call api 
    componentDidMount(){
        let menuItem =  sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) =>  res.json())
        .then((data)=>{
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.Price)
                return 'ok'
            })
            this.setState({menuItem:data,Price:totalPrice})
        })
    }

}

export default PlaceOrder