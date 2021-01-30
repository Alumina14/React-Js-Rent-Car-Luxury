import http from "../http-common";

const getAll = () => {
    return http.get("/cars");
};

const get = id => {
    return http.get("/cars/${id}");
}

const findByMarca = marca => {
    return http.get("/cars?marca=${marca}");
};

const findByModello = modello => {
    return http.get("/cars?modello=${modello}");
};

const findByDataRitiro = dataRitiro => {
    return http.get("/cars?data-ritiro=${data-ritiro}");
};

const findByDataConsegna = dataConsegna => {
    return http.get("/cars?data-consegna=${data-consegna}");
};

const callApiCars = {
    getAll,
    get,
    findByMarca,
    findByModello,
    findByDataRitiro,
    findByDataConsegna
};

export default callApiCars;