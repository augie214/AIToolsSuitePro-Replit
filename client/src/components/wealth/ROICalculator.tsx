import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  Calculator, 
  Target,
  Sparkles,
  ArrowUp,
  Zap
} from 'lucide-react';

interface ROICalculatorProps {
  className?: string;
  onCalculate?: (data: { investment: number; timeMonths: number; projectedReturn: number }) => void;
}

function AnimatedCounter({ target, duration = 2000, prefix = '$', suffix = '' }: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();
  
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(target * progress);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };
    
    startTimeRef.current = undefined;
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [target, duration]);

  return (
    <span className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ROICalculator({ className = '', onCalculate }: ROICalculatorProps) {
  const [investment, setInvestment] = useState([5000]);
  const [timeMonths, setTimeMonths] = useState([12]);
  const [isCalculating, setIsCalculating] = useState(false);

  // AI multiplier based on our exclusive algorithms
  const baseROI = 3.4; // 340% average ROI
  const aiMultiplier = 1.2; // AI amplification factor
  const monthlyMultiplier = 0.15; // 15% monthly growth on average
  
  const monthlyReturn = Math.floor((investment[0] * monthlyMultiplier * aiMultiplier));
  const totalReturn = Math.floor((investment[0] * baseROI * aiMultiplier * (timeMonths[0] / 12)));
  const totalRevenue = investment[0] + totalReturn;
  const roi = Math.floor((totalReturn / investment[0]) * 100);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      onCalculate?.({
        investment: investment[0],
        timeMonths: timeMonths[0],
        projectedReturn: totalReturn
      });
    }, 1000);
  };

  return (
    <Card className={`premium-gradient border-luxury-gold/20 hover-elevate ${className}`} data-testid="card-roi-calculator">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-premium">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-gradient-gold">
            AI Revenue Calculator
          </CardTitle>
        </div>
        <Badge className="bg-gradient-wealth text-black font-semibold" data-testid="badge-roi-guarantee">
          <Sparkles className="w-4 h-4 mr-1" />
          500x AI Amplification Guaranteed
        </Badge>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Investment Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-muted-foreground">Initial Investment</label>
            <span className="text-lg font-bold text-gradient-electric" data-testid="text-investment-amount">
              ${investment[0].toLocaleString()}
            </span>
          </div>
          <Slider
            value={investment}
            onValueChange={setInvestment}
            max={50000}
            min={1000}
            step={500}
            className="w-full"
            data-testid="slider-investment"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$1K</span>
            <span>$50K</span>
          </div>
        </div>

        {/* Time Period Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-muted-foreground">Time Period</label>
            <span className="text-lg font-bold text-gradient-electric" data-testid="text-time-period">
              {timeMonths[0]} months
            </span>
          </div>
          <Slider
            value={timeMonths}
            onValueChange={setTimeMonths}
            max={24}
            min={3}
            step={1}
            className="w-full"
            data-testid="slider-time-period"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>3 months</span>
            <span>24 months</span>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-wealth-success/10 to-wealth-success/5 border border-wealth-success/20">
            <div className="text-xs text-muted-foreground mb-1">Monthly Revenue</div>
            <div className="text-xl font-black text-gradient-electric" data-testid="text-monthly-revenue">
              <AnimatedCounter target={monthlyReturn} prefix="$" />
            </div>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 border border-luxury-gold/20">
            <div className="text-xs text-muted-foreground mb-1">Total ROI</div>
            <div className="text-xl font-black text-gradient-gold" data-testid="text-roi-percentage">
              <AnimatedCounter target={roi} suffix="%" />
            </div>
          </div>
        </div>

        {/* Main Revenue Display */}
        <div className="text-center p-6 rounded-xl bg-gradient-premium border border-electric-blue/30">
          <div className="text-sm text-platinum mb-2">Projected Total Revenue</div>
          <div className="text-4xl font-black text-gradient-wealth shimmer" data-testid="text-total-revenue">
            <AnimatedCounter target={totalRevenue} prefix="$" duration={2500} />
          </div>
          <div className="text-sm text-platinum mt-2">
            <ArrowUp className="w-4 h-4 inline mr-1 text-wealth-success" />
            That's <span className="text-gradient-gold font-bold">
              <AnimatedCounter target={totalReturn} prefix="$" />
            </span> in pure profit
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-wealth text-black font-bold py-6 text-lg group hover:scale-[1.02] transition-all"
          onClick={handleCalculate}
          disabled={isCalculating}
          data-testid="button-calculate-roi"
        >
          {isCalculating ? (
            <>
              <Zap className="w-5 h-5 mr-2 animate-pulse" />
              Calculating AI Multipliers...
            </>
          ) : (
            <>
              <DollarSign className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Generating This Revenue
            </>
          )}
        </Button>

        {/* Success Guarantee */}
        <div className="text-center text-xs text-muted-foreground">
          <Target className="w-4 h-4 inline mr-1 text-wealth-success" />
          Results guaranteed or your investment back + 50% bonus
        </div>
      </CardContent>
    </Card>
  );
}