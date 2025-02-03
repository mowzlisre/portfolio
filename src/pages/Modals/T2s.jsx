import { Box, Code, Flex, Text } from "@chakra-ui/react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

function T2s (){
    return (
        <>
            <Text fontSize={'4xl'} fontWeight={'bold'}>Teaching a Machine to Speak SQL</Text>
            <Text>
                So, imagine you're in a world where databases speak in a cryptic language called SQL, and most people… well, they don’t. You just want to ask a simple question like, <i>“Hey, how many people bought coffee yesterday?”</i> But instead, the database stares at you blankly, waiting for some ancient spell like:
            </Text>
            <SyntaxHighlighter language="sql" style={dracula} wrapLongLines>
                SELECT COUNT(*) FROM Orders WHERE Item = 'Coffee' AND Date = 'Yesterday';
            </SyntaxHighlighter>
            <Text>Not exactly user-friendly, right? That's where our Text-to-SQL comes in!</Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Mission</Text>
            <Text>
                Setting to build a system that could understand human questions and turn them into SQL queries, so non-tech folks wouldn't have to learn the arcane ways of database magic. The idea? <b>Automate the whole process using AI models!</b>
            </Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Data Strategy: Choosing the Right Training Set</Text>
            <Text>
            Initially, we explored established datasets like Spider, KaggleDBQA, and SQL-Eval, but they posed structural challenges that didn't align with our objectives. Rather than modifying existing datasets extensively, we opted to generate a synthetic dataset using the Llama3 model. This allowed us to create 60,000 structured pairs of natural language queries and SQL commands, ensuring that the model was trained with relevant and diverse examples.
            </Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Model Selection and Pipeline Design</Text>
            <Text>
                Our solution was built around two key deep learning models:
            </Text>
            <Box pl={3}>
                <li><b>BERT (Bidirectional Encoder Representations from Transformers):</b> Used for multi-label classification, identifying relevant SQL components such as SELECT, WHERE, and GROUP BY based on user intent.</li>
                <li><b>T5 (Text-to-Text Transfer Transformer):</b> Responsible for the actual SQL query generation, translating classified input into executable database commands.</li>
            </Box>
            <Text>
                To improve accuracy, we implemented similarity mapping, aligning user inputs with database schema terminology. This ensured that even if a user phrased their query informally, the system could correctly interpret and translate it into SQL. Lets say the user tried <i>"Get all products costing more than $8000</i>. The direct translation would something be like
            </Text>
            <SyntaxHighlighter language="sql" style={dracula} wrapLongLines>
                SELECT * FROM products WHERE cost &gt; 8000
            </SyntaxHighlighter>
            <Text>
                But the shema doesn't have a attribute called <Code>cost</Code> and has only <Code>price</Code>. In situations like these a similarity mapping function is used to fuzzy match relevant terms and identify correct labels from the Schema provided. So the model will produce something like this
            </Text>
            <SyntaxHighlighter language="sql" style={dracula} wrapLongLines>
                SELECT * FROM products WHERE price &gt; 8000
            </SyntaxHighlighter>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Optimizing the Learning Process</Text>
            <Text>One of the key challenges was ensuring that the model correctly understood context and intent. During early iterations, it struggled with ambiguous queries and syntax variations. To refine performance, we:</Text>
            <Box pl={3}>
                <li>Introduced <b>schema alignment techniques</b> to standardize query formats.</li>
                <li>Enhanced <b>tokenization and preprocessing</b>, filtering irrelevant words while maintaining query structure.</li>
                <li>Focused on a <b>modular approach</b>, allowing future integration with more complex SQL operations.</li>
            </Box>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Evaluation and Results</Text>
            <Text>Model performance was assessed using standard metrics:</Text>
            <Box pl={3}>
                <li><b>BERT Classification Model:</b> Achieved <b>93.8%</b> precision in predicting SQL components.</li>
                <li><b>T5 SQL Generation Model:</b> Scored a <b>BLEU rating of 56.86</b>, indicating strong syntactic accuracy in SQL translation.</li>
            </Box>
            <Text>
                The pipeline effectively transformed natural language queries into SQL, significantly reducing the barrier for non-technical users to interact with databases.
            </Text>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Evaluation and Results</Text>
            <Text>While the system performed well, several areas remain open for improvement:</Text>
            <Box pl={3}>
                <li><b>Handling complex SQL queries:</b> Currently, the model focuses on basic SQL structures. Extending it to support JOIN, CASE, and nested queries will enhance its utility.</li>
                <li><b>Adapting to dynamic database schemas:</b> Making the system adaptable to different databases in real-time would improve scalability.</li>
                <li><b>User Interface Enhancements:</b> A more intuitive interface, potentially integrating voice-to-SQL conversion, could make it even more accessible.</li>
            </Box>
            <Text fontWeight={'bold'} fontSize={'2xl'}>Conclusion</Text>
            <Text>
                This project successfully demonstrates how advanced NLP techniques can bridge the gap between human language and structured database queries. By integrating deep learning models, similarity mapping, and schema alignment, we’ve built a foundation for a system that simplifies database interaction. Future enhancements will focus on expanding its capabilities, making database queries even more intuitive and accessible for all users.
            </Text>
        </>
    )
}

export default T2s