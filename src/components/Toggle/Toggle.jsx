import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./Toggle.scss";

export function Toggle() {
    const navigate = useNavigate();
    const [toggleValue, setToggleValue] = useState("x");

    function onChange({ currentTarget }) {
        setToggleValue(currentTarget?.value);
    }

    useEffect(() => {
        navigate("/" + toggleValue);
    }, [toggleValue, navigate]);

    return (
        <div className="container">
            <div className="switches-container">
                <input
                    type="radio"
                    id="x"
                    name="switchPlan"
                    value="x"
                    onChange={onChange}
                />
                <input
                    type="radio"
                    id="reddit"
                    name="switchPlan"
                    value="reddit"
                    onChange={onChange}
                />
                <label htmlFor="x">X</label>
                <label htmlFor="reddit">Reddit</label>
                <div className="switch-wrapper">
                    <div className="switch">
                        <div>{toggleValue}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
