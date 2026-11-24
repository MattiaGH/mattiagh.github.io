# Mattia Giaccagli — Personal website

A custom academic website, written in plain HTML, CSS and a small local JavaScript file. All the website code is included here. There is no third-party theme, package installation, build step, analytics or external JavaScript. The fonts are provided by the visitor’s device. The portrait is copied from Mattia’s existing website; publication and institution links lead to the corresponding external websites.

## Put it on GitHub Pages

1. In your GitHub account, create a **public** repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your exact username. Add a README if GitHub offers that option.
2. Extract the downloaded ZIP on your computer.
3. In your repository click **Add file → Upload files**. Drag **all the extracted files and the assets folder** into the upload area. Upload the contents of the ZIP, rather than the ZIP itself or a surrounding folder. `index.html` must be at the top level of the repository.
4. Click **Commit changes**. If you already have a README, use the copy supplied here or keep your own; it does not affect the website.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Choose **main** and **/(root)**, then click **Save**.
6. Wait for GitHub to finish publishing. The Pages settings will show a **Visit site** link. Your address will be `https://YOUR-USERNAME.github.io`.

Use the default GitHub Actions permissions. This website does not need a custom deployment workflow or a write-permission grant. The optional `.nojekyll` file is included; the site has no Jekyll-specific content and can publish without it too.

Official documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Preview before uploading

Double-click `index.html` in the extracted folder. The pages, images, navigation and publication filters also work when opened directly as local files. Internet access is only needed when following links to external publications, institutions or the existing CV PDF.

## Edit your content

On GitHub, open a file, click the pencil icon, edit the text and click **Commit changes**. GitHub Pages republishes after saved changes. Keep the surrounding HTML tags when changing text.

| File | Contents |
| --- | --- |
| `index.html` | Introduction, photo, latest news and selected papers |
| `research.html` | Research interests and student supervision |
| `publications.html` | All 22 publication entries and their links |
| `teaching.html` | Courses, teaching experience and coordination |
| `cv.html` | Academic appointments, education, skills and PDF link |
| `activities.html` | Editorial service, talks and research visits |
| `contact.html` | Contact details and research opportunities |
| `styles.css` | Colours, fonts, layout, mobile and print styles |
| `site.js` | Mobile menu and local publication search/filtering |
| `publications.bib` | Downloadable references |
| `assets/portrait.jpg` | Existing profile photo |

To add a publication, duplicate one `<article class="paper-row" …>` block in `publications.html`, give it a unique `id`, and set `data-kind` to `journal`, `conference` or `thesis`. Update the title, authors, year, venue and links. Search and filter counts update automatically when JavaScript is enabled. Update the initial count in the HTML and add the reference to `publications.bib` as well. If it should appear on the homepage, also add it to `index.html`.

To add news, duplicate a `<li class="news-item">` in `index.html` and edit its date and text. Put older news in the existing “Earlier news” section.

To change the colours, edit `--accent`, `--deep` and `--paper` at the start of `styles.css`.

The navigation and footer are repeated in each HTML file so the site needs no build system. When changing a navigation label, affiliation or shared email address, update it in all pages.

## Content sources and review notes

Content was migrated from the following live public pages on **5 November 2026**:

- https://sites.google.com/view/mattia-giaccagli/home-page
- https://sites.google.com/view/mattia-giaccagli/research
- https://sites.google.com/view/mattia-giaccagli/teaching
- https://sites.google.com/view/mattia-giaccagli/curriculum-vitae
- https://sites.google.com/view/mattia-giaccagli/activities
- https://sites.google.com/view/mattia-giaccagli/offers-and-contacts

The design, typography, SVG illustrations and code are original for this version. Introductory research and course descriptions are lightly rewritten from the interests and subjects on those pages. Bibliographic spelling, capitalization and journal names have been cleaned up. Author order and publication links are retained; obsolete publisher access-token query parameters have been removed. Where the publication list omitted a year, the corresponding news entry was used. The ACC 2027 editorial role and the October 2026 article come from the latest homepage.

The PDF CV link still points to the existing public Google Drive document, identified on the old website as last updated in December 2024. Replace that link in `cv.html` with a newer PDF when ready. The source site said there were no open Ph.D./postdoctoral positions; the new contact page invites enquiries without claiming any funded vacancy.

The BibTeX download intentionally contains the metadata available from the source list, not additional unverified DOI, volume or issue data. Check formal citations against the publishers before using them in a manuscript. Two publication records reuse a HAL link for corresponding journal/conference versions, as on the source site.

Before publishing, review your postal address, phone number, roles, student list and CV date. No content from unrelated private conversations has been added.

You do not need to remove your Google Sites website while trying this version.
