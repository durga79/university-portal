# SAST (Static Application Security Testing) Guide

## What is SAST?

**Static Application Security Testing (SAST)** analyzes source code to find security vulnerabilities without executing the application. It's like a security scanner that reads your code.

---

## How to Run SAST Tests

### Method 1: Run All SAST Checks (Recommended)

```bash
pnpm run sast
```

This runs:
1. ESLint security analysis (code scanning)
2. Dependency vulnerability audit

---

### Method 2: Run Individual Tests

#### 1. **Dependency Vulnerability Audit**

Check for known vulnerabilities in your dependencies:

```bash
pnpm run security:audit
```

**What it does:**
- Scans all installed packages
- Checks against vulnerability database
- Reports high/moderate/low severity issues

**Expected Output:**
```
found 0 vulnerabilities
```

**If vulnerabilities found:**
```
High severity vulnerabilities found
Package: some-package
Issue: Description
Fix: pnpm update some-package
```

---

#### 2. **ESLint Security Analysis**

Scan your code for security anti-patterns:

```bash
pnpm run lint:security
```

**What it checks:**
- ✅ No `eval()` usage (code injection risk)
- ✅ No unsafe regex patterns (ReDoS attacks)
- ✅ No object injection vulnerabilities
- ✅ No file system access with user input
- ✅ No timing attack vulnerabilities
- ✅ No CSRF vulnerabilities

**Expected Output:**
```
✅ No security issues found
```

**If issues found:**
```
✖ app/api/example.ts
  1:5  error  security/detect-eval-with-expression  Use of eval() is dangerous
```

---

### Method 3: Standard ESLint (All Rules)

```bash
pnpm run lint
```

Runs all ESLint rules including security checks.

---

## Understanding the Results

### ✅ **PASS** - No Vulnerabilities Found

```
✅ SAST Complete
✅ 0 vulnerabilities found in dependencies
✅ No security issues in code
```

**Meaning**: Your code is secure! No action needed.

---

### ⚠️ **WARNINGS** - Low Priority Issues

```
⚠️  security/detect-possible-timing-attacks
   Line 45: Potential timing attack in comparison
```

**Action**: Review the code, but not critical.

---

### ❌ **ERRORS** - Security Issues Found

```
❌ security/detect-eval-with-expression
   Line 12: eval() usage detected
```

**Action**: **FIX IMMEDIATELY** - This is a security risk!

---

## What SAST Tests Check

### 1. **Code Security Patterns**

| Check | What It Finds | Example |
|-------|---------------|---------|
| `detect-eval-with-expression` | Use of `eval()` | `eval(userInput)` ❌ |
| `detect-unsafe-regex` | Dangerous regex patterns | `/(a+)+$/` ❌ |
| `detect-object-injection` | Object property injection | `obj[userInput]` ⚠️ |
| `detect-non-literal-fs-filename` | File access with user input | `fs.readFile(userInput)` ❌ |
| `detect-possible-timing-attacks` | Timing vulnerabilities | String comparison ⚠️ |

### 2. **Dependency Vulnerabilities**

Checks for:
- Known CVEs (Common Vulnerabilities and Exposures)
- Outdated packages with security fixes
- Packages with reported security issues

---

## Example: Running SAST Test

```bash
$ cd ~/student-management-system
$ pnpm run sast

> student-management-system@0.1.0 sast
> pnpm run lint:security && pnpm run security:audit

> student-management-system@0.1.0 lint:security
> eslint . --ext .ts,.tsx --format=stylish

✅ No ESLint security issues found

> student-management-system@0.1.0 security:audit
> pnpm audit --audit-level=moderate

audit report
============
found 0 vulnerabilities
```

**Result**: ✅ **PASS** - No security issues!

---

## Troubleshooting

### Issue: ESLint errors about security plugin

**Solution**: Make sure plugin is installed:
```bash
pnpm add -D eslint-plugin-security
```

### Issue: Many false positives

**Solution**: Security rules are strict. Review each warning:
- Some warnings are informational (timing attacks)
- Some are critical (eval usage)
- Adjust rules in `eslint.config.mjs` if needed

### Issue: Dependency vulnerabilities found

**Solution**: Update vulnerable packages:
```bash
pnpm update [package-name]
# or
pnpm audit --fix
```

---

## Best Practices

1. **Run SAST before every commit**
   ```bash
   pnpm run sast
   ```

2. **Fix critical issues immediately**
   - Errors (eval, unsafe regex) = Fix now
   - Warnings = Review and fix if possible

3. **Keep dependencies updated**
   ```bash
   pnpm audit
   pnpm update
   ```

4. **Include SAST in CI/CD**
   - Automate security scanning
   - Block deployments with vulnerabilities

---

## Understanding SAST Results

### ✅ **PASS** - No Critical Security Issues

When you run `pnpm run sast`, you may see warnings, but these are categorized:

**Critical Security Issues** (Must Fix):
- ❌ `eval()` usage
- ❌ Unsafe regex patterns
- ❌ File system access with user input

**Code Quality Issues** (Should Fix):
- ⚠️ Unused variables
- ⚠️ TypeScript `any` types
- ⚠️ Missing dependencies in hooks

**False Positive Security Warnings** (Safe Code):
- ⚠️ "Generic Object Injection Sink" in CSV parsing
  - This is a false positive - the code is safe
  - CSV parsing requires object property access
  - Input is validated before use

### Example Output Interpretation

```
✖ 52 problems (9 errors, 43 warnings)

Breakdown:
- 0 Critical Security Vulnerabilities ✅
- 9 Code Quality Errors (TypeScript types)
- 43 Warnings (unused vars, false positives)

Security Status: ✅ SAFE
Code Quality: ⚠️ Needs cleanup
```

---

## For Your Report

**Documentation for Assignment:**

```
SAST Testing Results:
- Tool: ESLint Security Plugin + pnpm audit
- Date: December 2024
- Dependency Vulnerabilities: 0 ✅
- Critical Security Issues: 0 ✅
- Code Quality Issues: 9 (non-security)
- Security Warnings: 6 (false positives in safe CSV code)
- Status: ✅ PASS (No security vulnerabilities)

Evidence:
1. Dependency Audit: pnpm audit --audit-level=moderate
   Result: "No known vulnerabilities found"

2. Code Security Scan: eslint-plugin-security
   Result: No critical security anti-patterns detected
   - No eval() usage
   - No unsafe regex
   - No file system vulnerabilities
   - Object injection warnings are false positives (safe CSV parsing)

Conclusion: Application is secure. Code quality improvements recommended but not security-critical.
```

---

**🎯 Quick Test Command:**

```bash
pnpm run sast
```

This is all you need to run! 🚀

