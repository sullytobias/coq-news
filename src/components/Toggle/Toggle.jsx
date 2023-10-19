import { useState, useEffect } from "react";

import classNames from "classnames";

import { useNavigate } from "react-router-dom";

import "./Toggle.scss";

export function Toggle() {
    const navigate = useNavigate();
    const [toggleValue, setToggleValue] = useState("reddit");

    function onChange({ currentTarget }) {
        setToggleValue(currentTarget?.value);
    }

    useEffect(() => {
        navigate("/" + toggleValue);
    }, [toggleValue, navigate]);

    return (
        <div
            className={classNames("Toggle", {
                isX: toggleValue === "x",
            })}
        >
            <div className="Toggle__container">
                <input
                    type="radio"
                    id="reddit"
                    value="reddit"
                    name="toggle"
                    onChange={onChange}
                />
                <input
                    name="toggle"
                    type="radio"
                    id="x"
                    value="x"
                    onChange={onChange}
                />

                <label htmlFor="reddit">Reddit</label>
                <label htmlFor="x">X</label>

                <div className="Toggle__wrapper">
                    <div className="Toggle__switch">
                        <div>{toggleValue}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
