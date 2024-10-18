'use client'
import React, { useState } from 'react';
import { Config } from '@/config/config'

const SkillItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-3">
        <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black">{children}</p>
    </li>
);

export default function SkillIntroduction() {
    const [skillList, setSkillList] = useState(Config.skillIntroduction)

    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-base font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">专业技能</h2>
            <ul className="space-y-2 print:space-y-1 text-sm">
                {skillList.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                ))}
            </ul>
        </div>
    )
}
