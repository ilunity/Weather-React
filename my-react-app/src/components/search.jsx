import React, {useState} from 'react';
import '../css/style.css';

function Search(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(value);
    }

    return (
        <div className="search">
            <form className="search__form">
                <input
                    type="text"
                    className="search__city"
                    placeholder="Aktobe"
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <button className="search__submit-btn">
                    <img src="../img/icons/magnifier.svg" alt="Иконка найти город"/>
                </button>
            </form>
        </div>
    )
}

export {Search};