const content = {
  expertise: [
    'Distributed Systems',
    'Cloud Architecture',
    'Observability & Reliability',
    'Backend Engineering',
    'AI & Data Systems',
    'Embedded & IoT Systems'
  ],
  experience: [
    {
      title: 'Senior Engineering Manager — Angara Ecommerce Pvt. Ltd.',
      summary: [
        'Lead architecture for a global custom jewelry e-commerce platform',
        'Modernized core systems across personalization, payments, and fulfillment',
        'Improved performance and reliability for peak traffic events',
        'Mentored senior engineers and guided technical direction',
        'Worked closely with product and operations teams to deliver business outcomes'
      ],
      details: {
        'Context / Problem': 'Large global commerce platform with complex product customization and seasonal traffic spikes.',
        'Scope & Constraints': 'High availability requirements, legacy components, and integrations with payment and logistics providers.',
        'Architecture': 'Service-oriented backend separating catalog, personalization, checkout, and fulfillment domains.',
        'Key Decisions & Tradeoffs': 'Incremental modernization to reduce business risk instead of full rewrites.',
        'Implementation Details': 'Hands-on development of critical services and performance improvements.',
        'Scale / Performance Characteristics': 'Designed for high traffic during global retail events.',
        'Reliability & Observability': 'Improved monitoring, alerting, and incident response processes.',
        'Outcomes / Impact': 'Better stability, faster delivery cycles, and improved customer experience.',
        'Technologies Used': 'Modern backend stacks, cloud infrastructure, distributed services.',
        'Role & Ownership': 'Hands-on architect and technical leader.'
      }
    },
    {
      title: 'Senior Software Engineer — mavQ',
      summary: [
        'Built distributed platforms for enterprise document processing',
        'Designed ingestion pipelines, search systems, and reporting tools',
        'Implemented cloud-native deployments using Kubernetes',
        'Participated in presales technical discussions and solution design',
        'Mentored engineers and reviewed architecture decisions'
      ],
      details: {
        'Context / Problem': 'Enterprise clients needed scalable systems to manage large document volumes and workflows.',
        'Scope & Constraints': 'Varied data formats, strict reliability expectations, and customization per client.',
        'Architecture': 'Pipeline-based services for ingestion, processing, indexing, and retrieval.',
        'Key Decisions & Tradeoffs': 'Modular design to support different customer requirements.',
        'Implementation Details': 'Containerized services with infrastructure-as-code deployment.',
        'Scale / Performance Characteristics': 'Optimized for high throughput and low-latency search.',
        'Reliability & Observability': 'Comprehensive telemetry for monitoring and debugging.',
        'Outcomes / Impact': 'Delivered scalable enterprise solutions across multiple clients.',
        'Technologies Used': 'Go, Rust, Node.js, Kubernetes, cloud services.',
        'Role & Ownership': 'Senior engineer responsible for architecture and implementation.'
      }
    },
    {
      title: 'Associate Software Engineer — Impledge Technologies',
      summary: [
        'Developed full-stack applications across multiple technology stacks',
        'Delivered features for clients in India, the USA, and Canada',
        'Built APIs, frontends, and integrations',
        'Created internal tools to improve team productivity',
        'Participated in presales demos and technical proposals'
      ],
      details: {
        'Context / Problem': 'Client projects requiring rapid delivery across diverse domains.',
        'Scope & Constraints': 'Tight timelines and varying technical requirements.',
        'Architecture': 'Pragmatic service-backed web applications.',
        'Key Decisions & Tradeoffs': 'Focus on maintainability and delivery speed.',
        'Implementation Details': 'Built backend services, frontend interfaces, and integrations.',
        'Scale / Performance Characteristics': 'Optimized responsiveness for production use.',
        'Reliability & Observability': 'Debugged issues across multiple deployments.',
        'Outcomes / Impact': 'Delivered dependable solutions across numerous projects.',
        'Technologies Used': 'Backend APIs, web frameworks, databases.',
        'Role & Ownership': 'Full-stack engineer contributing across the stack.'
      }
    },
    {
      title: 'Founding Engineer — 4 startups till now',
      summary: [
        'Built and launched core product systems as an early engineering hire across four startup environments',
        'Took ownership of architecture, backend implementation, cloud setup, and release workflows from day zero',
        'Worked directly with founders and product teams to translate business direction into production-ready systems',
        'Established development standards, reliability practices, and scalable service foundations in fast-moving teams'
      ],
      details: {
        'Context / Problem':
          'Early-stage startups required rapid product delivery with limited resources and evolving business priorities.',
        'Scope & Constraints':
          'Small teams, aggressive timelines, and frequent product pivots while maintaining production stability.',
        'Architecture':
          'Pragmatic service architectures focused on clear interfaces, fast iteration, and maintainable foundations.',
        'Key Decisions & Tradeoffs':
          'Balanced speed of execution with long-term maintainability and operational reliability.',
        'Implementation Details':
          'Built core backend services, integrations, infrastructure automation, and delivery pipelines.',
        'Scale / Performance Characteristics':
          'Designed systems to scale from early usage to sustained production growth.',
        'Reliability & Observability':
          'Introduced monitoring, logging, and incident-response patterns appropriate for lean engineering teams.',
        'Outcomes / Impact':
          'Enabled faster product launches, reduced technical uncertainty, and improved engineering velocity.',
        'Technologies Used':
          'Backend stacks, cloud infrastructure, DevOps workflows, and distributed service patterns.',
        'Role & Ownership':
          'Founding-level engineer owning technical direction and execution across the stack.'
      }
    },
    {
      title: 'Founder — DownBeat · Self-employed',
      summary: [
        'Built and led a community-driven platform focused on resilience, personal growth, and peer support',
        'Managed product direction, platform delivery, and day-to-day operations as founder',
        'Designed systems for member interaction, reflection, learning, and collaboration',
        'Operated with limited resources while maintaining continuity of service',
        'Project was formally closed and all public assets were sunset'
      ],
      details: {
        'Context / Problem': 'Community members needed a safe digital space for personal growth, self-reflection, and connection.',
        'Scope & Constraints': 'Volunteer-driven effort with limited funding and no large operational team.',
        'Architecture': 'Web platform supporting community content, communication, and member engagement workflows.',
        'Key Decisions & Tradeoffs': 'Prioritized sustainability and reliability of core experience over feature expansion.',
        'Implementation Details': 'Built and maintained core platform features and supported member lifecycle operations.',
        'Scale / Performance Characteristics': 'Designed for moderate community usage and steady engagement patterns.',
        'Reliability & Observability': 'Maintained stable operation with constrained resources and practical support processes.',
        'Outcomes / Impact': 'Supported meaningful community engagement over multiple years before planned closure.',
        'Technologies Used': 'Full-stack web technologies and pragmatic cloud-hosted deployment.',
        'Role & Ownership': 'Founder and primary builder from strategy through execution.'
      }
    },
    {
      title: 'Network Engineer Trainee — Indian Oil Corporation Limited · Apprenticeship',
      summary: [
        'Developed a network monitoring tool for a private infrastructure environment',
        'Implemented detection and status checks for diverse network-connected devices',
        'Added diagnostics to indicate likely reasons for device downtime',
        'Worked in an operational setup with real constraints and mixed hardware',
        'Delivered practical monitoring support for local infrastructure awareness'
      ],
      details: {
        'Context / Problem': 'Operational teams needed visibility into status of devices across a private network.',
        'Scope & Constraints': 'Heterogeneous devices, time-bounded apprenticeship, and need for useful real-time status checks.',
        'Architecture': 'Polling-driven monitoring workflow with status aggregation and basic diagnostic logic.',
        'Key Decisions & Tradeoffs': 'Kept implementation simple and maintainable for operational usability.',
        'Implementation Details': 'Built device check routines and probable root-cause indicators for down states.',
        'Scale / Performance Characteristics': 'Scoped for facility-level network coverage and practical response times.',
        'Reliability & Observability': 'Provided actionable status reports to support quicker operational troubleshooting.',
        'Outcomes / Impact': 'Improved day-to-day visibility into network device health in the monitored environment.',
        'Technologies Used': 'Networking protocols, backend logic, and monitoring scripts.',
        'Role & Ownership': 'Primary trainee engineer for tool design and implementation.'
      }
    },
    {
      title: 'Chapter Leader — Helping Brainz',
      summary: [
        'Led chapter activities and community events for the Meerut region',
        'Coordinated volunteers and operational planning for local programs',
        'Managed event execution and participation workflows',
        'Supported outreach and growth efforts in the chapter area'
      ],
      details: {
        'Context / Problem': 'Regional chapters required local leadership to organize and run mission-aligned activities.',
        'Scope & Constraints': 'Volunteer-led coordination with varying participant availability and resource limits.',
        'Architecture': 'Operational process framework for event planning, communication, and execution tracking.',
        'Key Decisions & Tradeoffs': 'Focused on repeatable, low-friction coordination processes over complex tooling.',
        'Implementation Details': 'Managed schedules, role assignments, and execution checklists for chapter events.',
        'Scale / Performance Characteristics': 'Designed for region-level engagement and recurring event cadence.',
        'Reliability & Observability': 'Maintained consistency through clear ownership and communication loops.',
        'Outcomes / Impact': 'Sustained local chapter participation and execution quality over tenure.',
        'Technologies Used': 'Collaboration tools, basic data management systems, and web coordination workflows.',
        'Role & Ownership': 'Chapter leader responsible for regional execution.'
      }
    },
    {
      title: 'Team Leader — Website and Database Management — Helping Brainz',
      summary: [
        'Led website and database management for organization-wide operations',
        'Maintained content and member data across teams and departments',
        'Improved data organization for registered volunteers and staff',
        'Coordinated updates across stakeholders to keep records accurate'
      ],
      details: {
        'Context / Problem': 'Organization needed consistent handling of website content and team-member records.',
        'Scope & Constraints': 'Cross-team data coordination with evolving content and volunteer records.',
        'Architecture': 'Centralized content and structured database workflows for operational data management.',
        'Key Decisions & Tradeoffs': 'Prioritized data consistency and operational clarity over tool complexity.',
        'Implementation Details': 'Managed website updates, member records, and data hygiene routines.',
        'Scale / Performance Characteristics': 'Handled multi-team operational data for ongoing internal processes.',
        'Reliability & Observability': 'Maintained dependable record updates and reduced inconsistencies.',
        'Outcomes / Impact': 'Improved continuity and trust in internal information used by teams.',
        'Technologies Used': 'Web CMS workflows, relational data handling, and process documentation.',
        'Role & Ownership': 'Team lead for website and database management responsibilities.'
      }
    },
    {
      title: 'Intern — Rootsapp',
      summary: [
        'Worked as a Python developer on deep learning and VR-focused experimentation',
        'Contributed to early-stage R&D efforts on emerging product concepts',
        'Built and tested prototype components for proof-of-concept delivery'
      ],
      details: {
        'Context / Problem': 'The internship focused on building novel experiences using deep learning and VR ideas.',
        'Scope & Constraints': 'Early-stage experimentation with limited time and evolving requirements.',
        'Architecture': 'Prototype-oriented architecture combining data processing and interactive modules.',
        'Key Decisions & Tradeoffs': 'Favored rapid experimentation and iteration over production hardening.',
        'Implementation Details': 'Developed Python-based prototype components and integration experiments.',
        'Scale / Performance Characteristics': 'Targeted proof-of-concept behavior rather than production-scale throughput.',
        'Reliability & Observability': 'Validated prototype behavior through iterative testing and refinement.',
        'Outcomes / Impact': 'Contributed to exploratory technical direction for innovation initiatives.',
        'Technologies Used': 'Python, deep learning libraries, and early-stage VR tooling.',
        'Role & Ownership': 'Intern contributor focused on prototype implementation.'
      }
    },
    {
      title: 'Android Developer Trainee — Indian Oil Corporation Limited',
      summary: [
        'Recreated an internal Android contact-management application for Barauni refinery',
        'Implemented practical mobile workflows for employee data lookup and usage',
        'Delivered a structured trainee project with direct organizational utility'
      ],
      details: {
        'Context / Problem': 'Existing internal employee contact management workflow needed a rebuilt mobile implementation.',
        'Scope & Constraints': 'Short training period and requirement to recreate functional utility for internal users.',
        'Architecture': 'Android client application structured around employee contact records and lookup flows.',
        'Key Decisions & Tradeoffs': 'Focused on usability and correctness of core features within training timeline.',
        'Implementation Details': 'Built screens and data flow for employee directory access and management behavior.',
        'Scale / Performance Characteristics': 'Designed for controlled organizational usage at refinery level.',
        'Reliability & Observability': 'Ensured dependable app behavior for daily internal use scenarios.',
        'Outcomes / Impact': 'Delivered a functional trainee implementation aligned with business need.',
        'Technologies Used': 'Android development stack, Java, and mobile application workflows.',
        'Role & Ownership': 'Trainee developer responsible for core implementation.'
      }
    }
  ],
  systems: [
    {
      title: 'Human Protocol',
      summary:
        'Privacy-preserving protocol that verifies human web requests and deters bots without CAPTCHAs or tracking.',
      tags: ['Protocol', 'Security', 'Backend'],
      details: {
        Summary:
          'Protocol designed to distinguish humans from automated traffic while preserving privacy and minimizing user friction.',
        'Why It Was Built':
          'Modern web platforms face large-scale automated abuse. Existing defenses often rely on invasive tracking or disruptive CAPTCHAs.',
        'Key Capabilities': 'Human verification, adaptive difficulty, stateless validation, privacy-first design.',
        Technologies: 'Go, Rust, HTTP infrastructure, cryptographic primitives.',
        'Outcome / What It Demonstrates':
          'Protocol design ability, security engineering, adversarial thinking.'
      }
    },
    {
      title: 'Observability Agent',
      summary: 'Kubernetes-native telemetry and management agent for real-time cluster visibility.',
      tags: ['Kubernetes', 'Telemetry', 'Reliability'],
      details: {
        Summary: 'Cluster-wide observability agent collecting metrics, logs, and operational data.',
        'Why It Was Built':
          'Distributed systems require deep visibility to maintain reliability and performance.',
        'Key Capabilities': 'Telemetry collection, orchestration hooks, monitoring integration.',
        Technologies: 'Rust, Go, Python, Kubernetes.',
        'Outcome / What It Demonstrates':
          'Reliability engineering and platform-level operational expertise.'
      }
    },
    {
      title: 'Persistent Cache DB',
      summary: 'High-performance persistent key-value store capable of extremely high throughput.',
      tags: ['Storage', 'Systems', 'Performance'],
      details: {
        Summary: 'Custom database optimized for low latency using memory-mapped storage.',
        'Why It Was Built':
          'Real-time systems often need faster access patterns than traditional databases provide.',
        'Key Capabilities': 'Memory-mapped I/O, custom serialization, crash-safe persistence.',
        Technologies: 'Systems programming, file I/O, binary storage.',
        'Outcome / What It Demonstrates':
          'Low-level performance engineering and storage design skills.'
      }
    },
    {
      title: 'Rusty OS',
      summary: 'Custom operating system built from scratch in Rust.',
      tags: ['Rust', 'OS', 'Kernel'],
      details: {
        Summary: 'Experimental OS demonstrating kernel-level programming and hardware control.',
        'Why It Was Built':
          'To explore memory management, interrupts, and low-level system behavior.',
        'Key Capabilities': 'Custom kernel, bootloader, memory management, hardware interfaces.',
        Technologies: 'Rust, bare-metal programming.',
        'Outcome / What It Demonstrates': 'Deep systems knowledge from hardware to OS level.'
      }
    },
    {
      title: 'ESP32 AI Robot',
      summary: 'Autonomous robotics platform with remote control and AI-driven behavior.',
      tags: ['ESP32', 'IoT', 'Embedded'],
      details: {
        Summary: 'Edge robotics system capable of navigation, alerts, and remote interaction.',
        'Why It Was Built':
          'Robotics systems must operate under strict compute and power constraints.',
        'Key Capabilities': 'Sensor integration, control loops, wireless communication.',
        Technologies: 'ESP32 firmware, embedded programming.',
        'Outcome / What It Demonstrates': 'Cross-domain engineering across hardware and software.'
      }
    },
    {
      title: 'File Drop',
      summary: 'Decentralized file storage solution using blockchain and IPFS.',
      tags: ['Blockchain', 'IPFS', 'Security'],
      details: {
        Summary: 'Serverless file sharing system leveraging distributed storage.',
        'Why It Was Built':
          'Centralized storage introduces single points of failure and trust concerns.',
        'Key Capabilities': 'Secure file storage, decentralized access control.',
        Technologies: 'Ethereum smart contracts, IPFS.',
        'Outcome / What It Demonstrates':
          'Understanding of decentralized systems and blockchain integration.'
      }
    },
    {
      title: 'Lazy Language',
      summary: 'Custom scripting language interpreter implemented in Python.',
      tags: ['Language', 'Interpreter', 'Compilers'],
      details: {
        Summary: 'Interpreter for a custom language designed to explore parsing and execution models.',
        'Why It Was Built':
          'Language implementation provides insight into compilers and runtime systems.',
        'Key Capabilities': 'Lexing, parsing, execution engine.',
        Technologies: 'Python.',
        'Outcome / What It Demonstrates':
          'Understanding of programming language design and runtime behavior.'
      }
    },
    {
      title: 'FlowX',
      summary: 'No-code workflow platform for building business processes.',
      tags: ['Platform', 'No-Code', 'Automation'],
      details: {
        Summary: 'Drag-and-drop system for constructing workflows with real-time execution.',
        'Why It Was Built':
          'Businesses need flexible automation without heavy engineering effort.',
        'Key Capabilities': 'Workflow orchestration, visual editor, execution engine.',
        Technologies: 'Full-stack web platform.',
        'Outcome / What It Demonstrates': 'Product thinking and platform engineering ability.'
      }
    }
  ],
  capabilities: [
    [
      'Distributed Systems',
      'Design and operation of services that remain reliable despite failures, scaling challenges, and network issues.'
    ],
    [
      'Cloud Architecture',
      'Building infrastructure that balances reliability, cost, and operational simplicity across cloud platforms.'
    ],
    [
      'Observability & Reliability',
      'Implementing monitoring and diagnostics to detect problems early and resolve incidents quickly.'
    ],
    [
      'Backend Engineering',
      'Developing performance-critical services with clear interfaces and maintainable design.'
    ],
    ['AI & Data Systems', 'Building pipelines for data processing, search, and intelligent workflows.'],
    [
      'Embedded & IoT Systems',
      'Integrating hardware devices with backend platforms and cloud services.'
    ]
  ],
  leadership: [
    ['Hands-on architecture', 'Define system structure while implementing critical components personally.'],
    ['Reliability-first mindset', 'Design systems assuming failures will occur.'],
    ['Performance awareness', 'Measure before optimizing.'],
    ['Cost-conscious engineering', 'Balance technical decisions with business impact.'],
    ['Mentoring and knowledge sharing', 'Improve team effectiveness through reviews and guidance.']
  ],
  testimonials: [
    {
      title: 'Vice President',
      company: 'BlackRock',
      text: 'Arpit has an exceptional drive to learn and a unique approach to leadership. He consistently looks for opportunities to make meaningful impact and stands out for his talent and initiative. I am confident he will achieve great things in his career.'
    },
    {
      title: 'Founder',
      company: 'Datazip',
      text: 'Passionate about building meaningful software solutions with a positive attitude and strong work ethic. A constructive contributor to any team.'
    },
    {
      title: 'Senior Software Engineer',
      company: 'American Express',
      text: 'Arpit is a top-tier developer who consistently delivers high-quality outcomes. He combines strong technical depth with accountability and humility, and he actively establishes best practices that elevate the entire team.'
    },
    {
      title: 'Senior Technical Lead',
      company: 'Coforge',
      text: 'Accountable, dedicated, and highly passionate about engineering. Arpit quickly masters new technologies and consistently contributes as a reliable team player.'
    },
    {
      title: 'Senior Full Stack Developer',
      company: 'Adobe',
      text: 'A passionate programmer who continuously expands his skills and delivers meaningful contributions. I am confident he will make a strong impact in the industry.'
    },
    {
      title: 'Senior JavaScript Engineer',
      company: 'Independent / Consulting',
      text: 'Arpit takes full ownership of delivery and consistently produces high-quality solutions. He is calm under pressure, communicates clearly, and contributes valuable technical insights.'
    },
    {
      title: 'Software Engineer',
      company: 'Impledge Technologies',
      text: 'Highly skilled across multiple technologies with strong problem-solving ability and attention to detail. Arpit is collaborative, dependable, and always willing to help others succeed.'
    },
    {
      title: 'Software Engineer',
      company: 'Cloud & AI Engineering',
      text: 'Extremely productive, forward-thinking, and solution-oriented. Arpit combines deep technical knowledge with strong execution and best-practice development.'
    },
    {
      title: 'Software Engineer',
      company: 'Software Development',
      text: 'Versatile engineer who continuously learns new technologies while strengthening existing skills. Reliable, responsible, and effective in both technical and non-technical tasks.'
    },
    {
      title: 'DevOps Engineer',
      company: 'Cloud Infrastructure',
      text: 'Highly talented across multiple technologies and always eager to learn. Organized, dependable, and someone you can confidently trust with complex tasks.'
    },
    {
      title: 'Software Engineer',
      company: 'IBM',
      text: 'Motivated and forward-thinking engineer with strong adaptability and a positive approach to work.'
    },
    {
      title: 'Data Analyst',
      company: 'Data Analytics',
      text: 'Hardworking problem solver with broad technical knowledge and strong commitment to assigned responsibilities.'
    }
  ],
  principles: [
    'Prefer simple designs over complex ones',
    'Make system behavior explicit and predictable',
    'Measure performance before making changes',
    'Automate repetitive tasks',
    'Plan for failure scenarios early',
    'Optimize for long-term maintainability'
  ],
  technologies: {
    Languages: 'Go, Rust, Java, Python, TypeScript, JavaScript, C#',
    Frameworks: 'Node.js, NestJS, Spring, Django, React, Angular',
    'Cloud & DevOps': 'AWS, GCP, Azure, Kubernetes, Docker, Terraform, CI/CD',
    Data: 'PostgreSQL, MongoDB, Redis'
  }
};

const byId = (id) => document.getElementById(id);
const splitRoleTitle = (title) => {
  const parts = title.split('—');
  if (parts.length < 2) return { role: title, company: '' };
  return { role: parts[0].trim(), company: parts.slice(1).join('—').trim() };
};

const techIcons = {
  Languages: '<i class="fa-solid fa-code"></i>',
  Frameworks: '<i class="fa-solid fa-cubes"></i>',
  'Cloud & DevOps': '<i class="fa-solid fa-cloud"></i>',
  Data: '<i class="fa-solid fa-database"></i>'
};

function renderTags() {
  byId('heroTags').innerHTML = content.expertise.map((item) => `<span class="tag">${item}</span>`).join('');
}

function renderCards() {
  const makeSummaryList = (summary) => `<ul class="list">${summary.map((s) => `<li>${s}</li>`).join('')}</ul>`;
  const primaryExperience = content.experience.slice(0, 3);
  const otherExperience = content.experience.slice(3);

  byId('experienceGrid').innerHTML = primaryExperience
    .map((roleItem, index) => {
      const { role, company } = splitRoleTitle(roleItem.title);
      return `
      <article class="card">
        <h3 class="role-title">${role}</h3>
        <p class="role-company">${company}</p>
        ${makeSummaryList(roleItem.summary)}
        <button class="btn" data-type="experience" data-index="${index}">View Details</button>
      </article>`;
    })
    .join('');

  const otherExperienceGrid = byId('otherExperienceGrid');
  if (otherExperienceGrid) {
    otherExperienceGrid.innerHTML = otherExperience
      .map((roleItem, index) => {
        const { role, company } = splitRoleTitle(roleItem.title);
        return `
        <article class="card other-exp-item">
          <h3 class="role-title">${role}</h3>
          <p class="role-company">${company}</p>
          <button class="btn" data-type="other-experience" data-index="${index}">View Details</button>
        </article>`;
      })
      .join('');
  }

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

  const principlesList = byId('principlesList');
  if (principlesList) {
    principlesList.innerHTML = content.principles.map((p) => `<li>${p}</li>`).join('');
  }

  byId('techGrid').innerHTML = Object.entries(content.technologies)
    .map(
      ([k, v]) =>
        `<article class="card"><h3 class="stack-heading"><span class="stack-icon" aria-hidden="true">${techIcons[k] || '::'}</span>${k}</h3><p class="body-copy">${v}</p></article>`
    )
    .join('');

  const testimonialsGrid = byId('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = content.testimonials
      .map(
        (item) => `
        <article class="card testimonial-card">
          <p class="body-copy">${item.text}</p>
          <div class="testimonial-footer">
            <p class="testimonial-meta">${item.title}</p>
            <p class="testimonial-meta">${item.company}</p>
          </div>
        </article>`
      )
      .join('');
  }
}

function openDetail(type, index) {
  const item =
    type === 'system'
      ? content.systems[index]
      : type === 'other-experience'
        ? content.experience.slice(3)[index]
        : content.experience[index];
  const panel = byId('detailPanel');
  const detailTitleHtml =
    type === 'experience'
      ? (() => {
          const { role, company } = splitRoleTitle(item.title);
          return `<h2 id="detailTitle">${role}</h2><p class="detail-company">${company}</p>`;
        })()
      : `<h2 id="detailTitle">${item.title}</h2>`;

  const html = `
    <div class="detail-chrome" aria-hidden="true">
      <div class="panel-controls"><span></span><span></span><span></span></div>
      <p class="panel-label">module.details</p>
    </div>
    ${detailTitleHtml}
    ${Object.entries(item.details)
      .map(([k, v]) => `<section class="detail-section"><h4>${k}</h4><p class="body-copy">${v}</p></section>`)
      .join('')}
  `;
  byId('detailBody').innerHTML = html;
  panel.showModal();
}

function initInteractions() {
  document.addEventListener('click', (event) => {
    const btn = event.target.closest('button');
    if (btn && btn.dataset.type) {
      openDetail(btn.dataset.type, Number(btn.dataset.index));
    }

    const mobileMenuBtn = byId('mobileMenuBtn');
    const mobileViewMenu = byId('mobileViewMenu');
    if (mobileMenuBtn && mobileViewMenu) {
      if (event.target.closest('#mobileMenuBtn')) {
        const open = mobileViewMenu.classList.toggle('open');
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
        return;
      }
      if (!event.target.closest('#mobileViewMenu')) {
        mobileViewMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  const panel = byId('detailPanel');
  panel.addEventListener('click', (event) => {
    if (event.target === panel) panel.close();
  });
}

function initViewNavigation() {
  const tabs = Array.from(document.querySelectorAll('.view-tab, .mobile-view-item'));
  const sections = Array.from(document.querySelectorAll('.view-section'));
  const sectionMap = new Map(sections.map((section) => [section.id, section]));
  let currentIndex = 0;
  let wheelLock = false;

  const setActiveView = (id) => {
    const normalizedId = id === 'overview' ? 'home' : id;
    const targetId = sectionMap.has(normalizedId) ? normalizedId : 'home';
    currentIndex = sections.findIndex((section) => section.id === targetId);
    sections.forEach((section) => section.classList.toggle('active', section.id === targetId));
    tabs.forEach((tab) => tab.setAttribute('aria-pressed', String(tab.dataset.viewTarget === targetId)));
    const targetSection = sectionMap.get(targetId);
    if (targetSection) targetSection.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setActiveViewByIndex = (index) => {
    if (index < 0 || index >= sections.length || index === currentIndex) return;
    setActiveView(sections[index].id);
  };

  const onBoundaryScroll = (event) => {
    if (wheelLock) return;
    if (byId('detailPanel')?.open) return;

    const activeSection = sections[currentIndex];
    if (!activeSection || event.currentTarget !== activeSection) return;

    const delta = event.deltaY;
    if (Math.abs(delta) < 18) return;

    const atTop = activeSection.scrollTop <= 0;
    const atBottom =
      activeSection.scrollTop + activeSection.clientHeight >= activeSection.scrollHeight - 1;

    if (delta > 0 && atBottom) {
      event.preventDefault();
      wheelLock = true;
      setActiveViewByIndex(currentIndex + 1);
      setTimeout(() => {
        wheelLock = false;
      }, 260);
    } else if (delta < 0 && atTop) {
      event.preventDefault();
      wheelLock = true;
      setActiveViewByIndex(currentIndex - 1);
      setTimeout(() => {
        wheelLock = false;
      }, 260);
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setActiveView(tab.dataset.viewTarget);
      const mobileViewMenu = byId('mobileViewMenu');
      const mobileMenuBtn = byId('mobileMenuBtn');
      if (mobileViewMenu && mobileMenuBtn) {
        mobileViewMenu.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  sections.forEach((section) => {
    section.addEventListener('wheel', onBoundaryScroll, { passive: false });
  });

  setActiveView(window.location.hash.replace('#', '') || 'home');
}

renderTags();
renderCards();
initInteractions();
initViewNavigation();
