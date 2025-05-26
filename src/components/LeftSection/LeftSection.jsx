import React from 'react';
import "./LeftSection.css";

const Table = () => {
    const menuItems = [
        { name: "NOTICE", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "TENDERS", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "ARCHIVE", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "RECRUITMENT", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "WORK ZONE", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "RIGHT TO INFORMATION", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "LINKS", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "EODB", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "GOVERNMENT ORDER", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "HOSPITAL SECURITY", icon: "https://www.wbhealth.gov.in/images/m2.png" }
    ];

    const eGovernanceItems = [
        "JANMA MRITYU TATHYA IW8V",
        "ONLINE APPLICATION THROUGH SINGLE WINDOW PORTAL",
        "EXCHANGE",
        "ONLINE PCPNDT LICENSE",
        "CERTIFICATE FOR SPECIALLY ABLED PERSON",
        "WEST RENGAI"
    ];

    return (
        <div className="main-container">
            {/* Main Menu Section */}
            <div className="menu-container">
                <table className="menu-table">
                    <tbody>
                        {menuItems.map((item, index) => (
                            <tr key={`main-${index}`}>
                                <td>
                                    <a href="#" className="menu-link">
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="menu-icon"
                                        />
                                        {item.name}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* E-Governance Section */}
            <div className="e-governance-section">
                <div className="e-gov-box">
                    <div className="e-governance-header">E-GOVERNANCE :</div>
                    <div className="e-gov-scroll">
                        {eGovernanceItems.map((item, index) => (
                            <a href="#" key={`e-gov-${index}`} className="e-governance-link">
                                ○ {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;