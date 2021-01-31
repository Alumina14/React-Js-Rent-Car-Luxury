import React, { useState, useEffect } from 'react';
import '../App.css';
import CallApiCars from "../services/CarService";

//  prendi e mostra le auto

const CarsList = () => {

    const [cars, setCars] = useState([]);
    const [currentCar, setCurrentCar] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [cercaByMarca, setCercaByMarca] = useState("");


    // richiamo la funzione di recupero auto nell'useEffect, dopo che il dom ha subito modifiche
    useEffect(() => {
        recuperaCars();
    }, []);


    const recuperaCars = () => {
        CallApiCars.getAll().then(response => {
            setCars(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    const setActiveCar = (car, index) => {
        setCurrentCar(car);
        setCurrentIndex(index);
    };

    // funzione per prendere il valore scritto nell'input


    const onChangeCerca = e => {
        const cercaByMarca = e.target.value;
        console.log(cercaByMarca);
        setCercaByMarca(cercaByMarca);
    };

    const findByMarca = () => {
        CallApiCars.findByMarca(cercaByMarca).then(response => {
            console.log(response.data);
            setCars(response.data);
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        });
    };

    return (
        // search bar
        <div className="list row">
            <div className="col-xl-8 offset-xl-2 col-lg-8 col-md-8 offset-md-2 offset-lg-2 mt-5">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="cerca auto..."
                        value={cercaByMarca}
                        onChange={onChangeCerca}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByMarca}
                        >
                            Cerca
                        </button>
                    </div>
                </div>
            </div>
            {/* lista auto prese dal json e mappate*/}
            <div className="offset-xl-2 offset-lg-2 offset-md-2 col-md-2 col-lg-2 col-xl-2 mt-4">
                <h5>Le Auto</h5>
                <ul className="list-group">
                    {cars && cars.map((car, index) => (
                        <li className={"list-group-item lista text-capitalize" + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveCar(car, index)}
                            key={index}
                        >
                            {car.marca} - {car.modello}
                        </li>
                    ))}
                </ul>
            </div>
            {/* visualizza l'auto cliccata */}
            <div className="col-xl-6 col-lg-6 col-md-6 mt-4">
                {currentCar ? (
                    <div>
                        <div className="d-flex flex-column align-items-center">
                            <h5 className="text-capitalize">{currentCar.marca} {currentCar.modello}</h5>
                            <label>
                            </label>{" "}
                            <p>Colore: {currentCar.colore}</p>
                            <p>Targa: {currentCar.targa}</p>
                            <p>Costo noleggio: {currentCar.costonoleggio}</p>
                            <p>Pacchetti extra km: {currentCar.pacchettiextrakm}</p>
                            <p>Data Ritiro: {currentCar.dataritiro}</p>
                            <p>Data Consegna: {currentCar.dataconsegna}</p>
                            <p><button type="button" class="btn btn-dark">Noleggiala Ora!</button></p>
                        </div>
                    </div>
                ) : (
                        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
                            <br />
                            <p>Clicca su un'auto per visualizzarla.</p>
                        </div>
                    )}
            </div>
        </div>


    )
}

export default CarsList
