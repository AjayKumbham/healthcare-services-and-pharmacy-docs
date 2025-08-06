import React from 'react';
import { Heart, Shield, Globe, Zap, FileText, Users, ArrowRight, User, ShoppingCart, Settings, Database, Lock, Bell, Layers, Phone, Mail, MapPin, Clock, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function LandingPage() {
  const navigate = useNavigate();

  const coreFeatures = [
    {
      icon: User,
      title: "User Authentication & Onboarding",
      description: "Secure registration, login, and onboarding process with OTP-based registration and email verification.",
      details: [
        "OTP-based registration and email verification",
        "Membership ID validation and generation",
        "Secure login/logout with JWT tokens",
        "Password reset and recovery via email/OTP",
        "Multi-step onboarding with validation at each stage",
        "Role-based access from the start"
      ],
      users: "All users (patients, pharmacies, admins)"
    },
    {
      icon: Settings,
      title: "User Profile Management",
      description: "Centralized management of user information including contact, health data, and dependents.",
      details: [
        "Update contact info, payment methods, delivery addresses",
        "Manage health information: conditions, allergies, medications, notes",
        "Add, edit, or remove dependents (family members)",
        "Modular profile sections for easy navigation",
        "Data validation and secure storage"
      ],
      users: "All users"
    },
    {
      icon: Shield,
      title: "Membership Plans",
      description: "Subscription-based plans with tiered benefits and dynamic discount application.",
      details: [
        "View, select, and upgrade plans (Health Starter, Wellness Plus, Vital Care)",
        "Each plan offers unique benefits and discounts",
        "Plan status and benefits reflected throughout the platform",
        "Dynamic discount application in cart and orders",
        "Plan-specific access to premium features"
      ],
      users: "Users (patients)"
    },
    {
      icon: Database,
      title: "Pharmacy & Inventory Management",
      description: "Comprehensive tools for pharmacies to manage their stores and inventory with real-time updates.",
      details: [
        "Pharmacy dashboard with sidebar navigation",
        "Add, update, or remove drugs from inventory",
        "View and manage incoming orders",
        "Update store profile and contact info",
        "Real-time inventory updates",
        "Admin oversight and reporting"
      ],
      users: "Pharmacy users, admins"
    },
    {
      icon: FileText,
      title: "Prescription Management",
      description: "End-to-end prescription upload, parsing, and management with automated data extraction.",
      details: [
        "Upload prescription files (PDF, image, etc.)",
        "System parses and extracts patient/medication data",
        "Users and pharmacies can view and manage prescriptions",
        "Mark prescriptions as ended when completed",
        "Automated data extraction from uploaded files",
        "Secure storage and access control"
      ],
      users: "Users, pharmacies, admins"
    },
    {
      icon: ShoppingCart,
      title: "Cart & Order Management",
      description: "E-commerce style cart and order processing with dynamic discount calculation.",
      details: [
        "Add medications to cart from search or prescription",
        "Update quantities, remove items, and view cart summary",
        "Checkout with payment method selection and order placement",
        "View order history and order details",
        "Cancel orders if needed",
        "Minimum order value enforcement",
        "Dynamic discount calculation based on membership",
        "Email/SMS notifications for order status"
      ],
      users: "Users, pharmacies, admins"
    },
    {
      icon: Heart,
      title: "Health Dashboard",
      description: "Centralized dashboard for managing health conditions, allergies, medications, and notes.",
      details: [
        "View and update health conditions, allergies, medications",
        "Add personal notes and alerts",
        "Overview of health status and history",
        "Integrated with prescription and order modules",
        "Alerts for critical health information"
      ],
      users: "Users (patients)"
    },
    {
      icon: Settings,
      title: "Admin Panel",
      description: "Centralized management for all platform data with role-based access control.",
      details: [
        "Tabbed interface for managing consumers, stores, and inventory",
        "View, edit, and remove user and pharmacy data",
        "Oversee all orders, prescriptions, and memberships",
        "Role-based access control",
        "Audit and reporting features"
      ],
      users: "Admins"
    },
    {
      icon: Users,
      title: "Support & FAQs",
      description: "Comprehensive support and self-service resources with 24/7 availability.",
      details: [
        "24/7 support section with contact options",
        "Frequently Asked Questions (FAQs) page",
        "Access to help resources and guides",
        "Integrated with chatbot for instant answers",
        "Dynamic FAQ updates"
      ],
      users: "All users"
    },
    {
      icon: Bell,
      title: "Chatbot (PAMBot)",
      description: "AI-powered virtual assistant for user queries and support with context-aware responses.",
      details: [
        "Users can ask questions and get instant responses",
        "Integrated with support and FAQ modules",
        "AI-powered, context-aware responses",
        "Available across the platform"
      ],
      users: "All users"
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Enterprise-grade security with HIPAA compliance and role-based access control.",
      details: [
        "Role-based access control (user, admin, pharmacy)",
        "Secure endpoints and data encryption",
        "Compliance with healthcare data standards (HIPAA)",
        "JWT authentication for all sensitive operations",
        "Regular audits and monitoring"
      ],
      users: "All users, admins"
    },
    {
      icon: Bell,
      title: "Notifications & Alerts",
      description: "Real-time feedback and communication with customizable preferences.",
      details: [
        "Alerts and notifications for actions, errors, and status updates",
        "Email/SMS notifications for important events",
        "Customizable notification preferences",
        "Integrated with all major modules"
      ],
      users: "All users"
    },
    {
      icon: Layers,
      title: "Modular & Scalable Architecture",
      description: "Clean, maintainable, and extensible codebase following industry best practices.",
      details: [
        "Clear separation of frontend, backend, and data layers",
        "RESTful APIs and modern UI",
        "Easily extensible for future features and integrations",
        "Follows industry best practices for scalability",
        "Designed for easy onboarding of new developers"
      ],
      users: "Developers, maintainers"
    }
  ];

  const architectureFeatures = [
    {
      layer: "Frontend",
      technology: "React, Vite, Tailwind CSS",
      responsibility: "User interface, routing, state management, secure token storage, form validation, API communication"
    },
    {
      layer: "Backend",
      technology: "Java, Spring Boot, JPA/Hibernate",
      responsibility: "RESTful APIs, authentication, authorization, business logic, data validation, email/SMS integration"
    },
    {
      layer: "Database",
      technology: "MySQL/PostgreSQL",
      responsibility: "Persistent storage, data integrity, relationships, foreign key constraints, indexing"
    },
    {
      layer: "Security",
      technology: "JWT, Role-based Access, HTTPS",
      responsibility: "Authentication, authorization, data protection, encryption, session management"
    }
  ];

  const dataEntities = [
    { 
      entity: "User", 
      fields: "id, username, email, phone, roles, membershipId", 
      relationships: "Membership, Orders, Prescriptions, Health, Payment, Address",
      description: "Core user entity with authentication and profile data"
    },
    { 
      entity: "Pharmacy (PharmaStores)", 
      fields: "phId, name, address, contact, userId", 
      relationships: "Inventory, Orders, Users",
      description: "Pharmacy store information and management"
    },
    { 
      entity: "Drug (DrugData)", 
      fields: "mId, medName, brandName, price, drugType", 
      relationships: "Inventory, Prescriptions, CartItems",
      description: "Medication and drug information catalog"
    },
    { 
      entity: "Inventory (PharmaMedInventory)", 
      fields: "id, phId, drugData, quantity, pricePerPill", 
      relationships: "Pharmacy, Drug",
      description: "Pharmacy inventory and stock management"
    },
    { 
      entity: "Prescription", 
      fields: "id, membershipId, patientName, doctorName, hospitalName, date, medications, endDate", 
      relationships: "User, Medications, Orders",
      description: "Prescription documents and medication lists"
    },
    { 
      entity: "CartItem", 
      fields: "id, membershipId, pharmacy, medication, quantity, unitPrice", 
      relationships: "User, Pharmacy, Drug",
      description: "Shopping cart and item management"
    },
    { 
      entity: "Membership", 
      fields: "id, planName, planDesc, benefits, discount", 
      relationships: "Users, Orders",
      description: "Subscription plans and benefits management"
    },
    { 
      entity: "Order (UserOrders)", 
      fields: "orderId, membershipId, items, price, status, orderedDate, deliveryTime", 
      relationships: "User, CartItems, Pharmacy",
      description: "Order processing and fulfillment tracking"
    },
    { 
      entity: "DependentInformation", 
      fields: "id, membershipId, name, healthConditions, allergies, currentMedications", 
      relationships: "User",
      description: "Family member and dependent health information"
    },
    { 
      entity: "HealthInformation", 
      fields: "id, membershipId, conditions, allergies, medications, notes", 
      relationships: "User",
      description: "Personal health records and medical history"
    },
    { 
      entity: "PaymentInformation", 
      fields: "id, membershipId, cardType, cardNumber, expirationDate, cvv, upiId", 
      relationships: "User",
      description: "Payment methods and financial data (encrypted)"
    },
    { 
      entity: "DeliveryAddressInformation", 
      fields: "id, membershipId, homeNumber, street, city, state, pinCode, country, setAsDefault", 
      relationships: "User",
      description: "Delivery addresses and location data"
    },
    { 
      entity: "SecurityInformation", 
      fields: "id, membershipId, password, securityQuestion, securityAnswer", 
      relationships: "User",
      description: "Security credentials and authentication data"
    },
    { 
      entity: "ContactInformation", 
      fields: "id, membershipId, emailAddress, mobileNumber, preferredContactMethod", 
      relationships: "User",
      description: "Contact preferences and communication methods"
    }
  ];

  const userRoles = [
    {
      role: "Regular User",
      pages: "Landing, Authentication, Home, Profile, Cart, Checkout, Prescriptions, Health Dashboard, Membership, Support, Order History",
      features: "Search drugs, manage profile, upload prescriptions, place orders, view health data, subscription management",
      journeys: "Registration with OTP → Profile setup → Prescription upload → Order placement → Health management"
    },
    {
      role: "Pharmacy User",
      pages: "Store Dashboard, Inventory, Orders, Profile, Reports",
      features: "Manage inventory, fulfill orders, update store details, view analytics, stock management",
      journeys: "Store setup → Inventory management → Order fulfillment → Performance tracking"
    },
    {
      role: "Admin User",
      pages: "Admin Dashboard, User Management, Store Management, Inventory Oversight, Reports, Analytics",
      features: "Manage users, approve stores, audit inventory, system oversight, compliance monitoring",
      journeys: "System monitoring → User management → Store approval → Inventory auditing → Report generation"
    }
  ];

  const uiComponents = [
    {
      component: "Header & Footer",
      description: "Consistent branding and navigation across all pages",
      features: "Persistent navigation bar, support links, legal information"
    },
    {
      component: "Sidebar",
      description: "Contextual navigation for dashboards",
      features: "Pharmacy and admin dashboard navigation, role-based menu items"
    },
    {
      component: "Forms",
      description: "User input and data collection",
      features: "Login, signup, profile management, prescription upload forms"
    },
    {
      component: "Tables & Lists",
      description: "Data display and management",
      features: "Inventory listings, order history, user management tables"
    },
    {
      component: "Cards",
      description: "Information display containers",
      features: "Health conditions, medications, membership plans, feature highlights"
    },
    {
      component: "Modals & Popups",
      description: "Contextual interactions",
      features: "Confirmations, alerts, quick actions, detailed views"
    },
    {
      component: "Chatbot Widget",
      description: "AI-powered assistance",
      features: "Floating assistant, instant help, context-aware responses"
    },
    {
      component: "Notifications",
      description: "User feedback system",
      features: "Toast notifications, banners, real-time updates"
    }
  ];

  const uiFeatures = [
    {
      feature: "Protected Routes",
      description: "Secure access control",
      implementation: "Authentication required for sensitive pages, automatic redirect to login"
    },
    {
      feature: "Role-Based UI",
      description: "Adaptive interface",
      implementation: "Navigation and actions adapt based on user role (User, Pharmacy, Admin)"
    },
    {
      feature: "Responsive Design",
      description: "Multi-device compatibility",
      implementation: "Mobile-friendly layouts, touch support, adaptive breakpoints"
    },
    {
      feature: "Real-Time Feedback",
      description: "Immediate user response",
      implementation: "Loading indicators, success/error notifications, progress bars"
    },
    {
      feature: "Accessibility",
      description: "Inclusive design",
      implementation: "Keyboard navigation, ARIA labels, color contrast compliance"
    },
    {
      feature: "Multi-Step Flows",
      description: "Guided user processes",
      implementation: "Stepper components for onboarding and checkout workflows"
    },
    {
      feature: "Contextual Help",
      description: "Integrated assistance",
      implementation: "Tooltips, FAQs, chatbot integration throughout the platform"
    }
  ];

  const designPrinciples = [
    {
      principle: "Clarity",
      description: "Simple, intuitive navigation and clear calls to action",
      implementation: "Clean layouts, consistent typography, logical information hierarchy"
    },
    {
      principle: "Consistency",
      description: "Uniform design language and component usage",
      implementation: "Standardized components, consistent spacing, unified color scheme"
    },
    {
      principle: "Feedback",
      description: "Immediate feedback for user actions",
      implementation: "Loading states, success/error notifications, progress indicators"
    },
    {
      principle: "Security",
      description: "Visual cues for protected actions and sensitive data",
      implementation: "Secure badges, authentication states, privacy indicators"
    },
    {
      principle: "Efficiency",
      description: "Minimized steps for common tasks",
      implementation: "Streamlined workflows, smart defaults, quick actions"
    },
    {
      principle: "Support",
      description: "Easy access to help and self-service resources",
      implementation: "Integrated help system, FAQ integration, chatbot assistance"
    }
  ];

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
          Comprehensive developer documentation covering features, APIs, system architecture, data models, and UI overview for our healthcare management platform designed for patients, pharmacies, and healthcare administrators.
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
                {coreFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-2 rounded-lg">
                          {feature.users}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
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
                        <a href={`${import.meta.env.BASE_URL}architecture.png`} target="_blank" rel="noopener noreferrer">
                          <img
                            src={`${import.meta.env.BASE_URL}architecture.png`}
                            alt="Architecture Diagram"
                            className="w-full h-auto object-contain"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Key Principles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Shield className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg text-primary">Security First</h4>
                          <p className="text-muted-foreground">JWT authentication, role-based access, HTTPS encryption, HIPAA compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Zap className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg text-primary">Scalable</h4>
                          <p className="text-muted-foreground">Stateless backend, horizontal scaling, cloud-ready architecture</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Layers className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg text-primary">Modular</h4>
                          <p className="text-muted-foreground">Clean separation, API-first design, extensible components</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Globe className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-lg text-primary">Compliant</h4>
                          <p className="text-muted-foreground">HIPAA-ready, audit trails, data protection standards</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Data Flow Examples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary">User Registration</h4>
                        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                          User → Frontend (Signup Form) → Backend /api/auth/register → DB (create user, send OTP) → Email Service (send OTP)
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-primary">Order Placement</h4>
                        <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                          User → Frontend (Cart/Checkout) → Backend /api/auth/placeOrder → DB (create order, update inventory) → Email/SMS (confirmation)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Layer Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-lg text-primary">Layer</TableHead>
                        <TableHead className="text-lg text-primary">Technology</TableHead>
                        <TableHead className="text-lg text-primary">Responsibility</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {architectureFeatures.map((layer, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-semibold text-base">{layer.layer}</TableCell>
                          <TableCell className="text-base">{layer.technology}</TableCell>
                          <TableCell className="text-base">{layer.responsibility}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
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
                        {dataEntities.map((entity, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-semibold text-base">{entity.entity}</TableCell>
                            <TableCell className="text-sm font-mono">{entity.fields}</TableCell>
                            <TableCell className="text-sm">{entity.relationships}</TableCell>
                            <TableCell className="text-sm">{entity.description}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Data Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Password Protection</h4>
                          <p className="text-muted-foreground text-sm">Passwords hashed and salted using industry standards</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Data Encryption</h4>
                          <p className="text-muted-foreground text-sm">Sensitive data encrypted (card numbers, CVV, personal info)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Data Integrity</h4>
                          <p className="text-muted-foreground text-sm">Foreign key constraints and validation at multiple levels</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Validation</h4>
                          <p className="text-muted-foreground text-sm">Application and database level validation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Auto-generated IDs</h4>
                          <p className="text-muted-foreground text-sm">Unique identifiers for all entities (UUIDs)</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Layers className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Normalized Design</h4>
                          <p className="text-muted-foreground text-sm">Optimized database structure for performance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Audit Trails</h4>
                          <p className="text-muted-foreground text-sm">Complete tracking for critical operations</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Foreign Key Constraints</h4>
                          <p className="text-muted-foreground text-sm">Maintain data integrity and relationships</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* UI Overview Tab */}
            <TabsContent value="ui-overview" className="space-y-8 sm:space-y-12 mt-6 sm:mt-8">
              <div className="text-center space-y-6 px-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">User Interface Overview</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Role-based interfaces designed for optimal user experience with responsive design and accessibility compliance
                </p>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Navigation Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Header Navigation</h4>
                          <p className="text-muted-foreground text-sm">Persistent navigation bar with links to Home, Prescriptions, Cart, Profile, and Upload</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Layers className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Sidebar Navigation</h4>
                          <p className="text-muted-foreground text-sm">Contextual navigation for Pharmacy and Admin dashboards</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Protected Routes</h4>
                          <p className="text-muted-foreground text-sm">Authentication required for sensitive pages with automatic redirect to login</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary">Responsive Design</h4>
                          <p className="text-muted-foreground text-sm">UI adapts to desktop and mobile devices with touch support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">User Role Flows</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-lg text-primary">Role</TableHead>
                        <TableHead className="text-lg text-primary">Main Pages</TableHead>
                        <TableHead className="text-lg text-primary">Key Features</TableHead>
                        <TableHead className="text-lg text-primary">User Journeys</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {userRoles.map((role, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-semibold text-base">{role.role}</TableCell>
                          <TableCell className="text-sm">{role.pages}</TableCell>
                          <TableCell className="text-sm">{role.features}</TableCell>
                          <TableCell className="text-sm">{role.journeys}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">UI Components & Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {uiComponents.map((component, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-lg text-primary">{component.component}</h4>
                        <p className="text-muted-foreground">{component.description}</p>
                        <p className="text-sm text-primary bg-primary/10 p-2 rounded">{component.features}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Special UI/UX Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {uiFeatures.map((feature, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-lg text-primary">{feature.feature}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                        <p className="text-sm text-primary bg-primary/10 p-2 rounded">{feature.implementation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">UX Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {designPrinciples.map((principle, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-semibold text-lg text-primary">{principle.principle}</h4>
                        <p className="text-muted-foreground">{principle.description}</p>
                        <p className="text-sm text-primary bg-primary/10 p-2 rounded">{principle.implementation}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <span className="text-lg sm:text-xl font-bold">Developer & Platform Docs</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-sm sm:text-base px-4">
            Complete reference and implementation guide for healthcare services and pharmacy platform.
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm">
              © 2025 HealthCare Services & Pharmacy Platform Docs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
