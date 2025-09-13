import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DataCleansing: React.FC = () => {
  const contentBlocks = [
    {
      title: "Advanced Deduplication & Standardization",
      content: "Clean and standardize your database with advanced deduplication algorithms and data normalization processes. Remove duplicate records, standardize formats, and ensure consistent data quality across all fields for improved campaign performance.",
      imagePosition: 'left' as const
    },
    {
      title: "Data Correction & Validation",
      content: "Identify and correct data errors, inconsistencies, and formatting issues. Our cleansing process includes address standardization, phone number formatting, email validation, and name normalization to ensure your database meets the highest quality standards.",
      imagePosition: 'right' as const
    },
    {
      title: "Ongoing Database Maintenance",
      content: "Maintain database quality with ongoing cleansing and monitoring services. Regular data hygiene practices ensure your database remains accurate, up-to-date, and campaign-ready while preventing data decay and maintaining optimal performance.",
      imagePosition: 'left' as const
    }
  ];

  const features = [
    "Duplicate Record Removal",
    "Data Standardization",
    "Format Normalization",
    "Error Correction",
    "Address Validation",
    "Regular Maintenance"
  ];

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Data Enrichment', href: '/services/data-enrichment' },
    { name: 'Data Cleansing', href: '/services/data-enrichment/data-cleansing' }
  ];

  return (
    <ServicePageTemplate
      title="Data Cleansing Services"
      subtitle="Clean, standardize, and maintain high-quality databases for optimal performance"
      description="Ensure your database quality with comprehensive data cleansing services. We remove duplicates, standardize formats, correct errors, and implement ongoing maintenance to keep your data accurate and campaign-ready."
      contentBlocks={contentBlocks}
      features={features}
      breadcrumbs={breadcrumbs}
    />
  );
};

export default DataCleansing;