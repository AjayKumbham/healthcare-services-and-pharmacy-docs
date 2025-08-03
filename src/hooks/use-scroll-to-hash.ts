import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useScrollToHash() {
  const [searchParams] = useSearchParams();
  const scrollId = searchParams.get("scroll");

  useEffect(() => {
    if (!scrollId) return;
    let attempts = 0;
    const maxAttempts = 20;

    function tryScroll() {
      const el = document.getElementById(scrollId);
      const main = document.querySelector("main.flex-1");
      if (el && main) {
        const headerOffset = 20;
        const elementPosition = el.getBoundingClientRect().top - main.getBoundingClientRect().top;
        const offsetPosition = elementPosition + main.scrollTop - headerOffset;
        main.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
  }, [scrollId]);
}