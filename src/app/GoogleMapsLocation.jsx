"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { SiGooglemaps } from "react-icons/si";

export default function GoogleMapsLocation() {
  return (
    <SpotlightCard
      className="custom-spotlight-card flex flex-col items-start justify-center p-4"
      spotlightColor="rgba(207, 15, 71, 0.4)"
    >
      <div className="bg-folly/20 border border-folly rounded-full px-4 py-1 flex items-center justify-center gap-2 mb-3">
        <SiGooglemaps className="w-4.5 h-auto" />
        <h3 className="text-md font-bold">Location</h3>
      </div>

      <div className="w-full h-full rounded-xl overflow-hidden">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63374.292704089574!2d107.60187219565896!3d-6.9033624650387235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1762663170835!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SpotlightCard>
  );
}
