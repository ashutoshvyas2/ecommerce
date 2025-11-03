import React, { useState } from 'react';

// Define the 12 segments of the wheel
const segments = [
  { label: 'GAGNE', color: '#4CAF50', value: 'You Won!' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
  { label: 'Livraison', color: '#2196F3', value: 'Free Shipping' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
  { label: '10% Off', color: '#FF9800', value: '10% Off Coupon' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
  { label: 'GAGNE', color: '#4CAF50', value: 'You Won!' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
  { label: 'Livraison', color: '#2196F3', value: 'Free Shipping' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
  { label: '5€', color: '#9C27B0', value: '5€ Voucher' },
  { label: 'Perdu', color: '#f44336', value: 'Try Again' },
];
const segmentAngle = 360 / segments.length;

export default function SpinToWinModal({ isOpen, onClose }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDegrees, setSpinDegrees] = useState(0);
  const [result, setResult] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  if (!isOpen) return null;

  // Generate the CSS for the conic-gradient background
  const wheelBackground = {
    background: `conic-gradient(
      ${segments
        .map(
          (seg, i) =>
            `${seg.color} ${i * segmentAngle}deg ${(i + 1) * segmentAngle}deg`
        )
        .join(',\n')}
    )`,
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpin = () => {
    if (isSpinning || !formData.name || !formData.email) {
      alert('Please fill out your name and email to play!');
      return;
    }

    setIsSpinning(true);
    setResult(null);

    // Calculate a random spin
    // Add 3600 (10 full spins) + random degree for a nice visual effect
    const randomStop = Math.floor(Math.random() * 360);
    const totalDegrees = 3600 + randomStop;
    setSpinDegrees(totalDegrees);

    // Determine the winning segment
    // We add half a segment angle to center the pointer in the middle of a slice
    const winningSegment = Math.floor((360 - (randomStop % 360) + (segmentAngle / 2)) / segmentAngle) % segments.length;
    const prize = segments[winningSegment].value;
    
    // Wait for animation to finish
    setTimeout(() => {
      setIsSpinning(false);
      setResult(`Congratulations! You won: ${prize}`);
      // You could also just close the modal after a delay
      // setTimeout(onClose, 2000); 
    }, 5500); // 500ms longer than the 5s spin animation
  };

  return (
    <div className="spin-modal-backdrop" onClick={onClose}>
      <div className="spin-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="spin-modal-close" onClick={onClose}>&times;</button>
        
        {/* Left Side (Image) - replicating the look */}
        <div className="spin-modal-image">
          <img 
            src="https://media.istockphoto.com/id/1201024669/photo/handsome-man-in-casual-clothing.jpg?s=612x612&w=0&k=20&c=TexR7OTm-QRZCtkDecnSVgihtLMbG9WynadACrEiMf0=" 
            alt="Promotion" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px 0 0 10px' }}
          />
        </div>

        {/* Right Side (Wheel & Form) */}
        <div className="spin-modal-form-area">
          <h2>150€ voucher to be won every week</h2>
          <p style={{ color: '#666' }}>Last winner: Nicolas D.</p>
          
          <div className="spin-wheel-container">
            <div className="spin-pointer"></div>
            <div 
              className="spin-wheel" 
              style={{
                ...wheelBackground,
                transform: `rotate(${spinDegrees}deg)`,
              }}
            >
              {segments.map((seg, i) => (
                <div 
                  className="spin-label" 
                  key={i}
                  style={{ transform: `rotate(${segmentAngle * i + segmentAngle / 2}deg)` }}
                >
                  <span>{seg.label}</span>
                </div>
              ))}
            </div>
            <div className="spin-wheel-center"></div>
          </div>

          {result && <p className="spin-result">{result}</p>}
          
          <div className="spin-form">
            <input type="text" name="name" placeholder="Your name" onChange={handleInputChange} />
            <input type="email" name="email" placeholder="your@email.com" onChange={handleInputChange} />
            <div style={{ fontSize: '0.7rem', color: '#888', margin: '5px 0' }}>
              <input type="checkbox" id="agree" />
              <label htmlFor="agree"> By playing you agree to subscribe to our newsletter.</label>
            </div>
            <button onClick={handleSpin} disabled={isSpinning}>
              {isSpinning ? 'Spinning...' : 'PLAY'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
