import React from 'react';
import {Link} from 'react-router-dom';
import './category.css';
var a=0;



const CategoryDisplay = (props) =>

{
    const listMeal =({catData}) =>
    {
        if(catData)
        {
            return catData.map((item)=>{
                a++;
                if(a<17)
                {
                    return(
                        <Link to={`listing/${item.Category_id}`} key={item._id}>
                            <div className="data1">
                                <img src={item.Product_image} alt={item.Category}/>
                            </div> 
                        </Link>             )
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





export default CategoryDisplay;
