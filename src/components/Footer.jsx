export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800/80 relative overflow-hidden">
      {/* Pendaran Cahaya Halus di Latar Belakang */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Sisi Kiri: Branding & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-stone-950 font-extrabold text-xs shadow-md shadow-amber-500/20">
                GC
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Genius Class
              </span>
            </div>
            <p className="text-stone-400 text-sm max-w-sm font-light">
              Mengabadikan momen seru, kebersamaan, dan perjalanan mahasiswa Semester 1.
            </p>
          </div>

          {/* Sisi Tengah/Kanan: Navigasi Cepat */}
          <div className="flex items-center gap-6 text-sm font-medium text-stone-400">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Beranda
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Tentang Kami
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleScroll(e, "gallery")}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Galeri
            </a>
          </div>

        </div>

        {/* Pemisah Garis Halus */}
        <div className="my-8 border-t border-stone-800/60" />

        {/* Hak Cipta & Ucapan Penutup */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
          <p>© {currentYear} Genius Class. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Dibuat dengan <span className="text-amber-500">☕</span> untuk kebersamaan Genius Class
          </p>
        </div>

      </div>
    </footer>
  );
}