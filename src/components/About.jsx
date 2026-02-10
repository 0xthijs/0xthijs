import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const About = () => {
    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8 text-lg text-gray-300">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Value Proposition</h3>
                                <p className="leading-relaxed">
                                    I am transitioning from Senior HRBP to <span className="text-white font-semibold">HR AI Product Owner</span>. My core mission is bridging <span className="text-white font-semibold">People Logic</span> with <span className="text-white font-semibold">Machine Logic</span>. I define the "Why" and "What" of HR Tech, orchestrating AI agents to execute the "How."
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Active Project</h3>
                                <p className="leading-relaxed">
                                    Currently deploying the <span className="text-white font-semibold">IBM Attrition Risk Dashboard</span>. This system moves beyond descriptive retention metrics to prescriptive risk scoring, enabling proactive talent intervention before resignation letters are written.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
                            <GlassCard className="p-0 overflow-hidden bg-black/40">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <th className="p-4 font-mono text-sm uppercase tracking-wider text-white/60">Layer</th>
                                            <th className="p-4 font-mono text-sm uppercase tracking-wider text-white/60">Technology</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr>
                                            <td className="p-4 font-medium text-white">AI Orchestration</td>
                                            <td className="p-4 text-gray-400">Gemini 2.0 Pro</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Execution</td>
                                            <td className="p-4 text-gray-400">Antigravity (Agentic dev)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Data Layer</td>
                                            <td className="p-4 text-gray-400">SQL / Power BI / Python</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium text-white">Frontend</td>
                                            <td className="p-4 text-gray-400">React / Tailwind / Vite</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </GlassCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
