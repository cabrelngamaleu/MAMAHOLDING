'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const team = [
  {
    name: 'Sophie Laurent',
    role: 'Directrice Générale & Fondatrice',
    bio: 'Visionnaire stratégique avec 20 ans d\'expérience dans le leadership d\'entreprise. Sophie a fondé MAMAHOLDING avec la vision de créer une organisation qui place l\'excellence et l\'innovation au cœur de ses activités.',
    expertise: ['Leadership', 'Stratégie', 'Vision d\'entreprise'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Marc Dubois',
    role: 'Directeur Financier',
    bio: 'Expert en gestion financière et optimisation de patrimoine avec une expertise reconnue dans la structuration d\'opérations complexes. Marc assure la solidité financière et la croissance durable de nos projets.',
    expertise: ['Finance', 'Patrimoine', 'Investissements'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Élise Martin',
    role: 'Directrice Innovation & Technologie',
    bio: 'Pionnière dans l\'adoption de technologies transformatrices, Élise guide nos clients dans leur transformation digitale. Son expertise en IA et automatisation fait la différence.',
    expertise: ['Innovation', 'Tech', 'Transformation'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    name: 'Thomas Bernard',
    role: 'Directeur Stratégie',
    bio: 'Architecte de stratégies de croissance durables et innovantes. Thomas combine analyse rigoureuse et créativité pour concevoir des plans d\'action qui transforment les ambitions en succès.',
    expertise: ['Stratégie', 'Croissance', 'M&A'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Claire Rousseau',
    role: 'Directrice Développement Durable',
    bio: 'Passionnée par l\'impact positif, Claire développe des stratégies RSE qui allient performance économique et responsabilité sociale. Son approche holistique crée de la valeur partagée.',
    expertise: ['RSE', 'Durabilité', 'Impact'],
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    name: 'Alexandre Chen',
    role: 'Directeur Excellence Opérationnelle',
    bio: 'Expert en optimisation des processus et lean management, Alexandre transforme les organisations pour atteindre l\'excellence opérationnelle. Ses méthodes délivrent des résultats mesurables.',
    expertise: ['Lean', 'Processus', 'Performance'],
    gradient: 'from-indigo-500 to-blue-500',
  },
]

const values = [
  {
    title: 'Diversité',
    description: 'Une équipe multiculturelle et pluridisciplinaire',
  },
  {
    title: 'Excellence',
    description: 'Les meilleurs experts dans leurs domaines',
  },
  {
    title: 'Collaboration',
    description: 'Un esprit d\'équipe et de synergie unique',
  },
  {
    title: 'Innovation',
    description: 'Une culture d\'amélioration continue',
  },
]

export default function TeamPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 })

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
              Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Des experts passionnés dédiés à votre succès
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
              Leadership
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4">
              Une Équipe d'Excellence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-luxury-lg transition-all group"
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Avatar with gradient */}
                <div className={`aspect-square bg-gradient-to-br ${member.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                      <span className="text-6xl font-serif font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <FaLinkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <FaTwitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary-900" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Notre Culture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les valeurs qui nous unissent et nous guident
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                  <h3 className="font-serif text-2xl font-bold text-primary-300 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Rejoignez l'Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Nous recherchons constamment des talents exceptionnels pour renforcer notre équipe.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-gradient-primary text-white rounded-full font-bold text-lg hover:shadow-luxury-lg transform hover:scale-105 transition-all"
            >
              Carrières chez MAMAHOLDING
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
