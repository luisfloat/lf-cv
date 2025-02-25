# Docs 📄

This repository contains personal and professional documents, including my CV, cover letter, and other related materials. It leverages modern web technologies to style, print, and internationalize the content, ensuring flexibility and customization.

## Features

* 🌎 **International** - Support multiple languages, currently English and Brazilian Portuguese;
* 🌐 **Dynamic Markdown Support** - Allows content to be easily updated and customized using Markdown syntax;
* 🛠️ **Modular Design**: Each document is modular and reusable for various purposes.
* 🔄 **Live-Reload** - Automatically refresh web browser view on changes.
* 🖨️ **Print-Ready**: Optimized for printing directly from the browser.

## Technology Stack

- **Astro**: Next-generation web framework for fast and efficient content-based websites.
- **Tailwind CSS**: Utility-first CSS framework for responsive UI.
- **Psitta**: Next-gen type-safe internationalition web framework.
- **@tailwindcss/typography**: Tailwind CSS plugin for beautiful typographic defaults.
- **Intl APIs**: For seamless localization and formatting.
- **MDX**: Markdown with JSX support for dynamic content.
- **TypeScript**: Superset of JavaScript for static typing.

## Getting Started

### Prerequisites

- Node.js (>= 22.x)
- PNPM (>= 9.4.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/luisfuturist/docs.git
   cd docs
   git remote add content https://github.com/luisfuturist/docs-content.git
   git pull content content
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

Open your browser and navigate to `http://localhost:4321` to preview the documents.

### Content

To add or edit content, check out the *private* `content/` branch.

#### Internationalization

For information on how to add or update translations, check out [Psitta docs](https://9aia.github.io/psitta/).

### Printing

Use the print button to generate PDFs or physical copies.
