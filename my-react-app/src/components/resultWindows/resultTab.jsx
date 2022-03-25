import React from 'react';
import '../../css/style.css';
import {Tabs} from "../tabs";


function ResultTab(props) {
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

export {ResultTab};