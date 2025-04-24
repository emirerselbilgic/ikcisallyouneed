'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimationControls();
  
  const teamMembers = [
    {
      name: "Emir Ersel Bilgiç",
      role: "Yapay Zeka Mühendisi",
      description: "Electrical and Electronics Engineering student with experience in AI, deep learning, web and mobile app development through research projects and an AI engineering internship,",
      image: "/emirersel.png",
      cv: {
        education: [
          "Elektrik-Elektronik Mühendisliği, İzmir Katip Çelebi Üniversitesi, 2020",
        ],
        experience: [
          "Intern Artificial Intelligence Engineer, Onur Enerji, 2024",
          "Intern Electrical & Electronics Engineer, Arkas Otomotiv, 2024"
        ],
        projects: [
          "Research Paper - Latin America 8th International Conference on Scientific Researches - CONTINUAL DEEP LEARNING BASED GLUCOSE PREDICTION FOR DIABETES MANAGEMENT",
          "Research Paper - Latin America 8th International Conference on Scientific Researches - GLUCAST: DEEP LEARNING BASED SMARTPHONE APPLICATION FOR PERSONALIZED GLUCOSE PREDICTION",
          "TUBITAK 2209B - Artificial Intelligence-Based Energy Demand Forecasting and Anomaly Detection for Energy Efficiency Optimization",
          "Scholarship Holder - Development of an AI-Assisted Wearable Sensor System for Minimally Invasive Colorimetric Measurement of Critical Exercise Biomarkers for Personalized Sport"
        ]
      }
    },
    {
      name: "Emir Çil",
      role: "Frontend Geliştirici",
      description: "Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusunda uzman. Responsive ve performanslı web uygulamaları geliştirme.",
      image: "/emircil.jpeg",
      cv: {
        education: [
          "Web Tasarımı ve Geliştirme, İzmir Katip Çelebi Üniversitesi, 2021",
          "UI/UX Tasarım Sertifikası, 2020"
        ],
        experience: [
          "Frontend Geliştirici, Tech Startup, 2020-2022",
          "UI Tasarımcısı, Design Agency, 2022-Günümüz"
        ],
        projects: [
          "E-ticaret platformu arayüz tasarımı",
          "Mobil uyumlu web uygulaması geliştirme"
        ]
      }
    },
    {
      name: "Mustafa Ayanoğlu",
      role: "Backend Geliştirici",
      description: "Veritabanı yönetimi ve API geliştirme konusunda uzman. Ölçeklenebilir ve güvenli backend mimarileri tasarlama.",
      image: "/mustafa.jpeg",
      cv: {
        education: [
          "Bilgisayar Mühendisliği, İzmir Katip Çelebi Üniversitesi, 2020",
          "Veritabanı Yönetimi Sertifikası, 2019"
        ],
        experience: [
          "Backend Geliştirici, Enterprise Solutions, 2019-2021",
          "Sistem Mimarı, Cloud Services, 2021-Günümüz"
        ],
        projects: [
          "Mikroservis mimarisi implementasyonu",
          "API Gateway ve kimlik doğrulama sistemi"
        ]
      }
    },
    {
      name: "Batu Arıbakır",
      role: "Proje Yöneticisi",
      description: "Proje planlaması ve ekip koordinasyonu konusunda deneyimli. Agile metodolojileri uygulama ve proje takibi.",
      image: "/batu.jpeg",
      cv: {
        education: [
          "İşletme Yönetimi, İzmir Katip Çelebi Üniversitesi, 2019",
          "Proje Yönetimi Sertifikası (PMP), 2020"
        ],
        experience: [
          "Proje Asistanı, Management Consultancy, 2018-2020",
          "Proje Yöneticisi, Tech Innovations, 2020-Günümüz"
        ],
        projects: [
          "Kurumsal dönüşüm projesi yönetimi",
          "Yazılım geliştirme süreçleri optimizasyonu"
        ]
      }
    },
  ];

  useEffect(() => {
    controls.start({
      x: `-${activeIndex * 100}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  }, [activeIndex, controls]);

  const handleNext = () => {
    if (activeIndex < teamMembers.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="ekip" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center mb-6">
            <div className="h-px flex-grow bg-[#30363d]"></div>
            <h2 className="text-3xl font-bold mx-4 text-[#58a6ff] font-[family-name:var(--font-geist-mono)]">
              <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">{"//"}</span> Team.members
            </h2>
            <div className="h-px flex-grow bg-[#30363d]"></div>
          </div>
          <p className="text-xl text-[#8b949e] max-w-3xl mx-auto text-center font-[family-name:var(--font-geist-mono)]">
            <code>IKC_is_All_You_Need!</code> ekibimizle tanışın
          </p>
        </motion.div>
        
        <div className="flex flex-col h-[600px] bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl overflow-hidden">
          <div className="flex mb-2 pt-4 px-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
            <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">team-profiles.tsx</span>
          </div>
          
          <div className="flex-grow relative overflow-hidden">
            <motion.div 
              className="flex h-full absolute w-full"
              animate={controls}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="flex min-w-full h-full">
                  {/* Left side - Photo */}
                  <div className="w-2/5 h-full relative p-6 overflow-hidden">
                    <div className="relative h-full w-full rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent z-10" />
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-6 left-6 right-6 z-20">
                        <h3 className="text-2xl font-bold mb-1 text-white font-[family-name:var(--font-geist-mono)]">{member.name}</h3>
                        <p className="text-[#58a6ff] font-medium font-[family-name:var(--font-geist-mono)]">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - CV/Details in JSON format */}
                  <div className="w-3/5 p-6 bg-[#0d1117] overflow-y-auto">
                    <pre className="text-sm text-[#e6edf3] font-[family-name:var(--font-geist-mono)] whitespace-pre-wrap"><code>{`{
  "name": "${member.name}",
  "role": "${member.role}",
  "description": "${member.description}",
  "education": [
    "${member.cv.education[0]}",
    "${member.cv.education[1] || ''}"
  ],
  "experience": [
    "${member.cv.experience[0]}",
    "${member.cv.experience[1] || ''}"
  ],
  "projects": [
    "${member.cv.projects[0]}",
    "${member.cv.projects[1] || ''}"
  ]
}`}</code></pre>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation controls */}
          <div className="p-4 flex justify-between items-center border-t border-[#30363d]">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`px-4 py-2 rounded ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#30363d]'} transition-colors font-[family-name:var(--font-geist-mono)]`}
            >
              <code>{'<-'} prev</code>
            </button>
            
            <div className="flex space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-[#58a6ff]' : 'bg-[#30363d]'}`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              disabled={activeIndex === teamMembers.length - 1}
              className={`px-4 py-2 rounded ${activeIndex === teamMembers.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#30363d]'} transition-colors font-[family-name:var(--font-geist-mono)]`}
            >
              <code>next {'->'}</code>
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[#8b949e] text-sm font-[family-name:var(--font-geist-mono)]">
            <code>{"//"} Kaydırmak için oklarını kullanın veya sayfalara tıklayın</code>
          </p>
        </div>
      </div>
    </section>
  );
} 