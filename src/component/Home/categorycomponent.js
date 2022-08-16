import React ,{Component} from 'react';
import CategoryDisplay from './category';
import './category.css';

const url='https://jiomartapi.herokuapp.com/category'


class Category extends Component {
    constructor() {
        super()
        this.state={category:''}
        
    }
    render() {
        return(
                <>
                     <div className="data bg ">
                        <h1 style={{color:"blue",fontSize:50}}>Shop by catagory</h1>
                        <CategoryDisplay catData={this.state.category}/>
                    </div>
                   
                   
                </>
            
            
            )
    }
    ///api calling
    componentDidMount()
    {
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({category:data})
        })
    }

}


export default Category;