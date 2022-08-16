import React,{Component} from 'react';
import axios from 'axios';

const url = "https://jiomartapi.herokuapp.com/items";

class SizeFilter extends Component{

    filterSize = (event) => {
        let categoryId = this.props.categoryId;
        console.log(categoryId)
        let sizeId = event.target.value;
        console.log(sizeId)
        let cuisineUrl;
        if(sizeId === ""){
            cuisineUrl = `${url}/${categoryId}`
        }else{
            cuisineUrl = `${url}/${categoryId}?size=${sizeId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restItem(res.data)})

    }

    render(){
        return(
            <>
                <span id="sort">Select your size: </span>
                <div style={{marginLeft:'15%'}} onChange={this.filterSize}>
                    <label className="radio">
                        <input type="radio" value="" name="SIZE"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="XS" name="SIZE"/>XS
                    </label>
                    <label className="radio">
                        <input type="radio" value="S" name="SIZE"/>S
                    </label>
                    <label className="radio">
                        <input type="radio" value="M" name="SIZE"/>M
                    </label>
                    <label className="radio">
                        <input type="radio" value="L" name="SIZE"/>L
                    </label>
                    <label className="radio">
                        <input type="radio" value="XL" name="SIZE"/>XL
                    </label>
                    <label className="radio">
                        <input type="radio" value="XXL" name="SIZE"/>XXL
                    </label>
                </div>
                
            </>
        )
    }
    

}

export default SizeFilter