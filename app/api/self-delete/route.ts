import { NextResponse } from "next/server";


async function deleteUserDataByIdentifier(identifier: string) {
    console.log(`DELETING all data for identifier: ${identifier} `);

    return true;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const identifier = body?.identifier;

        if (!identifier) {
            return NextResponse.json({ error: "identifier required" }, { status: 400 });
        }

        await deleteUserDataByIdentifier(String(identifier));

        const confirmation_code = `self_${Date.now()} `;
        return NextResponse.json({ confirmation_code });
    } catch (e) {
        console.error("Self-delete error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}