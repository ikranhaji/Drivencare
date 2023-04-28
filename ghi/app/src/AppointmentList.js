import React, { useEffect, useState } from 'react';


function AppointmentList() {
    const [appointments, setAppointments] = useState([])
    const fetchData = async () => {
        const url = `http://localhost:8080/api/appointments/`;

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();

            setAppointments(data.appointments)
        }
    }


    useEffect(() => {
        fetchData();
    }, []);


    const handleCancelButton = async (e)=>{
        const {id} = e.target;
        const resp =  await fetch (`http://localhost:8080/api/appointments/${id}/canceled`, {
            method: "PUT"
        })

        if(resp.ok) {
            const data = await resp.json();

            setAppointments(appointments.filter(appointment => (appointment.id !== parseInt(id))))
        }

    };

    const handleFinishButton = async (e)=>{
        const {id} = e.target;
        const resp = await fetch (`http://localhost:8080/api/appointments/${id}/finished`,{

            method: "PUT",

        })

        if(resp.ok) {
            const data = await resp.json();

            setAppointments(appointments.filter(appointment => (appointment.id !== parseInt(id))))

        }

    };

    return (
        <>
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
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.inventory_vehicle ? "Yes":"No"}</td>
                                    <td>{appointment.customer}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.technician.first_name}</td>
                                    <td>{appointment.reason}</td>
                                    <td><button className="btn btn-danger" id= {appointment.id} onClick={handleCancelButton}>Canceled</button></td>
                                    <td><button className="btn btn-success" id= {appointment.id} onClick={handleFinishButton}>Finished</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default AppointmentList
