import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { VscAdd } from "react-icons/vsc";

const Slider = ({slides, addMoreImages}) => {
  const swiperRef = useRef(null);

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation = {false}
        loop={true}
        modules={[Navigation]}  
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper; // Reference to Swiper instance
        }}
      >
       {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="controls">
        <div className="gallery">Gallery</div>
        <button
          className="custom-prev-btn"
          onClick={() => swiperRef.current?.slidePrev()}
        >
         <VscArrowLeft />
        </button>
        <button
          className="custom-next-btn"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <VscArrowRight />
        </button>
        <button className="add-more-btn" onClick={addMoreImages}>
        <VscAdd />
         Add More Images
        </button>
      </div>
    </div>
  );
}

export default Slider;