
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function CartPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Cart Controller</h1>
        <p className="text-lg text-muted-foreground">
          Shopping cart operations including add, update, remove, and retrieval.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="add-item-to-cart" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/addCart"
            description="Add a medication to the user's cart."
            auth={true}
            parameters={[
              {
                name: 'body',
                type: 'JSON',
                location: 'body',
                required: true,
                description: 'JSON object with cart item details'
              }
            ]}
            requestExample={`POST /api/auth/addCart
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "pharmacyId": 1,
  "medicationId": 101,
  "quantity": 2,
  "unitPrice": 10.5
}`}
            responseExample={`201 Created
Content-Type: application/json

{ "id": 1, "membershipId": "ENU12345" }`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'User, pharmacy, or medication not found',
                example: '"Error: <error message>"'
              }
            ]}
          />
        </div>
        <div id="get-user-cart" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/getUserCart"
            description="Retrieve all items in a user's cart by membershipId."
            auth={true}
            parameters={[
              {
                name: 'membershipId',
                type: 'string',
                location: 'query',
                required: true,
                description: 'The membership ID of the user'
              }
            ]}
            requestExample={`GET /api/auth/getUserCart?membershipId=ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[ { "id": 1, "membershipId": "ENU12345" } ]`}
          />
        </div>
        <div id="update-cart-item-quantity" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/updateCart"
            description="Update the quantity of a cart item."
            auth={true}
            parameters={[
              {
                name: 'mId',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'Medication ID'
              },
              {
                name: 'pId',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'Pharmacy ID'
              },
              {
                name: 'quantity',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'New quantity'
              }
            ]}
            requestExample={`POST /api/auth/updateCart?mId=101&pId=1&quantity=3
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

{ "id": 1, "membershipId": "ENU12345", "quantity": 3 }`}
          />
        </div>
        <div id="remove-item-from-cart" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/delCart"
            description="Remove an item from the user's cart."
            auth={true}
            parameters={[
              {
                name: 'membershipId',
                type: 'string',
                location: 'query',
                required: true,
                description: 'The membership ID of the user'
              },
              {
                name: 'medId',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'Medication ID'
              },
              {
                name: 'pharmId',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'Pharmacy ID'
              }
            ]}
            requestExample={`POST /api/auth/delCart?membershipId=ENU12345&medId=101&pharmId=1
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

"OK"`}
          />
        </div>
      </div>
    </div>
  );
}
