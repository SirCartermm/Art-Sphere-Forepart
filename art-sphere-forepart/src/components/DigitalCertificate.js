import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DigitalCertificate = () => {
  const { orderId } = useParams();
  const [certificate, setCertificate] = useState(null);

  useEffect(() => {
    // Fetch certificate details for the given order ID
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`/api/certificates/${orderId}`);
        const data = await response.json();
        setCertificate(data.certificate);
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };

    fetchCertificate();
  }, [orderId]);

  if (!certificate) return <div>Loading...</div>;

  return (
    <div className="digital-certificate">
      <h1>Digital Certificate of Authenticity</h1>
      <p><strong>Order ID:</strong> {certificate.orderId}</p>
      <p><strong>Artwork Title:</strong> {certificate.artworkTitle}</p>
      <p><strong>Artist:</strong> {certificate.artistName}</p>
      <p><strong>Certificate Number:</strong> {certificate.certificateNumber}</p>
      <p><strong>Date of Issue:</strong> {new Date(certificate.dateOfIssue).toLocaleDateString()}</p>
      <p><strong>Details:</strong> {certificate.details}</p>
    </div>
  );
};

export default DigitalCertificate;