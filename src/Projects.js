import React from "react";
import { motion } from "framer-motion";

const CATEGORY_STYLES = {
  "Hackathon Winner": "text-amber-300",
  "Hackathon":        "text-orange-300",
  "Research":         "text-violet-300",
  "Team Project":     "text-emerald-300",
  "Personal":         "text-sky-300",
  "Academic":         "text-gray-400",
};

const CATEGORY_DOT = {
  "Hackathon Winner": "bg-amber-400",
  "Hackathon":        "bg-orange-400",
  "Research":         "bg-violet-400",
  "Team Project":     "bg-emerald-400",
  "Personal":         "bg-sky-400",
  "Academic":         "bg-gray-500",
};

const Projects = React.forwardRef((_props, ref) => {
  const projects = [
    {
      title: "Budget Buddy",
      category: "Hackathon Winner",
      images: ["BudgetBuddyLogo.png"],
      description:
        "Winner of Capital One's Best Finance Hack at UVa HooHacks 2023, Budget Buddy is a personal finance budgeting app. " +
        "This app allows users to create an account or login to an existing account with their saved budgeting plans. If it is their first time creating an account, " +
        "the app allows the user to make their own budgeting plan, either by manually allocating a budget to each \"bucket\" or category of planning, or instead specifying " +
        "a total budget to allocate, of which our algorithm will automatically allocate to each category based on the recommendations of financial experts for the user. " +
        "After submitting the budgeting plan, the user can connect their bank account to the app through the Plaid API interface. This provides the app access to the user's " +
        "previous transaction history, and can build/update the budgeting plan as time goes by and the user makes progress on spending. When the user has connected their bank " +
        "account, they will be able to see a dashboard with plots that will summarize and display their spending data from the current month. However, the user will not have to log " +
        "online to manage their finances through Twilio, as the user can also have SMS text messaging conversations with the app's personal chatbot. The user can ask the chatbot for help " +
        "when facing a financial decision, and the chatbot will use previous transactional data as well as the user's current progress on their budgeting plan to help recommend a " +
        "decision to be made.",
      tags: ["HTML/CSS/JS", "Flask", "Plaid API", "Twilio", "GPT API", "Plotly"],
      link: "https://devpost.com/software/budgetbuddy-wz0mh2",
    },
    {
      title: "IRIS",
      category: "Hackathon",
      images: ["iris logo.png", "iris ui.PNG"],
      description:
        "An autonomous robot to fight against invasive species in agriculture, using computer vision and Boston Dynamic's Spot robot! " +
        "Iris is an autonomous quadrupedal robot that can walk around farmland and agricultural areas, and using computer vision, detect and interact " +
        "with weeds and invasive plant species that could harm crops and agricultural outputs from farms. With strong performance in its detections, it " +
        "can be deployed at farms across the country, greatly saving time and energy for busy farmers, improving agricultural production in a safe and sustainable manner, " +
        "especially replacing the need for widespread use of pesticides in our crops.",
      tags: ["ROS 2", "C++", "TensorFlow Keras", "MobileNet", "Gazebo", "Docker", "Python"],
      link: "https://devpost.com/software/iris-hoilnb",
    },
    {
      title: "HealthWay",
      category: "Hackathon",
      images: ["healthway.png"],
      description:
        "HealthWay is a versatile kitchen tool and lifestyle app designed to help users manage their food inventory in real time, offering timely updates. " +
        "We plan to integrate the platform with a real-time sensor/camera, placed into a refrigerator, such that it can automatically track user inventory. Our app starts " +
        "by allowing the user to take a photo of their fridge, or record a video of the user placing items into the fridge, from which it recognizes the items in the frame, and " +
        "generates a list of ingredients currently in stock. As items are added or removed, HealthWay updates the inventory accordingly. Based on this updated inventory, it suggests " +
        "recipes, making meal planning easier and more efficient, through web scraping recipes online. Additionally, HealthWay helps manage health by tracking the user's medications, " +
        "using prescription labels as a reference, and sending reminders for dosages.",
      tags: ["Next.js", "FastAPI", "PostgreSQL", "Google Cloud Vision", "YOLOv5", "Tailwind CSS", "SuperCook API"],
      link: "https://devpost.com/software/nutriview-7ah1l6",
    },
    {
      title: "CliniVision",
      category: "Team Project",
      images: ["clinivision_new.png"],
      description:
        "CliniVision is a multifaceted project that seeks to shorten patient wait times within hospital settings. The CliniVision tool's final goal is to take in a fresh " +
        "posteroanterior chest x-ray and label the x-ray with the symptoms found within the x-ray. Images are first put through a standardization model that correctly orients, " +
        "crops, and zooms the image to a standardized coordinate system. These symptoms are identified and localized with a certain location on the image. Using the identified " +
        "symptoms and their localizations, the tool will output a diagnosis of the patient's condition.",
      tags: ["Next.js", "TensorFlow Keras", "CNN", "Spatial Transformer", "YOLOv5", "Scikit-learn"],
      link: "https://github.com/Project-Code-UVA/CliniVision",
    },
    {
      title: "Spotify Miniplayer for Google Chrome",
      category: "Personal",
      images: ["spotify-miniplayer.PNG"],
      description:
        "Control your music directly in your browser without ever having to change tabs or take out your phone! I made this one night because I was very focused working, " +
        "but kept having to switch back and forth to change the songs playing from my Spotify DJ. As such, I procrastinated on work by creating this tool instead (haha), enabling me to avoid lots " +
        "of inconvenience in the future. I actively use this tool, and have shared it with friends to use as well! This tool will prompt the user to connect to their Spotify account, handle authentication, " +
        "persist the authentication in local storage in browser such that when a user closes a tab or a window, opening a new one will still keep the user logged in. It will also directly control the user's " +
        "playback on Spotify, as interacting with this miniplayer directly affects the music playing on your account, and in your headphones.",
      tags: ["JavaScript", "HTML/CSS", "Spotify API", "Chrome Extension", "PKCE Auth"],
      link: "https://github.com/danielhuynh0/spotify-chrome-miniplayer",
    },
    {
      title: "PlaylistPhantom",
      category: "Personal",
      images: ["playlistphantom.png", "playlistphantomlogo.png"],
      description:
        "Generate an entire playlist through just a text description of the music you want! Playlists are created using Google Gemini API to translate user text into song embeddings " +
        "(following a defined JSON structure). I then used different machine learning algorithms to generate playlists, such as a basic KNN based on Euclidean distance in song embedding " +
        "feature space to determine best matches for a description. I am working on a Spotify API integration to allow direct addition of the playlist to the user's Spotify account.",
      tags: ["Next.js", "FastAPI", "Google Gemini API", "TensorFlow Keras", "Scikit-learn", "Autoencoder", "Graph Neural Network"],
      link: "https://github.com/danielhuynh0/PlaylistPhantom",
    },
    {
      title: "Finetuned LLAMA-2 Mental Health Service",
      category: "Research",
      images: ["mentalhealth.png"],
      description:
        "We finetuned Meta's LLAMA-2 large language model on publicly-available mental health conversations between licensed therapists and individuals, and experimented on the efficacy " +
        "and impact of finetuning on different types of models — LLAMA-2, LLAMA-2 Chat, and newly released LLAMA-3. From this, we obtained extremely promising results, and seek to create a " +
        "web service such that we may expand the access to mental health resources to underserved communities or teens who may lack the ability to pay for such resources and services, " +
        "especially with mental health affecting over 25% of all adults in the United States.",
      tags: ["PyTorch", "HuggingFace Transformers", "LLAMA-2", "LLAMA-3", "NLP", "Fine-tuning"],
      link: "NLP LLAMA2 Mental Health Platform Paper.pdf",
    },
    {
      title: "Stock Market Bot",
      category: "Team Project",
      images: ["smb.png"],
      description:
        "Allows a user to enter and search for a stock ticker. The bot will load a description of the stock itself, as well as a graph of the stock's price history. It will also utilize " +
        "natural language processing on live news sites to determine the sentiment of the news articles on the stock, as well as ML models on the stock's price history, to determine whether " +
        "to recommend the user to buy, sell, or hold the stock at this current time. This project was done as part of my team for Project Code.",
      tags: ["React", "Flask", "Beautiful Soup", "NLTK", "NLP", "Firebase"],
    },
    {
      title: "HooEvents",
      category: "Team Project",
      images: ["hooevents.png"],
      description:
        "A social app for students to post, connect, and find events and their location and times at UVA. I implemented login with Google OAuth, pin locations and find directions to events " +
        "with Google Maps API, managed the PostgreSQL database and migrations to Heroku server. Application built with Django. Used GitHub Actions to manage CI and automate integration testing.",
      tags: ["Django", "PostgreSQL", "Heroku", "Google OAuth", "Google Maps API", "GitHub Actions"],
      link: "https://asd-team-a04-929b38293922.herokuapp.com/hoo_event/",
    },
    {
      title: "HearIt",
      category: "Personal",
      images: ["hearit.png"],
      description:
        "Music social media web app where users can share posts to global & friends-only feed of favorite songs/artists/albums, join communities of similar interests, add friends, " +
        "like/share/comment on posts, and play a snippet of a song directly from a post. I originally built this app in PHP, but I am rebuilding it in Angular and Django.",
      tags: ["Angular", "Django", "PostgreSQL", "Django REST Framework", "Spotify API", "TypeScript"],
      link: "https://github.com/danielhuynh0/hear-it",
    },
    {
      title: "Traffic Detection AI",
      category: "Research",
      images: [],
      description:
        "Utilize Random Forest and RNNs to build and train models predicting if traffic will occur on roads an hour in advance, with 92% validation accuracy on binary classification of " +
        "traffic. Dataset from detectors setup by ETH Zurich.",
      tags: ["Python", "Scikit-learn", "TensorFlow", "Keras", "Random Forest", "RNN"],
      link: "TrafficDetectionAI.pdf",
    },
    {
      title: "Student Enrollment Application",
      category: "Academic",
      images: ["stud1.PNG", "stud3.PNG"],
      description:
        "This application allows users to manage an education institution database system, allowing the user to interact with a GUI in order to either load existing school data, or to edit " +
        "data — either to enroll a student, add an instructor, add a course, or remove students, instructors, or courses.",
      tags: ["Java", "JavaFX", "Apache Derby", "SQL", "CSS"],
      link: "https://github.com/danielhuynh0/student-enrollment",
    },
    {
      title: "Detecting Bias in Social Media Posts",
      category: "Research",
      images: ["social-media-bias.png"],
      description:
        "Used machine learning to analyze a dataset of social media posts and determine whether the posts were politically charged. Utilized SVM and Logistic Regression models, run on " +
        "different parameters: different kernels, C, gamma, degree values, and found best performing model on test data. Best performing classifier was found to be the Logistic Regression " +
        "classifier with C = 0.1, tolerance = 0.01, and liblinear solver with a 75% accuracy.",
      tags: ["Python", "Pandas", "Scikit-learn", "SVM", "Logistic Regression"],
      link: "https://github.com/danielhuynh0/social-media-bias-ml",
    },
    {
      title: "Online Calculator",
      category: "Personal",
      images: ["online-calculator.png"],
      description:
        "A simple online calculator that allows a user to perform basic arithmetic operations. A user can do multiple operations in a row using the answer from the previous operation.",
      tags: ["HTML/CSS/JS"],
      link: "https://danielhuynh0.github.io/online-calculator/",
    },
    {
      title: "Cat Generator",
      category: "Personal",
      images: ["cat-generator.png"],
      description: "Generates a random cat image from The Cat API.",
      tags: ["HTML/CSS/JS", "Cat API"],
      link: "https://danielhuynh0.github.io/my-cat-generator/",
    },
  ];

  const ProjectCard = ({ project }) => {
    const categoryStyle = CATEGORY_STYLES[project.category] || CATEGORY_STYLES["Personal"];
    const dotStyle = CATEGORY_DOT[project.category] || CATEGORY_DOT["Personal"];

    return (
      <motion.div
        className="rounded-xl overflow-hidden flex flex-col group"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(139,92,246,0.15)' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -3 }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.35)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'}
      >
        {project.images && project.images.length > 0 && (
          <div className="flex items-center justify-center gap-4 px-6 pt-6" style={{ background: 'rgba(0,0,0,0.2)' }}>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={project.title}
                className="h-20 w-auto object-contain opacity-90"
              />
            ))}
          </div>
        )}

        <div className="p-5 flex flex-col flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotStyle}`} />
            <span className={`text-xs font-mono tracking-wide ${categoryStyle}`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-base font-semibold text-white mb-2 leading-snug tracking-tight">{project.title}</h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-sm font-mono"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(156,163,175,0.8)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <div className="mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-violet-400/70 hover:text-violet-300 transition-colors"
              >
                view project →
              </a>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="py-24" style={{ background: 'rgba(6,4,16,0.92)', borderTop: '1px solid rgba(139,92,246,0.12)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-violet-400 text-xs font-mono tracking-widest uppercase mb-3 opacity-70">work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Projects</h2>
          <div className="w-12 h-px bg-violet-500/50 mx-auto mb-6" />
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(CATEGORY_STYLES).map(([label]) => (
              <span key={label} className={`flex items-center gap-1.5 text-xs font-mono ${CATEGORY_STYLES[label]}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${CATEGORY_DOT[label]}`} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
