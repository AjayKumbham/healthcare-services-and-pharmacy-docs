
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function UserManagementPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">User Management Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          User retrieval and management endpoints for internal operations.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg">
          <p className="text-xs sm:text-sm">
            <strong>Base Path:</strong> <code className="break-all">/api/customers/users</code>
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <EndpointCard
          method="GET"
          path="/api/customers/users/{id}"
          description="Retrieve a user by their unique ID."
          auth={true}
          parameters={[
            {
              name: 'id',
              type: 'number',
              location: 'path',
              required: true,
              description: 'The unique ID of the user'
            }
          ]}
          requestExample={`GET /api/customers/users/1
Authorization: Bearer <jwt-token>`}
          responseExample={`200 OK
Content-Type: application/json

{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "roles": ["USER"]
}`}
          errorResponses={[
            {
              status: '404 Not Found',
              description: 'User not found',
              example: 'null'
            },
            {
              status: '401 Unauthorized',
              description: 'Missing or invalid token'
            },
            {
              status: '403 Forbidden',
              description: 'Insufficient privileges (not USER or AGENT)'
            }
          ]}
          notes={[
            'Requires USER or AGENT role for access',
            'Returns null if user is not found'
          ]}
        />
      </div>
    </div>
  );
}
