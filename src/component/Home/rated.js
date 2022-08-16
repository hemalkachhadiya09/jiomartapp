import React from 'react';
import {Link} from 'react-router-dom';
import './rated.css';
var a=0;



const RatedDisplay = (props) =>


{
    
    
    const listMeal =({catData}) =>

    {
        
        
        if(catData)
        {
            return catData.map((item)=>{
                a++;
                if(a<5)
                {
                    return(

                        <Link to={`listing/${item.Category_id}`} key={item._id}>
                            
                                
                                <div className="thing">
                                    <div className="subthing">
                                        <img src={item.Image}alt={item.Info}/>
                                    </div>
                                    
                                    <div className="subwrite">
                                        
                                        <h5>{item.Info}</h5>
                                        <h5>Price : {item.Price}  M.R.P.:<del>₹200</del></h5>
                                        <h5>You  Save: ₹50</h5>
                                    </div> 
                                </div>
                           
                        </Link>   
                               )
                    
                }
                
            })
        }

    }
    return(
        <>
            <div >
                {listMeal(props)}
            </div>
        </>
       
        )
}





export default RatedDisplay;