import photo1 from "../../Assets/img_photo_1.svg"
import photo2 from "../../Assets/img_photo_2.svg"
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  slidesToScroll: 1,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
};
const testi = [
  {
    id: 1,
    image: photo1,
    rate: 5,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 2,
    image: photo2,
    rate: 4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 3,
    image: photo1,
    rate: 3,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 4,
    image: photo2,
    rate: 2,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 5,
    image: photo1,
    rate: 1,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 6,
    image: photo2,
    rate: 6,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 7,
    image: photo1,
    rate: 7,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  },
  {
    id: 8,
    rate: 8,
    image: photo2,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    date: "John Dee 32, Bromo"
  }

]
  export {testi, settings}