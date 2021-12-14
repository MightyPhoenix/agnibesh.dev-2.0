import {
  useState,
  useEffect,
  useRef,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Net(props: {
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
        NET({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fddff,
          backgroundColor: 0x0,
          points: 13.0,
          maxDistance: 10.0,
          spacing: 19.0,
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
