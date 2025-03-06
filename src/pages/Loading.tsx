import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Loading;