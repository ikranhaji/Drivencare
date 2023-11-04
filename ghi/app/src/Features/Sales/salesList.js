import React, { useEffect, useState } from 'react';

function SaleList() {
    const [sales, setSales] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)


        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <h2>Sales</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SalesPerson Employee ID</th>
                            <th>Salesperson Name</th>
                            <th>Customer</th>
                            <th>Vin</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td>{sale.salesperson.employee_id}</td>
                                    <td>{sale.salesperson.first_name}</td>
                                    <td>{sale.customer.first_name}</td>
                                    <td>{sale.automobile.vin}</td>
                                    <td>{sale.price}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default SaleList;
