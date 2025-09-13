import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Trophy, 
  Users, 
  DollarSign, 
  Star,
  Crown,
  TrendingUp,
  Target,
  Zap,
  Award,
  CheckCircle
} from 'lucide-react';

interface SuccessBadgeProps {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color?: string;
  delay?: number;
  duration?: number;
  size?: 'sm' | 'md' | 'lg';
}

function AnimatedSuccessBadge({ 
  icon: Icon, 
  value, 
  label, 
  suffix = '', 
  prefix = '', 
  color = 'text-luxury-gold',
  delay = 0,
  duration = 2000,
  size = 'md'
}: SuccessBadgeProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      let start = 0;
      const increment = value / (duration / 16);
      const countTimer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(countTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(countTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, duration]);

  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <Badge 
      className={`
        ${sizeClasses[size]} font-bold bg-gradient-premium text-white border-0 
        hover-elevate transition-all duration-300 shimmer
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
      data-testid={`badge-success-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <Icon className={`${iconSizes[size]} mr-2`} />
      <span className={`tabular-nums ${color}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="ml-1 opacity-90">{label}</span>
    </Badge>
  );
}

interface SuccessMetricCardProps {
  title: string;
  value: number;
  description: string;
  icon: any;
  color: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function SuccessMetricCard({
  title,
  value,
  description,
  icon: Icon,
  color,
  prefix = '',
  suffix = '',
  delay = 0
}: SuccessMetricCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      let start = 0;
      const increment = value / (2000 / 16);
      const countTimer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(countTimer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(countTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <Card 
      className={`
        premium-gradient border-2 hover-elevate transition-all duration-500 group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      data-testid={`card-success-metric-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardContent className="p-6 text-center">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${color} mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-black text-gradient-wealth shimmer">
            {prefix}{count.toLocaleString()}{suffix}
          </div>
          <h3 className="font-bold text-lg text-gradient-electric">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

interface LiveRevenueStreamProps {
  className?: string;
}

function LiveRevenueStream({ className = '' }: LiveRevenueStreamProps) {
  const [revenue, setRevenue] = useState(2847293);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    setIsLive(true);
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 150) + 50);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center space-y-3 ${className}`} data-testid="component-live-revenue-stream">
      <div className="flex items-center justify-center gap-2 text-wealth-success text-sm font-semibold">
        <div className={`w-2 h-2 rounded-full bg-wealth-success ${isLive ? 'animate-pulse' : ''}`} />
        LIVE REVENUE GENERATION
      </div>
      <div className="text-4xl lg:text-5xl font-black text-gradient-wealth shimmer tabular-nums">
        ${revenue.toLocaleString()}
      </div>
      <div className="text-sm text-muted-foreground">
        Generated by our AI systems in the last 30 days
      </div>
      <Badge className="bg-gradient-premium text-white px-4 py-1">
        <TrendingUp className="w-4 h-4 mr-1" />
        +$47K today
      </Badge>
    </div>
  );
}

export function SuccessIndicatorGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`space-y-8 ${className}`} data-testid="component-success-indicator-grid">
      {/* Animated Success Badges */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <AnimatedSuccessBadge
          icon={DollarSign}
          value={500}
          label="Million Generated"
          suffix="M+"
          prefix="$"
          delay={0}
          size="lg"
        />
        <AnimatedSuccessBadge
          icon={Users}
          value={10000}
          label="Millionaires Created"
          suffix="+"
          delay={200}
          size="lg"
        />
        <AnimatedSuccessBadge
          icon={Trophy}
          value={96}
          label="Success Rate"
          suffix="%"
          delay={400}
          size="lg"
        />
      </div>

      {/* Success Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SuccessMetricCard
          title="Average Monthly Revenue"
          value={47500}
          description="Our entrepreneurs generate this on average per month"
          icon={DollarSign}
          color="from-wealth-success to-emerald-500"
          prefix="$"
          delay={600}
        />
        <SuccessMetricCard
          title="Success Stories"
          value={8247}
          description="Documented success cases with verified results"
          icon={Star}
          color="from-luxury-gold to-yellow-500"
          delay={800}
        />
        <SuccessMetricCard
          title="AI Tools Deployed"
          value={156000}
          description="Revenue-generating AI systems currently active"
          icon={Zap}
          color="from-electric-blue to-cyan-500"
          suffix="+"
          delay={1000}
        />
      </div>

      {/* Live Revenue Stream */}
      <Card className="premium-gradient border-electric-blue/20">
        <CardContent className="py-8">
          <LiveRevenueStream />
        </CardContent>
      </Card>
    </div>
  );
}

export function AchievementBadges({ className = '' }: { className?: string }) {
  const achievements = [
    { icon: Crown, label: 'Elite Status', color: 'text-luxury-gold' },
    { icon: Trophy, label: 'Top Performer', color: 'text-electric-blue' },
    { icon: Star, label: 'Verified Results', color: 'text-wealth-success' },
    { icon: Award, label: 'Proven System', color: 'text-gradient-premium' },
    { icon: Target, label: '100% ROI', color: 'text-luxury-gold' },
    { icon: CheckCircle, label: 'Guaranteed', color: 'text-wealth-success' }
  ];

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`} data-testid="component-achievement-badges">
      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <Badge 
            key={index}
            className="bg-gradient-premium text-white px-4 py-2 hover-elevate group"
            data-testid={`badge-achievement-${achievement.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            <span className={achievement.color}>{achievement.label}</span>
          </Badge>
        );
      })}
    </div>
  );
}

export { AnimatedSuccessBadge, SuccessMetricCard, LiveRevenueStream };