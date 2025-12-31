import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Log the incoming data (Lead from form or Crawler hit)
        console.log('Received data for n8n:', data);

        // TODO: Configure your n8n webhook URL here
        const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

        if (N8N_WEBHOOK_URL) {
            // Forward to n8n
            await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return NextResponse.json({ success: true, message: 'Forwarded to n8n' });
        }

        return NextResponse.json({ success: true, message: 'Data received (n8n URL not configured)' });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }
}
