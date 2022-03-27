import React from 'react';
import '../../css/weatherAppStyle.css';
import {defineIsActiveClass} from "../utilities";


function TabItem(props) {
    const {tab, onClick} = props;

    const className = 'tab-item ' + defineIsActiveClass('tab-item', tab.isActive);

    return (
        <li key={tab.id} className={className} onClick={() => onClick(tab.id)}>
            {tab.name}
        </li>
    )
}

function Tabs(props) {
    const {tabs, onChange} = props;

    return (
        <ul className={'tabs'}>
            {tabs.map((tab) => {
                return <TabItem tab={tab} onClick={onChange}/>
            })}
        </ul>
    )
}

export {Tabs};