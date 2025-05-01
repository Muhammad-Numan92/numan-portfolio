"use client"; // This line makes this component a Client Component

// app/components/ServiceCard.js

export default function ServiceCard({ icon, title, description }) {
  const IconComponent = icon;

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-lg p-6 text-left transition-all duration-300 hover:border-teal-500 hover:shadow-lg hover:shadow-teal-500/50">
      <div className="text-teal-500 text-4xl mb-4">
        <IconComponent />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-100">{description}</p>
    </div>
  );
}
