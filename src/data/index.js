import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "Education",
    title: "Education",
  },
];

const Educations = [
  {
    title: "Web-Dev Skills",
    company_name: "Learning",
    date: "2023 - Present",
    details: [
      "<span style='color: white;'>Design :</span> UI, UX, Figma",
      "<span style='color: white;'>FrontEnd :</span> HTML,CSS,JS,React,Mattere.js,ThreeJS,Bootstrap,Tailwind",
      "<span style='color: white;'>BackEnd :</span> Node.js,Express.js,MongoDB,Mysql,Flask,Streamlit,JWT"
    ],
  },
  {
    title: "ML Enthusiast",
    company_name: "Learing",
    date: "2023 - Present",
    details: [
      " <span style='color: white;'>Linear Regression and Random Forest Model Training</span>.",
      "<span style='color: white;'>Python Modules :</span> NumPy, Pandas, Matplotlib, Scikit-learn,FB Prophet.",
      "<span style='color: white;'>AQI Predictor</span> Using Python and Flask.",
    ],
  },
  {
    title: "Education ",
    company_name: "Going On",
    date: "From Birth",
    details: [
      "<span style='color: white;'>Learning and Growing</span>  Still leaning in collge and life. ",
      "<span style='color:white;'>HighSchool : 92% CBSE</span>",
      "<span style='color:white;'>Inter : 95% CBSE</span>",
    ],
  },
  {
    title: "Computer Science",
    company_name: "B.tech",
    date: "2023 - 2027",
    details: [
      "<span style='color:white;'>A passionate second-year BTech CSE student, enthusiastic about UI/UX design, Figma, web development, AWS services, and programming, constantly exploring new technologies to enhance skills and build impactful projects.</span>"
    ],
  },
];

const portfolio = [
  {
    name: "My-AI Story Teller",
    description:
      "An AI -powered storytelling tool that uses natural language processing to generate personalized stories.",
    image: oscs,
  },
  {
    name: "AQI",
    description:
      "Create awareness for air quality by providing real-time AQI data and suggestions for improvement.",
    image: devnotes,
  },
  {
    name: "AQI Forecasting",
    description:
      "Created a model to predict AQI levels based on historical data and weather forecasts.",
    image: algorithms,
  },
];

export { Educations, portfolio };

