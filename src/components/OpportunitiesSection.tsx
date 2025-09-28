import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp } from "lucide-react";
import OpportunityCard from "./OpportunityCard";

const mockOpportunities = [
  {
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    location: "Bangalore",
    type: "internship" as const,
    stipend: "₹25,000/month",
    duration: "6 months",
    deadline: "15 Oct 2024",
    rating: 4.5,
    skills: ["React", "Node.js", "Python", "MongoDB"],
    featured: true
  },
  {
    title: "Data Science Intern",
    company: "Analytics Pro",
    location: "Hyderabad",
    type: "internship" as const,
    stipend: "₹30,000/month",
    duration: "4 months",
    deadline: "20 Oct 2024",
    rating: 4.3,
    skills: ["Python", "Machine Learning", "SQL", "Tableau"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Mumbai",
    type: "placement" as const,
    stipend: "₹8,00,000/year",
    deadline: "25 Oct 2024",
    rating: 4.7,
    skills: ["React", "Django", "PostgreSQL", "AWS"],
    featured: true
  },
  {
    title: "UI/UX Design Intern",
    company: "DesignHub",
    location: "Pune",
    type: "internship" as const,
    stipend: "₹20,000/month",
    duration: "3 months",
    deadline: "18 Oct 2024",
    rating: 4.4,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  }
];

const popularSkills = [
  "React", "Python", "Node.js", "Java", "Machine Learning", 
  "SQL", "JavaScript", "AWS", "Docker", "MongoDB"
];

const OpportunitiesSection = () => {
  return (
    <section className="py-20" id="opportunities">
      <div className="container-academic">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover internships and full-time positions from top companies
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search opportunities, companies, or skills..." 
                className="pl-10 py-6 text-lg"
              />
            </div>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Popular Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold">Popular Skills:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockOpportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center pt-8">
            <Button className="btn-success" size="lg">
              Load More Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;