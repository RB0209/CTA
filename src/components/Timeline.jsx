import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import timelineData from "../data/timelineData";

const Timeline = () => {
  const years = Object.keys(timelineData);
  const [selectedYear, setSelectedYear] = useState("2011");
  const [selectedTile, setSelectedTile] = useState(null);

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Year Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-full border transition font-extrabold tracking-wide ${
              selectedYear === year
                ? "bg-[#0074D9] text-white border-[#0074D9]"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {timelineData[selectedYear].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg cursor-pointer border hover:shadow-2xl transition"
            onClick={() => setSelectedTile(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h3 className="text-[#0074D9] font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.shortDescription}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTile && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTile(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl max-w-lg p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedTile.image}
                alt={selectedTile.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-[#0074D9] font-bold text-xl mb-2">
                {selectedTile.title}
              </h2>
              <p className="text-gray-700">{selectedTile.longDescription}</p>
              <button
                onClick={() => setSelectedTile(null)}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
