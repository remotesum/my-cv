import React from 'react';

const ProjectItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-3">
        <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black">{children}</p>
    </li>
);

export default function ProjectExperience() {
    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-2xl font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">项目经历</h2>
            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">Saas平台功能开发-后端开发</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2023.10 - 至今</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：面向内部员工的STEAM平台和面向用户的GRIP平台的功能开发，帮助员工更方便地为客户提供咨询服务。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>STEAM 可视化配置模块功能，证书申请文件管理模块等开发</ProjectItem>
                        <ProjectItem>GRIP 产品简报功能模块，产品魔方中国NMPA数据展示模块，不良事件数据展示模块开发</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">AIGC 自动生成说明书 - 项目负责人</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2023.03 - 2023.10</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：传统产品说明书定稿一般需要 2-3 个月，本项目为制造商提供符合标准的产品说明书，大大缩短说明书的撰写周期，加快产品注册流程。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>国家标准内容要点拆解，制定拆解规范的标准流程</ProjectItem>
                        <ProjectItem>医疗器械产品分类管理，不同章节的提示词管理与配置</ProjectItem>
                        <ProjectItem>生成产品说明书章节的质量控制、评估与优化调整</ProjectItem>
                        <ProjectItem>自动化配置提示词，与说明书质量检测报告输出</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">AIGC 完全自动数据分析可视化 - 个人项目</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2023.05 - 2023.07</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：通过 GPT 实现自动数据分析，数据挖掘与数据可视化全流程，完全解放数据分析可视化的工作流程，加快数据的分析速度以及挖掘更多的数据价值维度。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>项目架构方案设计，全自动数据分析流程方案设计</ProjectItem>
                        <ProjectItem>数据可视化方案调研与定稿，并最终选用streamlit和pyecharts的可视化方案</ProjectItem>
                        <ProjectItem>完整自动化数据分析可视化流程的代码实现，通过 GPT 完全自动化生成图表数据以及图表描述信息</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">AI 翻译软件 - 项目负责人</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2023.02 - 2023.04</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：基于 GPT 大语言模型强大的翻译能力和学习能力，为GPT提供最新、最准确、和最专业的术语和记忆库参考资料，通过 RAG 检索增强生成，弥补GPT训练数据的缺失，提高模型翻译的精准度。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>翻译软件技术方案设计，翻译文本的实体提取与知识库向量检索</ProjectItem>
                        <ProjectItem>术语库和记忆库的数据收集、数据处理与数据入库，作为翻译参考的重要知识库数据</ProjectItem>
                        <ProjectItem>完整翻译流程代码的编写，包括文本切分，实体提取，向量检索与GPT 返回结果的标准化处理</ProjectItem>
                        <ProjectItem>规范化 GPT 返回的结果处理流程，合理管理提示词上下文，实现GPT 能够翻译超长文本</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">全球法规雷达 - 项目负责人</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2022.03 - 2023.02</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：本项目在医疗器械生命周期中属于第一个时期，它为制造商的产品出海提供最新法规指南与政策，一站式获取医疗注册的准入流程和对应的最新最权威的全球法规信息，让制造商有的放矢，精准注册。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>成立法规资讯项目，进行整个项目的产品方案与技术方案的设计与评审</ProjectItem>
                        <ProjectItem>全球法规官方资讯信息收集汇总，数据采集与评估分类，目前上线 35+国家地区法规资讯，100+国家地区相关法规完整文件</ProjectItem>
                        <ProjectItem>不同网页的样式归一化数据结构设计，后端接口编写并与前端进行联调上线</ProjectItem>
                        <ProjectItem>编写数据采集模板代码，规范标准化数据采集工作，极大加速数据采集进程</ProjectItem>
                        <ProjectItem>设计法规资讯标签提取，主题分类与相关文章搜索推荐方案</ProjectItem>
                        <ProjectItem>使用GPT大语言模型对法规资讯进行实体提取，概要信息总结</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">全球经销商医械市场监控 - 数据负责人</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2021.10 - 2022.03</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：本项目为医械制造企业产品上市的重要工具，帮助制造商企业发现全球各大相关产品经销商信息，助力制造商企业完成出海的「最后一公里」，让中国产品快速走向世界。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>信源调研与数据评估，覆盖 40+国家总数，数据量超 60W</ProjectItem>
                        <ProjectItem>数据采集，清洗处理与数据校验</ProjectItem>
                        <ProjectItem>数据补充，增加各国黄页信息或官方登记信息，收集bing搜索引擎信息</ProjectItem>
                        <ProjectItem>数据相似度匹配以对齐基础数据与补充数据，增加数据维度，为客户提供更有价值的数据产品</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">网络通信内容智能异常检测</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2021.02 - 2021.09</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：传统通信内容的异常检测和分析通常基于固定规则或特征值匹配，无法检测出精心伪造的高级攻击行为。对于流量巨大的业务而言，伪造的攻击流量通常被大量正常业务流量淹没，导致攻击行为不被传统检测方法发现。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>了解数据的业务说明，异常检测算法调研，根据数据的特点评估算法适用性</ProjectItem>
                        <ProjectItem>数据清洗处理、特征工程、定义畸形数据与构建AutoEncoder深度学习异常检测算法模型基线</ProjectItem>
                        <ProjectItem>根据基线模型的表现，尝试构建更优的算法模型如离群因子检测算法LOF，提高检测效率与检测结果的可解释性</ProjectItem>
                        <ProjectItem>测试环境算法模型部署与联调，模型优化，输出算法检测结果，汇报工作进展与解释检测结果含义</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">告警信息关联规则挖掘</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2020.11 - 2021.02</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：为解决数据孤岛问题充分挖掘数据价值，本项目在数据挖掘过程中将系统告警信息通过攻击链路验证、行为模式等关联规则分析方法进行关联性数据挖掘。目的是要从大量告警序列中，挖掘告警事件前后关联性，用于预测告警事件的发展趋势。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>业务数据探索性分析，算法方案预研，基于不同角度对告警数据进行关联分析</ProjectItem>
                        <ProjectItem>数据清洗处理、特征工程与FP-growth/Prefixspan关联规则算法模型搭建</ProjectItem>
                        <ProjectItem>数据库储存表结构设计，对接ES与MongoDB数据库进行数据的抽取与储存</ProjectItem>
                        <ProjectItem>测试环境算法模型部署与联调，协调各组对接前端进行调试结果展示</ProjectItem>
                        <ProjectItem>输出数据挖掘成果，定期汇报工作进展</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">异常通信关系智能识别</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2020.08 - 2020.11</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：针对海量的主机间通信信息，通过人工难以从中准确、快速地识别出异常通信行为，采用机器学习算法对通信行为进行学习，基于通信对数据构建通信对异常识别模型，实现通信对异常行为智能识别的功能，并及时输出异常告警信息。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>数据特征提取，定义主机IP距离度量，增加网段的敏感性</ProjectItem>
                        <ProjectItem>基于IP距离数据构建高斯混合模型(GMM)，确立异常通信的决策边界，为非基线通信关系判定提供支撑</ProjectItem>
                        <ProjectItem>根据基线规则建立基线通信对白名单库，过滤可疑通信行为</ProjectItem>
                        <ProjectItem>告警信息生成与合并，对接前端告警总表展示</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">项目可行性分析</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2019.09 - 2020.05</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">使用工具：Pandas/sklearn/seaborn/Tableau等</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>获取产品相关的基本数据，对有关数据进行统计分析，直观了解项目过往经营状况，以判断产品价值和确定产品设计方案</ProjectItem>
                        <ProjectItem>产品分析：分析产品价值，判断产品的可行性</ProjectItem>
                        <ProjectItem>销售分析：直观了解销售策略和成果</ProjectItem>
                        <ProjectItem>利润分析：分析项目成本及营收，了解产品的利润空间</ProjectItem>
                        <ProjectItem>预测分析：通过pandas、seaborn和机器学习，对募资校区进行可视化分析和收益预测，合理指导产品设计方案，防止产品募资失败</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">基金量化数据项目</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2019.04 - 2019.07</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：该项目主要为公司搭建市场分析工具平台提供数据，方便投资经理进行市场研究和基金分析，主要数据有二级市场数据，上市公司财报数据等。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>负责二级市场交易数据的获取和整理，获取并整理上市公司财报数据，提取关键字段，并保存到数据库中</ProjectItem>
                        <ProjectItem>计算量化交易技术指标，对接前端数据看板，与投资经理交流讨论其他有效的市场策略，进行策略研究开发</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">投资标的竞品分析</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2019.03 - 2019.05</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">使用工具：Python/Maplab/Excel/Tableau等</p>
                    <p className="text-gray-700 print:text-black mb-2">项目背景：随着投资资金的扩大，要求批量分析广州市内各地段价值，竞争强度，判断选址的合理性。</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>基于高德地图开放平台获取广州市内竞品基本信息，使用Maplab平台对数据进行可视化展示</ProjectItem>
                        <ProjectItem>Excel整理相关数据，手动获取并补充重要缺失数据，分析竞品与项目之间的差异，进行可视化展示</ProjectItem>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-medium text-gray-900 print:text-black">基金产品推广效果分析</h3>
                        <p className="text-sm text-gray-600 print:text-gray-700">2018.10 - 2019.01</p>
                    </div>
                    <p className="text-gray-700 print:text-black mb-2">使用工具：Pandas/Excel/Tableau等</p>
                    <p className="text-gray-700 print:text-black font-medium mb-2">职责描述：</p>
                    <ul className="space-y-2 print:space-y-1">
                        <ProjectItem>监控异常数据，统计分析主要指标辅助公司决策</ProjectItem>
                        <ProjectItem>分析主要指标：推广渠道筛选指标，网站访问与注册等各项指标以及指标体系的构建</ProjectItem>
                        <ProjectItem>运用RFM模型对用户进行分箱，为不同价值人群打上标签，进行价值分类，方便运营人员维护管理</ProjectItem>
                        <ProjectItem>围绕网站网页指标分析，浏览分析，退出分析，消费分析等多个方面进行深入分析</ProjectItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}
