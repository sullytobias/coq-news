import "./Filter.scss";

const FILTERS = ["Hot", "New", "Top"];

export function Filter() {
    return (
        <div className="Filter">
            {FILTERS.map((filter, index) => (
                <div key={index}>{filter}</div>
            ))}
        </div>
    );
}
