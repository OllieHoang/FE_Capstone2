import React, { useState } from 'react';
import '../Toggle/toggle.css';

function ToggleSwitch() {
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
    };

    return (
        <div
            className={`${
                checked
                    ? 'toggle-switch bg-[#016e1a] rounded-full flex items-center '
                    : 'toggle-switch bg-gray-500 rounded-full flex items-center '
            }`}
            onClick={toggleChecked}
        >
            <div className={`toggle-switch-inner ${checked ? 'checked' : ''}`}></div>
            {/* <div className={`toggle-switch-switch ${checked ? 'checked' : ''}`}></div> */}
        </div>
    );
}

export default ToggleSwitch;
