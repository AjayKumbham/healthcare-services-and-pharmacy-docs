
import React, { createContext, useRef, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
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
import { NotFound } from './NotFound';

// Create context for main scroll container
export const MainScrollContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

const Index = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const mainRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Reliable hash scrolling
  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');
    const scrollContainer = mainRef.current;
    if (!scrollContainer) return;
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementRect = element.getBoundingClientRect();
        const containerRect = scrollContainer.getBoundingClientRect();
        const offsetPosition = scrollContainer.scrollTop + (elementRect.top - containerRect.top) - headerOffset;
        scrollContainer.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        // Highlight effect
        element.style.transition = 'all 0.3s ease';
        element.style.backgroundColor = '#dbeafe';
        element.style.borderLeft = '4px solid #3b82f6';
        element.style.paddingLeft = '12px';
        setTimeout(() => {
          element.style.backgroundColor = '';
          element.style.borderLeft = '';
          element.style.paddingLeft = '';
        }, 2000);
      }
    }, 100);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="px-6 py-4">
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
      <div className={`flex h-[calc(100vh-80px)] ${isHomePage ? '' : ''}`}>
        {/* Conditional Sidebar */}
        {!isHomePage && <ApiSidebar className="flex-shrink-0" />}
        {/* Main Content */}
        <MainScrollContext.Provider value={mainRef}>
          <main ref={mainRef} className="flex-1 overflow-y-auto">
            {/* Back Button for API Reference Pages */}
            {!isHomePage && (
              <div className="sticky top-0 z-10 bg-background border-b px-6 py-3">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Back to Home</span>
                </button>
              </div>
            )}
            <Routes>
              <Route path="/" element={<LandingPage />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </MainScrollContext.Provider>
      </div>
    </div>
  );
};

export default Index;
