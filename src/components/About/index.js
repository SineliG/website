import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import LogoSin from '../../assets/images/logosin.png'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I am a fourth year undergraduate Life Science student with a minor in Mathematics at McMaster University.
              </p>
              <p>
                I am ambitous and pursuing a career in Tech! I am constantly improving my skills and learning new technologies.
              </p>
              <p>
                I am seeking a Software Engineering Internship for September to Decemeber 2022. 
              </p>
              <a href='https://drive.google.com/file/d/1Y55SKdg8dWk11Nlf4i6pyfeQ5GSiU1P5/view?usp=sharing' target = '_blank' rel = 'noreferrer' className = 'flat-button'>DOWNLOAD MY RESUME!</a>
            </div>
            <div className = 'sin'>
            <img  src = {LogoSin} alt='Sineli'/>
            </div>
        </div>
      </>
    )
}

export default About