import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Here you would typically make an API call to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      setStatus('success');
      setMessage('Obrigado por se inscrever!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Ocorreu um erro. Tente novamente.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto md:mx-0">
      <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">Newsletter</h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">
        Receba novidades e atualizações sobre tecnologia e desenvolvimento.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send size={18} />
              </motion.div>
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
        
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm text-center md:text-left ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </motion.p>
        )}
      </form>
    </div>
  );
}