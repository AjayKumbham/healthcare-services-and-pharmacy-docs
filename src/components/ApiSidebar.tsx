
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Users, Lock, UserCheck, Upload, Database, Package, Code, Store, FileText, ShoppingCart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

// ... keep existing code (sidebarSections array)

interface ApiSidebarProps {
  className?: string;
}

export function ApiSidebar({ className }: ApiSidebarProps) {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = React.useState<string[]>(['Primary User']);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const handleEndpointClick = (endpoint: { path: string; hash: string }) => {
    const targetId = endpoint.hash.substring(1);
    
    navigate(endpoint.path);
    
    const scrollToElement = (attempt = 0) => {
      const maxAttempts = 20;
      
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        element.style.transition = 'all 0.3s ease';
        element.style.backgroundColor = '#dbeafe';
        element.style.borderLeft = '4px solid #3b82f6';
        element.style.paddingLeft = '12px';
        
        setTimeout(() => {
          element.style.backgroundColor = '';
          element.style.borderLeft = '';
          element.style.paddingLeft = '';
        }, 2000);
      } else if (attempt < maxAttempts) {
        setTimeout(() => scrollToElement(attempt + 1), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    scrollToElement();
  };

  return (
    <div className={cn("flex flex-col h-full bg-background", className)}>
      {/* Sidebar Header */}
      <div className="p-4 border-b flex-shrink-0">
        <h2 className="text-lg font-semibold">API Reference</h2>
      </div>
      
      {/* Scrollable Navigation */}
      <nav className="flex-1 overflow-y-auto p-2">
        {sidebarSections.map((section) => {
          const Icon = section.icon;
          const isOpen = openSections.includes(section.title);
          
          return (
            <Collapsible key={section.title} open={isOpen} onOpenChange={() => toggleSection(section.title)}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-2 text-left hover:bg-muted rounded-md group">
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent className="ml-6 mt-1 space-y-1">
                {section.endpoints.map((endpoint) => (
                  <button
                    key={endpoint.path + endpoint.name + endpoint.hash}
                    onClick={() => handleEndpointClick(endpoint)}
                    className="block w-full text-left p-2 text-sm rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {endpoint.name}
                  </button>
                ))}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </div>
  );
}
