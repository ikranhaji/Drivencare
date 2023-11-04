import React, { useEffect, useState } from 'react';

function TechnicianForm  () {

    const [first_name, setFirstName] = useState('');
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
      }
    const [last_name, setLastName] = useState('');
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
      }

    const [employee_id, setEmployeeId] = useState('');
    const handleEmployeeIdChange = (event) => {
          const value = event.target.value;
          setEmployeeId(value);
        }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.first_name = first_name;
        data.last_name = last_name;
        data.employee_id = employee_id;


        const technicianUrl = `http://localhost:8080/api/technicians/`;
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
          const newTechnician = await response.json();

        setFirstName('');
        setLastName('');
        setEmployeeId('');

        }

      }

    return (
        <div className="my-5">
            <div className="col col-sm-auto">
            <div className="col">
                <div className="card shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit} id="create-technician-form">
                    <h1 className="card-title">Create a Technician!</h1>
                    <p className="mb-3">
                        Please Create
                    </p>
                    <div className="row">
                        <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={first_name} required placeholder="First Name" type="text" id="first_name" name="first_name" className="form-control"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={last_name} required placeholder="Last Name" type="text" id="last_name" name="last_name" className="form-control"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange} value={employee_id} required placeholder="employee_id" type="text" id="employee_id" name="employee_id" className="form-control"/>
                            <label htmlFor="employee_id">Emplyee Id</label>
                        </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary">Create</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default TechnicianForm ;
