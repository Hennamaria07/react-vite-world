import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export const githubDataInfo = async () => {
const response = await fetch('https://api.github.com/users/Hennamaria07');
return response.json();
}

export const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Hennamaria07')
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, [data])
  return (
    <>
    <h1 className='text-center'>Github Followers: {data.followers}</h1>
    <div className='flex justify-center py-2'>
        <img src={data.avatar_url} alt="github profile photo" width={'300px'}/>
    </div>
    </>
  )
}
