'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'CEO, TechVision',
    content: 'MAMAHOLDING a transformé notre entreprise. Leur expertise stratégique et leur accompagnement personnalisé ont été déterminants dans notre croissance de 150% en 2 ans.',
    rating: 5,
  },
  {
    name: 'Jean-Pierre Martin',
    role: 'Directeur, InnovGroup',
    content: 'Une équipe exceptionnelle qui comprend vraiment les enjeux. Les résultats ont dépassé toutes nos attentes. Je recommande vivement leurs services.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Fondatrice, EcoStart',
    content: 'Professionnalisme, excellence et innovation. MAMAHOLDING incarne ces valeurs dans chaque aspect de leur travail. Un partenaire de confiance.',
    rating: 5,
  },
]

export default function Testimonials() {
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
            Témoignages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-luxury-lg transition-all border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
