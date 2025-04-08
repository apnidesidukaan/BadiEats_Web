"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
const serviceDetails = {
  ciso: {
    title: "CISO as a Service (CISOaaS)",
    content: `Our CISOaaS offers expert leadership in information security strategy, governance, and compliance. Ideal for SMEs looking to mature their security posture without hiring a full-time executive.`,
  },
  isaas: {
    title: "Information Security as a Service (ISAaaS)",
    content: `With ISAaaS, we provide end-to-end monitoring, threat detection, compliance management, and data security across your digital infrastructure.`,
  },
  caas: {
    title: "Consultant as a Service (CaaS)",
    content: `Access a pool of seasoned IT consultants for project-specific or ongoing needs. Our CaaS model ensures expert guidance in architecture, security, compliance, and digital transformation — without the overhead of full-time hires.`,
  },
  cloud: {
    title: "Cloud Platform & Infrastructure",
    content: `Build, scale, and manage your business on robust cloud platforms. From infrastructure setup to multi-cloud management, we help you deploy reliable, secure, and cost-effective cloud environments tailored to your needs.`,
  },
  security: {
    title: "IT Security & Data Protection",
    content: `Safeguard your digital assets with our advanced IT security services. We offer end-to-end protection — including vulnerability assessments, firewall setup, intrusion prevention, encryption, and incident response.`,
  },
  managed: {
    title: "Managed IT Services",
    content: `Offload your IT operations to our expert team. We provide 24/7 monitoring, support, patching, backup, and performance tuning, so your systems stay secure and efficient — without the hassle of managing it all in-house.`,
  },
  development: {
    title: "Development Services",
    content: `From concept to launch, we offer full-stack development for web, mobile, and enterprise solutions. Our agile teams specialize in building scalable, secure, and user-friendly digital products that align with your business goals.`,
  },
};


export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-center text-lg text-destructive">
        🚫 Service not found.
      </div>
    );
  }

  return (
    <div className="bg-white py-16 px-6 md:px-20 mt-4">


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-12 bg-background-section mt-4  rounded-2xl shadow-md"
      >
        <h1 className="text-4xl font-extrabold text-primary-text mb-4 leading-snug">
          {service.title}
        </h1>

        <p className="text-lg text-primary-text leading-relaxed mb-8">
          {service.content}
        </p>

        <div className="mt-6 ">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-md"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
}
