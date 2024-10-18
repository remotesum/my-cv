import React from 'react';

const ExperienceItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-2">
        <span className="flex-shrink-0 w-1.5 h-1.5 mt-1.5 mr-2 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black text-sm">{children}</p>
    </li>
);

export default function WorkExperience() {
    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-base font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">工作经历</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-medium text-gray-900 print:text-black">普瑞纯证医疗科技（广州）有限公司-数据分析师 IT部</h3>
                        <p className="text-xs text-gray-600 print:text-gray-700">2021.10 - 至今</p>
                    </div>
                    <ul className="space-y-1 print:space-y-1">
                        <ExperienceItem>拥有多次从 0 到 1 的项目经验，领导团队成功完成项目全周期，涵盖规划、需求分析、技术选型、开发、测试和交付。通过协调沟通，确保团队高效运作，最终实现高质量项目交付。</ExperienceItem>
                        <ExperienceItem>根据数据项目或客户需求，调研数据源并爬取采集相应数据，清洗、整理、标准化为可用数据并入库；深挖数据特点，关联关系与原因分析，为客户完成合格的数据报告。</ExperienceItem>
                        <ExperienceItem>承担负责产品项目的后期维护工作，确保产品持续正常运行，为客户提供高价值数据服务。</ExperienceItem>
                        <ExperienceItem>广泛运用多种AI工具，包括AIGC内容生成、实体提取、优化项目任务处理流程，全面提升项目执行效率。</ExperienceItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-medium text-gray-900 print:text-black">鲤想科技有限公司 - 数据挖掘工程师 IT部</h3>
                        <p className="text-xs text-gray-600 print:text-gray-700">2020.08 - 2021.10</p>
                    </div>
                    <ul className="space-y-1 print:space-y-1">
                        <ExperienceItem>深入调研算法，根据业务需求评估其适用性，精选最合适的算法进行数据挖掘。</ExperienceItem>
                        <ExperienceItem>结合具体业务，对获得的数据进行细致清洗、挖掘与分析，建立模型基线。</ExperienceItem>
                        <ExperienceItem>构建算法模型处理系统业务数据，及时发现关联或异常行为并输出相关提示信息。</ExperienceItem>
                        <ExperienceItem>输出详实数据分析报告，剖析数据的业务解释性，通过可视化展示正负样本数据差异，为业务优化提供有力的数据支持。</ExperienceItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-medium text-gray-900 print:text-black">广州零壹沃土互联网金融信息服务有限公司 - 数据分析师 产品部</h3>
                        <p className="text-xs text-gray-600 print:text-gray-700">2018.08 - 2020.07</p>
                    </div>
                    <ul className="space-y-1 print:space-y-1">
                        <ExperienceItem>运用专业工具对数据进行采集、清洗和过滤处理。</ExperienceItem>
                        <ExperienceItem>结合业务特点，构建分析主题，进行深度数据分析和挖掘。</ExperienceItem>
                        <ExperienceItem>搭建数据产品，完善产品的数据体系，实现可视化展示。</ExperienceItem>
                        <ExperienceItem>制定用户分类和产品评估模型，为公司决策提供可靠的数据支持。</ExperienceItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
