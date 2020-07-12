import React, { Component } from 'react'

export class Form extends Component {

    handleSubmit(e) {
        e.preventDefault()
        const fullname = document.getElementById('fullname').value
        const phone = document.getElementById('phone').value
        const email = document.getElementById('email').value
        const date_time = document.getElementById('date_time').value
        const address = document.getElementById('address').value
        const booking = ({ fullname, phone, email, date_time, address }) 
        document.getElementById('form').reset()
        // console.log(booking)

        fetch('http://localhost:3000/api/v1/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Form</h1>
                <form id='form' onSubmit={(e) => this.handleSubmit(e)}>
                    <input id='fullname' type='text' placeholder='fullname'/>
                    <input id='phone' type='tel' placeholder='phone number'/>
                    <input id='email' type='text' placeholder='email'/>
                    <input id='date_time' type='datetime-local'/>
                    <input id='address' type='text' placeholder='address'/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default Form
