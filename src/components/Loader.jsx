import React from 'react';

const Loader = () => {
  return (
    <div className="text-center py-10 text-gray-500">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500 mx-auto mb-4"></div>
      <p>Loading users...</p>
    </div>
  );
};

export default Loader;
