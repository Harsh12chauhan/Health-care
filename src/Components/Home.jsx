import React from 'react'
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Health Care </h1>
        <p>Book Your Appointment here by selecting the Doctors available</p>
        <div className="dropdown">
          <button className="btn btn-secondary btn-lg btn-block dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Doctor's
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link className="dropdown-item" to="/doctor1">Doctor-1</Link></li>
            <li><Link className="dropdown-item" to="/doctor2">Doctor-2</Link></li>
            <li><Link className="dropdown-item" to="/doctor3">Doctor-3</Link></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Home