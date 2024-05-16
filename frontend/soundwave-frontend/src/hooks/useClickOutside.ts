// src/hooks/useClickOutside.ts

import { useEffect, RefObject } from "react";

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 * @param ref - React ref object pointing to the element
 * @param onClickOutside - Function to call when clicking outside the element
 */
function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutside: () => void
): void {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
