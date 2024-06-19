"use client";
import Link from 'next/link';
import { useState } from 'react';

// Dummy templates for demonstration (in a real app, fetch from a server or state management)
const dummyTemplates = [
  { id: 1, name: "Welcome Message", content: "Hello {name}, welcome to our service!" },
  { id: 2, name: "Weekly Update", content: "Hi {name}, here is your weekly update!" },
  { id: 3, name: "Reminder", content: "Don't forget about our meeting on {date}." }
];

export default function Broadcast() {
  const [templates] = useState(dummyTemplates);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [schedule, setSchedule] = useState("");
  const [recurring, setRecurring] = useState(false);

  // Handle selecting a template
//   const handleSelectTemplate = (id) => {
//     const template = templates.find(t => t.id === id);
//     setSelectedTemplateId(id);
//     setMessageContent(template ? template.content : "");
//   };

  // Handle sending the message
  const handleSendNow = () => {
    alert('Message sent immediately!');
  };

  // Handle scheduling the message
  const handleScheduleMessage = () => {
    alert('Message scheduled!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Broadcast Messages</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Message Template Selection */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Select a Template</h2>
          <div className="space-y-4">
            <select
              className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              value={selectedTemplateId}
            //   onChange={(e) => handleSelectTemplate(parseInt(e.target.value))}
            >
              <option value="">Select a template</option>
              {templates.map(template => (
                <option key={template.id} value={template.id}>{template.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message Personalization and Send */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Compose and Send</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Message Content</label>
              <textarea
                className="block w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                placeholder="Your message content"
              ></textarea>
            </div>
            <div>
            <Link href="/analytics">
              <button
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={handleSendNow}
              >
                Send Now
              </button>
              </Link>
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Schedule Send</label>
              <input
                type="datetime-local"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
              />
              
              <button
                className="w-full px-4 py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={handleScheduleMessage}
              >
                Schedule Message
              </button>
             
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                checked={recurring}
                onChange={() => setRecurring(!recurring)}
              />
              <label className="ml-2 font-medium text-gray-700">Set as recurring message</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
