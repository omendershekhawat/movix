import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../heroBanner/style.scss'
import { useSelector } from "react-redux"
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';

// import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


function HeroBanner() {
    const [background, setBackgound] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackgound(bg);
    }, [data])


    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    return (
        <div className="heroBanner">

            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>
            }
            <ContentWrapper>

<div className="opacity-layer">

</div>
           
                <div className="heroBannerContent">
                    <span className='title'> Welcome</span>
                    <span className='subtitle'>Millions of movies, TV shows and people to discover. Explore now</span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for movie or tv show...'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>


                </div>
          
            </ContentWrapper>

        </div>
    )
}

export default HeroBanner