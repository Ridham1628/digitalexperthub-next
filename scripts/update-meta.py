import re
import os

BASE = 'C:/Users/HP/Desktop/digitalexperthub-next/app'

PAGES = {
    # ── SERVICES ──────────────────────────────────────────────────────────
    'services/seo': (
        'SEO Services in India',
        'Grow organic traffic with expert SEO services across India. On-page, technical, local & e-commerce SEO with proven, measurable results. Free SEO audit.'
    ),
    'services/local-seo': (
        'Local SEO Services India',
        'Dominate local search results and Google Maps with Local SEO. Rank for near-me searches, attract nearby customers & grow your local business. Free audit.'
    ),
    'services/technical-seo': (
        'Technical SEO Services India',
        'Fix crawl issues, improve Core Web Vitals and build a technically sound website with expert Technical SEO. Schema, site speed & indexation covered. Free audit.'
    ),
    'services/ecommerce-seo': (
        'E-commerce SEO Services India',
        'Rank your online store higher and drive more sales with e-commerce SEO. Product page optimisation, category structure & link building. Free store audit.'
    ),
    'services/ai-seo': (
        'AI SEO Services India',
        'Future-proof your rankings with AI SEO services. Optimise for Google SGE, AI Overviews & voice search before your competitors do. Free AI SEO audit.'
    ),
    'services/google-ads': (
        'Google Ads Management India',
        'Get more leads and sales with expert Google Ads management. We optimise Search, Shopping & Display campaigns for maximum ROI with zero wasted spend. Free PPC audit.'
    ),
    'services/social-media-marketing': (
        'Social Media Marketing Services',
        'Build your brand and drive sales with expert social media marketing. Instagram, Facebook, LinkedIn & YouTube campaigns that generate real results. Free strategy call.'
    ),
    'services/content-marketing': (
        'Content Marketing Services India',
        'Attract, engage and convert with expert content marketing. SEO-optimised blog posts, landing pages, case studies & video content. Free content strategy audit.'
    ),
    'services/email-marketing': (
        'Email Marketing Services India',
        'Nurture leads and drive repeat sales with email marketing services. Campaign design, automation sequences, segmentation & analytics. Free email audit today.'
    ),
    'services/website-design': (
        'Website Design Services India',
        'Get a beautiful, fast & conversion-optimised website designed for your business. Mobile-first, SEO-ready web design with measurable results. Free quote today.'
    ),
    'services/website-development': (
        'Website Development Services India',
        'Build a fast, secure & scalable website with expert web developers in India. React, Next.js & WordPress — SEO-ready from day one. Free development quote.'
    ),
    'services/wordpress-development': (
        'WordPress Development India',
        'Build a fast, secure & SEO-ready WordPress website. Custom themes, WooCommerce stores & plugin integration by expert WordPress developers. Quote in 24 hours.'
    ),
    'services/shopify-development': (
        'Shopify Development Services India',
        'Launch or upgrade your Shopify store with expert Shopify development. Custom themes, app integration & Shopify SEO built in. Free Shopify consultation today.'
    ),
    'services/landing-page-design': (
        'Landing Page Design India',
        'Convert more visitors with high-performance landing pages built to generate leads and sales. A/B tested, conversion-optimised designs. Free quote today.'
    ),
    'services/lead-generation': (
        'Lead Generation Services India',
        'Fill your sales pipeline with qualified leads using proven lead generation strategies — SEO, Google Ads, social media & landing page funnels. Free consult.'
    ),
    'services/cro': (
        'Conversion Rate Optimisation India',
        'Increase conversions without increasing ad spend. Expert CRO services — A/B testing, heatmaps, UX analysis & data-driven website optimisation. Free CRO audit.'
    ),
    'services/orm': (
        'Online Reputation Management India',
        'Protect and build your online reputation with expert ORM services. Suppress negative content, build positive presence & manage your brand. Free ORM audit.'
    ),
    'services/branding': (
        'Branding Services India',
        'Build a memorable brand identity with expert branding services. Logo design, brand strategy, brand guidelines & visual identity that resonates. Free brand consult.'
    ),
    'services/digital-marketing-consulting': (
        'Digital Marketing Consulting India',
        'Expert digital marketing consulting — strategy development, competitor analysis, audits & a clear growth roadmap for your business. Free 30-min consultation.'
    ),

    # ── INDUSTRIES ────────────────────────────────────────────────────────
    'industries/doctors': (
        'Digital Marketing for Doctors India',
        'Attract more patients with digital marketing for doctors & medical clinics in India. SEO, Google Ads & local search strategies built for healthcare. Free consult.'
    ),
    'industries/dentists': (
        'Digital Marketing for Dentists India',
        'Fill your appointment book with digital marketing for dentists in India. Local SEO, Google Ads & social media strategies proven for dental practices. Free call.'
    ),
    'industries/real-estate': (
        'Digital Marketing for Real Estate',
        'Generate qualified buyer & seller leads with digital marketing for real estate in India. SEO, Google Ads & social media for property businesses. Free consult.'
    ),
    'industries/realtors': (
        'Digital Marketing for Realtors India',
        'Stand out in a competitive market with digital marketing for realtors in India. SEO, Google Ads & social strategies for real estate agents. Free strategy call.'
    ),
    'industries/ecommerce': (
        'E-commerce Digital Marketing India',
        'Boost online sales with expert e-commerce digital marketing. SEO, Google Shopping ads, conversion optimisation & social media for online stores. Free audit.'
    ),
    'industries/law-firms': (
        'Digital Marketing for Law Firms India',
        'Generate high-quality client enquiries with digital marketing for law firms in India. SEO, Google Ads & content marketing for legal practices. Free consultation.'
    ),
    'industries/saas': (
        'Digital Marketing for SaaS Companies',
        'Grow MRR and reduce CAC with digital marketing for SaaS & tech companies. SEO, Google Ads, content & social strategies for software businesses. Free audit.'
    ),
    'industries/small-business': (
        'Digital Marketing for Small Business',
        'Compete and win online with digital marketing for small businesses. Affordable SEO, Google Ads & social media packages with results that scale. Free call.'
    ),
    'industries/startups': (
        'Digital Marketing for Startups India',
        'Build your growth engine with digital marketing for startups in India. SEO, Google Ads, content & social strategies to scale fast from day one. Free consult.'
    ),
    'industries': (
        'Industry-Specific Digital Marketing',
        'Expert digital marketing tailored for every industry — doctors, dentists, real estate, e-commerce, SaaS, law firms, small businesses & startups. Free consult.'
    ),

    # ── LOCATIONS ─────────────────────────────────────────────────────────
    'locations/seo-company-india': (
        'Digital Marketing Agency India',
        "India's trusted digital marketing agency — SEO, Google Ads, social media & web design. Serving businesses across all major Indian cities. Free consultation."
    ),
    'locations/seo-company-delhi': (
        'Digital Marketing Agency Delhi',
        'Top digital marketing agency in Delhi — SEO, Google Ads, social media & web design for Delhi businesses. More traffic, leads & revenue. Free strategy call.'
    ),
    'locations/seo-company-mumbai': (
        'Digital Marketing Agency Mumbai',
        'Leading digital marketing agency in Mumbai — SEO, Google Ads, social media & web design. Help your Mumbai business rank higher and get more customers online.'
    ),
    'locations/seo-company-bangalore': (
        'Digital Marketing Agency Bangalore',
        'Expert digital marketing agency in Bangalore — SEO, Google Ads, social media & web design for Bangalore startups and businesses. Free strategy call today.'
    ),
    'locations/seo-company-chandigarh': (
        'Digital Marketing Agency Chandigarh',
        'Top digital marketing agency in Chandigarh — SEO, Google Ads, social media & web design. Helping Chandigarh businesses grow online since 2017. Free call.'
    ),
    'locations/seo-company-mohali': (
        'Digital Marketing Agency Mohali',
        'Expert digital marketing agency in Mohali — SEO, Google Ads, social media & web design. Trusted by Mohali businesses for measurable growth. Free consultation.'
    ),
    'locations': (
        'Digital Marketing Agency Locations',
        'Digital Expert Hub serves businesses across India — Delhi, Mumbai, Bangalore, Chandigarh, Mohali & more. Expert digital marketing in your city. Free call.'
    ),

    # ── CORE PAGES ────────────────────────────────────────────────────────
    'contact': (
        'Contact Us — Free Strategy Call',
        "Book a free 30-minute digital marketing strategy call with Digital Expert Hub. We'll analyse your business and show you exactly how to grow online. Call now."
    ),
    'pricing': (
        'Digital Marketing Pricing India',
        'Transparent digital marketing pricing from Rs.15,000/month. No hidden fees, no lock-in contracts. SEO, Google Ads, social media & web design packages. Free call.'
    ),
    'about': (
        'About Us — Digital Expert Hub',
        'Meet the team behind Digital Expert Hub — 7+ years helping 1,000+ Indian businesses grow online with SEO, Google Ads, social media & web design. Our story.'
    ),
    'faqs': (
        'Digital Marketing FAQs — Expert Answers',
        'Expert answers to common digital marketing questions — SEO costs, timelines, Google Ads ROI, what results to expect & more. Everything before you choose us.'
    ),
    'blog': (
        'Digital Marketing Tips & SEO Insights',
        'Read expert digital marketing tips, SEO guides, Google Ads strategies & content marketing insights. Stay ahead with the latest trends from Digital Expert Hub.'
    ),
    'case-studies': (
        'Case Studies — Real Client Results',
        'See real results: 340% traffic growth, 9x revenue, #1 local rankings. Read how Digital Expert Hub delivers digital marketing results for businesses across India.'
    ),
    'testimonials': (
        'Client Reviews & Testimonials',
        'Read reviews from 40+ businesses that grew with Digital Expert Hub — 340% traffic growth, 6.5x ROAS, #1 local rankings & more. Rated 4.9 out of 5 stars.'
    ),
    'careers': (
        'Careers at Digital Expert Hub',
        "Join the Digital Expert Hub team. We're hiring SEO specialists, Google Ads managers, content writers & web developers. Competitive pay + remote work options."
    ),
    'services': (
        'Digital Marketing Services India',
        'Full-service digital marketing — SEO, Google Ads, social media, web design, content marketing, email marketing & more for businesses across India. Free call.'
    ),
}

# ── Apply updates ──────────────────────────────────────────────────────────
updated = []
skipped = []

for rel_path, (new_title, new_desc) in PAGES.items():
    file_path = os.path.join(BASE, rel_path.replace('/', os.sep), 'page.tsx')
    if not os.path.exists(file_path):
        skipped.append(f'NOT FOUND: {rel_path}')
        continue

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex: replace title inside constructMetadata — handles single and double quotes
    new_content = re.sub(
        r"(constructMetadata\(\{[^}]*?title:\s*['\"])([^'\"]*?)(['\"])",
        lambda m: m.group(1) + new_title + m.group(3),
        content,
        count=1,
        flags=re.DOTALL
    )
    # Replace description
    new_content = re.sub(
        r"(constructMetadata\(\{[^}]*?description:\s*['\"])([^'\"]*?)(['\"])",
        lambda m: m.group(1) + new_desc + m.group(3),
        new_content,
        count=1,
        flags=re.DOTALL
    )

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated.append(rel_path)
    else:
        skipped.append(f'NO CHANGE (regex unmatched): {rel_path}')

print(f'Updated: {len(updated)}  Skipped: {len(skipped)}')
for s in skipped:
    print(' ', s)
