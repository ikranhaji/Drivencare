import React, { useEffect, useState } from 'react';

function NewSale() {
    const [cars, setCars] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCars(data.autos)


        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [people, setPeople] = useState([])
    const getData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setPeople(data.salesperson)


        }
    }
    useEffect(() => {
        getData();
    }, []);

    const [customers, setCustomers] = useState([])
    const giveData = async () => {
        const url = 'http://localhost:8090/api/customers/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.customers)
        }
    }
    useEffect(() => {
        giveData();
    }, []);

    const [auto, setAuto] = useState('')
    const handleAutoChange = (event) => {
        const value = event.target.value;
        setAuto(value);
    }
    const [person, setPerson] = useState('')
    const handlePersonChange = (event) => {
        const value = event.target.value;
        setPerson(value);
    }

    const [customer, setCustomer] = useState('')
    const handleCustomerChange = (event) => {
        const value = event.target.value;
        setCustomer(value);
    }
    const [price, setPrice] = useState('')
    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.customer = customer;
        data.price = price;
        data.salesperson = person;
        data.automobile = auto
        console.log(data)



        const salesUrl = `http://localhost:8090/api/sales/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const response = await fetch(salesUrl, fetchConfig);


        if (response.ok) {
            const newsale = await response.json();
            console.log(newsale)

            setAuto('');
            setPerson('')
            setCustomer('');
            setPrice('');

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <h1>Record a new sale</h1>
                        <div className="mb-3">
                            <select onChange={handleAutoChange} value={auto} required name="automobile" id="automobile" className="form-select">
                                <option value="">Choose a autombile VIN</option>
                                {cars.filter((car) => car.sold == false).map(car => {
                                    return (
                                        <option key={car.href} value={car.vin}>
                                            {car.vin}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handlePersonChange} value={person} required name="salesperson" id="salesperson" className="form-select">
                                <option value="">Choose a salesperson</option>
                                {people.map(person => {
                                    return (
                                        <option key={person.href} value={person.id}>
                                            {person.first_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleCustomerChange} value={customer} required name="customer" id="customer" className="form-select">
                                <option value="">Choose a Customer</option>
                                {customers.map(customer => {
                                    return (
                                        <option key={customer.href} value={customer.id}>
                                            {customer.first_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlePriceChange} value={price} placeholder="Price" required type="text" name="price" id="price" className="form-control" />
                            <label htmlFor="price">Price</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default NewSale;
