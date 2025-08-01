
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Orders Controller</h1>
        <p className="text-lg text-muted-foreground">
          Order management including placement, retrieval, and cancellation.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="place-an-order" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/placeOrder"
            description="Place an order for the items in the user's cart."
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
                name: 'time',
                type: 'integer',
                location: 'query',
                required: true,
                description: 'Delivery hour offset'
              }
            ]}
            requestExample={`POST /api/auth/placeOrder?membershipId=ENU12345&time=10
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

{
  "orderId": 123,
  "membershipId": "ENU12345",
  "price": 120.5,
  "status": "Confirmed",
  "orderedDate": "2024-07-20T10:00:00Z",
  "deliveryTime": "2024-07-21T22:00:00Z"
}`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Cart is empty or user not found',
                example: 'null'
              }
            ]}
          />
        </div>
        <div id="get-all-orders-for-a-user" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/getOrders"
            description="Retrieve all orders for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: 'membershipID',
                type: 'string',
                location: 'query',
                required: true,
                description: 'The membership ID of the user'
              }
            ]}
            requestExample={`GET /api/auth/getOrders?membershipID=ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

[
  {
    "orderId": 123,
    "membershipId": "ENU12345",
    "price": 120.5,
    "status": "Confirmed",
    "orderedDate": "2024-07-20T10:00:00Z",
    "deliveryTime": "2024-07-21T22:00:00Z"
  }
]`}
          />
        </div>
        <div id="cancel-an-order" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/cancelOrder"
            description="Cancel an order by orderId."
            auth={true}
            parameters={[
              {
                name: 'body',
                type: 'JSON',
                location: 'body',
                required: true,
                description: 'JSON object containing orderId'
              }
            ]}
            requestExample={`POST /api/auth/cancelOrder
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "orderId": 123
}`}
            responseExample={`200 OK
Content-Type: application/json

"Order cancelled successfully"`}
            errorResponses={[
              {
                status: '404 Not Found',
                description: 'Order not found',
                example: '"Order not found"'
              },
              {
                status: '400 Bad Request',
                description: 'Order is already cancelled',
                example: '"Order is already cancelled"'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
