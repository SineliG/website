import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [' ',' ','S','i', 'n', 'e', 'l', 'i', '!']
    const jobArray = [
    ]

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3500)
      }, [])

    return (
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Aspiring Software Engineer</h2>
                <Link to='contact' className = 'flat-button'>CONTACT ME</Link>
            </div>
            <div className='sg'>
            <img src={LogoS} alt='sg'/>
            </div>
        </div>
      </>
    )
}

export default Home