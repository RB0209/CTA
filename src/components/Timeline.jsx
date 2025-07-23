import React, { useState } from "react";
import timelineData from "../data/timelineData";
import Modal from "./Modal";

export default function Timeline() {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [modalData, setModalData] = useState(null);

  return (
    <div>
      <div className="flex overflow-x-auto space-x-2 mb-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 border rounded-full ${
              selectedYear === year ? "bg-blue-600 text-white" : "bg-white text-blue-600"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="flex space-x-4 overflow-x-auto">
        {timelineData[selectedYear].map((item, idx) => (
          <div
            key={idx}
            className="min-w-[250px] border rounded-lg p-4 hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setModalData(item)}
          >
            <img src={item.image} alt={item.title} className="mb-2 rounded" />
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm">{item.shortDescription}</p>
          </div>
        ))}
      </div>

      {modalData && <Modal data={modalData} onClose={() => setModalData(null)} />}
    </div>
  );
}
