import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, Zap, Shield, Rocket } from 'lucide-react';
import heroBackground from '@assets/generated_images/AI_technology_hero_background_e75196f2.png';
import dashboardMockup from '@assets/generated_images/AI_dashboard_interface_mockup_49e51bf1.png';

export default function Hero() {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked');
  };

  const features = [
    { icon: Zap, text: 'Deploy 20+ AI tools instantly' },
    { icon: Shield, text: 'Enterprise-grade security' },
    { icon: Rocket, text: 'White-label ready in minutes' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Ultimate White-Label AI Platform</span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Deploy a comprehensive suite of 20+ AI tools under your brand. Enterprise-grade platform ready for white-label deployment in minutes, not months.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-foreground">
                    <div className="p-1 rounded-md bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={handleGetStarted}
                data-testid="button-get-started"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group backdrop-blur"
                onClick={handleWatchDemo}
                data-testid="button-watch-demo"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Deploy in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right column - Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-xl border bg-card p-2 shadow-2xl">
              <img 
                src={dashboardMockup} 
                alt="AIToolsSuite Pro Dashboard" 
                className="w-full rounded-lg"
                data-testid="img-dashboard-mockup"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg">
                20+ AI Tools
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border px-3 py-2 rounded-lg text-sm shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-muted-foreground">Live Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}