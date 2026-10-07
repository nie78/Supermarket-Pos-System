# Supermarket POS System

A supermarket Point of Sale (POS) system designed to manage products, inventory, sales, and user roles.

## Project Goals

The system is designed to support:

- Product and barcode management
- Inventory and batch tracking
- Stock level monitoring
- Sales and sale items
- Admin and worker roles
- Product expiration tracking
- Secure user authentication
- Offline-friendly supermarket operations

## Tech Stack

- Next.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Node.js
- Git & GitHub

## Project Structure

The project is organized around the following main areas:

- **Users**: Admin and Worker accounts
- **Catalog**: Product information and pricing
- **Inventory**: Stock batches, quantities, and expiration dates
- **Sales**:Completed transactions
- **Sale Items**: Products included in each sale

## Git Conventions

### Branch Naming

Branches should clearly describe the work being done.

Examples:

```text
feature/prisma-setup
feature/authentication
feature/inventory-management
fix/login-validation
```

Use:

- `feature/` for new functionality
- `fix/` for bug fixes
- `refactor/` for code improvements without changing functionality
- `docs/` for documentation changes

### Commit Messages

Commits should be clear and describe the change.

Examples:

```text
feat: add user model and role enum
feat: add prisma seed data
fix: correct inventory deletion order
docs: update project conventions
```

Use common prefixes such as:

- `feat:` — new functionality
- `fix:` — bug fix
- `refactor:` — code restructuring
- `docs:` — documentation
- `test:` — tests
- `chore:` — maintenance/configuration

## Pull Request Rules

Before opening a Pull Request:

1. Make sure the feature is working locally.
2. Make sure the relevant tests pass.
3. Make sure there are no unnecessary changes.
4. Keep the PR focused on one logical piece of work.
5. Explain what was changed and why.
6. Mention any important technical decisions or known limitations.

Avoid mixing unrelated features or fixes in the same Pull Request.

## Definition of Done

A task is considered done when:

- The implementation matches the approved requirements.
- The code follows the project's conventions.
- The feature has been tested appropriately.
- Relevant database changes include a migration.
- Seed data is updated when necessary.
- No secrets or sensitive environment variables are committed.
- The code is committed with a clear commit message.
- The branch is ready for review.
- The Pull Request description clearly explains the changes.

## Environment Variables

Environment variables containing secrets or credentials must not be committed to Git.

Use a local `.env` file for development and provide an `.env.example` containing the required variable names without real credentials.

Example:

```text
DATABASE_URL=
```

Never commit:

```text
.env
```

with real credentials.

## Database Workflow

Database schema changes should be made through Prisma migrations.

Typical workflow:

```text
Update schema.prisma
        ↓
Create migration
        ↓
Generate Prisma Client
        ↓
Seed/test the database
        ↓
Verify the changes
```

Seed data is used for development and testing. It should not be treated as a replacement for database migrations.

## Development Workflow

For a new feature:

```text
Create branch
     ↓
Understand requirements
     ↓
Implement
     ↓
Test
     ↓
Commit
     ↓
Push
     ↓
Pull Request
     ↓
Review
     ↓
Merge
```

Keep `master` stable and avoid committing unfinished feature work directly to it.

## Current Database Models

The current database contains:

- `User`
- `Catalog`
- `Inventory`
- `Sale`
- `saleItem`

Relationships between these models represent users making sales, sales containing sale items, products having inventory batches, and products being referenced by sale items.

## Team Principle

**Understand the problem before writing the code.**

Requirements, database design, API design, and implementation should follow a clear progression rather than coding first and designing later.