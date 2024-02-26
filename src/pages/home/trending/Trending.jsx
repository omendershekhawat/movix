import React from 'react'
import '../../home/style.scss'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

import ContentWrappr from "../../../components/contentWrapper/ContentWrapper"

const Trending = () => {

    const onTabChange = (tab) => {

    }

    return (
        <div className='carouselSection'>
            <ContentWrappr>
                <span className="carouselTitle">
                Trending
                </span>
                

                <SwitchTabs data={["Day", "Week"]} onTabChange ={onTabChange}/>
            </ContentWrappr>

        </div>
    )



}

export default Trending