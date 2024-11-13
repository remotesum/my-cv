export const Config = {
    personalInfo: {
        name: "热心网友",
        phone: "153xxxxxxxx",
        email: "xxxxxx@gmail.com",
        address: "广东广州",
        age: "18岁",
        job: "后端/数据挖掘/JS全栈",
        status: "待业"
    },
    skills: [
        { name: "Photoshop" },
        { name: "After Effects" },
        { name: "Premiere" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "Traefik" },
        { name: "Portainer" },
        { name: "Docker" },
        { name: "Google Services" },
    ],
    certificates: [
        { name: "英语六级证书 - 能够熟练阅读专业文档" },
    ],
    skillIntroduction: [
        '掌握Python编程语言，具备面向对象和函数式编程思维',
        '熟练使用requests/selenium/undetected_chromedriver等库进行数据爬取与解析',
        '熟悉数据分析库、机器学习库以及深度学习框架，如Pandas/Numpy/sklearn/Pytorch的使用',
        '熟练使用各种 AI 大语言模型，熟悉开源大模型的微调方法与流程，AIGC和 prompt 提示工程',
        '熟悉机器学习流程及常见算法模型，如KNN/Kmeans/DBSCAN/Apriori/FP-growth/LOF/孤立森林等算法',
        '熟悉深度学习，自然语言处理常见算法模型，如RNN/GPT/BART/同向量/Transformer/Ner等，了解轻量化模型、预训练模型和论文模型微调复现等',
        '熟悉Elasticsearch/Mysql等常用数据库，熟悉SQL和ES查询语法',
        '熟悉多种向量数据库的使用，如Qdrant, Pinecone, Milvus等'
    ],
    educationExperience: [
        {
            school: "清华大学",
            degree: "本科",
            startDate: "20xx.09",
            endDate: "20xx.06"
        }
    ],
    workExperience: [
        {
            company: 'xxxx有限公司',
            position: '数据挖掘工程师 IT部',
            startDate: '2020.08',
            endDate: '2021.10',
            description: [
                '深入调研算法，修改修改，精选最合适的算法进行数据挖掘。',
                '结合具体业务，对获得的数据进行细致清洗、挖掘与分析，建立模型基线。',
                '构建算法模型处理系统业务数据，及时发现关联或异常行为并输出相关提示信息。',
                '输出详实数据分析报告，剖析数据的业务解释性，通过可视化展示正负样本数据差异，为业务优化提供有力的数据支持。'
            ]
        }
    ],
    projectExperience: [
        {
            projectName: 'Saas平台功能开发-后端开发',
            projectStartTime: '2023.10',
            projectEndTime: '2024.05',
            projectDescription: '项目背景：面向内部员工的STEAM平台和面向用户的GRIP平台的功能开发，帮助员工更方便地为客户提供咨询服务。',
            projectResponsibility: [
                'STEAM 可视化配置模块功能，证书申请文件管理模块等开发',
                'GRIP 产品简报功能模块，产品魔方中国NMPA数据展示模块，不良事件数据展示模块开发'
            ]
        },
        {
            projectName: 'AIGC 自动生成说明书 - 项目负责人',
            projectStartTime: '2023.03',
            projectEndTime: '2023.10',
            projectDescription: '项目背景：传统产品说明书定稿一般需要 2-3 个月，本项目为制造商提供符合标准的产品说明书，大大缩短说明书的撰写周期，加快产品注册流程。',
            projectResponsibility: [
                '国家标准内容要点拆解，制定拆解规范的标准流程',
                '医疗器械产品分类管理，不同章节的提示词管理与配置',
                '生成产品说明书章节的质量控制、评估与优化调整',
                '自动化配置提示词，与说明书质量检测报告输出'
            ]
        },
        {
            projectName: 'AIGC 完全自动数据分析可视化 - 个人项目',
            projectStartTime: '2023.05',
            projectEndTime: '2023.07',
            projectDescription: '项目背景：通过 GPT 实现自动数据分析，数据挖掘与数据可视化全流程，完全解放数据分析可视化的工作流程，加快数据的分析速度以及挖掘更多的数据价值维度。',
            projectResponsibility: [
                '项目架构方案设计，全自动数据分析流程方案设计',
                '数据可视化方案调研与定稿，并最终选用streamlit和pyecharts的可视化方案',
                '完整自动化数据分析可视化流程的代码实现，通过 GPT 完全自动化生成图表数据以及图表描述信息'
            ]
        },
        {
            projectName: 'AI 翻译软件 - 项目负责人',
            projectStartTime: '2023.02',
            projectEndTime: '2023.04',
            projectDescription: '项目背景：基于 GPT 大语言模型强大的翻译能力和学习能力，为GPT提供最新、最准确、和最专业的术语和记忆库参考资料，通过 RAG 检索增强生成，弥补GPT训练数据的缺失，提高模型翻译的精准度。',
            projectResponsibility: [
                '翻译软件技术方案设计，翻译文本的实体提取与知识库向量检索',
                '术语库和记忆库的数据收集、数据处理与数据入库，作为翻译参考的重要知识库数据',
                '完整翻译流程代码的编写，包括文本切分，实体提取，向量检索与GPT 返回结果的标准化处理',
                '规范化 GPT 返回的结果处理流程，合理管理提示词上下文，实现GPT 能够翻译超长文本'
            ]
        },
        {
            projectName: '全球法规雷达 - 项目负责人',
            projectStartTime: '2022.03',
            projectEndTime: '2023.02',
            projectDescription: '项目背景：本项目在医疗器械生命周期中属于第一个时期，它为制造商的产品出海提供最新法规指南与政策，一站式获取医疗注册的准入流程和对应的最新最权威的全球法规信息，让制造商有的放矢，精准注册。',
            projectResponsibility: [
                '成立法规资讯项目，进行整个项目的产品方案与技术方案的设计与评审',
                '全球法规官方资讯信息收集汇总，数据采集与评估分类，目前上线 35+国家地区法规资讯，100+国家地区相关法规完整文件',
                '不同网页的样式归一化数据结构设计，后端接口编写并与前端进行联调上线',
                '编写数据采集模板代码，规范标准化数据采集工作，极大加速数据采集进程',
                '设计法规资讯标签提取，主题分类与相关文章搜索推荐方案',
                '使用GPT大语言模型对法规资讯进行实体提取，概要信息总结'
            ]
        },
        {
            projectName: '全球经销商医械市场监控 - 数据负责人',
            projectStartTime: '2021.10',
            projectEndTime: '2022.03',
            projectDescription: '项目背景：本项目为医械制造企业产品上市的重要工具，帮助制造商企业发现全球各大相关产品经销商信息，助力制造商企业完成出海的「最后一公里」，让中国产品快速走向世界。',
            projectResponsibility: [
                '信源调研与数据评估，覆盖 40+国家总数，数据量超 60W',
                '数据采集，清洗处理与数据校验',
                '数据补充，增加各国黄页信息或官方登记信息，收集bing搜索引擎信息',
                '数据相似度匹配以对齐基础数据与补充数据，增加数据维度，为客户提供更有价值的数据产品'
            ]
        },
        {
            projectName: '网络通信内容智能异常检测',
            projectStartTime: '2021.02',
            projectEndTime: '2021.09',
            projectDescription: '项目背景：传统通信内容的异常检测和分析通常基于固定规则或特征值匹配，无法检测出精心伪造的高级攻击行为。对于流量巨大的业务而言，伪造的攻击流量通常被大量正常业务流量淹没，导致攻击行为不被传统检测方法发现。',
            projectResponsibility: [
                '了解数据的业务说明，异常检测算法调研，根据数据的特点评估算法适用性',
                '数据清洗处理、特征工程、定义畸形数据与构建AutoEncoder深度学习异常检测算法模型基线',
                '根据基线模型的表现，尝试构建更优的算法模型如离群因子检测算法LOF，提高检测效率与检测结果的可解释性',
                '测试环境算法模型部署与联调，模型优化，输出算法检测结果，汇报工作进展与解释检测结果含义'
            ]
        },
        {
            projectName: '告警信息关联规则挖掘',
            projectStartTime: '2020.11',
            projectEndTime: '2021.02',
            projectDescription: '项目背景：为解决数据孤岛问题充分挖掘数据价值，本项目在数据挖掘过程中将系统告警信息通过攻击链路验证、行为模式等关联规则分析方法进行关联性数据挖掘。目的是要从大量告警序列中，挖掘告警事件前后关联性，用于预测告警事件的发展趋势。',
            projectResponsibility: [
                '业务数据探索性分析，算法方案预研，基于不同角度对告警数据进行关联分析',
                '数据清洗处理、特征工程与FP-growth/Prefixspan关联规则算法模型搭建',
                '数据库储存表结构设计，对接ES与MongoDB数据库进行数据的抽取与储存',
                '测试环境算法模型部署与联调，协调各组对接前端进行调试结果展示',
                '输出数据挖掘成果，定期汇报工作进展'
            ]
        },
        {
            projectName: '网络通信内容智能异常检测',
            projectStartTime: '2021.02',
            projectEndTime: '2021.09',
            projectDescription: '项目背景：传统通信内容的异常检测和分析通常基于固定规则或特征值匹配，无法检测出精心伪造的高级攻击行为。对于流量巨大的业务而言，伪造的攻击流量通常被大量正常业务流量淹没，导致攻击行为不被传统检测方法发现。',
            projectResponsibility: [
                '了解数据的业务说明，异常检测算法调研，根据数据的特点评估算法适用性',
                '数据清洗处理、特征工程、定义畸形数据与构建AutoEncoder深度学习异常检测算法模型基线',
                '根据基线模型的表现，尝试构建更优的算法模型如离群因子检测算法LOF，提高检测效率与检测结果的可解释性',
                '测试环境算法模型部署与联调，模型优化，输出算法检测结果，汇报工作进展与解释检测结果含义'
            ]
        }
    ]
}