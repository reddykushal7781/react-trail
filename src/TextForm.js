import React from 'react'
import { useState } from 'react';

// import PropTypes from 'prop-types'

export default function TextForm(props) {

    function setUpperCase1() {
        // console.log('setUpperCase');
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper case', 'success');
    }

    function setLowerCase1() {
        // console.log('setUpperCase');
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower case', 'success');
    }

    function handleChange(event) { // event can also be written as e
        setText(event.target.value);
        setNumber(checkNumbers(text));
        if (checkIfEmpty(text)) {
            setCurrentElement("");
            setNumberOrNot("");
            setNumberOfWords(0);
            return;
        }
        else {
            // setNumberOfWords(text.split(' ').length);
            let requiredIndex = text.lastIndexOf(' ');
            // console.log(requiredIndex);
            // console.log(requiredIndex);

            setCurrentElement(text.substring(requiredIndex + 1, text.trim().length));
            setNumberOrNot(getNumberOrNot(text.slice(requiredIndex + 1, text.length - 1)));
            setNumberOfWords(text.length - number);
        }

        // console.log('handleChange');
    }

    function handleDelete() {
        setText("");
        setNumber(0);
        setNumberOfWords(0);
        setCurrentElement("");
        setNumberOrNot("");
        props.showAlert('Message Cleared', 'danger');
    }

    let checkNumbers = (inputText) => {
        let ans = 0
        for (let i of inputText.split(" ")) {
            let digit = parseInt(i, 10);
            if (!isNaN(digit) && String(digit) === i) {
                ans++;
            }
        }
        return ans;
    }

    let checkIfEmpty = (inputText) => {
        if (inputText.trim().length === 0) {
            return true;
        }
        return false;
    }

    let getNumberOrNot = (inputText) => {
        let requiredNumber = parseInt(inputText, 10);
        if (!isNaN(requiredNumber) && String(requiredNumber) === inputText) {
            return "Number";
        }
        else return "Word";
    }

    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);
    const [numberOfWords, setNumberOfWords] = useState(0);
    const [currentElement, setCurrentElement] = useState("");
    const [numberOrNot, setNumberOrNot] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" >Add Some Text</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text}
                        onChange={handleChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className='btn btn-primary ' onClick={setUpperCase1}>Convert Up</button>
                <button className='btn btn-primary mx-3 ' onClick={setLowerCase1} >Convert Small</button>
                <button type="button" className="btn btn-outline-danger mx-2 my-3" onClick={handleDelete}>Clear</button>
            </div>

            
            {/* here the mx refers to margin on x axis and vice versa */}

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                {/* if({text.length > 0} && { }) */}
                <p>{
                    text.split(" ").filter((element) => { 
                        return element.length != 0;
                    }).length
                }{ " "}
                    Words and {text.length} Characters</p>
                <p>{number} Numbers</p>
                <p>{currentElement} is a {numberOrNot}</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter the text to get Your Preview'}</p>
            </div>


        </>
    )
}
