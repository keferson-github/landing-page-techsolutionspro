import ContactForm from './Contact/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-900 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entre em contato para discutirmos seu projeto e transformarmos suas ideias em realidade.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}