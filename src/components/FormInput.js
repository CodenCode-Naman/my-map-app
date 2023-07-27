// FormInput.js
import React, { useState } from 'react';
import { Select, Button } from 'antd';

const { Option } = Select;

const FormInput = ({ onRegionChange }) => {
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleRegionChange = (value) => {
        setSelectedRegion(value);
    };

    const handleLoadClick = () => {
        onRegionChange(selectedRegion);
    };

    return (
        <div className="form-input">
            <Select defaultValue="Select Region" onChange={handleRegionChange}>
                <Option value="us">United States</Option>
                <Option value="in">India</Option>
                <Option value="uk">United Kingdom</Option>
            </Select>
            <Button type="primary" onClick={handleLoadClick}>
                Load
            </Button>
        </div>
    );
};

export default FormInput;
