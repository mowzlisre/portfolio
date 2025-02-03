import data from "@/data";
import { Box, Flex, Text, VStack, Circle, Button } from "@chakra-ui/react";
import GlowCard from "../../components/GlowCard";

function Journey() {
    return (
        <GlowCard _group>
            <Box p={5}>
                <Text fontWeight={"bold"}>My Journey</Text>
                <Flex mt={3} position="relative">
                    <Box
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="5px"
                        width="2px"
                        bg="blue.300"
                        zIndex="0"
                    />
                
                    <VStack align="start" spacing={4}>
                        {data.main.journey.timeline.map((item, index) => (
                            <Flex key={index} align="center" width={"auto"} position="relative">
                                <Circle
                                    size="12px"
                                    bg="blue.500"
                                    zIndex="1"
                                    position="relative"
                                />
                                <Button role="button" gap={1} alignItems={"left"} whiteSpace="normal" flexDirection={"column"} width={"auto"} py={10} ml={2}>
                                    <Text fontWeight="bold" fontSize={10} color="blue.500">
                                        {item.year}
                                    </Text>
                                    <Text fontSize="xs" fontWeight="semibold">
                                        {item.title}
                                    </Text>
                                    <Text fontSize={10} color="gray.500">
                                        {item.desc}
                                    </Text>
                                </Button>
                            </Flex>
                        ))}
                    </VStack>
                </Flex>
            </Box>
        </GlowCard>
    );
}

export default Journey;
