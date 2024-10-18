'use client'
import React, { useState, useEffect } from 'react';
import { Config } from '@/config/config'

const ExperienceItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2">
        <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 mr-2 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black text-sm">{children}</p>
    </li>
);

export default function WorkExperience() {
    const [experienceList, setExperienceList] = useState<{ company: string; position: string; startDate: string; endDate: string; description: string[] }[]>([])

    useEffect(() => {
        setExperienceList(Config.workExperience)
    }, [])

    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-base font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">工作经历</h2>
            <div className="space-y-4">
                {
                    experienceList.map((experience, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-base font-medium text-gray-900 print:text-black">{experience.company} - {experience.position}</h3>
                                <p className="text-xs text-gray-600 print:text-gray-700">{experience.startDate} - {experience.endDate}</p>
                            </div>
                            <ul className="space-y-1 print:space-y-1">
                                {experience.description.map((desc, index) => (
                                    <ExperienceItem key={index}>{desc}</ExperienceItem>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    )
}
