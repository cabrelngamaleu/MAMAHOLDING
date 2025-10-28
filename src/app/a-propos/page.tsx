'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle, HiLightBulb, HiShieldCheck, HiTrendingUp, HiHeart } from 'react-icons/hi'

const values = [
  {
    icon: HiLightBulb,
    title: 'Innovation',
    description: 'Nous cultivons une culture d\'innovation permanente pour rester à la pointe de notre secteur.',
  },
  {
    icon: HiShieldCheck,
    title: 'Intégrité',
    description: 'L\'éthique et la transparence guident chacune de nos actions et décisions.',
  },
  {
    icon: HiTrendingUp,
    title: 'Excellence',
    description: 'Nous visons l\'excellence dans tout ce que nous entreprenons, sans compromis.',
  },
  {
    icon: HiHeart,
    title: 'Engagement',
    description: 'Nous sommes profondément engagés envers la réussite de nos clients et partenaires.',
  },
]

const milestones = [
  { year: '2009', title: 'Fondation', description: 'Création de MAMAHOLDING avec une vision d\'excellence' },
  { year: '2012', title: 'Expansion', description: 'Ouverture de bureaux dans 5 pays européens' },
  { year: '2016', title: 'Innovation', description: 'Lancement de notre division technologie et innovation' },
  { year: '2020', title: 'Croissance', description: 'Plus de 200 projets réussis et 50+ experts' },
  { year: '2024', title: 'Excellence', description: 'Leader reconnu dans notre secteur' },
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 })

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
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Une aventure dédiée à l'excellence, l'innovation et le succès de nos clients
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
                Notre Mission
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4 mb-6">
                Créer de la Valeur Durable
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Depuis 2009, MAMAHOLDING s'est imposé comme un acteur majeur dans le conseil
                stratégique et l'accompagnement d'entreprises. Notre mission est claire :
                transformer les défis en opportunités et les ambitions en réussites concrètes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nous croyons fermement que l'excellence n'est pas une destination, mais un
                voyage continu. C'est pourquoi nous investissons constamment dans l'innovation,
                la formation de nos équipes et le développement de solutions sur mesure pour
                chacun de nos clients.
              </p>
              <div className="space-y-4">
                {['Leadership visionnaire', 'Innovation continue', 'Résultats mesurables'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <HiCheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-luxury-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
              Nos Valeurs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4">
              Ce Qui Nous Guide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-luxury-lg transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-secondary-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wide uppercase text-sm">
              Notre Parcours
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-900 mt-4">
              15 Années d'Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-primary-600 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-luxury-lg transition-all">
                      <div className="text-3xl font-serif font-bold text-primary-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg relative z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
