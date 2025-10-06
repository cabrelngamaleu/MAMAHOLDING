'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  HiLightningBolt, 
  HiShieldCheck, 
  HiCube, 
  HiGlobeAlt, 
  HiChartBar, 
  HiClock,
  HiCheckCircle
} from 'react-icons/hi'

const services = [
  {
    icon: HiLightningBolt,
    title: 'Conseil Stratégique',
    description: 'Accompagnement personnalisé pour développer votre stratégie d\'entreprise et atteindre vos objectifs de croissance.',
    color: 'from-blue-500 to-blue-600',
    features: [
      'Analyse stratégique approfondie',
      'Plan de croissance sur mesure',
      'Accompagnement continu',
      'Optimisation des ressources'
    ]
  },
  {
    icon: HiShieldCheck,
    title: 'Gestion de Patrimoine',
    description: 'Solutions sur mesure pour optimiser et sécuriser votre patrimoine avec une vision à long terme.',
    color: 'from-green-500 to-green-600',
    features: [
      'Planification financière',
      'Diversification des actifs',
      'Gestion des risques',
      'Optimisation fiscale'
    ]
  },
  {
    icon: HiCube,
    title: 'Innovation & Technologie',
    description: 'Intégration des dernières technologies pour transformer votre entreprise et rester compétitif.',
    color: 'from-purple-500 to-purple-600',
    features: [
      'Transformation digitale',
      'Solutions technologiques',
      'R&D et innovation',
      'Automatisation des processus'
    ]
  },
  {
    icon: HiGlobeAlt,
    title: 'Développement Durable',
    description: 'Stratégies responsables pour un impact positif sur l\'environnement et la société.',
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Stratégie RSE',
      'Empreinte carbone',
      'Économie circulaire',
      'Impact social positif'
    ]
  },
  {
    icon: HiChartBar,
    title: 'Analyse de Marché',
    description: 'Études approfondies et insights précis pour prendre les meilleures décisions d\'investissement.',
    color: 'from-orange-500 to-orange-600',
    features: [
      'Études de marché',
      'Veille concurrentielle',
      'Analyse des tendances',
      'Opportunités d\'investissement'
    ]
  },
  {
    icon: HiClock,
    title: 'Excellence Opérationnelle',
    description: 'Optimisation de vos processus pour une efficacité maximale et des résultats exceptionnels.',
    color: 'from-red-500 to-red-600',
    features: [
      'Optimisation des processus',
      'Lean management',
      'Performance KPIs',
      'Amélioration continue'
    ]
  },
]

const benefits = [
  'Équipe d\'experts dédiée',
  'Approche personnalisée',
  'Résultats mesurables',
  'Support continu',
  'Innovation constante',
  'Transparence totale',
]

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a961' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Des solutions complètes et personnalisées pour transformer votre entreprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury-lg transition-all border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2">
                        <HiCheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary-900" ref={benefitsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              L'excellence à chaque étape de notre collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="bg-white/10 backdrop-blur-sm border border-primary-400/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <HiCheckCircle className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={benefitsInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-secondary-900 rounded-full font-bold text-lg hover:shadow-luxury transform hover:scale-105 transition-all"
            >
              Demander un Devis
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
