import React, { useEffect, useState } from 'react';

function SalesPeopleList() {
    const [salesPeople, setSalesPeople] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalesPeople(data.salesperson)


        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <h2>SalesPeople</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {salesPeople.map(salesperson => {
                            return (
                                <tr key={salesperson.id}>
                                    <td>{salesperson.employee_id}</td>
                                    <td>{salesperson.first_name}</td>
                                    <td>{salesperson.last_name}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default SalesPeopleList;
