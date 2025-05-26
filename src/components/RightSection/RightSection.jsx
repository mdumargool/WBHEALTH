import React from 'react';
import './RightSection.css';

const RightSection = () => {
    const sections = [
        { name: "Plan of Action", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "OPD Attendance", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "MNC Registration", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "Immunization Schedule", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "Emergency Services", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "Health Schemes", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "Drug Alerts", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "CENTRAL MEDICAL STORE", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "State FMG", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "SKMIS", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "AIDS", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "NCD", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
        { name: "PCPNDT Portal", icon: "https://www.wbhealth.gov.in/images/bullets_orange.gif" },
    ];
    return (
        <div className="right-section">
            {/* Chief Minister Photo */}
            <div className='nav'>
                <img
                    src="https://www.wbhealth.gov.in/uploaded_images/M1.jpg"
                    alt="Minister"
                    className="img-fluid mb-3"
                    style={{ border: "1px solid #ccc", borderRadius: "5px" }}
                />
                <div className='cm-name'>
                    <p><strong>Mamata Banerjee</strong></p>
                    <p>Chief Minister &</p>
                    <p>Minister Incharge</p>
                </div>

            </div>
            {/* Section List */}
            <table className="right-menu">
                <tbody>
                    {sections.map((title, index) => (
                        <tr key={index}>
                            <td>
                                <a href="#" key={index} className='menu-link'>
                                    <img
                                        src={title.icon}
                                        alt={title.name}
                                        className="menu-icon"
                                    />
                                    {title.name}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RightSection;
