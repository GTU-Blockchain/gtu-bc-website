import Counter from './Counter';
import { useLanguage } from '../context/LanguageContext';

function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1c3f] via-[#0b1221] to-[#020617] relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-blue-300 font-semibold text-xs mb-3 uppercase tracking-wider inline-block px-3 py-1.5 bg-blue-500/10 rounded-full">
              {t('about.badge')}
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('about.title1')} <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">{t('about.title2')}</span> {t('about.title3')}
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            {t('about.description1')}
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            {t('about.description2')}
          </p>
        </div>

        {/* Unified 3-column Grid Layout - All cards equal width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Aktif Üye Stat */}
          <div className="flex flex-col justify-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] hover:bg-white/10 transition-colors">
            <Counter
              end={250}
              suffix="+"
              className="text-4xl font-extrabold bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1"
            />
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{t('about.activeMembers')}</div>
          </div>

          {/* Card 2 - Geliştirme */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">code_blocks</span>
              </div>
              <h4 className="text-lg font-bold text-white">{t('about.development')}</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t('about.developmentDesc')}</p>
          </div>

          {/* Card 3 - Eğitim & Bootcamp */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h4 className="text-lg font-bold text-white">{t('about.education')}</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t('about.educationDesc')}</p>
          </div>

          {/* Card 4 - Etkinlik Stat */}
          <div className="flex flex-col justify-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] hover:bg-white/10 transition-colors">
            <Counter
              end={30}
              suffix="+"
              className="text-4xl font-extrabold bg-gradient-to-br from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-1"
            />
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{t('about.events')}</div>
          </div>

          {/* Card 5 - Global Network */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h4 className="text-lg font-bold text-white">{t('about.globalNetwork')}</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t('about.globalNetworkDesc')}</p>
          </div>

          {/* Card 6 - İnovasyon */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </div>
              <h4 className="text-lg font-bold text-white">{t('about.innovation')}</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t('about.innovationDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
