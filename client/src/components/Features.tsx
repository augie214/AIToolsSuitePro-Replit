import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Target, 
  Zap, 
  BarChart3, 
  Bot, 
  Mail, 
  Users, 
  Shield, 
  Gauge, 
  Crown, 
  Settings,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';

export default function Features() {
  const handleLearnMore = (tool: string) => {
    console.log(`Learn more clicked for: ${tool}`);
  };

  const millionDollarTools = [
    {
      icon: DollarSign,
      title: 'AI Revenue Optimizer',
      description: 'Generate $15K-$50K monthly with intelligent profit optimization algorithms. Proven results across 500+ businesses.',
      category: 'Wealth Generation',
      revenueRange: '$15K-$50K/mo',
      roi: '340% ROI',
      gradient: 'bg-gradient-to-r from-electric-blue to-cyan-400',
      premium: true
    },
    {
      icon: TrendingUp,
      title: 'Passive Income Generator',
      description: 'Deploy automated income streams generating $8K-$25K monthly. Zero maintenance required after setup.',
      category: 'Automation Empire',
      revenueRange: '$8K-$25K/mo',
      roi: '280% ROI',
      gradient: 'bg-gradient-to-r from-luxury-gold to-yellow-400',
      premium: true
    },
    {
      icon: Target,
      title: 'Million-Dollar Funnel AI',
      description: 'Create converting sales funnels that generated $2.3M+ for our clients. Average 6-figure launches.',
      category: 'Sales Automation',
      revenueRange: '$20K-$100K/mo',
      roi: '450% ROI',
      gradient: 'bg-gradient-to-r from-wealth-success to-emerald-400',
      premium: true
    },
    {
      icon: Bot,
      title: 'AI Empire Builder',
      description: 'Launch complete digital empires generating $30K-$75K monthly. Full business automation suite.',
      category: 'Business Empire',
      revenueRange: '$30K-$75K/mo',
      roi: '520% ROI',
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-400',
      premium: true
    },
    {
      icon: BarChart3,
      title: 'Wealth Analytics Pro',
      description: 'Track and optimize multiple 6-figure income streams. Real-time profit monitoring across all ventures.',
      category: 'Wealth Intelligence',
      revenueRange: '$5K-$40K/mo',
      roi: '380% ROI',
      gradient: 'bg-gradient-to-r from-indigo-500 to-blue-400'
    },
    {
      icon: Zap,
      title: 'Lightning Launch AI',
      description: 'Deploy profitable businesses in 48 hours. Average first-month revenue: $12K-$35K.',
      category: 'Rapid Deployment',
      revenueRange: '$12K-$35K/mo',
      roi: '290% ROI',
      gradient: 'bg-gradient-to-r from-orange-500 to-red-400'
    },
    {
      icon: Mail,
      title: 'Millionaire Email AI',
      description: 'Email campaigns generating $50K-$200K per send. Proven 8-figure email system.',
      category: 'Email Empire',
      revenueRange: '$50K-$200K/send',
      roi: '680% ROI',
      gradient: 'bg-gradient-to-r from-teal-500 to-green-400'
    },
    {
      icon: Users,
      title: 'High-Value Client AI',
      description: 'Attract and convert $10K+ clients automatically. Premium client acquisition system.',
      category: 'Premium Sales',
      revenueRange: '$25K-$60K/mo',
      roi: '420% ROI',
      gradient: 'bg-gradient-to-r from-pink-500 to-rose-400'
    }
  ];

  const luxuryFeatures = [
    {
      icon: Crown,
      title: 'Millionaire-Tier Security',
      description: 'Bank-grade encryption protecting your wealth generation systems and client data',
      highlight: 'Ultra Premium'
    },
    {
      icon: Gauge,
      title: 'Lightning Revenue Deployment',
      description: 'Launch profitable systems in under 24 hours with global infrastructure',
      highlight: 'Instant Wealth'
    },
    {
      icon: Sparkles,
      title: 'Complete Brand Empire',
      description: 'White-label everything with your luxury brand identity across all platforms',
      highlight: 'Your Empire'
    },
    {
      icon: Star,
      title: 'Exclusive Member Access',
      description: 'VIP-only tools and strategies unavailable to the general public',
      highlight: 'Elite Only'
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-luxury-gold/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Luxury Header */}
        <div className="text-center space-y-6 mb-20">
          <Badge className="mb-4 px-6 py-2 text-luxury-gold bg-luxury-gold/10 border-luxury-gold/20 text-sm font-semibold">
            MILLION-DOLLAR AI EMPIRE
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
            <span className="text-gradient-electric">Million-Dollar</span>{" "}
            <span className="text-gradient-gold">AI Wealth</span>{" "}
            <span className="text-foreground">Suite</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Deploy proven AI systems generating <span className="text-gradient-gold font-bold">$10K-$100K+ monthly</span> for serious entrepreneurs. 
            <span className="text-gradient-electric"> Exclusive access only.</span>
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-wealth-success animate-pulse" />
              <span className="text-wealth-success">500+ Millionaires Created</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
              <span className="text-luxury-gold">$2.3B+ Generated</span>
            </div>
          </div>
        </div>

        {/* Million-Dollar AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {millionDollarTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card 
                key={index} 
                className={`group hover-elevate cursor-pointer border-luxury-gold/20 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-luxury-gold/40 ${tool.premium ? 'glow-electric' : ''}`}
                onClick={() => handleLearnMore(tool.title)}
                data-testid={`card-wealth-tool-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-xl ${tool.gradient} p-3.5 text-white shadow-2xl relative overflow-hidden`}>
                      <Icon className="w-7 h-7 relative z-10" />
                      <div className="absolute inset-0 shimmer" />
                    </div>
                    {tool.premium && (
                      <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30 text-xs font-bold px-2 py-1">
                        PREMIUM
                      </Badge>
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-luxury-gold font-bold mb-2 uppercase tracking-wider">
                      {tool.category}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-gradient-electric transition-all duration-300 leading-tight">
                      {tool.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 mt-3">
                      <Badge variant="secondary" className="bg-wealth-success/10 text-wealth-success border-wealth-success/20 text-xs font-bold">
                        {tool.revenueRange}
                      </Badge>
                      <Badge variant="secondary" className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 text-xs font-bold">
                        {tool.roi}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-6 text-muted-foreground">
                    {tool.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn font-semibold bg-luxury-gold/5 border border-luxury-gold/20 text-luxury-gold"
                    data-testid={`button-wealth-tool-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Access Wealth Tool
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Luxury Platform Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Millionaire-Tier</span> Platform Benefits
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exclusive features reserved for serious wealth builders and high-net-worth entrepreneurs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {luxuryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-6 group hover-elevate p-6 rounded-xl transition-all duration-300" data-testid={`feature-luxury-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-luxury-gold/20 flex items-center justify-center backdrop-blur-sm border border-luxury-gold/20 group-hover:border-luxury-gold/40 transition-all duration-300">
                  <Icon className="w-10 h-10 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-3">
                  <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 text-xs font-bold px-3 py-1">
                    {feature.highlight}
                  </Badge>
                  <h4 className="text-xl font-bold text-foreground group-hover:text-gradient-gold transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusive Access CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-luxury-gold mb-4">
            <Star className="w-4 h-4" />
            <span>Limited Access - Serious Entrepreneurs Only</span>
            <Star className="w-4 h-4" />
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-luxury-gold to-yellow-400 text-black font-bold px-12 py-4 text-lg shadow-2xl transition-all duration-300"
            data-testid="button-exclusive-access"
          >
            Apply for Exclusive Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}