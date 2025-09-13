import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Target, 
  Crown, 
  Star,
  Rocket,
  Zap,
  CheckCircle,
  ArrowUp,
  TrendingUp
} from 'lucide-react';

interface Milestone {
  id: string;
  revenue: number;
  title: string;
  description: string;
  timeframe: string;
  icon: any;
  color: string;
  achieved?: boolean;
}

interface WealthTimelineProps {
  className?: string;
}

export default function WealthTimeline({ className = '' }: WealthTimelineProps) {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const milestones: Milestone[] = [
    {
      id: 'starter',
      revenue: 10000,
      title: 'First $10K Month',
      description: 'Break into 5-figure monthly revenue with AI automation',
      timeframe: '30-60 days',
      icon: Target,
      color: 'text-wealth-success',
      achieved: false
    },
    {
      id: 'growth',
      revenue: 25000,
      title: 'Quarter Million Pace',
      description: 'Scale to $25K monthly with advanced AI tools',
      timeframe: '90-120 days',
      icon: TrendingUp,
      color: 'text-electric-blue',
      achieved: false
    },
    {
      id: 'professional',
      revenue: 50000,
      title: 'Six-Figure Monthly',
      description: 'Achieve sustainable $50K+ monthly income streams',
      timeframe: '4-6 months',
      icon: Star,
      color: 'text-luxury-gold',
      achieved: false
    },
    {
      id: 'elite',
      revenue: 100000,
      title: 'Millionaire Tier',
      description: 'Join the exclusive $100K+ monthly income club',
      timeframe: '6-12 months',
      icon: Crown,
      color: 'text-gradient-wealth',
      achieved: false
    },
    {
      id: 'legendary',
      revenue: 250000,
      title: 'Wealth Empire',
      description: 'Build a quarter-million monthly empire',
      timeframe: '12-18 months',
      icon: Trophy,
      color: 'text-gradient-premium',
      achieved: false
    }
  ];

  const [timelineMilestones, setTimelineMilestones] = useState(milestones);

  const startWealthJourney = () => {
    setIsAnimating(true);
    setCurrentMilestone(0);
    setProgress(0);

    // Reset all milestones
    setTimelineMilestones(prev => prev.map(m => ({ ...m, achieved: false })));

    // Animate through milestones
    const animateProgress = () => {
      let currentProgress = 0;
      let milestoneIndex = 0;
      
      const interval = setInterval(() => {
        currentProgress += 2;
        setProgress(currentProgress);

        // Check if we've reached the next milestone
        const nextMilestoneProgress = ((milestoneIndex + 1) / milestones.length) * 100;
        if (currentProgress >= nextMilestoneProgress && milestoneIndex < milestones.length) {
          setTimelineMilestones(prev => 
            prev.map((m, idx) => 
              idx === milestoneIndex ? { ...m, achieved: true } : m
            )
          );
          setCurrentMilestone(milestoneIndex + 1);
          milestoneIndex++;
        }

        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100);
    };

    animateProgress();
  };

  const currentValue = timelineMilestones[Math.min(currentMilestone, timelineMilestones.length - 1)]?.revenue || 0;

  return (
    <Card className={`premium-gradient border-luxury-gold/20 hover-elevate ${className}`} data-testid="card-wealth-timeline">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-gradient-wealth">
            <Rocket className="w-6 h-6 text-black" />
          </div>
          <CardTitle className="text-xl font-bold text-gradient-gold">
            Your Wealth Journey Timeline
          </CardTitle>
        </div>
        <Badge className="bg-gradient-premium text-white font-semibold" data-testid="badge-timeline-guarantee">
          <Trophy className="w-4 h-4 mr-1" />
          Millionaire Path Guaranteed
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Current Progress Display */}
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-card via-card to-luxury-gold/5 border border-luxury-gold/20">
          <div className="text-sm text-muted-foreground mb-2">Current Target</div>
          <div className="text-4xl font-black text-gradient-wealth shimmer" data-testid="text-current-milestone">
            ${currentValue.toLocaleString()}/month
          </div>
          {currentMilestone > 0 && (
            <div className="text-sm text-luxury-gold mt-2 flex items-center justify-center gap-1">
              <ArrowUp className="w-4 h-4" />
              {Math.floor((currentValue / 10000) * 100)}% wealth growth achieved
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Wealth Journey Progress</span>
            <span className="font-semibold text-gradient-electric">
              {Math.floor(progress)}% Complete
            </span>
          </div>
          <Progress 
            value={progress} 
            className="h-4 bg-muted/20"
            data-testid="progress-wealth-journey"
          />
        </div>

        {/* Timeline Milestones */}
        <div className="space-y-4">
          {timelineMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isActive = index === currentMilestone - 1;
            const isAchieved = milestone.achieved;
            const isCurrent = index === currentMilestone && isAnimating;

            return (
              <div 
                key={milestone.id}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                  isAchieved 
                    ? 'bg-gradient-to-r from-wealth-success/20 to-wealth-success/10 border border-wealth-success/30 scale-105' 
                    : isCurrent
                    ? 'bg-gradient-premium/20 border border-electric-blue/30 animate-pulse'
                    : 'bg-muted/5 hover-elevate'
                }`}
                data-testid={`milestone-${milestone.id}`}
              >
                <div className={`p-3 rounded-lg ${
                  isAchieved 
                    ? 'bg-wealth-success text-white' 
                    : isCurrent
                    ? 'bg-gradient-premium text-white animate-pulse'
                    : 'bg-muted/20 text-muted-foreground'
                }`}>
                  {isAchieved ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className={`font-bold ${isAchieved ? 'text-wealth-success' : milestone.color}`}>
                      {milestone.title}
                    </h4>
                    <Badge 
                      variant={isAchieved ? 'default' : 'secondary'} 
                      className={`text-xs ${isAchieved ? 'bg-wealth-success text-white' : ''}`}
                    >
                      {milestone.timeframe}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {milestone.description}
                  </p>
                </div>

                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    isAchieved ? 'text-wealth-success' : 'text-gradient-gold'
                  }`}>
                    ${milestone.revenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">per month</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success Summary */}
        {progress >= 100 && (
          <div className="p-6 rounded-xl bg-gradient-wealth/20 border border-luxury-gold/30 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-luxury-gold">
              <Crown className="w-8 h-8" />
              <span className="text-xl font-black">MILLIONAIRE STATUS ACHIEVED!</span>
            </div>
            <div className="text-3xl font-black text-gradient-wealth">
              $3M+ Annual Revenue Potential
            </div>
            <div className="text-sm text-muted-foreground">
              Join the exclusive club of AI-powered millionaire entrepreneurs
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          className="w-full py-6 text-lg font-bold bg-gradient-wealth text-black hover:scale-[1.02] transition-all group"
          onClick={startWealthJourney}
          disabled={isAnimating}
          data-testid="button-start-wealth-journey"
        >
          {isAnimating ? (
            <>
              <Zap className="w-5 h-5 mr-2 animate-spin" />
              Building Your Wealth Empire...
            </>
          ) : progress >= 100 ? (
            <>
              <Trophy className="w-5 h-5 mr-2 group-hover:bounce" />
              Claim Your Millionaire Status
            </>
          ) : (
            <>
              <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Start Your Millionaire Journey
            </>
          )}
        </Button>

        {/* Success Rate */}
        <div className="text-center text-xs text-muted-foreground">
          <CheckCircle className="w-4 h-4 inline mr-1 text-wealth-success" />
          96.3% of our entrepreneurs reach $10K+ monthly within 90 days
        </div>
      </CardContent>
    </Card>
  );
}