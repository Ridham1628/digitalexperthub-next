"""
Fix descriptions that contain apostrophes which broke single-quoted TSX strings.
Strategy: replace the broken description lines with double-quoted versions.
"""

import re
import os

BASE = 'C:/Users/HP/Desktop/digitalexperthub-next/app'

# For each file, we know the correct final description.
# Use double-quoted TSX strings so apostrophes are safe.
FIXES = {
    'careers/page.tsx': (
        # broken pattern (partial match from apostrophe failure)
        r"description: '[^']*'[^,\n]+,",
        # correct replacement (double-quoted)
        'description: "Join the Digital Expert Hub team. We\'re hiring SEO specialists, Google Ads managers, content writers & web developers. Competitive pay + remote work options.",'
    ),
    'contact/page.tsx': (
        r"description: '[^']*'[^,\n]+,",
        'description: "Book a free 30-minute digital marketing strategy call with Digital Expert Hub. We\'ll analyse your business and show you exactly how to grow online. Call now.",'
    ),
    'locations/seo-company-india/page.tsx': (
        r"description: '[^']*'[^,\n]+,",
        'description: "India\'s trusted digital marketing agency — SEO, Google Ads, social media & web design. Serving businesses across all major Indian cities. Free consultation.",'
    ),
    'testimonials/page.tsx': (
        r"description: '[^']*'[^,\n]+,",
        "description: 'Read reviews from 40+ businesses that grew with Digital Expert Hub — 340% traffic growth, 6.5x ROAS, #1 local rankings & more. Rated 4.9 out of 5 stars.',"
    ),
    'case-studies/page.tsx': (
        r"description: '[^']*'[^,\n]+,",
        "description: 'See real results: 340% traffic growth, 9x revenue, #1 local rankings. Read how Digital Expert Hub delivers digital marketing results for businesses across India.',"
    ),
}

for rel_path, (pattern, replacement) in FIXES.items():
    file_path = os.path.join(BASE, rel_path.replace('/', os.sep))
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(pattern, replacement, content, count=1)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed: {rel_path}')
    else:
        print(f'PATTERN NOT MATCHED: {rel_path}')
