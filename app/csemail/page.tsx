'use client'

import { useEffect } from 'react';

export default function CSEmailPage() {
  useEffect(() => {
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@pulsaplus.co.id';
    const subject = encodeURIComponent('Pertanyaan tentang Pulsa Plus');
    const body = encodeURIComponent('Halo CS, saya ingin mengetahui tentang Pulsa Plus.');
    const emailUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    
    window.location.href = emailUrl;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">Membuka aplikasi email...</p>
    </div>
  );
}

