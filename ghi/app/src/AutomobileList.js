import React, { useEffect, useState } from 'react';

function AutomobileList() {
    const [automobiles, setAutomobiles] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos)


        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <h2>Customers</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Model</th>
                            <th>Manufacturer</th>
                            <th>Sold</th>

                        </tr>
                    </thead>
                    <tbody>
                        {automobiles.map(auto => {
                            return (
                                <tr key={auto.href}>
                                    <td>{auto.vin}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.year}</td>
                                    <td>{auto.model.name}</td>
                                    <td>{auto.manufacturer.name}</td>
                                    <td>{auto.sold}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default AutomobileList;
