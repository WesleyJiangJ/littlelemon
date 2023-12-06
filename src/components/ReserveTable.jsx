import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../ReserveTable.css';

export default function ReserveTable() {
    const [name, setName] = useState('');
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChangePhoneNumber = (e) => {
        if (!isNaN(+e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    }

    const [guest, setGuest] = useState('');
    const handleChangeGuest = (e) => {
        if (!isNaN(parseInt(e.target.value))) {
            if (parseInt(e.target.value) < 10) {
                setGuest(e.target.value);
            }
        }
        else {
            setGuest("")
        }
    }
    const [dateReservation, setDateReservation] = useState('');
    const currentDate = new Date().toISOString().slice(0, 16);
    const handleChangeDateReservation = (e) => {
        setDateReservation(e.target.value);
        console.log(e.target.value)
    }

    const [specialRequest, setSpecialRequest] = useState('');
    const handleChangeSpecialRequest = (e) => {
        setSpecialRequest(e.target.value);
    }

    const handleSubmitted = (e) => {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Reserved"
        });

        setName("");
        setPhoneNumber("");
        setGuest("");
        setDateReservation("");
        setSpecialRequest("");

    }

    return (
        <form onSubmit={handleSubmitted}>
            <div className="reservation-menu">
                <h1>Reservations</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className='form-input'
                        placeholder="Write your name"
                        required
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className='form-input'
                        placeholder="Write your phone number"
                        minLength={8}
                        maxLength={8}
                        required
                        value={phoneNumber}
                        onChange={handleChangePhoneNumber}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="guest">Guests</label>
                    <input
                        type="text"
                        name="guest"
                        id="guest"
                        className='form-input'
                        placeholder='How many guests are?'
                        required
                        value={guest}
                        onChange={handleChangeGuest} />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date of Booking</label>
                    <input
                        type="datetime-local"
                        name="date"
                        id="date"
                        className='form-input'
                        required
                        value={dateReservation}
                        onChange={handleChangeDateReservation}
                        min={currentDate} />
                </div>

                <div className="form-group">
                    <label htmlFor="specialRequest">Special Requests</label>
                    <input
                        type="text"
                        name="specialRequest"
                        id="specialRequest"
                        className='form-input'
                        placeholder="Write here . . . (Optional)"
                        value={specialRequest}
                        onChange={handleChangeSpecialRequest} />
                </div>

                <div className="form-group">
                    <button
                        type="submit"
                        className='submit-button'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}