import SlideItem from "./SlideItem";
import { SlideProps } from "./types";
import styles from './Slide.module.scss';
import { useState } from "react";
import SlideArrow from "../../../icons/SlideArrow";

const Slider = ({slides}: SlideProps) => {

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <SlideItem key={index} id={index} imageUrl={slide.imageUrl} title={slide.title} description={slide.description} isActive={index === activeSlide} />
      ))}
      <div className={styles.slideNav}>
        <button onClick={() => setActiveSlide(activeSlide === 0 ? 0 : activeSlide-1)} className={styles.navLeft}><SlideArrow /></button>
        <button onClick={() => setActiveSlide(activeSlide === slides.length - 1 ? slides.length - 1 : activeSlide+1)} className={styles.navRight}><SlideArrow /></button>
        <div className={styles.slideNumber}>{`0${activeSlide+1} / 0${slides.length}`}</div>
      </div>
    </div>
  )
}

export default Slider;