import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Download, Github, Linkedin } from 'lucide-react'
import { Section, Card, CardHeader, CardTitle, CardContent, Pill } from './components/ui'

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a href="#home" className="font-semibold tracking-tight">Rahul Reddy Aleti</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Senior Software Developer
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Backend-focused engineer specializing in scalable microservices, REST/gRPC APIs, and cloud-native deployments with Docker, Kubernetes, and AWS.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:rahulaleti.softwareengineer@gmail.com" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-slate-900 text-white hover:opacity-90">
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a href="tel:+13022556159" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-slate-50">
                <Phone className="h-4 w-4" /> +1 (302) 255-6159
              </a>
              <a href="https://raleti6.github.io/Rahul-Portfolio/Rahul_Software_Engineer.docx" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-slate-50">
                <Download className="h-4 w-4" /> Download Resume (DOCX)
              </a>
              <a href="https://github.com/raleti6" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-slate-50">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 hover:bg-slate-50">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About">
        <Card>
          <CardContent>
            <p className="leading-relaxed">
              I design and deliver resilient backend systems. My recent work spans architecting microservices on Kubernetes, building REST and gRPC APIs in Go and Java Spring Boot, and automating CI/CD for reliable releases on AWS. I love untangling performance bottlenecks, raising reliability, and empowering teams with solid DevOps practices.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader><CardTitle>Languages</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Java','Go','Python','C#/.NET','C++','C','TypeScript','JavaScript'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Frameworks & APIs</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Spring Boot','REST','gRPC','Node.js','Express','React','Redux','GraphQL','Flutter'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Cloud & DevOps</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['AWS','Azure','GCP','Docker','Kubernetes','CI/CD','GitLab CI','Jenkins','Maven','Gradle'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Databases</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['PostgreSQL','MySQL','MongoDB','DynamoDB','SQL'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Platforms & Servers</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['Linux','Windows','Tomcat','WebLogic','JBoss','IBM WebSphere'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Concepts</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {['System Design','Algorithms','Data Structures','Microservices','Microfrontends','Infrastructure as Code','Agile'].map(s => <Pill key={s}>{s}</Pill>)}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="grid gap-4">
          <Card>
            <CardHeader><CardTitle>CVS Health — Senior Software Developer <span className="block text-sm font-normal text-slate-500">Jan 2024 – Present · Remote, USA</span></CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Built and tested an infotainment module within Agile sprints, improving user satisfaction.</li>
                <li>Architected microservices as Kubernetes clusters using Docker images for scale and ops efficiency.</li>
                <li>Implemented backend features and APIs (HTTP & gRPC) with Go and Java Spring Boot.</li>
                <li>Automated deployments on AWS EC2; strengthened reliability and release cadence.</li>
                <li>Created CI/CD pipelines to cut manual effort and speed integration/testing.</li>
                <li>Led a team of 5 developers to deliver on roadmap goals.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>VISA — Software Developer <span className="block text-sm font-normal text-slate-500">Jun 2023 – Jan 2024 · Texas, USA</span></CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Developed Java applications (Spring Boot, Gradle, MySQL) deployed via Kubernetes & Docker.</li>
                <li>Reduced clinical test data pipeline processing time by <strong>30%</strong> with partitioning strategies.</li>
                <li>Owned code reviews and Agile ceremonies to improve quality and throughput.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Tech Mahindra — Software Engineer <span className="block text-sm font-normal text-slate-500">Feb 2019 – May 2022</span></CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Debugged and resolved critical defects to stabilize high-traffic applications.</li>
                <li>Automated processes with Python; applied ML to boost workflow efficiency.</li>
                <li>Optimized PostgreSQL with indexing and partitioning for performance and scale.</li>
                <li>Identified and removed bottlenecks; mentored developers to align with objectives.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="education" title="Education & Certifications">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader><CardTitle>University of Central Missouri</CardTitle></CardHeader>
            <CardContent><p>Master's, Computer Science</p></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Certifications</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Pill>Microsoft Azure Data Engineer — Associate</Pill>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card>
          <CardContent>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a className="hover:underline" href="mailto:rahulaleti.softwareengineer@gmail.com">rahulaleti.softwareengineer@gmail.com</a>
              </div>
              <div className="hidden sm:block h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a className="hover:underline" href="tel:+13022556159">+1 (302) 255-6159</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Rahul Reddy Aleti · Built with React & Tailwind
      </footer>
    </div>
  )
}
