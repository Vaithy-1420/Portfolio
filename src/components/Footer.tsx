import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Vaitheswari T. All rights reserved.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made By Vaithesswari.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
