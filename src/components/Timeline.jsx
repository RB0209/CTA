import React, { useState } from "react";
import timelineData from "../data/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState("2011");
  const [modalData, setModalData] = useState(null);

  return (
    <div className="w-full bg-white text-[#0074D9] py-12">
      {/* Year Selector */}
      <div className="flex overflow-x-auto space-x-3 px-8 mb-10 scrollbar-hide">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 text-lg rounded-full border transition font-medium ${
              selectedYear === year
                ? "bg-[#0074D9] text-white border-[#0074D9]"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Timeline Cards */}
      <div className="flex overflow-x-auto snap-x snap-mandatory px-8 space-x-8 scrollbar-hide">
        {timelineData[selectedYear].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateY: 3,
              scale: 1.04,
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="min-w-[350px] bg-white rounded-2xl border border-gray-200 p-6 flex-shrink-0 snap-center cursor-pointer hover:border-[#0074D9] transition"
            onClick={() => setModalData(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.shortDescription}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for long description */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full text-gray-900 relative shadow-lg"
          >
            <button
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setModalData(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#0074D9]">
              {modalData.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{modalData.longDescription}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
