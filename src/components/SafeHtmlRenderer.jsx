// components/SafeHtmlRenderer.tsx
'use client'; // <-- أهم خطوة: تحويل هذا المكون إلى مكون عميل

import sanitizeHtml from 'sanitize-html';
import { useMemo } from 'react';

// تعريف الـ Props التي سيستقبلها المكون
 

export default function SafeHtmlRenderer({ rawHtml, className } ) {
  
  // نستخدم useMemo لضمان أن عملية التنظيف لا تتكرر مع كل عملية render
  // إلا إذا تغير الـ HTML الخام (rawHtml). هذا يحسن الأداء.
  const cleanHtml = useMemo(() => {
    return sanitizeHtml(rawHtml, {
      // يمكنك تخصيص القواعد هنا كما تريد
      allowedTags: [ 'p', 'ul', 'ol', 'li', 'strong', 'em', 'br', 'h1', 'h2', 'h3' ],
      allowedAttributes: {},
    });
  }, [rawHtml]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}