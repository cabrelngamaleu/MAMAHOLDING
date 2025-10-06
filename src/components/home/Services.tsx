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
  HiClock 
} from 'react-icons/hi'

const services = [
  {
    icon: HiLightningBolt,
    title: 'Conseil Stratégique',
    description: 'Accompagnement personnalisé pour développer votre stratégie d\'entreprise et atteindre vos objectifs de croissance avec excellence.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: HiShieldCheck,
    title: 'Gestion de Patrimoine',
    description: 'Solutions sur mesure pour optimiser et sécuriser votre patrimoine avec une vision à long terme et une expertise reconnue.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: HiCube,
    title: 'Innovation & Technologie',
    description: 'Intégration des dernières technologies pour transformer votre entreprise et rester compétitif dans un monde en évolution.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: HiGlobeAlt,
    title: 'Développement Durable',
    description: 'Stratégies responsables pour un impact positif sur l\'environnement et la société tout en assurant la croissance.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: HiChartBar,
    title: 'Analyse de Marché',
    description: 'Études approfondies et insights précis pour prendre les meilleures décisions d\'investissement avec confiance.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: HiClock,
    title: 'Excellence Opérationnelle',
    description: 'Optimisation de vos processus pour une efficacité maximale et des résultats exceptionnels qui dépassent les attentes.',
    color: 'from-red-500 to-red-600',
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
            Notre Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4 mb-4">
            Services d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes et personnalisées pour répondre à tous vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury-lg transition-all duration-300 border border-gray-100 hover:border-primary-200"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform rounded-b-2xl" />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg hover:shadow-luxury-lg transform hover:scale-105 transition-all"
          >
            Découvrir Tous Nos Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
