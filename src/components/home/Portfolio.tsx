'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const projects = [
  {
    title: 'Transformation Digitale',
    category: 'Innovation',
    description: 'Migration complète vers le cloud pour un groupe international',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Stratégie de Croissance',
    category: 'Conseil',
    description: 'Expansion réussie sur 5 nouveaux marchés européens',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'Excellence Opérationnelle',
    category: 'Optimisation',
    description: 'Réduction de 40% des coûts opérationnels',
    gradient: 'from-orange-600 to-red-600',
  },
  {
    title: 'Innovation Durable',
    category: 'Développement',
    description: 'Stratégie RSE primée au niveau international',
    gradient: 'from-emerald-600 to-green-600',
  },
]

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
            Nos Réalisations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4 mb-4">
            Portfolio d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des projets qui transforment les ambitions en succès concrets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl shadow-luxury hover:shadow-luxury-lg transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white/80 text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="mr-2 font-medium">Voir le projet</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/portfolio"
            className="inline-block px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all"
          >
            Voir Tous Nos Projets
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
