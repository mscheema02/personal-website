export const profile = {
  initials: "MSC",
  name: "",
  title: "",
  location: "Toronto, ON",
  email: "manvircheema02@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/mscheema02" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manvir-cheema-029b901b1/" }
  ],
  about: [
    "Hey there! I'm Manvir Singh Cheema. I build simple, reliable and organized systems.",
  ],
  projects: [
    {
        name: "Url Response",
        subtitle: "HTML extraction tool for Data Analysis and Monitoring",
        dates: "2024 - Present",
        bullets: [
            "I built a full web application end-to-end myself (SERN Stack plus more) without depending on ANY paid API service besides Supabase (3-2-1 backup rule) and Stripe for max control, flexibility, cost-effectiveness, and scalability",
            "Website allows users to extract HTML content from any website continously (allowing for monitoring of changes without being restricted), users can save the extracted HTML into a .html file  or directly upload to large context LLM for further processing and analysis",
            "Refer to Github Repository for diagrams and more details"
        ],
        skills: [
          "AWS Amplify", "AWS EC2", "AWS VPC", "AWS API Gateway", "AWS Lambda", "AWS DynamoDB", "AWS Route 53",
          "React", "HTML", "JavaScript", "ES6+", "React Hooks", "React Router DOM", "Zustand", "Vite", "ESLint", "PostCSS", "Autoprefixer",
          "Tailwind CSS", "DaisyUI", "CSS3",
          "Axios", "Lucide React", "React Switch", "React Hot Toast",
          "Stripe.js", "Stripe",
          "Node.js", "Express.js",
          "Supabase", "PostgreSQL", "Valkey", "Redis", "ioredis",
          "JWT", "jsonwebtoken", "bcryptjs", "Cookie Parser",
          "WebSockets", "ws",
          "Cloudinary", "UUID", "PM2", "Nodemon",
          "FastAPI", "Uvicorn", "Pydantic", "SQLite", "Xvfb",
          "RESTful API", "Microservices Architecture", "Middleware Pattern", "Service Layer Pattern",
          "WebSocket Real-time Communication", "Caching Strategy", "Error Handling",
          "Environment-based Configuration", "Subscription Management", "CORS Configuration",
          "Cookie-based Authentication", "Webhook Processing",
          "GitLab", "SOLID Principles", "Design Patterns",
          "npm", "nvm",
          "Adaptability", "Attention to Detail",
        ],
        links: [
            { label: "Website", href: "https://www.urlresponse.com" },
            { label: "Repository", href: "https://github.com/mscheema02/urlresponse-app-info" }
        ]
    },
    {
        name: "Personal Website",
        subtitle: "Personal Website for Portfolio and Projects",
        dates: "2023 - Present",
        bullets: [
          "Personal Website",
          "Designed to showcase skills, projects, experience, and education in a simple and organized manner with a skill query system",
        ],
        skills: [
          "React", "JavaScript", "ES6+", "HTML5", "CSS3",
          "Vite", "ESLint", "npm", "nvm", "Github",
          "AWS S3", "AWS CloudFront", "AWS Route 53", "AWS Certificate Manager", 
        ],
        links: [
            { label: "Website", href: "https://www.manvirsinghcheema.com" },
            { label: "Repository", href: "https://github.com/mscheema02/personal-website" }
        ]
    },
    {
      name: "Applied Machine Learning",
      subtitle: "ML algorithms and data analysis implementations",
      dates: "2025",
      bullets: [
        "Machine learning project implementing classification and regression models for data analysis using scikit-learn on Jupyter notebooks",
        "Built data preprocessing pipelines with feature engineering, handled imbalanced datasets using SMOTE resampling, and evaluated multiple models (Random Forest, Logistic Regression, K-Nearest Neighbors, Support Vector Machine, and Gradient Boosting) with cross-validation",
        "Accomplished accurate predictions as measured by model performance metrics by doing data preprocessing, feature engineering, and hyperparameter tuning"
      ],
      skills: ["Python 3", "Jupyter Notebook", "Google Colab", "NumPy", "Pandas", "scikit-learn", "imbalanced-learn", "Matplotlib", "ucimlrepo", "Random Forest", "Logistic Regression", "K-Nearest Neighbors", "Support Vector Machine", "Gradient Boosting"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/applied-machine-learning" }
      ]
    },
    {
      name: "SLAM RRT Navigation",
      subtitle: "Robotics navigation using SLAM and RRT pathfinding",
      dates: "2024",
      bullets: [
        "Robotics navigation system enabling autonomous robot pathfinding in unknown environments using ROS2 and Gazebo simulations on Ubuntu 22.04",
        "Implemented SLAM for simultaneous mapping and localization, and RRT* algorithm for path planning using Python with ROS2 message handling",
        "Accomplished autonomous navigation as measured by successful path planning and obstacle avoidance by doing real-time map generation and optimal path finding"
      ],
      skills: ["VMWare Workstation Pro", "Ubuntu 22.04", "ROS2", "Gazebo", "Python 3", "NumPy", "OpenCV", "ROS2 Messages", "SLAM", "RRT*"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/slam-rrt-navigation" }
      ]
    },
    {
      name: "Autonomous Driving with CNN",
      subtitle: "CNN-based control system with kinematic models",
      dates: "2024",
      bullets: [
        "Autonomous vehicle control system using deep learning CNN for end-to-end driving control in ROS2 and Gazebo simulations on Ubuntu 22.04 with VMWare Workstation Pro",
        "Trained CNN models with TensorFlow/Keras on sensor data, collected images, processed images with OpenCV, trained the model, and then integrated it with ROS2 for real-time vehicle control",
        "Accomplished autonomous driving control as measured by successful vehicle navigation and steering commands by doing CNN-based perception and kinematic control integration"
      ],
      skills: ["VMWare Workstation Pro", "Ubuntu 22.04", "ROS2", "Gazebo", "Python 3", "TensorFlow", "Keras", "OpenCV", "cv_bridge", "Inverse Kinematics", "NumPy", "scikit-learn", "imutils"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/kinematics-and-cnn-autonomous-driving" }
      ]
    },
    {
      name: "Quantum Computing",
      subtitle: "Quantum algorithms and gate implementations",
      dates: "2024",
      bullets: [
        "Implemented the notorious Shor's and Grover's algorithms using Qiskit for quantum circuit design and simulation, on Google Colab",
        "Built quantum circuits with gate operations, simulated quantum states using Qiskit Aer, and visualized probability distributions with Matplotlib",
      ],
      skills: ["Python", "Jupyter Notebook", "IPython", "NumPy", "Qiskit", "Matplotlib", "Quantum Computing", "Shor's Algorithm", "Grover's Algorithm", "Google Colab"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/quantum-computing" }
      ]
    },
    {
      name: "Command Executor",
      subtitle: "System command execution interface in C",
      dates: "2023",
      bullets: [
        "Command-line program that executes system commands using Unix system calls for process management",
        "Implemented using only system calls such as fork() for process creation, execvp() for command execution, pipe() for inter-process communication, and getline() for input parsing",
        "Accomplished command execution system as measured by successful command parsing and process execution by doing system call integration and process management"
      ],
      skills: ["C", "Unix", "Linux", "System Calls", "pipe", "fork", "execvp", "getline"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/command-executor-c" }
      ]
    },
    {
      name: "Design Patterns in Java",
      subtitle: "Classic design patterns implementation",
      dates: "2023",
      bullets: [
        "Created a Parking Managaement System Java app using Java server pages and implemented creational, structural, and behavioral design patterns",
        "Demonstrated SOLID principles and OOP best practices for clean, maintainable architecture"
      ],
      skills: ["Java", "OOP", "Design Patterns", "SOLID Principles", "Software Architecture", "CSS", "HTML", "Java Server Pages", "SQL"],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/design-patterns-java" }
      ]
    },
    {
      name: "Earnings Report PDF Scraper",
      subtitle: "Web scraping and financial data processing",
      dates: "2023",
      bullets: [
        "Automated tool that extracts financial data from earnings report PDFs using web scraping and PDF parsing",
        "Implemented using Selenium for web scraping, PDF parsing libraries for data extraction, and Pandas for data processing and structuring",
        "Accomplished automated data extraction as measured by structured data output from PDFs by doing web scraping, PDF parsing, and data transformation"
      ],
      skills: ["Python", "Web Scraping", "Data Processing", "Automation", "Selenium", "urlib", "Pandas", ],
      links: [
        { label: "Repository", href: "https://github.com/mscheema02/ER_scraper" }
      ]
    }
  ],
  experience: [
    {
      role: "Lead Software Engineer",
      company: "Driver Zone Golf",
      dates: "2024 — Present",
      bullets: [
        "Built an active production-ready customer booking and payments experience. With end-to-end authentication, scheduling, and checkout flows, done by establishing and coordinating business requirements between the CEO and team members to build as well as personally building out a lot of the functionality of the web application using Next.js, Tailwind CSS, Hostinger, Stripe, Google Firebase, MongoDB and additional third-party APIs, to implement the login/register, scheduling functionality, and rewards system."
      ],
      skills: ["Next.js", "React", "Tailwind CSS", "Hostinger", "Stripe", "Stripe Pricing Table", "Google Firebase", "MongoDB", "React-Fast-Marquee", "Toastify", "Google Tag Manager", "Google Analytics", "GA4", "Google APIs", "Google Site Verification", "npm", "nvm", "Docker"],
      links: [
        { label: "Website", href: "https://driverzonegolf.ca/" }
      ]
    },
    {
      role: "Application Programmer Analyst",
      company: "Ontario Ministry of Education",
      dates: "May 2023 — Dec 2023",
      bullets: [
        "Executed QA tests for applications serving 441,000 yearly users",
        "Identified defects and improved product quality",
        "Created test scenarios and performed requirement analysis"
      ],
      skills: ["Selenium", "Selenium WebDriver", "Quality Assurance", "Testing", "Requirements Analysis", "WAVE Evaluation Tool", "Web Accessibility Testing", "ALM", "Jira", "SharePoint", "Planview Enterprise", "Git", "GitHub", "VSCode", "Python", "JavaScript", "Microsoft Teams", "Microsoft Outlook", "Microsoft Excel"]
    },
    {
      role: "Researcher",
      company: "Lassonde Motorsports",
      dates: "Jan 2022 — Apr 2022",
      bullets: [
        "Led research on integrating active aerodynamics to the vehicle for better handling, braking, and improved fuel efficiency"
      ],
      skills: ["Research", "Aerodynamics", "Vehicle Dynamics", "Data Analysis"]
    },
    {
      role: "Software Team Member",
      company: "York University CubeSat Team (Essence)",
      dates: "Sept 2021 — Feb 2022",
      bullets: [
        "Developed software for CD74HC4067M analog multiplexer",
        "Integrated Arduino Uno for satellite solar cell data collection",
        "Independent development and hardware-software integration"
      ],
      skills: ["Arduino", "Embedded Systems", "C++", "Hardware Integration"]
    }
  ],
  education: [
    {
      degree: "B.Sc., Hons. Computer Science",
      certificates: "Bergeron Entrepreneurs in Science & Technology (BEST) Certificate in Technology Entrepreneurship, Entrepreneurship/Entrepreneurial Studies",
      school: "York University",
      dates: "2020 — 2026",
      bullets: [
        "Advanced Data Structures",
        "Operating Systems",
        "Introduction to Database Management Systems",
        "Advanced Object Oriented Programming",
        "Introduction to Robotics",
        "Quantum Computing"
      ],
      skills: ["Discrete Mathematics", "Computer Science", "Java", "C", "Linux", "Quantum Math", "Python"]
    },
    {
      degree: "High School Diploma",
      certificates: "Ontario Scholar",
      school: "Cardinal Ambrozic Catholic Secondary School",
      dates: "2016 — 2020",
      bullets: [
      ]
    }
  ],
  skills: [
    "Python", "Python 3", "Java", "C", "C++", "JavaScript", "ES6+", "HTML", "HTML5", "CSS", "CSS3",
    "React", "Next.js", "React Hooks", "React Router DOM", "React Switch", "React Hot Toast", "React-Fast-Marquee", "Toastify", "Zustand", "Vite", "ESLint", "PostCSS", "Autoprefixer",
    "Tailwind CSS", "DaisyUI", "Lucide React", "Communication", "Teamwork", "Leadership", "Problem Solving", "Adaptability", "Flexibility", "Organizational Skills", "Attention to Detail", "Team Productivity", "Team Development",
    "Node.js", "Express.js", "Axios",
    "AWS Amplify", "AWS EC2", "AWS VPC", "AWS API Gateway", "AWS Lambda", "AWS DynamoDB", "AWS Route 53", "AWS S3", "AWS CloudFront", "AWS Certificate Manager",
    "Supabase", "PostgreSQL", "Valkey", "Redis", "ioredis", "SQLite",
    "JWT", "jsonwebtoken", "bcryptjs", "Cookie Parser", "Cookie-based Authentication",
    "WebSockets", "ws", "WebSocket Real-time Communication",
    "Stripe", "Stripe.js", "Stripe Pricing Table", "Webhook Processing", "Subscription Management",
    "Google Firebase", "MongoDB", "Hostinger",
    "Google Tag Manager", "Google Analytics", "GA4", "Google APIs", "Google Site Verification",
    "Cloudinary", "UUID", "PM2", "Nodemon", "Docker",
    "FastAPI", "Uvicorn", "Pydantic", "Xvfb",
    "RESTful API", "Microservices Architecture", "Middleware Pattern", "Service Layer Pattern",
    "Caching Strategy", "Error Handling", "Environment-based Configuration", "CORS Configuration",
    "Deep Learning", "CNN", "TensorFlow", "Keras", "scikit-learn", "imbalanced-learn",
    "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook", "IPython", "Google Colab", "ucimlrepo",
    "Random Forest", "Logistic Regression", "K-Nearest Neighbors", "Support Vector Machine", "Gradient Boosting",
    "Robotics", "SLAM", "ROS2", "ROS2 Messages", "Gazebo", "OpenCV", "cv_bridge", "Inverse Kinematics", "imutils", "RRT*",
    "Quantum Computing", "Qiskit", "Shor's Algorithm", "Grover's Algorithm", "Quantum Math",
    "VMWare Workstation Pro", "Ubuntu 22.04",
    "Design Patterns", "SOLID Principles", "OOP", "Software Architecture",
    "Advanced Data Structures", "Operating Systems", "Database Management Systems",
    "System Calls", "pipe", "fork", "execvp", "getline",
    "Web Scraping", "Data Processing", "Automation", "Selenium", "Selenium WebDriver", "urlib",
    "Quality Assurance", "Testing", "Requirements Analysis", "WAVE Evaluation Tool", "Web Accessibility Testing",
    "ALM", "Jira", "SharePoint", "Planview Enterprise", "Git", "GitHub", "GitLab", "VSCode",
    "Microsoft Teams", "Microsoft Outlook", "Microsoft Excel",
    "Research", "Aerodynamics", "Vehicle Dynamics", "Data Analysis",
    "Arduino", "Embedded Systems", "Hardware Integration", "CD74HC4067M",
    "Computer Science", "Discrete Mathematics",
    "Unix", "Linux",
    "npm", "nvm", "Java Server Pages", "SQL"
  ]
};