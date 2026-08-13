import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Premium Quality',
      description: 'We deliver excellence in every project, ensuring top-tier results that exceed expectations.',
      icon: (
        <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Dedicated Support',
      description: 'Our expert team is available 24/7 to answer your questions and resolve any issues instantly.',
      icon: (
        <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Highly Secure',
      description: 'We implement industry-leading security practices to keep your data safe and protected.',
      icon: (
        <svg className="w-8 h-8 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full">
      {/* Split Background: Violet top, White bottom */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-3/5 w-full bg-violet-700"></div>
        <div className="h-2/5 w-full bg-white"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-violet-100 text-lg">
            We combine innovation, expertise, and dedication to provide you with the best experience possible.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out border border-violet-50"
            >
              <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;