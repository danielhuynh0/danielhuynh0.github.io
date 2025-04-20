import React from "react";
import { motion } from "framer-motion";

const Projects = React.forwardRef((props, ref) => {
    const projects = [
        {
            title: 'Budget Buddy',
            images: ['BudgetBuddyLogo.png'],
            description: "Winner of Capital One's Best Finance Hack at UVa HooHacks 2023, Budget Buddy is a personal finance budgeting app. Our app allows users to create an account or login to an existing account with their saved budgeting plans. If it is their first time creating an account, we allow the user to make their own budgeting plan, either by manually allocating a budget to each “bucket” or category of planning, or instead specifying a total budget to allocate, of which our algorithm will automatically allocate to each category based on the recommendations of financial experts for the user. After submitting the budgeting plan, the user can connect their back account to our app through the Plaid API interface. This provides our app access to the user’s previous transaction history, and can build and update the budgeting plan as time goes by and the user makes progress on spending. When the user has connected their bank account, they will be able to see a dashboard with plots that will summarize and display their spending data from the current month. However, the user will not have to log online to manage their finances– through Twilio, the user can also have SMS text messaging conversations with our app’s personal chatbot. The user can ask our chatbot for help when facing a financial decision, and our chatbot will use previous transactional data as well as the user’s current progress on their budgeting plan to help recommend a decision to be made. In addition, the user can ask clarifying questions to help better understand their current budgeting progress, and learn and practice how to improve for the future. Learning personal budgeting is a major step at financial literacy.",
            tools: "We built the frontend using HTML/CSS/JavaScript and used Plotly to generate the plots from the spending data, the backend web server was created using Flask, SMS messaging was handled by Twilio API, user’s transactions were retrieved using the Plaid API, and the GPT API was used to generate the user spending improvements and suggestions chatbot.",
            link: "https://devpost.com/software/budgetbuddy-wz0mh2",
        },
        {
          title: 'HealthWay',
          images: ['healthway.png'],
          description: "HealthWay is a versatile kitchen tool and lifestyle app designed to help users manage their food inventory in real time, offering timely updates. We plan to integrate the platform with a real-time sensor/camera, placed into a refrigerator, such that it can automatically track user inventory. Our app starts by allowing the user to take a photo of their fridge, or record a video of the user placing items into the fridge, from which it recognizes the items in the frame, and generates a list of ingredients currently in stock. As items are added or removed, HealthWay updates the inventory accordingly, using a video upload such that it can recognize if an item is being placed into the refrigerator or removed from the refrigerator. Based on this updated inventory, it suggests recipes, making meal planning easier and more efficient, through web scraping recipes online. Additionally, HealthWay helps manage health by tracking the user's medications, using prescription labels as a reference, and sending reminders for dosages. User medication data may be submitted through uploading or submitting a photo of the medications. This comprehensive approach ensures users can maintain a balanced diet and adhere to their medication schedules effortlessly.",
          tools: "HealthWay is built using Next.js, integrating a Python backend for its core functionality implemented with FastAPI endpoints. Data storage is managed through a PostgreSQL database on Google Cloud. It is styled with Tailwind CSS. At its heart, HealthWay employs a Google Cloud visual classification model to accurately identify various types of food and medication. Additionally, it incorporates an AI motion tracking YOLOv5 (You Only Look Once) model on videos submitted to the application, which plays a crucial role in determining whether food items are being added to or removed from a pantry or refrigerator depending on direction of movement (based on bounding box localization). For recipe generation, HealthWay leverages SuperCook API, crafting meal recommendations from the ingredients in the user's inventory.",
          link: "https://devpost.com/software/nutriview-7ah1l6",
        },
        {
          title: "CliniVision",
          images: ['clinivision_new.png'],
          description: 'CliniVision is a multifaceted project that seeks to shorten patient wait times within hospital settings. The CliniVision tool\'s final goal is to take in a fresh postanterior chest x-ray and label the x-ray with the symptoms found within the x-ray. Images are first put through a standardization model that corrctly orients, crops, and zooms the image to a standardized coordinate system. These symptoms are identified and localized with a certain location on the image. Using the identified symptoms and their localizations, the tool will output a diagnosis of the patient\'s condition.',
          tools: "Using Next.js for frontend and the TensorFlow Keras library, we trained a CNN model encapsulating an implementation of a Spatial Transformer to create a standardization model for images, allowing images to be correctly oriented, cropped, and zoomed to a standardized coordinate system. We also used the TensorFlow Keras library to train a CNN model to identify and localize symptoms on the x-ray images. We also experimented with a YOLOv5 computer vision model as part of detections and classification. Finally, we are experimenting with different models to output a diagnosis of the patient's condition based on the identified symptoms and their localizations, namely a simple decision tree from the Scikit-Learn library, and a neural network from TensorFlow Keras.",
          link: "https://github.com/Project-Code-UVA/CliniVision",
        },
        {
          title: "PlaylistPhantom",
          images: ['playlistphantom.png', 'playlistphantomlogo.png'],
          description: "Generate an entire playlist through just a text description of the music you want! Playlists are created using Google Gemini API to translate user text into song embeddings (following a defined JSON structure). I then used different machine learning algorithms to generate playlists, such as a basic KNN based on Euclidean distance in song embedding feature space to determine best matches for a description. I am working on a Spotify API integration to allow direct addition of the playlist to the user's Spotify account.",
          tools: "Built with Next.JS frontend, FastAPI backend for API endpoints, and Google Gemini API for song embedding generation. I built different machine learning algorithms with Tensorflow Keras such as an Autoencoder and Graph-based Neural Network, as well as a KNN algorithm from scikit-learn.",
          link: "https://github.com/danielhuynh0/PlaylistPhantom",
        },
        {
          title: "Finetuned LLAMA-2 Mental Health Service",
          images: ['mentalhealth.png'],
          description: "We finetuned Meta's LLAMA-2 large language model on publicly-available mental health conversations between licensed therapists and individuals, and experimented on the efficacy and impact of finetuning on different types of models -- LLAMA-2, LLAMA-2 Chat, and soon newly released LLAMA-3. From this, we obtained extremely promising results, and seek to create a web service such that we may expand the access to mental health resources to underserved communities or teens who may lack the ability to pay for such resources and services, especially with mental health affecting over 25% of all adults in the United States.",
          tools: "We obtained our Counselchat mental health dataset from HuggingFace, and gained access to the LLAMA-2, LLAMA-2 Chat, and LLAMA-3 models from Meta to perform our experiments. In running the finetuning process, we required the PyTorch and HuggingFace's Transfomers libraries.",
          link: "NLP LLAMA2 Mental Health Platform Paper.pdf",
        },
        {
          title: "Stock Market Bot",
          images: ['smb.png'],
          description: "Allows a user to enter and search for a stock ticker. The bot will load a description of the stock itself, as well as a graph of the stock's price history. It will also utilize natural language processing on live news sites to determine the sentiment of the news articles on the stock, as well as ML models on the stock's price history, to determine whether to recommend the user to buy, sell, or hold the stock at this current time. This project was done as part of my team for Project Code.",
          tools: "Frontend implemented with React. Python used for backend, with Flask. Web scraping done with Beautiful Soup. We utilize the NLTK Python library to perform NLP. We plan to store login data in Firebase (in the process of being implemented)."
        },
        {
          title: "HooEvents",
          images: ['hooevents.png'],
          description: "A social app for students to post, connect, and find events and their location and times at UVA. I implemented login with Google OAuth, pin locations and find directions to events with Google Maps API, managed the PostgreSQL database and migrations to Heroku server. Application built with Django. Used GitHub Actions to manage CI and automate integration testing.",
          tools: "Built with Django, data managed with PostgreSQL, hosted on Heroku. Utilized Google Map API to implement location services.",
          link: "https://asd-team-a04-929b38293922.herokuapp.com/hoo_event/"
        },
        {
          title: "HearIt",
          images: ['hearit.png'],
          description: "Music social media web app where users can share posts to global & friends-only feed of favorite songs/artists/albums, join communities of similar interests, add friends, like/share comments on posts, and play snippet of song directly from a post. I originally built this app in PHP, but I am rebuilding it in Angular and Django.",
          tools: "Built with Angular frontend, a Django backend, and PostgreSQL database, leveraging Django REST Framework for RESTful API endpoints between client-server, TypeScript, PHP, HTML/CSS. Hosting to be done on Heroku. Leverages the Spotify API for music library and playing of snippets.",
          link: "https://github.com/danielhuynh0/hear-it"
        },
        {
          title: "Traffic Detection AI",
          images: [],
          description: "Utilize Random Forest and RNNs to build and train models predicting if traffic will occur on roads an hour in advance, with 92% validation accuracy on binary classification of traffic. Dataset from detectors setup by ETH Zurich.",
          tools: "Built with Python, utilizing scikit-learn and TensorFlow & Keras libraries.",
          link: "TrafficDetectionAI.pdf"
        },
        {
            title: "Student Enrollment Application",
            images: ["stud1.PNG", "stud3.PNG"],
            description: "This application allows users to manage a education institution database system, allowing the user to interact with a GUI in order to either load existing school data, or to edit data, either to enroll a student, add an instructor, add a course, or remove students, instructors, or courses.",
            tools: "Written using Java and JavaFX library, styled with CSS, and implemented with Apache Derby database, using SQL queries. I focused a lot more on the functionality and have not yet fully worked on designing the UI aspect yet, but I plan to do so soon in the future.",
            link: "https://github.com/danielhuynh0/student-enrollment",
        },
        {
          title: "Detecting Bias in Social Media Posts: Machine Learning",
          images: ["social-media-bias.png"],
          description: "Used machine learning to analyze a dataset of social media posts and determine whether the posts were politically charged. Utilized SVM and Logistic Regression models, run on different parameters: different kernels, C, gamma, degree values, and found best performing model on test data. Best performing classifier was found to be the Logistic Regression classifier with C = 0.1, tolerance = 0.01, and liblinear solver with a 75% accuracy.",
          tools: "Written using the pandas and scikit-learn libraries in Python.",
          link: "https://github.com/danielhuynh0/social-media-bias-ml",
        },     
        {
          title: "Online Calculator",
          images: ["online-calculator.png"],
          description: "A simple online calculator that allows a user to perform basic arithmetic operations. A user can do multiple operations in a row using the answer from the previous operation.",
          tools: "Written with simple HTML/CSS/JavaScript.",
          link: "https://danielhuynh0.github.io/online-calculator/",
        },
        {
          title: "Cat Generator",
          images: ["cat-generator.png"],
          description: "Generates a random cat image from The Cat API.",
          tools: "Written with simple HTML/CSS/JavaScript. Makes calls to The Cat API to return the cat image to be displayed.",
          link: "https://danielhuynh0.github.io/my-cat-generator/",
        },
    ];

    const ProjectBox = ({ project }) => {
        return (
          <motion.div
            className="bg-white rounded-lg p-6 shadow-md mb-6 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-row justify-center">
            {
              project.images.map((image, i) => (
                <img className="w-auto h-32 object-contain mx-auto mb-4" src={project.images[i]} alt={project.title} />
              ))
            }
            </div>
            <h1 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h1>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <h3 className="text-lg font-semibold text-gray-900 mb-0">Tools Used</h3>
            <p className="text-gray-700 mb-2">{project.tools}</p>
            <div className="px-0 py-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                >Visit</a>)}
            </div>
          </motion.div>
        );
      };
      
      const Portfolio = () => (
          <div>
            <div className="max-w-6xl mx-auto px-4 lg:mt-32 md:mt-48 sm:mt-64 relative z-10">
              <motion.h1
                className="text-2xl md:text-4xl font-bold text-white mb-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Projects
              </motion.h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
                {projects.map((project) => (
                  <ProjectBox key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
      );


    return (
        <section ref={ref} className="sm:mt-8">
            <div className="bg-gray-900 min-h-screen flex justify-center">
                <Portfolio/>
            </div>
        </section>
    )

});

export default Projects;