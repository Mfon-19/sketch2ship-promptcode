# PromptCode Developer Brief

## Overview
PromptCode is a competitive learning platform for prompt engineering. This prototype implements a robust functional environment for users to test prompts against specific targets and receive scoring based on accuracy, conciseness, and cost.

## Scope Snapshot
- **Challenge Workspace (REQ-101):** A three-pane layout showing the prompt editor, the live model output, and the target 'Golden' output.
- **Evaluation System (REQ-102):** A heuristic-based scoring engine that calculates accuracy (similarity), token efficiency, and theoretical cost.
- **Token Limit Constraint (ISS-001):** Active monitoring of prompt length to prevent brute-force or direct-copy solutions.
- **Prompt History (ISS-002):** A sidebar tracking the evolution of attempts during a single session.

## Execution Plan
1.  **Phase 1 - Layout (M-1):** Initialize a responsive split-pane UI using Flexbox/Grid for the IDE-like experience.
2.  **Phase 2 - Evaluation (M-2):** Implement a local scoring engine that compares string similarity and token counts.
3.  **Phase 3 - Multi-Model Simulation:** Build a mock orchestration layer to simulate varied outputs from OpenAI and Anthropic models.

## Acceptance Criteria
- Users can select between multiple challenges.
- Users can toggle between simulated models.
- Submissions provide a numerical score and specific feedback on token usage.
- History pane updates with every execution attempt.