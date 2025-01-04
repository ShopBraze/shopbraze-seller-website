import { useState, useEffect } from "react";

const useIsInView = ({ elementId }: { elementId: string }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementId]);

  return { isInView };
};

export default useIsInView;
