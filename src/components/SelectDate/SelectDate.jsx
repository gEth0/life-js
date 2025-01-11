import "./SelectDate.css";

const SelectDate = ({ date, setDate }) => {
    return (
        <div className="select-date">
            <h4>Select your bithday</h4>
            <input id="date-input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
            />
        </div>
    );
}

export default SelectDate;