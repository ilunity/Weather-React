import React from 'react';
import '../css/style.css';

function createTabElems(tabs) {
    const tabItems = tabs.map((tab) => {
        return TabItem(tab);
    });

    return tabItems;
}

function TabItem(props) {
    const {tab, onClick} = props;

    const isActiveClass = tab.isActive ? 'tab-item_active' : "";
    const className = 'tab-item' + isActiveClass;

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