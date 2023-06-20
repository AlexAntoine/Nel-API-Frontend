const getDeviceAgeData = async(token)=>{

    const data  = await axios.get(`https://nel-api.herokuapp.com/api/deviceage`, {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    });

    return data;

}
