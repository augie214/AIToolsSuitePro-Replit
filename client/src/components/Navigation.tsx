import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Mobile menu toggled:', !isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    console.log(`Navigation clicked: ${link}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">AIToolsSuite Pro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleLinkClick('features')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-features"
            >
              Features
            </button>
            <button 
              onClick={() => handleLinkClick('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleLinkClick('enterprise')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-enterprise"
            >
              Enterprise
            </button>
            <button 
              onClick={() => handleLinkClick('docs')}
              className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
              data-testid="link-docs"
            >
              Docs
            </button>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="ghost" 
                onClick={() => handleLinkClick('login')}
                data-testid="button-login"
              >
                Log In
              </Button>
              <Button 
                onClick={() => handleLinkClick('signup')}
                data-testid="button-signup"
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            <button 
              onClick={() => handleLinkClick('features')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="mobile-link-features"
            >
              Features
            </button>
            <button 
              onClick={() => handleLinkClick('pricing')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="mobile-link-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleLinkClick('enterprise')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="mobile-link-enterprise"
            >
              Enterprise
            </button>
            <button 
              onClick={() => handleLinkClick('docs')}
              className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate rounded-md"
              data-testid="mobile-link-docs"
            >
              Docs
            </button>
            <div className="pt-2 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start"
                onClick={() => handleLinkClick('login')}
                data-testid="mobile-button-login"
              >
                Log In
              </Button>
              <Button 
                className="w-full"
                onClick={() => handleLinkClick('signup')}
                data-testid="mobile-button-signup"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}