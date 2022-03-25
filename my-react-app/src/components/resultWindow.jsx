import React, {useState} from 'react';
import '../css/style.css';
import {ResultNow} from "./resultWindows/resultNow";
import {ResultDetails} from "./resultWindows/resultDetails";
import {ResultForecast} from "./resultWindows/resultForecast";
import {ResultTab} from "./resultWindows/resultTab";


const TABS = {
    NOW: 'now',
    DETAILS: 'details',
    FORECAST: 'forecast',
}

function ResultWindow(props) {
    const [activeTab, setActiveTab] = useState(TABS.NOW);

    function handleChangeTab(tab) {
        setActiveTab(tab);
    }

    return (
        <div className={'result-window'}>
            <ResultNow
                isActive={activeTab === TABS.NOW}
            />
            <ResultDetails
                isActive={activeTab === TABS.DETAILS}
            />
            <ResultForecast
                isActive={activeTab === TABS.FORECAST}
            />
            <ResultTab
                resultWindowNames={Object.values(TABS)}
                activeTab={activeTab}
                onChange={handleChangeTab}
            />
        </div>
    )
}

export {ResultWindow};