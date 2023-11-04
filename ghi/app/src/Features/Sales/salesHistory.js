import React, { useEffect, useState } from 'react';


function SaleHistory() {
    const [people, setPeople] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setPeople(data.salesperson)


        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [sales, setSales] = useState([])
    const getData = async () => {
        const url = 'http://localhost:8090/api/sales/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSales(data.sales)


        }
    }

    useEffect(() => {
        getData();
    }, []);

    const [getName, setName] = useState('')
    const handleSelectedNameChange = (event) => {
        const value = event.target.value;
        setName(value);

    }

    return (
        <>
            <div className="container">
                <h2>SalesPerson History</h2>
                <select onChange={handleSelectedNameChange} required name="vin" id="vin" className="form-select">
                    <option value="">SalesPerson</option>
                    {people.map(person => {
                        return (
                            <option key={person.href} value={person.employee_id}>
                                {person.first_name}
                            </option>
                        );
                    })}
                </select>
            </div >

            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SalesPerson</th>
                            <th>Customer</th>
                            <th>Vin</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sales.filter((sale) => sale.salesperson.employee_id == getName).map(sale => {
                            return (
                                <tr key={sale.id}>
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
export default SaleHistory
