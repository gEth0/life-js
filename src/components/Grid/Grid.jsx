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
            <strong> <u> {calculateYear(date, 0)} </u></strong>
            <div className="grid-container">

                {array.map((item, index) => (
                    <div key={index} className={`grid-item ${item === 1 ? 'green' : ''}`}></div>
                ))}

            </div>
            <strong> <u> {calculateYear(date, 95)} </u> </strong>
        </>
    ) : (
        <div className="grid-container">

        </div>
    );
}

export default Grid;