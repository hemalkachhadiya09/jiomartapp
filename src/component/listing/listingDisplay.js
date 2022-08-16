import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';
let a=0;

const ListingDisplay =(props)=>{
    
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    if(a<3)
                        {
                            a++;
                            return(
                        
                        
                                <div   className="content1">
                                            <div className="subcontent1">
                                                <img src={item.Image} alt="Nike-TShirt"/>
                                                
                                             </div>
                                            <div className="subcontent2">
                                                <br/>
                                                <div className="labelDiv">
                                                    
                                                    <span className="label label-primary" style={{fontSize:15,marginBottom:50}}>
                                                        {item.Brand}
                                                    </span>
                                                    
                                                </div>
                                                <br/>
                                                <span className="head"><Link to={`/details?restId=${item.Product_id}`}>{item.Product_name}</Link> </span>
                                                
                                                <p className="pin"> {item.Info}</p>
                                                <p className="pin">{item.Rating} Ratings</p>
                                                
    
                                
                                
        
                                            </div>
                                    
                               </div>
                           
                               
                                    
                                
                            
                        )
                        }
                    
                })

            }else{
                return(
                    <div>
                        <h2>No Data For the Filter</h2>
                    </div>
                )
            }
        }else{
            return(     
                <div>
                    <img src="Loader.gif" alt="loader"/>
                    <h2>Loading....</h2>
                </div>
            )
        }
    }


    return(
        <div >
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay;