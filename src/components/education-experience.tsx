import React from 'react';

export default function EducationExperience() {
    return (
        <div className="bg-white print:bg-white rounded-lg p-4 print:p-2">
            <h2 className="text-base font-bold text-gray-800 print:text-black mb-2 border-b pb-1 print:border-b-black">教育经历</h2>
            <div className="space-y-2">
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex flex-row items-center space-x-4">
                            <h3 className="text-base font-medium text-gray-900 print:text-black">云南农业大学</h3>
                            <p className="text-sm text-gray-700 print:text-black">本科</p>
                        </div>
                        <p className="text-xs text-gray-600 print:text-gray-700">2014.09 - 2018.06</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
