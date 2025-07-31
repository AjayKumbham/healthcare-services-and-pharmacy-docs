
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function PharmacyInventoryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Pharmacy Inventory Controller</h1>
        <p className="text-lg text-muted-foreground">
          Drug inventory and medication data management across all pharmacies.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="get-all-inventory-summary" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/inventory"
            description="Retrieve a summary list of all inventory items (pharmacy, drug, price per pill)."
            auth={true}
            requestExample={`GET /api/auth/inventory
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[
  { "phId": 1, "mId": 101, "pricePerPill": 2.5 }
]`}
          />
        </div>
        <div id="get-all-drugs" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/all"
            description="Retrieve a list of all drugs in the system."
            auth={true}
            requestExample={`GET /api/auth/all
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[
  { "mId": 101, "medName": "Paracetamol" }
]`}
          />
        </div>
        <div id="get-all-inventory-detailed" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/inventory/all"
            description="Retrieve a detailed list of all inventory items."
            auth={true}
            requestExample={`GET /api/auth/inventory/all
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[
  { "id": 1, "phId": 1, "drugData": {}, "quantity": 100 }
]`}
          />
        </div>
      </div>
    </div>
  );
}
