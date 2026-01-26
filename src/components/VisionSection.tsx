import Spline from '@splinetool/react-spline';

function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-black" id="vision" style={{ minHeight: '100vh', width: '100%' }}>
      {/* Spline 3D Background - Full Screen */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Spline
          scene="https://prod.spline.design/JtPu9QGOmhDBRBdE/scene.splinecode"
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        />
      </div>

      {/* Content Overlay - Minimal Styling */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 flex flex-col justify-start items-center" style={{ minHeight: '100vh', pointerEvents: 'none' }}>
        {/* Header */}
        <div className="flex flex-col items-center text-center w-full">
          <div className="mb-6">
            <span className="text-[#C8D8E8] font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-[#C8D8E8]/30" style={{ pointerEvents: 'none' }}>
              Vizyonumuz
            </span>
          </div>
          <div className="relative inline-block max-w-4xl mx-auto px-4">
            <div className="absolute inset-0 bg-black/40 blur-xl rounded-full -z-10 transform scale-150"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight relative z-10">
              <span className="bg-gradient-to-r from-[#A8B8C8] via-[#E8ECF0] to-[#A8B8C8] bg-clip-text text-transparent">
                Blokzincir Ekosisteminde
              </span>
              <br />
              <span className="text-white drop-shadow-lg">Küresel Bir Oyuncu Olmak</span>
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium relative z-10">
              GTU Blockchain olarak vizyonumuz, Türkiye'deki blokzincir farkındalığını artırmak ve geliştirdiğimiz projelerle uluslararası arenada ülkemizi temsil eden lider bir inovasyon merkezi haline gelmektir.
            </p>
          </div>
        </div>

        {/* Cards Grid - Spaced Out */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mt-auto mb-[74px]">
          {/* Card 1 - Global Entegrasyon */}
          <div className="flex flex-col h-full px-5 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-[#C8D8E8]/20 hover:border-[#C8D8E8]/40 transition-all duration-300" style={{ pointerEvents: 'none' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#8BA7C0]/20 to-[#8BA7C0]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <span className="material-symbols-outlined text-3xl text-[#C8D8E8]">public</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Global Entegrasyon</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Dünyanın önde gelen blokzincir vakıfları ve DAO'lar ile partnerlikler kurarak öğrencilerimize global fırsatlar sunmak.
            </p>
          </div>

          {/* Card 2 - Sürdürülebilir İnovasyon */}
          <div className="flex flex-col h-full px-5 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-[#C8D8E8]/20 hover:border-[#C8D8E8]/40 transition-all duration-300" style={{ pointerEvents: 'none' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#8BA7C0]/20 to-[#8BA7C0]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <span className="material-symbols-outlined text-3xl text-[#C8D8E8]">lightbulb</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sürdürülebilir İnovasyon</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Sadece trendleri takip eden değil, trendleri belirleyen Ar-Ge projeleri üretmek ve teknolojiye yön vermek.
            </p>
          </div>

          {/* Card 3 - Kapsayıcı Topluluk */}
          <div className="flex flex-col h-full px-5 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-[#98A8B8]/20 hover:border-[#98A8B8]/40 transition-all duration-300" style={{ pointerEvents: 'none' }}>
            <div className="w-14 h-14 bg-gradient-to-br from-[#8BA7C0]/20 to-[#C8D8E8]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
              <span className="material-symbols-outlined text-3xl text-[#C8D8E8]">diversity_3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Kapsayıcı Topluluk</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Teknik olmayan disiplinlerden öğrencileri de ekosisteme dahil ederek multidisipliner çalışma kültürü oluşturmak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
