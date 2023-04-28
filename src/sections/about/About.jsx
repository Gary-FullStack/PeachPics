import AboutImage from "../../assests/about1.jpg"
import data from "./data"
import Card from "../../components/Card"
import "./about.css"


const about = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="about Tina's Gear"/>
          </div>
        </div>
        <div className="about__right">
          <h2>My Photo Gear</h2>
          <div className="about__cards">
            {
              data.map(item =>(
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              )
            )
            }
          </div>
          <p>I have gear.  Its cool, so many gadgets and doodads.</p>
          <p> The quick brown fox, ran quickly.</p>
        </div>
      </div>
    </section>
  )
}

export default about