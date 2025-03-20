import { Box, Button, Divider, Flex, Grid, GridItem, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import profile from "@/assets/profile.png";
import "@/App.css"
import data from "@/data";
import { IoCall } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

function LandingComp() {
    const borderColor = useColorModeValue("rgba(108, 108, 108, 0.3)", "rgba(153, 153, 153, 0.5)");
    
    const [displayText, setDisplayText] = useState("");
    const textArray = [
        "am a Data Scientist",
        "am a Software Developer",
        "am a Data Analyst",
        "am a Prompt Engineer",
        "develop tools that impact",
        "am a poet!",
        "am a story writer!",
        "love photography!"
    ];
    
    useEffect(() => {
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        function type() {
            const currentText = textArray[index];
            if (isDeleting) {
                setDisplayText(currentText.substring(0, charIndex--));
            } else {
                setDisplayText(currentText.substring(0, charIndex++));
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                isDeleting = true;
                timeout = setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textArray.length;
                timeout = setTimeout(type, 500);
            } else {
                timeout = setTimeout(type, isDeleting ? 50 : 100);
            }
        }

        timeout = setTimeout(type, 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <Flex height={{ base: "80vh", md: "70vh", xl: "60vh" }} justifyContent="center" alignItems="center" p={4}>
            <Grid p={{ base: 0, md: 10, xl: 20 }} gap={10} templateColumns={{ base: "1fr", md: "6fr 3fr" }} width="100%" maxW="1600px">
                <GridItem order={{ base: 1, md: 2 }} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
                    <Image width={{ base: "300px", md: "auto" }} src={profile} />
                    
                </GridItem>
                <GridItem px={{ base: 10 }} order={{ base: 2, md: 1 }} display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
                    <Box mb={5}>
                        <Text textAlign={{ base: "center", md: "left" }}  fontSize="4xl" fontWeight="bold">
                            Hi, I'm Mowzli!
                        </Text>
                        <Text textAlign={{ base: "center", md: "left" }} fontSize="md">
                            I <span style={{ fontWeight: "bold", color: "teal" }}>{displayText}</span> <span className="cursor">|</span>
                        </Text>
                    </Box>
                    
                    <Divider
                        my={3}
                        borderColor={borderColor}
                    />
                    <Flex justifyContent={"center"}>
                        <Button variant={'ghost'} as={"a"} href={`tel:${data.main.profile.phone}`} target="_blank" colorScheme="gray"><IoCall /></Button>
                        <Button variant={'ghost'} as={"a"} href={`mailto:${data.main.profile.mail}`} target="_blank" colorScheme="gray"><MdAlternateEmail /></Button>
                        <Button variant={'ghost'} as={"a"} href={`${data.main.profile.linkedin}`} target="_blank" colorScheme="gray"><FaLinkedinIn /></Button>
                        <Button variant={'ghost'} as={"a"} href={`${data.main.profile.github}`} target="_blank" colorScheme="gray"><LuGithub /></Button>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default LandingComp;
