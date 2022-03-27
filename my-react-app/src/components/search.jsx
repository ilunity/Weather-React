import React, {useState} from 'react';
import '../css/weatherAppStyle.css';
import magnifierSvg from '../img/icons/magnifier.svg';
import {setCurrentCity} from "../globalState/actions";
import {useDispatch} from "react-redux";


function Search(props) {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setValue("");
        dispatch(setCurrentCity(value));
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search__city"
                    placeholder="Aktobe"
                    value={value}
                    onChange={handleChange}
                />
                <button className="search__submit-btn">
                    <img src={magnifierSvg} alt="Иконка найти город"/>
                </button>
            </form>
        </div>
    )
}

export {Search};