import React from 'react';

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold print:border print:border-gray-300 print:text-black ${className}`}>
            {children}
        </span>
    );
}

export default function SkillsAndCertificates() {
    const skills = [
        { name: "Python", color: "bg-blue-500 print:bg-white" },
        { name: "Flask", color: "bg-gray-700 print:bg-white" },
        { name: "Pandas", color: "bg-purple-500 print:bg-white" },
        { name: "PyTorch", color: "bg-orange-500 print:bg-white" },
        { name: "JavaScript", color: "bg-yellow-500 print:bg-white" },
        { name: "TypeScript", color: "bg-blue-600 print:bg-white" },
        { name: "React", color: "bg-cyan-500 print:bg-white" },
        { name: "Tailwind CSS", color: "bg-teal-500 print:bg-white" },
        { name: "Next.js", color: "bg-black print:bg-white" },
        { name: "Node.js", color: "bg-green-600 print:bg-white" },
        { name: "Traefik", color: "bg-indigo-500 print:bg-white" },
        { name: "Portainer", color: "bg-blue-400 print:bg-white" },
        { name: "Docker", color: "bg-blue-700 print:bg-white" },
        { name: "Google Services", color: "bg-red-500 print:bg-white" },
    ];

    return (
        <div className="space-y-6 print:space-y-4">
            <div className="p-4 print:p-4">
                <h3 className="text-lg font-medium text-gray-800 print:text-black mb-4 print:mb-3">技术栈</h3>
                <div className="flex flex-wrap gap-2 print:gap-1.5">
                    {skills.map((skill) => (
                        <Badge key={skill.name} className={`${skill.color} text-white print:text-black`}>
                            {skill.name}
                        </Badge>
                    ))}
                </div>
                <div className="flex items-center space-x-2 mt-4 print:mt-3">
                    <svg className="w-5 h-5 text-green-500 print:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 print:text-black">英语六级证书 - 能够熟练阅读专业文档</span>
                </div>
            </div>
        </div>
    )
}
