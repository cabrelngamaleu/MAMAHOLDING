'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const navigation = {
  company: [
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Équipe', href: '/equipe' },
  ],
  services: [
    { name: 'Conseil Stratégique', href: '/services#conseil' },
    { name: 'Gestion de Patrimoine', href: '/services#patrimoine' },
    { name: 'Innovation & Tech', href: '/services#innovation' },
    { name: 'Développement Durable', href: '/services#durable' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/mentions-legales' },
    { name: 'Politique de Confidentialité', href: '/confidentialite' },
    { name: 'CGU', href: '/cgu' },
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Instagram', href: '#', icon: FaInstagram },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-primary-400 mb-4">
              MAMAHOLDING
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              L'excellence à votre service depuis 2009. Nous transformons vos ambitions
              en réalisations concrètes.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-secondary-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>123 Avenue des Champs-Élysées</li>
              <li>75008 Paris, France</li>
              <li className="pt-2">
                <a href="tel:+33123456789" className="hover:text-primary-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@mamaholding.fr" className="hover:text-primary-400 transition-colors">
                  contact@mamaholding.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MAMAHOLDING. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
