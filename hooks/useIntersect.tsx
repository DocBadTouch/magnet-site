import { useEffect, useRef, useState } from "react";

export default ({ root = null, rootMargin = '0px', threshold }) => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState(null);
  const observer = useRef<IntersectionObserver>()
  const [dist, updateDist] = useState(0);
  useEffect(
    () => {

      const observer = new window.IntersectionObserver(([entry]) => {

        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
          const elementHeight = element.offsetHeight;
          var scrollTop = document.documentElement.scrollTop;

          
          if (scrollTop > distanceToTop) {
           updateDist( 1 - (scrollTop - distanceToTop) / elementHeight);
          }
          
        }
        updateEntry(entry)

      },
        {
          root,
          rootMargin,
          threshold
        });
      observer.disconnect();

      if (node) observer.observe(node);

      return () => observer.disconnect();
    },
    [node]
  );

  return { setNode, entry, dist };
};