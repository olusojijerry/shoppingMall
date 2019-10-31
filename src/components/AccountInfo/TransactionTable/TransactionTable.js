import React from 'react';

const transactiontable = (props) => {
    let style = "";
    if(props.transactiondetails.status === "Received"){
        style = "text-success"
    }
    else if(props.transactiondetails.status === "Processing"){
        style = "text-primary";
    }
    else
        style = "text-danger";

    return(
    <table className="table table-hover">
        <thead>
			<tr>
                <th scope="col">Order Number</th>
                <th scope="col">Order date</th>
                <th scope="col">Item</th>
                <th scope="col">Total</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
			</tr>
		</thead>
        <tbody>
            {props.transactiondetails.map((trans) => (
                <tr key={trans.orderno}>
                    <td>{trans.orderno}</td>
                    <td>{trans.transdatetime}</td>
                    <td>{trans.transitem}</td>
                    <td className="price">{trans.transtotal}</td>
                    <td class={style}>{trans.status}</td>
                    <td><a href="/">View</a></td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default transactiontable;