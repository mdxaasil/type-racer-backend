const axios = require('axios');
const { response } = require('express');

const uri ="https://api.quotable.io/random";

module.exports = getData =()=>{
    return axios.get(uri).then(response=>response.data.content.split(" "))
}