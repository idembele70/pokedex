import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Container,
  Nav,
  NavItem,
  ScrollTopBtn,
  ScrollTopBtnIcon,
} from "./Header.style";
import { gsap } from "gsap";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // GSAP ScrollTrigger
  const containerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.from(containerEl.current, {
      opacity: 0,
      duration: 1,
    });
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  // header scroll animation
  const [displayScrollTop, setDisplayScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("Handle Scroll");
      if (window.scrollY > 150) {
        setDisplayScrollTop(true);
      } else {
        setDisplayScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // scroll top handler
  const handleScrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      <Container ref={containerEl}>
        <Nav>
          <NavItem to="/">Pokedex</NavItem>
          <NavItem to="/liked">Liked</NavItem>
        </Nav>
      </Container>
      <ScrollTopBtn display={displayScrollTop} onClick={handleScrollTop}>
        <ScrollTopBtnIcon icon={faChevronUp} />
      </ScrollTopBtn>
    </>
  );
};

export default Navbar;
