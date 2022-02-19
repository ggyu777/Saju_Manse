//import { useLocation } from "react-router-dom";
//const location = useLocation();
//const birthYear1 = location.state.birthYear;


const express = require("express");
const router = express.Router();
const request = require('request');
const converter = require("xml-js");

const solMonth = '09';
const solDay = '18';

var url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent("1996"); /* */
queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent(solMonth); /* */
queryParams += '&' + encodeURIComponent('solDay') + '=' + encodeURIComponent(solDay); /* */



router.get("/", (req,res) => {


    request(
        
        {
            url: url + queryParams,
            method: 'GET'
        }, 
       
        (error, response, body) => {
            //const xmlToJson = converter.xml2json(body);
            //res.send(xmlToJson);
        }
    );
});



module.exports = router;
