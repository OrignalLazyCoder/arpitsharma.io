const content = {
  expertise: [
    'Distributed Systems','Cloud Architecture','Microservices','Kubernetes','AWS / GCP','Observability','Systems Programming','Applied AI','IoT'
  ],
  experience: [
    {
      title: 'Senior Engineering Manager — Angara Ecommerce Pvt. Ltd.',
      summary: [
        'Architected and re-engineered core commerce modules including personalization engines, product customization workflows, payment pipelines, and fulfillment systems.',
        'Designed scalable backend services supporting global traffic.',
        'Delivered production implementations validating architectural decisions.'
      ],
      details: {
        'Context / Problem': 'Global e-commerce platform with complex product configurations and fulfillment requirements.',
        'Scope & Constraints': 'Architecture of core commerce subsystems, technical leadership, production incident handling, and performance optimization under peak seasonal traffic.',
        'Architecture': 'Service-oriented commerce stack with modular domains for personalization, checkout, payment, and fulfillment.',
        'Key Decisions & Tradeoffs': 'Re-architected legacy modules incrementally to reduce migration risk while improving scalability and maintainability.',
        'Implementation Details': 'Introduced coding standards, improved CI/CD flow, and shipped hands-on production changes in critical paths.',
        'Scale / Performance Characteristics': 'Optimized backend performance for global traffic and fragile high-load pathways.',
        'Reliability & Observability': 'Improved operational predictability with stronger engineering standards and better production handling.',
        'Outcomes / Impact': 'Improved system reliability, maintainability, and delivery predictability.',
        'Technologies Used': 'Go, Node.js, distributed microservices, cloud infrastructure.',
        'Role & Ownership': 'Hands-on architect and technical lead across multiple initiatives.'
      }
    },
    {
      title: 'Senior Software Engineer — mavQ',
      summary: [
        'Designed distributed platforms for document processing and enterprise workflows.',
        'Built ingestion pipelines and search systems.',
        'Implemented AI-driven search and reporting platforms.'
      ],
      details: {
        'Context / Problem': 'Enterprise platforms handling large document volumes and complex workflows.',
        'Scope & Constraints': 'System design, cloud infrastructure deployment, observability implementation, and pre-sales technical evaluation.',
        'Architecture': 'Distributed microservices with ingestion, indexing/search, reporting, and workflow orchestration services.',
        'Key Decisions & Tradeoffs': 'Balanced flexibility and operational simplicity through container orchestration and infrastructure-as-code patterns.',
        'Implementation Details': 'Implemented services in Go, Rust, and Node.js with Kubernetes deployments and GitOps workflows.',
        'Scale / Performance Characteristics': 'Enabled reliable processing of large datasets and enterprise document workloads.',
        'Reliability & Observability': 'Set up telemetry with OpenTelemetry-compatible monitoring stack.',
        'Outcomes / Impact': 'Enabled scalable processing and reliable enterprise operations.',
        'Technologies Used': 'Go, Rust, Node.js, Kubernetes, Terraform, AWS, GCP.',
        'Role & Ownership': 'Senior engineer for architecture, platform implementation, and infrastructure strategy.'
      }
    },
    {
      title: 'Associate Software Engineer — Impledge Technologies',
      summary: ['Developed full-stack applications across backend and frontend stacks.'],
      details: {
        'Context / Problem': 'Product and client applications requiring fast delivery across web stacks.',
        'Scope & Constraints': 'API development, frontend implementation, database integration, and performance tuning.',
        'Architecture': 'Conventional service-backed web architecture with focus on pragmatic delivery.',
        'Key Decisions & Tradeoffs': 'Prioritized maintainability and straightforward delivery over over-engineered abstractions.',
        'Implementation Details': 'Built backend APIs, integrated data layers, and improved response performance.',
        'Scale / Performance Characteristics': 'Optimized app responsiveness for production usage.',
        'Reliability & Observability': 'Applied debugging and stabilization practices across releases.',
        'Outcomes / Impact': 'Delivered dependable full-stack features across multiple projects.',
        'Technologies Used': 'Backend APIs, web frontend stacks, relational/non-relational databases.',
        'Role & Ownership': 'Full-stack software engineer in delivery-focused teams.'
      }
    }
  ],
  systems: [
    {
      title: 'Human Protocol',
      summary: 'Privacy-preserving human verification protocol designed to reduce automated abuse without CAPTCHAs or invasive tracking.',
      tags: ['Go', 'Rust', 'HTTP Infrastructure'],
      details: {
        'Context / Problem': 'Increasing automated abuse from scraping, spam, fraud, and scripted account creation.',
        'Scope & Constraints': 'Discourage automation while minimizing friction for legitimate users and preserving privacy.',
        'Architecture': 'Challenge-response proof mechanism with server verification, adaptive difficulty, and mostly stateless validation.',
        'Key Decisions & Tradeoffs': 'No persistent identifiers, privacy-first operation, and compatibility with existing HTTP flows.',
        'Implementation Details': 'Lightweight client proof generation with tunable difficulty and horizontally scalable verification service.',
        'Scale / Performance Characteristics': 'Designed for web-scale abuse resistance with low integration overhead.',
        'Reliability & Observability': 'Replay resistance, anomaly monitoring, and graceful degradation favoring user access.',
        'Outcomes / Impact': 'Demonstrates protocol design depth, adversarial thinking, and security-focused architecture.',
        'Technologies Used': 'Go, Rust, HTTP infrastructure, cryptographic primitives.',
        'Role & Ownership': 'Sole designer and implementer.'
      }
    },
    {
      title: 'Persistent Cache Database',
      summary: 'Custom high-performance key-value store using memory-mapped I/O.',
      tags: ['Systems', 'Storage'],
      details: {
        'Context / Problem': 'Caching and real-time systems often need lower-latency access than traditional databases.',
        'Scope & Constraints': 'Deliver high throughput and durability while keeping latency predictable.',
        'Architecture': 'Memory-mapped file store, custom binary serialization, append-friendly layout, optimized index path.',
        'Key Decisions & Tradeoffs': 'Favor sequential disk access and low allocation patterns over broad query features.',
        'Implementation Details': 'mmap-backed storage, low-contention access patterns, compaction logic, crash-safe writes.',
        'Scale / Performance Characteristics': 'Designed for high operations per second with minimal CPU overhead.',
        'Reliability & Observability': 'Durability and recovery features with predictable write/read paths.',
        'Outcomes / Impact': 'Shows systems-level performance engineering and storage internals competence.',
        'Technologies Used': 'Systems programming, mmap, binary storage structures.',
        'Role & Ownership': 'End-to-end architect and implementer.'
      }
    },
    {
      title: 'Rusty OS',
      summary: 'Operating system built from scratch in Rust.',
      tags: ['Rust', 'OS', 'Kernel'],
      details: {
        'Context / Problem': 'Operating-system development reveals low-level interactions across hardware and software.',
        'Scope & Constraints': 'Build a minimal but functional OS while managing memory safety constraints.',
        'Architecture': 'Bootloader + kernel initialization + memory management + interrupt handling + basic device interaction.',
        'Key Decisions & Tradeoffs': 'Managed unsafe boundaries explicitly and kept abstractions minimal.',
        'Implementation Details': 'Implemented boot sequence, memory setup, interrupt routines, and hardware interfacing.',
        'Scale / Performance Characteristics': 'Low-level execution focused on stability and deterministic behavior.',
        'Reliability & Observability': 'Extensive debugging around boot stability and hardware behavior.',
        'Outcomes / Impact': 'Demonstrates full-stack systems understanding from kernel to hardware.',
        'Technologies Used': 'Rust, bootloader and kernel internals, hardware interfaces.',
        'Role & Ownership': 'Primary engineer across architecture and implementation.'
      }
    },
    {
      title: 'Observability Agent',
      summary: 'Kubernetes-native telemetry agent.',
      tags: ['Kubernetes', 'Telemetry'],
      details: {
        'Context / Problem': 'Distributed platforms require real-time operational visibility to maintain reliability.',
        'Scope & Constraints': 'Collect telemetry with minimal overhead across cluster nodes.',
        'Architecture': 'DaemonSet deployment with metrics/logs/traces collection and backend integration.',
        'Key Decisions & Tradeoffs': 'Emphasized resource-efficient collection and configurable aggregation.',
        'Implementation Details': 'Agent pipeline for telemetry export with controllable alerting hooks.',
        'Scale / Performance Characteristics': 'Designed to operate across node fleets with predictable runtime cost.',
        'Reliability & Observability': 'Improved incident response through consistent cluster-wide visibility.',
        'Outcomes / Impact': 'Improved operational confidence and diagnosis speed.',
        'Technologies Used': 'Kubernetes, telemetry pipelines, monitoring backends.',
        'Role & Ownership': 'Architect and implementer for collection strategy and runtime behavior.'
      }
    },
    {
      title: 'ESP32 AI Robot',
      summary: 'Autonomous robotics platform integrating sensors and remote control.',
      tags: ['ESP32', 'IoT', 'Edge'],
      details: {
        'Context / Problem': 'Edge robotics platforms must balance compute, power, and connectivity constraints.',
        'Scope & Constraints': 'Build a reliable autonomous control platform with remote operation.',
        'Architecture': 'Sensor integration + microcontroller control loops + communication channel + power management.',
        'Key Decisions & Tradeoffs': 'Chose resilient control logic and fault-aware behavior over feature complexity.',
        'Implementation Details': 'Implemented real-time loops, remote command handling, and external notification integration.',
        'Scale / Performance Characteristics': 'Optimized for constrained edge hardware and unstable environments.',
        'Reliability & Observability': 'Fault handling and operational safeguards for unstable conditions.',
        'Outcomes / Impact': 'Demonstrates cross-domain engineering across hardware, firmware, and software.',
        'Technologies Used': 'ESP32 firmware, sensors, communication protocols, control software.',
        'Role & Ownership': 'System designer and primary builder.'
      }
    }
  ],
  capabilities: [
    ['Distributed Systems', 'Design and operation of resilient distributed services with explicit consistency, failure, and scaling models.'],
    ['Cloud Architecture', 'Multi-cloud infrastructure design focused on reliability, operational simplicity, and cost efficiency.'],
    ['Observability & Reliability', 'Instrumentation, diagnostics, and incident-focused operating models for production systems.'],
    ['Backend Engineering', 'Performance-aware backend platform development with clear interfaces and maintainable service boundaries.'],
    ['AI & Data Systems', 'Design of data and AI-enabled pipelines for enterprise workflows, search, and reporting contexts.'],
    ['Embedded & IoT Systems', 'Integration across firmware, hardware interfaces, and backend services for constrained devices.']
  ],
  leadership: [
    ['Hands-on architecture', 'Define target architecture while implementing critical paths to preserve design intent.'],
    ['Reliability-first mindset', 'Design systems around failure modes, rollback paths, and operational clarity.'],
    ['Performance awareness', 'Use profiling and measured baselines before optimization decisions.'],
    ['Cost-conscious engineering', 'Optimize infrastructure and design choices against measurable business outcomes.'],
    ['Knowledge sharing and mentoring', 'Build engineering leverage through standards, reviews, and technical mentoring.']
  ],
  principles: [
    'Simplicity over unnecessary complexity',
    'Explicit design over implicit behavior',
    'Measurement before optimization',
    'Automation where possible',
    'Design for failure scenarios',
    'Maintainability as a primary goal'
  ],
  technologies: {
    Languages: 'Go, Rust, Java, Python, TypeScript, JavaScript, C#',
    Frameworks: 'Node.js, NestJS, Spring, Django, React, Angular',
    'Cloud & DevOps': 'AWS, GCP, Azure, Kubernetes, Docker, Terraform, CI/CD',
    Data: 'PostgreSQL, MongoDB, Redis'
  }
};

const byId = (id) => document.getElementById(id);

function renderTags() {
  byId('heroTags').innerHTML = content.expertise.map((item) => `<span class="tag">${item}</span>`).join('');
}

function renderCards() {
  const makeSummaryList = (summary) => `<ul class="list">${summary.map((s) => `<li>${s}</li>`).join('')}</ul>`;
  byId('experienceGrid').innerHTML = content.experience
    .map(
      (role, index) => `
      <article class="card">
        <h3>${role.title}</h3>
        ${makeSummaryList(role.summary)}
        <button class="btn" data-type="experience" data-index="${index}">View Details</button>
      </article>`
    )
    .join('');

  byId('systemsGrid').innerHTML = content.systems
    .map(
      (system, index) => `
      <article class="card">
        <h3>${system.title}</h3>
        <p class="body-copy">${system.summary}</p>
        <div class="tags">${system.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        <button class="btn" data-type="system" data-index="${index}">View Details</button>
      </article>`
    )
    .join('');

  byId('capabilitiesGrid').innerHTML = content.capabilities
    .map(([title, desc]) => `<article class="card"><h3>${title}</h3><p class="body-copy">${desc}</p></article>`)
    .join('');

  byId('leadershipGrid').innerHTML = content.leadership
    .map(([title, desc]) => `<article class="card"><h3>${title}</h3><p class="body-copy">${desc}</p></article>`)
    .join('');

  byId('principlesList').innerHTML = content.principles.map((p) => `<li>${p}</li>`).join('');

  byId('techGrid').innerHTML = Object.entries(content.technologies)
    .map(([k, v]) => `<article class="card"><h3>${k}</h3><p class="body-copy">${v}</p></article>`)
    .join('');
}

function openDetail(type, index) {
  const item = type === 'system' ? content.systems[index] : content.experience[index];
  const panel = byId('detailPanel');
  const html = `
    <h2 id="detailTitle">${item.title}</h2>
    ${Object.entries(item.details)
      .map(
        ([k, v]) => `<section class="detail-section"><h4>${k}</h4><p class="body-copy">${v}</p></section>`
      )
      .join('')}
  `;
  byId('detailBody').innerHTML = html;
  panel.showModal();
}

function initInteractions() {
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (!btn) return;

    if (btn.dataset.type) {
      openDetail(btn.dataset.type, Number(btn.dataset.index));
    }

    if (btn.dataset.action === 'resume') {
      byId('resumeModal').showModal();
    }
  });

  byId('closeDetail').addEventListener('click', () => byId('detailPanel').close());
  byId('closeResume').addEventListener('click', () => byId('resumeModal').close());

  const menuBtn = byId('menuBtn');
  const navLinks = byId('navLinks');
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  const palette = byId('palette');
  const paletteInput = byId('paletteInput');
  const paletteList = byId('paletteList');
  const destinations = [
    ['Overview', '#overview'],
    ['Experience', '#experience'],
    ['Architecture & Systems', '#systems'],
    ['Capabilities', '#capabilities'],
    ['Leadership & Approach', '#leadership'],
    ['Education', '#education'],
    ['Contact', '#contact']
  ];

  const renderPalette = (query = '') => {
    const list = destinations.filter(([label]) => label.toLowerCase().includes(query.toLowerCase()));
    paletteList.innerHTML = list
      .map(([label, href]) => `<li><button data-href="${href}">${label}</button></li>`)
      .join('');
  };

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.hidden = false;
      renderPalette('');
      paletteInput.value = '';
      paletteInput.focus();
    } else if (e.key === 'Escape' && !palette.hidden) {
      palette.hidden = true;
    }
  });

  paletteInput.addEventListener('input', () => renderPalette(paletteInput.value));
  paletteList.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-href]');
    if (!button) return;
    document.querySelector(button.dataset.href).scrollIntoView({ behavior: 'smooth' });
    palette.hidden = true;
  });

  palette.addEventListener('click', (e) => {
    if (e.target === palette) palette.hidden = true;
  });
}

renderTags();
renderCards();
initInteractions();
