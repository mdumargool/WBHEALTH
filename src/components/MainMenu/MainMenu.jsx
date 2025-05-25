import React from 'react';
import "./MainMenu.css";

const Table = () => {
    // Main menu items data
    const menuItems = [
        { name: "HOME", icon: "https://www.wbhealth.gov.in/images/m1.png" },
        { name: "ABOUT US", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "OUR VISION & MISSION", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "GOVERNANCE", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "SERVICE RULE", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "HEALTH STATISTICS", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "MEDICAL INSTITUTIONS", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "BLOOD BANK", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "DOWNLOADS", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "GOVERNMENT ORDER", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "HOSPITAL SECURITY", icon: "https://www.wbhealth.gov.in/images/m2.png" },
        { name: "RECRUITMENT", icon: "https://www.wbhealth.gov.in/images/m2.png" }
    ];

    // E-Governance menu items
    const eGovernanceItems = [
        "JANMA MRITYU",
        "TATHYA Noill",
        "ONLINE APPLICATION",
        "THROUGH SINGLE WINDOW PORTAL",
        "EXCHANGE",
        "ONLINE PCPNDT LICENSE",
        "CERTIFICATE FOR SPECIALLY ABLED PERSON",
        "WEST BENGAL CANCER CARE PORTAL",
        "ONLINE BLOOD BANK LICENSE",
        "STORE MANAGEMENT INFORMATION SYSTEM",
        "HOSPITAL MANAGEMENT INFORMATION SYSTEM",
        "URBAN INFRASTRUCTURE MONITORING",
        "ORGAN TRANSPLANT REGISTRATION",
        "DENGUE SURVEILLANCE SYSTEM",
        "HEALTH INFRASTRUCTURE DI AN"
    ];

    return (
        <div className="table-container">
            <table className="menu-table">
                <tbody>
                    {/* Main menu items */}
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
                    
                    {/* Spacer row before E-Governance */}
                    <tr className="spacer-row">
                        <td></td>
                    </tr>
                    
                    {/* E-Governance section header */}
                    <tr key="e-gov-header">
                        <td className="e-governance-header">
                            E-GOVERNANCE
                        </td>
                    </tr>
                    
                    {/* E-Governance items */}
                    {eGovernanceItems.map((item, index) => (
                        <tr key={`e-gov-${index}`}>
                            <td >
                                <a href="#" className="e-governance-link">
                                    {item}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;