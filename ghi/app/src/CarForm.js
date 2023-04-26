import React, { useEffect, useState } from 'react';

function CarForm() {
    const [models, setModels] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)


        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [color, setColor] = useState('')
    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }
    const [year, setYear] = useState('')
    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const [vin, setVin] = useState('')
    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }
    const [modelID, setModelId] = useState('')
    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelId(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.color = color;
        data.year = year;
        data.vin = vin
        data.model_id = modelID;
        console.log(data)



        const AutoUrl = `http://localhost:8100/api/automobiles/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const response = await fetch(AutoUrl, fetchConfig);


        if (response.ok) {
            const newCar = await response.json();
            console.log(newCar)

            setYear('');
            setYear('')
            setModelId('');
            setVin('');

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add New Customer</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleColorChange} value={color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleYearChange} value={year} placeholder="Year" required type="text" name="year" id="year" className="form-control" />
                            <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleVinChange} value={vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="mb-3">
                            <select onChange={handleModelChange} value={modelID} required name="model_id" id="model_id" className="form-select">
                                <option value="">Choose a Model</option>
                                {models.map(model => {
                                    return (
                                        <option key={model.href} value={model.id}>
                                            {model.name}
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

export default CarForm;
