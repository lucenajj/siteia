import React from 'react';
import { Timer, TrendingUp, AlertTriangle, Users } from 'lucide-react';

const problems = [
  {
    icon: Timer,
    title: 'Atrasos Críticos',
    description: 'Projetos atrasados geram multas e comprometem sua reputação no mercado'
  },
  {
    icon: TrendingUp,
    title: 'Custos Elevados',
    description: 'Desperdício de materiais e mão de obra impactam diretamente sua margem de lucro'
  },
  {
    icon: AlertTriangle,
    title: 'Riscos de Segurança',
    description: 'Acidentes e não conformidades podem causar prejuízos milionários'
  },
  {
    icon: Users,
    title: 'Gestão Complexa',
    description: 'Coordenar equipes e processos sem ferramentas adequadas gera ineficiência'
  }
];

export function Problems() {
  return (
    <section id="problemas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Desafios da Construção Moderna
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
              <problem.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}