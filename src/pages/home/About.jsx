import data from "@/data";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import GlowCard from "../../components/GlowCard";
function About() {
    return (
        <GlowCard _group>
            <Box p={5}>
                <Flex direction={'column'} gap={2} px={{base: 2, lg:2}}>
                    <Text fontSize={"3xl"} textAlign={'left'}>{data.main.about.card.main}</Text>
                    <Text fontSize={'xs'} textAlign={"justify"}>
                        {data.main.about.card.desc}
                    </Text>
                    <Button mt={2} size={'sm'}>More</Button>
                </Flex>
            </Box>
        </GlowCard>
    )
}

export default About