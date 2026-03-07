import React from 'react';
import './Card.css';
import { useState } from 'react';
import projectImage1 from '../images/deep2.png';
import projectImage2 from '../images/nav2.png';
import projectImage3 from '../images/Edu-1.jpeg';
import projectImage4 from '../images/bike.png';
import projectImage5 from '../images/YT_1.png';
import projectImage6 from '../images/Fin-1.png';
import projectImage7 from '../images/car_val_1.png';
import projectImage8 from '../images/lead_1.png';
import projectImage9 from '../images/intent.jpg.png';
import projectImage10 from '../images/salary.png';
import projectImage11 from '../images/reval.png';
import projectImage12 from '../images/invoice1.png';
import projectImage13 from '../images/mintsage.png';
import projectImage14 from '../images/ocr-medical.webp';
import projectImage15 from '../images/earth_doom.png';

const moreDetails = [

// [
//   {
//     label: "Key Features",
//     content:
//       "Reproducable Results, Comparitive Results bewteeen different models, currently working on building a workflow for grounded and reliable results."
//   },{
//     label: "Tech Stack",
//     content:
//       "Python for data processing; Pandas for summarizing results and aggregation;Jupyter/CLI scripts for running the full pipeline."
//   },
//   {
//     label: "Results",
//     content:
//       " Sucessfult compared the Accuracy,latency and Security tradeoff of diffrent models"
//   }
// ]

  [
    {
      label: "Key Features",
      content:
        "AI-powered multi-hazard catastrophic risk monitoring for any city; Aggregates real-time data on volcanoes, earthquakes, floods, forest fires, pandemics, and solar flares into composite risk scores; Interactive 3D globe and APO-DEX-style dashboard to visualize per-city threat levels and cascading disaster scenarios."
    },
    {
      label: "Tech Stack",
      content:
        "Python 3.11 for data pipelines and threat modules; FastAPI and Flask for backend APIs; Groq Llama 3.3 70B with ChromaDB (176K+ documents) for LLM cascade reasoning; Frontend built with Vite, Three.js, Globe.gl, GSAP, and custom GLSL shaders for the 3D earth visualization."
    },
    {
      label: "Results",
      content:
        "Unified cross-domain risk view that traditionally lives across siloed APIs; End-to-end pipeline from city input to multi-hazard analysis, LLM-driven cascade prediction, and interactive visualization; Validated scenarios against historical disaster data to improve robustness of risk insights."
    }
  ],

 [
    {
      "label": "Key Features",
      "content": "Reproducible results, comparative results between different models, currently working on building a workflow for grounded and reliable results."
    },
    {
      "label": "Tech Stack",
      "content": "Python for data processing; Pandas for summarizing results and aggregation; Jupyter/CLI scripts for running the full pipeline."
    },
    {
      "label": "Results",
      "content": "Successfully compared the accuracy, latency, and security tradeoff of different models."
    }
  ],

[
  {
    label: "Key Features",
    content:
      "Automatically categorizes raw transaction data (date, description, amount) into spending categories using ML-driven rules; Generates per-category spend summaries and visualizations to highlight dominant expense patterns; Supports loading CSV exports from banks/wallets for fast end-to-end analysis."
  },
  {
    label: "Tech Stack",
    content:
      "Python for data processing and modeling; Pandas and NumPy for cleaning, feature engineering, and aggregation; scikit-learn for training and evaluating the expense categorization model; Jupyter/CLI scripts for running the full pipeline."
  },
  {
    label: "Results",
    content:
      "Significantly reduces manual effort required to tag expenses; Produces consistent category labels across different statement formats; Easily extensible pipeline to plug in new models, features, or downstream dashboards (e.g., Streamlit/BI tools)."
  }
],
  [
    {
      label: "Key Features",
      content: "Detects AI-generated or morphed images with custom CNN architecture achieves 92% accuracy . Provides instant labeling where one has the option to export the labeled image."
    },
    {
      label: "Tech Stack",
      content: "Python, TensorFlow, Flask, Azure, PIL, OpenCV"
    },
    {
      label: "Results",
      content: "Scalable cloud deployment; Model inference < 1s per image; API design for integration in third-party apps"
    }
  ],
  [
    {
      label: "Simulation Details",
      content: "Unity simulation with Python TCP socket backend; supports obstacle avoidance and path finding algorithms."
    },
    {
      label: "Key Features",
      content: "Real-time communication between simulation and AI backend; automated dashboard with SMTP notifications for parcel delivery exploration."
    },
    {
      label: "Tech Stack",
      content: "Unity, C#, Python, AI algorithms."
    },
    {
      label: "Results",
      content: "Benchmarked multiple AI algorithms across key performance metrics for robustness"
    }
    
  ],
  [
    {
      label: "Key Features",
      content: "Led AI research and model fine-tuning to boost supervised model performance; CNN-driven sketch equation solver; illustration colorization; summary generation using BLIP & CLIP transformers."
    },
    {
      label: "Tech Stack",
      content: "TensorFlow, ReactJS, Azure, FastAPI, Caffe, BLIP, CLIP, Firebase, MongoDB."
    },
    {
      label: "Results",
      content: "Deployed scalable AI models on Azure; real-time handwritten math solution system; full-stack deployment with robust authentication."
    }
  ],
  [
    {
      label: "Key Features",
      content: "Forecasts bike rental demand and automatically adjusts pricing using real-time data; Streamlit dashboard for instant invoicing and payment via UPI."
    },
    {
      label: "Tech Stack",
      content: "Python, Scikit-learn, Streamlit, weather & temporal APIs."
    },
    {
      label: "Results",
      content: "Streamlined pricing and invoicing, with real-time adjustment and payment automation."
    },
    {
      label: "Business Use",
      content: "Enables dynamic pricing and automated workflow for rental companies."
    }
  ],
    [
    {
      label: "Key Features",
      content: "ML prediction of department for financial complaints (Credit Card, Banking, Debt, Loans, Reporting); interactive results display."
    },
    {
      label: "Tech Stack",
      content: "Python, Streamlit, Joblib, Pandas."
    },
    {
      label: "How It Works",
      content: "User inputs token; ML model classifies department; instant output in Streamlit UI."
    },
    {
      label: "Results",
      content: "Fast, user-friendly tool for complaint sorting; developed for Semester 7 AI curriculum."
    }
  ],
  [
    {
      label: "Key Features",
      content: "Bi-RNN (GRU + LSTM) intent classification; TextBlob sentiment scores."
    },
    {
      label: "Tech Stack",
      content: "Python, TensorFlow/Keras, YouTube Data API, TextBlob, Pandas, NumPy."
    },
    {
      label: "Model Overview",
      content: "TextVectorization, Embedding, BiGRU & BiLSTM layers; intent classification over 27 classes."
    },
    {
      label: "Results",
      content: "End-to-end NLP pipeline implemented on real YouTube data, with sample results and visualizations."
    }
  ],
  [
    {
      label: "Model Performance",
      content: "Tesed various ML models to analyze the perfomrance and impact."
    },
    {
      label: "Tech Stack",
      content: "Python, Scikit-learn, Jupyter Notebook."
    },
    {
      label: "Outcome",
      content: "Strengthened understanding of overfitting mitigation and practical ML; Ridge Regression: MSE 0.31, MAE 0.39, R² 0.99—outperformed other models."
    }
  ],
  [
    {
      label: "Key Features",
      content: "Analyzes feedback forms (0-5 every question/feature) to gauge leadership traits and sentiment."
    },
    {
      label: "Tech Stack",
      content: "Python, Scikit-Learn,Jupyter Notebook."
    },
    {
      label: "Business Use",
      content: "Team building, leadership coaching, recruitment."
    },
    {
      label: "Results",
      content: "After extensive data analaysis and feture selection a model was trained with 80% accuracy."
    }
  ],
  [
    {
      label: "Models Tested",
      content: "Naive Bayes (baseline), 1D CNN, LSTM, GRU, Bi-RNN, USE+Dense universal-sentence-encoder."
    },
    {
      label: "Tech Stack",
      content: "Python, Keras, TensorFlow, TF-IDF, Universal Sentence Encoder."
    },
    {
      label: "Dataset",
      content: "7,000+ labeled utterances—train and validation splits included."
    },
    {
      label: "Results",
      content: "Bi-directional models delivered top accuracy for intent prediction."
    },
    {
      label: "Future Work",
      content: "Web API deployment for real-time integration."
    }
  ],
  [
    {
      label: "Key Features",
      content: "Ridge regression for higher generalization and accuracy on real salary data."
    },
    {
      label: "Tech Stack",
      content: "Python, Scikit-learn, Jupyter Notebook."
    },
    {
      label: "Results",
      content: "Ridge outperformed basic regression, reducing overfitting."
    },
    {
      label: "Data",
      content: "Kaggle salary dataset (3,600 entries)."
    },
    {
      label: "Takeaway",
      content: "Showcases regularization's power for business prediction tasks."
    }
  ],

  ///////////////////////////////////////////////////////////////////
  [
    {
      label: "Approach",
      content: "ML model trained on medical data to predict heart disease risk."
    },
    {
      label: "Results",
      content: "Reliable predictions validated on real dataset."
    }
  ],
  [
    {
      label: "PDF Generation",
      content: "Python edits invoice template and creates PDF."
    },
    {
      label: "Automation",
      content: "Invoices can be sent automatically to customer emails."
    }
  ]
];

// Dropdown component
const Dropdown = ({ details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Details ▲" : "More Details ▼"}
      </button>
      {open && (
        <div className="dropdown-content">
          {details.map((item, idx) => (
            <div key={idx} className="dropdown-section">
              <strong>{item.label}:</strong> {item.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const projects = [
  {
    image: projectImage15,
    title: " !(Not)DoomsDay: AI Agent to detect and handle calamities",
    description: "A Hackethon Project to forecast and model natural disaster's imapact and leverage LLM's for reasoning",
    githubLink: "https://github.com/vrmaverick/Not_doomsday"
  },
  {
    image: projectImage14,
    title: "MyOCR: Reliable OCR on Personal and Medial Documents ",
    description: "I have researched and testd multiple LLM's (Gemini, Grok, Ollama local llm) on a curated dataset that I created. protoyped on Streamlit.",
    githubLink: "https://github.com/vrmaverick/Personal_Info_OCR"
  },
  {
    image: projectImage13,
    title: "Mint-Sage: AI for Personal finanace management ",
    description: "Ensemble models for Forecasting and Categorization, LLM Agent for optimizing finances, End to end platform for users deployed protoype on Streamlit.",
    githubLink: "https://github.com/vrmaverick/Expense-Categorization"
  },
  {
    image: projectImage1,
    title: "Deepfake Image Detection",
    description: "Custom CNN model, deployed as a Flask web app on Azure, for real-time deepfake image verification and seamless API integration.",
    githubLink: "https://github.com/vrmaverick/DeepFake_Detector"
  },
  {
    image: projectImage2,
    title: "Ai based Navigation and Obstacle Avoidance",
    description: "AI navigation system for simulated drones in Unity, integrating Python-based control and real-time benchmarking of algorithms",
    githubLink: "https://github.com/vrmaverick/Ai_Simulation_Unity"
  },
  {
    image: projectImage3,
    title: "EduBoost: AI Based Educational Tools",
    description: "AI platform for educational enhancement, integrating a sketch-based math solver and illustration colorization, with Transformer-based image summary.",
    githubLink: "https://github.com/vrmaverick/EduBoost"
  },
  {
    image: projectImage4,
    title: "RentalBike",
    description: "High-dimensional ensemble model for real-time bike rental demand forecasting and dynamic price optimization, integrated with weather and temporal APIs.",
    githubLink: "https://github.com/vrmaverick/RentalBike"
  },
  {
    image: projectImage6,
    title: "FinComplaints: Financial Complaint Department Classification",
    description: "Streamlit web app for automated department classification of financial complaints, using a pre-trained ML model.",
    githubLink: "https://github.com/vrmaverick/FinComplaints"
  },
  {
    image: projectImage5,
    title: "YouTube Comment Intent & Sentiment Analysis",
    description: "Bi-RNN-based model for classifying YouTube comment intent, combined with sentiment analysis and live YouTube Data API integration.",
    githubLink: "https://github.com/vrmaverick/YT_Comment_analysis"
  },
  /////////////////////////////////////////////////////
  {
    image: projectImage7,
    title: "Car Valuation",
    description: "Comprehensive ML case study comparing regression models for car price prediction, focusing on regularization.",
    githubLink: "https://github.com/vrmaverick/Car_Valuation"
  },
  {
    image: projectImage8,
    title: "Leader Lens",
    description: "Leadership analytics dashboard for personality analysis from feedbackform that provides actionable insights for teams.",
    githubLink: "https://github.com/vrmaverick/Leader_Lens" // Customize with actual repo
  },
  {
    image: projectImage9,
    title: "Intent Classification (Utterances)",
    description: "Platform for rapid customer intent prediction using classical NLP or deep learning methods — ideal for data analysis",
    githubLink: "https://github.com/vrmaverick/Intent_Classification"
  },
  {
    image: projectImage10,
    title: "SalaryMap (Ridge Model Salary Prediction)",
    description: "Salary prediction using Ridge Regression on a Kaggle-driven dataset; demonstrates strong tabular regression and generalization.",
    githubLink: "https://github.com/vrmaverick/SalaryMap"
  },
  /////////////////////////////////////////////////////////
  {
    image: projectImage11,
    title: "Heart-Health",
    description: "Data Analysis and, highly reliable Ml model trained on various medical examination parameters to detect Heart disease",
    githubLink: "https://github.com/vrmaverick/HeartHealth"
  },
  {
    image: projectImage12,
    title: "Invoice Generator",
    description: "Python Project Which Edits the invoice template dynamically and creats a PDF invoice Which can be directly mailed to the Customer",
    githubLink: "https://github.com/vrmaverick/InvoiceGenerator"
  }
];

const ProjectsGridComponent = () => {
  return (
    <>
    <h1 className="project-title">Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h2 className="title">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="githublink">
              View Repo
            </a>
            <Dropdown details={moreDetails[index]} />
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProjectsGridComponent;
