import React from "react"
import "materialize-css"
import { Carousel, Button } from "react-materialize"
import "materialize-css/dist/js/materialize.min.js"
import "materialize-css/dist/css/materialize.min.css"
import green from "../images/green.jpg"
import CarouselStyles from "./carousel.module.scss"
import BB from "../images/4.jpg"
const Gallery = () => {
  return (
    <div class="add">
      <Carousel
        carouselId="Carousel-2"
        className="white-text center"
        options={{
          fullWidth: true,
          indicators: true,
          autoPlay: true,
        }}
      >
        <div className={CarouselStyles.slide1}>
          <img
            src={BB}
            alt="betterbackstories"
            style={{ position: "relative" }}
          ></img>
          <div className={CarouselStyles.overlay}>
            <h2>Better Backstories</h2>
            <p>Built with Node, Express, Vue.js, and Stripe</p>
            <div>
              <Button
                href="http://react-materialize.github.io/"
                target="blank"
                node="a"
                waves="red"
              >
                Deployed Version
              </Button>
            </div>
            <div>
              <Button
                href="http://react-materialize.github.io/"
                target="blank"
                node="a"
                waves="red"
              >
                Source Code
              </Button>
            </div>
          </div>
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
    </div>
  )
}

export default Gallery
