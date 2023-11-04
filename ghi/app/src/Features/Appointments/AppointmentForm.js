
import React, { useEffect, useState } from 'react';

function AppointmentForm () {

    const [technicians, setTechnicians] = useState([]);


    const [vin, setVin] = useState('');
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
      }
    const [customer, setCustomer] = useState('');
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
      }
    const [date, setDate] = useState('');
    const handleDateChange = (event) => {
        const value = event.target.value;
        setDate(value);
      }
    const [time, setTime] = useState('');
    const handleTimeChange = (event) => {
          const value = event.target.value;
          setTime(value);
        }
    const [technician, setTechnician] = useState('');
    const handleTechnicianChange = (event) => {
        const value = event.target.value;
        setTechnician(value);
      }

    const [reason, setReason] = useState('');
    const handleReasonChange = (event) => {
        const value = event.target.value;
        setReason(value);
        }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.vin = vin;
        data.customer= customer;
        data.date = date;
        data.time = time;
        data.technician = technician;
        data.reason = reason;



        const appointmentUrl = `http://localhost:8080/api/appointments/`;
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
          const newAppoint = await response.json();


          setVin('');
          setCustomer('');
          setDate('');
          setTime('');
          setTechnician('');
          setReason('');


        }
      }


    const fetchData = async () => {
    const technicianUrl = 'http://localhost:8080/api/technicians/';

    const technicianResponse = await fetch(technicianUrl);

    if (technicianResponse.ok) {
      const technicianData = await technicianResponse.json();
      setTechnicians(technicianData.technicians)

    }
    }
    useEffect(() => {
        fetchData();
      }, []);




    return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Appointment</h1>
                <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                    <input onChange={handleVinChange} value={vin} name = "vin" placeholder="vin" required type="text" id="vin" className="form-control"/>
                    <label htmlFor="vin">Vin</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleCustomerChange} value={customer} name = "customer" placeholder="customer name" required type="text" id="customer" className="form-control"/>
                    <label htmlFor="customer">Customer Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleDateChange} value={date} name = "date" placeholder="date" required type="date" id="date" className="form-control"/>
                    <label htmlFor="date">Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleTimeChange} value={time} name = "time" placeholder="time" required type="time" id="time" className="form-control"/>
                    <label htmlFor="time">Time</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleReasonChange} value={reason} name = "reason" placeholder="reason" required type="text" id="reason" className="form-control"/>
                    <label htmlFor="reason">Reason</label>
                </div>
                <div className="form-floating mb-3">
                    <select onChange={handleTechnicianChange} value={technician} name = "technician" placeholder="technician" id="technician" className="form-select">
                    <option value="">Choose a Technician</option>
                    {technicians.map(technician => {
                            return (
                            <option key={technician.id} value={technician.first_name}>
                                {technician.first_name}
                            </option>
                            );
                        })}

                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
      </div>
    );
}

export default AppointmentForm;
