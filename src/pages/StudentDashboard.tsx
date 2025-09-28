import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, User, Briefcase, TrendingUp, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-academic py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Yashu!</h1>
            <p className="text-muted-foreground">Track your applications and discover new opportunities</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Applications</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <Briefcase className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold text-accent">3</p>
                </div>
                <Calendar className="h-8 w-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                  <p className="text-2xl font-bold text-warning">28</p>
                </div>
                <TrendingUp className="h-8 w-8 text-warning/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Profile Score</p>
                  <p className="text-2xl font-bold text-primary">85%</p>
                </div>
                <FileText className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    company: "TechCorp Solutions",
                    position: "Software Development Intern",
                    status: "Under Review",
                    date: "2 days ago",
                    statusColor: "bg-warning"
                  },
                  {
                    company: "Analytics Pro",
                    position: "Data Science Intern", 
                    status: "Interview Scheduled",
                    date: "1 week ago",
                    statusColor: "bg-accent"
                  },
                  {
                    company: "StartupXYZ",
                    position: "Full Stack Developer",
                    status: "Application Sent",
                    date: "1 week ago", 
                    statusColor: "bg-primary"
                  }
                ].map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-semibold">{app.position}</h4>
                      <p className="text-sm text-muted-foreground">{app.company}</p>
                      <p className="text-xs text-muted-foreground">{app.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className={`${app.statusColor} text-white`}>
                        {app.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Opportunities */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <p className="text-sm text-muted-foreground">Based on your skills and preferences</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    company: "InnovateTech",
                    position: "Frontend Developer Intern",
                    skills: ["React", "JavaScript", "CSS"],
                    stipend: "₹22,000/month"
                  },
                  {
                    company: "DataFlow Systems", 
                    position: "Backend Developer",
                    skills: ["Node.js", "MongoDB", "Express"],
                    stipend: "₹6,50,000/year"
                  }
                ].map((opp, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{opp.position}</h4>
                        <p className="text-sm text-primary">{opp.company}</p>
                      </div>
                      <p className="text-sm font-medium text-accent">{opp.stipend}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {opp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button className="btn-hero w-full" size="sm">
                      Apply Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Score</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Resume uploaded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Skills added</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <span>Add portfolio projects</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm">
                  Complete Profile
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Interviews */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Upcoming Interviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-sm">Analytics Pro</h4>
                  <p className="text-xs text-muted-foreground">Technical Round</p>
                  <p className="text-xs text-accent font-medium">Tomorrow, 2:00 PM</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-sm">TechCorp Solutions</h4>
                  <p className="text-xs text-muted-foreground">HR Round</p>
                  <p className="text-xs text-primary font-medium">Oct 18, 10:00 AM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;