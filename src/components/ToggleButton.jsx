import { useState } from "react";
import "../css/ToggleButton.css"

export const ToggleButton = () => {
    return (
        <>
            <h2>Toggle Button</h2>
            <Button/>
        </>
    );
};

const Button = () => {
    let [isOn, setIsOn] = useState(false);

    const handleButtonChange = () => {
        console.log('button clicked');
        console.log(isOn);
        
        setIsOn(!isOn);
    }
    
    return (
        <>
            <div className={`btn-bg flex-box transition-effect ${isOn ? 'btn-on-bg' : 'btn-off-bg'}`} onClick={handleButtonChange}>
                <div className={`btn flex-box flex-center ${isOn ? 'on-transition btn-on' : 'off-transition btn-off'}`}>
                    <span>{isOn ? "On" : "Off"}</span>
                </div>
            </div>
        </>
    );
}