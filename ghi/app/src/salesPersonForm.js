import React, { useEffect, useState } from 'react';

function SalesPersonForm() {
    const [firstName, setFirstName] = useState('')
    const handleFirstNameChange = (event) => {
        const value = event.target.value;
        setFirstName(value);
    }
    const [lastName, setLastName] = useState('')
    const handleLastNameChange = (event) => {
        const value = event.target.value;
        setLastName(value);
    }

    const [employeeId, setEmployeeId] = useState('')
    const handleEmployeeIdChange = (event) => {
        const value = event.target.value;
        setEmployeeId(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.employee_id = employeeId;




        const salespersonUrl = `http://localhost:8090/api/salespeople/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const response = await fetch(salespersonUrl, fetchConfig);


        if (response.ok) {
            const newsalesperson = await response.json();


            setFirstName('');
            setLastName('')
            setEmployeeId('');

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add New Salesperson</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFirstNameChange} value={firstName} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                            <label htmlFor="name">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleLastNameChange} value={lastName} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleEmployeeIdChange} value={employeeId} placeholder="Employee ID" required type="text" name="employee_id" id="employee_id" className="form-control" />
                            <label htmlFor="employee_id">Employee ID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SalesPersonForm
