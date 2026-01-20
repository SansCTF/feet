
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roofType: 'Shingle',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', roofType: 'Shingle', address: '', notes: '' });
  };

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark transition-colors duration-300" id="estimate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Upgrade Your Roof?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Fill out the form to request a free estimate. We serve Central and Western Florida with expertise in shingle, tile, metal, and flat roofs.
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
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                    placeholder="(555) 000-0000" 
                    type="tel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Roof Type</label>
                  <select 
                    value={formData.roofType}
                    onChange={(e) => setFormData({...formData, roofType: e.target.value})}
                    className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3"
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
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                  placeholder="Street, City, Zip" 
                  type="text"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea 
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-transparent border-slate-300 dark:border-white/10 rounded-lg focus:ring-primary focus:border-primary px-4 py-3" 
                  placeholder="Tell us about your project..." 
                  rows={4}
                ></textarea>
              </div>
              
              <button 
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-primary/20 transform hover:scale-[1.01]" 
                type="submit"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
