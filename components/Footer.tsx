
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-white/5 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">roofing</span>
              <span className="font-display text-xl font-bold tracking-tight">WEST POINT <span className="text-primary">ROOFING</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Premium roofing solutions for Florida homeowners. Quality, integrity, and excellence in every shingle we lay.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              </a>
              <a className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all" href="#">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247.636-.416 1.363-.465 2.427-.047 1.066-.06 1.405-.06 4.074v.08c0 2.643.012 2.987.06 4.043.049 1.064.218 1.791.465 2.427a4.902 4.902 0 011.153 1.772 4.902 4.902 0 011.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06h.08c2.643 0 2.987-.012 4.043-.06 1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123v-.08c0-2.643-.012-2.987-.06-4.043-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 01-1.153-1.772A4.902 4.902 0 0116.123 2.525c-.636-.247-1.363-.416-2.427-.465C12.631 2.013 12.29 2 9.574 2h-.08zm0 2.235h.08c2.661 0 2.957.01 4.01.059.96.044 1.482.204 1.83.339.46.179.789.393 1.135.738.344.346.558.675.738 1.135.135.348.295.87.339 1.83.049 1.053.059 1.349.059 4.01v.08c0 2.661-.01 2.957-.059 4.01-.044.96-.204 1.482-.339 1.83-.179.46-.393.789-.738 1.135-.346.344-.675.558-1.135.738-.348.135-.87.295-1.83.339-1.053.049-1.349.059-4.01.059h-.08c-2.661 0-2.957-.01-4.01-.059-.96-.044-1.482-.204-1.83-.339-.46-.179-.789-.393-1.135-.738-.346-.344-.675-.558-1.135-.738-.348-.135-.87-.295-1.83-.339-1.053-.049-1.349-.059-4.01-.059h-.08c-2.661 0-2.957-.01-4.01-.059-.96-.044-1.482-.204-1.83-.339-.46-.179-.789-.393-1.135-.738-.346-.344-.675-.558-1.135-.738-.348-.135-.87-.295-1.83-.339-1.053-.049-1.349-.059-4.01-.059h-.08c-2.661 0-2.957-.01-4.01-.059-.96-.044-1.482-.204-1.83-.339-.46-.179-.789-.393-1.135-.738-.346-.344-.675-.558-1.135-.738-.348.135-.87.295-1.83.339-1.053.049-1.349.059-4.01.059h-.08c-2.661 0-2.957-.01-4.01-.059-.96-.044-1.482-.204-1.83-.339-.46-.179-.789-.393-1.135-.738-.344-.346-.558-.675-.738-1.135-.135-.348-.295-.87-.339-1.83-.049-1.053-.059-1.349-.059-4.01v-.08c0-2.661.01-2.957.059-4.01.044-.96.204-1.482.339-1.83.179-.46.393-.789.738-1.135.346-.344.675-.558 1.135-.738.348-.135.87-.295 1.83-.339 1.053-.049 1.349-.059 4.01-.059h.08zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.946-944a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#services">Services</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#gallery">Project Gallery</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">About West Point</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Roofing FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Roofing Types</h5>
            <ul className="space-y-4">
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Shingle Roofing</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Tile Roofing</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Metal Roofing</a></li>
              <li><a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Flat Roofing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Office Hours</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8am - 6pm</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9am - 4pm</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-primary font-medium">Closed</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2024 West Point Roofing LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
