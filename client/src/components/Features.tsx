import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  Image, 
  BarChart3, 
  Code, 
  Mail, 
  Users, 
  Shield, 
  Zap, 
  Palette, 
  Settings,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  const handleLearnMore = (tool: string) => {
    console.log(`Learn more clicked for: ${tool}`);
  };

  // todo: remove mock functionality - replace with real tool data
  const aiTools = [
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Create engaging content, blogs, and marketing copy with advanced GPT models.',
      category: 'Content Creation',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Builder',
      description: 'Deploy intelligent chatbots for customer support and lead generation.',
      category: 'Customer Service',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: FileText,
      title: 'Document Analyzer',
      description: 'Extract insights, summarize documents, and automate data processing.',
      category: 'Data Processing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Image,
      title: 'Image Generator',
      description: 'Create stunning visuals, logos, and artwork with AI-powered design.',
      category: 'Visual Design',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Transform data into actionable insights with intelligent reporting.',
      category: 'Business Intelligence',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Code Assistant',
      description: 'Generate, debug, and optimize code across multiple programming languages.',
      category: 'Development',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Mail,
      title: 'Email Marketing AI',
      description: 'Craft personalized email campaigns that convert with AI optimization.',
      category: 'Marketing',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Users,
      title: 'Lead Qualification',
      description: 'Automatically score and prioritize leads with intelligent algorithms.',
      category: 'Sales',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with end-to-end encryption'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy and scale instantly with global CDN'
    },
    {
      icon: Palette,
      title: 'Full Customization',
      description: 'Complete white-label branding control'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'API-first design with comprehensive SDK'
    }
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Complete AI Tool Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empower your customers with a comprehensive collection of AI-powered tools, 
            all under your brand and ready to deploy.
          </p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={index} className="group hover-elevate cursor-pointer border-border" onClick={() => handleLearnMore(tool.title)}>
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.gradient} p-3 text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium mb-1">
                      {tool.category}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {tool.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group/btn"
                    data-testid={`button-learn-more-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}