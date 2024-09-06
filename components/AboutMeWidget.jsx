"use client"
import React, { useState } from 'react';

const AboutMeWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {['About Me', 'Experiences', 'Recommended'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-gray-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-gray-400">
        {activeTab === 'About Me' && (
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years...
          </p>
        )}
        {activeTab === 'Experiences' && (
          <p>Here’s some information about my work experiences...</p>
        )}
        {activeTab === 'Recommended' && (
          <p>These are the recommendations I have received...</p>
        )}
      </div>
    </div>
  );
};

export default AboutMeWidget;
