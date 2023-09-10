import React from "react";

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
          title: "Stock Market Bot",
          images: ['smb.png'],
          description: "Allows a user to enter and search for a stock ticker. The bot will load a description of the stock itself, as well as a graph of the stock's price history. It will also utilize natural language processing on live news sites to determine the sentiment of the news articles on the stock, as well as ML models on the stock's price history, to determine whether to recommend the user to buy, sell, or hold the stock at this current time. This project was done as part of my team for Project Code.",
          tools: "Frontend implemented with React. Python used for backend, with Flask. Web scraping done with Beautiful Soup. We utilize the NLTK Python library to perform NLP. We plan to store login data in Firebase (in the process of being implemented)."
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
          description: "Used machine learning to analyze a dataset of social media posts and determine whether the posts were politcally charged. Utilized SVM and Logistic Regression models, run on different parameters: different kernels, C, gamma, degree values, and found best performing model on test data. Best performing classifier was found to be the Logistic Regression classifier with C = 0.1, tolerance = 0.01, and liblinear solver with a 75% accuracy.",
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
        {
          title: "Weather Application",
          images: [],
          description: "Allows a user to enter in a location name and see displayed weather data for that location.",
          tools: "Web app written with React, styled with TailwindCSS. Uses OpenWeatherMap API for the weather data. It is not yet fully completed, but I plan to finish it soon in the future."
        }
    ];

    const ProjectBox = ({ project }) => {
        return (
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4"
                >Visit</a>
            </div>
          </div>
        );
      };
      
      const Portfolio = () => (
          <div>
            <div className="max-w-6xl mx-auto px-4 lg:mt-8 md:mt-16 sm:mt-42">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-12 text-center">Projects</h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14">
                {projects.map((project) => (
                  <ProjectBox key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
      );


    return (
        <section ref={ref} className="mt-48 sm:mt-8">
            <div className="bg-gray-900 min-h-screen flex justify-center">
                <Portfolio/>
            </div>
        </section>
    )

});

export default Projects;