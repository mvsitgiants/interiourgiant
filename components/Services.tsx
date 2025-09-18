import React from 'react';

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5L14.364 9.636L22.5 12L14.364 14.364L12 22.5L9.636 14.364L1.5 12L9.636 9.636L12 1.5Z" fill="#F0EFEA"/>
    </svg>
);


const Services: React.FC = () => {
  return (
    <>
    {/* Right At Home Section - Added By Bhushan on 15_01_2025 */}
    <section id="services" className="py-20 bg-brand-teal">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
            {/* Right At Home Section - Updated By Bhushan on 15_01_2025 */}
            <div className="flex flex-col gap-4 max-w-2xl">
                <StarIcon />
                <h2 className="text-4xl font-serif font-bold text-white">Right At Home</h2>
                <p className="text-white">We build houses designed with more of what you need (like natural light) and less of what you don't (like sneaky add-ons). From your first sit down with us, you'll feel the Inland difference.</p>
            </div>
            
            {/* Three Feature Boxes - Updated By Bhushan on 15_01_2025 */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border-t border-white/20 pt-4">
                    <h3 className="font-bold text-lg mb-2 text-white">Home Made Personal</h3>
                    <p className="text-white text-sm">Experience the ease and transparency of building with people-people (that's us).</p>
                </div>
                 <div className="border-t border-white/20 pt-4">
                    <h3 className="font-bold text-lg mb-2 text-white">Generations Of Expertise</h3>
                    <p className="text-white text-sm">Partner with a family-owned and operated company, building locally since 1988.</p>
                </div>
                 <div className="border-t border-white/20 pt-4">
                    <h3 className="font-bold text-lg mb-2 text-white">Design You Can Feel</h3>
                    <p className="text-white text-sm">Discover thoughtful floor plans that put people first.</p>
                </div>
            </div>
        </div>
      </div>
    </section>

    {/* Video Section - Updated By Bhushan on 15_01_2025 */}
    <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto px-0 md:px-6">
            <div className="relative h-[70vh] rounded-none md:rounded-2xl overflow-hidden shadow-2xl">
                <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-brand-dark/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <button className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 hover:bg-white/50 transition-colors">
                         <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12.1699C24.5 13.3151 24.5 16.0911 22.5 17.2363L4.5 27.5263C2.5 28.6715 0 27.2835 0 24.9282L0 4.47802C0 2.12277 2.5 0.734766 4.5 1.87997L22.5 12.1699Z" fill="white"/></svg>
                    </button>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold">Your Home Is Our Home</h2>
                </div>
            </div>
        </div>
    </section>

    {/* Explore & Partner Sections */}
    <section id="designs" className="py-20 bg-brand-teal">
        <div className="container mx-auto px-6 space-y-24">
            {/* Explore */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <StarIcon />
                    <h2 className="text-4xl font-serif font-bold mt-4 mb-4">Explore Available Homes</h2>
                    <p className="text-brand-gray mb-6 max-w-md">We build homes that sing to the tune of our buyers' lives. Our homes are carefully crafted to provide an exceptional living experience.</p>
                    <a href="#" className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full text-sm hover:bg-opacity-90 transition-all">View Homes</a>
                </div>
                <div className="relative h-96">
                    <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop" alt="Living room" className="absolute top-0 left-0 w-4/5 h-full object-cover rounded-lg shadow-lg" />
                    <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" alt="Bedroom" className="absolute bottom-0 right-0 w-2/5 h-1/2 object-cover rounded-lg border-4 border-brand-teal shadow-lg" />
                </div>
            </div>
             {/* Partner */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="flex justify-center items-start order-2 md:order-1">
                    <div className="w-full max-w-md h-[450px] overflow-hidden rounded-t-full">
                        <img src="/homepageleftside.png" alt="Design swatches" className="w-full h-full object-cover"/>
                    </div>
                </div>
                 <div className="order-1 md:order-2">
                    <StarIcon />
                    <h2 className="text-4xl font-serif font-bold mt-4 mb-4">Partner With Interior Giant</h2>
                    <p className="text-brand-gray mb-6 max-w-md">Our design process is built around you. We're here to help you articulate what you love so we can create a home that is uniquely yours.</p>
                    <a href="#contact" className="bg-brand-gold text-brand-dark font-bold py-3 px-6 rounded-full text-sm hover:bg-opacity-90 transition-all">Contact Us</a>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default Services;