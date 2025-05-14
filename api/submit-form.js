export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      // Parse the raw body manually
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const rawBody = Buffer.concat(buffers).toString();
      const data = JSON.parse(rawBody);
  
      console.log('Proxy received:', data);
  
      const response = await fetch('https://core.kashidigitalapis.com/user/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json, text/plain, */*',
          'Referer': 'https://kashidigitalapis.com/',
        },
        body: JSON.stringify({
          name: data.name,
          businessEmail: data.businessEmail,
          phone: data.phone,
          message: data.message || '',
        }),
      });
  
      const responseData = await response.json();
      res.status(response.status).json(responseData);
    } catch (error) {
      console.error('Proxy error:', error);
      res.status(500).json({ error: 'Internal Proxy Error', details: error.message });
    }
  }
  