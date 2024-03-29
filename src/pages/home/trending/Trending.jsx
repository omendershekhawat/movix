import React ,{useState}from 'react'
import '../../home/style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

import ContentWrappr from "../../../components/contentWrapper/ContentWrapper"
import useFetch from '../../../hooks/useFetch'
import Carosel from '../../../components/carousel/Carosel'


const Trending = () => {
    const[endpoint, setEndpoint] = useState("day")

    const {data , loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndpoint(tab ==="Day" ? "day" : "week");
    }

    return (
        <div className='carouselSection'>
            <ContentWrappr>
                <span className="carouselTitle">
                Trending
                </span>
                

                <SwitchTabs data={["Day", "Week"]} onTabChange ={onTabChange}/>
            </ContentWrappr>
            <Carosel data={data?.results} loading ={loading}/>


        </div>
    )



}

export default Trending