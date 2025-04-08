import { useState } from 'react';
import './WhatsAppSender.css';

const WhatsAppSender = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number
        if (!phoneNumber.trim()) {
            setError('Please enter a phone number');
            return;
        }

        // Remove any non-digit characters from the phone number
        const cleanNumber = phoneNumber.replace(/\D/g, '');

        // Construct WhatsApp URL
        // WhatsApp's Click to Chat feature uses this URL format
        const whatsappUrl = `https://wa.me/${cleanNumber}`;

        // Add message if provided
        const urlWithMessage = message.trim()
            ? `${whatsappUrl}?text=${encodeURIComponent(message)}`
            : whatsappUrl;

        // Open WhatsApp in a new tab
        window.open(urlWithMessage, '_blank');
    };

    return (
        <div className="whatsapp-container">
            <h1 className="whatsapp-title">WhatsApp Message Sender</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="phoneNumber" className="form-label">
                        Phone Number (with country code)
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            setError('');
                        }}
                        placeholder="e.g. 1234567890 (no + needed)"
                        className="form-input"
                    />
                    <p className="form-hint">
                        Enter the full number with country code but without any spaces, dashes, or the + symbol.
                    </p>
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Message (optional)
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message here..."
                        className="form-textarea"
                        rows="3"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button
                    type="submit"
                    className="submit-button"
                >
                    Send on WhatsApp
                </button>
            </form>

            <div className="info-text">
                <p>This will open WhatsApp Web or the WhatsApp app on your device.</p>
            </div>
        </div>
    );
};

export default WhatsAppSender;