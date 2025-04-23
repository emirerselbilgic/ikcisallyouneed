'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import TeamSection from '@/components/TeamSection';
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  const [typedText, setTypedText] = useState("");
  const fullText = "IKC is All You Need!";
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  
  // Create pre-populated arrays for the code snippets to avoid Array.fill() issues
  const randomCodeSnippets = Array.from({ length: 100 }, () => 
    Math.random().toString(36).substring(2, 15)
  );
  
  const teamMembers = [
    {
      name: "Emir Ersel Bilgiç",
      role: "Yapay Zeka Mühendisi",
      description: "Derin öğrenme ve makine öğrenmesi konusunda uzmanlık.",
      image: "/team-member-1.png",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP"]
    },
    {
      name: "Emir Çil",
      role: "Frontend Geliştirici",
      description: "Modern web teknolojileri ve kullanıcı deneyimi tasarımı.",
      image: "/emircil.jpeg",
      skills: ["React", "JavaScript", "Tailwind CSS", "UI/UX"]
    },
    {
      name: "Mustafa Ayanoğlu",
      role: "Backend Geliştirici",
      description: "Veritabanı yönetimi ve API geliştirme.",
      image: "/team-member-3.png",
      skills: ["Node.js", "Express", "SQL", "MongoDB"]
    },
    {
      name: "Batu Arıbakır",
      role: "Proje Yöneticisi",
      description: "Proje planlaması ve ekip koordinasyonu.",
      image: "/team-member-4.png",
      skills: ["Agile", "Scrum", "JIRA", "Git/GitHub"]
    },
  ];

  const techs = [
    { name: "Derin Öğrenme", icon: "🧠", color: "from-fuchsia-600 to-purple-600" },
    { name: "Doğal Dil İşleme", icon: "💬", color: "from-purple-600 to-blue-600" },
    { name: "Bilgisayarlı Görü", icon: "👁️", color: "from-blue-600 to-cyan-600" },
    { name: "Veri Analizi", icon: "📊", color: "from-cyan-600 to-emerald-600" }
  ];

  const interactiveCards = [
    { text: "Veri Analizi", color: "bg-fuchsia-700" },
    { text: "Yapay Zeka", color: "bg-purple-700" },
    { text: "Makine Öğrenmesi", color: "bg-blue-700" },
    { text: "İnovasyon", color: "bg-cyan-700" }
  ];

  const codeString = `
/* IKC is All You Need! AI Hackathon Team */
function createProject() {
  const team = ["Emir", "Emir", "Mustafa", "Batu"];
  const technologies = ["AI", "ML", "React", "Node.js"];
  const goal = "Win the hackathon!";
  
  return {
    name: "IKC is All You Need!",
    members: team,
    tech: technologies,
    objective: goal,
    execute: () => buildAmazingSolution()
  };
}

const project = createProject();
project.execute(); // Let's win this!
  `;

  return (
    <div ref={containerRef} className="bg-[#0d1117] text-white overflow-x-hidden font-[family-name:var(--font-geist-mono)]">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/90 via-[#0d1117]/70 to-[#0d1117] z-10" />
          <div className="relative h-full w-full bg-[url('/grid.svg')] bg-center bg-repeat opacity-30" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-screen w-1/2 opacity-10">
            <pre className="text-xs text-[#6e7681] leading-4 overflow-hidden font-[family-name:var(--font-geist-mono)]">
              {randomCodeSnippets.map((_, i) => (
                <div key={i} className="opacity-50">
                  {_}
                </div>
              ))}
            </pre>
          </div>
          <div className="absolute right-0 top-0 h-screen w-1/2 opacity-10">
            <pre className="text-xs text-[#6e7681] leading-4 overflow-hidden text-right font-[family-name:var(--font-geist-mono)]">
              {randomCodeSnippets.map((_, i) => (
                <div key={i} className="opacity-50">
                  {_}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">

          <div className="mt-20 mb-10 font-bold">
            <div className="inline-block relative">
              <span className="text-5xl md:text-7xl text-[#58a6ff] relative z-10 font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
                <span className="text-white font-[family-name:var(--font-geist-mono)]">&lt;</span>
                <span className="text-[#58a6ff] font-[family-name:var(--font-geist-mono)]">{typedText}</span>
                <span className="text-white font-[family-name:var(--font-geist-mono)]">/&gt;</span>
                <span className="animate-blink inline-block w-[3px] ml-1 h-10 bg-[#58a6ff]" style={{ visibility: typedText.length === fullText.length ? 'visible' : 'hidden' }}></span>
              </span>
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-[#0d1117] via-transparent to-[#0d1117] opacity-20"></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative bg-[#161b22] rounded-lg border border-[#30363d] shadow-xl p-5 mb-10 max-w-2xl mx-auto text-left"
          >
            <div className="flex mb-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <pre className="text-xs md:text-sm text-[#e6edf3] overflow-x-auto whitespace-pre font-[family-name:var(--font-geist-mono)]"><code>{codeString}</code></pre>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-[#8b949e] mb-12 max-w-2xl mx-auto font-[family-name:var(--font-geist-mono)]"
          >
            Kod tutkunlarından oluşan ekibimiz, İzmir Katip Çelebi Üniversitesi yapay zeka hackathonunda 
            yenilikçi çözümler geliştiriyor. Teknoloji stack'imiz ve projemiz ile tanışın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <a 
              href="#proje"
              className="px-6 py-2 bg-[#238636] text-white rounded-md hover:bg-[#2ea043] transition-colors flex items-center font-[family-name:var(--font-geist-mono)]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M11.4 8L6.7 3.3a1 1 0 0 1 1.4-1.4l5.6 5.6a1 1 0 0 1 0 1.4l-5.6 5.6a1 1 0 0 1-1.4-1.4L11.4 8z"/>
              </svg>
              <code>project.explore()</code>
          </a>
          <a
              href="#ekip"
              className="px-6 py-2 bg-transparent border border-[#6e7681] text-white rounded-md hover:bg-[#30363d] transition-colors flex items-center font-[family-name:var(--font-geist-mono)]"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/>
              </svg>
              <code>team.members</code>
            </a>
          </motion.div>
        </div>


      </section>

      {/* Project Section */}
      <section id="proje" className="py-20 px-4 relative border-t border-[#30363d] mt-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <div className="h-px flex-grow bg-[#30363d]"></div>
              <h2 className="text-3xl font-bold mx-4 text-[#58a6ff] font-[family-name:var(--font-geist-mono)]">
                <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">//</span> Project.details
              </h2>
              <div className="h-px flex-grow bg-[#30363d]"></div>
            </div>
            <p className="text-xl text-[#8b949e] max-w-3xl mx-auto text-center font-[family-name:var(--font-geist-mono)]">
              Yapay zeka teknolojileri ile geliştirdiğimiz inovatif çözümümüz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 bg-[#161b22] rounded-lg border border-[#30363d] p-6 shadow-lg"
        >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
                <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">project-details.md</span>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">
                <span className="text-[#58a6ff]">#</span> Yapay Zeka Çözümümüz
              </h3>
              
              <div className="text-[#8b949e] space-y-4 markdown-content font-[family-name:var(--font-geist-mono)]">
                <p>
                  Projemiz, modern yapay zeka teknolojilerini kullanarak karmaşık problemlere yenilikçi çözümler 
                  sunmayı amaçlamaktadır. Derin öğrenme modelleri ve veri analizi teknikleri ile kullanıcılara 
                  özelleştirilmiş deneyimler sunuyoruz.
                </p>
                <p>
                  İzmir Katip Çelebi Üniversitesi'nde düzenlenen bu hackathona takımımız ile katılarak, 
                  yeteneklerimizi sergilemek ve projemizi geliştirmek için çalışıyoruz.
                </p>
                
                <div className="mt-6 bg-[#0d1117] p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm font-[family-name:var(--font-geist-mono)]"><code>{`// Temel AI modelimizin özeti
const aiModel = {
  type: "transformer",
  layers: 12,
  attention_heads: 8,
  training_data: "custom_dataset",
  fine_tuning: true,
  
  inference: (input) => {
    // Projemizin çekirdek fonksiyonalitesi
    return processData(input);
  }
}`}</code></pre>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-xl font-semibold text-[#e6edf3] mb-2 font-[family-name:var(--font-geist-mono)]">Proje Hedefleri:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Veri analizinde %40 performans artışı sağlamak</li>
                    <li>Kullanıcı deneyimini optimize etmek</li>
                    <li>Gerçek zamanlı tahminleme kabiliyeti geliştirmek</li>
                    <li>Karar destek sistemlerini iyileştirmek</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-[#30363d] mb-6">
          <Image
                  src="/project-image.jpg"
                  alt="Proje Görseli"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-[#1f6feb]/80 text-xs font-mono py-1 px-2 rounded text-white font-[family-name:var(--font-geist-mono)]">AI-POWERED DASHBOARD</span>
                  <h3 className="text-xl font-bold mt-2 text-white font-[family-name:var(--font-geist-mono)]">Yapay Zeka Destekli Analiz</h3>
                  <p className="text-[#8b949e] text-sm font-[family-name:var(--font-geist-mono)]">Modern teknolojilerle veri analizi ve öngörü sistemleri</p>
                </div>
              </div>
              
              <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-4 shadow-lg">
                <h4 className="text-lg font-bold mb-3 text-[#e6edf3] flex items-center font-[family-name:var(--font-geist-mono)]">
                  <svg className="w-5 h-5 mr-2 text-[#58a6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Tech Stack
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">Python</span>
                  </div>
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">TensorFlow</span>
                  </div>
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">PyTorch</span>
                  </div>
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">React</span>
                  </div>
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">GraphQL</span>
                  </div>
                  <div className="flex items-center p-2 rounded bg-[#0d1117]">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">MongoDB</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-10 text-center text-[#e6edf3] flex items-center justify-center font-[family-name:var(--font-geist-mono)]">
              <svg className="w-6 h-6 mr-2 text-[#58a6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>Teknolojilerimiz</span>
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {techs.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-[#161b22] relative border border-[#30363d] p-6 rounded-lg shadow-lg overflow-hidden group"
                >
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-bold text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">{tech.name}</h4>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#1f6feb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />


      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Yarışmada "IKC is All You Need!" takımı olarak en iyi proje sunumunu yaparak
        birinci olmayı hedefliyoruz.
      </motion.p>


      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md bg-black/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 whitespace-nowrap">
            IKC is All You Need!
          </a>
          
          <div className="flex gap-8">
            <a href="#proje" className="text-gray-300 hover:text-white transition-colors">Proje</a>
            <a href="#ekip" className="text-gray-300 hover:text-white transition-colors">Ekip</a>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 mb-4">© 2023 IKC is All You Need! - İzmir Katip Çelebi Üniversitesi AI Hackathon Takımı</p>
          <p className="text-purple-500">
            <a href="#" className="hover:text-purple-400 transition-colors">İletişim</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
