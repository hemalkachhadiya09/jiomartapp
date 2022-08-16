import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './slide.css';

class Slide extends Component {
    render(){
        return(
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    
                    <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                
                   
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="https://i.ibb.co/WGQkhJC/summer.jpg" alt="Summer"/>
                        </div>
                    
                        <div className="item">
                            <img src="https://i.ibb.co/YT3rVzN/h1.jpg" alt="H1"/>
                        </div>
                    
                        <div className="item">
                            <img src="https://i.ibb.co/G2Hkv2C/trend.jpg" alt="Trend"/>
                        </div>
                    </div>
                
                    
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    {/* <span className="sr-only">Previous</span> */}
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    {/* <span className="sr-only">Next</span> */}
                    </a>
                </div>
                <br/>
                <div id="deliver">
                    <img src="https://i.ibb.co/rQwp1h1/deliver.jpg" alt="delivery"/>
                </div>
            </div>
            )
    }
}

export default Slide;