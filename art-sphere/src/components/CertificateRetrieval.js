import React, { useState } from 'react';

function CertificateRetrieval() {
  const [certOrderId, setCertOrderId] = useState('');
  const [certificate, setCertificate] = useState('');

  const handleGetCertificate = async (event) => {
    event.preventDefault();
    // Simulate API call
    const cert = await fakeApiCall(`GetCertificate/${certOrderId}`);
    setCertificate(cert);
  };

  return (
    <section className="certificates">
      <h2>Receive Digital Certificate</h2>
      <form onSubmit={handleGetCertificate}>
        <label htmlFor="certOrderId">Enter Order ID for Certificate:</label>
        <input
          type="text"
          id="certOrderId"
          value={certOrderId}
          onChange={(e) => setCertOrderId(e.target.value)}
          required
        />
        <button type="submit">Get Certificate</button>
      </form>
      {certificate && <div className="certificate-output">Certificate: {certificate}</div>}
    </section>
  );
}

// Simulated API call
const fakeApiCall = (endpoint) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint.includes('GetCertificate')) {
        resolve('Certificate #123456789');
      } else {
        resolve('Unknown request');
      }
    }, 1000);
  });
};

export default CertificateRetrieval;