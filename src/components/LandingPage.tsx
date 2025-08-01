
import React from 'react';
import { Heart, Shield, Globe, Zap, FileText, Users, ArrowRight, User, ShoppingCart, Settings, Database, Lock, Bell, Layers, Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function LandingPage() {
  const navigate = useNavigate();

  // ... keep existing code (coreFeatures, architectureFeatures, dataEntities, userRoles, uiComponents, uiFeatures, designPrinciples arrays)

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center space-y-6 sm:space-y-8 py-8 sm:py-12 lg:py-16">
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary px-4">
            Healthcare Services & Pharmacy Platform
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Complete healthcare management platform with comprehensive API documentation. 
            Explore our modular architecture, secure authentication, and enterprise-grade features 
            designed for patients, pharmacies, and healthcare administrators.
          </p>
          
          {/* Stats Section - Made fully responsive */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-12 text-xs sm:text-sm px-4">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium whitespace-nowrap">13 Core Features</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium whitespace-nowrap">54 API Endpoints</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium whitespace-nowrap">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse flex-shrink-0"></div>
              <span className="font-medium whitespace-nowrap">14 Data Entities</span>
            </div>
          </div>
          
          <div className="pt-4 sm:pt-6 lg:pt-8 px-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/primary-user')}
              className="text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
            >
              View API Documentation
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
            </Button>
          </div>
        </div>

        {/* Main Content Tabs */}
        <div className="pb-8 sm:pb-12 lg:pb-16">
          <Tabs defaultValue="features" className="w-full">
            <div className="w-full overflow-x-auto">
              <TabsList className="grid w-full grid-cols-4 h-10 sm:h-12 min-w-[320px]">
                <TabsTrigger value="features" className="text-xs sm:text-base px-2 sm:px-4">Features</TabsTrigger>
                <TabsTrigger value="architecture" className="text-xs sm:text-base px-2 sm:px-4">Architecture</TabsTrigger>
                <TabsTrigger value="data-model" className="text-xs sm:text-base px-2 sm:px-4">Data Model</TabsTrigger>
                <TabsTrigger value="ui-overview" className="text-xs sm:text-base px-2 sm:px-4">UI Overview</TabsTrigger>
              </TabsList>
            </div>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
              <div className="text-center space-y-4 sm:space-y-6 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">Platform Features</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive healthcare management capabilities for all user types with enterprise-grade security and compliance
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* ... keep existing code (coreFeatures.map) */}
              </div>
            </TabsContent>

            {/* Architecture Tab */}
            <TabsContent value="architecture" className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
              <div className="text-center space-y-4 sm:space-y-6 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">System Architecture</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Enterprise-grade, modular architecture built for scalability, security, and maintainability
                </p>
              </div>

              {/* Architecture Diagram - Made responsive */}
              <Card className="shadow-lg">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl text-primary">Architecture Diagram</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="flex justify-center">
                    <div className="w-full max-w-4xl h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="text-center px-4">
                        <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-primary/40 mx-auto mb-4" />
                        <p className="text-gray-500 text-base sm:text-lg">Architecture Diagram</p>
                        <p className="text-gray-400 text-xs sm:text-sm">Will be updated with actual diagram</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ... keep existing code (architecture content grid and cards) */}
            </TabsContent>

            {/* Data Model Tab */}
            <TabsContent value="data-model" className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
              <div className="text-center space-y-4 sm:space-y-6 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">Data Model Overview</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive data model with 14 core entities, secure relationships, and enterprise-grade data protection
                </p>
              </div>

              {/* Data Model Table - Made responsive with horizontal scroll */}
              <Card className="shadow-lg">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl text-primary">Core Entities</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-sm sm:text-lg text-primary min-w-[120px]">Entity</TableHead>
                          <TableHead className="text-sm sm:text-lg text-primary min-w-[200px]">Key Fields</TableHead>
                          <TableHead className="text-sm sm:text-lg text-primary min-w-[150px]">Relationships</TableHead>
                          <TableHead className="text-sm sm:text-lg text-primary min-w-[200px]">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {/* ... keep existing code (dataEntities.map) */}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* ... keep existing code (data security and features cards) */}
            </TabsContent>

            {/* UI Overview Tab */}
            <TabsContent value="ui-overview" className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
              {/* ... keep existing code (UI overview content) */}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="text-lg sm:text-xl font-bold">HealthCare API</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm sm:text-base px-4">
              Complete healthcare services and pharmacy management platform with comprehensive API documentation.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              © 2024 HealthCare API Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
