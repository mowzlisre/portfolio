import GlowCard from "@/components/GlowCard";
import { getTagColorScheme } from "@/helper";
import { Avatar, Box, Button, Center, Divider, Flex, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Tag, TagLabel, Text, useDisclosure} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import T2s from "../pages/Modals/T2s";
import { IoLogoGithub } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
function ProjectCard({ data }) {
    const [imageSrc, setImageSrc] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (data.src) {
            setImageSrc(`/assets/${data.src}`);
        } else {
            setImageSrc("/default-image.png");
        }
    }, [data.src]);

    const comps = {
        "Text-to-SQL": <T2s/>
    }

    return (
        <>
            <GlowCard _group>
                <Image src={imageSrc} alt={data.title || "Project Image"} />
                <Flex direction={'column'} p={5} gap={2}>
                    <Text fontSize={'xs'} textAlign={"justify"}>
                        {data.desc}
                    </Text>
                    <Flex mt={2} gap={2}>
                        {data.tags.map((el, index) => (
                            <Tag whiteSpace={'nowrap'} borderRadius={"20px"} key={index}
                                fontSize={'xs'} colorScheme={getTagColorScheme(el)}>
                                {el}
                            </Tag>
                        ))}
                    </Flex>
                    {
                        data.clickable &&
                        <Flex mt={2} justifyContent={'end'}>
                            <Button size={'xs'} onClick={onOpen}>More</Button>
                        </Flex>

                    }
                </Flex>
            </GlowCard>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p={20}>
                        <Grid templateColumns={{ base: "1fr", md: "1fr 0 4fr" }} gap={5}>
                            <GridItem position={'sticky'} top="15" height="100vh" overflowY="auto">
                                <Flex direction="column" gap={4} p={3}>
                                    <Flex direction={'column'} gap={3}>
                                        <Text fontWeight={'bold'}>Contributors</Text>
                                        {   
                                            data.contributors ?
                                            data.contributors.map((item, index) => (
                                                <Tag key={index} size='lg' borderRadius='full'>
                                                    <Avatar
                                                        src='https://bit.ly/broken-link'
                                                        size='xs'
                                                        mr={2}
                                                    />
                                                    <TagLabel fontSize={'xs'}>{item.name}</TagLabel>
                                                </Tag>
                                            ))
                                            : <Text fontStyle={'italic'} fontSize={'xs'}>No contributors</Text>
                                        }
                                    </Flex>
                                    <Divider/>
                                    <Box>
                                        <Text fontWeight={'bold'}>Useful Links</Text>
                                        <Flex flexWrap={'wrap'} py={3} gap={2}>
                                            {
                                                data.links &&
                                                data.links.github && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.github, "_blank")}
                                                        cursor="pointer"
                                                    >
                                                        <IoLogoGithub />
                                                        <TagLabel ml={2} fontSize={'xs'}>Github</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.docs && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.docs, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="red"
                                                    >
                                                        <IoDocumentTextOutline />
                                                        <TagLabel ml={2} fontSize={'xs'}>Docs</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.ppt && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.ppt, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="orange"
                                                    >
                                                        <TbPresentationAnalytics />
                                                        <TagLabel ml={2} fontSize={'xs'}>Ppt</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                        </Flex>

                                    </Box>
                                </Flex>
                            </GridItem>

                            <GridItem display={{ base: "none", md: "block" }}>
                                <Center height="100%">
                                    <Divider orientation="vertical" />
                                </Center>
                            </GridItem>

                            <GridItem>
                                <Flex direction="column" gap={4}>
                                    {
                                        comps[data.title]
                                    }
                                </Flex>
                            </GridItem>
                        </Grid>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProjectCard;