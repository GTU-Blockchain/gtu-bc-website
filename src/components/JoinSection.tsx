import { useLanguage } from '../context/LanguageContext';

const JoinSection = () => {
    const { t } = useLanguage();
    
    return (
        <section className="py-20 bg-navy-dark relative overflow-hidden" id="join">
            <div className="absolute inset-0 bg-primary/10" style={{ backgroundImage: "radial-gradient(#1d97aa 1px, transparent 1px)", backgroundSize: "30px 30px", opacity: 0.1 }}></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('join.title')}</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    {t('join.description')}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30" href="https://docs.google.com/forms/d/e/1FAIpQLScvIhcCToV7S2swZNWm-EH_LJDzz3sJYorfw_I7YX_e0Z8J2g/viewform">
                        <span className="material-symbols-outlined">edit_document</span>
                        {t('join.membershipForm')}
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold rounded-xl transition-all" href="https://docs.google.com/forms/d/e/1FAIpQLSf0opdPQy25gBtqYVTDknYzSRwLwaT0OokpnNJLD3QxxoUj3w/viewform?fbclid=PAdGRleAMpF0RleHRuA2FlbQIxMQABp6NaFc4HXXfwYhO10Yr4S0f-LGT_Q76jF8LXBZVcc6KROCuo1XywHeOY7Cs5_aem_r4X9sXEYD1QKzojHmjpSxA">
                        <span className="material-symbols-outlined">group_add</span>
                        {t('join.committeeForm')}
                    </a>
                    <a target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl" href="https://ig.me/m/gtublockchain">
                        <span className="material-symbols-outlined">send</span>
                        {t('join.contactUs')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
