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
  
  // State to manage client-side mounting
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // Use fixed code snippets instead of random ones to avoid hydration errors
  const codeSnippets = [
    'import React from "react";',
    'function HelloWorld() {',
    '  return <h1>Hello!</h1>;',
    '}',
    'export default HelloWorld;',
    'const apiCall = async () => {',
    '  const response = await fetch("/api");',
    '  return response.json();',
    '};',
    'class DataProcessor {',
    '  constructor(data) {',
    '    this.data = data;',
    '  }',
    '  process() {',
    '    return this.data.map(item => item * 2);',
    '  }',
    '}',
    'const neurons = new NeuralNetwork();',
    'neurons.train(trainingData);',
    'const prediction = neurons.predict(input);',
    'async function fetchData() {',
    '  try {',
    '    const data = await apiClient.get();',
    '    return data;',
    '  } catch (err) {',
    '    console.error(err);',
    '  }',
    '}',
    // More realistic code snippets
    'import { useState, useEffect } from "react";',
    'const [data, setData] = useState([]);',
    'useEffect(() => {',
    '  fetchData().then(setData);',
    '}, []);',
    'const handleSubmit = (e) => {',
    '  e.preventDefault();',
    '  saveData(formData);',
    '};',
    'function createModel() {',
    '  const model = tf.sequential();',
    '  model.add(tf.layers.dense({units: 1, inputShape: [1]}));',
    '  model.compile({optimizer: "sgd", loss: "meanSquaredError"});',
    '  return model;',
    '}',
    'const trainModel = async (model, xs, ys) => {',
    '  return await model.fit(xs, ys, {epochs: 250});',
    '};',
    'class NeuralNetwork {',
    '  constructor(inputNodes, hiddenNodes, outputNodes) {',
    '    this.inputNodes = inputNodes;',
    '    this.hiddenNodes = hiddenNodes;',
    '    this.outputNodes = outputNodes;',
    '    this.weightsIH = new Matrix(hiddenNodes, inputNodes);',
    '    this.weightsHO = new Matrix(outputNodes, hiddenNodes);',
    '    this.weightsIH.randomize();',
    '    this.weightsHO.randomize();',
    '  }',
    '}',
    'function preprocessData(data) {',
    '  return data.filter(item => item !== null)',
    '    .map(item => ({',
    '      ...item,',
    '      processed: true,',
    '      timestamp: new Date().toISOString()',
    '    }));',
    '}',
    'const calculateAccuracy = (predictions, actual) => {',
    '  let correct = 0;',
    '  for (let i = 0; i < predictions.length; i++) {',
    '    if (predictions[i] === actual[i]) correct++;',
    '  }',
    '  return correct / predictions.length;',
    '};',
    'export const getStaticProps = async () => {',
    '  const res = await fetch("https://api.example.com/data");',
    '  const data = await res.json();',
    '  return { props: { data } };',
    '};',
    'const handleImageUpload = async (file) => {',
    '  const formData = new FormData();',
    '  formData.append("image", file);',
    '  const response = await fetch("/api/upload", {',
    '    method: "POST",',
    '    body: formData',
    '  });',
    '  return response.json();',
    '};',
    'function backPropagation(targets, outputs, hiddens) {',
    '  const outputErrors = targets.subtract(outputs);',
    '  const hiddenErrors = this.weightsHO.transpose().multiply(outputErrors);',
    '  this.weightsHO.adjust(outputErrors, hiddens);',
    '  this.weightsIH.adjust(hiddenErrors, inputs);',
    '};',
    'type User = {',
    '  id: string;',
    '  name: string;',
    '  email: string;',
    '  isAdmin: boolean;',
    '};',
    'interface MLModel {',
    '  train(data: number[][]): void;',
    '  predict(input: number[]): number;',
    '  evaluate(testData: number[][]): Metrics;',
    '}',
    'const encryptData = (data, key) => {',
    '  return crypto.subtle.encrypt(',
    '    { name: "AES-GCM", iv: new Uint8Array(12) },',
    '    key,',
    '    new TextEncoder().encode(JSON.stringify(data))',
    '  );',
    '}',
    'const gradientDescent = (points, learningRate, iterations) => {',
    '  let m = 0, b = 0;',
    '  for (let i = 0; i < iterations; i++) {',
    '    let mGradient = 0, bGradient = 0;',
    '    for (const point of points) {',
    '      const prediction = m * point.x + b;',
    '      mGradient += -2 * point.x * (point.y - prediction);',
    '      bGradient += -2 * (point.y - prediction);',
    '    }',
    '    m -= (mGradient / points.length) * learningRate;',
    '    b -= (bGradient / points.length) * learningRate;',
    '  }',
    '  return { slope: m, intercept: b };',
    '};'
  ];
  

  const techs = [
    { name: "Derin Öğrenme", icon: "🧠", color: "from-fuchsia-600 to-purple-600" },
    { name: "Doğal Dil İşleme", icon: "💬", color: "from-purple-600 to-blue-600" },
    { name: "Bilgisayarlı Görü", icon: "👁️", color: "from-blue-600 to-cyan-600" },
    { name: "Veri Analizi", icon: "📊", color: "from-cyan-600 to-emerald-600" }
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
      <section className="relative flex items-center justify-center overflow-hidden pt-16">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/90 via-[#0d1117]/70 to-[#0d1117] z-10" />
          <div className="relative h-full w-full bg-[url('/grid.svg')] bg-center bg-repeat opacity-30" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-screen w-1/2 opacity-10">
            <pre className="text-xs text-gray leading-4 overflow-hidden font-[family-name:var(--font-geist-mono)]">
              {codeSnippets.map((snippet, i) => (
                <div key={i} className="opacity-50">
                  {snippet}
                </div>
              ))}
            </pre>
          </div>
          <div className="absolute right-0 top-0 h-screen w-1/2 opacity-10">
            <pre className="text-xs text-gray leading-4 overflow-hidden text-right font-[family-name:var(--font-geist-mono)]">
              {codeSnippets.map((snippet, i) => (
                <div key={i} className="opacity-50">
                  {snippet}
                </div>
              ))}
            </pre>
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">
          <div className="mb-10 font-bold">
            <div className="inline-block text-center">
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
            yenilikçi çözümler geliştiriyor. Teknoloji stack&apos;imiz ve projemiz ile tanışın.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
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

      {/* Team Section */}
      <TeamSection />

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
                <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">{"//"}</span> Project.details
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

              
              <div className="text-[#8b949e] space-y-4 markdown-content font-[family-name:var(--font-geist-mono)]">
              <div className="mt-6">
                  <h4 className="text-xl font-semibold text-[#e6edf3] mb-2 font-[family-name:var(--font-geist-mono)]">Amaç:</h4>
                  <p>Göğüs röntgen görüntülerinden pnömoni gibi akciğer hastalıklarını otomatik olarak tanılayabilen, kararlarını açıklayabilen ve bu çıktıları anlamlı bir klinik rapor haline getirebilen yapay zeka sistemleri geliştirmektir.</p>
                </div>
                <p>
                  Modelimizi eğitmek için <a href="https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia/data" target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline">Kaggle'daki Pnömoni Teşhisi için Göğüs Röntgeni</a> veri setini kullandık. Bu veri seti, Guangzhou Kadın ve Çocuk Sağlığı Merkezi'ndeki 1-5 yaş arası pediyatrik hastalara ait 5,863 adet Pnömoni ve Normal olarak sınıflandırılmış göğüs röntgeni (JPEG) görüntüsünden oluşmaktadır. Otomatik pnömoni tespiti için model geliştirme ve test etme amacıyla tasarlanmıştır.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              {/* New Subsection for Model Explanations */}
              <div className="mb-8 bg-[#161b22] rounded-lg border border-[#30363d] p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
                <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">model-architectures.md</span>
              </div>
                 <h4 className="text-xl font-semibold text-[#e6edf3] mb-4 font-[family-name:var(--font-geist-mono)] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#58a6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Model Mimarileri
                </h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-[#c9d1d9] mb-2 font-[family-name:var(--font-geist-mono)]">ShuffleNet V2</h5>
                  <p className="text-sm text-[#8b949e] mb-3 font-[family-name:var(--font-geist-mono)]">
                    Hesaplama açısından verimli olacak şekilde tasarlanmış, özellikle mobil cihazlar için uygun olan hafif bir CNN mimarisidir. Kanal karıştırma (channel shuffle) operasyonunu kullanır.
                  </p>
                  <div className="relative border border-[#30363d] rounded-lg overflow-hidden aspect-video bg-[#0d1117]">
                    <Image src="/shufflenet.jpeg" alt="ShuffleNet V2 Mimarisi" layout="fill" objectFit="cover" className="opacity-80" />
                    <p className="absolute bottom-1 left-2 bg-black/50 px-1 py-0.5 text-xs rounded">ShuffleNet V2</p>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#c9d1d9] mb-2 font-[family-name:var(--font-geist-mono)]">EfficientNet-B0</h5>
                   <p className="text-sm text-[#8b949e] mb-3 font-[family-name:var(--font-geist-mono)]">
                    Model ölçeklendirme (genişlik, derinlik, çözünürlük) için bileşik bir katsayı kullanarak yüksek doğruluk ve verimlilik dengesi sağlayan bir model ailesidir. B0 en temel versiyonudur.
                  </p>
                  <div className="relative border border-[#30363d] rounded-lg overflow-hidden aspect-video bg-[#0d1117]">
                    <Image src="/efficientnet.png" alt="EfficientNet-B0 Mimarisi" layout="fill" objectFit="contain" className="opacity-80" />
                    <p className="absolute bottom-1 left-2 bg-black/50 px-1 py-0.5 text-xs rounded">EfficientNet-B0</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 relative border-t border-[#30363d] mt-16">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
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
                <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">{"//"}</span> Hackathon.results
              </h2>
              <div className="h-px flex-grow bg-[#30363d]"></div>
            </div>
            <p className="text-xl text-[#8b949e] max-w-3xl mx-auto text-center font-[family-name:var(--font-geist-mono)]">
              Göğüs röntgenlerinden pnömoni analizi için geliştirdiğimiz çözümlerin sonuçları
            </p>
          </motion.div>

          {/* Task 1: Classification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-[#161b22] rounded-lg border border-[#30363d] p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
                <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">task-1.md</span>
              </div>
            <h3 className="text-2xl font-bold mb-4 text-[#e6edf3] font-[family-name:var(--font-geist-mono)] flex items-center">
              <span className="text-[#58a6ff] mr-2">1.</span> Görev: Hastalık Sınıflandırması
            </h3>
            <p className="text-[#8b949e] mb-6 font-[family-name:var(--font-geist-mono)]">
              Amaç: Göğüs röntgeni görüntülerini otomatik olarak NORMAL veya PNÖMONİ olarak sınıflandırmak. Bu görev için <code className="bg-[#0d1117] px-1 py-0.5 rounded text-sm text-amber-400">ShuffleNet V2 x1.0</code> ve <code className="bg-[#0d1117] px-1 py-0.5 rounded text-sm text-amber-400">EfficientNet-B0</code> modelleri kullanıldı. Görüntüler yeniden boyutlandırıldı, normalize edildi ve veri artırımı (örn. yatay çevirme, döndürme) uygulandı.
            </p>
              <h4 className="text-md font-semibold text-[#e6edf3] mb-2 font-[family-name:var(--font-geist-mono)]">Kullanılan Hiperparametreler:</h4>
            <div className="mb-6 bg-[#0d1117] p-4 rounded-md overflow-x-auto border border-[#30363d]">
              <pre className="text-sm font-[family-name:var(--font-geist-mono)] text-[#8b949e]"><code>{`# Hyperparameters
batch_size = 32
num_epochs = 20
learning_rate = 0.001

# Models Trained
models = [
  models.shufflenet_v2_x1_0,
  models.efficientnet_b0
]

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")`}</code></pre>
            </div>
            <h4 className="text-md font-semibold text-[#e6edf3] mb-3 font-[family-name:var(--font-geist-mono)]">Performans Metrikleri (Test Seti):</h4>
            {/* Updated Metrics Table */}
            <div className="overflow-x-auto bg-[#0d1117] rounded-lg border border-[#30363d]">
              <table className="min-w-full text-sm font-[family-name:var(--font-geist-mono)]">
                <thead className="bg-[#161b22] text-left text-[#8b949e]">
                  <tr>
                    <th className="px-4 py-2 font-semibold">Model</th>
                    <th className="px-4 py-2 font-semibold text-center">Precision</th>
                    <th className="px-4 py-2 font-semibold text-center">Recall</th>
                    <th className="px-4 py-2 font-semibold text-center">F1-Score</th>
                    <th className="px-4 py-2 font-semibold text-center">ROC-AUC</th>
                    <th className="px-4 py-2 font-semibold text-center">IOU</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#30363d]">
                  <tr className="text-[#e6edf3]">
                    <td className="px-4 py-2 font-medium">ShuffleNet V2 x1.0</td><td className="px-4 py-2 text-center text-[#58a6ff]">0.941</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">1</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.969</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.991</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.941</td>{/* Placeholder */}
                  </tr>
                  <tr className="text-[#e6edf3] bg-[#161b22]/30">
                    <td className="px-4 py-2 font-medium">EfficientNet-B0</td><td className="px-4 py-2 text-center text-[#58a6ff]">0.92</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.95</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.93</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.97</td>{/* Placeholder */}<td className="px-4 py-2 text-center text-[#58a6ff]">0.88</td>{/* Placeholder */}
                  </tr>
                </tbody>
              </table>
            </div>
             {/* Download Link for Task 1 */}
            <div className="mt-6 text-center">
              <a 
                href="/downloads/task1_classification.json" 
                download
                className="inline-flex items-center text-sm font-medium text-[#58a6ff] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#58a6ff] font-[family-name:var(--font-geist-mono)]"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                task1_classification.json
              </a>
            </div>
          </motion.div>

          {/* Task 2: Explainability (XAI) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 bg-[#161b22] rounded-lg border border-[#30363d] p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
                <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">task-2.md</span>
              </div>
            <h3 className="text-2xl font-bold mb-4 text-[#e6edf3] font-[family-name:var(--font-geist-mono)] flex items-center">
              <span className="text-[#58a6ff] mr-2">2.</span> Görev: Açıklanabilirlik Haritası (XAI)
            </h3>
            <p className="text-[#8b949e] mb-6 font-[family-name:var(--font-geist-mono)]">
              Modelimizin karar verirken odaklandığı bölgeleri gösteren <code className="bg-[#0d1117] px-1 py-0.5 rounded text-sm text-amber-400">Grad-CAM</code> ile üretilmiş açıklanabilirlik haritaları. Haritalar, orijinal görüntü üzerine bindirilerek potansiyel pnömoni bölgeleri vurgulanmıştır.
            </p>
            {/* Placeholder for XAI images - Replace with actual images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative border border-[#30363d] rounded-lg overflow-hidden aspect-square bg-[#0d1117]">
                 <Image src="/placeholder-xai-1.png" alt="Açıklanabilirlik Haritası 1" layout="fill" objectFit="contain" className="opacity-80" />
                 <p className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 text-xs rounded">NORMAL Örnek</p>
              </div>
              <div className="relative border border-[#30363d] rounded-lg overflow-hidden aspect-square bg-[#0d1117]">
                 <Image src="/placeholder-xai-2.png" alt="Açıklanabilirlik Haritası 2" layout="fill" objectFit="contain" className="opacity-80" />
                 <p className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 text-xs rounded">PNÖMONİ Örnek (Sağ Alt Lob)</p>
              </div>
            </div>
            <p className="text-xs text-[#8b949e] mt-2 text-center font-[family-name:var(--font-geist-mono)]">
              <code>{"//"} Örnek açıklanabilirlik haritaları (gerçek çıktılarla değiştirilecek)</code>
            </p>
            {/* Download Link for Task 2 */}
            <div className="mt-6 text-center space-y-2">
               <p className="text-xs text-[#8b949e] font-[family-name:var(--font-geist-mono)]">
                Görseller <code className="bg-[#0d1117] px-1 rounded text-xs text-gray-400">/downloads/task2_explainability/&lt;image&gt;_&lt;label&gt;.png</code> formatında bulunur.
               </p>
               <a 
                href="/downloads/task2_metadata.json" 
                download
                className="inline-flex items-center text-sm font-medium text-[#58a6ff] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#58a6ff] font-[family-name:var(--font-geist-mono)]"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                task2_metadata.json
              </a>
            </div>
          </motion.div>

          {/* Task 3: Clinical Report & LLM Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#161b22] rounded-lg border border-[#30363d] p-6 shadow-lg"
          >
            <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] mr-4"></div>
                <span className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]">task-3.md</span>
              </div>
            <h3 className="text-2xl font-bold mb-4 text-[#e6edf3] font-[family-name:var(--font-geist-mono)] flex items-center">
              <span className="text-[#58a6ff] mr-2">3.</span> Görev: Klinik Raporlama ve LLM Karşılaştırması
            </h3>
            <p className="text-[#8b949e] mb-6 font-[family-name:var(--font-geist-mono)]">
              Sınıflandırma ve açıklanabilirlik sonuçlarına dayanarak otomatik oluşturulan klinik mini raporlar ve bu raporların <code className="bg-[#0d1117] px-1 py-0.5 rounded text-sm text-amber-400">Gemini Pro</code> gibi bir LLM çıktısıyla karşılaştırılması.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Generated Report Example */}
              <div className="bg-[#0d1117] p-4 rounded-lg border border-[#30363d]">
                <h4 className="text-lg font-semibold text-[#e6edf3] mb-2 font-[family-name:var(--font-geist-mono)]">Örnek Otomatik Rapor</h4>
                <p className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)] mb-1"><strong className="text-[#e6edf3]">Tanı:</strong> Pnömoni bulguları saptanmıştır.</p>
                <p className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)] mb-1"><strong className="text-[#e6edf3]">Anatomik Bölge:</strong> Sağ alt lobda belirgin opasite izlenmektedir.</p>
                <p className="text-sm text-[#8b949e] font-[family-name:var(--font-geist-mono)]"><strong className="text-[#e6edf3]">Risk:</strong> Yüksek</p>
              </div>

              {/* LLM Comparison Metrics */}
              <div className="bg-[#0d1117] p-4 rounded-lg border border-[#30363d]">
                 <h4 className="text-lg font-semibold text-[#e6edf3] mb-3 font-[family-name:var(--font-geist-mono)]">LLM Karşılaştırma Skorları (Örnek)</h4>
                 <div className="space-y-2">
                   <div className="flex justify-between items-center text-sm">
                     <span className="text-[#8b949e] font-[family-name:var(--font-geist-mono)]">BLEU:</span>
                     <span className="text-[#58a6ff] font-bold font-[family-name:var(--font-geist-mono)]">0.65</span> {/* Placeholder */}
                   </div>
                   <div className="flex justify-between items-center text-sm">
                     <span className="text-[#8b949e] font-[family-name:var(--font-geist-mono)]">ROUGE-L:</span>
                     <span className="text-[#58a6ff] font-bold font-[family-name:var(--font-geist-mono)]">0.72</span> {/* Placeholder */}
                   </div>
                   <div className="flex justify-between items-center text-sm">
                     <span className="text-[#8b949e] font-[family-name:var(--font-geist-mono)]">BERTScore (F1):</span>
                     <span className="text-[#58a6ff] font-bold font-[family-name:var(--font-geist-mono)]">0.88</span> {/* Placeholder */}
                   </div>
                 </div>
              </div>
            </div>
             <p className="text-xs text-[#8b949e] mt-4 text-center font-[family-name:var(--font-geist-mono)]">
              <code>{"//"} Raporlama ve karşılaştırma metrikleri örnektir (gerçek çıktılarla değiştirilecek)</code>
            </p>
            {/* Download Link for Task 3 */}
            <div className="mt-6 text-center">
              <a 
                href="/downloads/task3_clinical_report.json" 
                download
                className="inline-flex items-center text-sm font-medium text-[#58a6ff] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#58a6ff] font-[family-name:var(--font-geist-mono)]"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                task3_clinical_report.json
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Presentation Section - Rendered only on client */}
      <section id="presentation" className="py-20 px-4 relative border-t border-[#30363d]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
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
                <span className="text-[#e6edf3] font-[family-name:var(--font-geist-mono)]">{"//"}</span> Presentation.pdf
              </h2>
              <div className="h-px flex-grow bg-[#30363d]"></div>
            </div>
             <p className="text-xl text-[#8b949e] max-w-3xl mx-auto text-center font-[family-name:var(--font-geist-mono)]">
              Proje sunumumuz
            </p>
          </motion.div>

          {/* PDF Embed - Conditional rendering */}
          {hasMounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} // Changed whileInView to animate for entry
              transition={{ duration: 0.6 }}
              className="bg-[#161b22] rounded-lg border border-[#30363d] p-2 shadow-lg overflow-hidden"
            >
              <iframe 
                src="/projectpdf.pdf" 
                className="w-full h-[70vh] md:h-[80vh] rounded"
                title="Proje Sunumu PDF"
                // Adding sandbox attribute for security, adjust as needed
                // sandbox="allow-scripts allow-same-origin"
              >
                {/* Fallback content is now less likely to cause hydration issues */}
                Tarayıcınız PDF görüntülemeyi desteklemiyor. 
                <a href="/projectpdf.pdf" className="text-[#58a6ff] hover:underline">Sunumu buradan indirebilirsiniz</a>.
              </iframe>
            </motion.div>
          )}
          {!hasMounted && (
            // Optional: Placeholder while waiting for mount
            <div className="bg-[#161b22] rounded-lg border border-[#30363d] p-2 shadow-lg h-[70vh] md:h-[80vh] flex items-center justify-center text-[#8b949e]">
              Yükleniyor...
            </div>
           ) }
        </div>
      </section>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Yarışmada &quot;IKC is All You Need!&quot; takımı olarak en iyi proje sunumunu yaparak
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
          <p className="text-gray-500 mb-4">© 2025 IKC is All You Need! - İzmir Katip Çelebi Üniversitesi AI Hackathon Takımı</p>
          <p className="text-purple-500">
            <a href="#" className="hover:text-purple-400 transition-colors">İletişim</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
