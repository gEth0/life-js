import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Statistics.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = ({ values, date }) => {
    useEffect(() => {
        console.log(values);
    }, [values]);

    const data = {
        labels: ["Weeks Lived", "Weeks until you turn 95"],
        datasets: [
            {
                data: values ? [values[1], values[0] - values[1]] : [0, 0],
                backgroundColor: ["#4caf50", "#b0b0b0"], // Green for weeks lived, gray for weeks remaining
                hoverBackgroundColor: ["#66bb6a", "#d3d3d3"], // Lighter green and gray on hover
            },
        ],
    };

    return (
        values ? (
            <div className="statistics-container">
                <h3>Statistics: </h3>
                <div className="statistics-item">
                    <p>Weeks Lived: <strong>{values[1]}</strong></p>
                </div>
                <div className="statistics-item">
                    <p>Weeks from {date} until you turn 95: <strong>{values[0]}</strong></p>
                </div>
                <div className="statistics-item">
                    <Doughnut data={data} />
                </div>
            </div>
        ) : (
            <div >

            </div>
        )
    );
};

export default Statistics;