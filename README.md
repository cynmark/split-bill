# Split Bill

A shared expense dashboard built with HTML5, CSS3, and vanilla JavaScript. **Phase 0: project setup only.** The app is a display-only foundation for a future shared expense product.

## Run locally

Open `index.html` directly in a modern browser. No build step, packages, API keys, or internet connection are required.

For a local development server, run this command from the project folder if Python is installed:

```sh
python -m http.server 5500 --bind 127.0.0.1
```

Then visit http://127.0.0.1:5500. Stop the server with `Ctrl+C`. Alternatively, use your editor's static-server extension (for example, Live Server).

## Structure

```text
split-bill/
├── index.html                # Semantic dashboard shell and navigation
├── css/
│   ├── style.css             # Tokens, components, and mobile defaults
│   └── responsive.css        # Tablet and desktop layout enhancements
├── js/
│   ├── data.js               # Clearly fictional display-only fixtures
│   └── app.js                # Safe DOM rendering and preview interactions
├── assets/
│   ├── images/.gitkeep       # Reserved for future image assets
│   └── icons/favicon.svg     # Local brand icon
├── .gitignore
└── README.md
```

The deferred scripts run in order: fixtures first, rendering second. `window.SplitBillDemo` is a small shared namespace to keep this buildless preview compatible with direct file opening. UI rendering functions accept data separately from the fixtures. A future data service can provide those inputs without changing the layout; no Supabase dependency is included yet.

## Included in Phase 0

- Responsive dashboard, desktop sidebar, and collapsible mobile navigation.
- Three sample balance cards, three sample groups, and a recent activity feed.
- Future navigation and action buttons announce a coming-later message. They do not create, modify, or save anything.
- Indigo design tokens, reusable card styles, system fonts with Thai/English fallbacks, and a local favicon.
- Semantic landmarks, a skip link, visible keyboard focus, accessible menu state, live status feedback, and reduced-motion support. Escape closes the mobile menu when focus is inside it.

All people, expenses, balances, and dates are fictional. THB is a preview currency choice. Amounts are fixed display strings, not computed balances. Nothing persists after reload, and there are no network requests or analytics.

## Design conventions

Edit `:root` in `css/style.css` to adjust colors, spacing, typography, radii, and shadows. Responsive breakpoints are 560px, 960px, and 1250px. Font availability depends on the operating system; Windows uses Segoe UI and Leelawadee UI, with Tahoma and system fallbacks. No remote font dependency is needed.

## Verification checklist

1. Open the page and confirm three balances, three groups, and four activity items appear.
2. At 375px, check that content fits and Menu expands/collapses navigation.
3. At 1440px, check the sidebar, three-column summary, and two-column content layout.
4. Use Tab to reach the skip link, navigation, and action buttons. Press Enter/Space to activate buttons; check Escape closes the focused mobile menu.
5. Click a future feature and confirm the explanatory status message appears.
6. Confirm the browser console has no errors and reload resets the preview.

## Git

The repository uses `main`. Local environment files, dependencies, build output, editor settings, and verification artifacts are ignored. No remote or GitHub publishing is required to run the project. Do not commit secret keys; a future browser integration must never contain a Supabase service-role key.

## Suggested Phase 1

Agree on group and expense data models, then implement local group creation and member management. Add an expense entry form with validation and accessible empty states. Define currency/rounding rules before introducing balance calculations. Plan persistence and Supabase integration as a separate agreed phase.

Authentication, database integration, real calculations, routing, and persistence are intentionally outside Phase 0.
