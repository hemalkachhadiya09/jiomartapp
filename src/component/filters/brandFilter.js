import React,{Component} from 'react';
import axios from 'axios';

const url = "https://jiomartapi.herokuapp.com/items";

class BrandFilter extends Component{

    filterBrand= (event) => {
        let categoryId = this.props.categoryId;
        console.log(categoryId)
        let sizeId = event.target.value;
        console.log(sizeId)
        let cuisineUrl;
        if(sizeId === ""){
            cuisineUrl = `${url}/${categoryId}`
        }else{
            cuisineUrl = `${url}/${categoryId}?brandName=${sizeId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restItem(res.data)})

    }

    render(){
        return(
            <>
                <span id="sort">Please select Brand </span><br/>
                <div style={{marginLeft:'15%'}} onChange={this.filterBrand}>
                    <input type="checkbox" value="XS" name="H&M"/><span className="inpur">H&M</span><br/>
                    <input type="checkbox" value="Nike" name="Nike"/><span className="inpur">Nike</span><br/>
                    <input type="checkbox" value="LP" name="LP"/><span className="inpur">LP</span><br/>
                    <input type="checkbox" value="Highlander" name="Highlander"/><span className="inpur">Highlander</span><br/>
                    <input type="checkbox" value="Raymond" name="Raymond"/><span className="inpur">Raymond</span><br/>
                    <input type="checkbox" value="Puma" name="Puma"/><span className="inpur">Puma</span><br/>
                    <input type="checkbox" value="Adidas" name="Adidas"/><span className="inpur">Adidas</span>
                </div>
            </>
        )
    }

}

export default BrandFilter