import data from "@/data";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import GlowCard from "../../components/GlowCard";
import { fontSize } from "../../helper";
function About() {
    return (
        <GlowCard _group>
            <Box p={5}>
                <Flex direction={'column'} gap={2} px={{base: 2, lg:2}}>
                    <Text fontSize={"4xl"} textAlign={'left'}>{data.main.about.card.main}</Text>
                    <Text fontSize={fontSize} textAlign={"justify"}>
                        {data.main.about.card.desc}
                    </Text>
                    <Button mt={2}>More</Button>
                </Flex>
            </Box>
        </GlowCard>
    )
}

export default About