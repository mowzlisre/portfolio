import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { 
    SiPython, SiJavascript, SiCplusplus, SiMysql, SiMongodb, SiPostgresql, 
    SiReact, SiDjango, SiNodedotjs, SiFlask, SiFastapi, SiNeo4J,
    SiPytorch, SiTensorflow, SiGit, SiDocker, SiTableau, SiApachespark, SiApache,
    SiCss3, SiHtml5, SiChakraui, SiBootstrap, SiSass
} from "react-icons/si";

const marqueeAnimation = (speed) => ({
    animate: { x: ["100%", "-100%"] },
    transition: { repeat: Infinity, duration: speed, ease: "linear" },
});

const Marquee = () => {
    const isSmallScreen = useBreakpointValue({ base: true, md: false });

    // Important Skills - Faster Marquee
    const importantSkills = [
        { icon: SiPython, label: "Python" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: SiCplusplus, label: "C++" },
        { icon: SiMysql, label: "SQL" },
        { icon: SiReact, label: "React.js" },
        { icon: SiDjango, label: "Django" },
        { icon: SiNodedotjs, label: "Node.js" },
        { icon: SiFlask, label: "Flask" },
        { icon: SiFastapi, label: "FastAPI" }
    ];

    // Additional Skills - Slower Marquee
    const additionalSkills = [
        { icon: SiMongodb, label: "MongoDB" },
        { icon: SiPostgresql, label: "PostgreSQL" },
        { icon: SiNeo4J, label: "Neo4j" },
        { icon: SiPytorch, label: "PyTorch" },
        { icon: SiTensorflow, label: "TensorFlow" },
        { icon: SiApachespark, label: "PySpark" },
        { icon: SiGit, label: "Git" },
        { icon: SiDocker, label: "Docker" },
        { icon: SiTableau, label: "Tableau" },
        { icon: SiApache, label: "Apache" },
        { icon: SiHtml5, label: "HTML5" },
        { icon: SiCss3, label: "CSS3" },
        { icon: SiChakraui, label: "Chakra UI" },
        { icon: SiBootstrap, label: "Bootstrap" },
        { icon: SiSass, label: "Sass" }
    ];

    return (
        <Flex direction="column" w="100%" bg="gray.700" p={4} gap={2}>
            {/* Faster Marquee for Important Skills */}
            <Flex w="100%" overflow="hidden" position="relative">
                <motion.div
                    style={{ display: "flex", whiteSpace: "nowrap", gap: "10px" }}
                    {...(isSmallScreen ? marqueeAnimation(5) : {})}
                >
                    {importantSkills.map((skill, idx) => (
                        <IconButton
                            key={idx}
                            aria-label={skill.label}
                            icon={<skill.icon size={28} />}
                            borderRadius="full"
                            variant="ghost"
                            colorScheme="blue"
                        />
                    ))}
                </motion.div>
            </Flex>

            {/* Slower Marquee for Additional Skills */}
            <Flex w="100%" overflow="hidden" position="relative">
                <motion.div
                    style={{ display: "flex", whiteSpace: "nowrap", gap: "10px" }}
                    {...(isSmallScreen ? marqueeAnimation(10) : {})}
                >
                    {additionalSkills.map((skill, idx) => (
                        <IconButton
                            key={idx}
                            aria-label={skill.label}
                            icon={<skill.icon size={28} />}
                            borderRadius="full"
                            variant="ghost"
                            colorScheme="teal"
                        />
                    ))}
                </motion.div>
            </Flex>
        </Flex>
    );
};

export default Marquee;
