import React from 'react';

const SkillItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start mb-3">
        <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full print:bg-black"></span>
        <p className="text-gray-700 print:text-black">{children}</p>
    </li>
);

export default function SkillIntroduction() {
    return (
        <div className="bg-white print:bg-white rounded-lg p-6 print:p-4">
            <h2 className="text-2xl font-bold text-gray-800 print:text-black mb-4 border-b pb-2 print:border-b-black">专业技能</h2>
            <ul className="space-y-2 print:space-y-1">
                <SkillItem>掌握Python编程语言，具备面向对象和函数式编程思维</SkillItem>
                <SkillItem>熟练使用requests/selenium/undetected_chromedriver等库进行数据爬取与解析</SkillItem>
                <SkillItem>熟悉数据分析库、机器学习库以及深度学习框架，如Pandas/Numpy/sklearn/Pytorch的使用</SkillItem>
                <SkillItem>熟练使用各种 AI 大语言模型，熟悉开源大模型的微调方法与流程，AIGC和 prompt 提示工程</SkillItem>
                <SkillItem>熟悉机器学习流程及常见算法模型，如KNN/Kmeans/DBSCAN/Apriori/FP-growth/LOF/孤立森林等算法</SkillItem>
                <SkillItem>熟悉深度学习，自然语言处理常见算法模型，如RNN/GPT/BART/同向量/Transformer/Ner等，了解轻量化模型、预训练模型和论文模型微调复现等</SkillItem>
                <SkillItem>熟悉Elasticsearch/Mysql等常用数据库，熟悉SQL和ES查询语法</SkillItem>
                <SkillItem>熟悉多种向量数据库的使用，如Qdrant, Pinecone, Milvus等</SkillItem>
            </ul>
        </div>
    )
}
