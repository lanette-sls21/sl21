import clsx from "clsx";
import React, { useRef } from "react";

export default function FadeInDiv({
  children,
  whenVisible,
  whenHidden,
  duration,
}: any) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const current = domRef.current;
    if (!current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [domRef]);
  return (
    <div
      className={clsx(
        isVisible ? `${whenVisible}` : `${whenHidden}`,
        `transition duration-${duration}`
      )}
      ref={domRef}>
      {children}
    </div>
  );
}
