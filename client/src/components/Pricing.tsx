import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

export default function Pricing() {
  const handleSelectPlan = (plan: string) => {
    console.log(`Plan selected: ${plan}`);
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
  };

  // todo: remove mock functionality - replace with real pricing data
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: '$29',
      period: 'per month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Access to 5 basic AI tools',
        '1,000 AI operations per month',
        'Basic analytics dashboard',
        'Email support',
        'Single user account'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      icon: Star,
      price: '$79',
      period: 'per month',
      description: 'Advanced features for growing teams',
      features: [
        'Access to 12 AI tools',
        '5,000 AI operations per month',
        'Advanced analytics & reporting',
        'Priority email & chat support',
        'Up to 3 team members',
        'API access with rate limiting'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Business',
      icon: Rocket,
      price: '$149',
      period: 'per month',
      description: 'Complete solution with white-label options',
      features: [
        'Access to all 20 AI tools',
        '15,000 AI operations per month',
        'Full analytics suite',
        'Phone, email & chat support',
        'Up to 10 team members',
        'Full API access',
        'White-label customization'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: '$299',
      period: 'per month',
      description: 'Unlimited access with dedicated support',
      features: [
        'Unlimited access to all tools',
        '50,000+ AI operations per month',
        'Custom analytics dashboard',
        'Dedicated account manager',
        'Unlimited team members',
        'Complete white-label solution',
        'Custom integrations',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Scale your AI capabilities with flexible pricing designed for businesses of all sizes.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative hover-elevate ${plan.popular ? 'border-primary shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pb-8">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </div>
                    </div>
                    <CardDescription className="mt-3">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => plan.name === 'Enterprise' ? handleContactSales() : handleSelectPlan(plan.name)}
                    data-testid={`button-select-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>SOC 2 compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}