import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students and professionals in a modern academic setting"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
      </div>

      <div className="container-academic relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transform Your
                <span className="text-primary block">Campus Career</span>
                Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Streamline internships, placements, and career opportunities with our integrated campus portal. Connect students, mentors, and recruiters seamlessly.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero text-lg px-8 py-6" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card rounded-xl p-6 card-elevated">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Student Portal</h3>
                  <p className="text-muted-foreground">Manage profiles, apply to opportunities, track applications</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mentor Dashboard</h3>
                  <p className="text-muted-foreground">Guide students, approve applications, provide feedback</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Award className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Placement Cell</h3>
                  <p className="text-muted-foreground">Analytics, reporting, and comprehensive management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;