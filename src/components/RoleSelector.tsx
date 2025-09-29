import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Building, Award } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    id: "student",
    title: "Student",
    description: "Access internships, placements, and track your applications",
    icon: GraduationCap,
    features: ["Browse opportunities", "One-click applications", "Track progress", "AI recommendations"],
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: "faculty",
    title: "Faculty Mentor",
    description: "Guide students and approve their applications",
    icon: Users,
    features: ["Approve applications", "Track student progress", "Provide feedback", "View analytics"],
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    id: "recruiter",
    title: "Recruiter",
    description: "Find the best talent for your organization",
    icon: Building,
    features: ["Post opportunities", "Browse profiles", "Schedule interviews", "Manage applications"],
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    id: "placement_cell",
    title: "Placement Cell",
    description: "Comprehensive management and analytics dashboard",
    icon: Award,
    features: ["Real-time analytics", "Manage all users", "Generate reports", "System configuration"],
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  }
];

const RoleSelector = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-academic">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Role</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CampusConnect provides tailored experiences for every stakeholder in the placement ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card key={role.id} className="card-elevated hover:border-primary/30 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-4 rounded-full ${role.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${role.color}`} />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {role.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className="w-full btn-hero group-hover:shadow-lg transition-all duration-300" 
                    size="sm"
                  >
                    <Link to={`/auth?mode=signup&role=${role.id}`}>
                      Get Started as {role.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleSelector;