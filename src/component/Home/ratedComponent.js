import React ,{Component} from 'react';
import RatedDisplay from './rated';
import './rated.css';

const url='https://jiomartapi.herokuapp.com/ratedItem'


class Rated extends Component {
    constructor() {
        super()
        this.state={category:''}
        
    }
    render() {
        return(
                <>

                    <div>
                        <span id="top">Top Rated By Customers</span>
                        <br/>
                        <div id="main1">
                            <RatedDisplay catData={this.state.category}/>
                        </div>
                        
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


export default Rated;