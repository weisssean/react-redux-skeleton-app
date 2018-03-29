import axios from 'axios';
import uuidv4 from 'uuid';

if (process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = 'https://' + window.location.hostname;
} else {
    axios.defaults.baseURL = 'http://localhost:3006';
}


class FarmsApiClass {
    constructor() {
        // this.oId = getOrgId();
        // this.uId = getUserId();
    }

}

// This file mocks a web API by working with json-server data.

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (route) => {
    return replaceAll(route.title, ' ', '-');
};

FarmsApiClass.prototype = {

    getAllFarms() {
        const url = process.env.NODE_ENV === "production" ? "production-url" : "/solar_farms";
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: {
                    rty: 5,
                    tab: 5
                }
            })
                .then(function (response) {
                    resolve(Object.assign([], response.data.routes));
                })
                .catch(function (error) {
                    reject(`Routes not found!`);
                });
        });
    }
};


const FarmsApi = new FarmsApiClass();

export default FarmsApi;
