'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle } from 'react-icons/hi'

const features = [
  'Leadership visionnaire',
  'Innovation continue',
  'Excellence opérationnelle',
  'Engagement durable',
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
              Notre Histoire
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4 mb-6">
              Une Vision d'Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              MAMAHOLDING incarne l'excellence dans chaque projet que nous entreprenons.
              Depuis notre création en 2009, nous avons bâti notre réputation sur des
              valeurs d'innovation, d'intégrité et de performance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Notre expertise s'étend sur plusieurs domaines stratégiques, permettant à
              nos clients de bénéficier d'un accompagnement complet et personnalisé.
              Nous croyons en la puissance de la collaboration et en l'importance de
              créer des relations durables avec nos partenaires.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <HiCheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-luxury-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <motion.div
                    className="text-6xl font-serif font-bold mb-4"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    15+
                  </motion.div>
                  <div className="text-xl font-medium">
                    Années d'Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-luxury"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <div className="text-3xl font-serif font-bold text-primary-500">250+</div>
              <div className="text-gray-600 font-medium">Projets Réussis</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
