// ChillGuy.jsx (이미지 전용 컴포넌트)
import { motion } from 'framer-motion';

export default function ChillGuy({ started }: any) {
  return (
    <motion.img
      src="/icons/chill_guy_icon.webp"
      alt="chill guy"
      initial={{
        scale: 1,
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={
        started
          ? {
              scale: 0.1,
              top: -70,
              left: -70,
              translateX: '0%',
              translateY: '0%',
              opacity: 0
            }
          : {}
      }
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="absolute z-50"
      style={{ width: '200px', position: 'absolute' }}
    />
  );
}
