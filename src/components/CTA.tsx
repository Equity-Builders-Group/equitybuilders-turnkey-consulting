import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Schedule a free consultation to discover how TurnKey Development 
                can accelerate your growth and optimize your operations.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">30-Minute Call</h3>
                  <p className="text-sm text-muted-foreground">Discuss your challenges and goals</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Custom Strategy</h3>
                  <p className="text-sm text-muted-foreground">Receive tailored recommendations</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Rapid Results</h3>
                  <p className="text-sm text-muted-foreground">See improvements within weeks</p>
                </div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-center">Get Started Today</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Enter your email address" 
                    type="email"
                    className="flex-1 h-12"
                  />
                  <Button size="lg" className="h-12 px-8">
                    Schedule Free Consultation
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  No spam. Unsubscribe at any time. Free consultation includes a detailed assessment.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">No Obligation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">100% Confidential</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Instant Response</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;