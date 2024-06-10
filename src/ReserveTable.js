import React, {useState} from "react";
import {useFormik} from "formik";


const ReserveTable = () =>{

    const sectionStyle = {
        height: '450px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    }

    const formStyle= {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        border:'2px solid black',
        borderRadius:'15px',
        gap:'20%',
        paddingBottom: '40px',
    }

    const formItem = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:'35%',
        width:'100%',
        margin:'20px 0'
    }

    const buttonStyle = {
        backgroundColor: '#F4CE14',
        width:'150px',
        height:'40px',
        borderRadius: '12px',
        fontWeight: 'bold',
        fontFamily: 'Karla',
    }

    return (
        <div className="ReserveSection" style={sectionStyle}>
            <form style={formStyle}>
                <h1>Reserve a Table</h1>
                <div className="TimeSelect" style={formItem}>
                    <label for="time">Time Select:</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                </div>
                <div className="DateSelect" style = {formItem}>
                    <label for="date">Date Select:</label>
                    <input type="date"/>
                </div>
                <div className="GuestSelect" style = {formItem}>
                    <label for="guests">Number of guests:</label>
                    <input type="number"/>
                </div>
                <div className="OccasionSelect" style = {formItem}>
                    <label for="occasion">Occasion:</label>
                    <select id="occasion ">
                        <option>No Special Occasion</option>
                        <option>Annivarsary</option>
                        <option>Birthday</option>
                        <option>Work Event</option>
                    </select>
                </div>
                <button type="submit" style={buttonStyle}>Reserve Table</button>
            </form>
        </div>
    )
}

export default ReserveTable;