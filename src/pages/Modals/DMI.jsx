import { Box, Code, Text } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

function DMI() {
    return (
        <>
            <Text fontSize={'4xl'} fontWeight={'bold'}>Django Model Inspector</Text>
            <Text fontStyle={"italic"}>~ Mowzli Sre Mohan Dass</Text>

            <Text>
                <b>Django Model Inspector</b> is a powerful utility designed to <b>inspect and expose metadata</b> about Django models in a structured format. It provides an easy and configurable way to retrieve <b>schema information</b> for models across Django applications, making database introspection seamless.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>The Challenge</Text>
            <Text>
                In Django applications, retrieving schema metadata requires manually exploring models and their fields, which can be cumbersome, especially for large applications. Common challenges include:
            </Text>
            <Box pl={3}>
                <li>Understanding <b>model structures</b> without diving into database queries.</li>
                <li>Mapping <b>relationships</b> between models programmatically.</li>
                <li>Providing <b>API-based schema exposure</b> for frontend applications.</li>
                <li>Filtering out unnecessary fields from schema exports.</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>The Solution: Django Model Inspector</Text>
            <Text>
                <b>Django Model Inspector</b> simplifies database schema retrieval by <b>automatically extracting metadata</b> from Django models and presenting them in an easily accessible format.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Installation</Text>
            <Text>Install Django Model Inspector via pip:</Text>
            <SyntaxHighlighter language="bash" style={dracula}>
                {`pip install django-model-inspector`}
            </SyntaxHighlighter>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Configuration</Text>
            <Text>
                In your Django <Code>settings.py</Code>, configure optional settings prefixed with <Code>DMI_</Code> to customize schema collection:
            </Text>
            <Box pl={3}>
                <li><Code>DMI_INCLUDE_PRIVATE_FIELDS</Code>: Include private fields in schema output (<Code>True</Code> / <Code>False</Code>).</li>
                <li><Code>DMI_INCLUDE_METHODS</Code>: Include model methods in the schema (<Code>True</Code> / <Code>False</Code>).</li>
                <li><Code>DMI_EXCLUDE_FIELDS</Code>: List of field names to exclude from output.</li>
                <li><Code>DMI_APP_LABELS</Code>: Specify app labels to include in schema output.</li>
                <li><Code>DMI_USER_DEFINED_ONLY</Code>: Exclude built-in Django apps from output (<Code>True</Code> / <Code>False</Code>).</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Usage</Text>
            <Text>
                To retrieve schema metadata programmatically, initialize the <Code>DjangoSchemaInspector</Code>:
            </Text>
            <SyntaxHighlighter language="python" style={dracula}>
                {`from dmi.inspector import DjangoSchemaInspector

# Initialize the inspector
inspector = DjangoSchemaInspector()

# Collect schema information
schema = inspector.collect_schema()
print(schema)`}
            </SyntaxHighlighter>

            <Text>
                You can also expose the schema as a REST API endpoint:
            </Text>
            <SyntaxHighlighter language="python" style={dracula}>
                {`# urls.py
from django.urls import path
from dmi.views import SchemaView

urlpatterns = [
    path('api/schema/', SchemaView.as_view(), name='schema-view'),
]`}
            </SyntaxHighlighter>

            <Text>
                Accessing <Code>/api/schema/</Code> will return the database schema as JSON.
            </Text>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Example JSON Output</Text>
            <SyntaxHighlighter language="json" style={dracula} wrapLongLines>
                {`{
  "myapp": {
    "MyModel": {
      "id": {"type": "AutoField", "null": false, "blank": false},
      "name": {"type": "CharField", "null": false, "blank": false, "max_length": 255},
      "created_at": {"type": "DateTimeField", "null": true, "blank": true},
      "related_model": {
        "type": "ForeignKey",
        "related_model": {"app": "related_app", "model": "RelatedModel"},
        "on_delete": "CASCADE"
      }
    }
  }
}`}
            </SyntaxHighlighter>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Technology Stack</Text>
            <Box pl={3}>
                <li><b>Backend:</b> Django (Python-based web framework).</li>
                <li><b>Schema Extraction:</b> Django ORM (for model introspection).</li>
                <li><b>REST API:</b> Django Views (to expose schema in JSON format).</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Why Use Django Model Inspector?</Text>
            <Box pl={3}>
                <li><b>Automated Schema Collection:</b> No need for manual model introspection.</li>
                <li><b>API-Ready Output:</b> JSON format for easy integration with frontend applications.</li>
                <li><b>Custom Filtering:</b> Exclude unnecessary fields or apps.</li>
                <li><b>Lightweight & Fast:</b> Minimal overhead for performance.</li>
            </Box>

            <Text fontWeight={'bold'} fontSize={'2xl'}>Conclusion</Text>
            <Text>
                Django Model Inspector makes <b>database introspection effortless</b>. Whether you need a <b>quick overview</b> of your models or want to <b>expose schema data</b> via an API, this tool simplifies the process, making Django development more efficient.
            </Text>
        </>
    );
}

export default DMI;
