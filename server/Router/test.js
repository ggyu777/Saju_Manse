//import { useLocation } from "react-router-dom";
//const location = useLocation();
//const birthYear1 = location.state.birthYear;


const express = require("express");
const router = express.Router();
const request = require('request');
const converter = require("xml-js");

// http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo
// 음력일을 기준으로 양력 날짜

const url = 'http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo';
// 양력일을 기준으로 음력 날짜


//var queryparams ='?'+   encodeURIComponent('serviceKey') + '=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D';  /*Service Key*/
//queryparams += '&'+ encodeURIComponent('solYear') + '=' + encodeURIComponent("1996"); 
//queryparams +=  '&'+ encodeURIComponent('solMonth') + '=' + encodeURIComponent("09"); 
//queryparams +=  '&'+ encodeURIComponent('solDay') + '=' + encodeURIComponent("18"); 

// 양력을 음력으로

router.get("/", (req,res) => {
   // const lunYear = "1996";
   // const lunMonth = "09";
   // const lunDay = "18";

    const solYear = req.query.solYear;
    const solMonth = req.query.solMonth;
    const solDay = req.query.solDay;
  
    request(
        {
  //        url : url + queryparams,
            url: `${url}?serviceKey=Tcv1D3HbX2tvmM9kiulXfVycMLwOvXeTrVDbaCOMDhLabVxSuz0oyd%2FviaMRqdfA%2FpRdHQnCtO3GyupkmZBbmw%3D%3D&solYear=${solYear}&solMonth=${solMonth}&solDay=${solDay}`,
            method: 'GET'
        }, 
        
        (error, response, body) => {
          const xmlToJson = converter.xml2json(body);
          res.send(xmlToJson);
        }
    );
});



module.exports = router;
