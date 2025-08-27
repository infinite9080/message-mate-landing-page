import { NextResponse } from "next/server";
import crypto from "crypto";

// Ensure these are in your .env.local file
const APP_SECRET = process.env.FB_APP_SECRET!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.example";

// This is a stub. Replace with your actual database logic.
async function deleteUserDataByFacebookId(userId: string) {
    console.log(`DELETING all data for Facebook User ID: ${userId}`);
    // Example: await db.user.deleteMany({ where: { facebookUserId: userId } });
    // This must delete all of the user's personal data from your systems.
    return true;
}

function parseSignedRequest(signedRequest: string) {
    const [encodedSig, payload] = signedRequest.split(".");

    // 1. Verify the signature
    const expectedSig = crypto.createHmac("sha256", APP_SECRET).update(payload).digest("base64url");
    if (encodedSig !== expectedSig) {
        throw new Error("Bad signature");
    }

    // 2. Decode the payload
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data;
}

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const signedRequest = formData.get("signed_request");

        if (typeof signedRequest !== "string") {
            return NextResponse.json({ error: "signed_request required" }, { status: 400 });
        }

        const data = parseSignedRequest(signedRequest);
        const userId = data.user_id;

        if (!userId) {
            return NextResponse.json({ error: "No user_id in payload" }, { status: 400 });
        }

        // Perform the data deletion in your database
        await deleteUserDataByFacebookId(String(userId));

        // Respond to Facebook as required by their docs
        const confirmation_code = `del_${userId}_${Date.now()}`;
        const url = `${BASE_URL}/deletion-status?code=${encodeURIComponent(confirmation_code)}`;

        return NextResponse.json({ url, confirmation_code });
    } catch (e: any) {
        console.error("Facebook data deletion error:", e);
        return NextResponse.json({ error: "Invalid request: " + e.message }, { status: 400 });
    }
}