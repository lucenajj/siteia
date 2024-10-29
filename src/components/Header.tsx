import React from 'react';
import { BrainCircuit } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">ConstructIA</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#solucoes" className="text-gray-600 hover:text-gray-900">Soluções</a>
          <a href="#beneficios" className="text-gray-600 hover:text-gray-900">Benefícios</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Fale Conosco
          </button>
        </div>
      </nav>
    </header>
  );
}