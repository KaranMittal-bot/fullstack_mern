import { useState } from "react";

const roles = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    emoji: "🤖",
    color: "#00D4FF",
    accent: "#003D4D",
    tagline: "Builds products using AI/LLMs",
    focus: "Application Layer",
    description:
      "Integrates pre-built AI models (like GPT, Claude, Gemini) into real-world products. They don't train models — they use them. Think prompt engineering, RAG pipelines, AI agents, and chatbots.",
    dayToDay: [
      "Building LLM-powered apps & chatbots",
      "Prompt engineering & optimization",
      "RAG (Retrieval Augmented Generation)",
      "AI agent orchestration (LangChain, AutoGen)",
      "API integrations (OpenAI, Anthropic, etc.)",
    ],
    skills: [
      { name: "Python", level: 90 },
      { name: "LLM APIs", level: 95 },
      { name: "Vector DBs", level: 80 },
      { name: "LangChain/LlamaIndex", level: 85 },
      { name: "Backend Dev", level: 75 },
      { name: "Prompt Engineering", level: 95 },
    ],
    roadmap: [
      "Python fundamentals",
      "REST APIs & web basics",
      "OpenAI / Anthropic API",
      "Prompt engineering mastery",
      "LangChain / LlamaIndex",
      "Vector databases (Pinecone, Weaviate)",
      "RAG pipelines",
      "AI Agents & multi-agent systems",
      "Deployment (FastAPI, Docker)",
    ],
    salary: "$120k–$200k",
    demand: "🔥 Extremely High",
  },
  {
    id: "ml-engineer",
    title: "ML Engineer",
    emoji: "🧠",
    color: "#A855F7",
    accent: "#2D1B4E",
    tagline: "Trains & deploys ML models",
    focus: "Model Layer",
    description:
      "Bridges data science and production engineering. They take ML models from notebooks to scalable, production-ready systems. Deep expertise in training pipelines, model optimization, and MLOps.",
    dayToDay: [
      "Training & fine-tuning ML models",
      "Feature engineering pipelines",
      "Model deployment & serving",
      "A/B testing models in production",
      "MLOps: monitoring, versioning, retraining",
    ],
    skills: [
      { name: "Python", level: 95 },
      { name: "PyTorch/TensorFlow", level: 90 },
      { name: "MLOps Tools", level: 85 },
      { name: "Statistics/Math", level: 88 },
      { name: "Data Engineering", level: 70 },
      { name: "Cloud Platforms", level: 75 },
    ],
    roadmap: [
      "Python + NumPy + Pandas",
      "Statistics & Linear Algebra",
      "Scikit-learn (classical ML)",
      "PyTorch or TensorFlow",
      "Model training pipelines",
      "MLflow / Weights & Biases",
      "Docker & Kubernetes basics",
      "Cloud ML (SageMaker, Vertex AI)",
      "Fine-tuning LLMs (LoRA, PEFT)",
    ],
    salary: "$130k–$210k",
    demand: "🔥 Very High",
  },
  {
    id: "cloud-infra",
    title: "Cloud/AI Infrastructure",
    emoji: "☁️",
    color: "#F59E0B",
    accent: "#3D2B00",
    tagline: "Scales AI systems in the cloud",
    focus: "Infrastructure Layer",
    description:
      "Designs and maintains the compute, storage, and networking infrastructure that AI systems run on. Specializes in GPU clusters, distributed training, Kubernetes, and keeping AI pipelines fast and cost-efficient.",
    dayToDay: [
      "Managing GPU clusters (A100s, H100s)",
      "Kubernetes orchestration for ML workloads",
      "Cloud cost optimization",
      "CI/CD pipelines for ML",
      "Distributed training infrastructure",
    ],
    skills: [
      { name: "Kubernetes/Docker", level: 95 },
      { name: "AWS/GCP/Azure", level: 90 },
      { name: "Terraform/IaC", level: 88 },
      { name: "Networking", level: 80 },
      { name: "GPU/CUDA basics", level: 70 },
      { name: "Linux/DevOps", level: 92 },
    ],
    roadmap: [
      "Linux fundamentals",
      "Networking basics",
      "Docker & containers",
      "Kubernetes (CKA cert)",
      "AWS / GCP / Azure",
      "Terraform (Infrastructure as Code)",
      "CI/CD pipelines",
      "GPU infrastructure basics",
      "Distributed systems (Ray, Spark)",
    ],
    salary: "$125k–$200k",
    demand: "⚡ High",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    emoji: "🔧",
    color: "#10B981",
    accent: "#052E1C",
    tagline: "Builds data pipelines & warehouses",
    focus: "Data Layer",
    description:
      "Ensures clean, reliable, and accessible data flows across the organization. Without data engineers, ML models and AI apps have no fuel. They build the 'plumbing' that makes data-driven decisions possible.",
    dayToDay: [
      "Building ETL/ELT pipelines",
      "Managing data warehouses",
      "Data quality & governance",
      "Streaming data (Kafka, Flink)",
      "Optimizing SQL & query performance",
    ],
    skills: [
      { name: "SQL (Advanced)", level: 95 },
      { name: "Python", level: 88 },
      { name: "Spark/Hadoop", level: 82 },
      { name: "Airflow/dbt", level: 85 },
      { name: "Cloud Storage", level: 80 },
      { name: "Kafka/Streaming", level: 75 },
    ],
    roadmap: [
      "SQL — intermediate to advanced",
      "Python + Pandas",
      "ETL concepts",
      "Apache Airflow",
      "dbt (data build tool)",
      "Apache Spark",
      "Cloud data warehouses (BigQuery, Snowflake, Redshift)",
      "Kafka (streaming data)",
      "Data modeling best practices",
    ],
    salary: "$110k–$180k",
    demand: "✅ Steady High",
  },
  {
    id: "product-engineer",
    title: "AI Product Engineer",
    emoji: "🚀",
    color: "#F97316",
    accent: "#3D1A00",
    tagline: "Builds full AI-powered products",
    focus: "Product Layer",
    description:
      "A generalist who combines software engineering with AI to ship entire products. They handle frontend, backend, AI integration, and user experience. The 'full-stack AI' developer who can take an idea from zero to product.",
    dayToDay: [
      "Full-stack development (React + Node/Python)",
      "Integrating AI features into UX",
      "Rapid prototyping & shipping",
      "User research & product thinking",
      "System design for AI products",
    ],
    skills: [
      { name: "Frontend (React)", level: 85 },
      { name: "Backend APIs", level: 88 },
      { name: "AI Integration", level: 82 },
      { name: "System Design", level: 78 },
      { name: "Product Thinking", level: 88 },
      { name: "Databases", level: 80 },
    ],
    roadmap: [
      "HTML/CSS/JavaScript",
      "React (frontend framework)",
      "Node.js or Python backend",
      "REST APIs & databases",
      "AI APIs (OpenAI, Anthropic)",
      "Authentication & security",
      "UX/UI fundamentals",
      "Deployment (Vercel, Railway, AWS)",
      "Product management basics",
    ],
    salary: "$115k–$190k",
    demand: "🔥 Very High",
  },
  {
    id: "ai-researcher",
    title: "AI Research Engineer",
    emoji: "🔬",
    color: "#EC4899",
    accent: "#3D0020",
    tagline: "Advances the science of AI",
    focus: "Research Layer",
    description:
      "Works at the cutting edge of AI, publishing papers and developing new architectures, training techniques, and algorithms. Found at places like OpenAI, DeepMind, Google Brain, and top universities. Requires heavy math.",
    dayToDay: [
      "Publishing research papers",
      "Experimenting with new architectures",
      "Implementing papers from scratch",
      "Large-scale training experiments",
      "Collaborating with academic community",
    ],
    skills: [
      { name: "Deep Math (LA, Calc)", level: 95 },
      { name: "PyTorch (expert)", level: 95 },
      { name: "Research Methodology", level: 90 },
      { name: "CUDA/GPU programming", level: 80 },
      { name: "Literature Review", level: 88 },
      { name: "Scientific Writing", level: 85 },
    ],
    roadmap: [
      "Linear Algebra (deep)",
      "Calculus & Optimization",
      "Probability & Statistics",
      "Python + PyTorch (expert level)",
      "Deep Learning theory (Goodfellow's book)",
      "Reading & implementing papers (ArXiv)",
      "Transformers from scratch",
      "CUDA & GPU programming",
      "MS/PhD (usually required)",
    ],
    salary: "$150k–$300k+",
    demand: "🎯 Selective High",
  },
];

export default function AIRolesGuide() {
  const [selected, setSelected] = useState(roles[0]);
  const [tab, setTab] = useState("overview");

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#0A0A0F",
        minHeight: "100vh",
        color: "#E8E8F0",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #12121E 100%)",
          borderBottom: "1px solid #1E1E2E",
          padding: "28px 32px 20px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: 12, color: "#6B6B8A", letterSpacing: "0.2em", marginBottom: 6, textTransform: "uppercase" }}>
          Career Navigation
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: 700,
            background: "linear-gradient(90deg, #ffffff 0%, #8888AA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AI Engineering Roles — Decoded
        </h1>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", minHeight: "calc(100vh - 80px)" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "clamp(200px, 22%, 260px)",
            borderRight: "1px solid #1E1E2E",
            padding: "20px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => { setSelected(role); setTab("overview"); }}
              style={{
                background: selected.id === role.id
                  ? `linear-gradient(135deg, ${role.color}18, ${role.color}08)`
                  : "transparent",
                border: selected.id === role.id
                  ? `1px solid ${role.color}50`
                  : "1px solid transparent",
                borderRadius: 10,
                padding: "10px 14px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ fontSize: 20 }}>{role.emoji}</span>
              <div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: selected.id === role.id ? role.color : "#C8C8D8",
                  lineHeight: 1.2,
                }}>
                  {role.title}
                </div>
                <div style={{ fontSize: 11, color: "#555570", marginTop: 2 }}>
                  {role.focus}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "28px 32px", maxWidth: 780 }}>
          {/* Role Header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${selected.color}15, ${selected.color}05)`,
              border: `1px solid ${selected.color}30`,
              borderRadius: 16,
              padding: "24px 28px",
              marginBottom: 24,
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${selected.color}20`,
                  border: `1px solid ${selected.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  flexShrink: 0,
                }}
              >
                {selected.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: selected.color, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 4 }}>
                  {selected.focus}
                </div>
                <h2 style={{ margin: "0 0 6px", fontSize: 24, fontWeight: 700, color: "#ffffff" }}>
                  {selected.title}
                </h2>
                <p style={{ margin: 0, fontSize: 14, color: "#9090B0", fontStyle: "italic" }}>
                  "{selected.tagline}"
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "#555570", marginBottom: 4 }}>Avg Salary (US)</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: selected.color }}>
                  {selected.salary}
                </div>
                <div style={{ fontSize: 12, color: "#7070A0", marginTop: 6 }}>{selected.demand}</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid #1E1E2E", paddingBottom: 0 }}>
            {["overview", "skills", "roadmap"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "8px 18px",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: tab === t ? 600 : 400,
                  color: tab === t ? selected.color : "#6B6B8A",
                  borderBottom: tab === t ? `2px solid ${selected.color}` : "2px solid transparent",
                  textTransform: "capitalize",
                  transition: "all 0.2s",
                  marginBottom: -1,
                }}
              >
                {t === "overview" ? "📋 Overview" : t === "skills" ? "💡 Skills" : "🗺️ Roadmap"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === "overview" && (
            <div>
              <p style={{ fontSize: 15, color: "#B0B0CC", lineHeight: 1.7, marginBottom: 24 }}>
                {selected.description}
              </p>
              <div>
                <h3 style={{ fontSize: 13, color: "#6B6B8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                  Day-to-Day Work
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {selected.dayToDay.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: "#12121E",
                        border: "1px solid #1E1E2E",
                        borderRadius: 8,
                        padding: "10px 14px",
                      }}
                    >
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: selected.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: "#C0C0D8" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "skills" && (
            <div>
              <h3 style={{ fontSize: 13, color: "#6B6B8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>
                Key Skills to Master
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {selected.skills.map((skill, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 13, color: "#C8C8D8", fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontSize: 12, color: "#6B6B8A" }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 6, background: "#1E1E2E", borderRadius: 3, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${selected.color}80, ${selected.color})`,
                          borderRadius: 3,
                          transition: "width 0.6s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "roadmap" && (
            <div>
              <h3 style={{ fontSize: 13, color: "#6B6B8A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>
                Learning Roadmap — Step by Step
              </h3>
              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 8,
                    bottom: 8,
                    width: 2,
                    background: `linear-gradient(to bottom, ${selected.color}, ${selected.color}10)`,
                    borderRadius: 2,
                  }}
                />
                {selected.roadmap.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 1,
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: i === 0 ? selected.color : "#12121E",
                        border: `2px solid ${selected.color}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                        color: i === 0 ? "#000" : selected.color,
                        fontWeight: 700,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      style={{
                        background: "#12121E",
                        border: `1px solid ${i === 0 ? selected.color + "50" : "#1E1E2E"}`,
                        borderRadius: 8,
                        padding: "10px 14px",
                        width: "100%",
                        fontSize: 14,
                        color: i === 0 ? selected.color : "#B0B0CC",
                        fontWeight: i === 0 ? 600 : 400,
                      }}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer comparison strip */}
      <div
        style={{
          borderTop: "1px solid #1E1E2E",
          padding: "16px 32px",
          background: "#080810",
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 12, color: "#444460", marginRight: 8 }}>Quick compare:</span>
        {roles.map((r) => (
          <div
            key={r.id}
            style={{
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 20,
              background: `${r.color}15`,
              border: `1px solid ${r.color}30`,
              color: r.color,
              cursor: "pointer",
            }}
            onClick={() => { setSelected(r); setTab("overview"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {r.emoji} {r.title.split(" ")[0]}
          </div>
        ))}
      </div>
    </div>
  );
}