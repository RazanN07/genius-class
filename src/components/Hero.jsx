export default function Hero() {
  const bgImage = "/Bg_Genius.png";

  const photos = [
    "/kls1.jpeg",
    "/kls2.jpeg",
    "/kls3.jpeg",
    "/kls4.jpeg",
    "/kls5.jpeg",
    "/kls6.jpeg",
    "/kls7.jpeg",
    "/kls8.jpeg",
    "/kls9.jpeg",
    "/kls10.jpeg",
    "/kls11.jpeg",
    "/kls12.jpeg",
    "/kls13.jpeg",
    "/kls14.jpeg",
    "/kls15.jpeg",
    "/kls16.jpeg",
    "/kls17.jpeg",
    "/kls18.jpeg",
  ];

  return (
    <section id="home" className="relative w-full h-[calc(100vh-65px)] overflow-hidden flex flex-col justify-center items-center pb-8 select-none">
      {/* Background Gambar Full Screen */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />

      {/* Layer Overlay Opacity Warm */}
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[2px]" />
      
      {/* Gradasi Halus Bagian Bawah */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent" />

      {/* Wrapper Konten (Naik Sedikit ke Atas) */}
      <div className="relative z-10 w-full flex flex-col items-center gap-3 md:gap-5 -mt-6 md:-mt-10">
        
        {/* Teks Melengkung */}
        <div className="w-full max-w-xl px-4 flex justify-center active:scale-95 transition-transform duration-200 cursor-pointer">
          <svg viewBox="0 0 500 130" className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">
            <path
              id="curve"
              d="M 50 110 Q 250 20 450 110"
              fill="transparent"
            />
            <text className="fill-white font-extrabold text-4xl sm:text-5xl tracking-widest uppercase">
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                Genius Class
              </textPath>
            </text>
          </svg>
        </div>

        {/* Slider Foto Berjalan (Tepat di Bawah Tulisan) */}
        <div className="w-full overflow-hidden flex group">
          <div className="flex min-w-full shrink-0 space-x-4 animate-marquee-loop pr-4">
            {photos.concat(photos).map((photo, index) => (
              <div 
                key={`p1-${index}`}
                className="flex-none w-[220px] sm:w-[320px] h-[140px] sm:h-[200px] rounded-2xl overflow-hidden border-2 border-amber-200/40 shadow-xl transition-all duration-300 active:scale-95 active:border-amber-400 active:shadow-amber-500/20 active:opacity-90 cursor-pointer"
              >
                <img 
                  src={photo} 
                  alt={`Moment ${index + 1}`} 
                  className="w-full h-full object-cover active:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>

          <div className="flex min-w-full shrink-0 space-x-4 animate-marquee-loop pr-4">
            {photos.concat(photos).map((photo, index) => (
              <div 
                key={`p2-${index}`}
                className="flex-none w-[220px] sm:w-[320px] h-[140px] sm:h-[200px] rounded-2xl overflow-hidden border-2 border-amber-200/40 shadow-xl transition-all duration-300 active:scale-95 active:border-amber-400 active:shadow-amber-500/20 active:opacity-90 cursor-pointer"
              >
                <img 
                  src={photo} 
                  alt={`Moment Dup ${index + 1}`} 
                  className="w-full h-full object-cover active:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}