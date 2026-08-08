// atributy objektu
type AboutPopUpProps = {
    isOpen: boolean;
    onClose: () => void;
};

const experienceItems = [
    {
        company: "Emplifi",
        duration: "26´ - now",
        role: "Software Engineer Intern",
    },
    {
        company: "Korn Ferry",
        duration: "25´ - 26´",
        role: "Data Analyst Registrar",
    },
    {
        company: "Korn Ferry",
        duration: "24´ - 25´",
        role: "Data Analyst Intern",
    },
    {
        company: "Stock Plzeň",
        duration: "23´ - 23´",
        role: "IT Administrator",
    },
    {
        company: "Kominictví Nácovský",
        duration: "20´ - 24´",
        role: "IT Specialist",
    },
];

export function AboutPopUp({ isOpen, onClose }: AboutPopUpProps) {
  if (!isOpen) return null;

  return (
    <div className="about-popup-overlay" onClick={onClose}>
        <div className="about-popup" onClick={(e) => e.stopPropagation()}>
            <h2>Jáchym Nácovský</h2>
            <p className="about-popup-text">
                Jsem softwarový inženýr, kterému záleží na UI/UX. Ve volném čase jsem amatérský MMA zápasník.
            </p>
            <div className="about-popup-experience">
                <ul>
                    {experienceItems.map((item, index) => (
                    <li key={index} className="about-popup-experience-item">
                    <span className="about-popup-experience-duration">{item.duration}</span>
                    <span className="about-popup-experience-company">{item.company}</span>
                    <span className="about-popup-experience-role">{item.role}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}