import axios from "axios";

export default axios.create({

    baseURL: "https://rent-car-luxury.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
});
