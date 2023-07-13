import React from "react";

const ResetButton = ({ resetTodos }) => {
  return (
    <button
      className="bg-slate-500 text-white rounded-full px-8 py-2 mt-4 hover:bg-slate-600 transition-colors duration-300"
      onClick={resetTodos}
    >
      Reset
    </button>
  );
};

export default ResetButton;
