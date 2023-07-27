// Sidebar.js
import React from 'react';
import { Menu, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from '../actions/mapActions';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isNightMode = useSelector((state) => state.map.isNightMode);

    const handleNightModeToggle = () => {
        dispatch(toggleNightMode());
    };

    return (
        <div className="sidebar">
            <Menu mode="inline">
                <Menu.Item>Region 1</Menu.Item>
                <Menu.Item>Region 2</Menu.Item>
                <Menu.Item>Region 3</Menu.Item>
            </Menu>
            <div className="night-mode-toggle">
                <span>Night Mode</span>
                <Switch checked={isNightMode} onChange={handleNightModeToggle} />
            </div>
        </div>
    );
};

export default Sidebar;
