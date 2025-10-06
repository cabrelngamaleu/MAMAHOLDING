'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiTrendingUp, HiUsers, HiLightningBolt, HiGlobeAlt } from 'react-icons/hi'

const projects = [
  {
    category: 'Innovation',
    title: 'Transformation Digitale Globale',
    client: 'TechVision International',
    description: 'Migration complète vers le cloud et modernisation de l\'infrastructure IT pour un groupe de 5000 employés.',
    gradient: 'from-blue-600 to-purple-600',
    icon: HiLightningBolt,
    results: [
      '70% de réduction des coûts IT',
      'Temps de déploiement divisé par 4',
      'Satisfaction employés à 95%'
    ]
  },
  {
    category: 'Conseil Stratégique',
    title: 'Expansion Européenne',
    client: 'InnovGroup',
    description: 'Stratégie d\'expansion sur 5 nouveaux marchés européens avec implantation physique et partenariats locaux.',
    gradient: 'from-green-600 to-teal-600',
    icon: HiGlobeAlt,
    results: [
      '5 nouveaux marchés conquis',
      'Croissance de 150% en 2 ans',
      '200 emplois créés'
    ]
  },
  {
    category: 'Excellence Opérationnelle',
    title: 'Optimisation des Processus',
    client: 'ManufacturePlus',
    description: 'Refonte complète de la chaîne de production et mise en place du lean management.',
    gradient: 'from-orange-600 to-red-600',
    icon: HiTrendingUp,
    results: [
      '40% de réduction des coûts',
      'Productivité +60%',
      'Délais divisés par 2'
    ]
  },
  {
    category: 'Développement Durable',
    title: 'Stratégie RSE Innovante',
    client: 'EcoStart',
    description: 'Mise en place d\'une stratégie RSE complète avec certification et transformation culturelle.',
    gradient: 'from-emerald-600 to-green-600',
    icon: HiUsers,
    results: [
      'Certification B-Corp obtenue',
      '80% de réduction CO2',
      'Prix RSE International'
    ]
  },
  {
    category: 'Gestion de Patrimoine',
    title: 'Restructuration Financière',
    client: 'Capital Partners',
    description: 'Optimisation du portefeuille d\'investissements et diversification stratégique.',
    gradient: 'from-purple-600 to-pink-600',
    icon: HiTrendingUp,
    results: [
      'ROI augmenté de 45%',
      'Risques divisés par 3',
      'Diversification sur 12 secteurs'
    ]
  },
  {
    category: 'Innovation Tech',
    title: 'IA et Automatisation',
    client: 'DataFlow Systems',
    description: 'Intégration de l\'IA dans les processus métier et automatisation intelligente.',
    gradient: 'from-indigo-600 to-blue-600',
    icon: HiLightningBolt,
    results: [
      '85% de tâches automatisées',
      'Temps de traitement -90%',
      'Précision à 99.8%'
    ]
  },
]

const stats = [
  { value: '250+', label: 'Projets Réussis' },
  { value: '98%', label: 'Taux de Réussite' },
  { value: '15+', label: 'Pays' },
  { value: '50+', label: 'Secteurs' },
]

export default function PortfolioPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Des projets qui transforment les ambitions en succès concrets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={projectsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
              Nos Réalisations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4">
              Projets d'Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-br ${project.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-20">
                      <Icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-10">
                      <span className="text-white/80 text-sm font-medium mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-secondary-900 mb-4">
                        Résultats Clés :
                      </h4>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-start space-x-2">
                            <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
