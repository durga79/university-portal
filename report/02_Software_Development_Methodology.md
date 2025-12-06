# Software Development Methodology

This project employed an **Agile-inspired secure development methodology** that enabled iterative feature refinement, continuous security testing, and validation of security requirements throughout the development lifecycle. Given the individual nature of the project and time constraints, a lightweight application of Agile principles was adopted rather than a full Scrum implementation.

The development process was organized into short development cycles, each focusing on specific functional or security aspects such as authentication implementation, CRUD operations, session security hardening, or specific feature development (attendance tracking, course materials, etc.). After each cycle, both functional and static security testing were conducted to ensure correctness and identify potential vulnerabilities early in the development process.

This iterative approach facilitated continuous improvement of the system and allowed security-critical aspects to be addressed incrementally. The progressive enhancement ensured that as new features were added, they did not compromise the security features that had been previously implemented. Each iteration included:

1. **Planning**: Define security requirements and functional features for the iteration
2. **Development**: Implement features with security considerations integrated
3. **Security Review**: Code review focusing on security best practices
4. **Testing**: Functional testing and SAST (Static Application Security Testing)
5. **Integration**: Merge changes with existing codebase, ensuring no security regressions

The use of **Git version control** with meaningful commit messages demonstrates this iterative approach. The commit history shows regular, incremental development with features being added and refined over time, rather than a last-minute code dump. This approach aligns with secure software development best practices, where security is not an afterthought but integrated throughout the development process.

**Technology Selection Rationale:**
- **Next.js 16**: Modern React framework with built-in security features, server-side rendering, and API routes
- **TypeScript**: Type safety prevents common programming errors and security vulnerabilities
- **Prisma ORM**: Type-safe database queries prevent SQL injection, eliminates raw SQL exposure
- **NextAuth.js**: Industry-standard authentication library with secure session management
- **PostgreSQL (Neon)**: Robust, ACID-compliant database with strong security features
- **Zod**: Runtime schema validation ensures data integrity and prevents injection attacks

This methodology ensured that security was considered at every stage of development, from initial design through implementation and testing, resulting in a robust and secure application.

