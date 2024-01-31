# Website speed optimization

In terms of site speed optimization there’s a few things you can do:

Compress Media- This should be your first step. There shouldn’t be a single media asset on your site that is not in the smallest size possible and the best format for its use.

Optimize Server- You should be using a dedicated server with good bandwidth. Do not use a free server or shared server. Use a paid server from a reputable company such as Google, Amazon, Microsoft, DigitalOcean, Vercel, etc.

Optimize CDN- You need a reputable CDN, the common ones are Cloudflare and Google Cloud CDN. I personally use CloudFlare since it has extra security measures.

Optimize File Delivery- Your site should be delivered in as few requests as possible, and the smallest requests possible. Some options to do this are locally hosting fonts, minifying and tree-shaking your JavaScript and CSS, minifying HTML, deferring and async-ing any scripts that you can.

Limiting Third-Party Requests- Any requests to a third party will slow your site down, the usual culprits are heavy usage of Google Analytics, Facebook Pixel, and Google Tag Manager. Just because you use these technologies doesn’t mean your site will automatically be slow, but it does mean they can potentially slow it down. Use them sparingly and only where absolutely necessary.

Data Retrieval- Any dynamic data such as blog posts, inventory feeds, etc should be properly optimized at the database level (indexing and proper table structure), and retrieved appropriately (cached if possible).

Lazy Loading- Deferring the rendering of content that is “below the fold” can help your site speed by rendering initial visible content first, and letting the other content only be rendered when the user is close to viewing it.

Site Builder Plugins- I notice you are using Wordpress. If you used a site builder plugin then this will slow your site down significantly since it adds a giant abstraction layer of divs and extra styling over your sites files to render them in the site builder layout. I recommend not using one unless you are an absolute beginner. You can find site templates online instead of using a site builder plugin.

This list should get you started. In general the biggest culprits for slow site speed are unoptimized media assets, heavy usage of analytics tools on every page, using site builders, using a poor server, lots of third party requests, and poor data retrieval protocols.

Hope this helps!
