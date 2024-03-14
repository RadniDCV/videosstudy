import './App.css'
import Page01 from "./pages/Page01"
import Page02 from './pages/Page02'
import Page03 from './pages/Page03'
import Page04 from './pages/Page04'
import Page05 from './pages/Page05'
import Page06 from './pages/Page06'
// import Home from "./pages/Home"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Gallery from './components/ReactVideoGallery'
function App() {

const NotFound =() =>{
  return(
    <>
      <h1>404 - page not found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link to="/">Home</Link>
    </>
  )

}

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery/>}/>
          {/* <Route path="/gallery" element={<Gallery/>}/> */}
          <Route path="/page01" element={<Page01/>}/>
          <Route path='/page02' element={<Page02 />} />
          <Route path='/page03' element={<Page03 />} />
          <Route path='/page04' element={<Page04 />} />
          <Route path='/page05' element={<Page05 />} />
          <Route path='/page06' element={<Page06 />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
