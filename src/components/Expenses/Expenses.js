import React from "react";
import Expl from "../Expl/Expl";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Nav from '../Nav/Nav.js';
import "./Expenses.css";

class Expenses extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            month:'0',
            year:'2021',
            yearlyexp:[],
            yearlysav:[],
            monthlyexp:[]
        }
    }
    monthchange = (event) => {
        this.setState({month:event.target.value});
        this.getmonthly(event.target.value,this.state.year);
    }

    yearchange = (event) => {
        this.setState({year:event.target.value});
        console.log(this.state);
        this.getyearly(event.target.value);
        this.getmonthly(this.state.month,event.target.value);
    }

    getyearly = (year) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/exp-year`,{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                id:this.props.user.id,
                year:year
            })
        }).then(resp => resp.json()).then(data => {
            var savings=[0,0,0,0,0,0,0,0,0,0,0,0];
            savings.fill(this.props.user.salary);
            for(var i=0;i<12;++i)
            {
                savings[i]-=data[i];
            }
            this.setState({yearlyexp:data});
            this.setState({yearlysav:savings});
        })
    }

    getmonthly = (month,year) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/trn`,{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                id:this.props.user.id,
                month:month,
                year:year
            })
        }).then(resp => resp.json()).then(data => {
            this.setState({monthlyexp:data});
        })
    }

    componentDidMount(){
        this.getyearly(this.state.year);
        this.getmonthly(this.state.month,this.state.year);
    }

    render() {
    var bar={
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
        datasets: [{
            label:'Savings',
            data: this.state.yearlysav,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
        {
            label:"Expenses",
            data: this.state.yearlyexp,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    }
    const dough = {
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
          data:this.state.monthlyexp,
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
    var list=["Dashboard","Expenses","Transactions"]
    return(
        <div>
            <Nav page='exp' user={this.props.user.name}/>
            <div className='main'>
            <div className='info flex'>
                <div className='pre-year exp-box'>
                    <div className='flex heading'>
                        <h3> The Previous Years Expenses</h3>
                        <select onChange={this.yearchange}>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                        </select>
                    </div>
                    <div className='bar'>
                        <Bar data={bar} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
                <div className='exp-box months'>
                    <div className='flex heading'>
                        <h3> Monthly Expenses</h3>
                        <select id='cur-exp-months' onChange={this.monthchange}>
                            <option value='0'>January</option>
                            <option value='1'>February</option>
                            <option value='2'>March</option>
                            <option value='3'>April</option>
                            <option value='4'>May</option>
                            <option value='5'>June</option>
                            <option value='6'>July</option>
                            <option value='7'>August</option>
                            <option value='8'>September</option>
                            <option value='9'>October</option>
                            <option value='10'>November</option>
                            <option value='11'>December</option>
                        </select>
                    </div>
                    <div className='monthly flex'>
                        <Doughnut data={dough} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <Expl list={list}/>
            </div>
            </div>
        </div>
    )
}
}

export default Expenses;