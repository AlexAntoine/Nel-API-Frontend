const getOldDeviceData = async(token)=>{

    const data  = await axios.get(`https://nel-api.herokuapp.com/api/old`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return console.log(data);

}
