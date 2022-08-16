import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css';
const url="https://jiomartapi.herokuapp.com/items"
const authUrl = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            items:'', 
            userData:''  
            
        }
    }
    renderItems= (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.Product_id} key={item.Product_id}>{item.Product_name}</option>
                )
            })
        }
    }
    handleItem = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }
    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }
    conditionalHeader = () => {
       
            if(sessionStorage.getItem('ltk'))
            {
                let data=this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userinfo',outArray);
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/" style={{color:"white"}}>
                                <span className="glyphicon glyphicon-user"></span>Hi {data.name}
                                </Link>
                            </li>
                            
                            <li><button style={{marginTop:9,marginRight:5,backgroundColor:"white",color:"black"}}onClick={this.handleLogout} className="btn btn-info">Logout</button></li>
                        </ul>
                    </>
                )

            }
            return(
                <>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/register" style={{color:"white"}}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/login" style={{color:"white"}}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
                    
                </>
            )
        
            
        
        
            
            
    }
        
    
    render(){
        return(
            <div>
                <div id="search">
                            <select onChange={this.handleItem}  >
                                <option >Search essential grocesry and more....</option>
                                
                                {this.renderItems(this.state.items)}
                            </select> 
                </div>
                <nav className="navbar navbar-inverse bgd">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a href="#"><i className="fa fa-bars "  style={{color:"white",fontSize:37,marginTop:9}} aria-hidden="true"></i></a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/" style={{color:"white",fontSize:33,fontWeight:"bold",marginTop:2,marginLeft:10}}>JioMart</Link></li>
                        </ul>
                        
                        
                        <ul>
                            {this.conditionalHeader()}
                        </ul>
                            
                            

                       
                    </div>
                </nav>
                
                
                
            </div>
            )
    }
    // api calling on page load
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({items:data})
        })
        fetch(authUrl,{method:'GET',headers:{
            'x-access-token':sessionStorage.getItem('ltk')
        }})
        .then((res) => res.json())
        .then((data) => {
            this.setState({userData:data})
        })
    }
    
}

export default withRouter(Header);