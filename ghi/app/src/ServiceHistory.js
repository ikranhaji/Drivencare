import React, { useEffect, useState } from 'react';


function ServiceHistory() {
    const [appointments, setAppointments] = useState([])
    const fetchData = async () => {
        const url = `http://localhost:8080/api/appointments/`;

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            setAppointments(data.appointments)
        }
    }

    const [vin, setFilterVin] = useState('');

    const handleFilterVinChange = (event) => {
            const value = event.target.value;
            setFilterVin(value);

        }

    const handleSubmit = async (event) => {
        const filterdResult = appointments.filter((appointment)=>
            appointment.vin.includes(vin))
            event.preventDefault();

        setFilterVin(vin);

      }



    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>

            <div className="my-5">
                        <div className="col col-sm-auto">
                        <div className="col">
                            <div className="card shadow">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="create-search-form">
                                <h1 className="card-title">Search Service History!</h1>
                                <p className="mb-3">
                                    Please Type a Vin
                                </p>
                                <div className="row">
                                    <div className="col">
                                    <div className="form-floating mb-3">
                                        <input onChange={handleFilterVinChange} value={vin} required placeholder="vin" type="text" id="vin" name="filterVin" className="form-control"/>
                                        <label htmlFor="vin">Vin</label>
                                    </div>
                                </div>
                                </div>
                                <button className="btn btn-lg btn-primary">Search</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>


            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Vin</th>
                            <th>VIP</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments
                        .filter((appointment) => appointment.vin.includes(vin)  )
                        .map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.inventory_vehicle ? "Yes":"No"}</td>
                                    <td>{appointment.customer}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.technician.first_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.status}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ServiceHistory
