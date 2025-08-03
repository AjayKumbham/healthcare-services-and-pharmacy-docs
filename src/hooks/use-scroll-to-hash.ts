import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    let attempts = 0;
    const maxAttempts = 20;

    function tryScroll() {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 20;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        el.style.transition = "all 0.3s ease";
        el.style.backgroundColor = "#dbeafe";
        el.style.borderLeft = "4px solid #3b82f6";
        el.style.paddingLeft = "12px";
        setTimeout(() => {
          el.style.backgroundColor = "";
          el.style.borderLeft = "";
          el.style.paddingLeft = "";
        }, 2000);
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    }

    tryScroll();
  }, [location.hash]);
}