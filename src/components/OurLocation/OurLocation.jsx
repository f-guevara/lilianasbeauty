import React from "react";

const OurLocation = () => {
  return (
    <>
    <span id="ourlocation"></span>
    <div className="dark:bg-dark">
    <div className="container mx-auto py-10 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Nuestra Ubicación</h2>
        
        {/* Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d969.1761039240629!2d-89.22705733046278!3d13.675729002253227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633104e2da789b%3A0x1c52557e90b1f31b!2sLiliana%20Arriola%20Beauty%20Salon!5e0!3m2!1sen!2sde!4v1730014525788!5m2!1sen!2sde"
          style={{ height: "250px", width: "100%", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>

        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/ZmsxaKmfr5tHmXPy8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default OurLocation;


