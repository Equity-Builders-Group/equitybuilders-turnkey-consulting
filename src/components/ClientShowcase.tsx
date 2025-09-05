import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Users, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const ClientShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Oakwood Residential Development",
      location: "Austin, TX",
      status: "Under Construction",
      value: "$1.2M",
      timeline: "8 months",
      team: "4 units",
      images: [
        "/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png",
        "/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png"
      ],
      story: "From vacant lot to luxury 4-unit development. This project showcases our end-to-end process from land acquisition through final construction.",
      highlights: ["Zoning Approval in 30 Days", "15% Under Budget", "Pre-sold 2 Units"]
    },
    {
      id: 2,
      title: "Riverside Family Homes",
      location: "Houston, TX",
      status: "Planning Phase",
      value: "$2.1M",
      timeline: "12 months",
      team: "6 units",
      images: [
        "/lovable-uploads/993aef6a-33f5-465f-8eba-159acc3d0dd8.png",
        "/lovable-uploads/5df938db-8063-4672-9fdb-4bb75420dbc7.png"
      ],
      story: "Transforming underutilized riverside property into modern family housing. Complex permitting and environmental considerations successfully navigated.",
      highlights: ["Environmental Clearance", "Community Support", "Innovative Design"]
    },
    {
      id: 3,
      title: "Downtown Infill Project",
      location: "Dallas, TX",
      status: "Completed",
      value: "$950K",
      timeline: "6 months",
      team: "3 units",
      images: [
        "/lovable-uploads/d9e364d3-b8e5-4fa9-aa0f-abb5fc4965a8.png",
        "/lovable-uploads/EB_Turnkey_LinkThumb.png"
      ],
      story: "Urban infill success story. Maximized density while respecting neighborhood character. All units sold before completion.",
      highlights: ["100% Pre-sold", "Neighborhood Integration", "ROI: 28%"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "Under Construction": return "bg-yellow-500";
      case "Planning Phase": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-background via-background/50 to-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-full border border-primary/20 mb-8">
            <span className="text-primary font-bold text-xl">📸 PROJECT GALLERY</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground">
            CLIENT
            <span className="block text-primary drop-shadow-lg">
              SHOWCASE
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Real projects, real results. See how we've transformed visions into reality for developers just like you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                selectedProject === project.id ? 'border-primary shadow-xl' : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <CardContent className="p-0">
                {/* Image Gallery */}
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <div className="flex transition-transform duration-500 ease-in-out">
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} - Main view`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getStatusColor(project.status)} text-white font-semibold`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Image count */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <ImageIcon size={14} />
                    {project.images.length}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-primary" />
                      {project.value}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-primary" />
                      {project.timeline}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="text-primary" />
                      {project.team}
                    </div>
                  </div>

                  {/* Expandable content */}
                  {selectedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-border animate-in slide-in-from-top-2 duration-300">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.story}
                      </p>
                      
                      {/* Project highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-primary">Key Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Additional images */}
                      {project.images.length > 1 && (
                        <div className="grid grid-cols-2 gap-2">
                          {project.images.slice(1).map((image, idx) => (
                            <img 
                              key={idx}
                              src={image} 
                              alt={`${project.title} - Additional view ${idx + 1}`}
                              className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Click to expand hint */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-primary font-medium">
                      {selectedProject === project.id ? 'Click to collapse' : 'Click to view details'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientShowcase;