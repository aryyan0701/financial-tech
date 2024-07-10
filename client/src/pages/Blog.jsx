import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogs = [
  {
    id: 1,
    title: 'Understanding Financial Literacy',
    description: 'Learn the basics of financial literacy and how it impacts your daily life.',
    url: 'https://example.com/blog1',
    image: 'https://img.risingkashmir.com/wp-content/uploads/2024/03/a6c449b1-0c51-45bd-b667-cbf680dcb435.png'
  },
  {
    id: 2,
    title: 'Budgeting 101: Tips for Beginners',
    description: 'A guide to creating and maintaining a budget for financial stability.',
    url: 'https://example.com/blog2',
    image: 'https://i.ytimg.com/vi/ktha2IL6YnI/maxresdefault.jpg'
  },
  {
    id: 3,
    title: 'Investing for the Future',
    description: 'An introduction to investing and strategies for long-term growth.',
    url: 'https://via.placeholder.com/150',
    image: 'https://d28wu8o6itv89t.cloudfront.net/images/PcPELSbfgUwNNhfAIApng-1539440885497.png'
  },
  {
    id: 4,
    title: 'Credit Scores Explained',
    description: 'Understanding credit scores and how they affect your financial health.',
    url: 'https://example.com/blog5',
    image: 'https://assets-jpcust.jwpsrv.com/thumbnails/5ugh573c-720.jpg'
  },
  {
    id: 5,
    title: 'Debt Management Strategies',
    description: 'Effective strategies to manage and reduce your debt.',
    url: 'https://example.com/blog6',
    image: 'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/a/2/a2c306ea3754c1e340fa886f73b3ece14f83095c971242f7b3d645531c15d9fd/debt-management-mc-slide1.png'
  },
];

const BlogSection = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Blog Section</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogSection;
