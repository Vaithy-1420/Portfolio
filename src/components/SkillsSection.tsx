import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 60 },
        { name: "JavaScript", level: 80 },
        { name: "Java", level: 60 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        {name: "Bootstrap", level: 80 },
        { name: "React", level: 70 },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: 70 },
        { name: "Sql", level: 75 },
      ],
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma (UI/UX)", level: 70 },
        { name: "Canva", level: 75 },
        { name: "VS Code", level: 70 },

      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "AI Tools", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-5 pb-3 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
