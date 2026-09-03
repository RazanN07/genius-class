import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Daftar 18 Foto Kelas
  const photos = [
    { id: 1, src: "/kls1.jpeg",  },
    { id: 2, src: "/kls2.jpeg",  },
    { id: 3, src: "/kls3.jpeg",  },
    { id: 4, src: "/kls4.jpeg",  },
    { id: 5, src: "/kls5.jpeg",  },
    { id: 6, src: "/kls6.jpeg",  },
    { id: 7, src: "/kls7.jpeg",  },
    { id: 8, src: "/kls8.jpeg",  },
    { id: 9, src: "/kls9.jpeg",  },
    { id: 10, src: "/kls10.jpeg",  },
    { id: 11, src: "/kls11.jpeg",  },
    { id: 12, src: "/kls12.jpeg",  },
    { id: 13, src: "/kls13.jpeg",  },
    { id: 14, src: "/kls14.jpeg",  },
    { id: 15, src: "/kls15.jpeg",  },
    { id: 16, src: "/kls16.jpeg",  },
    { id: 17, src: "/kls17.jpeg",  },
    { id: 18, src: "/kls18.jpeg",  },
  ];

  // Menampilkan 4 foto pertama jika belum diklik, atau seluruh foto jika tombol diklik
  const displayedPhotos = showAll ? photos : photos.slice(0, 4);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-stone-800">
      
      {/* Glow Latar Belakang */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Galeri <span className="text-amber-500">Genius Class</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full shadow-lg shadow-amber-500/50" />
        </div>

        {/* Grid Foto Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo.src)}
              className="group relative h-64 rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer transition-all duration-500 hover:border-amber-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua / Sembunyikan Foto */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 bg-stone-900 border border-stone-700 hover:border-amber-500/60 text-amber-400 hover:text-amber-300 font-semibold rounded-xl shadow-lg hover:shadow-amber-500/10 transition-all duration-300 active:scale-95"
          >
            {showAll ? "Sembunyikan Foto" : `Lihat Semua Foto (${photos.length})`}
          </button>
        </div>

      </div>

      {/* Pop-up Modal Lightbox Saat Foto Diklik */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-stone-400 hover:text-white text-3xl font-bold transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Preview foto"
              className="max-w-full max-h-[85vh] rounded-2xl border border-stone-800 object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}