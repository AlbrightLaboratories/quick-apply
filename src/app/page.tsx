"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const jobBoards = [
  { name: "Indeed", status: "Planned" },
  { name: "Glassdoor", status: "Planned" },
  { name: "USA Jobs", status: "Planned" },
  { name: "LinkedIn", status: "Planned" },
  { name: "ZipRecruiter", status: "Planned" },
  { name: "Monster", status: "Planned" },
];

const features = [
  {
    title: "Resume Parser",
    description: "Automatically extracts your information from uploaded resumes",
    icon: "📄",
  },
  {
    title: "Job Aggregator",
    description: "Pulls thousands of listings from all major job boards",
    icon: "🔍",
  },
  {
    title: "Smart Matching",
    description: "Suggests jobs based on your skills and experience",
    icon: "🎯",
  },
  {
    title: "Bulk Apply",
    description: "Apply to multiple positions simultaneously",
    icon: "⚡",
  },
  {
    title: "Application Tracker",
    description: "Monitor the status of all your submissions",
    icon: "📊",
  },
  {
    title: "Cover Letter Generator",
    description: "Create tailored cover letters for each application",
    icon: "✍️",
  },
];

const steps = [
  { step: 1, title: "Upload Your Resume", description: "Drop in your resume (PDF, Word, or plain text)" },
  { step: 2, title: "We Parse Your Details", description: "Our system extracts your skills, experience, and contact info" },
  { step: 3, title: "Browse Aggregated Jobs", description: "Search openings pulled from all major job boards" },
  { step: 4, title: "One-Click Apply", description: "Select jobs and apply instantly using your stored profile" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <span className="text-2xl font-bold text-[#2D2D2D]">
              Quick<span className="gold-text">Apply</span>
            </span>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8"
          >
            <a href="#features" className="text-[#6C757D] hover:text-[#D4AF37]">Features</a>
            <a href="#how-it-works" className="text-[#6C757D] hover:text-[#D4AF37]">How It Works</a>
            <a href="#job-boards" className="text-[#6C757D] hover:text-[#D4AF37]">Job Boards</a>
            <button className="gold-gradient text-white px-6 py-2 rounded-full font-medium hover:shadow-lg">
              Get Started
            </button>
          </motion.nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-[#F8F9FA] text-[#D4AF37] font-medium text-sm border border-[#D4AF37]/20">
                100% Free
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-[#2D2D2D] mb-6 leading-tight"
            >
              Upload Once,{" "}
              <span className="gold-text">Apply Everywhere</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-[#6C757D] mb-8 max-w-2xl mx-auto"
            >
              Stop wasting hours on repetitive applications. Quick Apply lets you
              apply to dozens of jobs across all major platforms with just one click.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transform hover:-translate-y-1">
                Upload Your Resume
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#D4AF37] hover:text-white">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "15-30", label: "Minutes saved per application" },
              { value: "6+", label: "Job boards integrated" },
              { value: "100%", label: "Free, no hidden fees" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gold-text mb-2">{stat.value}</div>
                <div className="text-[#6C757D]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              How It <span className="gold-text">Works</span>
            </h2>
            <p className="text-[#6C757D] text-lg max-w-2xl mx-auto">
              Four simple steps to revolutionize your job search
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm gold-border hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{item.title}</h3>
                  <p className="text-[#6C757D]">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#D4AF37]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              Powerful <span className="gold-text">Features</span>
            </h2>
            <p className="text-[#6C757D] text-lg max-w-2xl mx-auto">
              Everything you need to streamline your job search
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8F9FA] rounded-2xl p-6 gold-border hover:shadow-lg hover:bg-white"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2D2D2D] mb-2">{feature.title}</h3>
                <p className="text-[#6C757D]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Boards */}
      <section id="job-boards" className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">
              Supported <span className="gold-text">Job Boards</span>
            </h2>
            <p className="text-[#6C757D] text-lg max-w-2xl mx-auto">
              Apply across all major platforms from one place
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jobBoards.map((board, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 text-center gold-border hover:shadow-md"
              >
                <div className="font-semibold text-[#2D2D2D]">{board.name}</div>
                <div className="text-xs text-[#D4AF37] mt-1">{board.status}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-gradient rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Job Search?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of job seekers who save hours every week with Quick Apply
            </p>
            <button className="bg-white text-[#D4AF37] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started - It&apos;s Free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
                  <span className="text-white font-bold">Q</span>
                </div>
                <span className="text-xl font-bold">QuickApply</span>
              </div>
              <p className="text-gray-400 text-sm">
                Upload once, apply everywhere. The fast, free way to find your next job.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#D4AF37]">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37]">Features</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">How It Works</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#D4AF37]">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37]">About Us</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Careers</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#D4AF37]">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#D4AF37]">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Quick Apply. Built by Albright Laboratories.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Privacy First
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
