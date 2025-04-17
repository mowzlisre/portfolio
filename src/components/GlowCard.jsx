import { Card, useColorModeValue } from "@chakra-ui/react";
import { glowAnimation } from "../helper";

function GlowCard({ children, index = 0 }) {
    // Define color variants
    const lightModeColors = ["gray.200", "gray.300", "gray.400", "gray.500"];
    const darkModeColors = ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.4)"];

    // Select color based on index
    const bgColor = useColorModeValue(
        lightModeColors[index % lightModeColors.length],
        darkModeColors[index % darkModeColors.length]
    );

    const boxShadowColor = useColorModeValue(
        "0px 0px 10px rgba(0, 0, 0, 0.1)",
        "0px 0px 10px rgba(255, 255, 255, 0.1)"
    );

    return (
        <Card
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            bg={bgColor}
            transition="all 0.3s ease-in-out"
            sx={{
                breakInside: "avoid",
                boxShadow: boxShadowColor,
                width: "100%",
                _hover: {
                    animation: `${glowAnimation} 2s ease-in-out infinite`,
                    transform: "scale(1.01)",
                    boxShadow: "0 0 20px rgba(0, 128, 255, 0.6), 0 0 20px rgba(255, 0, 128, 0.4)",
                },
            }}
        >
            {children}
        </Card>
    );
}

export default GlowCard;
