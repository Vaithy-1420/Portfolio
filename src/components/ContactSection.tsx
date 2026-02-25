import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+91 80563 74686";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi Vaitheeswari! I'd like to connect with you.")}`;

  const contactInfo = [
      {
        icon: Mail,
        label: "Email",
        value: "vaitheeswaripavi3007@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=vaitheeswaripavi3007@gmail.com&su=Hello%20Vaithesswari&body=Hi%20Vaithesswari,%0A%0AI%20would%20like%20to%20connect."
      },

    {
      icon: Phone,
      label: "Phone",
      value: "+91 80563 74686",
      href: "tel:+918056374686",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "WhatsApp Chat",
      href: whatsappUrl,
      isWhatsApp: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thanjavur, India",
      href: "https://share.google/6le3BQiaSH8vBUocw",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mt-2">Let's Connect</h2>
          <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or ways to collaborate.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex flex-col items-center justify-center h-full min-h-[140px] p-4 sm:p-6 backdrop-blur-sm rounded-2xl border transition-all group text-center ${
                  item.isWhatsApp 
                    ? "bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20 hover:border-[#25D366]/50" 
                    : "bg-primary-foreground/5 border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-accent/30"
                }`}
              >

                  <item.icon 
                    className={`w-7 h-7 sm:w-8 sm:h-8 mb-3 group-hover:scale-110 transition-transform ${item.isWhatsApp ? "text-[#25D366]" : "text-accent"}`} 
                    fill={item.isWhatsApp ? "#25D366" : "none"} 
                  />
                  <p className="text-primary-foreground/60 text-xs sm:text-sm mb-1">{item.label}</p>
                  <p className="text-primary-foreground font-medium text-xs sm:text-sm whitespace-nowrap">{item.value}</p>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vaitheeswaripavi3007@gmail.com&su=Hello%20Vaitheeswari&body=Hi%20Vaitheeswari,%0A%0AI%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                <Send className="mr-2" size={18} />
                Send Me an Email
              </Button>
            </a>

          </motion.div>
        </div>

        {/* Declaration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-primary-foreground/10 text-center"
        >
          <p className="text-primary-foreground/50 text-sm italic max-w-2xl mx-auto">
            "Hereby acknowledge that the above is true and authentic. I assure that I would be honest 
            and work hard towards the growth of the organization."
          </p>
          <p className="text-accent font-semibold mt-4">— Vaitheeswari T</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
