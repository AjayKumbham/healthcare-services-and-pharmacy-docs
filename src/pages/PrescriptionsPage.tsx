
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function PrescriptionsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Prescriptions Controller</h1>
        <p className="text-lg text-muted-foreground">
          Prescription management and history tracking.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="get-prescriptions-for-a-user" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/getPrescriptions"
            description="Retrieve all prescriptions for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: 'body',
                type: 'string',
                location: 'body',
                required: true,
                description: 'membershipId as a string'
              }
            ]}
            requestExample={`POST /api/auth/getPrescriptions
Authorization: Bearer <jwt-token>
Content-Type: application/json

"ENU12345"`}
            responseExample={`200 OK
Content-Type: application/json

[
  { "id": 1, "membershipId": "ENU12345", "medications": [] }
]`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'membershipId missing or invalid',
                example: 'null'
              }
            ]}
          />
        </div>
        <div id="add-a-new-prescription" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/addPrescription"
            description="Add a new prescription for a user."
            auth={true}
            parameters={[
              {
                name: 'body',
                type: 'JSON',
                location: 'body',
                required: true,
                description: 'JSON object representing the prescription'
              }
            ]}
            requestExample={`POST /api/auth/addPrescription
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "patientName": "John Doe",
  "doctorName": "Dr. Smith",
  "medications": []
}`}
            responseExample={`201 Created
Content-Type: application/json

{ "id": 1, "membershipId": "ENU12345" }`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Invalid prescription data',
                example: '"Invalid prescription data"'
              }
            ]}
          />
        </div>
        <div id="end-a-prescription" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/endPrescription"
            description="Mark a prescription as ended by prescription ID."
            auth={true}
            parameters={[
              {
                name: 'body',
                type: 'string',
                location: 'body',
                required: true,
                description: 'prescription ID as a string'
              }
            ]}
            requestExample={`POST /api/auth/endPrescription
Authorization: Bearer <jwt-token>
Content-Type: application/json

"1"`}
            responseExample={`201 Created
Content-Type: application/json

null`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Prescription not found or already ended',
                example: 'null'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
