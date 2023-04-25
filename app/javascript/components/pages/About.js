import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import chris from '../assets/chris_360.jpg'
import dennis from '../assets/dennis_360.jpg'
import joel from '../assets/joel.jpg'
import yahya from '../assets/yahya_360.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import resume from '../assets/quire.png'

const About = (index = 0) => {
  const [activeIndex, setActiveIndex] = useState(index);
  const [items, setItems] = useState([
    {
      src: { joel },
      altText: "Product Manager",
      caption: "Joel Carr",
      github: "https://github.com/JoelCarr619",
      linkedin: "https://www.linkedin.com/in/joelcarr2/",
      key: 1,
    },
    {
      src: { dennis },
      altText: "Design Lead",
      caption: "Dennis Tran",
      github: "https://github.com/RichDTran",
      linkedin: "https://www.linkedin.com/in/dennis-tran-/",
      key: 2,
    },
    {
      src: { chris },
      altText: "Tech Lead",
      caption: "Chris Aument",
      github: "https://github.com/csaument",
      linkedin: "https://www.linkedin.com/in/chris-aument/",
      key: 3,
    },
    {
      src: { yahya },
      altText: "Project Manager",
      caption: "Yahya Ahmed",
      github: "https://github.com/yiahmed",
      linkedin: "https://www.linkedin.com/in/yahyaiahmed/",
      key: 4,
    },
  ])

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        key={item.key}
      >
        <img className="profile" src={Object.values(item.src)[0]} alt={item.altText} />
        <CarouselCaption
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="content-wrap">
      <div className="about-page">
        <div className="csscarousel">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
        <div className="credentials">
          {<a href={items[activeIndex].github} target='_blank'> <img src={github} alt='github' className='icon' /></a>}
          {<a href={items[activeIndex].linkedin} target='_blank'> <img src={linkedin} alt='linkedin' className='icon' /></a>}
          {<a href={""} target='_blank'> <img src={resume} alt='resume' className='icon' /></a>}
        </div>
      </div>
    </div>
  );
};
export default About