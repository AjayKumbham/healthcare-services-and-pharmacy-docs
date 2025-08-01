
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function PamPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">PAM Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Pharmaceutical Asset Management for drug data operations.
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
          path="/api/auth/pam/inventory"
          description="Retrieve a list of all drug data."
          auth={true}
          requestExample={`GET /api/auth/pam/inventory
Authorization: Bearer <jwt-token>`}
          responseExample={`200 OK
Content-Type: application/json

[
  { "mId": 101, "medName": "Paracetamol" }
]`}
        />
      </div>
    </div>
  );
}
