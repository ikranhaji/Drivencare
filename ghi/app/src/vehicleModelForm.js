import React, { useEffect, useState } from 'react';

function VehicleModelForm() {
    const [manufacturers, setManufacturers] = useState([])
    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers)


        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const [ModelName, setModelName] = useState('')
    const handleModelNameChange = (event) => {
        const value = event.target.value;
        setModelName(value);
    }
    const [pictureUrl, setpictureUrl] = useState('')
    const handlepictureUrlChange = (event) => {
        const value = event.target.value;
        setpictureUrl(value);
    }

    const [manufacturer, setmanufacturer] = useState('')
    const handlesetmanufacturerChange = (event) => {
        const value = event.target.value;
        setmanufacturer(value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = ModelName;
        data.picture_url = pictureUrl;
        data.manufacturer_id = manufacturer;
        console.log(data)



        const modelUrl = `http://localhost:8100/api/models/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },

        }
        const response = await fetch(modelUrl, fetchConfig);


        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel)

            setModelName('');
            setpictureUrl('')
            setmanufacturer('');

        }
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a vehicle model</h1>
                    <form onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleModelNameChange} value={ModelName} placeholder="Model Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Model Name </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handlepictureUrlChange} value={pictureUrl} placeholder="Picture Url" required type="text" name="picture_url" id="picture_url" className="form-control" />
                            <label htmlFor="picture_url">Picture Url</label>
                        </div>
                        <select onChange={handlesetmanufacturerChange} value={manufacturer} required name="manufacturer_id" id="manufacturer_id" className="form-select">
                            <option value="">Choose a manufacturer</option>
                            {manufacturers.map(manu => {
                                return (
                                    <option key={manu.href} value={manu.id}>
                                        {manu.name}
                                    </option>
                                );
                            })}
                        </select>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default VehicleModelForm
