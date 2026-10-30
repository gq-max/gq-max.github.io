# Qi Guo / 郭淇 — Academic Homepage

A minimal, responsive **English / 中文** homepage for academic research and multimodal AI.

**Website:** https://gq-max.github.io/  
**Research:** Multimodal Understanding · AI Safety · Adversarial Robustness · Post-Training

## Sections

1. **About** — Ph.D. profile, research identity, headshot, and contact links
2. **Research** — Human-centric understanding, multimodal safety, and post-training
3. **Publications** — Selected peer-reviewed papers and clearly labeled ongoing work
4. **Projects** — ChainCog-Bench, KSTF-Attack, OmniSafeBench-MM, and Skill Auditing
5. **Experience** — Ant Group, BraneMatrix AI, and CFAR at A*STAR
6. **Contact** — Email and GitHub

## Edit the website

The deployed page is now a lightweight HTML/CSS/JavaScript website with **no build step**:

| File | Purpose |
|---|---|
| index.html | English content, publication metadata and links, SEO, and layout |
| static/js/academic.js | Chinese translations, language preference, mobile navigation |
| static/css/academic.css | Responsive visual design |
| static/assets/img/photo.png | Existing personal portrait |

Every element with a data-i18n attribute in the HTML has a corresponding Chinese translation in the zh object in academic.js. Paper titles, author names, and research acronyms retain their conventional English forms.

The old Markdown files under contents/ and their supporting template assets are retained for reference, but are **no longer loaded by the homepage**. The MIT license and template attribution remain.

## Preview locally

Run a static server from the repository root:

~~~bash
python -m http.server 8000
~~~

Visit http://localhost:8000/. For Chinese preview, open http://localhost:8000/?lang=zh. The language choice is also saved locally when browser storage is available.

## Publishing

GitHub Pages deploys the main branch. No npm dependencies, build step, or database are required.

## Credits

The previous version was adapted from [Yixin0313/personal-homepage-template](https://github.com/Yixin0313/personal-homepage-template) and [Sen Li's academic homepage](https://github.com/senli1073/senli1073.github.io). The current version uses a custom minimal academic layout. See [LICENSE](LICENSE).
