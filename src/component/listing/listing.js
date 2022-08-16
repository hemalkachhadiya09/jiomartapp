import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import BrandFilter from '../filters/brandFilter';
import SizeFilter from '../filters/sizeFilter';
import CostFilter from '../filters/costFilter';





const url='https://jiomartapi.herokuapp.com/items'


class Listing extends Component {

    constructor(props)
    {
        super(props)
        
        this.state = {items:''}
    }
    setDataPerFilter = (data) => {
        this.setState({items:data})
    }

    render()
    {
        return(
            <>
                   
                    <div id="content">
                        <div id="filterDiv">
                            <h1 id="fil">Filter</h1>
                            <hr/>
                            <BrandFilter categoryId={this.props.match.params.id} 
                            restItem={(data) => {this.setDataPerFilter(data)}}/>
                            <br/>
                            <SizeFilter categoryId={this.props.match.params.id} 
                            restItem={(data) => {this.setDataPerFilter(data)}}/>
                            <CostFilter/>
                           
                        </div>
                        <div id="contentDiv" >
                            
                            <ListingDisplay listData={this.state.items}/>
                            
                           
                        </div>
                        
                        
                    </div>
            </>

        )
    }

    //api calling
    componentDidMount()
    {
       let categoryId=this.props.match.params.id?this.props.match.params.id:'5';  
       sessionStorage.setItem('categoryId',categoryId)
       axios.get(`${url}/${categoryId}`)
       .then((res)=>{this.setState({items:res.data})})
    }
}

export default Listing;