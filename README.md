# What Do They Actually Do For Work?

A static prototype that turns job titles into plain-language explanations, with tone and context adjusted by generation, industry, and region.

## What It Does

- Explains common roles in everyday language.
- Adds context about industry norms, work culture, and regional expectations.
- Lets users enter job details manually.
- Includes a LinkedIn URL field as an optional reference prompt, but does not scrape LinkedIn or call the LinkedIn API.
- Uses inline guidance instead of blocking browser alerts.

## Run Locally

Open `index.html` in a browser.

For a local web server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

This is a front-end prototype with rule-based explanations. It does not send profile data to any external service.
