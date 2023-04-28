import HeaderImage from "../../assests/600x400.png"
import data from "./data"
import "./header.css"

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait"/>
        </div>
        <h3>Christina M.</h3>
        <p>Please enjoy the photos I have placed here, I surely enjoyed the process!</p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">contact me!</a>
          <a href="#portfolio" className="btn light">My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header