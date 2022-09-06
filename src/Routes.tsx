import  {
    BrowserRouter as Router , Route, Routes
} from 'react-router-dom'
import { Header } from './component/Header'
import { Catalogo } from './component/catalogo'

export function AppRoutes() {

    return (
        <Router>
            <Routes>
            <Route  path = '/catalogo' element={<Catalogo/>} />
              
            <Route  path = '/cart' element={<Header/>} />
            
            </Routes>
        </Router>
    )
}