"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button";
import type { TeacherData } from "@/data/teachers-data";

interface TeachersCarouselProps {
  data: TeacherData[];
}

const TeachersCarousel = ({ data }: TeachersCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const currentTeacher = useMemo(
    () => data[currentIndex],
    [data, currentIndex],
  );

  if (!currentTeacher) {
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
        aria-label="Professor anterior"
        onClick={goToPrev}
        disabled={!hasMultipleItems}
        className="absolute top-1/2 -left-10 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        type="button"
        aria-label="Proximo professor"
        onClick={goToNext}
        disabled={!hasMultipleItems}
        className="absolute top-1/2 -right-10 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-lg transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
      >
        <ChevronRight size={30} />
      </button>

      <article
        className="relative overflow-hidden rounded-4xl border-[3px] border-[#1ea96b] bg-[#001408] shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:rounded-[2.2rem] lg:h-140"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="grid h-full grid-cols-1 lg:grid-cols-[0.95fr_1.25fr]">
          <div className="relative min-h-85 bg-[radial-gradient(circle_at_center,#0f6f43_0%,#001408_62%)] p-4 sm:p-5 md:p-6 lg:h-full lg:min-h-0 lg:p-8">
            <span className="text-5xl font-clash leading-none text-white/18 md:text-6xl">
              {currentTeacher.numberLabel}
            </span>

            <div className="relative mx-auto mt-4 aspect-3/4 w-[62%] overflow-hidden rounded-3xl sm:mt-5 md:w-[58%] lg:mt-6 lg:w-[64%]">
              <Image
                src={currentTeacher.image}
                alt={currentTeacher.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex h-full flex-col bg-[#2f8b52] p-4 text-[#001408] sm:p-5 md:p-6 lg:p-8">
            <p className="text-sm font-medium text-[#001408]/85 md:text-base">
              {currentTeacher.subject}
            </p>

            <h3 className="mt-2 text-3xl font-clash leading-[0.95] tracking-tight md:mt-3 md:text-4xl">
              {currentTeacher.name}
            </h3>

            <div className="mt-4 space-y-4 overflow-y-auto pr-1 md:mt-5 md:space-y-5">
              <p className="max-w-xl text-sm leading-6 text-[#001408]/85 md:text-base md:leading-7">
                {currentTeacher.description}
              </p>

              <h4 className="text-3xl font-clash leading-tight text-[#001408] md:text-4xl">
                {currentTeacher.curriculumTitle}
              </h4>

              <ul className="list-disc pl-5 text-sm leading-6 text-[#001408]/90 md:text-base md:leading-7">
                {currentTeacher.curriculum.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 md:mt-6 lg:mt-auto">
              {currentTeacher.ctaHref ? (
                <a
                  href={currentTeacher.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    Icon={ArrowUpRight}
                    cn="bg-white text-[#001408] hover:bg-white/90"
                    cnText="font-semibold"
                    cnIcon="bg-[#001408] text-white"
                  >
                    {currentTeacher.ctaLabel}
                  </Button>
                </a>
              ) : (
                <Button
                  Icon={ArrowUpRight}
                  cn="bg-white text-[#001408] hover:bg-white/90"
                  cnText="font-semibold"
                  cnIcon="bg-[#001408] text-white"
                >
                  {currentTeacher.ctaLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>

      {hasMultipleItems ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {data.map((teacher, index) => (
            <button
              key={teacher.id}
              type="button"
              aria-label={`Ir para slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition ${
                currentIndex === index ? "w-10 bg-white" : "w-2.5 bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TeachersCarousel;
