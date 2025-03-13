import React from "react";

const OurLocation = () => {
  return (
    <>
      <span id="ourlocation"></span>
      <div className="dark:bg-dark">
        <div className="container mx-auto py-10 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
          <div className="max-w-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>

            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80482.34361699097!2d13.285841586123048!3d52.52000654435487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f0cdb31%3A0xcb2ca51dca55ca73!2sBerlin%20Brandenburg%20Airport!5e0!3m2!1sen!2sus!4v1708123456789!5m2!1sen!2sus"
              style={{ height: "250px", width: "100%", border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>

            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/place/Berlin+Brandenburg+Airport"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLocation;


