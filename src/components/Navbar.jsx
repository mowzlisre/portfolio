import data from "@/data";
import { Box, Flex, IconButton, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { glowAnimation } from "../helper";
function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.200", "rgba(0, 0, 0, 0.1)");

    return (
        <Flex width={"100%"} justifyContent="space-between"
            px={{ base: 5, lg: 20 }}
            py={3}
            bg={bgColor}
            backdropFilter="blur(10px)"
            animation={`${glowAnimation} 6s ease-in-out infinite`}
            alignItems="center"
        >
            <Box>
                <Text className="tracking-in-contract-bck"  letterSpacing={3}>
                    {data.name}
                </Text>
            </Box>

            <IconButton
                aria-label="Toggle Dark Mode"
                icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
                isRound={true}
            />
        </Flex>
    );
}

export default Navbar;
