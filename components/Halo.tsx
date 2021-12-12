import {
  useState,
  useEffect,
  useRef,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

export default function Halo(props: {
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
        HALO({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          amplitudeFactor: 0,
          xOffset: 0.22,
          size: 1.5,
          backgroundColor: 0x0,
          baseColor: 0x0,
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
