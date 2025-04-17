import "@/App.css";
import data from "@/data";
import { Box, Button, Flex, useBreakpointValue, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import Journey from "./Journey";
import Misc from "./Misc";
import { GoHome } from "react-icons/go";
import { CiGrid42 } from "react-icons/ci";
import { SiOpensourceinitiative } from "react-icons/si";
import { GiFeather } from "react-icons/gi";

const categories = [
    { label: "Home", icon: <GoHome fontSize={20} />, filter: "home" },
    { label: "Projects", icon: <CiGrid42 fontSize={20} />, filter: "project" },
    { label: "Open Source", icon: <SiOpensourceinitiative fontSize={18} />, filter: "open" },
    { label: "Art", icon: <GiFeather fontSize={18} />, filter: "art" }
];

const MasonryLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState("home");

    const isMobile = useBreakpointValue({ base: true, md: false });
    const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 3, "2xl": 4 });

    // Ensure Journey & Misc only appear when "home" is selected
    const baseItems = selectedCategory === "home"
        ? [
            { element: <Journey />, mobileOrder: 1, desktopOrder: 1 },
            { element: <Misc />, mobileOrder: 2, desktopOrder: 2 }
        ]
        : [];

    // Filter projects based on category
    const filteredProjects = Object.entries(data.projects)
        .filter(([key, project]) => project.pages.includes(selectedCategory))
        .map(([key, project]) => ({
            element: <ProjectCard key={key} data={project} />,
            mobileOrder: project.mobileOrder,
            desktopOrder: project.desktopOrder
        }));

    const sortedItems = [...baseItems, ...filteredProjects].sort((a, b) =>
        isMobile ? a.mobileOrder - b.mobileOrder : a.desktopOrder - b.desktopOrder
    );

    // Distribute items into columns
    const columns = Array.from({ length: columnCount }, () => []);
    sortedItems.forEach((item, index) => {
        columns[index % columnCount].push(item);
    });

    return (
        <Flex direction="column" gap={{ base: 3, xl: 5 }}>
            {/* Category Filter Buttons */}
            <Flex mx="auto" gap={3}>
                {categories.map((category) => (
                    <Button 
                        key={category.filter} 
                        variant={selectedCategory === category.filter ? "solid" : "ghost"} 
                        onClick={() => setSelectedCategory(category.filter)}
                    >
                        {category.icon}
                    </Button>
                ))}
            </Flex>

            {/* Masonry Layout */}
            <Box display="flex" gap="16px" px={{ base: 3, lg: 10, xl: 10, "2xl": "10%" }} py={{ base: 3, lg: 5 }}>
                {columns.map((column, colIndex) => (
                    <VStack key={colIndex} align="stretch" spacing="16px" flex="1">
                        {column.map((item, itemIndex) => (
                            <Box key={itemIndex} className="fade-in-bottom"
                                sx={{
                                    animationDelay: `${(colIndex + itemIndex) * 0.1}s`,
                                }}
                            >
                                {item.element}
                            </Box>
                        ))}
                    </VStack>
                ))}
            </Box>
        </Flex>
    );
};

export default MasonryLayout;
