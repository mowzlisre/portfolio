import data from "@/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import GlowCard from "../../components/GlowCard";
function Misc() {
    return (
        <GlowCard _group>
            <Box p={5}>
                <Flex direction={'column'} gap={2}>
                    <Text fontSize={'xs'} textAlign={"justify"}>
                        {data.main.misc.desc}
                    </Text>
                </Flex>
            </Box>
        </GlowCard>
    )
}

export default Misc