const axios = require('axios');

module.exports = {  
    greetings: (req, res) => {
        const BANK_API_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
        
        axios.get(BANK_API_URL).then(response => {
            const USD_ID = 26;
            res.send(`Курс доллара: ${response.data[USD_ID].rate}`);
        }).catch(() => {
            
        });
    }
}