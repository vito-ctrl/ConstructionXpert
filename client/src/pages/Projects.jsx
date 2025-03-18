import { useState } from "react";
import Cards from "../components/Cards";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Projects = () => {
    const [project, setproject] = useState({})

    

    return (
        <>
            <Navbar/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Projects