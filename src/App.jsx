import React, { useEffect, useState } from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { filterData, apiUrl } from "./data.jsx";
import { toast } from 'react-toastify';
import { Fclike } from 'react-icons'

const App = () => {

    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState(null)
    const [category, setCategory] = useState(filterData[0].title);


    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(apiUrl);
            const output = await res.json();

            setCourses(output.data)

        } catch (error) {
            toast.error("Something is wrong");
        }

        setLoading(false);
    }

    useEffect(() => {

        fetchData();

    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className='bg-slate-500'>
                <div >

                    <Filter
                        category={category}
                        filterData={filterData}
                        setCategory={setCategory}
                     />



                </div>
                <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center  min-h-[50vh] ">
                    {
                        loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default App