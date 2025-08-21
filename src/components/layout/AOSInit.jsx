// components/AOSInit.js

"use client"; //  <-- هذا السطر مهم جدًا لجعله مكون عميل

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف الأنماط الخاص بالمكتبة

export default function AOSInit  () {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن
      once: false, // هل يتم تشغيل الأنيميشن مرة واحدة فقط؟
    });
  }, []); //  <-- القوسان الفارغان يضمنان أن هذا الكود يعمل مرة واحدة فقط بعد تحميل المكون

  return null; // هذا المكون لا يعرض أي شيء في الواجهة
};