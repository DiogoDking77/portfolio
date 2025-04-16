import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGraduationCap, FaCode, FaMusic, FaLanguage, FaChevronLeft, FaChevronRight, FaPlay, FaTimes, FaJs, FaReact, FaAngular, FaJava, FaPython, FaAws, FaGitAlt, FaFigma, FaTrello, FaBootstrap, FaCss3Alt, FaHtml5, FaNodeJs, FaDatabase, FaMobileAlt, FaCloud, FaTools, FaGamepad, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"

const themes = {
  default: {
    background: "bg-gradient-to-br from-gray-900 to-blue-900",
    nav: {
      background: "bg-gray-800/90 backdrop-blur-sm",
      border: "border-blue-500",
      textPrimary: "text-white",
      textSecondary: "text-blue-400",
    },
    card: {
      background: "bg-gray-800/80 backdrop-blur-sm",
      border: "border-blue-500 border-2",
      textPrimary: "text-white",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-blue-400",
      secondary: "text-gray-300",
    },
    details: {
      primary: "blue-400",
      secondary: "bg-blue-500",
    }
  },
  voting: {
    background: "bg-[#FFF6CC]",
    nav: {
      background: "bg-[#F16F3E]/90 backdrop-blur-sm",
    border: "border-[#F16F3E]",
      textPrimary: "text-white",
      textSecondary: "text-[#FFF6CC]",
    },
    card: {
      background: "bg-white",
      border: "border-[#F16F3E] border-2",
      textPrimary: "text-[#F16F3E]",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-[#F16F3E]",
      secondary: "text-[#666666]",
    },
    details: {
      primary: "text-[#F16F3E]",
      secondary: "bg-[#F16F3E]",
    }
  },
  play2plat: {
    background: "bg-gradient-to-r from-[#060320] to-[#232949]",
    nav: {
      background: "bg-gradient-to-r from-[#0391D1] to-[#FF1F53] backdrop-blur-sm",
      border: "border-b-[#0391D1] border-b-4",
      textPrimary: "text-white",
      textSecondary: "text-[#0391D1]",
    },
    card: {
      background: "bg-gradient-to-r from-[#060320] to-[#232949]",
      border: "border-t-[#0391D1] border-l-[#0391D1] border-b-[#FF1F53] border-r-[#FF1F53] border-2",
      textPrimary: "text-white",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
    },
    details: {
      primary: "text-white",
      secondary: "bg-gradient-to-r from-[#0391D1] to-[#FF1F53] backdrop-blur-sm",
    }
  },
  fight: {
    background: "bg-[#000000]",
    nav: {
      background: "bg-[#8B0000]/90 backdrop-blur-sm",
    border: "border-[#8B0000]",
      textPrimary: "text-white",
      textSecondary: "text-[#FF0000]",
    },
    card: {
      background: "bg-[#0C0909]",
      border: "border-[#8B0000] border-2",
      textPrimary: "text-white",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
    },
    details: {
      primary: "text-[#FF0000]",
      secondary: "bg-[#8B0000]",
    }
  },
  traffic: {
    background: "bg-[#5C5D5E]",
    nav: {
      background: "bg-[#83E04C]/90 backdrop-blur-sm",
      border: "border-[#B2E096] border-b-4",
      textPrimary: "text-white",
      textSecondary: "text-[#4CAF50]",
    },
    card: {
      background: "bg-[#5C5D5E]",
      border: "border-[#AEADAD] border-2",
      textPrimary: "text-white",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
    },
    details: {
      primary: "text-white",
      secondary: "bg-[#BF455A]",
    }
  },
  cooking: {
    background: "bg-white",
    nav: {
      background: "bg-gradient-to-r from-[#5b5b5b] to-[#3b3b3b]",
      border: "border-[#9c680e] border-b-4",
      textPrimary: "text-white",
      textSecondary: "text-[#FFF3E0]",
    },
    card: {
      background: "bg-white",
      border: "",
      textPrimary: "text-black",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-[#b47c14]",
      secondary: "text-[#666666]",
    },
    details: {
      primary: "text-[#3b3b3b]",
      secondary: "bg-black",
    }
  },
  majorities: {
    background: "bg-[#011627]",
    nav: {
      background: "bg-[#011627]/90 backdrop-blur-sm",
      border: "border-[#798391] border-b-4",
      textPrimary: "text-white",
      textSecondary: "text-[#798391]",
    },
    card: {
      background: "bg-[#263238]",
      border: "border-[#82DAD3] border-2",
      textPrimary: "text-white",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
    },
    details: {
      primary: "text-white",
      secondary: "bg-[#EA5359]",
    }
  },
  party: {
    background: "bg-gradient-to-r from-[#8E33E6] to-[#3B81F5]",
    nav: {
      background: "bg-[#374151]/90 backdrop-blur-sm",
      border: "",
      textPrimary: "text-white",
      textSecondary: "text-[#E8F5E9]",
    },
    card: {
      background: "bg-[#374151]",
      border: "border-t-[#FF0000] border-l-[#0000FF] border-b-[#00FF00] border-r-[#FFFF00] border-4",
      textPrimary: "text-[#D1D5DA]",
      textSecondary: "text-white",
    },
    text: {
      primary: "text-white",
      secondary: "text-white",
    },
    details: {
      primary: "text-[#D1D5DA]",
      secondary: "bg-[#A855F7]",
    }
  },
};

const skills = {
  languages: ["JavaScript", "TypeScript", "Kotlin", "HTML", "CSS"],
  frameworks: ["React", "Angular", "Android Studio", "Next.js", "Phaser"],
  tools: ["Git", "GitHub", "Figma", "Quantux", "ClickUp", "Trello"],
  softSkills: ["Creativity", "Critical Thinking", "Problem Solving", "Collaboration"],
  others: ["Java", "Python","AWS", "Azure", "Bootstrap", "Power BI", "Tailwind CSS", "Socket.io", "Vite"],
};

const education = {
  school: "IPVC - ESTG",
  degree: "Computer Engineering",
  period: "2021 - 2024",
  highlights: [
    { subject: "Mobile Computing", grade: 19 },
    { subject: "Project III", grade: 17 },
    { subject: "Project IV", grade: 19 },
    { subject: "Mathematical Analysis", grade: 16 },
    { subject: "Statistics", grade: 16 },
    { subject: "Project Management", grade: 15 },
    { subject: "Database Administration", grade: 15 },
    { subject: "Human-Computer Interaction", grade: 14 },
  ],
};

const projects = [
  {
    title: "Electronic Voting Platform",
    description: "Electronic voting platform developed for Atlanse company. I was responsible for developing most of the frontend of an electronic voting platform for the company Atlanse. The platform allows clients to create various types of voting sessions — from simple polls to more complex voting processes with subcategories, multiple phases, and different voting mechanisms. Users can create polls where participants choose a single option, select multiple options, or rank the available options, with each rank position awarding a different number of points.\n This project was a significant milestone for me, as it marked my first experience in a professional environment beyond academic projects. I worked on-site at the company's office one day per week, which helped me understand the value of collaboration and accountability. I learned how to tackle problems independently while also not hesitating to ask for feedback or help when needed.",
    tech: "Micronaut, Angular, Tailwind CSS",
    link: "https://github.com/DiogoDking77/EletronicVotingPlatform",
    theme: "voting",
  },
  {
    title: "Play2Plat",
    description: "Android application for video game management. This was an academic project focused on developing an Android application to help gamers better manage their video game libraries. The main goal was to give users more control over the games they play. Each game has its own page with several interactive features: users can mark games as favorites, add them to progression lists (e.g., Want to Play, Playing, Stopped Playing, Completed), rate the games, and engage in discussions with other users about each title.\n My main responsibility was developing most of the frontend. For every new feature, if I wasn’t the one implementing it directly, I was guiding its development and validating the final result — almost taking on the role of a frontend manager within the team.\n Currently, we’re in the process of publishing the app and have already started the setup on the Google Play Console.",
    tech: "Kotlin, Android Studio",
    link: "https://github.com/Rictrix10/Play2Plat_TPCM",
    theme: "play2plat",
  },
  {
    title: "Fight or Fall",
    description: "Web platform for tournament creation and management. This is a personal side project I created, currently on hold while I explore better implementation options. The main goal was to build a flexible platform to help users create and manage their own tournaments, tailored to their preferred format. The platform is designed to support various tournament types, such as single or double elimination brackets, round-robin formats (either in a single table or split into groups), and even multi-phase tournaments.\n Users can add participants manually or generate a random draw. After the tournament is created, they can update match results or export the tournament bracket as a PNG — useful for printing or presenting on paper.\n At this stage, the platform supports single elimination brackets, with more features planned for future development.",
    tech: "React, Laravel, Supabase",
    link: "https://github.com/DiogoDking77/fight-or-fall-front",
    theme: "fight",
  },
  {
    title: "Majorities",
    description: "A simple board game similar to Tic-tac-toe with three difficulty levels: Easy, Medium, and Impossible.",
    tech: "Python, Random, Greedy, MonteCarlo",
    link: "https://github.com/kromenz/Majorities",
    theme: "majorities",
  },
  {
    title: "LetHimCook",
    description: "A simple recipe management website for organizing and sharing culinary recipes.",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP",
    link: "https://github.com/DiogoDking77/Trab1_CookRecipes",
    theme: "cooking",
  },
  {
    title: "TugaTraffic",
    description: "An endless runner game where you control a car trying to survive on the road.",
    tech: "JavaScript, Phaser",
    link: "https://github.com/kromenz/TECMUL---TP1---28234",
    theme: "traffic",
  },
  {
    title: "Smarty Party",
    description: "A browser-based party game inspired by Mario Party, featuring general knowledge questions.",
    tech: "React, Vite, Next.js, Socket.io, Tailwind",
    link: "https://github.com/DiogoDking77/Browser-Party-Client",
    theme: "party",
  },
];

const projectImages = {
  voting: [
    "/images/voting/1.png",
    "/images/voting/2.png",
    "/images/voting/3.png",
  ],
  play2plat: [
    "/images/play2plat/1.png",
    "/images/play2plat/2.png",
    "/images/play2plat/3.png",
    "/images/play2plat/4.png",
    "/images/play2plat/5.png",
  ],
  fight: [
    "/images/fight/1.png",
    "/images/fight/2.png",
    "/images/fight/3.png",
    "/images/fight/4.png",
  ],
  majorities: [
    "/images/majorities/1.png",
    "/images/majorities/2.png",
    "/images/majorities/3.png",
  ],
  cooking: [
    "/images/cooking/1.png",
    "/images/cooking/2.png",
    "/images/cooking/3.png",
    "/images/cooking/4.png",
  ],
  traffic: [
    "/images/traffic/1.png",
    "/images/traffic/2.png",
  ],
  party: [
    "/images/party/1.png",
  ],
};

export default function Portfolio() {
  const [activeTheme, setActiveTheme] = useState("default");
  const [isVisible, setIsVisible] = useState({});
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [showGame, setShowGame] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "skills", "projects", "experience", "contact"];
      const newVisibility = {};
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisibility[section] = rect.top < window.innerHeight - 100;
        }
      });
      
      // Só atualiza se houver mudança real na visibilidade
      setIsVisible(prev => {
        const hasChanges = sections.some(section => prev[section] !== newVisibility[section]);
        return hasChanges ? newVisibility : prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageChange = (projectId, direction) => {
    const images = projectImages[projectId];
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + direction + images.length) % images.length
    }));
  };

  const ProjectCard = ({ project, index }) => {
    const isExpanded = expandedProject === project.theme;
    const isTraffic = project.theme === 'traffic';

    return (
      <motion.div
        className={`relative group rounded-2xl shadow-lg transition-all duration-300 
          ${themes[project.theme].card.background} ${themes[project.theme].card.border}
          ${isExpanded ? 'col-span-1 md:col-span-2 row-span-2' : ''}`}
        initial={false}
        whileHover={{ scale: isExpanded ? 1.05 : 1.02 }}
        animate={{ 
          scale: isExpanded ? 1.05 : 1,
        }}
        onMouseEnter={() => setActiveTheme(project.theme)}
        onMouseLeave={() => setActiveTheme('default')}
        onClick={() => {
          setExpandedProject(isExpanded ? null : project.theme);
          if (!currentImageIndex[project.theme]) {
            setCurrentImageIndex(prev => ({ ...prev, [project.theme]: 0 }));
          }
        }}
      >
        <div className="p-6">
          <h3 className={`${themes[project.theme].text.primary} text-xl font-semibold mb-4 capitalize`}>
            {project.title}
          </h3>
          <p
            className={`
              mt-4 ${themes[project.theme].card.textPrimary}
              ${isExpanded ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'}
            `}
          >
            {project.description}
          </p>
          
          {isExpanded && projectImages[project.theme] && (
            <motion.div 
              className="mt-4 relative h-64 overflow-hidden rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div 
                className="w-full h-full cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(projectImages[project.theme][currentImageIndex[project.theme] || 0]);
                }}
              >
                <img
                  src={projectImages[project.theme][currentImageIndex[project.theme] || 0]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Clique para expandir
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageChange(project.theme, -1);
                  }}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 pointer-events-auto"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleImageChange(project.theme, 1);
                  }}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 pointer-events-auto"
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.split(", ").map((tech, i) => (
              <span 
                key={i}
                className={`px-2 py-1 text-sm rounded-full ${themes[project.theme].card.textSecondary} ${themes[project.theme].details.secondary}`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center space-x-2 ${themes[project.theme].details.primary} 
                hover:opacity-80 transition-opacity`}
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
            {isTraffic && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGame(true);
                }}
                className={`inline-flex items-center space-x-2 ${themes[project.theme].details.primary}
                  hover:opacity-80 transition-opacity bg-[#FFC107] text-[#263238] px-4 py-2 rounded-full`}
              >
                <FaPlay className="mr-2" />
                <span>Play Game</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const GameModal = () => (
    <AnimatePresence>
      {showGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
          <div className="relative w-full h-full max-w-[1280px] max-h-[720px] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowGame(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <FaTimes size={24} />
            </button>
            <div className="w-full h-full">
              <iframe
                src="https://main--tuggatraffic.netlify.app"
                className="w-full h-full"
                title="TugaTraffic Game"
                style={{ 
                  aspectRatio: '16/9',
                  border: 'none',
                  pointerEvents: 'auto'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const ImageModal = () => (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full"
            >
              <FaTimes size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Project Screenshot"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className={`${themes[activeTheme].background} min-h-screen transition-all duration-500`}>
      {/* Header */}
      <header className={`${themes[activeTheme].nav.background} ${themes[activeTheme].nav.border} fixed w-full top-0 z-50 flex justify-between items-center py-4 px-6 backdrop-blur-sm`}>
        <motion.h1 
          className={`text-2xl md:text-3xl font-bold ${themes[activeTheme].nav.textPrimary}`}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Diogo Reis
        </motion.h1>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>About</a>
          <a href="#education" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>Education</a>
          <a href="#skills" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>Skills</a>
          <a href="#projects" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>Projects</a>
          <a href="#experience" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>Experience</a>
          <a href="#contact" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`}>Contact</a>
        </nav>
        
        {/* Botão menu mobile */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes className={themes[activeTheme].nav.textPrimary} /> : <FaBars className={themes[activeTheme].nav.textPrimary} />}
        </button>
        
        {/* Menu mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className={`absolute top-full left-0 right-0 ${themes[activeTheme].nav.background} ${themes[activeTheme].nav.border} border-t flex flex-col items-center py-4 space-y-4 shadow-lg`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a href="#about" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#education" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Education</a>
              <a href="#skills" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#projects" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#experience" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" className={`${themes[activeTheme].nav.textPrimary} hover:${themes[activeTheme].nav.textSecondary} transition-colors`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="pt-20 md:pt-24 px-4 md:px-16">
        {/* Hero Section - Melhorando a responsividade */}
        <motion.section 
          className={`min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-8 px-2 md:px-4 relative overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Elements - mantidos sem alteração */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="flex-1 max-w-xl relative z-10 px-4 md:px-0">

            <motion.h1 
              className={`text-4xl md:text-6xl font-bold ${themes[activeTheme].text.primary} mb-4 leading-tight`}
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Hi, I'm Diogo Reis
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl ${themes[activeTheme].text.secondary} mb-6 md:mb-8`} 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              Junior Frontend & Mobile Developer
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <a 
                href="#contact" 
                className={`group ${themes[activeTheme].details.secondary} ${themes[activeTheme].card.textSecondary} px-6 sm:px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center`}
              >
                <span className="mr-2">Contact Me</span>
                <FaEnvelope className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className={`group ${themes[activeTheme].card.border} ${themes[activeTheme].card.textPrimary} px-6 sm:px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center`}
              >
                <span className="mr-2">View Projects</span>
                <FaCode className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="mt-8 md:mt-12 flex items-center justify-center md:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="https://github.com/DiogoDking77" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/diogo-dos-reis-8260102b3" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center relative z-10 mb-8 md:mb-4 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <div className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden ${themes[activeTheme].card.border} shadow-lg`}>
                <img
                  src="/images/profile.jpg"
                  alt="Diogo Reis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 ${themes[activeTheme].details.secondary} ${themes[activeTheme].card.textSecondary} px-4 py-2 rounded-full text-sm font-medium`}>
                Available for hire
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className={`py-16`}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold ${themes[activeTheme].text.primary} mb-8`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className={`text-lg ${themes[activeTheme].text.secondary}`}>
                I'm a recent Computer Engineering graduate passionate about frontend and mobile development.
                My journey is driven by curiosity and a constant desire to learn and innovate.
              </p>
              <p className={`text-lg ${themes[activeTheme].text.secondary}`}>
                Beyond programming, I have a 5th Grade in Music and Transverse Flute,
                which helped me develop discipline, creativity, and teamwork skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg flex flex-col`}>
                <h3 className={`${themes[activeTheme].text.primary} text-xl font-semibold mb-2`}>Languages</h3>
                <ul className={`${themes[activeTheme].text.secondary}`}>
                  <li>Portuguese - Native</li>
                  <li>English - B1/B2</li>
                </ul>
              </div>
              <div className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg flex flex-col`}>
                <h3 className={`${themes[activeTheme].text.primary} text-xl font-semibold mb-2`}>Interests</h3>
                <ul className={`${themes[activeTheme].text.secondary}`}>
                  <li>Web Development</li>
                  <li>Mobile Development</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education" 
          className={`py-16`}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.education ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold ${themes[activeTheme].text.primary} mb-8`}>Education</h2>
          <div className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg flex flex-col`}>
            <div className="flex items-center mb-4">
              <FaGraduationCap className={`text-4xl font-semibold mr-4 ${themes[activeTheme].text.primary}`} />
              <div>
                <h3 className={`${themes[activeTheme].text.primary} text-2xl font-semibold`}>{education.school}</h3>
                <p className={`${themes[activeTheme].card.textPrimary}`}>{education.degree} | {education.period}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {education.highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex justify-between items-center p-3 ${themes[activeTheme].details.secondary} rounded`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={`${themes[activeTheme].card.textSecondary}`}>{item.subject}</span>
                  <span className={`${themes[activeTheme].card.textSecondary} font-semibold`}>{item.grade}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold ${themes[activeTheme].text.primary} mb-8`}>Skills</h2>
          
          {/* Lista de habilidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div 
                key={category}
                className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg flex flex-col`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className={`${themes[activeTheme].text.primary} text-2xl font-semibold mb-4 capitalize`}>          
                  <span>{category.replace(/([A-Z])/g, " $1").trim()}</span>
                </h3>
                <div className="flex flex-wrap gap-4">
                  {items.map((item, i) => (
                    <span 
                      key={i}
                      className={`${themes[activeTheme].card.textSecondary} ${themes[activeTheme].details.secondary} px-5 py-2 rounded-full text-base flex items-center space-x-2`}
                    >
                      {item === 'JavaScript' && <FaJs className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'TypeScript' && <FaJs className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Kotlin' && <FaMobileAlt className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Java' && <FaJava className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Python' && <FaPython className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'React' && <FaReact className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Angular' && <FaAngular className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Android Studio' && <FaMobileAlt className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Next.js' && <FaNodeJs className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Phaser' && <FaGamepad className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Git' && <FaGitAlt className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'GitHub' && <FaGithub className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Figma' && <FaFigma className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Quantux' && <FaTools className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'ClickUp' && <FaTools className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Trello' && <FaTrello className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'AWS' && <FaAws className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Azure' && <FaCloud className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Bootstrap' && <FaBootstrap className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Power BI' && <FaDatabase className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Tailwind CSS' && <FaCss3Alt className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Socket.io' && <FaNodeJs className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      {item === 'Vite' && <FaTools className={`${themes[activeTheme].card.textSecondary} text-xl`} />}
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold mb-8 ${themes[activeTheme].text.primary}`}>Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.theme} 
                project={project} 
                index={index}
              />
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.experience ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold ${themes[activeTheme].text.primary} mb-8`}>Experience</h2>
          <div className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg`}>
            <h3 className={`${themes[activeTheme].text.primary} text-xl font-semibold mb-4 capitalize`}>Project III – Collaboration with Atlanse</h3>
            <p className={`text-lg mb-4 ${themes[activeTheme].text.secondary}`}>
              During my degree, I participated in Project III course, where I worked
              directly with Atlanse company in developing the Electronic Voting Platform.
            </p>
            <ul className={`list-disc list-inside space-y-2 ${themes[activeTheme].text.secondary}`}>
              <li>Frontend development of the voting platform</li>
              <li>Weekly meetings at the company's tech center</li>
              <li>Team work and professional communication</li>
              <li>Integration with other development team members</li>
            </ul>
          </div>
        </motion.section>

      {/* Contact Section */}
        <motion.section 
          id="contact" 
          className={`py-16 text-center`}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-4xl font-semibold mb-8 ${themes[activeTheme].text.primary}`}>Contact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: FaEnvelope,
                text: "diogoabreis@gmail.com",
                href: "mailto:diogoabreis@gmail.com"
              },
              {
                icon: FaPhone,
                text: "+351 926 875 523",
                href: "tel:+351926875523"
              },
              {
                icon: FaGithub,
                text: "GitHub",
                href: "https://github.com/DiogoDking77"
              },
              {
                icon: FaLinkedin,
                text: "LinkedIn",
                href: "https://linkedin.com/in/diogo-dos-reis-8260102b3"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${themes[activeTheme].card.background} ${themes[activeTheme].card.border} p-6 rounded-lg shadow-lg`}
                whileHover={{ scale: 1.05 }}
              >
                <contact.icon className={`text-3xl ${themes[activeTheme].text.primary} mx-auto mb-2`} />
                <p className={themes[activeTheme].text.secondary}>{contact.text}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>
        <Analytics />
        </div>

      {/* Footer */}
      <footer className={`${themes[activeTheme].nav.background} mt-16 py-8 text-center`}>
        <p className={themes[activeTheme].text.primary}>&copy; 2024 Diogo Reis. All rights reserved.</p>
      </footer>

      <GameModal />
      <ImageModal />
    </div>
  );
}
