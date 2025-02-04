import "@/App.css";
import data from "@/data";
import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";
import About from "./About";
import Misc from "./Misc";
import ProfileCard from "./ProfileCard";
import Journey from "./Journey";

const MasonryLayout = () => {
    const items = [
    { element: <ProfileCard />, mobileOrder: data.main.profile.mobileOrder, desktopOrder: data.main.profile.desktopOrder },
    { element: <About />, mobileOrder: data.main.about.mobileOrder, desktopOrder: data.main.about.desktopOrder },
    { element: <Misc />, mobileOrder: data.main.misc.mobileOrder, desktopOrder: data.main.misc.desktopOrder },
    { element: <Journey />, mobileOrder: data.main.journey.mobileOrder, desktopOrder: data.main.misc.desktopOrder },
    ...Object.entries(data.projects).map(([key, project]) => ({
        element: <ProjectCard data={project} />,
        mobileOrder: project.mobileOrder,
        desktopOrder: project.desktopOrder
    }))
];

    

    const isMobile = useBreakpointValue({ base: true, md: false });
    const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 3, "2xl": 4 });

    // Sort items based on mobile or desktop order
    const sortedItems = [...items].sort((a, b) =>
        isMobile
            ? a.mobileOrder - b.mobileOrder
            : a.desktopOrder - b.desktopOrder
    );

    // Distribute sorted items into columns
    const columns = Array.from({ length: columnCount }, () => []);

    sortedItems.forEach((item, index) => {
        columns[index % columnCount].push(item);
    });

    return (
        <Box
            display="flex"
            gap="16px"
            px={{ base: 3, lg: 10, xl: 10, "2xl": "10%"}}
            py={{ base: 3, lg: 5 }}
        >
            {columns.map((column, colIndex) => (
                <VStack
                    key={colIndex}
                    align="stretch"
                    spacing="16px"
                    flex="1"
                >
                    {column.map((item, itemIndex) => (
                        <Box
                            key={itemIndex}
                            className="fade-in-bottom"
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
    );
};

export default MasonryLayout;
