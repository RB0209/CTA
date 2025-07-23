import React from "react";

export default function Modal({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <h2 className="text-xl font-bold mb-2 text-blue-600">{data.title}</h2>
        <img src={data.image} alt={data.title} className="mb-4 rounded" />
        <p className="text-gray-700 mb-4">{data.longDescription}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
