# PromptCode Prototype

This is a functional prototype of PromptCode, a competitive prompt engineering platform.

## Setup Instructions
1.  Download all files in the `sketch2ship/prototype/` directory.
2.  Ensure `index.html`, `styles.css`, `app.js`, and `challenges.js` are in the same folder.
3.  Open `index.html` in any modern web browser.

## Features Implemented
- **Multi-Pane IDE:** Real-time feedback for developers.
- **Token Tracking:** Mock token count to enforce ISS-001 (Token Limit Constraint).
- **Scoring Engine:** Automated comparison between user output and the 'Golden' target.
- **Session History:** Clicking history items restores previous prompts to the editor.
- **Challenge Library:** Switch between different prompt engineering tasks.

## Simulated Logic
As this is a browser-only prototype without a backend:
- **LLM Calls:** Simulated via a local function in `app.js`.
- **Tokens:** Approximated as 1 token per 4 characters.