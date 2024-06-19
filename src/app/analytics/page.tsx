"use client";  // Ensure this line is only needed if you are using Next.js app router (next 13+ with /app folder structure)

import { useState } from 'react';

export default function Tracking() {
  // Dummy data for demonstration
  const [messages, setMessages] = useState([
    { id: 1, content: "Hello, welcome to our service!", status: "Delivered", timestamp: "2024-06-18 10:30 AM" },
    { id: 2, content: "Weekly Update: Please check your email for details.", status: "Failed", timestamp: "2024-06-18 12:45 PM" },
    { id: 3, content: "Reminder: Meeting tomorrow at 10 AM.", status: "Delivered", timestamp: "2024-06-18 1:15 PM" }
  ]);

  const [replies, setReplies] = useState([
    { id: 1, messageId: 1, sender: "+1234567890", content: "Thank you!", timestamp: "2024-06-18 11:00 AM" },
    { id: 2, messageId: 3, sender: "+0987654321", content: "Got it, thanks.", timestamp: "2024-06-18 2:00 PM" }
  ]);

  // Dummy analytics data
  const analytics = {
    totalMessages: 3,
    delivered: 2,
    failed: 1,
    responseRate: "66%"
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Delivery and Response Tracking</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Reports Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Delivery Reports</h2>
          <ul className="space-y-2">
            {messages.map((message) => (
              <li key={message.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
                <div>
                  <p className="font-medium">{message.content}</p>
                  <p className="text-sm text-gray-500">{message.timestamp}</p>
                </div>
                <div className={`text-sm font-semibold ${message.status === "Delivered" ? "text-green-500" : "text-red-500"}`}>
                  {message.status}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Response Handling Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Responses</h2>
          <ul className="space-y-2">
            {replies.map((reply) => (
              <li key={reply.id} className="p-3 bg-gray-100 rounded-md">
                <div className="font-medium">{reply.sender}</div>
                <p className="text-sm text-gray-700">{reply.content}</p>
                <p className="text-sm text-gray-500">{reply.timestamp}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Analytics Dashboard Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-100 rounded-md text-center">
            <p className="text-lg font-bold">{analytics.totalMessages}</p>
            <p className="text-sm text-gray-600">Total Messages</p>
          </div>
          <div className="p-4 bg-green-100 rounded-md text-center">
            <p className="text-lg font-bold">{analytics.delivered}</p>
            <p className="text-sm text-gray-600">Delivered</p>
          </div>
          <div className="p-4 bg-red-100 rounded-md text-center">
            <p className="text-lg font-bold">{analytics.failed}</p>
            <p className="text-sm text-gray-600">Failed</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-md text-center">
            <p className="text-lg font-bold">{analytics.responseRate}</p>
            <p className="text-sm text-gray-600">Response Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
