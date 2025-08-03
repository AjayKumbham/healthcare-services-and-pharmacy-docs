import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu } from 'lucide-react';
import { ApiSidebar } from '@/components/ApiSidebar';
import { LandingPage } from '@/components/LandingPage';
import { PrimaryUserPage } from './PrimaryUserPage';
import { AuthPage } from './AuthPage';
import { UserManagementPage } from './UserManagementPage';
import { UploadPage } from './UploadPage';
import { MembershipPage } from './MembershipPage';
import { MembershipBenefitsPage } from './MembershipBenefitsPage';
import { OrdersPage } from './OrdersPage';
import { PharmacyStoresPage } from './PharmacyStoresPage';
import { PharmacyInventoryPage } from './PharmacyInventoryPage';
import { PamPage } from './PamPage';
import { PrescriptionsPage } from './PrescriptionsPage';
import { CartPage } from './CartPage';
import { useState } from 'react';
import NotFound from './NotFound';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isHomePage) {
    return (
      <div className="min-h-screen bg-background w-full">
        {/* Header for home page only */}
        <header className="bg-background border-b sticky top-0 z-50 w-full">
          <div className="px-4 py-4 w-full max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">API Documentation</h1>
                <p className="text-sm text-muted-foreground">Complete reference for all endpoints</p>
              </div>
            </div>
          </div>
        </header>
        <LandingPage />
      </div>
    );
  }

  // API Documentation layout with fixed header and sidebar
  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <header className="bg-background border-b z-50 flex-shrink-0 h-16">
        <div className="px-4 py-3 w-full h-full">
          <div className="flex items-center justify-between h-full max-w-none">
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-bold text-primary truncate">API Documentation</h1>
                <p className="text-xs text-muted-foreground hidden sm:block truncate">Complete reference for all endpoints</p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Back to Home button for desktop */}
            <button
              onClick={() => navigate('/')}
              className="hidden lg:flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm px-3 py-1.5 rounded-md hover:bg-accent"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content area with sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar overlay */}
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar - Fixed full height */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 w-72 lg:w-80
          transform transition-transform duration-300 ease-in-out lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex-shrink-0 top-16 lg:top-0
        `}>
          <ApiSidebar className="h-full w-full overflow-y-auto bg-background border-r" />
        </div>
        
        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-background">
          {/* Back button for mobile */}
          <div className="lg:hidden sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
          
          <div className="w-full">
            <Routes>
              <Route path="/primary-user/*" element={<PrimaryUserPage />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route path="/user-management/*" element={<UserManagementPage />} />
              <Route path="/upload/*" element={<UploadPage />} />
              <Route path="/membership/*" element={<MembershipPage />} />
              <Route path="/membership-benefits/*" element={<MembershipBenefitsPage />} />
              <Route path="/orders/*" element={<OrdersPage />} />
              <Route path="/pharmacy-stores/*" element={<PharmacyStoresPage />} />
              <Route path="/pharmacy-inventory/*" element={<PharmacyInventoryPage />} />
              <Route path="/pam/*" element={<PamPage />} />
              <Route path="/prescriptions/*" element={<PrescriptionsPage />} />
              <Route path="/cart/*" element={<CartPage />} />
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
