import React,{Component} from 'react';
import axios from 'axios';

const url = "https://jiomartapi.herokuapp.com/filter";
const filterUrl = "https://jiomartapi.herokuapp.com/filterRating";

class CostFilter extends Component{
   
    filterCost = (event) => {
        let categoryId = sessionStorage.getItem('categoryId')
        
      
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?sort=-1`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }
    filterRate = (event) => {
        let categoryId = sessionStorage.getItem('categoryId')
        
      
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${categoryId}`
        }else{
            costUrl = `${url}/${categoryId}?sort=-1`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }

    render(){
        return(
            <>
                 <span id="sort">Sort by </span>
                <div style={{marginLeft:'15%'}} >
                    <div onChange={this.filterRate}>
                        <input type="radio" name="Price" value="Rating:High to Low" id="Rating:High to Low"/>&nbsp;&nbsp;   
                        <label for="Rating:High to Low">Rating:High to Low</label>
                    </div>
                    <div onChange={this.filterCost}>
                        <input type="radio" name="Price" value="Cost:Low to High" id="Cost:Low to High"/>&nbsp;&nbsp;
                        <label for="Cost:Low to High">Cost:Low to High</label>
                    </div>
                    <div onChange={this.filterCost}>
                        <input type="radio" name="Price" value="Cost:High to Low" id="Cost:High to Low"/>&nbsp;&nbsp;
                        <label for="Cost:High to Low">Cost:High to Low</label>
                    </div>
                </div>
            </>
        )
    }

}

export default CostFilter