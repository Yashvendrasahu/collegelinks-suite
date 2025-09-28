import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, Star } from "lucide-react";

interface OpportunityCardProps {
  title: string;
  company: string;
  location: string;
  type: "internship" | "placement";
  stipend?: string;
  duration?: string;
  deadline: string;
  rating?: number;
  skills: string[];
  featured?: boolean;
}

const OpportunityCard = ({
  title,
  company,
  location,
  type,
  stipend,
  duration,
  deadline,
  rating,
  skills,
  featured = false
}: OpportunityCardProps) => {
  return (
    <Card className={`card-elevated hover:border-primary/50 transition-all duration-300 ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant={type === "internship" ? "secondary" : "default"}>
                {type === "internship" ? "Internship" : "Full-time"}
              </Badge>
              {featured && (
                <Badge variant="outline" className="text-accent border-accent">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Details */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          )}
          {stipend && (
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>{stipend}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>

        {/* Deadline */}
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Deadline:</span> {deadline}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button className="btn-hero flex-1" size="sm">
            Apply Now
          </Button>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;