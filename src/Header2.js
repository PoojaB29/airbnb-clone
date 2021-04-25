import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core';
import './Header.css';

function Header2() {
    const history = useHistory();
    return (
            <div className="nearby">
                <span className="nearby__destination">
                    <Button onClick={() => history.push('./search')} variant='outlined'>
                        <img className="image" height="60px" width="60px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieO4YO7vglQcG7iTln_Tp5cV7klER0X-VnA&usqp=CAU" alt="" />
                        <p className="para">Explore nearby destinations</p>
                    </Button>
                </span>
                <h5>NEARBY GATEWAYS</h5>
            
                <div className="nearby__place">
                    <Button onClick={() => history.push('./search')} variant='outlined'>Greenwich</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Stratford</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Chiswick</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Wimbledon</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Richmond</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Bromley</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Croydon</Button>
                    <Button onClick={() => history.push('./search')} variant='outlined'>Wembley</Button>
                </div>
        </div>
    )
}

export default Header2


