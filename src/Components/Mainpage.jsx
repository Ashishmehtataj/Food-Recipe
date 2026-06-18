import React, { useState } from 'react'
import Mealcards from './Mealcards'
import axios from "axios";

const Mainpage = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState("")
    const [msg, setMsg] = useState("")

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    const myFun = async () => {
        if (search == "") {
            setMsg("Please Enter something")
        } else {
            try {
                const get = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                setData(get.data.meals)

            } catch (error) {
                console.error("Error fetching data:", error);
                setMsg("Something went wrong while fetching data");
            }
            const get = await fetch()
            const jsonData = await get.json()
            setData(jsonData.meals)
        }
    }


    return (
        <div>
            <h1 className='head'>FOOD RECIPE APP</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type="text" placeholder='Enter Dishe' onChange={handleInput} />
                    <button onClick={myFun}>Search</button>
                </div>
                <h4 style={{
                    textAlign: "center",
                    fontSize: "40px"
                }}>{msg}</h4>
            </div>
            <div>
                <Mealcards detail={data} />
            </div>
        </div>
    )
}

export default Mainpage
