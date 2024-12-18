"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";
import animejs from "animejs";
import $ from "jquery";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();
  const scrollDirection = useScrollDirection({
    initialDirection: "up",
    thresholdPixels: 10,
  });
  const [windowWidth, setWindowDimensions] = useState<number | undefined>();
  const [scrollY, setScrollY] = useState<number | undefined>();
  const [activeLink, updateActiveLink] = useState<string>("/");

  useEffect(() => {
    if (scrollDirection === "up") {
      animejs({
        targets: "#app-nav",
        translateY: "0%",
        easing: "easeInOutSine",
        duration: 1000,
      });
      animejs({
        targets: "#social",
        translateX: "-110%",
        easing: "easeInOutSine",
        duration: 1000,
      });

    } else {
      animejs({
        targets: "#app-nav",
        translateY: "-100%",
        easing: "easeInOutSine",
        duration: 1000,
      });
      animejs({
        targets: "#social",
        translateX: '1%',
        easing: "easeInOutSine",
        duration: 1000,
      });
    }
  }, [scrollDirection]);

  useEffect(() => {
    setWindowDimensions(window.innerWidth);
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // closes the navbar on outside click
  useEffect(() => {
    window.addEventListener("click", () => {
      $("#basic-navbar-nav").removeClass("show");
      $("#navToggle").removeClass("collapsed");
    });
  }, []);

  useEffect(() => {
    if (window) {
      updateActiveLink(pathName);
    }
  }, [pathName]);

  return (
    <header>
      <Navbar
        expand="md"
        id="app-nav"
        className="shadow menu"
        fixed="top"
        collapseOnSelect
      >
        <Container fluid className="flex flex-col md:flex-row justify-start">
          <div className="w-100 flex flex-row align-middle justify-between">
            <Navbar.Brand
              href="/"
              className="flex flex-col md:flex-row align-middle justify-between items-center"
            >
              <Image
                priority
                alt="Hooman Hajarian"
                src="/logo.png"
                width={70}
                height={70}
                className="mr-auto ml-auto pt-2"
              />
              <h1 className="text-2xl md:text-3xl text-myRed text-center w-100">
               Hooman Hajarian</h1>
            </Navbar.Brand>
            <Navbar.Toggle
              style={{ background: "#e0e6ed" }}
              aria-controls="basic-navbar-nav"
              className="mr-10 mt-auto mb-auto"
              id="navToggle"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              navbarScroll
              className="w-100 flex flex-col justify-center gap-2 mr-0 lg:mr-20 align-middle text-center md:flex-row md:justify-around whitespace-nowrap"
            >
              <Nav.Link
                style={{
                  color:
                    activeLink === "/" || activeLink === "/"
                      ? "#15253c"
                      : "#e0e6ed"
                }}
                active={activeLink === "/" || activeLink === "/"}
                className="nav-link"
                href="/"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/resume" ? "#15253c" : "#e0e6ed",
                }}
                active={activeLink === "/resume"}
                className="text-myWhite md:hover:!text-myRed"
                href="/resume"
              >
                Resume
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/showoff" ? "#15253c" : "#e0e6ed",
                }}
                active={activeLink === "/showoff"}
                className="text-myWhite md:hover:!text-myRed"
                href="/showoff"
              >
                Showoff
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/about" ? "#15253c" : "#e0e6ed",
                }}
                active={activeLink === "/about"}
                className="text-myWhite md:hover:!text-myRed animate-pulse"
                href="/about"
              >
                About & Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};