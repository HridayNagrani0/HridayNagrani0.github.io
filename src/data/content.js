export const portfolioData = {
    personalInfo: {
      name: "Your Name",
      title: "Robotics & AI Engineer",
      subtitle: "Specializing in Computer Vision, NLP, and Extended Reality",
      email: "email@example.com",
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername"
    },
    
    featuredProjects: [
      {
        id: 1,
        title: "Project Title",
        description: "Brief project description",
        technologies: ["React", "Python", "TensorFlow"],
        image: "/placeholder.jpg",
        demoLink: "https://demo.com",
        githubLink: "https://github.com/project",
        highlights: ["Key achievement 1", "Key achievement 2"]
      }
      // Add more projects
    ],
  
    experience: [
      {
        id: 1,
        role: "Research Assistant",
        company: "University/Company Name",
        duration: "Jan 2023 - Present",
        description: "Key responsibilities and achievements",
        technologies: ["Technology 1", "Technology 2"],
        link: "https://actual-url-to-paper.com",
        linkText: "View Paper"
      }
      // Add more experiences
    ],
  
    skills: {
      technical: ["Python", "React", "TensorFlow", "Computer Vision"],
      tools: ["Git", "Docker", "VS Code"],
      domains: ["Robotics", "AI", "Extended Reality"]
    },
  
    research: [
      {
        id: 1,
        title: "Research Project Title",
        description: "Brief description",
        publication: "Conference/Journal name",
        link: "https://doi.org/..."
      }
      // Add more research projects
    ],
  
    certifications: [
      {
        id: 1,
        name: "Certification Name",
        issuer: "Issuing Organization",
        date: "2023",
        link: "https://verify.cert"
      }
      // Add more certifications
    ]
  };

export const education = [
  {
    school: "Arizona State University",
    degree: "Master of Science in Robotics and Autonomous Systems (Artificial Intelligence)",
    location: "Tempe, Arizona",
    duration: "Expected May 2025",
    gpa: "4.0/4.0",
    relevantCourses: [
      "Statistical Machine Learning: Theory to Practice",
      "Robotic Systems I",
      "Artificial Intelligence",
      "Perception in Robotics",
      "Augmented/Virtual Reality Systems",
      "Image Processing and Analysis",
      "Algorithms & Hardware Co-Design for AI"
    ]
  },
  {
    school: "Ahmedabad University",
    degree: "Bachelor of Technology in Information and Communication Technology",
    location: "Ahmedabad, India",
    duration: "August 2018 - May 2022",
    gpa: "3.19/4.0"
  }
];

export const skills = {
  webDevelopment: [
    "Django",
    "Firebase",
    "MongoDB",
    "Redux",
    "React",
    "Adobe XD"
  ],
  programmingAndML: [
    "Python",
    "C",
    "C#",
    "C++",
    "Java",
    "Node.js",
    "Microsoft-tools",
    "Tensorflow",
    "Pytorch",
    "Keras",
    "AWS",
    "Kubernetes",
    "Kafka",
    "Unity"
  ]
};

export const publications = [
  {
    title: "Facial Expression Recognition using Convolutional Neural Network through Region-based Patch Generation: Harnessing Subtle Facial Cues",
    authors: "Hriday R. Nagrani, Dhaval K. Patel, Kashish D. Shah, Harsh A. Patel, Manob Jyoti Saikia",
    conference: "2023 International Conference on Machine Learning and Applications (ICMLA)",
    date: "15-17 December 2023",
    description: "• Developed a region-based facial expression recognition system utilizing nine different facial patches<br/>• Engineered dedicated neural pathways for processing micro-facial expressions in each region<br/>• Achieved state-of-the-art 99.8% accuracy on CK+ dataset and 91.25% on Oulu-Casia through 10-fold cross-validation",
    doi: "10.1109/ICMLA58977.2023.00144",
    link: "https://ieeexplore.ieee.org/document/10459940"
  },
  {
    title: "EMED-UNet: An Efficient Multi-Encoder-Decoder Based UNet for Chest X-ray Segmentation",
    authors: "Kashish D. Shah, Dhaval K. Patel, Harsh A. Patel, Hriday R. Nagrani",
    conference: "2022 IEEE Region 10 Symposium (TENSYMP)",
    date: "01-03 July 2022",
    description: "• Designed an efficient multi-encoder-decoder UNet architecture for chest X-ray segmentation<br/>• Reduced model parameters by 78% (31.04M to 6.72M) while maintaining segmentation accuracy<br/>• Decreased computational requirements from 386G to 114G FLOPs for resource-constrained deployment",
    doi: "10.1109/TENSYMP54529.2022.9864556",
    link: "https://ieeexplore.ieee.org/document/9864556"
  },
  {
    title: "SplitGlass: A Splitting Based Deep Network for Efficient Human Pose Estimation",
    authors: "Harsh A. Patel, Dhaval K. Patel, Kashish D. Shah, Hriday R. Nagrani",
    conference: "2022 IEEE Region 10 Symposium (TENSYMP)",
    date: "01-03 July 2022",
    description: "• Engineered a hierarchical splitting-based network architecture for human pose estimation<br/>• Implemented region-specific modules focusing on distinct body part keypoint estimation<br/>• Demonstrated significant parameter reduction while maintaining accuracy comparable to SOTA methods on the MPII dataset",
    doi: "10.1109/TENSYMP54529.2022.9864481",
    link: "https://ieeexplore.ieee.org/document/9864481"
  }
];

export const experience = [
  {
    company: "Meteor Studio at Arizona State University",
    role: "Extended Reality (XR) Creative Developer",
    location: "AZ, USA",
    duration: "June 2024 - Current",
    technologies: "C#, Unity, Quest3, Android VR",
    responsibilities: [
      "Developed an advanced AR/VR-based media player for a graduate-level semiconductor metrology course, leading to a 13% improvement in student engagement and understanding, in mid-semester evaluations",
      "Implemented networking and co-location features using Unity Netcode and Meta's Oculus Integration SDK, enabling real-time multi-user interactions and collaborative learning experiences within the XR application",
      "Developed end-to-end NDT timeline generation system which creates a timeline with 5-module handling, allowing students to navigate through modules in a non-linear sequence with integrated audio, subtitles, and markers for relevant navigation points",
      "Presented IMPS (Immersive Media Player System) demo at HotMobile 2025, showcasing synchronized 360° media playback across multiple VR headsets with <10ms synchronization [View Paper](https://dl.acm.org/doi/10.1145/3708468.3715683)"
    ]
  },
  {
    company: "ASU (Teuvonet Technologies)",
    role: "Research Aide: Computer Vision",
    location: "Tempe, AZ",
    duration: "January 2024 - Current",
    technologies: "Python, PyTorch, TensorRT, NVIDIA Jetson",
    responsibilities: [
      "Fused Neuro-Symbolic approaches with Object Detection models to create Explainable AI (XAI) solutions, enhancing performance and interpretability, achieving a 30% increase in recall for geospatial imagery analysis",
      "Secured Air Force/Space Force STTR Phase 1 contract for the research effort, as documented in W.P. Carey News [View Article](https://news.wpcarey.asu.edu/20240422-asu-startups-breakthrough-explainable-ai-secures-air-force-contract-reliable-transparent)",
      "Developed a comprehensive stress testing framework for comparative analysis of XAI vs. non-XAI models against various patch and camouflage attacks, utilizing Meta SAM 2 to simulate real-time camouflage for enhanced evaluation",
      "Optimized XAI models with custom post-inference processing on NVIDIA Jetson Xavier Orin, implementing TensorRT acceleration, quantization, and model pruning techniques that reduced model size by 40% while maintaining performance"
    ]
  },
  {
    company: "Ahmedabad University",
    role: "Teaching Assistant",
    location: "Ahmedabad, Gujarat, India",
    duration: "January 2022 - May 2023",
    technologies: "Operating Systems, Data Structures, Microsoft Office Suite",
    responsibilities: [
      "Facilitated classroom engagement through support for faculty members, resulting in a measured 15% increase in student participation and 92% satisfaction rate in post-course evaluations",
      "Evaluated and supervised tests for 200+ students with 98% accuracy, measured through university assessment standards and routine audit processes",
      "Conducted targeted mentoring sessions during office hours that produced a 60% improvement in students' comprehension and application of course materials, measured through pre/post-assessment comparisons",
      "Provided one-on-one tutoring in Operating Systems to 5 struggling students, resulting in their successful course completion with significantly improved grades",
      "Managed administrative tasks including equipment maintenance, inventory tracking, data management, and document preparation while maintaining confidentiality and organization standards"
    ]
  },
  {
    company: "Space Applications Centre, ISRO",
    role: "Research Intern",
    location: "Ahmedabad, Gujarat, India",
    duration: "January 2022 - May 2022",
    technologies: "Python, PyTorch, AWS, Azure, Docker, Kubernetes, Kafka",
    responsibilities: [
      "Implemented sequential person search algorithms, achieving mAP of 48.0 on PRW dataset and 94.0 on CUHK-SYSU dataset using PyTorch frameworks",
      "Reconstructed YOLO v1 and v2 architectures for VOC dataset object detection, attaining average precision scores of 0.85 and 0.90 respectively",
      "Collaborated on computer vision algorithm development for CCTV video stream processing, resulting in 15% reduction in error rate per frame",
      "Engineered data preprocessing pipelines for large-scale video datasets, developing annotation frameworks that improved multi-camera feed analysis efficiency",
      "Deployed computer vision models to AWS and Azure cloud platforms, implementing containerization with Docker and Kubernetes for scalable inference",
      "Integrated Kafka for real-time video feed management, creating streaming data pipelines that enhanced video processing capabilities in distributed environments"
    ]
  }
];

export const projects = [
  {
    title: "Tic-Tac-Toe with MyCobot and Yolov8",
    technologies: "Python, Pytorch, MyCobot",
    githubLink: "https://github.com/HridayNagrani0/MyCobot-YOLO",
    description: "Crafted and executed a comprehensive strategy to enhance user experience through real-time game object identification and precise move execution, utilizing advanced algorithms to achieve outstanding accuracy rates exceeding 90%"
  },
  {
    title: "Lightning NeRF Extension with Semantic Information",
    technologies: "Python, Pytorch",
    githubLink: "https://github.com/HridayNagrani0/lightning-nerf",
    description: "Lead a team to re-implement the state-of-the-art Lightning NeRF framework, for efficient radiance field reconstruction in autonomous driving scenarios and extended the framework by incorporating semantic information, enabling the model to understand and reason about the scene's components semantically, leading to a 10% improvement in the model's PSNR"
  },
  {
    title: "U-Net for Real-Time Medical Image Segmentation",
    technologies: "Python, Pytorch, JetsonNano",
    githubLink: "https://github.com/HridayNagrani0/unet-medical",
    description: "Achieved high inference speed (353.28 FPS) and high segmentation accuracy (Dice Score: 0.9602) by adapting and optimizing U-Net architecture using TensorRT, enhancing real-time medical diagnostic capabilities on the Jetson Nano"
  },
  {
    title: "Localization of Lung Nodules Using Deep Learning",
    technologies: "Python, Pytorch",
    githubLink: "https://github.com/HridayNagrani0/lung-nodule-detection",
    description: "Spearheaded the adaptation and implementation of the Co-DETR framework for precise detection and localization of lung nodules in chest X-rays using the NODE21 dataset, achieving an initial Average Precision of 0.6812, significantly enhancing early cancer detection capabilities"
  }
];

export const contact = {
  email: "hnagrani@asu.edu",
  linkedin: "https://linkedin.com/in/hridaynagrani",
  github: "https://github.com/HridayNagrani0"
};

export const bio = {
  name: "Hriday Rajesh Nagrani",
  title: "MS in Robotics and Autonomous Systems",
  subtitle: "Specializing in Artificial Intelligence and Computer Vision",
  description: `I am a graduate student at Arizona State University, passionate about pushing the boundaries of AI and Computer Vision. 
  With extensive experience in developing cutting-edge solutions in Extended Reality (XR) and Computer Vision, 
  I focus on creating innovative applications that bridge the gap between theoretical research and practical implementation.
  
  My research interests include Computer Vision, Deep Learning, and Extended Reality, with a particular focus on 
  real-time applications and optimization techniques. I have successfully led multiple projects that demonstrate 
  the practical applications of these technologies in various domains.`,
  highlights: [
    "Expertise in Computer Vision and Deep Learning",
    "Experience in XR Development and Research",
    "Strong background in AI optimization and deployment",
    "Published researcher in pose estimation and medical imaging"
  ],
  profileImage: "/profile.jpg" // Add this for Hero section
};