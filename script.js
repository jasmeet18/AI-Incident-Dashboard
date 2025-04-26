let incidents = [
    { id: 1, title: "Biased Recommendation Algorithm", description: "Algorithm consistently favored certain demographics...", severity: "Medium", reported_at: "2025-03-15T10:00:00Z", expanded: false },
    { id: 2, title: "LLM Hallucination in Critical Info", description: "LLM provided incorrect safety procedure information...", severity: "High", reported_at: "2025-04-01T14:30:00Z", expanded: false },
    { id: 3, title: "Minor Data Leak via Chatbot", description: "Chatbot inadvertently exposed non-sensitive user metadata...", severity: "Low", reported_at: "2025-03-20T09:15:00Z", expanded: false },
    {
        id: 4,
        title: "Autonomous Car Navigation Error",
        description: "An autonomous vehicle misinterpreted a stop sign due to adversarial graffiti, causing a minor accident.",
        severity: "High",
        reported_at: "2025-02-10T08:45:00Z",
        expanded: false
      },
      {
        id: 5,
        title: "AI-generated Fake News Spread",
        description: "An AI system generated a convincing but false news article that went viral before detection.",
        severity: "Medium",
        reported_at: "2025-01-25T12:00:00Z",
        expanded: false
      },
      {
        id: 6,
        title: "Facial Recognition Misidentification",
        description: "An AI-based surveillance system wrongly flagged a citizen as a suspect, leading to a wrongful arrest.",
        severity: "High",
        reported_at: "2025-03-05T11:20:00Z",
        expanded: false
      },
      {
        id: 7,
        title: "Medical Diagnosis AI Misclassification",
        description: "An AI misdiagnosed a benign tumor as malignant, leading to unnecessary procedures.",
        severity: "High",
        reported_at: "2025-02-18T15:40:00Z",
        expanded: false
      },
      {
        id: 8,
        title: "Toxic Language Generation",
        description: "A chatbot deployed for customer support generated offensive replies due to training data biases.",
        severity: "Medium",
        reported_at: "2025-04-05T16:10:00Z",
        expanded: false
      },
      {
        id: 9,
        title: "Content Moderation AI Failure",
        description: "Automated content moderation incorrectly banned educational content discussing sensitive topics.",
        severity: "Low",
        reported_at: "2025-03-22T13:05:00Z",
        expanded: false
      },
      {
        id: 10,
        title: "Financial Trading Bot Anomaly",
        description: "An AI trading bot overreacted to false signals and caused a significant flash crash for a brief period.",
        severity: "High",
        reported_at: "2025-02-28T09:00:00Z",
        expanded: false
      }
      
  ];
  
  function renderIncidents() {
    const list = document.getElementById('incident-list');
    list.innerHTML = '';
  
    const filter = document.getElementById('filter').value;
    const sort = document.getElementById('sort').value;
  
    let filtered = incidents.filter(incident => filter === 'All' || incident.severity === filter);
  
    filtered.sort((a, b) => {
      if (sort === 'newest') {
        return new Date(b.reported_at) - new Date(a.reported_at);
      } else {
        return new Date(a.reported_at) - new Date(b.reported_at);
      }
    });
  
    filtered.forEach(incident => {
      const card = document.createElement('div');
      card.className = 'incident-card';
  
      const header = document.createElement('div');
      header.className = 'incident-header';
  
      const info = document.createElement('div');
      info.innerHTML = `<h3>${incident.title}</h3><p>Severity: ${incident.severity}</p><p>Reported: ${new Date(incident.reported_at).toLocaleDateString()}</p>`;
  
      const button = document.createElement('button');
      button.textContent = incident.expanded ? 'Hide Details' : 'View Details';
      button.onclick = () => {
        incident.expanded = !incident.expanded;
        renderIncidents();
      };
  
      header.appendChild(info);
      header.appendChild(button);
      card.appendChild(header);
  
      if (incident.expanded) {
        const details = document.createElement('div');
        details.className = 'details';
        details.textContent = incident.description;
        card.appendChild(details);
      }
  
      list.appendChild(card);
    });
  }
  
  function submitIncident() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const severity = document.getElementById('severity').value;
  
    if (!title || !description) {
      alert('Please fill in all fields.');
      return;
    }
  
    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
      expanded: false
    };
  
    incidents.push(newIncident);
  
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('severity').value = 'Low';
  
    renderIncidents();
  }
  
  document.getElementById('filter').addEventListener('change', renderIncidents);
  document.getElementById('sort').addEventListener('change', renderIncidents);
  
  renderIncidents();
  