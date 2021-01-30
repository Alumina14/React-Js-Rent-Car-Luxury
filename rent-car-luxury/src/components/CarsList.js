import React, {useState, useEffect } from 'react';
import CarService from "../services/CarService";

//  prendi e mostra le auto

const ListaCars = () => {

    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [cercaByMarca, setCercaByMarca] = useState("");

    // useEffect(() => {
    //     recuperaCars();
    // }, []);
}

function CarsList() {
    return (
        <div>
            lista car
        </div>
    )
}

export default CarsList
