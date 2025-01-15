import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]  = useState("");
    const username = "harkirath1511";

    useEffect(() => {
    let url = `https://api.github.com/users/${username}`
    fetch(url)
        .then((res)=> {
           return res.json()
        })
        .then((res)=> {
            console.log(res)
            setData(res)
        })
        .catch((err) =>{
           setData(err);
        })
}, [])


  return (
  <>
    <div className='bg-black text-center text-3xl text-white p-3 m-12'>Github Username : {username}
    <img src={data.avatar_url} alt='img' className='h-56 w-56'></img>
    </div>
    <div className='bg-black text-center text-3xl text-white p-3 m-12'>Github Repos : {data.public_repos} </div>
    </>
  )
}

export default Github
