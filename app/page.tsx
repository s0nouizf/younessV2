"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  User,
  Code,
  Languages,
  Award,
  Calendar,
  Building,
  ChevronDown,
  Download,
  Users,
  Heart,
  BadgeIcon as Certificate,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "education",
        "experience",
        "skills",
        "activities",
        "volunteer",
        "certificates",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Youness ABBOUBI
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Accueil" },
                { id: "about", label: "À propos" },
                { id: "education", label: "Formation" },
                { id: "experience", label: "Expérience" },
                { id: "skills", label: "Compétences" },
                { id: "activities", label: "Activités" },
                { id: "volunteer", label: "Bénévolat" },
                { id: "certificates", label: "Certificats" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 font-semibold" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                <img
                  src="/images/youness-profile.jpg"
                  alt="Youness ABBOUBI"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Youness ABBOUBI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Business strategy / project management strategy / consulting finance
              <br />
              Industriel student @ EMI | Entrepreneur student SNEE2025 @ UM5
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Me Contacter
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Télécharger CV
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">À Propos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-0">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Élève ingénieur en 3ème année de Génie Industriel à l'École Mohammadia d'Ingénieurs (EMI), je suis
                    passionné par l'optimisation des processus et l'analyse de données. Fort d'expériences
                    enrichissantes chez JESA S.A, McKinsey & Company et Royal Air Maroc, je recherche une alternance
                    pour approfondir mes compétences en gestion de projet et stratégie d'entreprise.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Rabat, Maroc</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span>Disponible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-lg">abboubiyouness78@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-lg">+212-690363799</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/youness-abboubi"
                  className="text-lg hover:text-blue-600 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Formation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                school: "École Mohammadia d'Ingénieurs",
                degree: "Diplôme d'ingénieur en Génie Industriel",
                period: "Sept 2023 – Prévu Juin 2025",
                location: "Rabat, Maroc",
                icon: GraduationCap,
              },
              {
                school: "CPGE Ibn Taymiya",
                degree: "Classes préparatoires aux grandes écoles option : PCSI/PSI*",
                period: "Sep 2021 – Juil 2023",
                location: "Rabat, Maroc",
                note: "Grand Admis",
                icon: GraduationCap,
              },
              {
                school: "Lycée BIRANZARAN",
                degree: "Baccalauréat option Sciences Physiques",
                period: "Juil 2021",
                location: "Fkih Ben Salah, Maroc",
                note: "Mention Très Bien",
                icon: Award,
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                        <edu.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                        <p className="text-gray-700 mb-2">{edu.degree}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </span>
                        </div>
                        {edu.note && (
                          <Badge className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">{edu.note}</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Expérience Professionnelle</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "JESA S.A (JV OCP & WORLEY)",
                position: "Business strategy et project management",
                period: "Juil 2025 – Août 2025",
                location: "Casablanca, Maroc",
                description:
                  "En charge de l'optimisation des investissements (CAPEX) et des coûts opérationnels dans le cadre d'un projet de transformation stratégique. J'ai conçu et déployé des tableaux de bord KPI pour piloter les initiatives et mesurer la performance. Mon analyse data-driven a permis d'identifier des leviers d'amélioration et de recommander des décisions éclairées.",
              },
              {
                company: "Walmart",
                position: "Sales Analytics & Market Strategy Intern",
                period: "Août 2025 – Sep 2025",
                location: "Stage",
                description:
                  "Analyzed sales performance and market trends to support data-driven strategic decisions for commercial optimization at the world's largest retailer.",
              },
              {
                company: "Royal Air Maroc (RAM)",
                position: "Data Analyst et Assistant PMO – Amélioration Continue",
                period: "Juil 2024 – Août 2024",
                location: "Casablanca, Maroc",
                description:
                  "Lors de ce stage en optimisation logistique, j'ai analysé les flux de pièces aéronautiques via Power BI (15+ KPIs), identifiant 20% de délais évitables. En mode Agile, j'ai coordonné 3 services pour modéliser des solutions.",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">{exp.position}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Compétences</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Compétences Techniques",
                icon: Code,
                skills: ["Microsoft PowerPoint", "Excel", "Word", "Python", "Power BI"],
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Compétences Analytiques",
                icon: Building,
                skills: ["Résolution de problèmes", "Techniques analytiques", "Data Analysis"],
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Compétences Relationnelles",
                icon: User,
                skills: ["Leadership", "Communication", "Travail d'équipe", "Adaptabilité"],
                color: "from-green-500 to-green-600",
              },
              {
                title: "Langues",
                icon: Languages,
                skills: ["Français: Courant", "Anglais: Courant", "Arabe: Langue maternelle"],
                color: "from-orange-500 to-orange-600",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                  <CardContent className="p-0">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-full w-fit mb-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-Academic Activities Section */}
      <section id="activities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Activités Extra-Académiques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                organization: "JCI (Junior Chamber International) RABAT",
                position: "Public Relations Manager & Board Member",
                period: "Janvier 2024 – Présent",
                location: "Rabat, Maroc",
                description:
                  "Exécuté avec succès plus de 10 séminaires, chacun affichant une augmentation moyenne de 68% de l'assistance par rapport à l'année précédente, avec plus de 70 participants par séminaire. Coordonné plus de 14 ateliers assurant le bon déroulement et la satisfaction des participants.",
              },
              {
                organization: "MDS - Moroccan Data Scientists",
                position: "Membre Actif",
                period: "2024 – Présent",
                location: "Maroc",
                description:
                  "Participation active dans la communauté des data scientists marocains, contribution aux projets collaboratifs et partage de connaissances en analyse de données.",
              },
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{activity.organization}</h3>
                        <p className="text-lg text-green-600 font-semibold mb-2">{activity.position}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {activity.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {activity.location}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Bénévolat</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="space-y-8">
            {[
              {
                organization: "Club OREMI - EMI",
                position: "Président du club d'orientation",
                period: "Avr 2024 – Juillet 2025",
                location: "EMI, Rabat",
                description:
                  "Direction du club d'orientation de l'École Mohammadia d'Ingénieurs, organisation d'événements d'orientation pour les étudiants.",
              },
              {
                organization: "Université Mohammed V",
                position: "Ambassadeur",
                period: "Mars 2025 – Présent",
                location: "Rabat, Maroc",
                description:
                  "Représentation de l'université lors d'événements et promotion des programmes académiques.",
              },
              {
                organization: "Math&Maroc",
                position: "Membre du pôle orientation",
                period: "Janvier 2024 – Présent",
                location: "Maroc",
                description: "Contribution aux activités d'orientation et de soutien aux étudiants en mathématiques.",
              },
              {
                organization: "NIA (National Institutional Acceleration)",
                position: "Human Resources Manager",
                period: "Fév 2024 – Présent",
                location: "Maroc",
                description:
                  "Gestion des ressources humaines et coordination des équipes au sein de l'accélérateur institutionnel national.",
              },
            ].map((volunteer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-0 bg-white">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{volunteer.organization}</h3>
                        <p className="text-lg text-red-600 font-semibold mb-2">{volunteer.position}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {volunteer.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {volunteer.location}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{volunteer.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certificats</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Accenture Nordics - Consultant",
                issuer: "Accenture",
                date: "Juillet 2025",
                description:
                  "Programme de formation consultant couvrant les stratégies de conseil, l'analyse business et les solutions digitales pour les clients nordiques",
                credentialId: "atd5kZ7AWhsnC2Y8R",
              },
              {
                title: "BCG - Data for Decision Makers",
                issuer: "BCG X",
                date: "Juillet 2025",
                description:
                  "Formation spécialisée en analyse de données pour la prise de décision stratégique, couvrant les outils d'analyse avancée et l'interprétation des données business",
                credentialId: "LdKdGaQTF3wa8XfGS",
              },
              {
                title: "EY - Financial Accounting Advisory Services (FAAS) Job Simulation",
                issuer: "EY",
                date: "Juillet 2025",
                description:
                  "Simulation professionnelle en services consultatifs comptables et financiers, incluant l'audit, la conformité réglementaire et l'analyse financière",
                credentialId: "EY-FAAS-2025",
              },
              {
                title: "Certificat JNITI' 2025",
                issuer: "École Mohammedia d'Ingénieurs",
                date: "Mai 2025",
                description:
                  "Certificat de participation aux Journées Nationales de l'Ingénieur et des Technologies Industrielles, événement phare de l'EMI",
                credentialId: "EMI-JNITI-2025",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full shadow-lg hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                        <Certificate className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                        <p className="text-orange-600 font-semibold mb-2">{cert.issuer}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {cert.date}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            ID: {cert.credentialId}
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 hover:from-yellow-600 hover:to-orange-600"
              onClick={() =>
                window.open("https://www.linkedin.com/in/youness-abboubi/details/certifications/", "_blank")
              }
            >
              Voir la liste complète des certificats
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités d'alternance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "abboubiyouness78@gmail.com",
                  link: "mailto:abboubiyouness78@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  content: "+212-690363799",
                  link: "tel:+212690363799",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  content: "youness-abboubi",
                  link: "https://www.linkedin.com/in/youness-abboubi",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-all border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                    <CardContent className="p-0">
                      <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-fit mx-auto mb-4">
                        <contact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{contact.title}</h3>
                      <a href={contact.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {contact.content}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Youness ABBOUBI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
