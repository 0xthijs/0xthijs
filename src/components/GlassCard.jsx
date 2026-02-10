import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-shadow duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
