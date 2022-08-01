import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"
import { testi } from "../../const/staticData";


export default class Testimonial extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        slidesToShow: 1,
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
      return (
        <div id="testimonial" className=" container-testi">
        <h1>Testimonial</h1>
        <p>Berbagai review positif dari para pelanggan kami</p>
        <Slider ref={c => (this.slider = c)} {...settings}>
        {testi.map(item=>(
        <div className="card-testi">
          <div className="img-profile">
            <img src={item.image} alt={item.id}/>
          </div>
          <div className="text-comment">
            <h1>{item.rate}</h1>
            <p>"{item.comment}"</p>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="btn-arrow" onClick={this.previous}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path id="prev" d="M7 13L1 7L7 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button className="btn-arrow" onClick={this.next}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path id="next"xmlns="http://www.w3.org/2000/svg" d="M1 13L7 7L1 1" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      );
    }
  }