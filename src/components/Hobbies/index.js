import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import HobbiesSin from '../../assets/images/Hobbies.png'

const Hobbies = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
        return setLetterClass('text-animate-hover')
      }, 4000)
  }, [])

    return (
      <>
        <div className="container hobbies-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                letterClass={letterClass}
                  strArray={['H', 'o', 'b', 'b', 'i', 'e', 's']}
                  idx={15}/>
              </h1>
              <p>
                During my free time, I love taking my dog on long walks throughout the neighbourhood, exploring the city, and doing outdoor activities such as kayaking and biking! When I am at home, I relax with my dog, and draw on my iPad using Procreate!
              </p>
            </div>
            <div className = 'hobby' >
            <img src = {HobbiesSin} alt='Hobbies' width = '650px' height= '520px'/>
            </div>
        </div>
      </>
    )
}

export default Hobbies