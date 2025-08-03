
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EndpointCard } from '@/components/EndpointCard';

export function AuthPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 20;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        el.style.transition = "all 0.3s ease";
        el.style.backgroundColor = "#dbeafe";
        el.style.borderLeft = "4px solid #3b82f6";
        el.style.paddingLeft = "12px";
        setTimeout(() => {
          el.style.backgroundColor = "";
          el.style.borderLeft = "";
          el.style.paddingLeft = "";
        }, 2000);
      }
    }
  }, [location.hash]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Authentication Controller</h1>
        <p className="text-lg text-muted-foreground">
          Authentication endpoints for user login, registration, and status checking.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="get-user-status-across-tables" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/user-status/{membershipId}"
            description="Get the presence status of a user in various tables (contact, address, dependents, health, payment, security) by membershipId."
            auth={true}
            parameters={[
              {
                name: 'membershipId',
                type: 'string',
                location: 'path',
                required: true,
                description: 'The membership ID of the user'
              }
            ]}
            requestExample={`GET /api/auth/user-status/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`200 OK
Content-Type: application/json

{
  "contact": true,
  "address": true,
  "dependents": false,
  "health": true,
  "payment": false,
  "securityInformation": true
}`}
            errorResponses={[
              {
                status: '401 Unauthorized',
                description: 'Missing or invalid token'
              }
            ]}
          />
        </div>
        <div id="user-login-membership-idpassword" className="scroll-mt-[100px]">
          <EndpointCard
            method="GET"
            path="/api/auth/login"
            description="Authenticate a user using membershipId and password."
            auth={false}
            parameters={[
              {
                name: 'membershipId',
                type: 'string',
                location: 'query',
                required: true,
                description: 'The membership ID of the user'
              },
              {
                name: 'password',
                type: 'string',
                location: 'query',
                required: true,
                description: 'The user password'
              }
            ]}
            requestExample={`GET /api/auth/login?membershipId=ENU12345&password=secret`}
            responseExample={`200 OK
Content-Type: application/json

"Login successful"`}
            errorResponses={[
              {
                status: '401 Unauthorized',
                description: 'Invalid password',
                example: '"Invalid password"'
              },
              {
                status: '401 Unauthorized',
                description: 'Invalid Membership ID',
                example: '"Invalid Membership ID"'
              }
            ]}
          />
        </div>
        <div id="register-a-new-customer" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/register"
            description="Register a new customer (user) in the system."
            auth={false}
            parameters={[
              {
                name: 'body',
                type: 'JSON',
                location: 'body',
                required: true,
                description: 'JSON object representing the customer'
              }
            ]}
            requestExample={`POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "secret"
}`}
            responseExample={`200 OK
Content-Type: application/json

"User registered successfully with Membership ID: ENU12345"`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Validation or creation error',
                example: '"Error: <error message>"'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
