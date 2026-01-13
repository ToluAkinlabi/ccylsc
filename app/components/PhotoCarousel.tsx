'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PhotoCarouselProps {
  images: string[];
  title?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function PhotoCarousel({
  images,
  title,
  autoPlay = true,
  autoPlayInterval = 5000,
}: PhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      {title && <h3 className="carousel-title">{title}</h3>}
      
      <div className="carousel-wrapper">
        <button
          className="carousel-button carousel-button-prev"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          ❮
        </button>

        <div className="carousel-slide">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1120px"
            className="carousel-image"
            priority
            quality={90}
          />
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={nextSlide}
          aria-label="Next image"
        >
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
