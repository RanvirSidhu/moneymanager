import React from "react";
import Expl from '../Expl/Expl.js';
import Nav from "../Nav/Nav.js";
import "./Transactions.css";
import { DataGrid } from '@mui/x-data-grid';

class Transactions extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      transaction:[]
    }
  }
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/transactions`,{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        id:this.props.user.id
      })
    }).then(resp => resp.json()).then(data => {
      console.log(data);
      this.setState({transaction:data})
    })
  }
  render() {
    var list=["Dashboard","Expenses","Transactions"];  
    const rows = this.state.transaction;
      const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        { field: 'transid', headerName: 'Transaction ID', width: 260 },
        {field:'date', headerName:'Date',type:'date',width:120,sortable:false},
        { field: 'amount', headerName: 'Amount',type:'number', width: 150 },
        { field: 'type', headerName:'Type' ,sortable: false , width:150},
        {
          field: 'description',
          headerName: 'Description',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 300,
        }
      ];
    return (
        <div>
            <Nav page='trans' user={this.props.user.name}/>  
            <div className='dash'>
                <div id='tns'>
                    <div className='table'>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                        />
                    </div>
                </div>
                <div className='sidebar'>
                    <Expl list={list} />
                </div>
            </div>
            
        </div>
    )
}
}

export default Transactions;