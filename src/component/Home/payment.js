import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './payment.css';

class Payment extends Component {
    render(){
        return(
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                
                    <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                
                
                    <div className="carousel-inner">
                        <div className="item car ">
                                <img src="https://i.ibb.co/kMgC8NR/Mobiwik.jpg" className="d-block w-30 pay2" alt="image"/>
                                {/* <img src="https://i.ibb.co/w0dyzHy/freecharge.jpg" className="d-block w-30 pay3" alt="image"/> */}
                        </div>
                    
                        <div className="item car">
                                <img src="https://i.ibb.co/Jqv4mLz/HDFC.jpg" className="d-block w-44 pay2" alt="image"/>
                                {/* <img src="https://i.ibb.co/nq23vvr/payapp.jpg" className="d-block w-44 pay3" alt="image"/> */}
                        </div>
                    
                        <div className="item active car">
                                <img src="https://i.ibb.co/pxHdSRj/Paytm.jpg" className="d-block w-44 pay2" alt="image"/>
                                {/* <img src="https://i.ibb.co/rc8m8Nd/simple.jpg" className="d-block w-44 pay3" alt="image"/> */}
                        </div>
                    </div>
                
                
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                   
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    
                    </a>
                </div>
          
            </div>
            )
    }
}

export default Payment;