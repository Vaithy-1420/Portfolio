import { motion } from "framer-motion";
import {
  Target,
  Lightbulb,
  Code2,
  Palette,
  Gamepad2,
  Camera,
  Music,
  Plane,
  Languages,
  Activity,
  Zap,
  } from "lucide-react";

const AboutSection = () => {
  const passions = [
    { icon: Code2, label: "Coding" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Lightbulb, label: "Learning New Tech" },
    { icon: Target, label: "Web Development" },
  ];

  // const hobbies = [
  //   { icon: Gamepad2, label: "Gaming" },
  //   { icon: Camera, label: "Photography" },
  //   { icon: Music, label: "Music" },
  //   { icon: Plane, label: "Traveling" },
  //   { icon: Zap, label: "Cricket" }, // safe icon
  // ];

  const languages = [
    { icon: Languages, label: "Tamil" },
    { icon: Languages, label: "English" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            My Objective
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Career Goal
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To secure a challenging position in the IT sector where I can
                    leverage my technical skills, problem-solving abilities, and
                    enthusiasm for learning to contribute to the growth of the
                    organization.
                  </p>
                </div>
              </div>

              {/* Languages as Cards */}
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Languages
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-4 hover:border-accent/50 transition-colors group cursor-default"
                  >
                    <lang.icon className="w-7 h-7 text-accent mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-medium text-foreground">
                      {lang.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Passions */}
            <h3 className="text-xl font-semibold text-foreground mb-6">
              My Passions
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {passions.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 hover:border-accent/50 transition-colors group cursor-default"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Hobbies */}
            {/* <h3 className="text-xl font-semibold text-foreground mb-6">
              Hobbies & Interests
            </h3> */}

            {/* <div className="grid grid-cols-2 gap-4">
              {hobbies.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 hover:border-accent/50 transition-colors group cursor-default"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
