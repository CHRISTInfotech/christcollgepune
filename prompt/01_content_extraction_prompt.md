# Claude Code Task: Extract Content & Assets from Old Site (170 pages)

Hand this whole file to Claude Code as the prompt (paste it into the chat, or save as
`EXTRACT_TASK.md` and say "follow EXTRACT_TASK.md"). It assumes `sitemap_data.json`
(170 rows) sits in the project root.

---

## Context

I'm rebuilding christcollegepune.org as a new static site. Before I build anything,
I need every existing page's content and assets pulled into a clean local structure
so a developer can pour it into new templates without re-visiting the old site 170 times.

`sitemap_data.json` is an array of 170 objects, each shaped like:

```json
{
  "id": "3-academics-department-of-science-programme-outcomes",
  "section": "3. Academics",
  "page": "Department of Science",
  "sub_link": "Programme Outcomes",
  "url": "https://christcollegepune.org/...",
  "verification": "Verified",
  "notes": "..."
}
```

## What I need you to do

Work through `sitemap_data.json` **in batches of 15 rows** (don't try all 170 at once —
you'll hit rate limits and lose track of failures). For each row:

1. **Fetch the page** at `url` using WebFetch. Ask it to return:
   - The main heading / page title
   - All body text content, preserving paragraph and list structure and the **order**
     things appear in on the original page
   - Any tables (as markdown tables)
   - Any embedded document links (PDFs, DOCs) with their link text
   - All `<img>` src URLs on the page, with their alt text if present

2. **Write the content directly into the real page file** — do **not** save it to an
   intermediate JSON content file. Create/update
   `src/pages/{section}/{id}.jsx` (matching the folder-per-section structure from the
   scaffold task) using the matching template from `src/templates/`, and place the
   fetched content straight into that component's JSX.

   - **Keep the same overall content structure as the original page** — same headings,
     same order of sections, same tables, same document links, same images referenced
     (don't drop or reorder information, don't summarize it down).
   - **But improve the visual design and placement**, not just port it 1:1:
     - Break up long unbroken text blocks into properly spaced sections with real
       heading hierarchy (`h1`/`h2`/`h3`) instead of everything at one visual weight
     - Turn any list-like content that was just paragraph text on the old site into
       actual styled lists or cards
     - Give tables a properly styled treatment (zebra striping, spacing, mobile
       horizontal scroll) rather than a raw markdown dump
     - Place images with sensible layout (not just stacked top-to-bottom) — inline
       with relevant text, in a grid for multiple related images, or as a header
       banner when it's clearly a hero/banner image on the original
     - Use the design tokens (`tokens.css`) for all spacing/color/type — no
       hardcoded values
   - If a page's content is thin (e.g. one paragraph and a PDF link), don't
     artificially pad it — a short page can just be short, well-spaced, and clean.

3. **Download binary assets** referenced in that page's images and document links
   using the Bash tool (`curl -sL -o <path> <url>`, or `wget`), not WebFetch — WebFetch
   only returns text. Save into:
   - Images → `src/assets/images/{id}/` (keep original filenames, but prefix with
     `{id}_` if the filename is generic like `image1.jpg`)
   - Documents → `public/assets/docs/{id}/` (so they're linkable at a stable URL)

   Reference these local paths in the JSX you write — don't leave `<img>`/`<a>` tags
   pointing at the old christcollegepune.org URLs.

4. **If a fetch fails or returns junk** (common on JS-heavy pages, or pages that are
   really just embedded PDFs/iframes): don't write a broken/empty page component.
   Instead, leave a clear `// TODO: fetch failed — see EXTRACTION_LOG.md` comment at
   the top of the file with a placeholder heading, and log it (see below). Don't
   retry more than once automatically.

5. **After each batch of 15**, write/update a running log at `EXTRACTION_LOG.md`
   (project root):
   - Total processed so far / 170
   - List of `id`s that failed or came back partial, with the reason
   - Any pages where image/doc downloads failed (broken links, 404s, etc.)
   - Any pages you judged too thin to restructure meaningfully (flag for human review
     — might mean the old page itself was broken or near-empty)

## Rules

- Don't invent content. If a field is genuinely empty on the source page, leave it out
  of the component — don't pad it with placeholder text.
- Don't drop or shorten real content while restyling it. "Improve design and placement"
  means better hierarchy, spacing, and layout — not lighter content. If in doubt,
  keep the information and just present it better.
- Keep going even if some individual pages fail — the goal is maximum coverage across
  all 170 rows in one pass, with a clear failure list at the end for a human to check
  manually.
- If more than ~15% of a batch fails, pause and tell me — that usually means something
  structural is wrong (e.g. the whole site changed, or a section requires login).
- Every page you write must use the design tokens and shared components from the
  scaffold (`tokens.css`, `templates/`, shared `Card`/`PageHeader`/etc.) — don't
  invent one-off styles per page, that's exactly what breaks consistency at scale.

## When finished

Give me a final summary: total succeeded / partial / failed, which sections had the
most failures, roughly how much was downloaded (image + doc count and total size),
and any pages you flagged as too thin or structurally unusual to restyle confidently.
