import PersonalInfo from "@/components/personal-info";
import SkillIntroduction from "@/components/skill-introduction";
import WorkExperience from "@/components/work-experience";
import ProjectExperience from "@/components/project-experience";
import EducationExperience from "@/components/education-experience";
import SkillsAndCertificates from "@/components/skills-and-certificates";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans shadow-lg rounded-lg">
      <PersonalInfo />
      <SkillsAndCertificates />
      <SkillIntroduction />
      <WorkExperience />
      <ProjectExperience />
      <EducationExperience />
    </div>
  );
}

