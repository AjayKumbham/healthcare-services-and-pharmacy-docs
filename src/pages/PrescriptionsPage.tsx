
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EndpointCard } from '@/components/EndpointCard';

export function PrescriptionsPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 20;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        el.style.transition = 'all 0.3s ease';
        el.style.backgroundColor = '#dbeafe';
        el.style.borderLeft = '4px solid #3b82f6';
        el.style.paddingLeft = '12px';
        setTimeout(() => {
          el.style.backgroundColor = '';
          el.style.borderLeft = '';
          el.style.paddingLeft = '';
        }, 2000);
      }
    }
  }, [location.hash]);
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Prescriptions Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Prescription management and history tracking.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg">
          <p className="text-xs sm:text-sm">
            <strong>Base Path:</strong> <code className="break-all">/api/auth</code>
          </p>
        </div>
      </div>
      <div className="space-y-6 sm:space-y-8">
        <div id="get-prescriptions-for-a-user">
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
        <div id="add-a-new-prescription">
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
        <div id="end-a-prescription">
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
                description: 'prescriptionId as a string'
              }
            ]}
            requestExample={`POST /api/auth/endPrescription
Authorization: Bearer <jwt-token>
Content-Type: application/json

"1"`}
            responseExample={`200 OK
Content-Type: application/json

{ "success": true }`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Invalid prescription ID',
                example: '"Invalid prescription ID"'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
