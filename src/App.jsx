import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Shield, Terminal, Lock, Zap, TrendingUp, Eye, ChevronRight, ArrowUpRight, Cpu, Binary, Mail, Linkedin, Github, MapPin, Briefcase, Award, Code, Download, FileText } from 'lucide-react';

export default function AnkitPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const articles = [
    {
      id: 1,
      title: "My Room Turns Red Every Time a Company Gets Hacked",
      excerpt: "Building a real-time security incident monitoring system that transforms my room into a visual threat intelligence dashboard using IoT and threat feeds. This project demonstrates practical integration of security monitoring with physical indicators.",
      category: "IoT Security",
      date: "Nov 14, 2025",
      readTime: "4 min",
      type: "iot",
      views: "2.5K",
      featured: true,
      link: "https://medium.com/@ankit.kr351104/my-room-turns-red-every-time-a-company-gets-hacked-e18c48b5bb47"
    },
    {
      id: 2,
      title: "Ransomware Alerts on Your Phone",
      excerpt: "Developed a Python-based monitoring utility that tracks global ransomware activities and delivers real-time alerts via push notifications for rapid threat awareness.",
      category: "Threat Intelligence",
      date: "Sep 21, 2025",
      readTime: "4 min",
      type: "tool",
      views: "1.8K",
      link: "https://medium.com/@ankit.kr351104/ransomware-alerts-on-your-phone-715fda002057"
    },
    {
      id: 3,
      title: "Reverse Engineering Alexa: Adding Custom Skills",
      excerpt: "Reverse-engineered Amazon Alexa's skill framework and integrated custom security capabilities enabling network reconnaissance via voice commands.",
      category: "Reverse Engineering",
      date: "Nov 26, 2024",
      readTime: "6 min",
      type: "research",
      views: "3.1K",
      link: "https://medium.com/@ankit.kr351104/reverse-engineering-alexa-adding-custom-skills-adee9ffca311"
    }
  ];

  const experience = {
    company: "PwC India",
    role: "Digital Forensics and Incident Response Consultant",
    period: "January 2024 – Present",
    location: "Kolkata, West Bengal",
    highlights: [
      "Led DFIR investigations achieving ~80% reduction in similar incidents",
      "Analyzed 150+ GB of logs during critical web application defacement",
      "Reverse-engineered malware families including Dragonforce ransomware",
      "Developed Python automation scripts adopted by 10+ team members",
      "Conducted threat hunting using CrowdStrike, Microsoft Defender, Chronicle SIEM"
    ]
  };

  const skills = {
    "Languages": ["Python", "Java", "Kotlin", "JavaScript", "SQL", "KQL", "PowerShell", "Bash"],
    "Forensics": ["EnCase", "FTK", "KAPE", "MemProcFS", "OSForensics", "Arsenal Image Mounter"],
    "Security": ["Burp Suite", "Nmap", "Wireshark", "CrowdStrike", "Microsoft Defender", "Chronicle SIEM"],
    "Malware Analysis": ["Ghidra", "IDA", "x64dbg", "Frida", "PE Studio", "Sysinternals Suite"],
    "Cloud": ["Azure", "AWS", "GCP"]
  };

  const certifications = [
    { name: "Computer Hacking and Forensic Investigator (CHFI)", org: "EC-Council", year: "2025" },
    { name: "ISO 27001: Lead Implementer", org: "Intertek", year: "2025" }
  ];

  const categories = ['All', 'IoT Security', 'Threat Intelligence', 'Reverse Engineering'];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(post => post.category === selectedCategory);

  const featuredArticle = articles.find(post => post.featured);

  const typeIcons = {
    'iot': '🔌',
    'tool': '🛠️',
    'research': '🔬'
  };

  const typeLabels = {
    'iot': 'IoT Project',
    'tool': 'Tool Development',
    'research': 'Technical Deep-Dive'
  };

  const resumeLink = "https://drive.google.com/uc?export=download&id=1Fg1vNvL045AVBWPXDwLyU16-hnn59ivp";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Simplified background - single pulsing orb */}
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Static grid pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="#home" className="flex items-center space-x-2 group">
                <Shield className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ANKIT KUMAR
                </span>
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-400 hover:text-white transition-all relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                </a>
                <a href="#experience" className="text-gray-400 hover:text-white transition-all relative group">
                  Experience
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                </a>
                <a href="#articles" className="text-gray-400 hover:text-white transition-all relative group">
                  Articles
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                </a>
                <a href="#skills" className="text-gray-400 hover:text-white transition-all relative group">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-all relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/ankit351104" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-all">
                <Github className="w-6 h-6 text-gray-400 hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-487174208/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition-all">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white" />
              </a>
              <button 
                className="md:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#articles" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Articles</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Terminal className="w-6 h-6 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm">root@ankit-dfir:~$</span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                Digital Forensics &
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Incident Response
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              DFIR Consultant at PwC India | Malware Analyst | Threat Researcher | Security Researcher
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:ankit.kr351104@gmail.com" className="hover:text-cyan-400 transition-colors">
                  ankit.kr351104@gmail.com
                </a>
              </div>
            </div>
            
            {/* Download Resume Button */}
            <a 
              href={resumeLink}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
              <Briefcase className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold mb-1">2+ Years</div>
              <div className="text-sm text-gray-400">in DFIR</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
              <Shield className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-gray-400">Cases Led</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
              <Terminal className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold mb-1">80%</div>
              <div className="text-sm text-gray-400">Incident Reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
              <Award className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold mb-1">CHFI & CEH</div>
              <div className="text-sm text-gray-400">Active Certifications</div>
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Professional Experience
            </h2>
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all">
                <div className="relative p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
                      <p className="text-gray-300">{experience.company} • {experience.period}</p>
                      <p className="text-sm text-gray-400 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div id="articles" className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-white">
                Featured Article
              </h2>
              <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer" className="block relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all">
                  <div className="relative p-8 sm:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-4 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-sm text-red-400 font-medium">
                        🔥 FEATURED
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400">
                        {typeIcons[featuredArticle.type]} {typeLabels[featuredArticle.type]}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs text-purple-400">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-white">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <span>{featuredArticle.date}</span>
                        <span>{featuredArticle.readTime} read</span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {featuredArticle.views}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all">
                        <span>Read on Medium</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            All Articles
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((post, idx) => (
              <a 
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer block"
                style={{animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`}}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-xs font-medium text-cyan-400">
                        {typeIcons[post.type]} {typeLabels[post.type]}
                      </span>
                      <Cpu className="w-5 h-5 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs text-purple-400 mb-4">
                      {post.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read on Medium
                      </span>
                      <ChevronRight className="w-5 h-5 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div 
                key={category}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
                style={{animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both`}}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs hover:bg-cyan-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all flex items-center space-x-4"
                >
                  <Award className="w-12 h-12 text-purple-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.org} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-12 text-center">
              <Lock className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-white">
                Let's Connect
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Interested in digital forensics, incident response, or security research? Let's collaborate!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:ankit.kr351104@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ankit-kumar-487174208/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/ankit351104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all flex items-center justify-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-6">📍 Based in Kolkata, West Bengal, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ANKIT KUMAR
              </span>
            </div>
            <p className="text-sm text-gray-400 text-center">
              Digital Forensics & Incident Response Consultant
            </p>
            <div className="flex items-center space-x-6">
              <a href="mailto:ankit.kr351104@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ankit-kumar-487174208/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ankit351104" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="pt-8 border-t border-white/10 text-sm text-gray-500 text-center">
              <p>© 2025 Ankit Kumar. All rights reserved.</p>
              <p className="font-mono text-xs text-cyan-400/50 mt-2">root@ankit-dfir:~$ whoami</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}