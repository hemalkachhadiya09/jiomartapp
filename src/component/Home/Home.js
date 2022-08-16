import React from 'react';
import Slide from './slide';

import Category from './categorycomponent';
import Rated from './ratedComponent';
import Payment from './payment';



const Home =() =>{
    return(

        <>
            <Slide/>
            <Category/>
            <Rated/>
            <Payment/>
            
        </>
    )
}

export default Home