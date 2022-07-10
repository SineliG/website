import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Bubble from '../../assets/images/bubble.png'

const Skills = () => {
    
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

    return (
      <>
        <div className="container skills-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'C', 'o', 'u', 'r', 's', 'e', 's']}
                  idx={15}
                />
              </h1>
                <p> I have completed course work in Java Object-Oriented Programming, Python Programming (Numpy, Scikit-learn, Pandas, Matplotlib, Statistics), Data Science, Computational Modelling, Linear Algebra, and Advanced Calculus.</p>
            </div>
            <div className = 'bubbles'>
            <img  src = {Bubble} alt = 'bubble'/>
            </div>
        </div>
      </>
    )
}

export default Skills 