import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Check, Star, Zap, Crown, Rocket, TrendingUp, DollarSign, Target, Shield, Users, Sparkles, Calculator, Activity, Trophy, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ROICalculator, RevenueProjector, AnimatedSuccessBadge, LiveRevenueStream } from '@/components/wealth';

// Investment Return Calculator Component
function InvestmentReturnCalculator({ plan }: { plan: any }) {
  const [investmentValue, setInvestmentValue] = useState(parseInt(plan.price.replace(/[^0-9]/g, '')) || 1000);
  const [timeMonths, setTimeMonths] = useState(6);
  const [showResults, setShowResults] = useState(false);

  const monthlyRevenue = parseInt(plan.monthlyTarget.replace(/[^0-9]/g, '')) * 1000 || 10000;
  const roiMultiplier = parseFloat(plan.roiMultiplier.replace(/[^0-9.]/g, '')) || 10;
  
  const monthlyProfit = monthlyRevenue - investmentValue;
  const totalReturn = monthlyProfit * timeMonths;
  const roi = (totalReturn / investmentValue) * 100;

  useEffect(() => {
    const timer = setTimeout(() => setShowResults(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!showResults) {
    return (
      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-muted/20 rounded" />
        <div className="h-8 bg-muted/20 rounded" />
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-wealth-success/5 to-luxury-gold/5 border border-wealth-success/20">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground flex items-center gap-1">
          <Calculator className="w-3 h-3" />
          Investment Return ({timeMonths} months)
        </span>
        <Badge className="bg-wealth-success/20 text-wealth-success text-xs px-2 py-1">
          {roi.toFixed(0)}% ROI
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-lg font-black text-gradient-wealth">
            ${totalReturn.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Total Profit</div>
        </div>
        <div>
          <div className="text-lg font-black text-gradient-electric">
            ${monthlyProfit.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Monthly Profit</div>
        </div>
      </div>
      <Progress value={Math.min(roi, 100)} className="h-2 bg-muted/20" />
    </div>
  );
}

// Animated Revenue Counter for Pricing Cards
function PricingRevenueCounter({ target, label, delay = 0 }: { target: number; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      let start = 0;
      const increment = target / (2000 / 16);
      const countTimer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(countTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(countTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return (
    <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-sm font-bold text-gradient-gold">
        ${count.toLocaleString()}+
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showROICalculator, setShowROICalculator] = useState(false);

  const handleSelectPlan = (plan: string) => {
    console.log(`Plan selected: ${plan}`);
    setSelectedPlan(plan);
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
  };

  const toggleROICalculator = () => {
    setShowROICalculator(!showROICalculator);
  };

  // Premium wealth-generation pricing tiers designed for serious entrepreneurs
  const plans = [
    {
      name: 'Wealth Builder',
      icon: TrendingUp,
      price: '$297',
      period: 'per month',
      originalPrice: '$497',
      roiMultiplier: '34x',
      monthlyTarget: '$10K+',
      description: 'Start your journey to financial freedom with proven AI systems',
      badge: '96% Success Rate',
      features: [
        'AI Profit Generator (Avg. $3K-$8K/mo)',
        'Automated Lead Conversion System',
        'Revenue Analytics & Projections',
        'Premium Support & Coaching',
        'Money-Back Success Guarantee',
        'Access to $100K Revenue Blueprint'
      ],
      popular: false,
      cta: 'Start Wealth Generation',
      testimonial: '"Generated $12K in my first month" - Sarah Chen, CEO',
      savings: 'Save $200/mo'
    },
    {
      name: 'Revenue Maximizer',
      icon: DollarSign,
      price: '$697',
      period: 'per month',
      originalPrice: '$997',
      roiMultiplier: '72x',
      monthlyTarget: '$50K+',
      description: 'Scale to mid-six figures with advanced automation',
      badge: 'Most Popular',
      features: [
        'Complete AI Revenue Ecosystem',
        'Multi-Stream Income Automation',
        'Advanced Market Intelligence',
        'VIP Mastermind Access',
        'Personal Success Manager',
        'White-Label Rights Included',
        'Done-For-You Revenue Funnels'
      ],
      popular: true,
      cta: 'Claim Revenue Empire',
      testimonial: '"$68K monthly passive income achieved" - Marcus Rodriguez',
      savings: 'Save $300/mo'
    },
    {
      name: 'Million-Dollar Empire',
      icon: Crown,
      price: '$1,497',
      period: 'per month',
      originalPrice: '$2,497',
      roiMultiplier: '134x',
      monthlyTarget: '$100K+',
      description: 'Elite tier for seven-figure entrepreneurs',
      badge: 'Exclusive Access',
      features: [
        'Unlimited AI Wealth Tools',
        'Enterprise Revenue Operations',
        'Private Equity AI Strategies',
        'Direct CEO Hotline Access',
        'Revenue Guarantee Program',
        'Exclusive Industry Partnerships',
        'Custom AI Development Team',
        'Million-Dollar Scaling Blueprints'
      ],
      popular: false,
      cta: 'Secure Elite Status',
      testimonial: '"Reached $200K/month in 90 days" - David Kim, Founder',
      savings: 'Save $1K/mo'
    },
    {
      name: 'Billionaire Blueprint',
      icon: Target,
      price: 'Custom',
      period: 'investment',
      originalPrice: '$10K+',
      roiMultiplier: '500x+',
      monthlyTarget: '$500K+',
      description: 'Ultra-exclusive program for empire builders',
      badge: 'Invitation Only',
      features: [
        'Personalized AI Wealth Architecture',
        'Multi-Million Dollar Strategies',
        'Global Market Domination Plans',
        'Private Board Advisory',
        'Unlimited Revenue Potential',
        'Legacy Wealth Protection',
        'International Expansion Support',
        'Generational Wealth Building'
      ],
      popular: false,
      cta: 'Apply for Invitation',
      testimonial: '"Built a $50M AI empire" - Alexandra Thompson, Serial Entrepreneur',
      savings: 'Unlimited ROI'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Metrics Header */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <AnimatedSuccessBadge
              icon={DollarSign}
              value={2300}
              label="Million Generated"
              suffix="M+"
              prefix="$"
              size="lg"
              delay={0}
            />
            <AnimatedSuccessBadge
              icon={Users}
              value={10000}
              label="Success Stories"
              suffix="+"
              size="lg"
              delay={200}
            />
            <AnimatedSuccessBadge
              icon={Trophy}
              value={97}
              label="Success Rate"
              suffix="%"
              size="lg"
              delay={400}
            />
          </div>
        </div>

        {/* Interactive ROI Calculator Section */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <Button
              onClick={toggleROICalculator}
              className="bg-gradient-premium text-white px-8 py-3 text-lg font-bold hover:scale-[1.02] transition-all"
              data-testid="button-toggle-roi-calculator"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {showROICalculator ? 'Hide' : 'Show'} ROI Calculator
            </Button>
          </div>
          
          {showROICalculator && (
            <div className="max-w-4xl mx-auto animate-in slide-in-from-top-4 duration-500">
              <ROICalculator className="mb-8" />
            </div>
          )}
        </div>

        {/* Premium Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-premium text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Proven Wealth Generation Systems</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
            Choose Your{' '}
            <span className="text-gradient-gold">Revenue Empire</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join 10,000+ entrepreneurs already generating{' '}
            <span className="text-gradient-electric font-bold">$10K-$500K+ monthly</span>{' '}
            with our AI-powered wealth systems
          </p>
          
          {/* Live Revenue Stream */}
          <div className="max-w-2xl mx-auto">
            <LiveRevenueStream className="py-6" />
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-wealth-success">
              <Check className="w-5 h-5" />
              <span className="font-medium">Revenue Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-luxury-gold">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Risk-Free Investment</span>
            </div>
            <div className="flex items-center gap-2 text-electric-blue">
              <Users className="w-5 h-5" />
              <span className="font-medium">Elite Community</span>
            </div>
          </div>
        </div>

        {/* Premium Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const isElite = plan.name === 'Million-Dollar Empire';
            const isUltraElite = plan.name === 'Billionaire Blueprint';
            
            return (
              <Card 
                key={index} 
                className={`
                  relative overflow-hidden hover-elevate border-2 transition-all duration-300
                  ${isPopular ? 'border-primary bg-gradient-to-br from-card via-card to-primary/5 glow-electric' : 
                    isElite ? 'border-luxury-gold bg-gradient-to-br from-card via-card to-luxury-gold/5' :
                    isUltraElite ? 'border-platinum bg-gradient-to-br from-card via-card to-platinum/5' :
                    'border-card-border bg-gradient-to-br from-card to-muted/5'}
                `}
                data-testid={`card-pricing-${plan.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {/* Premium Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge 
                    className={`
                      px-4 py-1 text-xs font-bold border-2 shimmer
                      ${isPopular ? 'bg-primary text-primary-foreground border-primary-border' :
                        isElite ? 'bg-luxury-gold text-foreground border-luxury-gold' :
                        isUltraElite ? 'bg-platinum text-foreground border-platinum' :
                        'bg-wealth-success text-white border-wealth-success'}
                    `}
                    data-testid={`badge-${plan.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {plan.badge}
                  </Badge>
                </div>
                
                <CardHeader className="text-center space-y-6 pb-8 pt-8">
                  {/* Icon with Premium Glow */}
                  <div className={`
                    mx-auto w-16 h-16 rounded-xl flex items-center justify-center border-2
                    ${isPopular ? 'bg-primary/10 border-primary/20' :
                      isElite ? 'bg-luxury-gold/10 border-luxury-gold/20' :
                      isUltraElite ? 'bg-platinum/10 border-platinum/20' :
                      'bg-wealth-success/10 border-wealth-success/20'}
                  `}>
                    <Icon className={`
                      w-8 h-8
                      ${isPopular ? 'text-primary' :
                        isElite ? 'text-luxury-gold' :
                        isUltraElite ? 'text-platinum' :
                        'text-wealth-success'}
                    `} />
                  </div>
                  
                  {/* Plan Details */}
                  <div className="space-y-4">
                    <CardTitle className="text-2xl lg:text-3xl font-black">
                      {plan.name}
                    </CardTitle>
                    
                    {/* ROI Display */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-muted-foreground line-through">
                          {plan.originalPrice}
                        </span>
                        <Badge variant="outline" className="text-xs bg-wealth-success/10 text-wealth-success border-wealth-success/20">
                          {plan.savings}
                        </Badge>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-baseline justify-center gap-2">
                        <span className={`
                          text-4xl lg:text-5xl font-black
                          ${isPopular ? 'text-gradient-electric' :
                            isElite ? 'text-gradient-gold' :
                            isUltraElite ? 'text-platinum' :
                            'text-wealth-success'}
                        `}>
                          {plan.price}
                        </span>
                        {plan.period !== 'investment' && (
                          <span className="text-muted-foreground text-sm font-medium">
                            /{plan.period.split(' ')[1]}
                          </span>
                        )}
                      </div>
                      
                      {/* ROI Metrics */}
                      <div className="space-y-1">
                        <div className={`
                          text-lg font-bold
                          ${isPopular ? 'text-primary' :
                            isElite ? 'text-luxury-gold' :
                            isUltraElite ? 'text-platinum' :
                            'text-wealth-success'}
                        `}>
                          Target: {plan.monthlyTarget} monthly
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ROI Multiplier: <span className="font-bold text-foreground">{plan.roiMultiplier}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Premium Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`
                          w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${isPopular ? 'bg-primary/10' :
                            isElite ? 'bg-luxury-gold/10' :
                            isUltraElite ? 'bg-platinum/10' :
                            'bg-wealth-success/10'}
                        `}>
                          <Check className={`
                            w-3 h-3
                            ${isPopular ? 'text-primary' :
                              isElite ? 'text-luxury-gold' :
                              isUltraElite ? 'text-platinum' :
                              'text-wealth-success'}
                          `} />
                        </div>
                        <span className="text-sm font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Investment Return Calculator */}
                  <InvestmentReturnCalculator plan={plan} />
                  
                  {/* Revenue Projections */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <PricingRevenueCounter 
                      target={parseInt(plan.monthlyTarget.replace(/[^0-9]/g, '')) * 1000 || 10000} 
                      label="Monthly Target"
                      delay={100}
                    />
                    <PricingRevenueCounter 
                      target={(parseInt(plan.monthlyTarget.replace(/[^0-9]/g, '')) * 1000 * 6) || 60000} 
                      label="6-Month Total"
                      delay={200}
                    />
                    <PricingRevenueCounter 
                      target={(parseInt(plan.monthlyTarget.replace(/[^0-9]/g, '')) * 1000 * 12) || 120000} 
                      label="Annual Revenue"
                      delay={300}
                    />
                  </div>
                  
                  {/* Testimonial */}
                  <div className={`
                    p-4 rounded-lg border italic text-sm relative overflow-hidden
                    ${isPopular ? 'bg-primary/5 border-primary/20' :
                      isElite ? 'bg-luxury-gold/5 border-luxury-gold/20' :
                      isUltraElite ? 'bg-platinum/5 border-platinum/20' :
                      'bg-wealth-success/5 border-wealth-success/20'}
                  `}>
                    <div className="relative z-10">{plan.testimonial}</div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-wealth-success/20 text-wealth-success text-xs px-2 py-1">
                        <Check className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Premium CTA */}
                  <Button 
                    className={`
                      w-full text-base font-bold py-6 relative overflow-hidden group border-2 transition-all duration-300
                      ${selectedPlan === plan.name ? 'scale-105 shadow-2xl' : ''}
                      ${isPopular ? 'bg-gradient-premium hover:shadow-xl border-primary' :
                        isElite ? 'bg-gradient-wealth hover:shadow-xl border-luxury-gold' :
                        isUltraElite ? 'bg-platinum text-foreground hover:shadow-xl border-platinum' :
                        'bg-wealth-success hover:shadow-xl border-wealth-success'}
                    `}
                    onClick={() => plan.name === 'Billionaire Blueprint' ? handleContactSales() : handleSelectPlan(plan.name)}
                    data-testid={`button-select-${plan.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {selectedPlan === plan.name && <Check className="w-5 h-5" />}
                      {plan.cta}
                      <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
                    </span>
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Revenue Projection Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black mb-4">
              <span className="text-gradient-electric">See Your Path to</span>{' '}
              <span className="text-gradient-gold">Financial Freedom</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Interactive projections based on real performance data from our entrepreneurs
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevenueProjector plan="basic" className="" />
            <RevenueProjector plan="pro" className="" />
            <RevenueProjector plan="elite" className="" />
          </div>
        </div>

        {/* Premium Bottom CTA */}
        <div className="text-center mt-20 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Join the Elite Circle of{' '}
              <span className="text-gradient-gold">AI Millionaires</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every investment tier includes our revolutionary success guarantee and access to the most profitable AI systems on the planet.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-wealth-success">
              <Check className="w-5 h-5" />
              <span className="font-medium">30-Day Revenue Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-luxury-gold">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Zero-Risk Investment</span>
            </div>
            <div className="flex items-center gap-2 text-electric-blue">
              <Crown className="w-5 h-5" />
              <span className="font-medium">Millionaire Mastermind Access</span>
            </div>
            <div className="flex items-center gap-2 text-platinum">
              <Target className="w-5 h-5" />
              <span className="font-medium">Proven 500x+ ROI System</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 via-luxury-gold/10 to-wealth-success/10 p-6 rounded-xl border border-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5 text-electric-blue" />
                Limited Time: <span className="text-gradient-electric">Founding Member Bonuses</span>
              </p>
              <p className="text-muted-foreground mb-4">
                Lock in these exclusive rates before they increase. Only 247 spots remaining at these prices.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm font-semibold">
                <div className="flex items-center gap-1 text-wealth-success">
                  <Activity className="w-4 h-4" />
                  <span>Live: 23 entrepreneurs joined today</span>
                </div>
                <div className="flex items-center gap-1 text-luxury-gold">
                  <Target className="w-4 h-4" />
                  <span>$47M+ generated this month</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 shimmer opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}