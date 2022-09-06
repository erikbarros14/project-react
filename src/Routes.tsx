import  {
    BrowserRouter as Router , Route, Routes
} from 'react-router-dom'
import { Cart } from './component/cart'
import { Catalogo } from './component/catalogo'

export function AppRoutes() {

    return (
        <Router>
            <Routes>
            <Route  path = '/catalogo' element={<Catalogo/>} />
              
            <Route  path = '/cart' element={<Cart/>} />
            
            </Routes>
        </Router>
    )
}