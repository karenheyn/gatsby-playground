import React from "react"
import "materialize-css"
import { Carousel } from "react-materialize"
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"
import green from "../images/green.jpg"
import CarouselStyles from "./carousel.module.scss"
const Gallery = () => {
  return (
    <Carousel
      carouselId="Carousel-2"
      className="white-text center"
      options={{
        fullWidth: true,
        indicators: true,
      }}
    >
      <div className={CarouselStyles.slide1}>
        <img
          src={green}
          alt="betterbackstories"
          style={{ position: "relative" }}
        ></img>
        <h2>First Panel</h2>
        <p>This is your first panel</p>
      </div>
      <div className="amber">
        <h2>Second Panel</h2>
        <p>This is your second panel</p>
      </div>
      <div className="green">
        <h2>Third Panel</h2>
        <p>This is your third panel</p>
      </div>
      <div className="blue">
        <h2>Fourth Panel</h2>
        <p>This is your fourth panel</p>
      </div>
    </Carousel>
  )
}

export default Gallery
