import React, { useState } from 'react';
// axios
import axios from "axios"

const Userinfo = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", age: "" });

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/api/data/book-appointment', formData)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const onchange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container d-flex justify-content-center my-5'>
                <h3><u>Fill the form to book the Appointment</u></h3>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={formData.name} onChange={onchange} id="name" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" value={formData.phone} onChange={onchange} id="phone" name="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" value={formData.age} onChange={onchange} id="age" name="age" />
                    </div>
                    <button type="submit" className=" container d-flex justify-content-center btn btn-dark ">Book</button>
                </form>
            </div>
        </>
    )
}

export default Userinfo