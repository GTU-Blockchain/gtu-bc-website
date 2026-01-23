import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

interface TeamMemberCardProps {
    name: string;
    position: string;
    image: string;
    social: {
        linkedin?: string;
        email?: string;
    };
}

const TeamMemberCard = ({ name, position, image, social }: TeamMemberCardProps) => {
    return (
        <div className="group relative w-72">
            <div className="relative bg-white rounded-2xl p-4 border border-gray-100 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 overflow-hidden h-full">

                {/* Block Icon Animation */}
                <div className="absolute top-4 right-4 z-20 overflow-visible pointer-events-none">
                    <div className="opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-center">
                        <span className="material-symbols-outlined text-3xl text-primary drop-shadow-sm">
                            deployed_code
                        </span>
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden mb-5 bg-navy-dark z-10">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                        role="img"
                        aria-label={`Portrait of ${name}`}
                    ></div>

                    {/* Social Icons Overlay - Blue Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-end justify-center pb-4 gap-3">
                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all transform hover:scale-110"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                        )}
                        {social.email && (
                            <a
                                href={`mailto:${social.email}`}
                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all transform hover:scale-110"
                            >
                                <MdOutlineMailOutline className="text-xl" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Info Section */}
                <div className="text-start relative z-10">
                    <h5 className="text-xl font-bold text-navy-dark group-hover:text-primary transition-colors duration-300">{name}</h5>
                    <p className="text-primary font-medium text-sm mt-1 mb-2">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;
