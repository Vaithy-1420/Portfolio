import { motion } from "framer-motion";
import {
  Hand,
  Camera,
  Accessibility,
  Brain,
  Eye,
  AlertTriangle,
  ShieldCheck,
  UtensilsCrossed,
  MapPin,
  ShoppingCart,
  Clock,
  ExternalLink,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hand Gestures Virtual Mouse Interaction",
      description:
        "AI hand control technology designed to empower individuals with limited hand usage to interact with computers using hand movement recognition.",
      headerIcon: Hand,
      highlights: [
        { icon: Hand, text: "Hand gesture recognition" },
        { icon: Camera, text: "Real-time webcam tracking" },
        { icon: Accessibility, text: "Accessibility-focused design" },
        { icon: Brain, text: "AI & Machine Learning powered" },
      ],
      tags: ["Python", "OpenCV", "Machine Learning"],
      featured: true,
    },
    {
      title: "Driver Drowsiness Detection System",
      description:
        "A real-time AI-powered system that monitors driver alertness using facial landmark detection to prevent accidents caused by fatigue and drowsiness.",
      headerIcon: Eye,
      highlights: [
        { icon: Eye, text: "Real-time eye monitoring" },
        { icon: AlertTriangle, text: "Drowsiness alert system" },
        { icon: Camera, text: "Facial landmark detection" },
        { icon: ShieldCheck, text: "Road safety focused" },
      ],
      tags: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "Dlib"],
      // link: "https://bigpartner.in/",
      featured: true,
    },
    {
      title: "Food Delivery App",
      description:
        "A full-featured food delivery platform connecting customers with local restaurants, offering seamless ordering, real-time tracking, and a smooth checkout experience.",
      headerIcon: UtensilsCrossed,
      highlights: [
        { icon: UtensilsCrossed, text: "Restaurant & menu management" },
        { icon: MapPin, text: "Real-time order tracking" },
        { icon: ShoppingCart, text: "Seamless ordering experience" },
        { icon: Clock, text: "Fast & scheduled delivery" },
      ],
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      // link: "https://eautospares.com/",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card overflow-hidden group ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              {/* Project header */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <project.headerIcon className="w-6 h-6 text-accent" />
                  </div>
                  {/* {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground hover:text-accent"
                      />
                    </a>
                  )} */}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="px-6 pb-4">
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <highlight.icon size={14} className="text-accent" />
                      <span>{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="px-6 pb-6 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;