# Project Name

A universal TypeScript starter template following Google Style Guides for
HTML, CSS, TypeScript, and Documentation.

## Features

- **Strict TypeScript:** Configured for Node.js, React, or Vanilla TS.
- **Google Style Aligned:** Pre-configured `.editorconfig` and `tsconfig.json`.
- **Automated Workflows:** CodeQL security, auto-labeling, and semantic releases.
- **Styling Ready:** SCSS support with global type definitions.
- **Documentation:** Enforced 80-character line wrapping for readability.

## Getting started

### Prerequisites

- **Node.js:** v20.11.0 or higher (see `.nvmrc`).
- **npm:** v10 or higher.

### Installation

1. Use this template to create a new repository.
2. Clone your new repository:

   ```bash
   git clone [https://github.com/{{REPOSITORY_OWNER}}/{{REPOSITORY_NAME}}.git](https://github.com/{{REPOSITORY_OWNER}}/{{REPOSITORY_NAME}}.git)

3. Install dependencies:

    ```bash
    npm install

## Development

### Branching Strategy

This project uses a prefix-based branching system:

- feat/ for new features.
- fix/ for bug fixes.
- docs/ for documentation changes.
- chore/ for maintenance or configuration.

### Commit messages

We use [Conventional Commits.](https://www.conventionalcommits.org/) This triggers
automated versioning and updates the `CHANGELOG.md`.

- `feat: ...` → Minor version bump.
- `fix: ...` → Patch version bump.
- `feat!: ...` → Major version bump (breaking change).

## Styling and formatting

Adherence to the Google Style Guide is required for all contributions:

- **Methodology:** Use BEM (Block Element Modifier) for all SCSS.

- **Indentation:** Use 2 spaces for all file types.

- **Line Length:** Wrap documentation and comments at 80 characters.

- **SCSS Nesting:** Avoid nesting selectors. Only nest pseudo-classes (e.g.,
  `&:hover`) or BEM modifiers (e.g., `&--active`).

- **Naming:** Use `hyphen-case` for BEM blocks and SCSS variables.

- **TypeScript:** Use `camelCase` for variables and `PascalCase` for types.

## Security

Security is a priority. Please refer to
[SECURITY.md](https://github.com/{{REPOSITORY_OWNER}}/{{REPOSITORY_NAME}}/blob/main/SECURITY.md)
for instructions on how to report vulnerabilities privately.

## License

This project is licensed under the MIT License. See the
[LICENSE](https://github.com/{{REPOSITORY_OWNER}}/{{REPOSITORY_NAME}}/blob/main/LICENSE.md)
file for details.
