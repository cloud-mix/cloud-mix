var React = require("react");
var Carousel = require("nuka-carousel");
import SongListEntry from './SongList/SongListEntry.js';

const Jumbotron = props => {
  mixins: [Carousel.ControllerMixin];
    return (
      <Carousel className="z-depth-2" decorators={[]} autoplayInterval={5000} easing={"linear"} wrapAround={true} autoplay={true} swiping={true} >
        <div className="carouzel">
          <img className="carouselBack" src="../images/drum_carousel.png"/>
        </div>
        <div className="carouzel">
          <img className="carouselBack" src="../images/guitar_carousel.png" alt="guitars_artsy_shorter_2" border="0" />
        </div>
        {!props.isLoggedIn ? (
          <div className="carouzel">
            <img className="carouselBack" src="../images/mic.png" alt="studio" border="0"/>
          </div>
        ) : (
          <div className="carouzel">
            <img className="carouselBack" src="../images/micLoggedIn.png" alt="studio" border="0"/>
          </div>
        )}
      </Carousel>
    );
};

export default Jumbotron;
