import React from 'react';
import '../../css/weatherAppStyle.css';
import {Tabs} from "../index";


function ResultTabs(props) {
    const {resultWindowNames, activeTab, onChange} = props;

    const tabs = resultWindowNames.map((tabName) => {
        return {
            id: tabName,
            name: tabName,
            isActive: activeTab === tabName,
        }
    });

    function handleChange(tabId) {
        const activeTab = tabs.find((tab) => {
            return tab.id === tabId
        });

        onChange(activeTab.name);
    }

    return (
        <Tabs tabs={tabs} onChange={handleChange}/>
    )
}

export {ResultTabs};