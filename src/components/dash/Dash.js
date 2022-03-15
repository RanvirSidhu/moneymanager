import React from "react";
import Expl from '../Expl/Expl.js';
import Info from '../Info/Info.js';
import Nav from '../Nav/Nav.js';
import './Dash.css'

function Dash(props)
{
    let list=["Dashboard","Expenses","Transactions"];
    return(
        <div>
            <Nav page='dash' user={props.user.name} />
            <div className='dash'>
            <div>
                <Info openpay={props.openpay} user={props.user} newpay={props.newpay} setnew={props.setnew}/>
            </div>
            <div className='sidebar'>
                <Expl list={list}/>
            </div>
            </div>
        </div>
    )
}

export default Dash;