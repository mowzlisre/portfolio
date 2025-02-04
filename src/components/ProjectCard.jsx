import GlowCard from "@/components/GlowCard";
import { getTagColorScheme } from "@/helper";
import { Avatar, Box, Button, Center, Divider, Flex, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Tag, TagLabel, Text, useDisclosure} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import T2s from "../pages/Modals/T2s";
import { IoLogoGithub, IoLogoWindows } from "react-icons/io";
import { IoDocumentTextOutline, IoEarth, IoLogoApple } from "react-icons/io5";
import { TbPresentationAnalytics } from "react-icons/tb";
import { fontSize } from "../helper";
import NeoPort from "../pages/Modals/Neoport";
import { FcLinux } from "react-icons/fc";
import DMI from "../pages/Modals/DMI";
import { SiPypi } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
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
        "Text-to-SQL": <T2s/>,
        "Neoport": <NeoPort/>,
        "Django Model Inspector": <DMI/>,
    }

    return (
        <>
            <GlowCard _group>
                <Image src={imageSrc} alt={data.title || "Project Image"} />
                <Flex direction={'column'} p={5} gap={2}>
                    <Text fontSize={fontSize} textAlign={"justify"}>
                        {data.desc}
                    </Text>
                    <Flex mt={2} gap={2} flexWrap={"wrap"}>
                        {data.tags.map((el, index) => (
                            <Tag px={{base: "3", xl: "4"}} py={{base: "2", xl: "2"}} whiteSpace={'nowrap'} borderRadius={"20px"} key={index}
                                fontSize={{base: "xs", xl: "sm"}} colorScheme={getTagColorScheme(el)}>
                                {el}
                            </Tag>
                        ))}
                    </Flex>
                    {
                        data.clickable &&
                        <Flex mt={2} justifyContent={'end'}>
                            <Button size={fontSize} onClick={onOpen}>More</Button>
                        </Flex>

                    }
                </Flex>
            </GlowCard>

            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody p={20} px={{xl: "20%"}}>
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
                                                data.links.pypi && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.pypi, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="yellow"
                                                    >
                                                        <AiOutlinePython />
                                                        <TagLabel ml={2} fontSize={'xs'}>PyPI</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.website && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.website, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="purple"
                                                    >
                                                        <IoEarth />
                                                        <TagLabel ml={2} fontSize={'xs'}>Website</TagLabel>
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
                                                        <TagLabel ml={2} fontSize={'xs'}>PPT</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.windows && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.windows, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="black"
                                                    >
                                                        <IoLogoWindows />
                                                        <TagLabel ml={2} fontSize={'xs'}>Windows</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.mac && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.mac, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="black"
                                                    >
                                                        <IoLogoApple />
                                                        <TagLabel ml={2} fontSize={'xs'}>MacOS</TagLabel>
                                                    </Tag>
                                                )
                                            }
                                            {
                                                data.links &&
                                                data.links.linux && (
                                                    <Tag 
                                                        size='lg' 
                                                        borderRadius='full' 
                                                        onClick={() => window.open(data.links.linux, "_blank")}
                                                        cursor="pointer"
                                                        colorScheme="black"
                                                    >
                                                        <FcLinux />
                                                        <TagLabel ml={2} fontSize={'xs'}>Linux</TagLabel>
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