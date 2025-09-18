import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-light border-t border-brand-light/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Get in touch here</h2>
            <p className="text-brand-gray mb-8">We are available for a friendly chat to discuss your project. We're happy to help.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Fill in your name" className="w-full bg-transparent border-b border-brand-light/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
              <input type="tel" placeholder="Contact Phone Number" className="w-full bg-transparent border-b border-brand-light/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-light/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
              <input type="text" placeholder="I'm interested in" className="w-full bg-transparent border-b border-brand-light/20 py-3 focus:outline-none focus:border-brand-gold transition-colors" />
              <textarea placeholder="Message" rows={3} className="w-full bg-transparent border-b border-brand-light/20 py-3 focus:outline-none focus:border-brand-gold transition-colors"></textarea>
              <div className="pt-4">
                <button type="submit" className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full text-sm hover:bg-opacity-90 transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="md:pt-16">
            <h3 className="text-4xl font-serif font-bold mb-8">Interior Giant</h3>
            <div className="space-y-6">
              <div>
                <p className="text-brand-gray text-sm">Contact</p>
                <p className="font-bold">010 123 4567</p>
                <p className="font-bold">info@elmessiri.com.au</p>
              </div>
              <div>
                <p className="text-brand-gray text-sm">Office</p>
                <p className="font-bold">Level 1, 12 Sample Street<br/>Sydney, NSW 2000</p>
              </div>
              <div>
                <p className="text-brand-gray text-sm">Social</p>
                <div className="flex space-x-4 font-bold">
                    <a href="#" className="hover:text-brand-gold">Instagram</a>
                    <a href="#" className="hover:text-brand-gold">Facebook</a>
                    <a href="#" className="hover:text-brand-gold">Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-light/10 mt-16 pt-6 text-center">
          <p className="text-brand-gray text-sm">&copy; {new Date().getFullYear()} Interior Giant Builders. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;