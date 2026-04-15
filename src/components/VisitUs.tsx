export default function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C17817] font-semibold text-sm tracking-wider uppercase">
            Visit Us
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3D2314] mt-3">
            Find Us in Donaghadee
          </h2>
          <p className="text-[#6B5B4F] mt-4 text-lg max-w-2xl mx-auto">
            Just steps from the lighthouse. Always welcoming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C17817]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D2314] text-lg mb-1">Address</h3>
                <p className="text-[#6B5B4F]">
                  5 Bow Street<br />
                  Donaghadee, BT21 0EB<br />
                  Northern Ireland
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C17817]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D2314] text-lg mb-1">Opening Hours</h3>
                <p className="text-[#6B5B4F]">
                  Mon - Fri: 8am - 5pm<br />
                  Saturday: 8am - 6pm<br />
                  Sunday: 9am - 4pm
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C17817]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#C17817]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D2314] text-lg mb-1">Contact</h3>
                <p className="text-[#6B5B4F]">
                  Phone: (028) XXXX XXXX<br />
                  Email: hello@bowbellscoffee.com
                </p>
              </div>
            </div>

            {/* Dog Friendly - Elegant Badge */}
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#7A8B69]/10 to-[#7A8B69]/5 rounded-2xl p-5 border border-[#7A8B69]/20 mt-4">
              <div className="w-16 h-16 rounded-xl bg-[#7A8B69]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#7A8B69]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[#3D2314] text-lg">Dog Friendly</h4>
                <p className="text-[#6B5B4F] text-sm">Bring your best friend! Water bowls provided.</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2314.1234567890123!2d-5.5333!3d54.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861e1234567890%3A0xabcdef1234567890!2s5%20Bow%20St%2C%20Donaghadee%20BT21%200EB%2C%20UK!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
