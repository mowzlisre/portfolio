import profile from "@/assets/profile.png";
import data from "@/data";
import { Avatar, Box, Button, Divider, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import GlowCard from "../../components/GlowCard";

function ProfileCard(){
    const borderColor = useColorModeValue("rgba(108, 108, 108, 0.3)", "rgba(153, 153, 153, 0.5)");
    return (
        <GlowCard _group>
            <Box p={5}>
                <Flex>
                    <Avatar mx={'auto'} name='Dan Abrahmov' size={"2xl"} src={profile} />
                </Flex>
                <Divider
                    my={3}
                    borderColor={borderColor}
                />
                <Flex justifyContent={"center"}>
                    <Button variant={'ghost'} as={"a"} size={"sm"} href={`tel:${data.main.profile.phone}`} target="_blank" colorScheme="gray"><IoCall /></Button>
                    <Button variant={'ghost'} as={"a"} size={"sm"} href={`mailto:${data.main.profile.mail}`} target="_blank" colorScheme="gray"><MdAlternateEmail /></Button>
                    <Button variant={'ghost'} as={"a"} size={"sm"} href={`${data.main.profile.linkedin}`} target="_blank" colorScheme="gray"><FaLinkedinIn /></Button>
                    <Button variant={'ghost'} as={"a"} size={"sm"} href={`${data.main.profile.github}`} target="_blank" colorScheme="gray"><LuGithub /></Button>
                </Flex>
            </Box>
        </GlowCard>
    )
}

export default ProfileCard