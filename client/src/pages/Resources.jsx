import { useState } from "react"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Resources = () => {
    const [resources, setresources] = useState({})

    // const handleChange = () = {

    // }
    return(
        <>
            <Navbar/>
            <Cards/>
            <Footer/>
        </>
    )
}

export default Resources