import { useEffect } from "react";
import "./Statistics.css";

const Statistics = ({ values, date }) => {

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        values ?
            <div className="statistics-container">
                <h3>Statistics: </h3>
                <div className="statistics-item">

                    <p> Weeks Lived: <strong>{values[1]}</strong></p>
                </div>
                <div className="statistics-item">

                    <p> Weeks from {date} until you turn 95 :  <strong>{values[0]}</strong></p>
                </div>

                ADD GRAFICO A TORTA
            </div> : <div className="statistic-container">

            </div>
    )
};

export default Statistics;