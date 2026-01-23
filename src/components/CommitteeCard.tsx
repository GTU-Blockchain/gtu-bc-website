interface CommitteeCardProps {
    name: string;
    icon: string;
    description: string;
}

const CommitteeCard = ({ name, icon, description }: CommitteeCardProps) => {
    return (
        <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-colors group">
            <h5 className="text-lg font-bold text-navy-dark mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">{icon}</span>
                {name}
            </h5>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    );
};

export default CommitteeCard;