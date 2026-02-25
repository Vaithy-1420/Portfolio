import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6"
            >
              Open to Opportunities
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
            >
              Hi, I'm{" "}
              <span className="text-accent">Vaitheeswari T</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-primary-foreground/80 font-medium mb-6"
            >
              Junior Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary-foreground/60 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Web Developer
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=vaitheeswaripavi3007@gmail.com&su=Hello%20Vaitheswari&body=Hi%20Vaitheswari,%0A%0AI%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">vaitheeswaripavi3007@gmail.com</span>
              </a>

              <a
                href="tel:+918300529371"
                className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg text-primary-foreground/80 hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+91 80563 74686</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-2 justify-center lg:justify-start text-primary-foreground/60 mb-8"
            >
              <MapPin size={16} />
              <span className="text-sm">Thanjavur, Tamil Nadu, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2" size={18} />
                Get In Touch
              </Button>
           <Button
  size="lg"
  variant="default"
  className="font-semibold px-8"
  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }
>
  View Projects
</Button>
            </motion.div>
          </motion.div>

          {/* Right content - Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: "350px", height: "350px", margin: "auto" }}
              />
              <motion.div
                className="absolute inset-4 border border-primary-foreground/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ width: "320px", height: "320px", margin: "auto" }}
              />

              {/* Code-like decoration */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-primary-foreground/5 flex items-center justify-center backdrop-blur-sm border border-primary-foreground/10">
                <div className="text-center">
                  <div className="font-mono text-accent text-sm mb-2">{"<Developer />"}</div>
                  <div className="text-4xl font-bold text-primary-foreground mb-2">VAITHEESWARI</div>
                  <div className="font-mono text-primary-foreground/60 text-xs">console.log("Hello World!")</div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 bg-card rounded-lg shadow-card text-sm font-medium text-card-foreground"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💻 React
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-2 bg-card rounded-lg shadow-card text-sm font-medium text-card-foreground"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                🎨 UI/UX
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 px-3 py-2 bg-card rounded-lg shadow-card text-sm font-medium text-card-foreground"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                ⚡ JavaScript
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
