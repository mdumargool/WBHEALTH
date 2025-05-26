import React, { useState } from 'react';
import './MidSection.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const MidSection = () => {
    const [activeTab, setActiveTab] = useState('NOTICE');
    
    const notices = [
        "Appointed to the post of Clinical Instructor, through lateral induction under WBGS(Nursing), i.r.o. Smit. Debika Banerjee",
        "AAAFS order from Medical Services Branch",
        "Another AAAFS order from Medical Services Branch",
        "Updated Transfer order of faculties under WBGS(Nursing)",
        "Recruitment notice for medical staff 2025",
        "Important health safety guidelines released",
    ];

    const noticeItems = [
        "23. 24/01/2008",
        "24. 23/01/2008",
        "25. 22/01/2008",
        "26. 21/01/2008",
        "27. 20/01/2008",
        "28. 19/01/2008"
    ];

    const pressReleaseItems = [
        "One days TOI Training Programme on 'Nursing Management of Dengue, Malaria, AES-JE & Scrub Typhus' for Nursing Officers of different Govt. Institutions",
        "Promotion order of HA(F) to the post of HS(F)",
        "NOC for appearing at RRB Exam i.r.o Staff Nurse, Gr-II, attached different health facility under Purulia District",
        "Corrigendum order of Date of awarding 24 yrs MCAS benefit vide order no. HF-O-HS(MA)-1497-HPT-32M-138-2024 DT-24-12-2024",
        "Notice regarding General Meeting for DPC of Ayush Branch",
        "One days TOI Training Programme on 'Nursing Management of Dengue, Malaria, AES-JE & Scrub Typhus' for Nursing Officers of different Govt. Institutions",
        "Promotion order of HA(F) to the post of HS(F)",
        "NOC for appearing at RRB Exam i.r.o Staff Nurse, Gr-II, attached different health facility under Purulia District",
        "Corrigendum order of Date of awarding 24 yrs MCAS benefit vide order no. HF-O-HS(MA)-1497-HPT-32M-138-2024 DT-24-12-2024",
        "Notice regarding General Meeting for DPC of Ayush Branch"
    ];

    const govtOrderItems = [
        "Provisional List of patients for Organ Transplantation",
        "Invitation of Research Proposals on Public Health, Modern Medicine and allied subjects",
        "Intimation regarding slow moving & short expiry of medicines at Howrah DH",
        "Cancellation of E-Tender of CMOH, Birbhum vide memo no.CMOH/BIR/1808, dated 11.04.2025 (1(one) skilled outsourced Analyst for food safety on wheel)",
        "Sample verification notice of Respiratory Medicine for R-G-Kar Medical"
    ];

    const tenderItems = [
        "Notice Inviting Re-E-Tender for Purchase & Installation of Hospital Equipments/ Instruments (Disposal Cuvetts for Bio-Chemistry Department) by MSVP, Calcutta National Medical College & Hospital",
        "Notice Inviting Re-E-Tender for Purchase & Installation of Hospital Equipments/ Instruments (Urology Accessories) by MSVP, Calcutta National Medical College & Hospital",
        "Notice Inviting Re-E-Tender for Purchase & Installation of Hospital Equipments/ Instruments (Ortho Implants) by MSVP, Calcutta National Medical College & Hospital",
        "Notice Inviting Re-E-Tender for Procurement of Feeding Powder in Terms"
    ];

    const renderItems = () => {
        switch(activeTab) {
            case 'NOTICE':
                return noticeItems.map((item, index) => (
                    <div key={index} className="notice-board-item">
                        {item}
                    </div>
                ));
            case 'PRESS RELEASES':
                return pressReleaseItems.map((item, index) => (
                    <div key={index} className="notice-board-item">
                        {item}
                    </div>
                ));
            case 'GOVERNMENT ORDER':
                return govtOrderItems.map((item, index) => (
                    <div key={index} className="notice-board-item">
                        {item}
                    </div>
                ));
            case 'TENDERS':
                return tenderItems.map((item, index) => (
                    <div key={index} className="notice-board-item">
                        {item}
                    </div>
                ));
            default:
                return null;
        }
    };

    return (
        <div className='whatsapp'>
            {/* Image Slider */}
            <ImageSlider/>
            <div className="whats-new-container">
                <div className='title'>
                    <h2 className="section-title">WHAT'S NEW</h2>
                </div>
                <div className="notice-board">
                    <div className="notice-wrapper">
                        {notices.map((notice, index) => (
                            <div key={index} className="notice-item">
                                {notice}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* New Notice Board Section */}
            <div className="notice-board-section">
                <div className="notice-board-header">
                    <div className="notice-board-categories">
                        {['NOTICE', 'PRESS RELEASES', 'GOVERNMENT ORDER', 'TENDERS'].map((tab) => (
                            <span 
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="notice-board-items">
                    {renderItems()}
                </div>
            </div>
        </div>
    );
};

export default MidSection;