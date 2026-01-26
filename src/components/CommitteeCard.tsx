interface CommitteeCardProps {
    id: string;
    name: string;
    icon: string;
    description: string;
    features?: string[];
    isActive: boolean;
    onToggle: (id: string) => void;
}

/**
 * Committee Card Component
 * - Added Animated Effects
 */
const CommitteeCard = ({ id, name, icon, description, features, isActive, onToggle }: CommitteeCardProps) => {
    return (
        <div
            onMouseEnter={() => onToggle(id)}
            onClick={() => onToggle(id)}
            className={`
        relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
        ${isActive ? 'lg:flex-[3] bg-navy-dark shadow-2xl shadow-primary/20' : 'lg:flex-[1] bg-white border border-gray-200 hover:border-primary/50'}
      `}
        >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-primary opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : ''}`}></div>

            {/* Abstract Shapes */}
            <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-50'}`}></div>

            {/* Content Container */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">

                {/* Header Part */}
                <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white/10 text-primary backdrop-blur-md' : 'bg-blue-50 text-navy-dark'}`}>
                        <span className="material-symbols-outlined text-3xl">{icon}</span>
                    </div>

                    {/* Arrow Icon showing expansion state */}
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 lg:hidden
            ${isActive ? 'border-white/20 text-white rotate-90' : 'border-gray-200 text-gray-400'}
          `}>
                        <span className="material-symbols-outlined">arrow_forward_ios</span>
                    </div>
                </div>

                {/* Title & Short Description */}
                <div className="mt-auto">
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-navy-dark'}`}>
                        {name}
                    </h3>

                    {/* Expanded Content Wrapper */}
                    <div className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:opacity-100 lg:h-auto lg:block'}`}>
                        <div className="overflow-hidden">

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500 line-clamp-2 lg:line-clamp-none lg:hidden'}`}>
                                {description}
                            </p>

                            {/* Bullet Points */}
                            <div className={`space-y-3 ${isActive ? 'block' : 'hidden'}`}>
                                {features && features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 translate-x-0 transition-transform duration-500 delay-[100ms]" style={{ transitionDelay: `${idx * 100}ms` }}>
                                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(29,151,170,0.8)]"></span>
                                        <span className="text-sm font-medium text-gray-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommitteeCard;