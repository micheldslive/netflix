import { Component } from "react";
import Slider from "react-slick";
import { cards } from "services/cards";
import { settings } from "services/settings";
import "slick-carousel/slick/slick.css";

const SliderContent = () => {
  const shuffle = (array: { id: number; card: string; name: string }[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const radom = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[radom];
      array[radom] = temp;
    }
    return array;
  };

  return (
    <Slider {...settings}>
      {[shuffle(cards)][0].map(({ id, card, name }) => (
        <span className="card" key={id}>
          <img className="card-image" src={card} alt={name} />
        </span>
      ))}
    </Slider>
  );
};

export class Popular extends Component {
  render() {
    return (
      <div className="slider-content">
        <h3>Populares na Netflix</h3>
        <SliderContent />
      </div>
    );
  }
}

export class High extends Component {
  render() {
    return (
      <div className="slider-content">
        <h3>Em Alta</h3>
        <SliderContent />
      </div>
    );
  }
}

export class Watched extends Component {
  render() {
    return (
      <div className="slider-content">
        <h3>Porque você assistiu Bright</h3>
        <SliderContent />
      </div>
    );
  }
}
