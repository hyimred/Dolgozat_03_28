import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';  


export default class Idopont extends Component {
    
    render() {
        return <div className="Center">
            <h1>Időpontfoglalás</h1>

            
            <form action="/koszonjuk">

                <div className="mb-3 mt-3">
                    <h3>Név:</h3>
                    <input type="text" className="form-control" placeholder="John Doe" required/>
                    <div className="valid-feedback"></div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="mb-3 mt-3">
                    <h3>Dátum:</h3>
                    <input type="date" className="form-control" required/>
                    <div className="valid-feedback"></div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <div className="mb-3 mt-3">
                    <h3>Leirás:</h3>
                    <textarea className="form-control" name="text" placeholder="Lorem Ipsum..." required/>
                    <div className="valid-feedback"></div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    }
}