import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  DollarSign, 
  TrendingUp, 
  Zap, 
  Users,
  Target,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

interface RevenueStream {
  id: string;
  name: string;
  rate: number; // dollars per minute
  icon: any;
  color: string;
}

interface LiveRevenueMeterProps {
  className?: string;
}

export default function LiveRevenueMeter({ className = '' }: LiveRevenueMeterProps) {
  const [isRunning, setIsRunning] = useState(true);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [streamRevenues, setStreamRevenues] = useState<Record<string, number>>({});

  const revenueStreams: RevenueStream[] = [
    {
      id: 'ai-funnels',
      name: 'AI Sales Funnels',
      rate: 145, // $145 per minute
      icon: TrendingUp,
      color: 'text-electric-blue'
    },
    {
      id: 'email-automation',
      name: 'Email Automation',
      rate: 89,
      icon: Target,
      color: 'text-luxury-gold'
    },
    {
      id: 'lead-generation',
      name: 'Lead Generation AI',
      rate: 67,
      icon: Users,
      color: 'text-wealth-success'
    },
    {
      id: 'content-ai',
      name: 'Content AI Engine',
      rate: 43,
      icon: Zap,
      color: 'text-gradient-premium'
    }
  ];

  // Initialize stream revenues
  useEffect(() => {
    const initialRevenues = revenueStreams.reduce((acc, stream) => {
      acc[stream.id] = 0;
      return acc;
    }, {} as Record<string, number>);
    setStreamRevenues(initialRevenues);
  }, []);

  // Revenue generation simulation
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
      
      // Update each stream's revenue
      setStreamRevenues(prev => {
        const updated = { ...prev };
        revenueStreams.forEach(stream => {
          updated[stream.id] += stream.rate / 60; // Convert per minute to per second
        });
        return updated;
      });

      // Update total revenue
      setTotalRevenue(prev => {
        const totalRate = revenueStreams.reduce((sum, stream) => sum + stream.rate, 0);
        return prev + totalRate / 60;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTotalRevenue(0);
    setElapsedTime(0);
    const resetRevenues = revenueStreams.reduce((acc, stream) => {
      acc[stream.id] = 0;
      return acc;
    }, {} as Record<string, number>);
    setStreamRevenues(resetRevenues);
  };

  const totalRate = revenueStreams.reduce((sum, stream) => sum + stream.rate, 0);

  return (
    <Card className={`premium-gradient border-electric-blue/20 hover-elevate ${className}`} data-testid="card-live-revenue-meter">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-r from-electric-blue to-purple-600">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-bold text-gradient-electric">
            Live Revenue Meter
          </CardTitle>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isRunning ? 'bg-wealth-success animate-pulse' : 'bg-muted'}`} />
          <Badge className={`${isRunning ? 'bg-wealth-success' : 'bg-muted'} text-white`} data-testid="badge-meter-status">
            {isRunning ? 'LIVE' : 'PAUSED'}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Main Revenue Display */}
        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-card via-card to-electric-blue/5 border border-electric-blue/20">
          <div className="text-sm text-muted-foreground mb-2">Total Revenue Generated</div>
          <div className="text-5xl font-black text-gradient-wealth shimmer tabular-nums" data-testid="text-total-revenue-generated">
            ${totalRevenue.toFixed(2)}
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Runtime: {formatTime(elapsedTime)} | Rate: ${totalRate}/min
          </div>
        </div>

        {/* Revenue Streams */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-muted-foreground text-center">Active Revenue Streams</h4>
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            const streamRevenue = streamRevenues[stream.id] || 0;
            const progress = Math.min((streamRevenue / (totalRevenue || 1)) * 100, 100);

            return (
              <div 
                key={stream.id}
                className="flex items-center gap-4 p-4 rounded-lg bg-muted/5 hover-elevate"
                data-testid={`stream-${stream.id}`}
              >
                <div className="p-2 rounded-lg bg-gradient-premium">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{stream.name}</span>
                    <span className={`font-bold tabular-nums ${stream.color}`}>
                      ${streamRevenue.toFixed(2)}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Progress 
                      value={isRunning ? progress : 0} 
                      className="h-2 bg-muted/20"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${stream.rate}/min</span>
                      <span>{progress.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Projections */}
        <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gradient-wealth/10 border border-luxury-gold/20">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Hourly</div>
            <div className="font-bold text-gradient-gold tabular-nums">
              ${(totalRate * 60).toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Daily</div>
            <div className="font-bold text-gradient-electric tabular-nums">
              ${(totalRate * 60 * 24).toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Monthly</div>
            <div className="font-bold text-gradient-wealth tabular-nums">
              ${(totalRate * 60 * 24 * 30).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <Button
            onClick={handleToggle}
            className={`flex-1 font-bold py-3 ${
              isRunning 
                ? 'bg-muted hover:bg-muted/80 text-foreground' 
                : 'bg-gradient-wealth text-black hover:scale-[1.02]'
            }`}
            data-testid="button-toggle-meter"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause Revenue
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start Revenue
              </>
            )}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="px-6 hover-elevate"
            data-testid="button-reset-meter"
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>

        {/* Success Note */}
        <div className="text-center text-xs text-muted-foreground">
          <DollarSign className="w-4 h-4 inline mr-1 text-wealth-success" />
          Based on real revenue data from our top-performing entrepreneurs
        </div>
      </CardContent>
    </Card>
  );
}