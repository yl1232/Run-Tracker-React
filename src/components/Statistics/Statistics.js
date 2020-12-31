import React from 'react';
import "../../styles/Statistics.css";
import chart from "../../images/chart.png";
import Image from "react-bootstrap/Image";

const Statistics = () => {
    return (
        <div>
            <div id="statistics-title">
                <h1>Statistics</h1>
            </div>
            <div id="statistics-data">
                <Image id="chart" src={chart} thumbnail />
            </div>
        </div>
        

    );
}

export default Statistics;