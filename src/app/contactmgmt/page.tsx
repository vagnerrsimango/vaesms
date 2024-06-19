import Link from "next/link";

// pages/contacts.js
export default function Contacts() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Contact Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Import Contacts Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Import Contacts</h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Upload CSV</button>
            <button className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">Import from Google Contacts</button>
          </div>
        </div>
        
        {/* Contact Groups Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Groups</h2>
          <ul className="space-y-2">
            <li className="flex justify-between p-3 bg-gray-100 rounded-md">
              <span>Family</span>
              <span className="text-gray-500">5 Contacts</span>
            </li>
            <li className="flex justify-between p-3 bg-gray-100 rounded-md">
              <span>Clients</span>
              <span className="text-gray-500">20 Contacts</span>
            </li>
            <li className="flex justify-between p-3 bg-gray-100 rounded-md">
              <span>Team</span>
              <span className="text-gray-500">10 Contacts</span>
            </li>
          </ul>
          <Link href="/templatemgmt">
          <button className="mt-4 w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create New Group</button>
          </Link>
        </div>
      </div>
      
      {/* Contact Details Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Custom Fields</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data for demonstration */}
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">+1234567890</td>
              <td className="border px-4 py-2">john@example.com</td>
              <td className="border px-4 py-2">VIP</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">+0987654321</td>
              <td className="border px-4 py-2">jane@example.com</td>
              <td className="border px-4 py-2">Priority</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
