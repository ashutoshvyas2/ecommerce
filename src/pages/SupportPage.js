import React from 'react';
import { Link } from 'react-router-dom';

// This component uses the CSS classes defined in your src/index.css file.
// Make sure src/index.css is imported in your main src/index.js or src/App.js file.

export default function SupportPage() {
  return (
    <div className="support-page-container">
      <header className="support-header">
        <h1>We're here to help</h1>
        <div className="support-search-bar">
          <input type="text" placeholder="Search for articles..." />
          {/* This is the small icon *inside* the search bar */}
          <span className="search-icon">🔍</span>
        </div>
      </header>

      <main className="support-topics-grid">
        
        {/* Card 1: My Account */}
        <Link to="/support/account" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: User */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6a1.5 1.5 0 01-1.499-1.632z" />
            </svg>
          </div>
          <h3>My account</h3>
          <p>Create and manage your account</p>
        </Link>

        {/* Card 2: Email campaigns */}
        <Link to="/support/email" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: Envelope */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h3>Email campaigns</h3>
          <p>Engage your contacts using mobile-friendly email design tools</p>
        </Link>

        {/* Card 3: WhatsApp & SMS */}
        <Link to="/support/sms" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: Device/Phone */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <h3>WhatsApp & SMS</h3>
          <p>Connect directly with your contacts using targeted WhatsApp & SMS</p>
        </Link>

        {/* Card 4: Transactional emails */}
        <Link to="/support/transactional" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: Arrows */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </div>
          <h3>Transactional emails</h3>
          <p>Send one-to-one emails with optimal deliverability and tracking</p>
        </Link>

        {/* Card 5: Contacts */}
        <Link to="/support/contacts" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: Contacts/User Group */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6a1.5 1.5 0 01-1.499-1.632z" />
            </svg>
          </div>
          <h3>Contacts</h3>
          <p>Manage and segment your contacts for perfectly targeted campaigns</p>
        </Link>

        {/* Card 6: Automation */}
        <Link to="/support/automation" className="support-topic-card">
          <div className="icon-container">
            {/* SVG Icon: Cog/Automation */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.227l.11-.044a2.25 2.25 0 012.87 2.26l-.11.044c-.55.22-1.02.685-1.11 1.227-.09.542-.56 1.007-1.11 1.227l-.11.044a2.25 2.25 0 01-2.87-2.26l.11-.044c.55-.22 1.02-.685 1.11-1.227zM12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.25 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 15.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM19.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.25 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <h3>Automation</h3>
          <p>Automate your marketing using emails, SMS, website tracking & more</p>
        </Link>
        
      </main>
    </div>
  );
}

