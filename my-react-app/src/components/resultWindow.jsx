import React, {useState} from 'react';
import '../css/weatherAppStyle.css';
import {ResultNow, ResultDetails, ResultForecast, ResultTabs} from "./resultWindows/index";
import {useIfWeatherStateFetched} from "./customHooks/customHooks";
import {ResultWindowLoader} from "./resultWindows/resultWindowLoader";

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


    function defineContent(isDataFetched) {
        const componentContent = isDataFetched
            ? <React.Fragment>
                <ResultNow
                    isActive={activeTab === TABS.NOW}
                />
                <ResultDetails
                    isActive={activeTab === TABS.DETAILS}
                />
                <ResultForecast
                    isActive={activeTab === TABS.FORECAST}
                />
                <ResultTabs
                    resultWindowNames={Object.values(TABS)}
                    activeTab={activeTab}
                    onChange={handleChangeTab}
                />
            </React.Fragment>
            : <ResultWindowLoader/>;

        return componentContent;
    }

    const isDataFetched = useIfWeatherStateFetched();

    return (
        <div className={'main-window__result result-window'}>
            {defineContent(isDataFetched)}
        </div>
    )
}

export {ResultWindow};