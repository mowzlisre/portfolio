function selfContrib(){
    return {
        "name": "Mowzli Sre Mohan Dass",
        "email": "mowzlisre.mohandass@gwu.edu"
    }
}
const data = {
    "name": "Mowzli Sre Mohan Dass",
    "main": {
        "profile": {
            "phone": "202-534-5686",
            "mail": "mowzlisre.mohandass@gwu.edu",
            "linkedin": "https://www.linkedin.com/in/mowzlisremohandass/",
            "github": "https://github.com/mowzlisre",
        },
        "journey": {
            "timeline": [
                { 
                    "year": "Aug, 2025 (Aniticipated)",
                    "title": "Graduating with Masters in Data Science",
                    "desc": "At the George Washington University" 
                },
                { 
                    "year": "Sep, 2023",
                    "title": "Starting Masters in Data Science",
                    "desc": "At the George Washington University" 
                },
                { 
                    "year": "Jul, 2021 - Jan, 2023",
                    "title": "Founder/Project Lead Developer",
                    "desc": "of Achaarya Tech Startup, Chennai" 
                },
                { 
                    "year": "Jul, 2022",
                    "title": "Graduated with Bachelor's in CSE",
                    "desc": "At Government College of Engineering, Bodi" 
                },
                { 
                    "year": "Jun, 2020 - Jun, 2021",
                    "title": "Web Developer Internship",
                    "desc": "At SkillSafari, Chennai" 
                }
            ],
            "mobileOrder": 1,
            "desktopOrder": 1,
            "pages": ['home']
        },
        "misc": {
            "desc": "This portfolio is more than just a display of my technical expertise as a Data Scientist and Developer—it's a reflection of my life, blending my passion for coding with my love for poetry, photography, and other creative pursuits. Here, you'll discover not only the projects I've built but also the stories, moments, and inspirations that shape who I am.",
            "mobileOrder": 2,
            "desktopOrder": 2,
            "pages": ['home']
        },
    },
    "projects": {
        "textsql": {
            "title": "Text-to-SQL",
            "desc": "How easy would be to directly ask your database to fetch you data, instead of SQL? Dive into my recent project on translating natural language prompts to robust SQL syntaxes, creating meaningful impacts in data retrieval.",
            "tags": ["NLP", "LLM", "Transformers", "SQL"],
            "src": "text-sql.png",
            "mobileOrder": 4,
            "desktopOrder": 4,
            "clickable": true,
            "contributors": [
                {
                    "name": "Bharath Genji Mohana Ranga",
                    "email": "bharathgenji.mohanaranga@gwu.edu",
                },
                selfContrib()        
            ],
            "links": {
                "github": "https://github.com/mowzlisre/Final-Project-Group-Text-SQL",
                "docs": "https://drive.google.com/file/d/1iIhtWgsL2KQTT9eNEoZNCAyl2tFx7Ffu/view?usp=sharing",
                "ppt": "https://drive.google.com/file/d/1kufqOTTXQUIZUrRjxq8Ao85hrp2wIl50/view?usp=sharing"
            },
            "pages": ['home', 'project']
        },
        "neoport": {
            "title": "Neoport",
            "desc": "Ever wondered how difficult is to import large csv files into Neo4j Graph Databases. Based on my experience and hard time with importing data into Neo4j, I've curated this application to ease the ETL process.",
            "tags": ["Neo4j", "Python", "Electron.js", "React.js", "Cypher"],
            "src": "neoport.png",
            "mobileOrder": 5,
            "desktopOrder": 3,
            "clickable": true,
            "contributors": [
                selfContrib()        
            ],
            "links": {
                "github": "https://github.com/mowzlisre/neoport",
                "windows": "https://github.com/mowzlisre/neopor",
                "mac": "https://github.com/mowzlisre/neopor",
                "linux": "https://github.com/mowzlisre/neopor",
                "website": "https://github.com/mowzlisre/neopor"
            },
            "pages": ['home', 'project', 'open']
        },
        "dmi": {
            "title": "Django Model Inspector",
            "desc": "Django Schema Inspector is a utility designed to inspect and expose metadata about Django models in a structured format. It provides a simple, configurable way to retrieve schema information for models across Django applications, with optional filtering by user-defined settings.",
            "tags": ["Python", "PyPi"],
            "src": "dmi.png",
            "mobileOrder": 5,
            "desktopOrder": 3,
            "clickable": true,
            "contributors": [
                selfContrib()        
            ],
            "links": {
                "github": "https://github.com/mowzlisre/django-model-inspector",
                "pypi": "https://pypi.org/project/django-model-inspector/"
            },
            "pages": ['home', 'project', 'open']
        },
        "nlpcc": {
            "title": "NLP Taxonomy Classfication",
            "desc": "Originally intended for a Cloud Computing Academic project showcasing my skills in deploying ML models in cloud. But became inspiration to do more project obtaining the same ideology in future projects as well. A simplified classification model, deployed in AWS",
            "tags": ["NLP", "AWS", "Python", "React.js"],
            "src": "nlptaxonomy.png",
            "mobileOrder": 6,
            "desktopOrder": 6,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "icm": {
            "title": "Image Classfication using CNN",
            "desc": "An academic project to perform Image Classification using the Chest X-ray dataset and predict COVID-19, Tuberculosis, Pneumonia. Though this is a common dataset and project in every data science students' portfolio, I personally gained deeper insights in image classification and CNN",
            "tags": ["Image Classification", "CNN", "Python"],
            "src": "ICM.png",
            "mobileOrder": 7,
            "desktopOrder": 7,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "pyspark": {
            "title": "Time Series Forecast using PySpark",
            "desc": "Forecasting time series data is always a complex process, but finding the right tech stack always makes it easier. Here we analysed PySpark against a synthetically generated Stock Market time series dataset",
            "tags": ["Research", "Big Data", "PySpark", "ARMA", "GCP"],
            "src": "pyspark.png",
            "mobileOrder": 8,
            "desktopOrder": 8,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "tableau": {
            "title": "Visualization using Tableau",
            "desc": "Visualising using convincing tools like Tableau and Power BI is currently easy way to explain the nature of the dataset.This project showcases my skills in Tableau, visualising the Crimes in Los Angeles, with advanced charts and dashboard",
            "tags": ["Visualization", "Tableau"],
            "src": "tableau.png",
            "mobileOrder": 9,
            "desktopOrder": 9,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "neovsmongo": {
            "title": "Neo4j vs. MongoDB - Research",
            "desc": "An inherent part of becoming a good data scientist begins from researching the new tech on market. I learnt it the hard way from my research on a comprehensive analysis in Neo4j vs. MongoDB in different areas. This research has been my inspiration to build the Neoport ETL Tool",
            "tags": ["Research", "Neo4j", "MongoDB", "Python"],
            "src": "neovsmongo.png",
            "mobileOrder": 10,
            "desktopOrder": 10,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "fooddesert": {
            "title": "EDA on Food Desert Dataset",
            "desc": "Beginning of my academic journey in Data Science, this project was my first exploratory data analysis. Utilizing R Programming, an EDA was performed to identified the underlying truth behind the dataset.",
            "tags": ["EDA", "R Programming"],
            "src": "fooddesert.png",
            "mobileOrder": 11,
            "desktopOrder": 11,
            "clickable": true,
            "pages": ['home', 'project']
        },
        "nyctaxi": {
            "title": "New York Taxi Trip Analysis",
            "desc": "One of the initial data science project I crafted to predict the fares for Taxi in New York using Linear Regression, XGBoost and Time Series analysis. Multiple feature engineering technics were involved providing a clean dataset for modeling.",
            "tags": ["Python", "Linear Regression", "XGBoost"],
            "src": "nyctaxi.png",
            "mobileOrder": 11,
            "desktopOrder": 11,
            "clickable": true,
            "pages": ['home', 'project']
        },
    }
};


export default data;
