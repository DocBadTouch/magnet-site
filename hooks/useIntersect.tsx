import { useEffect, useRef, useState } from "react";

export default ({ root = null, rootMargin ='0px', threshold }) => {
  const [entry, updateEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState(null);
  const observer = useRef<IntersectionObserver>()

  useEffect(
    () => {
      
      const observer  = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
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

  return {setNode, entry};
};