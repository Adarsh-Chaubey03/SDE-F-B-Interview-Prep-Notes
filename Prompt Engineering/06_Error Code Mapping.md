
# 6 — Error Code Mapping

## Basic Concept

**Error code mapping = converting technical error codes into understandable meanings and recommended actions.**

Example:

```text
HTTP 404 → Resource not found
HTTP 401 → Authentication required/failed
HTTP 403 → Access forbidden
HTTP 500 → Internal server error
```

The prompt should make AI:

**Identify → Interpret → Map → Recommend**

---

## Example 1

> **Act as a technical support engineer. Analyze the provided error codes and map each code to its standard meaning. Explain the likely cause and provide a recommended troubleshooting action. Do not invent meanings for unknown codes. Return the result as a table with Error Code, Meaning, Likely Cause, and Recommended Action.**

---

## Example 2

Suppose logs contain:

```text
HTTP 401
HTTP 404
HTTP 500
```

Prompt:

> **Analyze the HTTP error codes in the provided logs. Map each code to its standard HTTP meaning, identify the likely cause based on the available context, and recommend the appropriate troubleshooting action. If an error code cannot be reliably interpreted, mark it as "Unknown" rather than guessing. Return a concise table with Code, Meaning, Cause, and Action.**

### Important distinction

**Don't ask the model to guess.**

For technical assessments, use phrases like:

> **"Use standard definitions."**

> **"Do not speculate."**

> **"Mark unknown codes as Unknown."**

These make the prompt more reliable.

