import React from 'react'
import {
  Link
} from "react-router-dom";

const Doctor1 = () => {
  return (
    <>
      <div className="container d-flex justify-content-center my-5">
        <h1>Doctor</h1>
      </div>
      <div className="card text-center">
        <div className="card-header">
          MBBS,PGDCC
        </div>
        <div className="card-body">
          <h5 className="card-title">Cardiologist</h5>
          <p className="card-text">Keep yourself Healthy and make your surroundings Healther.</p>
          <Link className="btn btn-primary" to="/userinfo">Book a Appointement</Link>
        </div>
        <div className="card-footer text-muted">
          Available From  10:00 am to 8:00pm
        </div>
      </div>
    </>
  )
}

export default Doctor1

