
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function PamPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">PAM Controller</h1>
        <p className="text-lg text-muted-foreground">
          Pharmaceutical Asset Management for drug data operations.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="get-all-drug-data" className="scroll-mt-[100px]">
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
    </div>
  );
}
