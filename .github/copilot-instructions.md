# AI Engineering Standards (UK English)

This document defines the coding standards and architectural patterns for this 
project. All AI-generated code must adhere to these instructions.

## 1. General Formatting
- **Indentation:** Use 2 spaces for all file types.
- **Line Length:** Strictly wrap documentation, comments, and strings at 
  80 characters.
- **Naming:** Use `Sentence case` for all documentation headings.
- **Language:** Use UK English spelling (e.g., `optimise`, `colour`, `centre`).

## 2. TypeScript Standards
- **Strictness:** Adhere to strict type checking. Avoid `any`.
- **Naming:** Use `camelCase` for variables and `PascalCase` for types.
- **Syntax:** Use ES Modules (ESM) and modern TypeScript features.
- **Exports:** Prefer named exports over default exports for better 
  tree-shaking and refactoring.

## 3. Styling (BEM Methodology)
- **Methodology:** Use **BEM** (Block Element Modifier).
- **Format:** `block-name__element-name--modifier-name`.
- **Nesting:** Strictly avoid deep nesting. Only nest pseudo-classes 
  (e.g., `&:hover`) or modifiers (e.g., `&--active`).
- **Variables:** Use `hyphen-case` for SCSS variables.

## 4. Git and Pull Requests
- **PR Naming:** Titles must follow the `type(scope): description` pattern.
- **Commits:** Strictly follow **Conventional Commits** formatting.
- **Standard Types:** Use `feat`, `fix`, `chore`, `docs`, `style`, `refactor`.
- **Tone:** Use the imperative, present tense (e.g., "initialise", not 
  "initialised").

## 5. Negative Constraints (Strictly Forbidden)
- **No `add:` prefix:** Never use `add:` for commits or PR titles. 
  - Use `feat:` for new functionality.
  - Use `chore:` for assets, configuration, or library updates.
- **No deep nesting:** Never nest SCSS selectors beyond 2 levels deep.
- **No default exports:** Always use named exports.

## 6. Documentation & Links
- **Style:** Follow the Google Documentation Style Guide.
- **Links:** Use relative markdown links (e.g., `[Link](FILE.md)`).