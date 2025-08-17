 
'use client';  

 
import DOMPurify from 'dompurify';
 
 

export default function SafeHtmlRenderer({ rawHtml, className } ) {
  
   const cleanHtml = DOMPurify.sanitize(rawHtml);
   

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}