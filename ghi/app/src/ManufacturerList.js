import React, { useEffect, useState } from 'react';


function ManufacturerList() {
    const [manufacturers, setManufacturers] = useState([])
    const fetchData = async () => {
        const url = `http://localhost:8100/api/manufacturers/`;

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            setManufacturers(data.manufacturers)
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    const handleDeleteButton = async (e)=>{
        const {id} = e.target;
        const resp =  await fetch (`http://localhost:8100/api/manufacturers/${id}`, {
            method: "delete"
        })

        if(resp.ok) {
            const data = await resp.json();

            setManufacturers(manufacturers.filter(l => (l.id !== parseInt(id))))
        }

    }

    return (
        <>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manufacturers.map(manufacturer => {
                            return (
                                <tr key={manufacturer.href}>
                                    <td>{manufacturer.name}</td>

                                    <td><button className="btn btn-danger" id= {manufacturer.id} onClick={handleDeleteButton}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ManufacturerList
