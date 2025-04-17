import { Box, Code, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function NeoPort() {
    return (
        <>
            <Text fontSize={'4xl'} fontWeight={'bold'}>NeoPort: Simplifying Bulk Data Import for Neo4j</Text>
            <Text fontStyle={"italic"}>~ Mowzli Sre Mohan Dass</Text>

            <Text>
                <b>Neo4j</b> is a powerful <b>graph database</b> that helps visualize and analyze relationships between data points. However, one of the biggest challenges for users is <b>importing large structured data from CSV files into Neo4j</b>. Traditional methods require <b>complex Cypher queries</b>, <b>data cleaning</b>, and <b>schema mapping</b>, making the process time-consuming and error-prone. <u>Know More about NeoPort in official docs website</u>
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>The Challenge: Importing Large CSV Files into Neo4j</Text>
            <Text>
                Manually uploading a CSV file into Neo4j involves multiple steps:
            </Text>
            <Box pl={3}>
                <li>Formatting the CSV correctly (headers, relationships, and constraints).</li>
                <li>Writing complex <b>Cypher queries</b> to create nodes and relationships.</li>
                <li>Handling <b>data inconsistencies</b>, missing values, and type mismatches.</li>
                <li>Manually mapping CSV fields to the correct Neo4j schema.</li>
                <li>Importing <b>large datasets</b> efficiently without performance issues.</li>
            </Box>
            <Text>
                For example, if we have a CSV of employees and their relationships, we need to manually write:
            </Text>
            <SyntaxHighlighter language="cypher" style={dracula}>
                {`LOAD CSV WITH HEADERS FROM 'file:///employees.csv' AS row
MERGE (e:Employee {id: row.id})
SET e.name = row.name, e.department = row.department
MERGE (m:Employee {id: row.manager_id})
MERGE (e)-[:REPORTS_TO]->(m);`}
            </SyntaxHighlighter>
            <Text>
                This process can be frustrating, especially for users who are not familiar with <b>Cypher or graph databases</b>. Also, <Code>LOAD CSV</Code> acts pretty weird in handling large files due to memory allocations. Though Neo4j officially supports importing large csv data through its neo4j CLI, preprocessing the data ends in vain most of the time.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>The Solution: NeoPort</Text>
            <Text>
                <b>NeoPort</b> is an ETL tool designed to <b>automate the bulk CSV-to-Neo4j import process</b>. Instead of manually writing queries, users can simply <b>upload a CSV file</b>, map fields, and let the system handle the import process—regardless of file size.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>How NeoPort Works</Text>
            <Text>
                NeoPort takes a CSV file, understands the structure, and <b>automatically generates optimized Cypher queries</b> to import the data. A typical workflow includes:
            </Text>
            <Box pl={3}>
                <li>Uploading a CSV file.</li>
                <li>Allowing users to map their <b>nodes and relationships</b>.</li>
                <li>Generating <b>optimized Cypher queries</b>.</li>
                <li>Executing the import process with <b>real-time feedback</b>.</li>
                <li>Efficiently processing <b>large CSV files without memory issues</b>.</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Example: Importing Large Employee Datasets</Text>
            <Text>
                Let's say we upload the following <b>employees.csv</b>:
            </Text>
            <SyntaxHighlighter language="plaintext" style={dracula} wrapLongLines>
                {`id,name,department,manager_id
1,Alice,Engineering,2
2,Bob,Engineering,3
3,Charlie,Management,`}
            </SyntaxHighlighter>
            <Text>
                <b>NeoPort automatically generates and runs the required Cypher queries</b>:
            </Text>
            <SyntaxHighlighter language="cypher" style={dracula} wrapLongLines>
                {`MERGE (e1:Employee {id: 1}) SET e1.name = 'Alice', e1.department = 'Engineering'
MERGE (e2:Employee {id: 2}) SET e2.name = 'Bob', e2.department = 'Engineering'
MERGE (e3:Employee {id: 3}) SET e3.name = 'Charlie', e3.department = 'Management'
MERGE (e1)-[:REPORTS_TO]->(e2)
MERGE (e2)-[:REPORTS_TO]->(e3);`}
            </SyntaxHighlighter>

            <Text>
                With NeoPort, <b>users no longer need to write these queries manually</b>—the tool <b>automates the entire process</b>, even for datasets containing <b>millions of records</b>.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Technology Stack</Text>
            <Text>
                NeoPort is built with a <b>modern technology stack</b> to ensure a smooth and efficient workflow:
            </Text>
            <Box pl={3}>
                <li><b>Frontend:</b> React (Chakra UI for a clean, intuitive interface).</li>
                <li><b>Backend:</b> Python (handling ETL processing and database operations).</li>
                <li><b>Database:</b> Neo4j (Graph Database for structured relationships).</li>
                <li><b>Desktop App:</b> Electron (cross-platform support for Windows, macOS, Linux).</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Why NeoPort?</Text>
            <Box pl={3}>
                <li><b>Automated Imports:</b> No need to write Cypher queries manually.</li>
                <li><b>Schema Mapping:</b> Intelligently maps CSV fields to Neo4j properties.</li>
                <li><b>Error Handling:</b> Detects missing values and suggests corrections.</li>
                <li><b>Handles Large Datasets:</b> Optimized for importing massive CSV files efficiently.</li>
                <li><b>User-Friendly:</b> A simple UI that makes <b>Neo4j accessible to all users</b>.</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Conclusion</Text>
            <Text>
                <b>NeoPort bridges the gap between CSV files and Neo4j</b>, making <b>bulk data imports effortless</b>. By automating <b>schema mapping, query generation, and execution</b>, it empowers users to focus on <b>analyzing relationships rather than fixing data imports</b>. Whether you're working with <b>small datasets or large enterprise-level files</b>, NeoPort ensures a seamless, efficient workflow.
            </Text>
        </>
    );
}

export default NeoPort;
