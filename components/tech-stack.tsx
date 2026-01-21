"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Terminal, Settings2, ShieldCheck, Microscope, Cpu, Workflow, Globe, Zap } from "lucide-react"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiPostgresql, SiPrisma, SiGit, 
  SiDocker, SiPython, SiPopos, SiJavascript, SiHtml5, SiCss3, 
  SiExpress, SiVercel, SiPostman, SiMongodb, SiFlutter, 
  SiDart, SiFirebase, SiSqlite, SiGithubactions, SiTensorflow, 
  SiPytorch, SiFigma, SiTestinglibrary, SiOpenjdk
} from "react-icons/si"

const colorMap: Record<string, { bg: string; border: string; text: string; shadow: string }> = {
  amber: { bg: "bg-amber-500/10 dark:bg-amber-500/20", border: "border-amber-500/20 dark:border-amber-500/50", text: "text-amber-600 dark:text-amber-400", shadow: "group-hover:shadow-amber-500/20" },
  blue: { bg: "bg-blue-500/10 dark:bg-blue-500/20", border: "border-blue-500/20 dark:border-blue-500/50", text: "text-blue-600 dark:text-blue-400", shadow: "group-hover:shadow-blue-500/20" },
  emerald: { bg: "bg-emerald-500/10 dark:bg-emerald-500/20", border: "border-emerald-500/20 dark:border-emerald-500/50", text: "text-emerald-600 dark:text-emerald-400", shadow: "group-hover:shadow-emerald-500/20" },
  purple: { bg: "bg-purple-500/10 dark:bg-purple-500/20", border: "border-purple-500/20 dark:border-purple-500/50", text: "text-purple-600 dark:text-purple-400", shadow: "group-hover:shadow-purple-500/20" },
  rose: { bg: "bg-rose-500/10 dark:bg-rose-500/20", border: "border-rose-500/20 dark:border-rose-500/50", text: "text-rose-600 dark:text-rose-400", shadow: "group-hover:shadow-rose-500/20" },
};

const TECH_STACK = [
  {
    category: "Languages & Core",
    variant: "amber",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "OOP", icon: Settings2, color: "#64748b" },
    ]
  },
  {
    category: "Frontend & Mobile",
    variant: "blue",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "WebSockets", icon: Workflow, color: "#0ea5e9" },
    ]
  },
  {
    category: "Backend & AI",
    variant: "emerald",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "API Integration", icon: Globe, color: "#10b981" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Machine Learning", icon: Cpu, color: "#10b981" },
    ]
  },
  {
    category: "DevOps & QA",
    variant: "purple",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GH Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "API Testing", icon: Zap, color: "#f59e0b" },
      { name: "TDD", icon: ShieldCheck, color: "#8b5cf6" },
      { name: "Unit Testing", icon: SiTestinglibrary, color: "#E33332" },
      { name: "Integration", icon: Microscope, color: "#a855f7" },
      { name: "Debugging", icon: Terminal, color: "#64748b" },
    ]
  },
  {
    category: "Methodology & CMS",
    variant: "rose",
    skills: [
      { name: "Scrum", icon: Workflow, color: "#e11d48" },
      { name: "Agile", icon: Settings2, color: "#f43f5e" },
      { name: "CMS", icon: SiVercel, color: "#000000" }, 
    ]
  }
];

export function TechStack() {
  const [openSections, setOpenSections] = useState<string[]>(
    TECH_STACK.map((group) => group.category)
  );

  const toggleSection = (category: string) => {
    setOpenSections((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <section id="skills" className="space-y-8 scroll-mt-20">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Skills</h2>
        <p className="text-muted-foreground font-medium">Click a section to expand or collapse.</p>
      </div>

      {/* 1. OUTER CONTAINER: Changed from grid to flex-col */}
      <div className="flex flex-col gap-6 w-full">
        {TECH_STACK.map((group) => {
          const colors = colorMap[group.variant];
          const isOpen = openSections.includes(group.category);

          return (
            <div 
              key={group.category} 
              className={`p-1 rounded-3xl transition-all duration-300 ${isOpen ? 'bg-muted/10' : 'bg-transparent'}`}
            >
              {/* Toggle Header Button */}
              <button 
                onClick={() => toggleSection(group.category)} 
                className={`flex items-center justify-between w-full p-5 rounded-2xl group cursor-pointer transition-colors ${isOpen ? '' : 'hover:bg-muted/20'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-8 rounded-full ${colors.bg.split(' ')[0]} border ${colors.border}`} />
                  <h3 className={`text-xl font-bold ${colors.text}`}>{group.category}</h3>
                </div>
                
                <div className={`p-1.5 rounded-full ${colors.bg} ${colors.text} transition-all duration-300 ${isOpen ? '' : 'rotate-180 opacity-50'}`}>
                  <ChevronUp size={20} />
                </div>
              </button>
              
              {/* 2. INNER CONTAINER: Flex-wrap with centering logic */}
                <div className={`
                  flex flex-wrap gap-6 justify-center px-5 overflow-hidden transition-all duration-500 ease-in-out
                  ${isOpen ? "max-h-[1200px] opacity-100 pb-10 mt-4" : "max-h-0 opacity-0 mt-0"}
                `}>
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    const isBlackIcon = skill.color === "#000000" || skill.color === "#2D3748";
                    
                    return (
                      <div 
                        key={skill.name} 
                        className="group flex flex-col items-center w-20 md:w-24 shrink-0"
                      >
                        {/* Fixed Tile Size: w-20 h-20 (80px) remains constant on all screens */}
                        <div className={`
                          w-20 h-20 rounded-2xl transition-all duration-300 
                          flex items-center justify-center border shrink-0
                          ${colors.bg} ${colors.border}
                          group-hover:-translate-y-1 group-hover:shadow-lg ${colors.shadow}
                        `}>
                          <Icon 
                            className={`w-8 h-8 transition-all duration-300 
                              ${isBlackIcon ? "dark:text-white text-black" : ""}`} 
                            style={!isBlackIcon ? { color: skill.color } : {}} 
                          />
                        </div>
                        
                        {/* Label: Fixed width matches container to handle long text */}
                        <p className="mt-3 text-[10px] md:text-xs font-bold text-muted-foreground text-center leading-tight">
                          {skill.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}