import { useEffect } from 'react';

function useClickOutside(
  refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const refsArray = Array.isArray(refs) ? refs : [refs];
      if (refsArray?.every((ref) => ref?.current && !ref?.current.contains(event?.target as Node))) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);

}

export default useClickOutside;
