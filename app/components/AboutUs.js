export default function AboutUs() {
    return (
      <section className="bg-white py-16 px-6 md:px-20 mt-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            About Us
          </h2>
          <p className="text-muted-text text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 text-primary-text">
          At <span className="text-accent font-semibold">ProGateTechnology</span>, we harness the power of technology to build smart, reliable, and scalable IT systems — enabling businesses to grow, adapt, and lead on a global stage.          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center mt-10">
          <div className="bg-muted p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary-text mb-2">Our Mission</h3>
            <p className="text-primary-text text-sm leading-relaxed">
              To digitize and elevate small and mid-sized businesses through smart, scalable SaaS solutions tailored for every sector.
            </p>
          </div>
  
          <div className="bg-muted p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary-text mb-2">Our Vision</h3>
            <p className="text-primary-text text-sm leading-relaxed ">
              To become the go-to digital backbone for local entrepreneurs — from food vendors to edtech pioneers.
            </p>
          </div>
  
          <div className="bg-muted p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary-text mb-2">Why Us</h3>
            <p className="text-primary-text text-sm leading-relaxed">
              We don’t just offer software — we partner in your growth journey, combining tech, design, and business strategy.
            </p>
          </div>
        </div>
      </section>
    );
  }
  