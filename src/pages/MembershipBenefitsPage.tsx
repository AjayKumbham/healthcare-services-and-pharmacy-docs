
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EndpointCard } from '@/components/EndpointCard';

export function MembershipBenefitsPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 20;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        el.style.transition = 'all 0.3s ease';
        el.style.backgroundColor = '#dbeafe';
        el.style.borderLeft = '4px solid #3b82f6';
        el.style.paddingLeft = '12px';
        setTimeout(() => {
          el.style.backgroundColor = '';
          el.style.borderLeft = '';
          el.style.paddingLeft = '';
        }, 2000);
      }
    }
  }, [location.hash]);
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Membership Benefits Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Membership plans with detailed benefits information.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg">
          <p className="text-xs sm:text-sm">
            <strong>Base Path:</strong> <code className="break-all">/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div id="get-all-membership-plans-with-benefits">
          <EndpointCard
            method="GET"
            path="/api/auth/getMembershipPlans"
            description="Retrieve all membership plans with their associated benefits."
            auth={true}
            requestExample={`GET /api/auth/getMembershipPlans
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[
  {
    "membership": {
      "id": 1,
      "planName": "Health Starter",
      "planDesc": "Comprehensive health monitoring...",
      "discount": 20
    },
    "membershipBenefits": [
      "Regular check-ups",
      "Priority booking"
    ]
  }
]`}
            errorResponses={[
              {
                status: '401 Unauthorized',
                description: 'Missing or invalid token'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
