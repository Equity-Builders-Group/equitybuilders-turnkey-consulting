import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Users, Image as ImageIcon, Search, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ClientShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Glen Ave Development",
      location: "Houston, TX",
      status: "Pending Construction",
      value: "$1.2M",
      timeline: "6 months",
      team: "4 units",
      images: [
        "/lovable-uploads/4a2cd88c-1e89-4f93-a9e5-ccb59cbce7a6.png",
        "/lovable-uploads/f48a2dc0-af37-42d8-824b-fc482c4ceb7f.png"
      ],
      story: "From vacant lot to luxury 4-unit, two separate duplex development. This project showcases our end-to-end process from land acquisition through final construction.",
      highlights: ["Zoning Approval in 30 Days", "15% Under Budget", "Pre-sold 2 Units"]
    },
    {
      id: 2,
      title: "Calhoun Estates Development",
      location: "Houston, TX",
      status: "Planning Phase",
      value: "$800K",
      timeline: "9 months",
      team: "4 units",
      images: [
        "/lovable-uploads/5df938db-8063-4672-9fdb-4bb75420dbc7.png",
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

  const openLightbox = (images: string[], startIndex: number = 0) => {
    setLightboxImages(images);
    setCurrentImageIndex(startIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const handleCardClick = (e: React.MouseEvent, projectId: number) => {
    // Prevent card expansion when clicking on images
    if ((e.target as HTMLElement).closest('.image-clickable')) {
      return;
    }
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const handleImageClick = (e: React.MouseEvent, images: string[], index: number = 0) => {
    e.stopPropagation();
    openLightbox(images, index);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-background via-background/50 to-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 backdrop-blur-sm px-8 py-4 rounded-full border border-primary/20 mb-8">
            <span className="text-primary font-bold text-xl">PROJECT GALLERY</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground drop-shadow-lg">
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
              className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 transform ${
                selectedProject === project.id 
                  ? 'border-green-500 shadow-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 -translate-y-6 scale-105' 
                  : 'hover:-translate-y-2 border-border hover:border-primary/50'
              }`}
              onClick={(e) => handleCardClick(e, project.id)}
            >
              <CardContent className="p-0">
                {/* Image Gallery */}
                <div className="relative h-64 overflow-hidden rounded-t-lg image-clickable">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out cursor-pointer group/image"
                    onClick={(e) => handleImageClick(e, project.images, 0)}
                  >
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} - Main view`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Magnifying glass overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Search className="w-12 h-12 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <Badge className={`${getStatusColor(project.status)} text-white font-semibold`}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Image count */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 pointer-events-none">
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
                            <div 
                              key={idx}
                              className="relative group/thumb cursor-pointer image-clickable"
                              onClick={(e) => handleImageClick(e, project.images, idx + 1)}
                            >
                              <img 
                                src={image} 
                                alt={`${project.title} - Additional view ${idx + 1}`}
                                className="w-full h-24 object-cover rounded-lg hover:scale-105 transition-transform"
                              />
                              {/* Magnifying glass overlay for thumbnails */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                                <Search className="w-6 h-6 text-white animate-pulse" />
                              </div>
                            </div>
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

        {/* Lightbox Dialog */}
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
            <div className="relative">
              {/* Close button */}
              <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              {/* Main image */}
              <div className="relative flex items-center justify-center min-h-[60vh]">
                <img 
                  src={lightboxImages[currentImageIndex]} 
                  alt={`Enlarged view ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Navigation buttons */}
                {lightboxImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {/* Image counter */}
              {lightboxImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} of {lightboxImages.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default ClientShowcase;