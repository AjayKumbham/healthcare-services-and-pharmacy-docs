
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';
import { useScrollToHash } from '../hooks/use-scroll-to-hash';

export function PharmacyStoresPage() {
  useScrollToHash();
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Pharmacy Stores Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Pharmacy store listings and inventory management.
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
          path="/api/auth/stores/all"
          description="Retrieve a list of all pharmacy stores."
          auth={true}
          requestExample={`GET /api/auth/stores/all
Authorization: Bearer <jwt-token>`}
          responseExample={`200 OK
Content-Type: application/json

[
  {
    "phId": 1,
    "name": "PharmaOne",
    "address": "123 Main St",
    "contact": "1234567890"
  }
]`}
        />

        <EndpointCard
          method="POST"
          path="/api/auth/storeinventory"
          description="Retrieve the inventory for a specific pharmacy store by store ID."
          auth={true}
          parameters={[
            {
              name: 'body',
              type: 'JSON',
              location: 'body',
              required: true,
              description: 'JSON object containing pharmacy ID'
            }
          ]}
          requestExample={`POST /api/auth/storeinventory
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "phId": 1
}`}
          responseExample={`200 OK
Content-Type: application/json

[
  {
    "phId": 1,
    "mId": 101,
    "medName": "Paracetamol",
    "quantity": 100,
    "drugType": "Tablet",
    "brandName": "BrandA"
  }
]`}
          errorResponses={[
            {
              status: '404 Not Found',
              description: 'Store or inventory not found',
              example: 'null'
            }
          ]}
        />
      </div>
    </div>
  );
}
