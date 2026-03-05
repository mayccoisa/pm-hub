---
name: competitor-analysis
description: Use when asked to "analyze competitors", "track competitor updates", "compare features", "competitor landscape", or "what are our competitors doing". Helps Product Managers systematically track and analyze competitors' social media, websites, and feature updates based on specific criteria.
---

# Competitor Analysis Skill

## Objective
Perform a structured competitor analysis based on a local list of competitors defined within each project's folder. This skill helps Product Managers identify what competitors are doing, new feature launches, market positioning, and recent social media activity, outputting the results as a detailed analysis and a comparison table.

## When to use this skill
- you want to analyze the competitors for a specific product or project.
- you want to know what the competitors of a given project have launched recently.
- you want to compare specific criteria (e.g., pricing, target audience, key features) across the competitors listed for a project.

## Instructions

### 1. Gather Required Information
When you invoke this skill, ensure that you:
- **Identify the Project Folder**: Ask the user or infer which product/project they are referring to.
- **Read the Competitors List**: Locate and read the `concorrentes.md` (or similar file like `competitors.md`) inside the project's folder to get the list of competitors to analyze. This file should contain the names, URLs, and social media handles of the competitors.
- **Understand Analysis Criteria**: Identify what needs to be compared (e.g., pricing model, latest features, value proposition, recent marketing campaigns/social media focus, onboarding flow, target audience).

### 2. Execution Steps
1. **Data Collection**:
   - Parse the `concorrentes.md` file from the project's folder to retrieve the list of competitors and their details.
   - Use the `read_url_content` tool to read their main landing pages, pricing pages, and product pages.
   - Use the `search_web` tool to find recent news, press releases, or social media activities (e.g., "[Competitor Name] recent updates 2026", "site:linkedin.com/company/[competitor-handle]").
   - *Note: If a specific social media page is blocked or requires authentication, rely on public news, press releases, or alternative domains to gather the requested intelligence.*
2. **Criteria Validation**:
   - For each competitor, evaluate the gathered data against the requested qualitative and quantitative criteria. 
   - Look for product positioning, newly shipped features, pricing changes, and narrative shifts.
3. **Synthesis**:
   - Group the findings logically.
   - Identify common trends among the competitors.
   - Highlight any gaps or opportunities where your product can differentiate.

### 3. Output Format
The output **MUST** strictly follow this structure, providing a detailed table and a comprehensive written analysis:

#### 1. Executive Summary
- 2-3 sentences summarizing the biggest moves or trends in the competitive landscape.

#### 2. Comparative Table
- A comprehensive markdown table comparing the competitors directly against the key criteria to provide a quick visual comparison. Example columns: Competitor, Pricing Model, Target Audience, Key Value Prop, Recent Launches.

#### 3. Detailed Competitor Analysis
For each competitor, provide a deep dive:
- **Focus / Positioning**: How they are currently positioning themselves in the market.
- **Recent Activity**: Specific details on notable social media campaigns, news, or feature launches over the last few months.
- **Criteria Evaluation**: Detailed bullet points evaluating them against each of the specific criteria requested.

#### 4. Strategic Recommendations
- 2-3 actionable insights and recommendations for the PM of this project based on the competitive analysis.
