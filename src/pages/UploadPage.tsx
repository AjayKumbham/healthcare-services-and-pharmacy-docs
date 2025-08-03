
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EndpointCard } from '@/components/EndpointCard';

export function UploadPage() {
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
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">File Upload Controller</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          File upload and parsing endpoints for prescription documents.
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-muted rounded-lg">
          <p className="text-xs sm:text-sm">
            <strong>Base Path:</strong> <code className="break-all">/api/auth</code>
          </p>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div id="upload-and-parse-prescription-file">
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
