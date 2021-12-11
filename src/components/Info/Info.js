import React from "react";
import './Info.css';
import { Doughnut } from 'react-chartjs-2';

class Info extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            data:0
        }
    }
    getexp = () => {
        var date=new Date();
        fetch("http://localhost:3000/trn",{
            method:"post",
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                id:this.props.user.id,
                month:date.getMonth(),
                year:date.getFullYear()
            })
        }).then(resp =>  resp.json()).then(data => {
            console.log(data);
            this.setState({data:data});
        })
    }
    componentDidMount() {
        this.getexp();
    }
    render() {
        const data = {
            labels: [
                'Rent',
                'Food',
                'Bill',
                'Clothes',
                'Transport',
                'Others'
            ],
            datasets: [{
              label: 'My First Dataset',
              data:this.state.data,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 255, 0)',
                'rgb(255, 140, 0)',
                'rgb(155, 99, 132)'
              ],
              hoverOffset: 4
            }]
        };
        return(
            <div className='info'>
                <div className='grids'>
                    <div className='nest'>
                        <div className='box'>
                            <div className='header f3'>
                                <p>Current Balance</p>
                            </div>
                            <div className='details pa3 f3 ma0'>
                                <p className='ma0'>1,35,223</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <p>Next Payment Due</p>
                            </div>
                            <div className='details'>
                                <p>10/12/2021</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <p>Next Payment Due</p>
                            </div>
                            <div className='details'>
                                <p>10/12/2021</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <p>Next Payment Due</p>
                            </div>
                            <div className='details'>
                                <p>10/12/2021</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <p>Next Payment Due</p>
                            </div>
                            <div className='details'>
                                <p>10/12/2021</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='header'>
                                <p>Next Payment Due</p>
                            </div>
                            <div className='details'>
                                <p>10/12/2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <p>Current Months Expenses</p>
                        </div>
                        <div className='details'>
                            <Doughnut height='400' width='400' data={data} />
                        </div>
                    </div>
                </div>
                <div className='btmr'>
                    <button onClick={() => {this.props.openpay(true)}} className='add-pay'>+</button>
                </div>
            </div>
        )
    }
}

export default Info;