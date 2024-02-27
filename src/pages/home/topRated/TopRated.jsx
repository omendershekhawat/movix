import React ,{useState}from 'react'
import '../../home/style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

import ContentWrappr from "../../../components/contentWrapper/ContentWrapper"
import useFetch from '../../../hooks/useFetch'
import Carosel from '../../../components/carousel/Carosel'


const TopRated = () => {
    const[endpoint, setEndpoint] = useState("movie")

    const {data , loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        setEndpoint(tab ==="Movies" ? "movie" : "tv");
    }

    return (
        <div className='carouselSection'>
            <ContentWrappr>
                <span className="carouselTitle">
                Top Rated
                </span>
                

                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange ={onTabChange}/>
            </ContentWrappr>
            <Carosel 
            data={data?.results}
             loading ={loading}
             endpoint={endpoint}
             />


        </div>
    )



}

export default TopRated;