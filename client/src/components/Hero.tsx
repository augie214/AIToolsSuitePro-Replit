import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle, DollarSign, TrendingUp, Crown, Zap, Users, Award, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBackground from '@assets/generated_images/Luxury_AI_entrepreneurs_workspace_15c53741.png';
import wealthDashboard from '@assets/generated_images/Premium_AI_wealth_dashboard_c37d0810.png';

// Animated Revenue Counter Component
function RevenueCounter({ target, label, symbol = '$', duration = 2000 }: { target: number; label: string; symbol?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className={`text-center space-y-2 animate-count-up ${isVisible ? 'opacity-100' : 'opacity-0'}`} data-testid={`counter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-3xl lg:text-4xl font-black text-gradient-electric shimmer">
        {symbol}{count.toLocaleString()}+
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const handleStartWealth = () => {
    console.log('Start Wealth Generation clicked');
  };

  const handleViewCaseStudy = () => {
    console.log('View Case Study clicked');
  };

  const wealthFeatures = [
    { icon: DollarSign, text: '20+ AI revenue streams activated instantly', gradient: 'text-gradient-gold' },
    { icon: TrendingUp, text: 'Automated 6-figure monthly income potential', gradient: 'text-gradient-electric' },
    { icon: Crown, text: 'Exclusive millionaire-tier platform access', gradient: 'text-gradient-gold' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-premium glow-electric">
      {/* Luxury Background with Premium Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Luxury AI Entrepreneurs Workspace" 
          className="w-full h-full object-cover opacity-20"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left column - Premium Content */}
          <div className="space-y-10">
            {/* Exclusive Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-wealth border border-luxury-gold/30 text-luxury-gold text-sm font-bold shimmer">
              <Crown className="w-5 h-5" />
              <span>Exclusive Million-Dollar AI Platform</span>
            </div>

            {/* Main Wealth Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.9]">
                Generate 
                <span className="block text-gradient-gold shimmer">
                  $10K-$100K+
                </span>
                <span className="block text-gradient-electric">
                  Monthly Revenue
                </span>
                <span className="text-3xl lg:text-4xl font-medium text-muted-foreground">
                  with AI Automation
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-platinum leading-relaxed max-w-2xl">
                Deploy a premium suite of 20+ AI wealth generation tools. Turn your expertise into automated passive income streams that generate millions while you sleep.
              </p>
            </div>

            {/* Live Revenue Counter Grid */}
            <div className="grid grid-cols-3 gap-6 p-6 rounded-xl bg-card/50 backdrop-blur border border-electric-blue/20 hover-elevate">
              <RevenueCounter target={10000} label="Monthly MRR" duration={1500} />
              <RevenueCounter target={50000} label="Quarterly Goal" duration={2000} />
              <RevenueCounter target={100000} label="Annual Target" duration={2500} />
            </div>

            {/* Premium Wealth Features */}
            <div className="space-y-4">
              {wealthFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4 text-foreground hover-elevate p-3 rounded-lg" data-testid={`feature-${index}`}>
                    <div className="p-2 rounded-lg bg-gradient-premium">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className={`font-semibold text-lg ${feature.gradient}`}>{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-wealth text-black font-bold text-lg px-8 py-4 group glow-electric"
                onClick={handleStartWealth}
                data-testid="button-start-wealth"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Start Wealth Generation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group backdrop-blur border-electric-blue/50 text-electric-blue font-semibold text-lg px-8 py-4"
                onClick={handleViewCaseStudy}
                data-testid="button-case-study"
              >
                <Award className="w-5 h-5 mr-2" />
                View $100K Case Study
              </Button>
            </div>

            {/* Exclusive Social Proof */}
            <div className="flex flex-wrap items-center gap-8 pt-8 text-platinum">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-wealth-success" />
                <span className="font-medium">Millionaire-tier exclusive access</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-wealth-success" />
                <span className="font-medium">Deploy wealth systems in 60 seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-wealth-success" />
                <span className="font-medium">Join 500+ millionaire entrepreneurs</span>
              </div>
            </div>
          </div>

          {/* Right column - Premium AI Wealth Dashboard */}
          <div className="relative lg:scale-110">
            <div className="relative rounded-2xl border-2 border-electric-blue/30 bg-card/20 backdrop-blur p-4 shadow-2xl glow-electric hover-elevate">
              <img 
                src={wealthDashboard} 
                alt="Premium AI Wealth Generation Dashboard" 
                className="w-full rounded-xl"
                data-testid="img-wealth-dashboard"
              />
              {/* Floating Revenue Indicators */}
              <div className="absolute -top-6 -right-6 bg-gradient-wealth text-black px-4 py-3 rounded-xl text-sm font-black shadow-xl animate-pulse" data-testid="indicator-revenue">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>$47,392 This Month</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur border border-electric-blue/50 px-4 py-3 rounded-xl text-sm shadow-xl" data-testid="indicator-status">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-wealth-success animate-pulse" />
                  <span className="text-electric-blue font-semibold">20 AI Systems Active</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-bold shadow-lg transform -rotate-12" data-testid="indicator-tools">
                AI Autopilot ON
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}