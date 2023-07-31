import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Error from './pages/Error/Error'
import Header from "./components/Header/Header"
import Footer from './components/Footer/footer'




function App(){
    return(
        <>
        <Header/>
        <div className='app'>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </main>
        <Footer/>
        </div>
        </>
    )
}

export default App
