function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#012A4D] via-[#002F5D] to-[#1A3576] relative overflow-hidden" id="vision">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#1D99AB]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#B7FFFF]/5 rounded-full blur-3xl"></div>

      {/* CSS Animations */}
      <style>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(183, 255, 255, 0.3), 0 0 40px rgba(29, 153, 171, 0.2); }
          50% { box-shadow: 0 0 40px rgba(183, 255, 255, 0.5), 0 0 80px rgba(29, 153, 171, 0.4); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-dot {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-[#B7FFFF] font-semibold text-xs mb-3 uppercase tracking-wider inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Vizyonumuz
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Blokzincir Ekosisteminde</span> <span className="bg-gradient-to-r from-[#B7FFFF] via-[#1D99AB] to-[#5835AB] bg-clip-text text-transparent">Küresel Bir Oyuncu Olmak</span>
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            GTU Blockchain olarak vizyonumuz, Türkiye'deki blokzincir farkındalığını artırmak ve geliştirdiğimiz projelerle uluslararası arenada ülkemizi temsil eden lider bir inovasyon merkezi haline gelmektir.
          </p>
        </div>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ minHeight: '600px' }}>
          {/* Network Connection Lines - SVG with Animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Animated Line to Left Card */}
            <line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="50%"
              stroke="url(#gradient1)"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
              style={{ animation: 'dash-flow 20s linear infinite' }}
            />
            {/* Animated Line to Top Right Card */}
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="20%"
              stroke="url(#gradient2)"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
              style={{ animation: 'dash-flow 20s linear infinite' }}
            />
            {/* Animated Line to Bottom Right Card */}
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="80%"
              stroke="url(#gradient3)"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.6"
              style={{ animation: 'dash-flow 20s linear infinite' }}
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#B7FFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1D99AB" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7FFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5835AB" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7FFFF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1D99AB" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Connection Point Dots */}
          <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#B7FFFF] rounded-full shadow-lg shadow-[#B7FFFF]/50" style={{ zIndex: 2, animation: 'float-dot 3s ease-in-out infinite' }}></div>
          <div className="absolute right-[20%] top-[20%] w-3 h-3 bg-[#B7FFFF] rounded-full shadow-lg shadow-[#B7FFFF]/50" style={{ zIndex: 2, animation: 'float-dot 3s ease-in-out infinite 1s' }}></div>
          <div className="absolute right-[20%] bottom-[20%] w-3 h-3 bg-[#B7FFFF] rounded-full shadow-lg shadow-[#B7FFFF]/50" style={{ zIndex: 2, animation: 'float-dot 3s ease-in-out infinite 2s' }}></div>

          {/* Decorative Rotating Rings Around Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border-2 border-[#B7FFFF]/10" style={{ zIndex: 1, animation: 'rotate-slow 30s linear infinite' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#1D99AB]/10" style={{ zIndex: 1, animation: 'rotate-slow 40s linear infinite reverse' }}></div>

          {/* Pulse Ring Behind Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-4 border-[#B7FFFF]/30" style={{ zIndex: 1, animation: 'pulse-ring 3s ease-in-out infinite' }}></div>

          {/* Central Circle with SVG Placeholder and Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#1D99AB] via-[#167a8a] to-[#1A3576] flex items-center justify-center" style={{ zIndex: 2, animation: 'pulse-glow 3s ease-in-out infinite' }}>
            {/* SVG Placeholder - Replace with your actual SVG */}
            <div className="w-32 h-32 text-white opacity-90">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="8" />
                <circle cx="50" cy="20" r="6" />
                <circle cx="80" cy="35" r="6" />
                <circle cx="80" cy="65" r="6" />
                <circle cx="50" cy="80" r="6" />
                <circle cx="20" cy="65" r="6" />
                <circle cx="20" cy="35" r="6" />
                <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="50" x2="80" y2="35" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="50" x2="80" y2="65" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="50" x2="20" y2="65" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="50" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Card 1 - Global Entegrasyon (Left) with Hover */}
          <div className="group absolute left-0 top-1/2 -translate-y-1/2 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-[#B7FFFF]/20 transition-all duration-300 hover:-translate-y-1/2 hover:translate-x-2 hover:shadow-2xl hover:shadow-[#1D99AB]/30" style={{ zIndex: 3 }}>
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1D99AB] to-[#167a8a] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">public</span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mt-2">Global Entegrasyon</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dünyanın önde gelen blokzincir vakıfları ve DAO'lar ile partnerlikler kurarak öğrencilerimize global fırsatlar sunmak.
            </p>
          </div>

          {/* Card 2 - Sürdürülebilir İnovasyon (Top Right) with Hover */}
          <div className="group absolute right-0 top-12 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-[#B7FFFF]/20 transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#5835AB]/30" style={{ zIndex: 3 }}>
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5835AB] to-[#1D99AB] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">lightbulb</span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mt-2">Sürdürülebilir İnovasyon</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sadece trendleri takip eden değil, trendleri belirleyen Ar-Ge projeleri üretmek ve teknolojiye yön vermek.
            </p>
          </div>

          {/* Card 3 - Kapsayıcı Topluluk (Bottom Right) with Hover */}
          <div className="group absolute right-0 bottom-12 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-[#B7FFFF]/20 transition-all duration-300 hover:-translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:shadow-[#1D99AB]/30" style={{ zIndex: 3 }}>
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1D99AB] to-[#B7FFFF] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">diversity_3</span>
              </div>
              <h4 className="text-xl font-bold text-navy-dark mt-2">Kapsayıcı Topluluk</h4>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Teknik olmayan disiplinlerden öğrencileri de ekosisteme dahil ederek multidisipliner çalışma kültürü oluşturmak.
            </p>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-20"></div>
      </div>
    </section>
  );
}

export default VisionSection;
