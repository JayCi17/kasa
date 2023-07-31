import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import Error from './pages/Error/Error'



function App(){
    return(
        <div className='app'>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </main>

        </div>
    )
}

export default App
