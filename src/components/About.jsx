export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-stone-900 text-stone-100 relative overflow-hidden border-t border-stone-800 select-none">
      
      {/* Hiasan Cahaya Latar Belakang Berdenyut */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Judul */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 text-white tracking-wide">
            Tentang <span className="text-amber-500 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">Genius Class</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto mt-4 rounded-full shadow-lg shadow-amber-500/50" />
        </div>

        {/* Deskripsi Utama dengan Efek Sentuh Mobile */}
        <div className="group relative bg-stone-800/40 backdrop-blur-md border border-stone-700/60 rounded-3xl p-8 md:p-12 shadow-2xl text-center max-w-3xl mx-auto mb-16 transition-all duration-300 hover:border-amber-500/50 hover:shadow-amber-500/10 hover:-translate-y-1 active:scale-[0.98] active:border-amber-500/80 active:bg-stone-800/60">
          <p className="text-stone-300 text-base md:text-xl leading-relaxed font-light">
            Selamat datang di <strong className="text-amber-400 font-semibold">Genius Class</strong>! Kami adalah sekumpulan mahasiswa Semester 1 yang sedang berjuang mengarungi awal perjalanan dunia perkuliahan. Dari tugas yang datang bertubi-tubi sampai momen nongkrong setelah kelas, tempat ini dibuat untuk mengabadikan perjalanan seru kita bersama.
          </p>
        </div>

        {/* 3 Kartu Nilai / Karakter Kelas Beranimasi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kartu 1 */}
          <div className="group relative bg-stone-800/30 border border-stone-700/40 p-8 rounded-2xl text-center transition-all duration-300 hover:bg-stone-800/70 hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 active:scale-95 active:border-amber-500 active:bg-stone-800/80 cursor-pointer">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 animate-float">
              🚀
            </div>
            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-amber-400 group-active:text-amber-400 transition-colors">
              Awal Bertemu
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kita berasal dari tempat yang berbeda, bahasa yang berbeda, dan kita semua bertemu di satu tempat yaitu <strong className="text-stone-200">Genius Class</strong>.
            </p>
          </div>

          {/* Kartu 2 */}
          <div className="group relative bg-stone-800/30 border border-stone-700/40 p-8 rounded-2xl text-center transition-all duration-300 hover:bg-stone-800/70 hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 active:scale-95 active:border-amber-500 active:bg-stone-800/80 cursor-pointer">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 animate-float [animation-delay:1s]">
              ☕
            </div>
            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-amber-400 group-active:text-amber-400 transition-colors">
              Solid & Santai
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Tugas dikerjakan bareng, nongkrong bareng, dan saling bantu pas bingung materi perkuliahan.
            </p>
          </div>

          {/* Kartu 3 */}
          <div className="group relative bg-stone-800/30 border border-stone-700/40 p-8 rounded-2xl text-center transition-all duration-300 hover:bg-stone-800/70 hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 active:scale-95 active:border-amber-500 active:bg-stone-800/80 cursor-pointer">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 animate-float [animation-delay:2s]">
              💻
            </div>
            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-amber-400 group-active:text-amber-400 transition-colors">
              Program Studi
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Terdiri dari gabungan mahasiswa jurusan <strong className="text-stone-200">Sistem Informasi</strong>, <strong className="text-stone-200">Teknologi Informasi</strong>, dan <strong className="text-stone-200">Informatika</strong>.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}