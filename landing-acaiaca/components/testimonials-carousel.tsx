"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import type { TestimonialData } from "@/data/testimonials-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface TestimonialsCarouselProps {
  data: TestimonialData[];
}

const TestimonialsCarousel = ({ data }: TestimonialsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const currentItem = useMemo(() => data[currentIndex], [data, currentIndex]);

  if (!currentItem) {
    return null;
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const hasMultipleItems = data.length > 1;
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!hasMultipleItems || touchStartX === null || touchEndX === null) {
      return;
    }

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      goToNext();
    }

    if (distance < -minSwipeDistance) {
      goToPrev();
    }
  };

  return (
    <div className="relative mx-auto mt-6 w-full max-w-5xl md:mt-8">
      <button
        type="button"
        aria-label="Depoimento anterior"
        onClick={goToPrev}
        disabled={!hasMultipleItems}
        className="absolute top-1/2 -left-10 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#00371c]/20 bg-[#00371c]/10 text-[#00371c] transition hover:bg-[#00371c]/20 disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        type="button"
        aria-label="Proximo depoimento"
        onClick={goToNext}
        disabled={!hasMultipleItems}
        className="absolute top-1/2 -right-10 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#00371c]/20 bg-[#00371c]/10 text-[#00371c] transition hover:bg-[#00371c]/20 disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
      >
        <ChevronRight size={30} />
      </button>

      <article
        className="overflow-hidden rounded-4xl border-[3px] border-[#00371c] bg-[#d4d6d6] md:rounded-[2.4rem]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="p-4 sm:p-4.5 md:p-6">
            <div className="flex items-center gap-1 text-[#27b572]">
              {Array.from({ length: currentItem.rating }).map((_, i) => (
                <Star
                  key={`star-${currentItem.id}-${i}`}
                  fill="currentColor"
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              ))}
            </div>

            <h3 className="mt-3 text-2xl font-clash leading-tight text-[#202020] sm:text-3xl md:mt-4 md:text-4xl">
              {currentItem.studentName}
            </h3>

            <div className="relative mt-4 aspect-3/4 w-full overflow-hidden rounded-[1.1rem] bg-[#adb3b4] sm:mt-5 md:mt-6 md:rounded-[1.4rem]">
              <Image
                src={currentItem.image}
                alt={currentItem.studentName}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-[#001408] p-4 text-white sm:p-4.5 md:p-6">
            {currentItem.testimonial.map((paragraph, index) => (
              <p
                key={`p-${currentItem.id}-${index}`}
                className={`${poppins.className} text-sm leading-6 text-white/85 md:text-base md:leading-7 ${
                  index > 0 ? "mt-3 md:mt-4" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {hasMultipleItems ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {data.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ir para depoimento ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition ${
                currentIndex === index
                  ? "w-10 bg-[#00371c]"
                  : "w-2.5 bg-[#00371c]/35"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TestimonialsCarousel;
