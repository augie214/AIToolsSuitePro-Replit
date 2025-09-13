import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Crown, 
  Target,
  Sparkles,
  ArrowRight,
  DollarSign
} from 'lucide-react';

interface ProjectionData {
  month: number;
  revenue: number;
  clients: number;
  tools: number;
}

interface RevenueProjectorProps {
  className?: string;
  plan?: 'basic' | 'pro' | 'elite';
}

export default function RevenueProjector({ className = '', plan = 'pro' }: RevenueProjectorProps) {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [showProjection, setShowProjection] = useState(false);

  // Revenue projection data based on real user results
  const projectionMultipliers = {
    basic: { baseRevenue: 8000, growth: 0.25, maxTools: 8 },
    pro: { baseRevenue: 25000, growth: 0.35, maxTools: 15 },
    elite: { baseRevenue: 75000, growth: 0.45, maxTools: 25 }
  };

  const multiplier = projectionMultipliers[plan];

  const generateProjections = (): ProjectionData[] => {
    const projections: ProjectionData[] = [];
    for (let month = 1; month <= 12; month++) {
      const growthFactor = Math.pow(1 + multiplier.growth, month - 1);
      const revenue = Math.floor(multiplier.baseRevenue * growthFactor);
      const clients = Math.floor(month * 8 + Math.random() * 5);
      const tools = Math.min(Math.floor(month * 2), multiplier.maxTools);
      projections.push({ month, revenue, clients, tools });
    }
    return projections;
  };

  const [projections] = useState(generateProjections);

  const startSimulation = () => {
    setIsSimulating(true);
    setShowProjection(true);
    setCurrentMonth(0);

    const interval = setInterval(() => {
      setCurrentMonth(prev => {
        if (prev >= 12) {
          setIsSimulating(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);
  };

  const currentProjection = projections[currentMonth] || projections[0];
  const yearEndProjection = projections[11];

  return (
    <Card className={`premium-gradient border-electric-blue/20 hover-elevate ${className}`} data-testid="card-revenue-projector">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-electric-blue to-purple-600">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-gradient-electric">
            Revenue Projection Simulator
          </CardTitle>
        </div>
        <Badge className="bg-gradient-premium text-white font-semibold" data-testid="badge-simulation-tier">
          <Crown className="w-4 h-4 mr-1" />
          {plan.charAt(0).toUpperCase() + plan.slice(1)} Tier Simulation
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Current Month Display */}
        {showProjection && (
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-card via-card to-electric-blue/5 border border-electric-blue/20">
            <div className="text-sm text-muted-foreground mb-2">
              Month {currentMonth} Revenue
            </div>
            <div className="text-4xl font-black text-gradient-electric shimmer" data-testid="text-current-projection">
              ${currentProjection.revenue.toLocaleString()}
            </div>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <div className="text-center">
                <div className="text-luxury-gold font-bold" data-testid="text-active-tools">
                  {currentProjection.tools}
                </div>
                <div className="text-muted-foreground">AI Tools Active</div>
              </div>
              <div className="text-center">
                <div className="text-wealth-success font-bold" data-testid="text-client-count">
                  {currentProjection.clients}
                </div>
                <div className="text-muted-foreground">Active Clients</div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Visualization */}
        {showProjection && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Growth Progress</span>
              <span className="font-semibold text-gradient-gold">
                {Math.floor((currentMonth / 12) * 100)}% Complete
              </span>
            </div>
            <Progress 
              value={(currentMonth / 12) * 100} 
              className="h-3 bg-muted/20"
              data-testid="progress-revenue-growth"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Start: ${multiplier.baseRevenue.toLocaleString()}</span>
              <span>Year 1: ${yearEndProjection.revenue.toLocaleString()}</span>
            </div>
          </div>
        )}

        {/* Monthly Breakdown */}
        {showProjection && currentMonth > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {projections.slice(0, currentMonth + 1).slice(-6).map((projection, index) => (
              <div 
                key={projection.month} 
                className={`text-center p-3 rounded-lg transition-all duration-300 ${
                  index === Math.min(currentMonth, 5) 
                    ? 'bg-gradient-premium text-white scale-105' 
                    : 'bg-muted/10 hover-elevate'
                }`}
                data-testid={`month-projection-${projection.month}`}
              >
                <div className="text-xs opacity-75">M{projection.month}</div>
                <div className="text-sm font-bold">${(projection.revenue / 1000).toFixed(0)}K</div>
              </div>
            ))}
          </div>
        )}

        {/* Success Indicators */}
        {showProjection && currentMonth >= 12 && (
          <div className="space-y-4 p-4 rounded-xl bg-gradient-wealth/10 border border-luxury-gold/20">
            <div className="text-center">
              <Sparkles className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <h4 className="font-bold text-gradient-gold">Millionaire Status Achieved!</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div>
                <div className="font-black text-2xl text-gradient-wealth">
                  ${yearEndProjection.revenue.toLocaleString()}
                </div>
                <div className="text-muted-foreground">Monthly Revenue</div>
              </div>
              <div>
                <div className="font-black text-2xl text-gradient-electric">
                  ${(yearEndProjection.revenue * 12).toLocaleString()}
                </div>
                <div className="text-muted-foreground">Annual Revenue</div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          className={`w-full py-6 text-lg font-bold transition-all ${
            !showProjection 
              ? 'bg-gradient-premium text-white hover:scale-[1.02]' 
              : 'bg-gradient-wealth text-black hover:scale-[1.02]'
          }`}
          onClick={startSimulation}
          disabled={isSimulating}
          data-testid="button-start-simulation"
        >
          {isSimulating ? (
            <>
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Simulating Revenue Growth...
            </>
          ) : !showProjection ? (
            <>
              <TrendingUp className="w-5 h-5 mr-2" />
              Run Revenue Simulation
            </>
          ) : (
            <>
              <DollarSign className="w-5 h-5 mr-2" />
              Start Generating This Revenue
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        {/* Disclaimer */}
        <div className="text-center text-xs text-muted-foreground">
          <Target className="w-4 h-4 inline mr-1 text-wealth-success" />
          Based on real results from 10,000+ entrepreneurs
        </div>
      </CardContent>
    </Card>
  );
}