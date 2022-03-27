import React from 'react';
import '../../css/weatherAppStyle.css';
import {Loader} from "../commonComponents/loader";

function ResultWindowLoader(props) {
    return (
        <div className={'result-window__loading'}>
            <Loader/>
        </div>
    )
}

export {ResultWindowLoader};