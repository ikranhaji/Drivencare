import React, { useEffect, useState } from 'react';

function ModelList() {
    const [models, setModels] = useState([])
    const fetchData = async () => {
        const url = `http://localhost:8100/api/models/`;

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)


        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="container">
                <h2>Models</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer</th>
                            <th>Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {models.map(model => {
                            return (
                                <tr key={model.href}>
                                    <td>{model.name}</td>
                                    <td>{model.manufacturer.name}</td>
                                    <td><img src={model.picture_url} class="img-fluid" alt="..." style={{ width: '16rem', height: '8.5rem' }} /></td>
                                </tr>

                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default ModelList;
