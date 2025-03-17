# GROK.md - Coding Agent Guidelines

  ## Build, Lint, and Test Commands
  - Build: `npm run build` or `yarn build`
  - Lint: `npm run lint` or `yarn lint`
  - Test all: `npm test` or `yarn test`
  - Run single test: `npm test -- -t "test_name"` or `jest --testNamePattern="test_name"`

  ## Code Style Guidelines
  - **Imports**: Use relative imports for local files, absolute for external packages
  - **Formatting**: Prettier default (2 spaces, single quotes, trailing commas)
  - **Types**: TypeScript required; explicit types for function params/returns
  - **Naming**: CamelCase for variables/functions, PascalCase for classes/components
  - **Error Handling**: Try/catch for async ops, custom error classes encouraged
  - **File Structure**: Group by feature/domain, max 200 lines per file
  - **Comments**: JSDoc for public APIs, inline for complex logic
  - **Cursor Rules** (if .cursor/rules/ exists): Enforce strict null checks, no console.log

  ## Notes
  - Keep functions pure and single-purpose
  - Prefer early returns over nested conditions
  - Use const over let; avoid var
  - Use arrow functions for concise syntax
  - Keep code DRY but avoid over-engineering
  - Use meaningful variable names
  - Keep comments up-to-date as code evolves
  - Use consistent naming conventions