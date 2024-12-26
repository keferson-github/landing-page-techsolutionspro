import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver um site profissional?",
    answer: "O prazo de desenvolvimento varia de acordo com a complexidade do projeto. Em média, um site institucional leva de 4 a 6 semanas, enquanto projetos mais complexos como e-commerce podem levar de 8 a 12 semanas. Trabalhamos com metodologias ágeis para garantir entregas parciais e feedback constante."
  },
  {
    question: "Como funciona o processo de desenvolvimento de aplicativos?",
    answer: "Nosso processo de desenvolvimento de apps segue 5 etapas principais: 1) Análise e planejamento, 2) Design de interface e experiência, 3) Desenvolvimento, 4) Testes e qualidade, 5) Publicação nas lojas. Mantemos você atualizado em cada fase e realizamos ajustes conforme seu feedback."
  },
  {
    question: "Vocês oferecem suporte após o lançamento do projeto?",
    answer: "Sim! Oferecemos diferentes planos de suporte e manutenção pós-lançamento. Isso inclui monitoramento de performance, atualizações de segurança, correções de bugs, e implementação de novas funcionalidades. Nosso time está sempre disponível para garantir o sucesso contínuo do seu projeto."
  },
  {
    question: "Quais tecnologias vocês utilizam no desenvolvimento?",
    answer: "Utilizamos as tecnologias mais modernas e eficientes do mercado, incluindo React, Node.js, TypeScript e Python para desenvolvimento web e mobile. Para aplicativos, trabalhamos com React Native e Flutter. Nossas soluções são sempre escaláveis e seguem as melhores práticas de desenvolvimento."
  },
  {
    question: "Como é feita a precificação dos projetos?",
    answer: "A precificação é personalizada para cada projeto, considerando fatores como complexidade, prazo, funcionalidades necessárias e escala esperada. Realizamos uma análise detalhada dos requisitos e fornecemos um orçamento transparente, dividido por etapas. Também oferecemos diferentes modelos de contratação para melhor atender sua necessidade."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-black via-purple-900/20 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de desenvolvimento
          </p>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}