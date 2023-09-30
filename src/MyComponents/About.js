import React, { useState } from 'react'

export const About = () => {
    //state for button name
    const [btnnm, setBtnnm] = useState("light mode");

    //state for color 
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    //Function for color change
    const dark = () => {
        if (mystyle.color == 'black') {
            setMystyle({ color: 'white', backgroundColor: 'black' });
            setBtnnm("Dark mode");
        }

        else {
            setMystyle({ color: 'black', backgroundColor: 'white' });
            setBtnnm("Light mode");
        }
    }


    return (
        <div style={mystyle}>
            <div className="container" >
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" onClick={dark} className="btn btn-secondary">{btnnm}</button>
        </div>
    )
}
