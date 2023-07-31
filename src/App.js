import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from "./pages/About/About"



function App(){
    return(
        <div className='app'>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                </Routes>

            </main>
        </div>
    )
}

export default App
