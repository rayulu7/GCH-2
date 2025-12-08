import React from 'react';



import BlogContent from './BlogContent';

import BlogFloatingButtons from './BlogFloatingButtons';

const BlogApp = () => {
  return (
    <div className="min-h-screen bg-white">
      
      
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <BlogContent />
          
        </div>
      </main>

      <BlogFloatingButtons />
    </div>
  );
};

export default BlogApp;