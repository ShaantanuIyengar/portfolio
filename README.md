# Interactive Space Systems & Electronics Engineering Portfolio

This is a premium, high-fidelity portfolio website built for **Shaantanu Iyengar**, structured around a **Deep Space & Telemetry Dashboard** theme to align with your background in **Electronic Engineering with Space Science and Technology** at the University of Bath.

The site is lightweight, fast, self-contained, and ready for deployment to **GitHub Pages**.

---

## 🚀 Key Features

*   **HTML5 Canvas Starfield Background:** Live animated stellar background that drifts slowly, creating a premium depth effect.
*   **Leonardo Internship Telemetry Monitor:** An interactive RF simulator representing your Systems Engineering Intern role. Visitors can modify Phase Noise, Gain Imbalance, and ADC Bits to see how it affects SNR, throughput latency, and buffer state based on physical calculations.
*   **180-Degree Ultrasonic Radar Simulator:** A fully custom Canvas simulation representing your physical Arduino/Servo project. Visitors can click in the radar scope to place artificial targets, which the scanning line detects, flashes green, and triggers a synthetic Web Audio sonar ping.
*   **8-Bit Microprocessor Core telemetry:** An interactive assembly stepping emulator representing your FPGA integration project, logging execution details to a simulated VGA terminal.
*   **NASA C-MAPSS Prognostics Console:** Simulator that replicates the execution logs of your Machine Learning training pipeline.
*   **Terminal-Themed Contact Link:** Secure encrypted console simulation upon message submission.

---

## 🛠️ Technology Stack

*   **Structure:** HTML5 (Semantic and SEO-optimized)
*   **Styles:** Vanilla CSS3 (Custom Variables, Glassmorphism, CSS Transitions, keyframe animations)
*   **Logic & Simulators:** Vanilla JavaScript (ES6, Canvas API, Web Audio API, Intersection Observer API)

---

## 💻 Running Locally

To view the website on your local machine:
1.  Navigate into the `portfolio` folder.
2.  Double-click the `index.html` file to open it directly in any modern browser.
3.  *Alternative:* Run a simple local HTTP server from the directory:
    ```bash
    # Python 3
    python -m http.server 8000
    ```
    Then visit `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to GitHub Pages (Hosting)

GitHub Pages hosts static websites directly from a GitHub repository for free. Follow these 3 simple steps to put your portfolio online:

### Step 1: Initialize Git and Commit Locally
Open a terminal (such as PowerShell or Git Bash), navigate to this folder, and run:
```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your initial commit
git commit -m "feat: initial release of interactive engineering portfolio"
```

### Step 2: Create a Repository on GitHub and Link it
1.  Go to [GitHub](https://github.com) and sign in.
2.  Click **New** to create a new repository.
3.  Name it `portfolio` (or anything you prefer) and keep it **Public** (required for free GitHub Pages). Leave "Initialize repository with README/gignore" unselected.
4.  Copy the remote URL (it will look like `https://github.com/your-username/portfolio.git`).
5.  In your terminal, link your local files to GitHub and push (replace with your actual URL):
    ```bash
    git branch -M main
    git remote add origin https://github.com/your-username/portfolio.git
    git push -u origin main
    ```

### Step 3: Enable GitHub Pages in Settings
1.  On your GitHub repository webpage, click on the **Settings** tab (gear icon at the top).
2.  Scroll down to the left sidebar menu and click on **Pages** (under the "Code and automation" section).
3.  Under **Build and deployment**, set the Source to **Deploy from a branch**.
4.  Under Branch, select **main** (and `/ (root)` folder), then click **Save**.
5.  After a minute, refresh the page. GitHub will show a message: *"Your site is live at..."* with a URL (usually `https://your-username.github.io/portfolio/`).

---
*Created with 💙 by Antigravity.*
