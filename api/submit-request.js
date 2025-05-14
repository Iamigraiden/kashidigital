import axios from 'axios';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await axios.post(
      'https://core.kashidigitalapis.com/user/request-demo',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    
    // Forward the API response
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.response?.data || error.message);
    
    // Forward error details
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'Request failed'
    });
  }
}