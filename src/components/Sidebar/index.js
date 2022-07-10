import { Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faGear, faSignsPost } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="">
          <div className="logo">
          <img src={LogoS} alt="Logo" />
          </div>
          <div className="sub-logo">
          <img src={LogoSubtitle} alt="sineli" />
          </div>
        </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="">
          <FontAwesomeIcon icon={faHome} color="#3D405B" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="skills">
          <FontAwesomeIcon icon={faGear} color="#3D405B" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="about">
          <FontAwesomeIcon icon={faUser} color="#3D405B" />
        </NavLink>
        <NavLink activeclassname="active" className="contact-link" to="contact">
          <FontAwesomeIcon icon={faEnvelope} color="#3D405B" />
        </NavLink>
        <NavLink activeclassname="active" className="hobbies-link" to="hobbies">
          <FontAwesomeIcon icon={faSignsPost} color="#3D405B" />
        </NavLink>
    </nav>
    <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/sineli-gamage-8a3a41188/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#3D405B" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/SineliG"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#3D405B" />
          </a>
        </li>
    </ul>
    </div>
)

export default Sidebar