import React from 'react';
import { 
  Hammer, 
  Wrench, 
  HardHat, 
  Truck, 
  Award, 
  Users, 
  Shield,
  Clock,
  Star,
  LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router';

const AboutPage = () => {
  const stats = [
    { icon: LayoutGrid, value: '5000+', label: 'Products' },
    { icon: Users, value: '10k+', label: 'Happy Customers' },
    { icon: Truck, value: '24/7', label: 'Fast Delivery' },
    { icon: Shield, value: '100%', label: 'Quality Assured' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We source only the highest quality tools from trusted manufacturers worldwide.'
    },
    {
      icon: Shield,
      title: 'Expert Support',
      description: 'Our team of experienced professionals is always ready to help you choose the right tool.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Quick delivery and efficient service to keep your projects on schedule.'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'Competitive pricing without compromising on quality and service.'
    }
  ];

  const team = [
    {
      name: 'John Mitchell',
      role: 'Founder & Master Craftsman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: '30+ years in construction and tool manufacturing'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Supply chain expert ensuring quality at every step'
    },
    {
      name: 'Mike Roberts',
      role: 'Technical Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Certified tool specialist with workshop experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1581147036324-c51d8c5b4d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Tools workshop" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Your Dreams, One Tool at a Time
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Since 1985, we've been the trusted partner for professionals and DIY enthusiasts, 
              providing top-quality tools and expert advice for every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                Visit Our Store
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-16 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              What started as a small hardware store in downtown Chicago has grown into one of the 
              Midwest's most trusted tool suppliers. Founded by master carpenter John Mitchell, 
              ToolMaster was built on a simple principle: provide professionals and hobbyists with 
              the best tools at fair prices.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Today, we're proud to serve thousands of customers across the country, offering over 
              5,000 products from the world's leading manufacturers. Our team of expert craftsmen 
              personally tests and selects every tool we sell, ensuring that when you buy from us, 
              you're getting equipment that will last.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1500648767791-00dcc994a43e' : i === 2 ? '1494790108377-be9c29b29330' : i === 3 ? '1507003211169-0a1dd7228f2d' : '1534528741775-53994a69daeb'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <span className="font-bold text-blue-600">10,000+</span> satisfied customers
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tool store interior" 
              className="rounded-lg shadow-lg h-64 object-cover w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tools collection" 
              className="rounded-lg shadow-lg h-64 object-cover w-full mt-8"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just selling tools – we're building relationships based on trust, 
              quality, and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team brings decades of combined experience to help you find the perfect tools for your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Visit our store or browse our online catalog to find the perfect tools for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={"/products"} className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 text-lg">
              Shop Now
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;