//Dependencies
const Axios = require("axios")

//Main
async function generate(){
    var response = await Axios({
        method: "GET",
        url: "https://catfact.ninja/fact"
    })

    response = response.data

    return response.fact
}

//Exporter
module.exports = {
    generate
}