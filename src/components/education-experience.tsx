import React from 'react';

export default function EducationExperience() {
    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-2xl font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">教育经历</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">云南农业大学</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2014.09 - 2018.06</p>
                    </div>
                    <p className="text-gray-700 print:text-black">本科</p>
                </div>
            </div>
        </div>
    )
}
