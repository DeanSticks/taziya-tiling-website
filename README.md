# Taziya Enterprise - Premium Tiling & Ceiling Solutions Website

A modern, responsive Single Page Application (SPA) built for a commercial tiling and ceiling installation business. This application serves as a high-utility lead generation tool for prospective clients, featuring real-time interactive utilities and dynamic styling configurations.

## 🚀 Live Demo
Experience the fully deployed application live on the web:
👉[https://profound-sunflower-d58666.netlify.app/]

---

## 🛠️ Key Architectural Features & Implementations

*   **Modular Component Architecture:** Developed clean, decoupled React layouts separating globally shared structural components (Navbar, Footer) from core view controllers (`Home`, `About`, `Services`, `Contact`).
*   **Client-Side Routing System:** Leveraged `react-router-dom` to establish instant, seamless transitions across pages without complete browser document refreshes.
*   **Interactive Instant Cost Estimator:** Created a client-side pricing calculator utilizing component state manipulation (`useState`) to compute real-time structural cost forecasts based on multi-variable criteria (\(m^2\) area configurations vs. distinct installation profiles).
*   **Dynamic UI Layout Filter:** Engineered a robust item mapping engine enabling immediate media display segregation between Floor Tiling and PVC Ceiling galleries.
*   **Pervasive Application Theme Toggle:** Built an app-wide global theme controller to seamlessly transition structural font parameters, component panel contrasts, and primary background layers between Light and Dark mode options.
*   **Instant Customer Conversion Points:** Maintained persistent, viewport-anchored custom customer touchpoints, including a specialized float-overlay WhatsApp communication hub wrapper.

---

## 💻 Tech Stack & Dependencies

*   **Core Engineering:** React.js, JavaScript (ES6+), HTML5, CSS3 (Modern Flexbox & Grid layouts)
*   **Build Toolchain:** Vite (Fast Local Dev Server Compilation Environment)
*   **Navigation & State Lifecycle:** React Router DOM, React Core Hooks (`useState`, `useRef`, `useNavigate`)
*   **External Service Integrations:** `react-floating-whatsapp` for structural messaging triggers

---

## 📦 Local Installation & Deployment Steps

To run, review, or scale this codebase on your local machine offline, execute the following commands in your command-line environment:

1. Clone or download this project repository.
2. Navigate directly into the root project container:
   ```bash
   cd tiling-website
   ```
3. Initialize the environment dependencies:
   ```bash
   npm install
   ```
4. Fire up the local Vite-powered development compiler engine:
   ```bash
   npm run dev
   ```
5. Open your local browser environment to view live changes:
   ```text
   http://localhost:5173
   ```
