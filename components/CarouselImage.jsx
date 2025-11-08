// CarouselImage.jsx
// This component's sole job is to render the Next.js Image component safely.
import Image from 'next/image';
import { motion } from 'framer-motion';

const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const CarouselImage = ({ src, alt }) => {
    return (
        <motion.div
            key={src} // Keying by src ensures a clean rerender in AnimatePresence
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.0 }}
            className="absolute inset-0 z-0"
        >
            {/* The src prop is now a simple string path */}
            <Image
                src={src} 
                alt={alt}
                fill={true} 
                style={{ objectFit: "cover" }} 
                quality={100}
                priority={true} 
                sizes="(max-width: 768px) 100vw, 100vw"
            />
        </motion.div>
    );
};

export default CarouselImage;