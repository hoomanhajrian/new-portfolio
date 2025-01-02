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
        <Container fluid className="nav-container">

          <Navbar.Brand
            href="/"
            className="navbar-brand"
          >
            <Image
              priority
              alt="Hooman Hajarian"
              src="/logo.png"
              width={80}
              height={80}
              className="mr-auto ml-auto pt-2"
            />
            <h1>Hooman Hajarian</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ background: "#e0e6ed" }}
            aria-controls="basic-navbar-nav"
            className="mr-10 mt-auto mb-auto"
            id="navToggle"
          />
          <Navbar.Collapse className="navbar-items" id="basic-navbar-nav">
            <Nav className="nav-items-wrapper">
              <Nav.Link
                style={{
                  color:
                    activeLink === "/" || activeLink === "/"
                      ? "#F28500"
                      : "#e0e6ed",
                  fontWeight: activeLink === "/" ? "bold" : "lighter",
                }}
                active={activeLink === "/" || activeLink === "/"}
                className="nav-item"
                href="/"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/resume" ? "#F28500" : "#e0e6ed",
                  fontWeight: activeLink === "/resume" ? "bold" : "lighter",
                }}
                active={activeLink === "/resume"}
                className="nav-item"
                href="/resume"
              >
                Resume
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/showoff" ? "#F28500" : "#e0e6ed",
                  fontWeight: activeLink === "/showoff" ? "bold" : "lighter",
                }}
                active={activeLink === "/showoff"}
                className="nav-item"
                href="/showoff"
              >
                Showoff
              </Nav.Link>
              <Nav.Link
                style={{
                  color: activeLink === "/about" ? "#F28500" : "#e0e6ed",
                  fontWeight: activeLink === "/about" ? "bold" : "lighter",
                }}
                active={activeLink === "/about"}
                className="nav-item"
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