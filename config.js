// =================================================================================================
// PAGE CONFIGURATION OBJECT
// This file defines all the dynamic content for the case study page.
// The `renderer.js` file reads this object to build the HTML.
// To change text, images, or other content, edit the values in this file.
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
const config = {
  "globals": {
    "companyName": "SalesGenius",
    "mainCTAButtonText": "Book A Discovery Call",
    "mainCTAButtonURL": "#contact",
    "primaryColor": "#e3c379",
    "accentColor": "#d9c6a2",
    "agents": [
      {
        "name": "Arslan Ahmed",
        "imageSrc": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg",
        "contactDetails": [
          {
            "type": "email",
            "value": "arslan@salesgenius.co"
          },
          {
            "type": "phone",
            "value": "4166554850"
          }
        ]
      }
    ]
  },
  "header": {
    "tag": "CASE STUDY",
    "title": "How We Helped First-Time Buyers Secure a Prime 2-Bedroom Condo in Toronto's Most Competitive Neighbourhood",
    "subheadline": "Locked Down 1,249 Sq Ft of Downtown Living in a Red-Hot Market—Without the Stress or Overpaying"
  },
  "mainBox": {
    "summary": {
      "title": "How We Helped First-Time Buyers Secure a Prime 2-Bedroom Condo in Toronto's Most Competitive Neighbourhood",
      "heroImage": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374474318-Dan-Losier.jpg"
      },
      "subTitle": "Summary",
      "paragraphs": [
        "Our clients were navigating one of the toughest decisions of their lives—buying their first home in Toronto's hyper-competitive condo market. With limited inventory, rising prices, and uncertainty around what they could actually afford, they needed more than just a real estate agent. They needed a strategic partner who could cut through the noise and deliver results.",
        "Through professional service and market expertise, we delivered exceptional results for our client. Secured a premium 2-bedroom, 2-bathroom condo at 10 Morrison St—one of Toronto's most sought-after addresses in the Entertainment District Locked in 1,249 square feet of living space in a building with exceptional amenities and walkability scores Negotiated terms that protected their interests and gave them confidence they were making a sound financial decision <strong>PRIME DOWNTOWN LOCATION SECURED</strong> <strong>1,249 SQ FT OF MODERN LIVING SPACE</strong> <strong>CLOSED WITH CONFIDENCE IN A COMPETITIVE MARKET</strong>"
      ]
    },
    "sidebar": {
      "title": "About {{companyName}}",
      "image": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg"
      },
      "paragraphs": [
        "At {{companyName}} we provide professional real estate services with integrity, expertise, and dedication to our clients' success. Our experienced team combines market knowledge with personalized service to help you achieve your real estate goals. Whether you're buying, selling, or investing, we're here to guide you through every step of the process with transparency and results-driven strategies."
      ]
    }
  },
  "sections": [
    {
      "type": "standard",
      "title": "The Challenge",
      "paragraphs": [
        "Wrestling with analysis paralysis in a market where quality 2-bedroom condos were being snapped up within days of listing",
        "Feeling overwhelmed by conflicting advice from friends, family, and online \"experts\" about timing, pricing, and negotiation strategies",
        "Worrying they'd either miss out on their ideal property or make an emotional decision that would haunt them financially for years",
        "Struggling to understand what \"fair market value\" actually meant when every listing seemed overpriced and every offer felt like a bidding war"
      ]
    },
    {
      "type": "standard",
      "title": "The Strategy",
      "paragraphs": [
        "Conducted a deep-dive market analysis to identify undervalued pockets in their target neighbourhoods, focusing on buildings with strong fundamentals rather than flashy marketing",
        "Created a personalized \"buy box\" that filtered out emotional distractions and kept them focused on properties that matched their lifestyle needs AND investment criteria",
        "Negotiated directly with listing agents to understand seller motivations before making any offers, giving us leverage that other buyers didn't have",
        "Structured their offer with strategic terms that made them stand out as serious, qualified buyers—not just another face in a crowded field",
        "Provided real-time coaching during negotiations to help them stay confident and avoid the panic decisions that cost other buyers thousands"
      ],
      "testimonial": {
        "quote": "\"Working with Arslan completely changed how we approached buying our first home. We went from feeling paralyzed by options to having absolute clarity about what we wanted and how to get it. The best part wasn't just finding the perfect condo—it was knowing we made a smart investment decision based on real data, not fear or hype. We never felt pressured, never felt confused, and never felt like we were just another transaction. If you're serious about buying in Toronto, this is the team you need in your corner.\"<br><span>— Satisfied Client</span>"
      }
    },
    {
      "type": "standard",
      "title": "The Solution",
      "paragraphs": [
        "Everything changed when they realized they couldn't afford to learn by trial and error in this market. After seeing friends lose multiple bidding wars and overpay out of desperation, they knew they needed an agent who understood negotiation psychology, not just MLS listings. They chose to work with us because we didn't just promise to \"find them a home\"—we promised a data-driven strategy that would protect their investment and their peace of mind."
      ],
      "image": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1762374478556-scottpark.jpeg"
      }
    },
    {
      "type": "standard",
      "title": "The Results",
      "paragraphs": [
        "Secured a premium 2-bedroom, 2-bathroom condo at 10 Morrison St—one of Toronto's most sought-after addresses in the Entertainment District",
        "Locked in 1,249 square feet of living space in a building with exceptional amenities and walkability scores",
        "Negotiated terms that protected their interests and gave them confidence they were making a sound financial decision",
        "<strong>PRIME DOWNTOWN LOCATION SECURED</strong>",
        "<strong>1,249 SQ FT OF MODERN LIVING SPACE</strong>",
        "<strong>CLOSED WITH CONFIDENCE IN A COMPETITIVE MARKET</strong>"
      ]
    },
    {
      "type": "standard",
      "title": "Conclusion",
      "paragraphs": [
        "<strong>Speed matters, but strategy matters more.</strong> In hot markets, the buyers who win aren't always the fastest—they're the ones who understand seller psychology and position themselves as the obvious choice.",
        "<strong>Your budget is only half the equation.</strong> Understanding true market value and building fundamentals will save you from overpaying for a property that looks great but lacks long-term investment potential.",
        "<strong>The right agent doesn't just open doors—they close deals.</strong> Real expertise shows up in negotiation, not just in the number of properties you tour. Choose an agent who treats your purchase like their own investment."
      ]
    },
    {
      "type": "ctaBanner",
      "ctaBannerContent": {
        "subhead": "Trusted By Hundreds Of Home Buyers & Sellers",
        "headline": "Book Your Private Market Strategy Session—Discover Exactly What It Takes to Win in Today's Toronto Real Estate Market Without Overpaying or Losing Out to Other Buyers",
        "smallText": "Book A Discovery Call Now ➡️"
      }
    }
  ],
  "footer": {
    "logo": {
      "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757711141211-Headshot Arslan Andrew.jpg"
    },
    "brokerageLabel": "Brokerage:",
    "brokerageName": "Real Broker Ontario Ltd.",
    "brokerageAddress": "130 KING ST W UNIT 1900B",
    "secondaryLogo": {
      "src": "https://cdn.chime.me/image/fs/cmsbuild/2023817/13/w1200_original_13dc3970-c036-43e0-8228-e0a6fb4270fa.png"
    },
    "disclaimerText": "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    "privacyPolicy": {
      "text": "Privacy Policy",
      "href": "https://docs.google.com/document/d/13ERdZ2TanyfTmhqzC2oWZIdyT7E1kZdlz0b10wYMrNg/edit?tab=t.0"
    }
  }
};

// Export for Node.js environment (if applicable) or set for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else if (typeof window !== 'undefined') {
  window.config = config;
}