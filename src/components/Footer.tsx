import React from 'react';
import { BrainCircuit, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">ConstructIA</span>
            </div>
            <p className="text-gray-400">
              Transformando a construção civil com inteligência artificial
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <a href="mailto:contato@constructia.com.br" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                contato@constructia.com.br
              </a>
              <div className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                0800 123 4567
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="text-gray-400 hover:text-white">Soluções</a></li>
              <li><a href="#cases" className="text-gray-400 hover:text-white">Cases de Sucesso</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Receba novidades e atualizações sobre IA na construção</p>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          © 2024 ConstructIA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}