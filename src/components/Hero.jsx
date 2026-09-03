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
    <section id="home" className="relative w-full h-[calc(100vh-65px)] overflow-hidden flex flex-col justify-center items-center pb-8">
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
        <div className="w-full max-w-xl px-4 flex justify-center">
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
        <div className="w-full overflow-hidden flex">
          <div className="flex min-w-full shrink-0 space-x-4 animate-marquee-loop pr-4">
            {photos.concat(photos).map((photo, index) => (
              <div 
                key={`p1-${index}`}
                className="flex-none w-[220px] sm:w-[320px] h-[140px] sm:h-[200px] rounded-2xl overflow-hidden border-2 border-amber-200/40 shadow-xl"
              >
                <img 
                  src={photo} 
                  alt={`Moment ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>

          <div className="flex min-w-full shrink-0 space-x-4 animate-marquee-loop pr-4">
            {photos.concat(photos).map((photo, index) => (
              <div 
                key={`p2-${index}`}
                className="flex-none w-[220px] sm:w-[320px] h-[140px] sm:h-[200px] rounded-2xl overflow-hidden border-2 border-amber-200/40 shadow-xl"
              >
                <img 
                  src={photo} 
                  alt={`Moment Dup ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}