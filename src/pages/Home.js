import React, {useState, useEffect} from 'react';
import './Home.css';
import Header from './Header';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';


function Home(){

    return (
        <div>
            <Header />
            <div className='card1'>
            <Card style={{'height':'80vh', 'width':'80vw'}}>
                <CardHeader title = "Hello, My Name Is Meghan." style={{'fontFamily':'Verdana,sans-serif '}}> </CardHeader>
            </Card>
            </div>
        </div>
    )

}

export default Home;