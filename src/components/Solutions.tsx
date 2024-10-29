import React from 'react';
import { Brain, HardHat, Lightbulb, BarChart } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'IA para Planejamento',
    description: 'Otimize cronogramas e recursos automaticamente com algoritmos avançados',
    benefits: ['Redução de 40% em atrasos', 'Alocação inteligente de recursos', 'Previsão precisa de prazos']
  },
  {
    icon: HardHat,
    title: 'Segurança Preditiva',
    description: 'Previna acidentes identificando riscos antes que ocorram',
    benefits: ['Análise em tempo real', 'Alertas automáticos', 'Conformidade garantida']
  },
  {
    icon: BarChart,
    title: 'Gestão Inteligente',
    description: 'Tome decisões baseadas em dados com dashboards em tempo real',
    benefits: ['Visão unificada do projeto', 'KPIs automatizados', 'Relatórios instantâneos']
  }
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Soluções Revolucionárias com IA
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}