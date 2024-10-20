import { Outlet, useNavigation } from "react-router-dom"
import Loading from "./loader/Loading"
import Navbar from "./Navbar"

const Layout = () => {

    const navigate = useNavigation()
    const isLoading = navigate.state === 'loading'

    return (
        <>
        <div className='min-h-screen'>
          <Navbar/>
        
            {isLoading ? <Loading/> : <Outlet/>}
        
    
        </div>
        </>
    )
}



export default Layout;
