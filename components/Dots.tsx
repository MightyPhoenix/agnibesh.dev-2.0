import {
  useState,
  useEffect,
  useRef,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import DOTS from "vanta/dist/vanta.dots.min";
import * as THREE from "three";

export default function Dots(props: {
  className: string | undefined;
  children:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (window !== undefined) {
      window.scrollTo(0, 1);
    }
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xf5009e,
          color2: 0x0,
          backgroundColor: 0x0,
          spacing: 41.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <section className={props.className} ref={myRef}>
      {props.children}
    </section>
  );
}
