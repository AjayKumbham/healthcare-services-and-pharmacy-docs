
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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

const Index = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">API Documentation</h1>
                <p className="text-sm text-muted-foreground">Complete reference for all endpoints</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-primary">API Docs</h1>
              </div>
            </div>
            
            {/* Mobile menu button */}
            {!isHomePage && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-accent"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <div className={`flex h-[calc(100vh-80px)] ${isHomePage ? '' : ''}`}>
        {/* Conditional Sidebar */}
        {!isHomePage && (
          <>
            {/* Mobile sidebar overlay */}
            <div 
              className={`lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
                sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setSidebarOpen(false)}
            />
            
            {/* Sidebar */}
            <div className={`
              fixed lg:static inset-y-0 left-0 z-50 w-64 lg:w-auto
              transform transition-transform duration-300 ease-in-out lg:transform-none
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
              <ApiSidebar className="flex-shrink-0 h-full" />
            </div>
          </>
        )}
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto w-full lg:w-auto">
          {/* Back Button for API Reference Pages */}
          {!isHomePage && (
            <div className="sticky top-0 z-10 bg-background border-b px-4 sm:px-6 py-3">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
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
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Index;
