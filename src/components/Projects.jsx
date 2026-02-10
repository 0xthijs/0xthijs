import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const projects = [
    {
        title: "Predictive Attrition Modeling",
        description: "Machine learning model identifying flight risk factors with 85% accuracy.",
        tags: ["Python", "Sklearn", "XGBoost"],
        link: "https://github.com/0xthijs/0xthijs/tree/main/data-lab/01-ibm-attrition"
    },
    {
        title: "Promotion Velocity Analysis",
        description: "Analyzing career progression rates across different departments and demographics.",
        tags: ["Pandas", "Statistics", "Tableau"],
        link: "https://github.com/0xthijs/0xthijs/tree/main/data-lab/02-promotion-velocity"
    },
    {
        title: "Diversity & Inclusion Audit",
        description: "Automated reporting system for tracking DE&I metrics and compliance.",
        tags: ["SQL", "PowerBI", "Python"],
        link: "https://github.com/0xthijs/0xthijs/tree/main/data-lab/04-diversity-audit"
    },
    {
        title: "Burnout Risk Assessment",
        description: "NLP analysis of employee feedback to detect early signs of burnout.",
        tags: ["NLP", "NLTK", "Sentiment Analysis"],
        link: "https://github.com/0xthijs/0xthijs/tree/main/data-lab/03-burnout-risk"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative bg-black/40">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <GlassCard className="h-full hover:bg-white/5 transition-colors bg-black/20">
                                <div className="mb-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 group-hover:text-white transition-colors"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
