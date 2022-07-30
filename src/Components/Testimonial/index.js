import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"
import { testi } from "../../const/staticData";


const Testimonial = () => {

  // const [open, setOpen] = useState('');
  //   const toggle = (id) => {
  //       open === id ? setOpen() : setOpen(id);
  //   };
  const next=  () => {
    this.slider.slickNext();
  }
  const previous =()=> {
    this.slider.slickPrev();
  }
  
  const constructor =()=> {
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container container-testi">
      <Slider  {...settings}>
      {testi.map(item=>(
        <div className="card-testi">
          <div className="card-top"></div>
           <img src={item.image} alt={item.id}/>
           <h1>Bintang</h1>
           <p>"{item.comment}"</p>
           <p>{item.date}</p>
          <div className="card-bottom"></div>
        </div>
      ))}
      </Slider>
      <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
      </div>
    </div>
  )
}

export default Testimonial



// export default class PreviousNextMethods extends Component {
//   constructor(props) {
//     super(props);
//     this.next = this.next.bind(this);
//     this.previous = this.previous.bind(this);
//   }
//   next() {
//     this.slider.slickNext();
//   }
//   previous() {
//     this.slider.slickPrev();
//   }
//   render() {
//     const settings = {
//       // dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2>Previous and Next methods</h2>
//         <Slider ref={c => (this.slider = c)} {...settings}>
//           <div key={1}>
//             <h3>1</h3>
//           </div>
//           <div key={2}>
//             <h3>2</h3>
//           </div>
//           <div key={3}>
//             <h3>3</h3>
//           </div>
//           <div key={4}>
//             <h3>4</h3>
//           </div>
//           <div key={5}>
//             <h3>5</h3>
//           </div>
//           <div key={6}>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <div style={{ textAlign: "center" }}>
//           <button className="button" onClick={this.previous}>
//             Previous
//           </button>
//           <button className="button" onClick={this.next}>
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   }
// }