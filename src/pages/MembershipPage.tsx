
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function MembershipPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Membership Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Membership plan information and management.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg">
          <p className="text-xs sm:text-sm">
            <strong>Base Path:</strong> <code className="break-all">/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <EndpointCard
          method="GET"
          path="/api/auth/getMemberships"
          description="Retrieve all available membership plans."
          auth={true}
          requestExample={`GET /api/auth/getMemberships
Authorization: Bearer <jwt-token>`}
          responseExample={`200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "planName": "Health Starter",
    "planDesc": "Comprehensive health monitoring...",
    "benefits": ["Regular check-ups", "Priority booking"],
    "discount": 20
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
  );
}
