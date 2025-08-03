import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { EndpointCard } from '@/components/EndpointCard';
import { useScrollToHash } from '../hooks/use-scroll-to-hash';

export function PrimaryUserPage() {
  useScrollToHash();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Primary User Controller</h1>
        <p className="text-lg text-muted-foreground mb-2">
          Comprehensive user management including coverage plans, dependents, security, payment, health, delivery addresses, and contact information.
        </p>
        <div className="bg-muted p-3 rounded-md">
          <span className="text-sm font-medium">Base Path:</span>
          <code className="ml-2 text-sm bg-background px-2 py-1 rounded">/api/auth</code>
        </div>
      </div>

      <div className="space-y-8">
        {/* Get Coverage Plan */}
        <div id="get-coverage-plan" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/getCoveragePlan"
            description="Get the user's coverage plan by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "query",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/getCoveragePlan?membershipId=ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`1`}
            errorResponses={[
              {
                status: "200 OK",
                description: "Returns 1 if user not found (default plan)"
              }
            ]}
            notes={[
              "Coverage plan IDs: 1 (Basic), 2 (Plus), 3 (Premium)"
            ]}
          />
        </div>

        {/* Validate Membership ID */}
        <div id="validate-membership-id" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/validateMembershipId/{membershipId}"
            description="Validate if a membershipId exists in the system."
            auth={false}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID to validate"
              }
            ]}
            requestExample={`GET /api/auth/validateMembershipId/ENU12345`}
            responseExample={`"Membership ID is valid"`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Membership ID does not exist",
                example: `"Membership ID not found"`
              }
            ]}
          />
        </div>

        {/* Add Dependent Information */}
        <div id="add-dependent-information" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/dependent-information"
            description="Add a new dependent for a user."
            auth={true}
            requestExample={`POST /api/auth/dependent-information
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "name": "Jane Doe",
  "healthConditions": ["Asthma"],
  "allergies": ["Peanuts"],
  "currentMedications": ["Inhaler"]
}`}
            responseExample={`"Dependent Information saved successfully!"`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or validation error",
                example: `"Failed to save dependent information."`
              }
            ]}
          />
        </div>

        {/* Get All Dependents */}
        <div id="get-all-dependents" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/dependent/{membershipId}"
            description="Retrieve all dependents for a given user."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/dependent/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`[
  {
    "id": 1,
    "membershipId": "ENU12345",
    "name": "Jane Doe",
    "healthConditions": ["Asthma"],
    "allergies": ["Peanuts"],
    "currentMedications": ["Inhaler"]
  }
]`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or retrieval error",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Update Dependent Information */}
        <div id="update-dependent-information" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/dependent-information/{id}"
            description="Update an existing dependent's information."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The dependent ID"
              }
            ]}
            requestExample={`PUT /api/auth/dependent-information/1
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "healthConditions": ["Asthma"],
  "allergies": ["Peanuts"],
  "currentMedications": ["Inhaler"]
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "name": "Jane Doe",
  "healthConditions": ["Asthma"],
  "allergies": ["Peanuts"],
  "currentMedications": ["Inhaler"]
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Dependent not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Delete Dependent Information */}
        <div id="delete-dependent-information" className="scroll-mt-24">
          <EndpointCard
            method="DELETE"
            path="/api/auth/dependent-information/{id}"
            description="Delete a dependent by ID."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The dependent ID"
              }
            ]}
            requestExample={`DELETE /api/auth/dependent-information/1
Authorization: Bearer <jwt-token>`}
            responseExample={`null`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Dependent not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Find Health/Dependent Info */}
        <div id="find-health-dependent-info" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/get/patient/data"
            description="Search for health or dependent information by name."
            auth={true}
            parameters={[
              {
                name: "name",
                type: "string",
                location: "query",
                required: true,
                description: "The name to search for"
              }
            ]}
            requestExample={`GET /api/auth/get/patient/data?name=Jane%20Doe
Authorization: Bearer <jwt-token>`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "name": "Jane Doe",
  "healthConditions": ["Asthma"],
  "allergies": ["Peanuts"],
  "currentMedications": ["Inhaler"]
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "No matching record",
                example: `"No records found for name: Jane Doe"`
              }
            ]}
          />
        </div>

        {/* Save Security Information */}
        <div id="save-security-information" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/security-information"
            description="Save security information (e.g., password, security question/answer) for a user."
            auth={true}
            requestExample={`POST /api/auth/security-information
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "password": "hashedPassword",
  "securityQuestion": "What is your pet's name?",
  "securityAnswer": "Fluffy"
}`}
            responseExample={`"Security information saved successfully!"`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or validation error"
              }
            ]}
          />
        </div>

        {/* Get Security Information */}
        <div id="get-security-information" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/security/{membershipId}"
            description="Retrieve security information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/security/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "password": "hashedPassword",
  "securityQuestion": "What is your pet's name?",
  "securityAnswer": "Fluffy"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Security information not found"
              }
            ]}
          />
        </div>

        {/* Update Security Information */}
        <div id="update-security-information" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/security/{membershipId}"
            description="Update security information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`PUT /api/auth/security/ENU12345
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "password": "newHashedPassword",
  "securityQuestion": "What is your favorite color?",
  "securityAnswer": "Blue"
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "password": "newHashedPassword",
  "securityQuestion": "What is your favorite color?",
  "securityAnswer": "Blue"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Security information not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Submit Payment Information */}
        <div id="submit-payment-information" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/payment-information"
            description="Add payment information for a user."
            auth={true}
            requestExample={`POST /api/auth/payment-information
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "cardType": "Visa",
  "cardNumber": "4111111111111111",
  "expirationDate": "12/26",
  "cvv": "123",
  "upiId": "user@upi"
}`}
            responseExample={`"Payment information submitted successfully!"`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or validation error",
                example: `"Error submitting payment information."`
              }
            ]}
          />
        </div>

        {/* Get Payment Information */}
        <div id="get-payment-information" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/payment-information/{membershipId}"
            description="Retrieve all payment methods for a user."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/payment-information/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`[
  {
    "id": 1,
    "membershipId": "ENU12345",
    "cardType": "Visa",
    "cardNumber": "4111111111111111",
    "expirationDate": "12/26",
    "cvv": "123",
    "upiId": "user@upi"
  }
]`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or retrieval error",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Update Payment Information */}
        <div id="update-payment-information" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/payment-information/{id}"
            description="Update a payment method by ID."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The payment method ID"
              }
            ]}
            requestExample={`PUT /api/auth/payment-information/1
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "cardType": "Mastercard",
  "cardNumber": "5555555555554444",
  "expirationDate": "11/27",
  "cvv": "456",
  "upiId": "user2@upi"
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "cardType": "Mastercard",
  "cardNumber": "5555555555554444",
  "expirationDate": "11/27",
  "cvv": "456",
  "upiId": "user2@upi"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Payment information not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Delete Payment Information */}
        <div id="delete-payment-information" className="scroll-mt-24">
          <EndpointCard
            method="DELETE"
            path="/api/auth/payment-information/{id}"
            description="Delete a payment method by ID."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The payment method ID"
              }
            ]}
            requestExample={`DELETE /api/auth/payment-information/1
Authorization: Bearer <jwt-token>`}
            responseExample={`null`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Payment information not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Submit Health Information */}
        <div id="submit-health-information" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/health-information"
            description="Add health information for a user."
            auth={true}
            requestExample={`POST /api/auth/health-information
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "healthConditions": ["Diabetes"],
  "allergies": ["Penicillin"],
  "currentMedications": ["Metformin"],
  "notes": "Patient is under regular monitoring."
}`}
            responseExample={`"Health information submitted successfully!"`}
            errorResponses={[
              {
                status: "400 Bad Request",
                description: "Customer not found for membershipId",
                example: `"Customer not found!"`
              },
              {
                status: "500 Internal Server Error",
                description: "Database or validation error",
                example: `"Failed to submit health information."`
              }
            ]}
          />
        </div>

        {/* Get Health Information */}
        <div id="get-health-information" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/healthConditions/{membershipId}"
            description="Retrieve health information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/healthConditions/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "healthConditions": ["Diabetes"],
  "allergies": ["Penicillin"],
  "currentMedications": ["Metformin"],
  "notes": "Patient is under regular monitoring."
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Health information not found"
              }
            ]}
          />
        </div>

        {/* Update Health Information */}
        <div id="update-health-information" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/health-information/{membershipId}"
            description="Update health information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`PUT /api/auth/health-information/ENU12345
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "healthConditions": ["Hypertension"],
  "allergies": ["None"],
  "currentMedications": ["Amlodipine"],
  "notes": "Blood pressure under control."
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "healthConditions": ["Hypertension"],
  "allergies": ["None"],
  "currentMedications": ["Amlodipine"],
  "notes": "Blood pressure under control."
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Health information not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Submit Delivery Address */}
        <div id="submit-delivery-address" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/delivery-submit"
            description="Add a delivery address for a user."
            auth={true}
            requestExample={`POST /api/auth/delivery-submit
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "homeNumber": "123",
  "street": "Main St",
  "city": "Metropolis",
  "state": "NY",
  "pinCode": "10001",
  "country": "USA",
  "setAsDefault": true
}`}
            responseExample={`"Address submitted successfully."`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or validation error",
                example: `"Failed to submit address."`
              }
            ]}
          />
        </div>

        {/* Get Delivery Addresses */}
        <div id="get-delivery-addresses" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/delivery/{membershipId}"
            description="Retrieve all delivery addresses for a user."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/delivery/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`[
  {
    "id": 1,
    "membershipId": "ENU12345",
    "homeNumber": "123",
    "street": "Main St",
    "city": "Metropolis",
    "state": "NY",
    "pinCode": "10001",
    "country": "USA",
    "setAsDefault": true
  }
]`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or retrieval error",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Update Delivery Address */}
        <div id="update-delivery-address" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/delivery-submit/{id}"
            description="Update a delivery address by ID."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The delivery address ID"
              }
            ]}
            requestExample={`PUT /api/auth/delivery-submit/1
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "homeNumber": "456",
  "street": "Elm St",
  "city": "Gotham",
  "state": "NJ",
  "pinCode": "07001",
  "country": "USA",
  "setAsDefault": false
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "homeNumber": "456",
  "street": "Elm St",
  "city": "Gotham",
  "state": "NJ",
  "pinCode": "07001",
  "country": "USA",
  "setAsDefault": false
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Address not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Delete Delivery Address */}
        <div id="delete-delivery-address" className="scroll-mt-24">
          <EndpointCard
            method="DELETE"
            path="/api/auth/delivery-submit/{id}"
            description="Delete a delivery address by ID."
            auth={true}
            parameters={[
              {
                name: "id",
                type: "number",
                location: "path",
                required: true,
                description: "The delivery address ID"
              }
            ]}
            requestExample={`DELETE /api/auth/delivery-submit/1
Authorization: Bearer <jwt-token>`}
            responseExample={`null`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Address not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Submit Contact Information */}
        <div id="submit-contact-information" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/contact"
            description="Add contact information for a user."
            auth={true}
            requestExample={`POST /api/auth/contact
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "membershipId": "ENU12345",
  "emailAddress": "user@example.com",
  "mobileNumber": "1234567890",
  "preferredContactMethod": "email"
}`}
            responseExample={`"Contact information saved successfully!"`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Database or validation error"
              }
            ]}
          />
        </div>

        {/* Get Contact Information */}
        <div id="get-contact-information" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/contact/{membershipId}"
            description="Retrieve contact information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`GET /api/auth/contact/ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "emailAddress": "user@example.com",
  "mobileNumber": "1234567890",
  "preferredContactMethod": "email"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Contact information not found"
              }
            ]}
          />
        </div>

        {/* Update Contact Information */}
        <div id="update-contact-information" className="scroll-mt-24">
          <EndpointCard
            method="PUT"
            path="/api/auth/contact/{membershipId}"
            description="Update contact information for a user by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "path",
                required: true,
                description: "The membership ID of the user"
              }
            ]}
            requestExample={`PUT /api/auth/contact/ENU12345
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "emailAddress": "newuser@example.com",
  "mobileNumber": "9876543210",
  "preferredContactMethod": "phone"
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "emailAddress": "newuser@example.com",
  "mobileNumber": "9876543210",
  "preferredContactMethod": "phone"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Contact information not found",
                example: `null`
              }
            ]}
          />
        </div>

        {/* Create Primary User */}
        <div id="create-primary-user" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/users"
            description="Create a new primary user (initial registration step)."
            auth={false}
            requestExample={`POST /api/auth/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}`}
            responseExample={`{
  "id": 1,
  "membershipId": "ENU12345",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}`}
            errorResponses={[
              {
                status: "400 Bad Request",
                description: "Validation or creation error"
              }
            ]}
          />
        </div>

        {/* Send OTP to Email */}
        <div id="send-otp-to-email" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/send-otp"
            description="Send an OTP to the user's email for verification."
            auth={false}
            requestExample={`POST /api/auth/send-otp
Content-Type: application/json

{
  "email": "user@example.com"
}`}
            responseExample={`"OTP sent successfully to user@example.com"`}
            errorResponses={[
              {
                status: "500 Internal Server Error",
                description: "Email sending failed",
                example: `"Error sending OTP: <error message>"`
              }
            ]}
          />
        </div>

        {/* Request OTP for Account Creation */}
        <div id="request-otp-for-account-creation" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/account-creation"
            description="Request an OTP for account creation using membershipId."
            auth={false}
            parameters={[
              {
                name: "membershipid",
                type: "string",
                location: "query",
                required: true,
                description: "The membership ID"
              }
            ]}
            requestExample={`GET /api/auth/account-creation?membershipid=ENU12345`}
            responseExample={`"OTP has been sent to your registered email."`}
            errorResponses={[
              {
                status: "400 Bad Request",
                description: "Invalid membershipId",
                example: `"Invalid membership ID."`
              }
            ]}
          />
        </div>

        {/* Get Customer Details */}
        <div id="get-customer-details" className="scroll-mt-24">
          <EndpointCard
            method="GET"
            path="/api/auth/customer-details"
            description="Get customer details (name, email, phone) by membershipId."
            auth={true}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "query",
                required: true,
                description: "The membership ID of the customer"
              }
            ]}
            requestExample={`GET /api/auth/customer-details?membershipId=ENU12345
Authorization: Bearer <jwt-token>`}
            responseExample={`{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}`}
            errorResponses={[
              {
                status: "404 Not Found",
                description: "Customer not found",
                example: `"Customer not found with Membership ID: ENU12345"`
              }
            ]}
          />
        </div>

        {/* Verify OTP for Membership ID */}
        <div id="verify-otp-for-membership-id" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/verify-otp"
            description="Verify OTP for a given membershipId."
            auth={false}
            parameters={[
              {
                name: "membershipId",
                type: "string",
                location: "query",
                required: true,
                description: "The membership ID"
              },
              {
                name: "otp",
                type: "string",
                location: "query",
                required: true,
                description: "The OTP to verify"
              }
            ]}
            requestExample={`POST /api/auth/verify-otp?membershipId=ENU12345&otp=123456`}
            responseExample={`"OTP verified successfully. Proceed to complete your profile."`}
            errorResponses={[
              {
                status: "400 Bad Request",
                description: "Invalid or expired OTP",
                example: `"OTP has expired."`
              },
              {
                status: "500 Internal Server Error",
                description: "Verification error",
                example: `"Error occurred during OTP verification: <error message>"`
              }
            ]}
          />
        </div>

        {/* Validate OTP for Email */}
        <div id="validate-otp-for-email" className="scroll-mt-24">
          <EndpointCard
            method="POST"
            path="/api/auth/validate-otp"
            description="Validate OTP for a given email."
            auth={false}
            requestExample={`POST /api/auth/validate-otp
Content-Type: application/json

{
  "email": "user@example.com",
  "otp": "123456"
}`}
            responseExample={`"OTP validated successfully."`}
            errorResponses={[
              {
                status: "400 Bad Request",
                description: "Invalid or expired OTP",
                example: `"OTP has expired."`
              },
              {
                status: "500 Internal Server Error",
                description: "Validation error",
                example: `"Error validating OTP: <error message>"`
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
