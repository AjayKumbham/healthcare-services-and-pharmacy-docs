
import React from 'react';
import { EndpointCard } from '@/components/EndpointCard';

export function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">File Upload Controller</h1>
        <p className="text-lg text-muted-foreground">
          File upload and parsing endpoints for prescription documents.
        </p>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm">
            <strong>Base Path:</strong> <code>/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div id="upload-and-parse-prescription-file" className="scroll-mt-[100px]">
          <EndpointCard
            method="POST"
            path="/api/auth/upload"
            description="Upload a prescription file (PDF, image, etc.) for parsing and extraction of patient and medication data."
            auth={true}
            parameters={[
              {
                name: 'file',
                type: 'File',
                location: 'body',
                required: true,
                description: 'Prescription file to upload (multipart/form-data)'
              }
            ]}
            requestExample={`POST /api/auth/upload
Authorization: Bearer <jwt-token>
Content-Type: multipart/form-data

--boundary
Content-Disposition: form-data; name="file"; filename="prescription.pdf"
Content-Type: application/pdf

[file content]
--boundary--`}
            responseExample={`200 OK
Content-Type: application/json

{
  "patientName": "John Doe",
  "date": "2024-07-20",
  "condition": "Hypertension",
  "doctorName": "Dr. Smith",
  "hospitalName": "City Hospital",
  "hospitalAddress": "123 Main St, Metropolis, NY 10001",
  "age": "45",
  "medications": [
    { "name": "Amlodipine 5mg", "days": "30" },
    { "name": "Metformin 500mg", "days": "60" }
  ]
}`}
            errorResponses={[
              {
                status: '400 Bad Request',
                description: 'Invalid or missing file'
              },
              {
                status: '500 Internal Server Error',
                description: 'Parsing or extraction error'
              }
            ]}
            notes={[
              'Supports PDF and image formats',
              'Response fields depend on document content',
              'Some fields may be missing if not found in document'
            ]}
          />
        </div>
      </div>
    </div>
  );
}
