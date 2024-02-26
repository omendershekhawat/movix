import { useState, useEffect } from 'react'
import './App.css'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Header from './components/header/Header'
import  Footer  from './components/footer/Footer'
import Home from './pages/home/Home'
import Details from './pages/details/details'
import Explore from './pages/explore/explore'
import PagesNotFound from './pages/404/PagesNotFound'
import Searchresult from './pages/searchResult/SearchResult'



function App() {
  const dispatch = useDispatch()
const {url} = useSelector((state)=>
state.home
)
console.log (url);
  useEffect(() => {
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res)
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",

          profile: res.images.secure_base_url + "original",

        }
        dispatch(getApiConfiguration(url))
      })
  }

  return(
  <>
   <BrowserRouter>
  <Header/>
   <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/:mediaType/:id" element={ <Details/>}/>
    <Route path="/querysearch/:" element={ <Searchresult/>}/>
    <Route path="/explore/:mediaType" element={ <Explore/>}/>
    <Route path="*" element={ <PagesNotFound/>}/>
    
   




   </Routes>
   <Footer/>

  </BrowserRouter>

  
  </>)

}

export default App
