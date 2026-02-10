import { motion, useScroll, useTransform } from 'framer-motion';
import GlassCard from './GlassCard';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-nana-dark">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-[#050505]"
            >
                {/* CSS Grid Background */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Spotlight effects */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black via-transparent to-black" />
                <motion.div
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 7, repeat: Infinity, delay: 2, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-white/3 rounded-full blur-[150px]"
                />
            </motion.div>

            {/* Texture Overlay */}
            <div
                className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-overlay"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/texture-overlay.png)`, backgroundSize: '200px' }}
            />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
                            HR Analytics <br />
                            <span className="text-white">
                                Evolved
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                            Transforming workforce data into actionable intelligence with AI-driven insights and modern visualization.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] inline-block text-center">
                            View Projects
                        </a>
                        <a href="#about" className="px-8 py-4 border border-white/20 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm inline-block text-center">
                            About Me
                        </a>
                    </motion.div>
                </div>

                {/* Right side card/visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hidden lg:block"
                >
                    <GlassCard className="max-w-md mx-auto relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-nana-accent/20 rounded-full blur-3xl group-hover:bg-nana-accent/30 transition-all" />

                        <h3 className="text-2xl font-bold mb-4">Latest Analysis</h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="text-xs text-white/70 mb-1">DATA LAB / 01</div>
                                <div className="font-semibold">Predictive Attrition Modeling</div>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="text-xs text-white/70 mb-1">DATA LAB / 02</div>
                                <div className="font-semibold">Diversity & Inclusion Audit</div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
