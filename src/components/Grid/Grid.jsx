import { useEffect, useState } from "react";
import "./Grid.css";
import { calculateYear, getValues, loadArray } from "../../functions/calculate";

const Grid = ({ date, setValues, values }) => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        if (date) {
            const newValues = getValues(date);
            setValues(newValues);
        }
    }, [date, setValues]);

    useEffect(() => {
        if (values) {
            setArray(loadArray(values));
        }
    }, [values]);

    return array.length > 0 ? (
        <>
            <strong>{calculateYear(date, 0)}</strong>
            <div className="grid-container">

                {array.map((item, index) => (
                    <div key={index} className={`grid-item ${item === 1 ? 'green' : ''}`}></div>
                ))}

            </div>
            <strong>{calculateYear(date, 95)}</strong>
        </>
    ) : (
        <div className="grid-container">
            <h1>Please enter your birth date</h1>
        </div>
    );
}

export default Grid;