const axios = require('axios');

const getData = async (req, res)=>{

    const {data} = await axios.get('https://nel-api.herokuapp.com/api/old');
    
    console.log('line 7',data);
}

getData();