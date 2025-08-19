// components/SafeHtmlRenderer.jsx

'use client';
import DOMPurify from 'dompurify';

export default function SafeHtmlRenderer({ rawHtml, className }) {
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  return (
    <div
      data-aos="fade-right" data-aos-delay="100"

      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}