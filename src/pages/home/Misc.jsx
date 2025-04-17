import data from "@/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import GlowCard from "../../components/GlowCard";
import { fontSize } from "../../helper";
function Misc() {
    return (
        <GlowCard _group>
            <Box p={5}>
                <Flex direction={'column'} gap={2}>
                    <Text fontWeight={"bold"} fontSize={"2xl"}>Know about me</Text>
                    <Text fontSize={fontSize} textAlign={"justify"}>
                        {data.main.misc.desc}
                    </Text>
                </Flex>
            </Box>
        </GlowCard>
    )
}

export default Misc