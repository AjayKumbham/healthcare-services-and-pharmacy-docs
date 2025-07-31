
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Users, Lock, UserCheck, Upload, Database, Package, Code, Store, FileText, ShoppingCart } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { MainScrollContext } from '@/pages/Index';

const sidebarSections = [
  {
    title: 'Primary User',
    icon: Users,
    path: '/primary-user',
    endpoints: [
      { name: 'Get Coverage Plan', path: '/primary-user', hash: '#get-coverage-plan' },
      { name: 'Validate Membership ID', path: '/primary-user', hash: '#validate-membership-id' },
      { name: 'Add Dependent Information', path: '/primary-user', hash: '#add-dependent-information' },
      { name: 'Get All Dependents', path: '/primary-user', hash: '#get-all-dependents' },
      { name: 'Update Dependent Information', path: '/primary-user', hash: '#update-dependent-information' },
      { name: 'Delete Dependent Information', path: '/primary-user', hash: '#delete-dependent-information' },
      { name: 'Find Health/Dependent Info', path: '/primary-user', hash: '#find-health-dependent-info' },
      { name: 'Save Security Information', path: '/primary-user', hash: '#save-security-information' },
      { name: 'Get Security Information', path: '/primary-user', hash: '#get-security-information' },
      { name: 'Update Security Information', path: '/primary-user', hash: '#update-security-information' },
      { name: 'Submit Payment Information', path: '/primary-user', hash: '#submit-payment-information' },
      { name: 'Get Payment Information', path: '/primary-user', hash: '#get-payment-information' },
      { name: 'Update Payment Information', path: '/primary-user', hash: '#update-payment-information' },
      { name: 'Delete Payment Information', path: '/primary-user', hash: '#delete-payment-information' },
      { name: 'Submit Health Information', path: '/primary-user', hash: '#submit-health-information' },
      { name: 'Get Health Information', path: '/primary-user', hash: '#get-health-information' },
      { name: 'Update Health Information', path: '/primary-user', hash: '#update-health-information' },
      { name: 'Submit Delivery Address', path: '/primary-user', hash: '#submit-delivery-address' },
      { name: 'Get Delivery Addresses', path: '/primary-user', hash: '#get-delivery-addresses' },
      { name: 'Update Delivery Address', path: '/primary-user', hash: '#update-delivery-address' },
      { name: 'Delete Delivery Address', path: '/primary-user', hash: '#delete-delivery-address' },
      { name: 'Submit Contact Information', path: '/primary-user', hash: '#submit-contact-information' },
      { name: 'Get Contact Information', path: '/primary-user', hash: '#get-contact-information' },
      { name: 'Update Contact Information', path: '/primary-user', hash: '#update-contact-information' },
      { name: 'Create Primary User', path: '/primary-user', hash: '#create-primary-user' },
      { name: 'Send OTP to Email', path: '/primary-user', hash: '#send-otp-to-email' },
      { name: 'Request OTP for Account Creation', path: '/primary-user', hash: '#request-otp-for-account-creation' },
      { name: 'Get Customer Details', path: '/primary-user', hash: '#get-customer-details' },
      { name: 'Verify OTP for Membership ID', path: '/primary-user', hash: '#verify-otp-for-membership-id' },
      { name: 'Validate OTP for Email', path: '/primary-user', hash: '#validate-otp-for-email' }
    ]
  },
  {
    title: 'Authentication',
    icon: Lock,
    path: '/auth',
    endpoints: [
      { name: 'Get User Status', path: '/auth', hash: '#get-user-status-across-tables' },
      { name: 'User Login', path: '/auth', hash: '#user-login-membership-idpassword' },
      { name: 'Register Customer', path: '/auth', hash: '#register-a-new-customer' }
    ]
  },
  {
    title: 'User Management',
    icon: UserCheck,
    path: '/user-management',
    endpoints: [
      { name: 'Get User by ID', path: '/user-management', hash: '#get-user-by-id' }
    ]
  },
  {
    title: 'File Upload',
    icon: Upload,
    path: '/upload',
    endpoints: [
      { name: 'Upload Prescription', path: '/upload', hash: '#upload-and-parse-prescription-file' }
    ]
  },
  {
    title: 'Membership',
    icon: Database,
    path: '/membership',
    endpoints: [
      { name: 'Get All Membership Plans', path: '/membership', hash: '#get-all-membership-plans' }
    ]
  },
  {
    title: 'Membership Benefits',
    icon: Package,
    path: '/membership-benefits',
    endpoints: [
      { name: 'Get Plans with Benefits', path: '/membership-benefits', hash: '#get-all-membership-plans-with-benefits' }
    ]
  },
  {
    title: 'Orders',
    icon: Code,
    path: '/orders',
    endpoints: [
      { name: 'Place Order', path: '/orders', hash: '#place-an-order' },
      { name: 'Get All Orders', path: '/orders', hash: '#get-all-orders-for-a-user' },
      { name: 'Cancel Order', path: '/orders', hash: '#cancel-an-order' }
    ]
  },
  {
    title: 'Pharmacy Stores',
    icon: Store,
    path: '/pharmacy-stores',
    endpoints: [
      { name: 'Get All Stores', path: '/pharmacy-stores', hash: '#get-all-pharmacy-stores' },
      { name: 'Get Store Inventory', path: '/pharmacy-stores', hash: '#get-inventory-for-a-store' }
    ]
  },
  {
    title: 'Pharmacy Inventory',
    icon: Database,
    path: '/pharmacy-inventory',
    endpoints: [
      { name: 'Get Inventory Summary', path: '/pharmacy-inventory', hash: '#get-all-inventory-summary' },
      { name: 'Get All Drugs', path: '/pharmacy-inventory', hash: '#get-all-drugs' },
      { name: 'Get Detailed Inventory', path: '/pharmacy-inventory', hash: '#get-all-inventory-detailed' }
    ]
  },
  {
    title: 'PAM',
    icon: Package,
    path: '/pam',
    endpoints: [
      { name: 'Get All Drug Data', path: '/pam', hash: '#get-all-drug-data' }
    ]
  },
  {
    title: 'Prescriptions',
    icon: FileText,
    path: '/prescriptions',
    endpoints: [
      { name: 'Get Prescriptions', path: '/prescriptions', hash: '#get-prescriptions-for-a-user' },
      { name: 'Add Prescription', path: '/prescriptions', hash: '#add-a-new-prescription' },
      { name: 'End Prescription', path: '/prescriptions', hash: '#end-a-prescription' }
    ]
  },
  {
    title: 'Cart',
    icon: ShoppingCart,
    path: '/cart',
    endpoints: [
      { name: 'Add to Cart', path: '/cart', hash: '#add-item-to-cart' },
      { name: 'Get User Cart', path: '/cart', hash: '#get-user-cart' },
      { name: 'Update Cart', path: '/cart', hash: '#update-cart-item-quantity' },
      { name: 'Remove from Cart', path: '/cart', hash: '#remove-item-from-cart' }
    ]
  }
];

interface ApiSidebarProps {
  className?: string;
}

export function ApiSidebar({ className }: ApiSidebarProps) {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = React.useState<string[]>(['Primary User']);
  const mainScrollRef = useContext(MainScrollContext);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(s => s !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const handleEndpointClick = (endpoint: { path: string; hash: string }) => {
    // Navigate to the page with hash
    navigate(endpoint.path + endpoint.hash);
  };

  return (
    <div className={cn("w-64 border-r bg-background h-full overflow-y-auto", className)}>
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">API Reference</h2>
      </div>
      
      <nav className="p-2">
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
