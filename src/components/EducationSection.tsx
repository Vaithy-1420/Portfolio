import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Mookambigai College of Engineering, Pudukottai",
      duration: "2020 – 2024",
      score: "CGPA: 82.22",
      type: "degree",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: " Government Girls Higher Secondary School, Peravurani",
      duration: "2018 – 2020",
      score: "65%",
      type: "hsc",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: " Government High School, Naduvukkurichi",
      duration: "2017 – 2018",
      score: "80%",
      type: "sslc",
    },
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Background</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-accent/30 transition-all hover:shadow-elevated"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${
                    index === 0 ? 'bg-accent/20' : 'bg-muted'
                  }`}>
                    <GraduationCap className={`w-6 h-6 ${
                      index === 0 ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className={`text-lg font-semibold ${
                        index === 0 ? 'text-foreground' : 'text-foreground/90'
                      }`}>
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          index === 0 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {edu.score}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-2">{edu.institution}</p>

                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
