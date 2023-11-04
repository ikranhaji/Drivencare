import React, { useEffect, useState } from 'react';

function ManufacturerForm  () {

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
      }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;


        const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
          const newManufacturer = await response.json();


          setName('');

        }

      }



    return (
        <div className="my-5">
            <div className="col col-sm-auto">
            <div className="col">
                <div className="card shadow">
                <div className="card-body">
                    <form onSubmit={handleSubmit} id="create-manufacturer-form">
                    <h1 className="card-title">Create a Manufacturer!</h1>
                    <div className="row">
                        <div className="col">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} required placeholder="Name" type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
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

export default ManufacturerForm ;
