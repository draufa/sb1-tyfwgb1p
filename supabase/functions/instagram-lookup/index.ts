import puppeteer from "npm:puppeteer@21.3.8";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type, Accept',
  'Access-Control-Max-Age': '86400',
};

async function fetchInstagramProfile(username: string) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );

    await page.setViewport({ width: 1280, height: 800 });

    console.log(`Fetching profile for username: ${username}`);
    
    await page.goto(`https://www.instagram.com/${username}/`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for key elements to load
    await page.waitForSelector('meta[property="og:title"]', { timeout: 5000 })
      .catch(() => console.log('Title meta tag not found'));

    const profile = await page.evaluate(() => {
      const getMetaContent = (property: string) => {
        const meta = document.querySelector(`meta[property="${property}"]`);
        return meta ? meta.getAttribute('content') : null;
      };

      const title = getMetaContent('og:title') || document.title;
      const name = title.split('(')[0].trim();
      const photo = getMetaContent('og:image');
      const bio = getMetaContent('og:description')?.split('•')[0].trim();
      
      let followers = 0;
      const followersText = document.body.textContent?.match(/(\d+(?:,\d+)*)\s+[Ff]ollowers/);
      if (followersText) {
        followers = parseInt(followersText[1].replace(/,/g, ''));
      }

      const verified = document.body.innerHTML.includes('"is_verified":true') || 
                      document.body.innerHTML.includes('"verified":true');

      return {
        name,
        photo: photo || `https://unavatar.io/instagram/${username}`,
        bio: bio || '',
        followers,
        verified
      };
    });

    console.log('Profile fetched successfully:', profile);
    return profile;
  } catch (error) {
    console.error('Error in Puppeteer:', error);
    throw new Error(`Failed to fetch Instagram profile: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { 
        status: 405,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    const { username } = await req.json();
    
    if (!username) {
      return new Response(
        JSON.stringify({ error: "Nome de usuário é obrigatório" }),
        { 
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    }

    const cleanUsername = username.replace("@", "").trim().toLowerCase();
    
    try {
      const profile = await fetchInstagramProfile(cleanUsername);
      
      return new Response(
        JSON.stringify(profile),
        { 
          status: 200,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (profileError) {
      console.error('Profile fetch error:', profileError);
      return new Response(
        JSON.stringify({
          error: "Perfil não encontrado ou privado"
        }),
        { 
          status: 404,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json'
          }
        }
      );
    }
  } catch (error) {
    console.error('Request processing error:', error);
    return new Response(
      JSON.stringify({
        error: "Não foi possível processar sua solicitação. Por favor, tente novamente."
      }),
      { 
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    );
  }
});