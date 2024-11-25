import React from 'react'
import { useState, useEffect } from 'react'

 
function UseCurrencyInfo(currency) {

    let [data, setData] = useState({})

    useEffect(() => {

    let url = `https://v6.exchangerate-api.com/v6/34c12dac758405792905dc21/latest/${currency}`;
    fetch(url)
    .then((res)=>
        res.json()
    )
    .then((res)=>
        setData(res.conversion_rates)
    )
    .catch((err)=>console.log(err))

}, [currency])

  return data;
}

export default UseCurrencyInfo;
