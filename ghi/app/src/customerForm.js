import React, { useEffect, useState } from 'react';

function CustomerForm() {
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

    const [address, setAddress] = useState('')
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.first_name = firstName;
        data.last_name = lastName;
        data.address = address
        data.phone_number = phoneNumber;
        console.log(data)



        const customerUrl = `	http://localhost:8090/api/customers/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const response = await fetch(customerUrl, fetchConfig);


        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer)

            setFirstName('');
            setLastName('')
            setAddress('');
            setPhoneNumber('');

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add New Customer</h1>
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
                            <input onChange={handleAddressChange} value={address} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control" />
                            <label htmlFor="address">Phone Number</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerForm;
