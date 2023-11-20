import { useState } from "react";

import classnames from "classnames";

import "./Filters.scss";

const FILTERS = ["Hot", "New", "Top"];
const PERIOD_FILTERS = ["Now", "Today", "Month", "Year", "All"];

export function Filters({ handleFilter, handlePeriodFilter }) {
    const [isSelected, setIsSelected] = useState(0);
    const [periodFilter, setPeriodFilter] = useState("today");

    function handleClick(index) {
        setIsSelected(index);
        handleFilter(FILTERS[index].toLowerCase());
    }

    function handleChange(event) {
        setPeriodFilter(event.target.value);
        handlePeriodFilter(event.target.value);
    }

    return (
        <div className="Filters">
            {FILTERS.map((filter, index) => (
                <div
                    className={classnames("Filters__filter", {
                        "is-selected": index === isSelected,
                    })}
                    onClick={() => handleClick(index)}
                    key={index}
                >
                    {filter}
                </div>
            ))}
            {isSelected === 2 && (
                <select
                    value={periodFilter}
                    onChange={handleChange}
                    name="period"
                    id="period"
                >
                    {PERIOD_FILTERS.map((periodFilter, index) => (
                        <option key={index} value={periodFilter.toLowerCase()}>
                            {periodFilter}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
