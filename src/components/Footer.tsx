import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-academic">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">
                Campus<span className="text-primary">Connect</span>
              </span>
            </div>
            <p className="text-background/80 text-sm">
              Transforming campus career journeys through integrated placement management and seamless connections.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-background/80">
              <a href="#opportunities" className="block hover:text-primary transition-colors">
                Opportunities
              </a>
              <a href="#mentors" className="block hover:text-primary transition-colors">
                Mentors
              </a>
              <a href="#resources" className="block hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#about" className="block hover:text-primary transition-colors">
                About Us
              </a>
            </div>
          </div>

          {/* For Students */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Students</h3>
            <div className="space-y-2 text-background/80">
              <a href="#" className="block hover:text-primary transition-colors">
                Browse Internships
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Full-time Jobs
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Career Resources
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Resume Builder
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@campusconnect.edu</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Campus Placement Cell</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 CampusConnect. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;