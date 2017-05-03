

var React = require('react');

var Carousel = require('nuka-carousel');

const Jumbotron = props => {
  mixins: [Carousel.ControllerMixin];
    return (
      <Carousel wrapAround={true} dragging={true} slideHeight={0.5}>
        <img className="carouzel" src="https://preview.ibb.co/bCNaGQ/guitars_artsy_shorter_2.jpg" alt="guitars_artsy_shorter_2" border="0" />
        <img className="carouzel" src="https://preview.ibb.co/jaV1qk/studio.jpg" alt="studio" border="0"/>
        <img className="carouzel" src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
      </Carousel>
    );
};

export default Jumbotron;