import React from 'react';
import './styles/css/style.css';

function Loader(props) {
    return (
        <div className={"lds-ellipsis"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export {Loader};