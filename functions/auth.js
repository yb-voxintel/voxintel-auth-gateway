// This runs on Cloudflare Workers - validates JWT from WorkOS
export async function onRequest(context) {
    const { request } = context;
    
    // Get token from header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return new Response('Unauthorized', { status: 401 });
    }
    
    const token = authHeader.replace('Bearer ', '');
    
    // In production: Validate this token with WorkOS
    // For now, return a mock user profile
    return new Response(JSON.stringify({
        email: 'user@example.com',
        name: 'Test User',
        org_id: 'org_123'
    }), {
        headers: { 'Content-Type': 'application/json' }
    });
}
