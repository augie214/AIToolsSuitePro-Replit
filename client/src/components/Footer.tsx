import { Button } from '@/components/ui/button';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Enterprise', href: '#' },
        { name: 'API Documentation', href: '#' },
        { name: 'White Label', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Contact', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Status', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { name: 'API Reference', href: '#' },
        { name: 'SDKs', href: '#' },
        { name: 'Webhooks', href: '#' },
        { name: 'Changelog', href: '#' },
        { name: 'Community', href: '#' }
      ]
    }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">AIToolsSuite Pro</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Transform your business with our comprehensive white-label AI platform. 
              Deploy 20+ AI tools instantly with your branding.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleLinkClick('twitter')}
                data-testid="button-social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleLinkClick('linkedin')}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleLinkClick('github')}
                data-testid="button-social-github"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => handleLinkClick('email')}
                data-testid="button-social-email"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.name)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm hover-elevate px-0 py-1 rounded"
                      data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t pt-8 mt-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold">Stay updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest AI insights and platform updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 min-w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="input-newsletter-email"
              />
              <Button type="submit" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 AIToolsSuite Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded"
              data-testid="link-privacy-footer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleLinkClick('terms')}
              className="hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded"
              data-testid="link-terms-footer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleLinkClick('cookies')}
              className="hover:text-foreground transition-colors hover-elevate px-2 py-1 rounded"
              data-testid="link-cookies-footer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}