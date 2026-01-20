
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roofType: 'Shingle',
    address: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co AJAX endpoint to send email to MARKSPEARS@ROCKETMAIL.COM
      const response = await fetch("https://formsubmit.co/ajax/MARKSPEARS@ROCKETMAIL.COM", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New Roofing Estimate Request from ${formData.name}`,
            _template: 'table'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', roofType: 'Shingle', address: '', notes: '' });
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      alert('There was an error sending your request. Please try again or call us directly at 727-318-8800.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300" id="estimate">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">Request Received!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Thank you for reaching out, <strong>{formData.name}</strong>. We've sent your details to Mark Spears and our team will contact you shortly to schedule your free estimate.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-primary font-bold hover:underline"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300" id="estimate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Schedule Your Free Estimate</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Fill out the form below to request a free estimate for your roofing needs. Your information will be sent directly to <strong>Mark Spears</strong> and our specialist team for a quick assessment.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">call</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Give us a call</p>
                  <p className="text-xl font-bold">727-318-8800</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">location_on</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Visit our office</p>
                  <p className="text-xl font-bold">1316 Whispering Pines Dr., Clearwater, FL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background-light dark:bg-background-dark p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors" 
                    placeholder="John Doe" 
                    type="text"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors" 
                    placeholder="john@example.com" 
                    type="email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors" 
                    placeholder="(555) 000-0000" 
                    type="tel"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Roof Type</label>
                  <select 
                    name="roofType"
                    value={formData.roofType}
                    onChange={(e) => setFormData({...formData, roofType: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors"
                    disabled={isSubmitting}
                  >
                    <option>Shingle</option>
                    <option>Metal</option>
                    <option>Tile</option>
                    <option>Flat / TPO</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Property Address</label>
                <input 
                  required
                  name="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors" 
                  placeholder="Street, City, Zip" 
                  type="text"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 transition-colors" 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                className={`w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/20 transform hover:scale-[1.01] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`} 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Request...
                  </>
                ) : (
                  <>Submit Request</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
