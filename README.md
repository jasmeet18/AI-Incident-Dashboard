AI Safety Incident Dashboard

This project is a simple, responsive AI Safety Incident Dashboard built using HTML, CSS, and React.js (via CDN). It allows users to view, filter, sort, and report AI-related safety incidents dynamically.

🚀 How to Run the Project Locally
Clone or download the repository to your local machine.
Make sure you have VS Code or any text editor installed.
Open the project folder.
Open the index.html file and right-click → "Open with Live Server"
(or click "Go Live" if using the Live Server extension).
✅ Direct URL to access locally: http://127.0.0.1:5500/ 

Note: No need to install Node.js, npm, or any extra dependencies. Everything is handled through online CDNs.

🛠️ Technology Stack
Language: HTML, CSS, JavaScript
Framework: React.js (loaded via CDN)
Other: No build tools required (no npm, no webpack)

✨ Design Decisions & Challenges
*Used React via CDN to keep the project lightweight and simple without needing a Node.js environment.
*Flexbox and media queries were used for responsive layout.
*State management (useState) was handled directly inside the main App component.
*A key challenge was managing React state in a single-page structure without JSX transpilation, but was solved using modern browser modules.

📄 Project Features
*View a list of mock AI safety incidents.
*Filter incidents by severity level (Low, Medium, High, or All).
*Sort incidents by reported date (Newest First, Oldest First).
*View detailed descriptions for each incident.
*Submit and add new incidents with basic form validation.
*Responsive layout with basic hover effects for a better user experience.
