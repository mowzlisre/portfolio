import React, { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";
import Navbar from "../../components/Navbar";
import MasonryLayout from "./MasonryLayout";
import LandingComp from "./LandingComp";
import Carousel from "./Carousel";
import Marquee from "../../components/Marquee";
export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Adjust duration as needed to 3500

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />; 
    }

    return (
        <>
            <Navbar />
            <LandingComp/>
            <Marquee/>
            <MasonryLayout/>
        </>
    );
};

export default Home;
