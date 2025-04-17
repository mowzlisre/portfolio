import { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const cards = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Card ${i + 1}`,
    description: `This is card number ${i + 1}`
}));

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(1); // Start from index 1

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));

    return (
        <Flex align="center" justify="center" w="100%" py={10}>
            <Flex w={{ base: "95%", md: "80%" }} position="relative" overflow="hidden" justify="center" align="center">
                <IconButton aria-label="Previous Slide" icon={<MdOutlineChevronLeft />} position="absolute" left={2} top="50%" transform="translateY(-50%)" zIndex={2} size="lg" onClick={prevSlide} bg="gray.200" _hover={{ bg: "gray.300" }} />

                {/* Carousel Wrapper */}
                <Flex width="100%" justify="center" alignItems="center" gap={5}>
                    {cards.map((card, index) => {
                        let position = (index - currentIndex + cards.length) % cards.length;

                        let scale = position === 1 ? 1.2 : 0.9; // Middle card is larger
                        let opacity = position === 1 ? 1 : 0.5; // Side cards are faded
                        let zIndex = position === 1 ? 2 : 1; // Middle card stays on top
                        let transform = position === 1 ? "scale(1.2)" : "scale(0.9)";

                        return (
                            <Box key={card.id} transition="all 0.5s ease-in-out" transform={transform} opacity={opacity} zIndex={zIndex} width={position === 1 ? "60%" : "80%"} maxW="300px" p={5} bg="teal.200" borderRadius="lg" textAlign="center">
                                <Text fontSize="xl" fontWeight="bold">{card.title}</Text>
                                <Text fontSize="sm">{card.description}</Text>
                            </Box>
                        );
                    })}
                </Flex>

                <IconButton aria-label="Next Slide" icon={<MdOutlineChevronRight />} position="absolute" right={2} top="50%" transform="translateY(-50%)" zIndex={2} size="lg" onClick={nextSlide} bg="gray.200" _hover={{ bg: "gray.300" }} />
            </Flex>
        </Flex>
    );
}

export default Carousel;
