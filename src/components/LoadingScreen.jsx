import loadingGif from "@/assets/loading-memoji.mp4";
import { Box } from "@chakra-ui/react";
import React from "react";
const LoadingScreen = ({ videoSrc }) => {
    return (
        <Box
            height="100vh"
            width="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="white"
            overflow="hidden"
        >
            <video autoPlay onContextMenu={(e) => e.preventDefault()} loop muted playsInline style={{ height: "25%", objectFit: "cover" }}>
                <source src={loadingGif} type="video/mp4" />
                Loading
            </video>
            
        </Box>
    );
};

export default LoadingScreen;
