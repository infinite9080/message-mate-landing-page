"use client";

import { useState } from "react";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CONTACT_EMAIL = "privacy@yourco.com"; // ← customize

export default function DataDeletionPage() {
    const [identifier, setIdentifier] = useState("");
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // This is now a dummy function that simulates an API call.
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!identifier) {
            setStatus("❌ Please enter an identifier.");
            return;
        }

        setStatus(null);
        setLoading(true);

        // Simulate a network request with a 1.5-second delay.
        setTimeout(() => {
            // Simulate a successful response.
            const dummyConfirmationCode = "DUMMY-" + Math.random().toString(36).substring(2, 10).toUpperCase();
            setStatus(`✅ Request received. Confirmation code: ${dummyConfirmationCode}`);
            setLoading(false);
        }, 1500);
    }

    return (
        <>
            <Head>
                <title>Data Deletion Request</title>
                <meta
                    name="description"
                    content="Submit a request to delete your data associated with our app."
                />
                <meta name="robots" content="index, follow" />

                <link
                    rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/data-deletion`}
                />
            </Head>

            <div className="mx-auto max-w-2xl py-12 px-4 mt-32">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Data Deletion Request
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-6 text-gray-600">
                            If you used our app or authenticated via Facebook Login, you can
                            request deletion of your personal data associated with your
                            account.
                            <br />
                            You may also email us at{" "}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="text-blue-600 underline"
                            >
                                {CONTACT_EMAIL}
                            </a>
                            .
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="identifier"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Your Identifier
                                </label>
                                <Input
                                    id="identifier"
                                    placeholder="e.g., your email, Facebook User ID, or WhatsApp number"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    required
                                />
                            </div>

                            <Button type="submit" disabled={loading} className="w-full">
                                {loading ? "Submitting..." : "Request Deletion"}
                            </Button>
                        </form>

                        {status && (
                            <p className="mt-4 text-sm text-gray-800 whitespace-pre-line">
                                {status}
                            </p>
                        )}

                        <div className="mt-8 text-sm text-gray-500">
                            <h3 className="font-semibold mb-1">Facebook Callback</h3>
                            <p>
                                Facebook may also send us a deletion request directly. Our
                                callback endpoint is:{" "}
                                <code className="bg-gray-100 px-1 rounded">
                                    /api/facebook-data-deletion
                                </code>
                                .
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}