import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/veeragit8886', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/veera-narayana-67a236168', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:veeranarayanavra@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Veera Narayana
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Fresher Web Developer passionate about creating beautiful, functional web applications. 
              Currently learning and growing at VBLP Tech Solutions pvt.ltd.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Let's Connect
            </h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>Open to new opportunities</p>
              <p>Available for freelance projects</p>
              <p>Always learning and growing</p>
            </div>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              © {currentYear} Veera Narayana. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center text-center md:text-right">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
