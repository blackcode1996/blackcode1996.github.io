import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LogoA from "../../assets/images/logo-a.png"
import AnimatedLetters from "../AnimatedLetters"
import './index.scss'



const Home=()=>{
    const [letterClass,setLetterClass]=useState('text-animate')

    const nameArray=['a','k','a','s','h']

    const jobArray=['W','e','b',' ','d','e','v','e','l','o','p','e','r','.']


    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>  
                <span className={`${letterClass}_12`}>i,</span>  
                <br/> 
                <span className={`${letterClass}_13`}>I</span>
                <span className={`${letterClass}_14`}>'m</span>
                <img src={LogoA} alt="Aakash"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                />
                </h1>
                <h2>Full-Stack <span className=".mern">MERN</span> Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home