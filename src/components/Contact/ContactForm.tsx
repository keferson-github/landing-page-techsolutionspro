import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contato@techsolutionspro.com.br', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Novo contato de ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setShowThanks(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowThanks(false), 5000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showThanks && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center bg-black/95 backdrop-blur-sm rounded-xl"
          >
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Obrigado pelo contato!</h3>
              <p className="text-gray-400">
                Recebemos sua mensagem e retornaremos em breve.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send size={20} />
              </motion.div>
              Enviando...
            </>
          ) : (
            <>
              <Send size={20} />
              Enviar Mensagem
            </>
          )}
        </button>
      </form>
    </div>
  );
}