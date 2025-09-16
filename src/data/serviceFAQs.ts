interface FAQ {
  question: string;
  answer: string;
}

export const serviceFAQs: Record<string, FAQ[]> = {
  'b2b-email-lists': [
    {
      question: "What makes your B2B email lists different from competitors?",
      answer: "Our B2B email lists maintain 98%+ accuracy through multi-source verification, real-time updates, and strict GDPR compliance. We provide detailed segmentation options and guarantee data quality with replacement guarantees."
    },
    {
      question: "How do you ensure email deliverability rates?",
      answer: "We use advanced SMTP verification, domain validation, and spam trap detection. Our emails undergo continuous monitoring and we maintain relationships with major ISPs to ensure optimal deliverability rates consistently above 95%."
    },
    {
      question: "Can I target specific industries and job titles?",
      answer: "Absolutely. Our database allows precise targeting by industry (50+ verticals), job titles, company size, revenue, geographic location, and technology stack. We can create custom segments based on any combination of criteria."
    },
    {
      question: "What formats do you provide the email lists in?",
      answer: "We provide data in multiple formats including CSV, Excel, API integration, and direct CRM imports. All lists include standard fields like name, email, company, title, phone, and additional custom fields as needed."
    },
    {
      question: "Do you offer replacement guarantees for bounced emails?",
      answer: "Yes, we provide replacement guarantees for hard bounces exceeding 5%. Our quality assurance process ensures minimal bounce rates, and we replace any invalid contacts at no additional cost."
    }
  ],
  
  'data-enrichment': [
    {
      question: "What types of data can you enrich in my existing database?",
      answer: "We can enrich contact information, company data, demographic details, firmographic data, technographic insights, social profiles, phone numbers, and behavioral data. Our enrichment covers both B2B and B2C databases."
    },
    {
      question: "How much additional data can you typically append?",
      answer: "On average, we can increase database completeness by 60-85%. This includes filling missing email addresses, phone numbers, job titles, company information, and adding new data points like social profiles and technology usage."
    },
    {
      question: "What is your data enrichment accuracy rate?",
      answer: "Our data enrichment maintains 95%+ accuracy through multi-source verification and real-time validation. We use machine learning algorithms and human verification to ensure the highest quality standards."
    },
    {
      question: "How long does the data enrichment process take?",
      answer: "Standard enrichment projects take 3-7 business days depending on database size and complexity. We offer expedited services for urgent projects, with some enrichments completed within 24-48 hours."
    },
    {
      question: "Can you enrich data while maintaining GDPR compliance?",
      answer: "Yes, all our enrichment processes are fully GDPR compliant. We only use legally obtained data sources, provide opt-out mechanisms, and maintain detailed records of data sources and consent status."
    }
  ],

  'digital-marketing': [
    {
      question: "What digital marketing channels do you specialize in?",
      answer: "We specialize in email marketing, LinkedIn campaigns, social media management, content marketing, SEO, PPC advertising, and marketing automation. Our integrated approach ensures consistent messaging across all channels."
    },
    {
      question: "How do you measure campaign success and ROI?",
      answer: "We track comprehensive metrics including open rates, click-through rates, conversion rates, lead quality scores, cost per acquisition, and revenue attribution. We provide detailed reports and analytics dashboards for complete transparency."
    },
    {
      question: "Do you provide ongoing campaign management?",
      answer: "Yes, we offer full-service campaign management including strategy development, creative design, campaign execution, monitoring, optimization, and detailed reporting. Our team handles all aspects of your digital marketing."
    },
    {
      question: "Can you integrate with our existing marketing tools?",
      answer: "Absolutely. We integrate with popular platforms like HubSpot, Salesforce, Marketo, Mailchimp, Google Analytics, and many others. We ensure seamless data flow and campaign coordination across all your marketing tools."
    },
    {
      question: "What industries do you have experience marketing for?",
      answer: "We have extensive experience across technology, healthcare, finance, manufacturing, professional services, e-commerce, and B2B SaaS. Our team understands industry-specific challenges and regulations."
    }
  ],

  'seo-services': [
    {
      question: "How long does it take to see SEO results?",
      answer: "Typically, you'll start seeing improvements in 3-6 months, with significant results in 6-12 months. Timeline depends on competition level, current website status, and target keywords. We provide monthly progress reports."
    },
    {
      question: "What SEO strategies do you use?",
      answer: "We use white-hat SEO techniques including keyword research, on-page optimization, technical SEO, content creation, link building, local SEO, and mobile optimization. All strategies comply with Google's guidelines."
    },
    {
      question: "Do you guarantee first-page rankings?",
      answer: "While we can't guarantee specific rankings due to Google's algorithm changes, we guarantee improved visibility, increased organic traffic, and better search performance. Our track record shows 90%+ of clients achieve first-page rankings for target keywords."
    },
    {
      question: "How do you handle algorithm updates?",
      answer: "We stay current with all Google algorithm updates and adjust strategies accordingly. Our white-hat approach ensures long-term stability, and we continuously monitor and adapt to maintain and improve rankings."
    },
    {
      question: "What reporting do you provide for SEO campaigns?",
      answer: "We provide comprehensive monthly reports including ranking improvements, traffic growth, keyword performance, backlink analysis, technical improvements, and competitive analysis. You'll have access to real-time dashboards."
    }
  ],

  'website-design-development': [
    {
      question: "What technologies do you use for website development?",
      answer: "We use modern technologies including React, WordPress, Shopify, HTML5, CSS3, JavaScript, PHP, and various CMS platforms. We choose the best technology stack based on your specific requirements and goals."
    },
    {
      question: "Are all websites mobile-responsive?",
      answer: "Yes, all our websites are fully responsive and mobile-optimized. We follow mobile-first design principles and test across all devices and browsers to ensure perfect functionality and user experience."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance optimization, backup services, and technical support. We ensure your website stays secure and current."
    },
    {
      question: "How long does website development typically take?",
      answer: "Development timeline varies by complexity: simple websites (2-4 weeks), business websites (4-8 weeks), e-commerce sites (6-12 weeks), and custom applications (8-16 weeks). We provide detailed project timelines upfront."
    },
    {
      question: "Do you provide SEO optimization with website development?",
      answer: "Yes, all our websites include basic SEO optimization including proper site structure, meta tags, fast loading speeds, mobile optimization, and clean code. We also offer advanced SEO services for maximum visibility."
    }
  ],

  'technology-email-lists': [
    {
      question: "What technology segments do you cover?",
      answer: "We cover IT professionals, software developers, system administrators, CTOs, IT managers, cybersecurity experts, cloud architects, data scientists, and decision-makers across all technology verticals and company sizes."
    },
    {
      question: "How current is your technology contact data?",
      answer: "Our technology database is updated monthly with new hires, job changes, and company updates. We maintain 95%+ accuracy through continuous verification and direct validation with technology professionals."
    },
    {
      question: "Can you segment by specific technologies used?",
      answer: "Yes, we can segment by specific technologies, software platforms, programming languages, cloud providers, and IT infrastructure. Our technographic data helps you target users of specific technology stacks."
    },
    {
      question: "Do you have contacts from both enterprise and startup companies?",
      answer: "Absolutely. Our database spans from Fortune 500 enterprises to emerging startups, covering the complete technology ecosystem. We can filter by company size, funding stage, and technology maturity level."
    },
    {
      question: "What additional data points do you provide for tech professionals?",
      answer: "Beyond standard contact information, we provide job functions, technology specializations, certifications, company technology stack, team size, budget authority, and recent technology adoptions."
    }
  ],

  'healthcare-email-lists': [
    {
      question: "What healthcare sectors do you cover?",
      answer: "We cover hospitals, clinics, pharmaceutical companies, medical device manufacturers, healthcare IT, telemedicine, medical practices, nursing homes, and healthcare administration across all specialties."
    },
    {
      question: "Are your healthcare lists HIPAA compliant?",
      answer: "Yes, all our healthcare data collection and processing is HIPAA compliant. We only collect business contact information and maintain strict privacy and security standards for all healthcare-related data."
    },
    {
      question: "Can you target specific medical specialties?",
      answer: "Absolutely. We can target by medical specialty, hospital departments, practice types, facility sizes, geographic regions, and decision-making authority. Our database covers all major medical specializations."
    },
    {
      question: "Do you have international healthcare contacts?",
      answer: "Yes, our healthcare database includes contacts from North America, Europe, Asia-Pacific, and other regions. We can provide country-specific lists and comply with local healthcare regulations."
    },
    {
      question: "What verification process do you use for healthcare contacts?",
      answer: "We use multi-layer verification including medical license verification, facility association confirmation, email validation, and regular updates through healthcare directories and professional associations."
    }
  ],

  'professionals-email-list': [
    {
      question: "What professional categories do you cover?",
      answer: "We cover executives, managers, consultants, lawyers, accountants, engineers, architects, real estate professionals, financial advisors, and decision-makers across all professional service industries."
    },
    {
      question: "How do you verify professional credentials?",
      answer: "We verify professional credentials through licensing boards, professional associations, LinkedIn profiles, company directories, and direct verification. Our validation ensures authentic professional contacts."
    },
    {
      question: "Can I target by seniority levels and decision-making authority?",
      answer: "Yes, we segment by C-level executives, VPs, directors, managers, and senior professionals. We also identify budget authority, team size, and influence levels within organizations."
    },
    {
      question: "Do you update professional contact information regularly?",
      answer: "We update our professional database monthly, tracking job changes, promotions, company moves, and new professional certifications. This ensures you reach professionals at their current positions."
    },
    {
      question: "What additional insights do you provide about professionals?",
      answer: "Beyond contact details, we provide education background, professional certifications, years of experience, company information, team size, and recent professional achievements or publications."
    }
  ],

  'industry-specific-email-lists': [
    {
      question: "Which industries do you specialize in?",
      answer: "We specialize in manufacturing, finance, retail, education, government, non-profit, real estate, construction, transportation, energy, agriculture, and 40+ other industry verticals."
    },
    {
      question: "How detailed is your industry segmentation?",
      answer: "We provide detailed sub-industry targeting, company size filtering, revenue-based segmentation, geographic targeting, and business model classification. Each industry list includes sector-specific data points."
    },
    {
      question: "Do you understand industry-specific regulations?",
      answer: "Yes, our team understands industry-specific regulations, compliance requirements, and communication preferences. We ensure all data collection and marketing practices comply with sector regulations."
    },
    {
      question: "Can you provide industry market insights?",
      answer: "Absolutely. Each industry-specific list comes with market insights, industry trends, communication best practices, and recommendations for reaching that particular sector effectively."
    },
    {
      question: "How do you ensure industry classification accuracy?",
      answer: "We use NAICS codes, SIC codes, and proprietary classification systems. Our data team manually verifies industry assignments and regularly updates classifications based on company changes."
    }
  ],

  'b2b-sales-email-lists': [
    {
      question: "What makes your sales email lists effective for B2B sales?",
      answer: "Our B2B sales lists focus on decision-makers and budget holders with high purchase intent. We provide detailed buyer personas, recent company changes, and buying signals to maximize sales success."
    },
    {
      question: "Do you provide lead scoring and qualification data?",
      answer: "Yes, we provide lead scoring based on company growth, recent funding, technology adoption, hiring patterns, and other buying intent signals. This helps prioritize your sales outreach efforts."
    },
    {
      question: "Can you identify companies currently in buying cycles?",
      answer: "Absolutely. We track intent signals like technology evaluations, hiring patterns, funding events, and competitive research activities to identify companies actively in buying cycles."
    },
    {
      question: "What sales intelligence do you provide with contacts?",
      answer: "We provide company financials, recent news, technology stack, team size, growth indicators, competitive landscape, and recent business changes that create sales opportunities."
    },
    {
      question: "How do you ensure contacts have purchasing authority?",
      answer: "We verify decision-making authority through job title analysis, organizational charts, budget responsibility indicators, and direct validation. We focus on contacts who can influence or make purchasing decisions."
    }
  ],

  'custom-mail-list': [
    {
      question: "How customized can you make email lists?",
      answer: "We create completely custom lists based on any combination of criteria including industry, job titles, company size, location, technology usage, recent activities, and hundreds of other data points."
    },
    {
      question: "What is the minimum and maximum list size for custom orders?",
      answer: "We handle custom lists from 100 contacts to over 1 million records. There's no minimum or maximum limit - we scale to meet your specific campaign requirements."
    },
    {
      question: "How long does it take to create custom lists?",
      answer: "Custom list development typically takes 5-10 business days depending on complexity and size. For urgent projects, we offer expedited delivery within 48-72 hours."
    },
    {
      question: "Can you work with very specific or niche targeting criteria?",
      answer: "Yes, we specialize in highly specific targeting including unique industry niches, specific technology users, recent company changes, geographic micro-targeting, and very precise demographic criteria."
    },
    {
      question: "Do you provide ongoing list updates and maintenance?",
      answer: "Yes, we offer ongoing list maintenance including regular updates, new contact additions, data refreshes, and continuous monitoring to keep your custom lists current and effective."
    }
  ],

  'all-conferences-attendees-list': [
    {
      question: "Which conference types do you cover?",
      answer: "We cover technology conferences, healthcare events, business summits, industry trade shows, academic conferences, and professional networking events across all major industries and regions."
    },
    {
      question: "How recent is your conference attendee data?",
      answer: "We update conference data within 30 days post-event. Our database includes recent attendees, speakers, exhibitors, and sponsors from major conferences over the past 24 months."
    },
    {
      question: "Can you provide attendee lists for specific conferences?",
      answer: "Yes, we can provide attendee lists for specific conferences, including speaker lists, exhibitor contacts, and networking event participants. We cover both virtual and in-person events."
    },
    {
      question: "What additional information do you provide about attendees?",
      answer: "Beyond contact details, we provide job titles, companies, industries, session attendance, networking activities, and engagement levels during conferences to help you identify the most valuable prospects."
    },
    {
      question: "Do you have contacts from international conferences?",
      answer: "Yes, our database includes attendees from major international conferences across North America, Europe, Asia-Pacific, and other regions. We can provide global or region-specific lists."
    }
  ],

  'email-append': [
    {
      question: "What is your email append match rate?",
      answer: "Our email append service achieves 40-70% match rates depending on data quality and completeness. We use multiple data sources and advanced algorithms to find missing email addresses."
    },
    {
      question: "How do you verify appended email addresses?",
      answer: "All appended emails undergo SMTP verification, domain validation, spam trap detection, and deliverability testing. We guarantee 95%+ accuracy for all appended email addresses."
    },
    {
      question: "What data do you need to perform email append?",
      answer: "We need at minimum: full name and company name. Additional data like job title, phone number, or address improves match rates. We can work with partial data in many cases."
    },
    {
      question: "Is email append GDPR and CAN-SPAM compliant?",
      answer: "Yes, all our email append services comply with GDPR, CAN-SPAM, and international regulations. We provide opt-in status verification and include necessary compliance data."
    },
    {
      question: "How quickly can you complete email append projects?",
      answer: "Standard email append projects are completed within 2-5 business days. Rush services are available for urgent projects, with completion possible within 24-48 hours."
    }
  ],

  'data-append': [
    {
      question: "What types of data can you append to existing records?",
      answer: "We can append contact information, company data, demographic details, firmographic data, technographic insights, social profiles, financial information, and behavioral data."
    },
    {
      question: "How much missing data can you typically fill?",
      answer: "On average, we can fill 60-85% of missing data fields depending on the data type and original record completeness. Some data types have higher append rates than others."
    },
    {
      question: "What is your data append accuracy guarantee?",
      answer: "We guarantee 95%+ accuracy for all appended data. Our multi-source verification process and quality assurance procedures ensure the highest data quality standards."
    },
    {
      question: "Can you append data for international records?",
      answer: "Yes, we provide data append services for international records across North America, Europe, Asia-Pacific, and other regions, complying with local data protection regulations."
    },
    {
      question: "How do you handle data privacy in append services?",
      answer: "We strictly comply with all data privacy regulations including GDPR, CCPA, and others. All appended data comes from legitimate, consented sources with proper privacy controls."
    }
  ],

  'data-verification': [
    {
      question: "What does your data verification process include?",
      answer: "Our verification includes email validation, phone number verification, address standardization, company validation, duplicate detection, and completeness assessment using multiple verification methods."
    },
    {
      question: "How accurate is your data verification service?",
      answer: "Our verification service achieves 98%+ accuracy through multi-layer validation including real-time verification, database cross-referencing, and AI-powered quality assessment."
    },
    {
      question: "Can you verify data in real-time?",
      answer: "Yes, we offer real-time verification APIs that can be integrated into your systems for instant data validation during data entry or import processes."
    },
    {
      question: "What happens to records that fail verification?",
      answer: "Records that fail verification are flagged with specific error codes. We provide detailed reports showing verification status and recommended actions for each record."
    },
    {
      question: "How long does the data verification process take?",
      answer: "Batch verification typically takes 1-3 business days depending on database size. Real-time verification is instantaneous, and rush services are available for urgent projects."
    }
  ],

  'data-profiling': [
    {
      question: "What insights does data profiling provide?",
      answer: "Data profiling provides completeness analysis, quality scoring, pattern recognition, duplicate identification, data distribution analysis, and segmentation insights to understand your database composition."
    },
    {
      question: "How detailed are your profiling reports?",
      answer: "Our reports include field-by-field analysis, quality metrics, data patterns, anomaly detection, completeness percentages, and actionable recommendations for data improvement."
    },
    {
      question: "Can data profiling help improve campaign performance?",
      answer: "Absolutely. Profiling identifies high-quality segments, reveals data gaps, and provides targeting recommendations that can significantly improve campaign performance and ROI."
    },
    {
      question: "How often should I profile my database?",
      answer: "We recommend quarterly profiling for active databases, or after any major data imports or updates. Regular profiling helps maintain data quality and campaign effectiveness."
    },
    {
      question: "What actions can I take based on profiling results?",
      answer: "Based on profiling results, you can prioritize data cleansing, identify enrichment opportunities, optimize segmentation strategies, and improve data collection processes."
    }
  ],

  'data-intelligence': [
    {
      question: "What types of intelligence insights do you provide?",
      answer: "We provide intent signals, buying behavior analysis, competitive intelligence, technographic data, market trends, lead scoring, and predictive analytics to enhance business decisions."
    },
    {
      question: "How do you detect buying intent signals?",
      answer: "We monitor website behavior, content consumption, search patterns, technology evaluations, hiring activities, and company changes to identify prospects showing purchase intent."
    },
    {
      question: "Can you provide competitive intelligence?",
      answer: "Yes, we provide insights into competitive landscapes, market positioning, technology adoption, pricing intelligence, and competitive customer analysis to inform your strategy."
    },
    {
      question: "How accurate are your predictive analytics?",
      answer: "Our machine learning models achieve 85%+ accuracy in predicting conversion likelihood, customer lifetime value, and optimal engagement timing based on historical data patterns."
    },
    {
      question: "How frequently is intelligence data updated?",
      answer: "Intelligence data is updated daily for real-time signals and monthly for comprehensive market intelligence. This ensures you have the most current insights for decision-making."
    }
  ],

  'data-cleansing': [
    {
      question: "What data quality issues can you fix?",
      answer: "We fix duplicate records, formatting inconsistencies, incomplete data, outdated information, invalid entries, standardization issues, and data corruption problems."
    },
    {
      question: "How do you handle duplicate detection and removal?",
      answer: "We use advanced algorithms to identify exact duplicates, near-duplicates, and fuzzy matches. Our deduplication process preserves the most complete and accurate record from each duplicate group."
    },
    {
      question: "Can you standardize data formats?",
      answer: "Yes, we standardize phone numbers, addresses, company names, job titles, and other fields according to industry standards and your specific formatting requirements."
    },
    {
      question: "What is your data cleansing accuracy rate?",
      answer: "Our cleansing process achieves 98%+ accuracy through automated algorithms combined with manual quality assurance. We provide detailed before/after quality reports."
    },
    {
      question: "Do you provide ongoing data maintenance?",
      answer: "Yes, we offer ongoing maintenance programs to keep your database clean and current through regular cleansing cycles, continuous monitoring, and automated quality controls."
    }
  ],

  'email-campaigns': [
    {
      question: "What email campaign services do you provide?",
      answer: "We provide campaign strategy, template design, list segmentation, automation setup, A/B testing, delivery optimization, performance tracking, and ongoing campaign management."
    },
    {
      question: "What email deliverability rates do you achieve?",
      answer: "We consistently achieve 95%+ deliverability rates through proper authentication, reputation management, content optimization, and relationships with major email service providers."
    },
    {
      question: "Do you provide email template design?",
      answer: "Yes, we create responsive email templates that are optimized for all devices and email clients. Our designs focus on engagement, conversions, and brand consistency."
    },
    {
      question: "How do you optimize campaign performance?",
      answer: "We optimize through A/B testing, segmentation refinement, send time optimization, content personalization, and continuous analysis of engagement metrics and conversion data."
    },
    {
      question: "What reporting do you provide for email campaigns?",
      answer: "We provide comprehensive reports including open rates, click rates, conversion tracking, heat maps, audience insights, and ROI analysis with actionable recommendations."
    }
  ],

  'linkedin-campaigns': [
    {
      question: "What LinkedIn campaign strategies do you use?",
      answer: "We use targeted connection requests, personalized messaging sequences, content engagement, sponsored content, InMail campaigns, and strategic networking to generate quality leads."
    },
    {
      question: "How do you ensure LinkedIn campaigns comply with platform rules?",
      answer: "We strictly follow LinkedIn's terms of service, use approved automation tools, maintain natural engagement patterns, and focus on relationship building rather than aggressive sales tactics."
    },
    {
      question: "What response rates do you typically achieve?",
      answer: "Our LinkedIn campaigns typically achieve 15-30% acceptance rates for connection requests and 10-20% response rates for follow-up messages, significantly higher than industry averages."
    },
    {
      question: "Can you target specific industries and job titles on LinkedIn?",
      answer: "Yes, we can precisely target by industry, job title, company size, seniority level, skills, education, and even specific companies or groups for highly focused outreach campaigns."
    },
    {
      question: "Do you provide LinkedIn profile optimization?",
      answer: "Yes, we optimize LinkedIn profiles for better visibility and credibility, including profile photos, headlines, summaries, experience sections, and strategic keyword placement."
    }
  ],

  'event-marketing': [
    {
      question: "What event marketing services do you provide?",
      answer: "We provide event strategy, multi-channel promotion, registration optimization, attendee engagement, lead capture systems, follow-up campaigns, and comprehensive event marketing management."
    },
    {
      question: "How do you promote events across different channels?",
      answer: "We use email marketing, social media, LinkedIn outreach, content marketing, paid advertising, industry partnerships, and targeted outreach to maximize event awareness and attendance."
    },
    {
      question: "Can you help with both virtual and in-person events?",
      answer: "Yes, we have expertise in marketing both virtual and in-person events, including hybrid events. We adapt strategies based on event format and audience preferences."
    },
    {
      question: "How do you capture and qualify leads from events?",
      answer: "We implement lead capture systems, registration forms, engagement tracking, and lead scoring to identify the most qualified prospects and enable effective follow-up campaigns."
    },
    {
      question: "What post-event follow-up services do you provide?",
      answer: "We create personalized follow-up sequences, segment attendees by engagement level, nurture leads through targeted content, and track conversions to maximize event ROI."
    }
  ],

  'content-writing-services': [
    {
      question: "What types of content do you create?",
      answer: "We create blog posts, whitepapers, case studies, email content, social media posts, website copy, landing pages, press releases, and industry-specific content across all formats."
    },
    {
      question: "Do you have expertise in specific industries?",
      answer: "Yes, our writers have expertise in technology, healthcare, finance, manufacturing, professional services, and B2B markets. We understand industry terminology and audience preferences."
    },
    {
      question: "How do you ensure content is SEO-optimized?",
      answer: "We perform keyword research, optimize for search intent, include proper meta tags, use semantic keywords, create compelling titles, and ensure content structure supports SEO goals."
    },
    {
      question: "What is your content creation and revision process?",
      answer: "Our process includes strategy development, research, writing, internal review, client review, revisions, and final optimization. We provide up to 3 rounds of revisions for each piece."
    },
    {
      question: "Can you create content for different stages of the buyer's journey?",
      answer: "Absolutely. We create awareness-stage content (educational), consideration-stage content (comparative), and decision-stage content (conversion-focused) tailored to each audience segment."
    }
  ],

  'social-media-creation': [
    {
      question: "What social media content do you create?",
      answer: "We create visual posts, infographics, short videos, motion graphics, social media posters, carousel posts, story content, and platform-specific content for all major social networks."
    },
    {
      question: "Which social media platforms do you create content for?",
      answer: "We create content for LinkedIn, Facebook, Twitter, Instagram, YouTube, TikTok, and other platforms, optimizing content format and messaging for each platform's unique audience."
    },
    {
      question: "Do you provide video production services?",
      answer: "Yes, we create promotional videos, explainer animations, social media videos, motion graphics, and other video content designed to increase engagement and convey complex information effectively."
    },
    {
      question: "How do you ensure brand consistency across content?",
      answer: "We develop brand guidelines, use consistent visual elements, maintain brand voice and tone, and create content templates that ensure all social media content aligns with your brand identity."
    },
    {
      question: "Can you create content calendars and posting schedules?",
      answer: "Yes, we create comprehensive content calendars, plan posting schedules, coordinate campaigns across platforms, and provide strategic recommendations for optimal posting times and frequency."
    }
  ],

  'linkedin-account-management': [
    {
      question: "What does LinkedIn account management include?",
      answer: "We provide profile optimization, content creation and posting, network building, engagement management, lead nurturing, performance analytics, and strategic consultation for thought leadership building."
    },
    {
      question: "How do you build thought leadership through LinkedIn?",
      answer: "We create valuable industry content, engage with relevant discussions, share insights and expertise, participate in industry groups, and position you as an authority in your field."
    },
    {
      question: "What type of content do you post on LinkedIn?",
      answer: "We post industry insights, company updates, thought leadership articles, engaging questions, visual content, video posts, and curated content that resonates with your professional network."
    },
    {
      question: "How do you grow LinkedIn networks strategically?",
      answer: "We identify relevant professionals, send personalized connection requests, engage with prospects' content, participate in industry discussions, and build relationships that convert to business opportunities."
    },
    {
      question: "What reporting do you provide for LinkedIn management?",
      answer: "We provide detailed reports on profile views, post engagement, network growth, lead generation, connection quality, and recommendations for improving LinkedIn performance."
    }
  ]
};