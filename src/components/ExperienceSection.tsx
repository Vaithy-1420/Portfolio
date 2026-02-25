import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Web Applications Developer (Intern)",
      company: "Crud Operations Private Limited",
      location: "Chennai",
      duration: "July 2024 - October 2024",
      current: false,
      responsibilities: [
        "Developed and managed web pages and product listings using WordPress platform",
        "Customized themes and templates to align with client branding",
        "Handled product catalog design and content updates for eCommerce workflows",
        "Worked on responsive layouts and basic plugin configuration",
        "Assisted in database administration and ad-serving logic",
      ],
      // projects: [
      //   { name: "", url: "https://eautospares.com/" },
      // ],
    },
    {
      title: "Android Application Developer (Intern)",
      company: "Equadriga",
      location: "Trichy",
      duration: "March 2024 | 1 Month",
      current: false,
      responsibilities: [
        "Gained hands-on experience in Android app development",
        "Worked on basic UI, activity lifecycle, and integrating backend APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Career</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Work Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className={`absolute top-2 -left-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.current 
                    ? 'bg-accent border-accent animate-pulse' 
                    : 'bg-background border-accent'
                }`} />
              </div>

              <div className="glass-card p-6 ml-4 hover:border-accent/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                {/* {exp.projects && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Projects Worked On:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <a
                          key={project.name}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {project.name}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
