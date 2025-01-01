import { useRef, useState, useEffect, useCallback } from 'react';
import ArrowLeftIcon from "assets/icons/chevron-right-white.svg"
import Button from 'common-components/button/button';
import Image from 'next/image';

type CustomScrollbarProps = {
  children: React.ReactNode;
};

const HorizontalScroll = ({ children }: CustomScrollbarProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(400); // Default scroll distance

  const updateScrollDistance = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setScrollDistance(1000);
    } else if (windowWidth >= 768) {
      setScrollDistance(800);
    } else {
      setScrollDistance(600);
    }
  };

  const checkScrollPosition = useCallback(() => {
    if (scrollRef?.current) {
      const isAtStart = scrollRef?.current?.scrollLeft === 0;
      const isAtEnd = scrollRef?.current?.scrollLeft + scrollRef?.current?.clientWidth >= scrollRef?.current?.scrollWidth - 1;

      setIsLeftDisabled(isAtStart);
      setIsRightDisabled(isAtEnd);
    }
  }, [])

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="relative">

      {/* Left Scroll Button */}
      <Button
        onClick={scrollLeft}
        disabled={isLeftDisabled}
        className={`flex justify-center items-center h-8 w-8 absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full z-10 ${isLeftDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Image src={ArrowLeftIcon} alt="arrow-left.svg" className=' rotate-180 h-6 w-6' />
      </Button>

      {/* Scrollable Content */}
      <div ref={scrollRef} className="flex overflow-scroll scrollbar-hide cursor-pointer">
        {children}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        disabled={isRightDisabled}
        className={`flex justify-center items-center h-8 w-8 absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full z-10 ${isRightDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Image src={ArrowLeftIcon} alt="arrow-right.svg" className='h-6 w-6' />
      </button>
    </div>
  );
};

export default HorizontalScroll;
