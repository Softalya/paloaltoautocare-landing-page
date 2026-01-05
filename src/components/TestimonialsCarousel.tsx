'use client';

import { useState } from 'react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  avatar: string | null;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentTestimonialIndex} * (100% / 3)))`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)] min-w-[300px] bg-surface-dark p-8 rounded-2xl border border-surface-border relative"
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-surface-border text-6xl opacity-20">format_quote</span>
              <div className="flex gap-1 text-yellow-500 mb-4">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
              </div>
              <p className="text-gray-300 italic mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div
                  className="size-10 rounded-full bg-gray-600 bg-cover bg-center"
                  data-alt={`Portrait of a smiling customer named ${testimonial.name}`}
                  style={testimonial.avatar ? { backgroundImage: testimonial.avatar } : {}}
                />
                <div>
                  <h5 className="text-white font-bold text-sm">{testimonial.name}</h5>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => {
            setCurrentTestimonialIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1));
          }}
          className="flex items-center justify-center size-12 rounded-full bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentTestimonialIndex === 0}
          aria-label="Previous testimonials"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialIndex(index)}
              className={`size-2 rounded-full transition-all duration-300 ${
                currentTestimonialIndex === index ? 'bg-primary w-8' : 'bg-surface-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            setCurrentTestimonialIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
          }}
          className="flex items-center justify-center size-12 rounded-full bg-surface-dark border border-surface-border hover:border-primary hover:bg-primary/10 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentTestimonialIndex >= testimonials.length - 3}
          aria-label="Next testimonials"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}

