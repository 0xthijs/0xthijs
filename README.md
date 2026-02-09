# AI-Augmented HR Portfolio & Data Lab

## Project Overview
This repository functions as a **Monorepo**, bridging the gap between a professional portfolio platform and an active data science laboratory. It represents the convergence of **People Logic** and **Machine Logic**.

## 1. The Platform
My personal website is built using **Hugo**, a fast and modern static site generator, and styled with the minimalist **PaperMod** theme.
- **Architecture**: Static Site Generator (Hugo)
- **Theme**: PaperMod (Fast, responsive, clean)
- **Deployment**: Hosted via GitHub Pages (Planned)

## 2. The Data Lab
Beyond the website, this repository houses raw datasets and analytical scripts used for my experiments in HR Analytics.
- **Data Sources**: Real-world and synthetic datasets (e.g., IBM HR Employee Attrition).
- **Tools**: SQL, Python, Power BI (Planned).
- **Goal**: To derive actionable insights for strategic HR decision-making.

## Directory Map

```text
.
├── content/projects/       # [Showcase] Data Stories & Case Studies
├── data-lab/               # [Lab] Python Scripts & Technical Documentation
│   ├── 01-ibm-attrition/   # Attrition Analysis & Dataset
│   ├── 02-promotion-velocity/
│   ├── 03-burnout-risk/
│   └── 04-diversity-audit/
├── themes/                 # Hugo Themes (PaperMod)
├── hugo.toml               # Website Configuration
└── README.md               # This file
```

## Project Log
- **2026-02-09**: HR Attrition Analysis & Audit
    - **Analysis**: Calculated Flight Risk (16.37%) and Manager Stability (32.32% attrition for <1yr). Published `content/posts/hr-attrition-analysis.md`.
    - **Audit**: Validated findings with `data-lab/audit_analysis.py`. Sample sizes confirmed > 30. Added "Data Verified" badge.
- **2026-02-09**: Repository Expansion & "Lab vs. Showcase" Architecture
    -   **New Modules**: Implemented `promotion-velocity`, `burnout-risk`, and `diversity-audit` in `data-lab/`.
    -   **Portfolio**: Published 3 new Data Stories to `content/projects/`.
    -   **Security**: Enforced "Deny by Default" .gitignore policy for data protection.
- **2026-02-09**: Initialized Hugo architecture and deployed "PaperMod" theme using AI-First workflow.
