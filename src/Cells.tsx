import React, {
  useState,
  useEffect,
  useRef,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import CELLS from "vanta/dist/vanta.cells.min";

export default function Cells(props: {
  className: string;
  children: ReactChild;
}) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo(0, 1);
    }
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x59ff,
          color2: 0xff00da,
          size: 3,
          speed: 2.3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section className={props.className} ref={myRef}>
      {props.children}
    </section>
  );
}
