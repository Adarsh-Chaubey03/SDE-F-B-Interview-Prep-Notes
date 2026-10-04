

# 3 — Log Analysis

## Basic Concept

**Log analysis = examining system/application logs to identify errors, their causes, and possible solutions.**

Logs commonly contain:

- Timestamp
- Service/component
- Log level
- Error message
- Error code
- Request/transaction ID
- Stack trace

### Typical task

> Given 20 lines of logs, identify the **root cause** and suggest a **fix**.

---

## How to Frame the Prompt

Use:

> **Analyze the logs → identify errors → determine root cause → recommend action → structured output**

Be explicit that the AI should **not confuse symptoms with root causes**.

---

## Example 1

### Requirement:
Analyze application logs and find the main error.

> **Act as a senior backend engineer. Analyze the provided application logs. Identify all errors and warnings, determine the most likely root cause of the primary failure, and suggest a practical fix. Return the result as a table with columns: Timestamp, Error, Root Cause, Recommended Fix. Do not speculate beyond the evidence in the logs.**

The last sentence is important:

**"Do not speculate beyond the evidence."**

This prevents the model from inventing causes.

---

## Example 2

### Requirement:
Find why an API is returning HTTP 500.

> **Analyze the following server logs and determine why the API is returning HTTP 500. Trace the sequence of events leading to the failure, identify the root cause, and recommend the next debugging step. Use only evidence present in the logs. Return a concise 4-column table: Event, Evidence, Root Cause, Action.**

Here we added **sequence/trace analysis**, which is useful for logs.

