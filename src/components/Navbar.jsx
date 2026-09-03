import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll halus saat link diklik
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile jika sedang terbuka

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="bg-stone-900/90 backdrop-blur-md border-b border-stone-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nama Kelas */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
        >
          <span className="font-bold text-lg text-stone-100 tracking-tight group-hover:text-amber-400 group-active:text-amber-400 transition-colors">
            Genius Class
          </span>
        </a>

        {/* Menu Navigasi Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-amber-400 active:text-amber-500 transition-colors cursor-pointer"
            >
              Beranda
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-amber-400 active:text-amber-500 transition-colors cursor-pointer"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              onClick={(e) => handleScroll(e, "gallery")}
              className="hover:text-amber-400 active:text-amber-500 transition-colors cursor-pointer"
            >
              Galeri
            </a>
          </li>
        </ul>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-300 hover:text-white active:scale-90 active:text-amber-400 focus:outline-none p-2 rounded-lg active:bg-stone-800/60 transition-all"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900/95 px-6 py-2 flex flex-col font-medium text-stone-300 text-sm animate-fadeIn">
          <a 
            href="#home" 
            onClick={(e) => handleScroll(e, "home")}
            className="hover:text-amber-400 active:text-amber-400 active:bg-stone-800/80 active:translate-x-1 py-3 px-2 rounded-md transition-all cursor-pointer border-b border-stone-800/50 flex items-center"
          >
            Beranda
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-amber-400 active:text-amber-400 active:bg-stone-800/80 active:translate-x-1 py-3 px-2 rounded-md transition-all cursor-pointer border-b border-stone-800/50 flex items-center"
          >
            Tentang Kami
          </a>
          <a 
            href="#gallery" 
            onClick={(e) => handleScroll(e, "gallery")}
            className="hover:text-amber-400 active:text-amber-400 active:bg-stone-800/80 active:translate-x-1 py-3 px-2 rounded-md transition-all cursor-pointer flex items-center"
          >
            Galeri
          </a>
        </div>
      )}
    </nav>
  );
}