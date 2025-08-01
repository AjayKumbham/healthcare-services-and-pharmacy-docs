
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EndpointCardProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  auth: boolean;
  requestExample?: string;
  responseExample?: string;
  errorResponses?: Array<{
    status: string;
    description: string;
    example?: string;
  }>;
  parameters?: Array<{
    name: string;
    type: string;
    location: 'path' | 'query' | 'body';
    required: boolean;
    description?: string;
  }>;
  notes?: string[];
}

const getMethodColor = (method: string) => {
  switch (method) {
    case 'GET': return 'bg-green-50 text-green-700 border-green-200';
    case 'POST': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'PUT': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    case 'DELETE': return 'bg-red-50 text-red-700 border-red-200';
    default: return 'bg-muted text-muted-foreground border-border';
  }
};

export function EndpointCard({
  method,
  path,
  description,
  auth,
  requestExample,
  responseExample,
  errorResponses,
  parameters,
  notes
}: EndpointCardProps) {
  const [copiedRequest, setCopiedRequest] = useState(false);
  const [copiedResponse, setCopiedResponse] = useState(false);

  const copyToClipboard = (text: string, type: 'request' | 'response') => {
    navigator.clipboard.writeText(text);
    
    if (type === 'request') {
      setCopiedRequest(true);
      setTimeout(() => setCopiedRequest(false), 2000);
    } else {
      setCopiedResponse(true);
      setTimeout(() => setCopiedResponse(false), 2000);
    }
  };

  return (
    <Card className="mb-4 sm:mb-6 border hover:shadow-md transition-shadow w-full max-w-full">
      <CardHeader className="pb-3 sm:pb-4 px-3 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
          <Badge className={`${getMethodColor(method)} border font-mono px-2 py-1 text-xs sm:text-sm font-medium w-fit`}>
            {method}
          </Badge>
          <code className="text-sm sm:text-base font-mono bg-muted px-2 sm:px-3 py-1 sm:py-1.5 rounded border text-foreground break-all">
            {path}
          </code>
          {auth && (
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20 font-medium w-fit">
              Auth Required
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4 sm:space-y-6 px-3 sm:px-6">
        {/* Parameters */}
        {parameters && parameters.length > 0 && (
          <div className="w-full">
            <h4 className="font-medium text-foreground mb-3 text-sm">Parameters</h4>
            <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
              <div className="min-w-full px-3 sm:px-0">
                <table className="w-full min-w-[600px] border text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-2 sm:px-3 py-2 text-left font-medium text-foreground border-b text-xs whitespace-nowrap">Name</th>
                      <th className="px-2 sm:px-3 py-2 text-left font-medium text-foreground border-b text-xs whitespace-nowrap">Type</th>
                      <th className="px-2 sm:px-3 py-2 text-left font-medium text-foreground border-b text-xs whitespace-nowrap">Location</th>
                      <th className="px-2 sm:px-3 py-2 text-left font-medium text-foreground border-b text-xs whitespace-nowrap">Required</th>
                      <th className="px-2 sm:px-3 py-2 text-left font-medium text-foreground border-b text-xs">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parameters.map((param, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="px-2 sm:px-3 py-2 font-mono text-foreground text-xs whitespace-nowrap">{param.name}</td>
                        <td className="px-2 sm:px-3 py-2 text-muted-foreground text-xs whitespace-nowrap">{param.type}</td>
                        <td className="px-2 sm:px-3 py-2 text-muted-foreground text-xs whitespace-nowrap">{param.location}</td>
                        <td className="px-2 sm:px-3 py-2 text-xs whitespace-nowrap">
                          {param.required ? (
                            <span className="text-destructive font-medium">Required</span>
                          ) : (
                            <span className="text-muted-foreground">Optional</span>
                          )}
                        </td>
                        <td className="px-2 sm:px-3 py-2 text-muted-foreground text-xs">{param.description || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Request Example */}
        {requestExample && (
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h4 className="font-medium text-foreground text-sm">Request Example</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(requestExample, 'request')}
                className="text-xs h-8 px-3 w-fit"
              >
                {copiedRequest ? (
                  <>
                    <Check className="w-3 h-3 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
              <div className="min-w-full px-3 sm:px-0">
                <pre className="bg-muted border p-2 sm:p-3 rounded text-xs overflow-x-auto min-w-fit">
                  <code className="text-foreground whitespace-pre">{requestExample}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Response Example */}
        {responseExample && (
          <div className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h4 className="font-medium text-foreground text-sm">Response Example</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(responseExample, 'response')}
                className="text-xs h-8 px-3 w-fit"
              >
                {copiedResponse ? (
                  <>
                    <Check className="w-3 h-3 mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
              <div className="min-w-full px-3 sm:px-0">
                <pre className="bg-muted border p-2 sm:p-3 rounded text-xs overflow-x-auto min-w-fit">
                  <code className="text-foreground whitespace-pre">{responseExample}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Error Responses */}
        {errorResponses && errorResponses.length > 0 && (
          <div className="w-full">
            <h4 className="font-medium text-foreground mb-3 text-sm">Error Responses</h4>
            <div className="space-y-3">
              {errorResponses.map((error, index) => (
                <div key={index} className="border border-destructive/20 bg-destructive/5 p-2 sm:p-3 rounded">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                    <span className="font-mono text-destructive font-medium text-xs sm:text-sm">{error.status}</span>
                    <span className="text-destructive text-xs sm:text-sm">{error.description}</span>
                  </div>
                  {error.example && (
                    <div className="w-full overflow-x-auto">
                      <pre className="bg-destructive/10 border border-destructive/20 p-2 rounded text-xs overflow-x-auto min-w-fit">
                        <code className="text-destructive whitespace-pre">{error.example}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {notes && notes.length > 0 && (
          <div className="w-full">
            <h4 className="font-medium text-foreground mb-3 text-sm">Notes</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-muted-foreground mt-1">•</span>
                  <span className="break-words">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
