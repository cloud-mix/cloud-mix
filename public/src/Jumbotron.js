var React = require("react");

var Carousel = require("nuka-carousel");

const Jumbotron = props => {
  mixins: [Carousel.ControllerMixin];
    return (
      <Carousel className="z-depth-2" decorators={[]} autoplayInterval={5000} easing={"linear"} wrapAround={true} autoplay={true} swiping={true} >
        <img className="carouzel" src="http://www.pxleyes.com/images/contests/drums/fullsize/cymbal-and-drum-4d16c98e2e487_hires.jpg"/>
        <img className="carouzel" src="https://static1.squarespace.com/static/56477fc8e4b069c54138221c/t/56564901e4b0c668da4b2ef8/1448495364626/string-555070.jpg?format=2500w" alt="guitars_artsy_shorter_2" border="0" />
        <img className="carouzel" src="http://wallpapercave.com/wp/bCurUbJ.jpg" alt="studio" border="0"/>

      </Carousel>
    );
};

export default Jumbotron;
