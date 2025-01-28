import GlowCard from "@/components/GlowCard";
import { getTagColorScheme } from "@/helper";
import { Button, Flex, Image, Tag, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ProjectCard({ data }) {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        // Directly load the image from the public/assets folder
        if (data.src) {
            setImageSrc(`/assets/${data.src}`);
        } else {
            setImageSrc("/default-image.png"); // Fallback image
        }
    }, [data.src]);

    return (
        <GlowCard _group>
            <Image src={imageSrc} alt={data.title || "Project Image"} />
            <Flex direction={'column'} p={5} gap={2}>
                <Text fontSize={'xs'} textAlign={"justify"}>
                    {data.desc}
                </Text>
                <Flex mt={2} gap={2}>
                    {data.tags.map((el, index) => (
                        <Tag whiteSpace={'nowrap'} borderRadius={"20px"} key={index} fontSize={'xs'} colorScheme={getTagColorScheme(el)}>
                            {el}
                        </Tag>
                    ))}
                </Flex>
                <Flex mt={2} justifyContent={'end'}>
                    <Button size={'xs'}>More</Button>
                </Flex>
            </Flex>
        </GlowCard>
    );
}

export default ProjectCard;
