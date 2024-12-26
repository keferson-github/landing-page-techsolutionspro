import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-50 w-full bg-black/40 backdrop-blur-xl border-l border-white/10"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="relative w-10 h-10 flex items-center justify-center group"
                aria-label="Close menu"
              >
                <motion.div
                  className="relative w-6 h-6"
                  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {/* Animated close button lines */}
                  <motion.span
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full origin-center group-hover:bg-purple-400 transition-colors"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: 45, scale: 1 }}
                    transition={{
                      rotate: { duration: 0.4, ease: "easeOut" },
                      scale: { duration: 0.3, ease: "easeInOut" }
                    }}
                  />
                  <motion.span
                    className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full origin-center group-hover:bg-purple-400 transition-colors"
                    initial={{ rotate: 0, scale: 0 }}
                    animate={{ rotate: -45, scale: 1 }}
                    transition={{
                      rotate: { duration: 0.4, ease: "easeOut" },
                      scale: { duration: 0.3, ease: "easeInOut", delay: 0.1 }
                    }}
                  />
                </motion.div>
              </button>
            </div>

            <div className="h-full flex flex-col pt-20">
              <div className="flex-1 px-6 py-8">
                <div className="space-y-8">
                  {[
                    { href: '#home', label: 'Home' },
                    { href: '#services', label: 'Serviços' },
                    { href: '#portfolio', label: 'Portfólio' },
                    { href: '#faq', label: 'FAQ' },
                    { href: '#contact', label: 'Contato', primary: true }
                  ].map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`block text-2xl font-medium text-center ${
                        item.primary
                          ? 'bg-purple-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-purple-700/80'
                          : 'text-gray-300 hover:text-white'
                      } transition-colors`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}