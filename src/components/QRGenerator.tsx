import React, { useState } from 'react';

const QRGenerator = () => {
  const [qrCodes, setQrCodes] = useState<string[]>([]);

  const redirectUrls = [
    'https://getlockd.app/poster-ghosted',
    'https://getlockd.app/poster-choppedUnemployed',
    'https://getlockd.app/poster-ball',
    'https://getlockd.app/poster-cheated',
    'https://getlockd.app/poster-blackout',
    'https://getlockd.app/social',
    'https://getlockd.app/ads'
  ];

  const generateQRCode = (url: string) => {
    // Using qr-server.com API for QR code generation
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    return qrUrl;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">QR Codes for Your Posters</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {redirectUrls.map((url, index) => (
          <div key={index} className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src={generateQRCode(url)} 
                alt={`QR Code for ${url}`}
                className="w-full h-auto"
              />
            </div>
            <p className="mt-2 text-sm text-gray-600 break-all">
              {url.replace('https://getlockd.app/', '')}
            </p>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 text-xs hover:underline"
            >
              Test Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRGenerator;
