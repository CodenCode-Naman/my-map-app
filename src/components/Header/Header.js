import React from 'react';
import { useState } from 'react';
import { Button } from 'antd';
import './Header.css';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <header className="header">
            <h1>Mapping App</h1>
            <div className="profile-buttons">
                <Button
                    className={isLoggedIn ? 'active-button' : ''}
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
                <Button
                    className={!isLoggedIn ? 'active-button' : ''}
                    onClick={handleLogoutClick}
                >
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;
