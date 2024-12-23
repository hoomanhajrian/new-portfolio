"use client";
import { useEffect } from "react";
import Image from "next/image";
import animejs from 'animejs';
import useScrollDirection from "../../hooks/useScrollDirection";

export const Footer = () => {

    const scrollDirection = useScrollDirection({
        initialDirection: "down",
        thresholdPixels: 10,
    });

    useEffect(() => {
        if (scrollDirection === "down") {
            animejs({
                targets: ".footer",
                translateY: "-100%",
                easing: "easeInOutSine",
                duration: 1000,
            });

        } else {
            animejs({
                targets: ".footer",
                translateY: "0%",
                easing: "easeInOutSine",
                duration: 1000,
            });
        }
    }, [scrollDirection]);
    return (
        <footer className="footer">
            <Image src={'/logo.png'} width={70} height={70} alt="hooman hajarian" />
        </footer>)
};