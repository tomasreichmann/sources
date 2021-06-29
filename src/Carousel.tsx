import clsx from "clsx";
import React, { useState } from "react";

import "./Carousel.css";

export type CarouselProps = {
  items: React.ReactNode[];
};

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="Carousel">
      <div className="Carousel_items">
        {items.map((item, itemIndex) => {
          return (
            <div
              className={clsx(
                "Carousel_item",
                itemIndex === currentIndex && "Carousel_item__current"
              )}
              key={itemIndex}
            >
              <div className="Carousel_item_content">
                <img src="/person.svg" alt="" className="reference_icon" />
                {item}
              </div>
            </div>
          );
        })}
      </div>
      <div className="Carousel_controls">
        {items.map((_, itemIndex) => {
          return (
            <button
              key={itemIndex}
              onClick={() => setCurrentIndex(itemIndex)}
              className={clsx(
                "Carousel_button",
                itemIndex === currentIndex && "Carousel_button__active"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
