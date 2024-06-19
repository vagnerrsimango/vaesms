"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Templates() {
  const [templates, setTemplates] = useState([
    { id: 1, name: "Welcome Message", content: "Hello {name}, welcome to our service!" },
    { id: 2, name: "Weekly Update", content: "Hi {name}, here is your weekly update!" },
    { id: 3, name: "Reminder", content: "Don't forget about our meeting on {date}." }
  ]);
  const [newTemplateName, setNewTemplateName] = useState("");
  const [newTemplateContent, setNewTemplateContent] = useState("");
  const [editTemplate, setEditTemplate] = useState(null);

  // Handle adding a new template
  const handleAddTemplate = () => {
    if (newTemplateName && newTemplateContent) {
      setTemplates([
        ...templates,
        {
          id: templates.length + 1,
          name: newTemplateName,
          content: newTemplateContent
        }
      ]);
      setNewTemplateName("");
      setNewTemplateContent("");
    }
  };

  // Handle saving an edited template
  const handleSaveEdit = () => {
    // setTemplates(templates.map(template => 
    //   template.id === editTemplate.id 
    //     ? { ...editTemplate, name: newTemplateName, content: newTemplateContent } 
    //     : template
    // ));
    setEditTemplate(null);
    setNewTemplateName("");
    setNewTemplateContent("");
  };

  // Handle selecting a template to edit
  // const handleEdit = (template) => {
  //   setEditTemplate(template);
  //   setNewTemplateName(template.name);
  //   setNewTemplateContent(template.content);
  // };

  // Handle deleting a template


  // const handleDelete = (id) => {
  //   // setTemplates(templates.filter(template => template.id !== id));
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Manage Message Templates</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Templates List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Existing Templates</h2>
          <ul className="space-y-2">
            {templates.map(template => (
              <li key={template.id} className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
                <div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-gray-600">{template.content}</p>
                </div>
                <div className="space-x-2">
                  <button
                    className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                    // onClick={() => handleEdit(template)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                    // onClick={() => handleDelete(template.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Add or Edit Template */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">{editTemplate ? "Edit Template" : "Add New Template"}</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Template Name</label>
              <input
                type="text"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                value={newTemplateName}
                onChange={(e) => setNewTemplateName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Template Content</label>
              <textarea
                className="block w-full h-32 px-4 py-2 border border-gray-300 rounded-md"
                value={newTemplateContent}
                onChange={(e) => setNewTemplateContent(e.target.value)}
                placeholder="Enter your message template. Use {name} or other placeholders."
              ></textarea>
            </div>
            <div>
              <Link href="/broadcastmgmt">
              <button
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                onClick={editTemplate ? handleSaveEdit : handleAddTemplate}
              >
                {editTemplate ? "Save Changes" : "Add Template"}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
