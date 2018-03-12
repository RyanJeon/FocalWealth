import React, {Component} from "react"
import './Transaction.css';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Tran1 extends Component{


  renderList(list){
    return list.map( (item, i)  => {
      return(
        <div>
            <h3> {item} </h3>
        </div>
      );
    });
  }


  render(){
    const {list, show} = this.props;

    return(
      <div style = {{height: '20%'}}>
        <ReactTable
          height = {100}
          data={list}
          showPageSizeOptions = {false}
          columns={[
            {
              Header: "Transactions",
              columns: [
                {
                  Header: "Announced Date",
                  accessor: "AllTransactionsAnnouncedDate"
                },

                {
                  Header: "Target Issuer",
                  accessor: "Target_Issuer"
                },
                {
                  Header: "Transaction Types",
                  accessor: 'TransactionTypes'
                },
                {
                  Header:"Transaction Status",
                  accessor: "TransactionStatus"
                }

              ]
            }
          ]}
          defaultPageSize={show}
          className="-striped -highlight"
        />

      </div>
    )

  }


}

export default Tran1;
