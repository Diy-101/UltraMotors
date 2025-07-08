// Utility functions for navigation and smooth scrolling
import type { NavigateFunction, Location } from "react-router-dom";

/**
 * Scrolls to a section by hash or navigates to home and then scrolls.
 * @param hash - The hash string (e.g., '#about')
 * @param location - The current location object from react-router
 * @param navigate - The navigate function from react-router
 */
export function scrollToSectionOrNavigate(
  hash: string,
  location: Location,
  navigate: NavigateFunction
) {
  if (location.pathname !== "/") {
    navigate(`/${hash}`);
    setTimeout(() => {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    const el = document.getElementById(hash.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = hash;
  }
}

/**
 * Scrolls to the top or navigates to home and then scrolls to top.
 * @param location - The current location object from react-router
 * @param navigate - The navigate function from react-router
 */
export function scrollToTopOrNavigate(
  location: Location,
  navigate: NavigateFunction
) {
  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
