import React from "react";
import "./Home.css";
import logo from "../imgs/wallet.png";
import pic from "../imgs/pictures.png";
import hand from "../imgs/hand.png";
import overdue from "../imgs/overdue.png";
import Nav from '../Nav/Nav.js';

function Home(){
    return (
        <div>
            <Nav page={'home'} />
            <div className='cover'>
                <div className='cover-div'>
                    <img src={logo} alt='logo'/>
                </div>
                <div>
                    <p className='home-header'>Money Manager</p>
                    <p className='slogan'>Tracking your money has never been so quick and easy.</p>
                </div>
            </div>
            <div className='flexs'>
                <div className='cont'>
                    <h2>About us</h2>
                    <p className='text'>
                        This software is a one-stop place for a user to manage all his online transactions, credit card statements, UPI payments and other cash expenditures
                    </p>
                </div>
                <div className="cont bl">
                    <h2>Our Product</h2>
                    <p className='text'>Our project will act as a dashboard showcasing all different transactions/bank-statements at a single place. This will provide complete transparency to the user about the different platforms he/she uses. This software is a one-stop place for a user to manage all his online transactions, credit card statements, UPI payments and other cash expenditures.
                    </p>
                </div>
            </div>
            <div id='info'>
                <h2>With our Website You Can:</h2>
                <div className="flexs pro">
                    <div className='zones'>
                        <img src={pic} alt='pic'/>
                        <h2>See the Whole Picture</h2>
                        <p className='text'>One app to unite your finances.
                        Dive into reports, sync with your bank(s) and enjoy automatic categorizations.</p>
                    </div>
                    <div className='zones'>
                        <img src={hand} alt='hand'/>
                        <h2>Manage Your Cash </h2>
                        <p className='text'>Get ahead of the curve.From insurance to shopping lists to loan payments, Wallet helps you plan and anticipate every move.</p>
                    </div>
                    <div className='zones'>
                        <img src={overdue} alt='overdue'/>
                        <h2> Put an end to late fees</h2>
                        <p className='text'> Don’t pay more than you need to. We’ll track bills to help make sure you never miss a due date. No time-consuming setup process.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;