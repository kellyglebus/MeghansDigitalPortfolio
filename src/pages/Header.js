import React, {useState, useEffect} from 'react';
import './Header.css'
import {Navigate, Link, useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import DigitalCreations from './DigitalCreations';
import EventPlanning from './EventPlanning';
import Photography from './Photography';
import WritingSample from './WritingSample'

const Header = () => { 
    const [value, setValue] = React.useState('1');
    const [re, setRe] = React.useState('');
    const [redirectPage, setRedirectPage] = React.useState(false);

    const onClick = (letsSetRedirect) => {
        setRe(letsSetRedirect);
        setRedirectPage(true);

        console.log('new set ' + letsSetRedirect);
        console.log('redirect? ' + redirectPage);
        console.log('value to redirect ' + re);
    }


    return (
    <div>
        <div className="header">
            <h1>
            Meghan Levinson
            </h1>
            <div className="subHeader">
                Digital Marketer & Content Creator 
            </div>
            <div className="contact">
                <PhoneIcon></PhoneIcon> 123-456-7890 <br />
                <EmailIcon></EmailIcon> meghanlevinson99@gmail.com
            </div>
        </div>
        <div className="tab">
            <Stack spacing={2} direction="row">
                {/* <Button label="About Me" value="1" onClick={()=>onClick('')} style={{ color: '#71CECE', borderBottom: '#71CECE'}}>About Me</Button>
                <Button label="Writing Sample" value="1" onClick={()=>onClick('WritingSample')} style={{ color: '#71CECE', borderBottom: '#71CECE'}}>Writing Sample</Button>
                <Button label="Event Planning" value="2"  onClick={()=>onClick('EventPlanning')} style={{ color: '#71CECE', borderBottom: '#71CECE'}}>Event Planning</Button>
                <Button label="Digital Creations" value="3" onClick={()=>onClick('DigitalCreations')}  style={{ color: '#71CECE', borderBottom: '#71CECE'}}> Digital Creations</Button>
                <Button label="Photography" value="4" onClick={()=>onClick('Photography')} style={{ color: '#71CECE', borderBottom: '#71CECE'}}> Photography</Button> */}
                <Link to ={{pathname:"/"}} style={{textDecoration: 'none'}}><Button label="About Me" value="1" style={{color: '#71CECE', borderBottom: '#71CECE'}}>About Me</Button></Link>
                <Link to ={{pathname:"/WritingSample"}} style={{textDecoration: 'none'}}><Button label="Writing Sample" value="1" style={{ color: '#71CECE', borderBottom: '#71CECE'}}>Writing Sample</Button></Link>
                <Link to ={{pathname:"/EventPlanning"}} style={{textDecoration: 'none'}}><Button label="Event Planning" value="2" style={{ color: '#71CECE', borderBottom: '#71CECE'}}>Event Planning</Button></Link>
                <Link to ={{pathname:"/DigitalCreations"}} style={{textDecoration: 'none'}}><Button label="Digital Creations" value="3" style={{ color: '#71CECE', borderBottom: '#71CECE'}}> Digital Creations</Button></Link>
                <Link to ={{pathname:"/Photography"}} style={{textDecoration: 'none'}}><Button label="Photography" value="4" style={{ color: '#71CECE', borderBottom: '#71CECE'}}> Photography</Button></Link>
                </Stack>
            </div>
        {/* {redirectPage ? <Navigate to={{pathname: `/${re}`}} />:''} */}
    </div>
)
}
export default Header

