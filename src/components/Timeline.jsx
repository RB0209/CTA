import React, { useState } from "react";
import timelineData from "../data/timelineData";
import { motion } from "framer-motion";

export default function Timeline() {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState("2011");
  const [modalData, setModalData] = useState(null);

  return (
    <div className="w-full bg-white text-[#0074D9] py-12">
      {/* Year Buttons */}
      <div
        className="
          flex flex-wrap justify-center gap-3 px-8 mb-10 
          md:flex-nowrap md:overflow-x-auto md:scrollbar-hide
        "
      >
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 text-lg font-bold rounded-full border transition ${
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
      <div
        className="
          grid gap-8 px-8
          md:flex md:overflow-x-auto md:scrollbar-hide md:space-x-8
        "
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {timelineData[selectedYear].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="bg-white rounded-xl border border-gray-200 p-6 cursor-pointer hover:border-[#0074D9] transition"
            onClick={() => setModalData(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.shortDescription}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4 text-[#0074D9]">
              {modalData.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {modalData.longDescription}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
