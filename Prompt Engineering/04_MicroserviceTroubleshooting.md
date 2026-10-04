
# 4 — Microservices Troubleshooting

## Basic Concept

In a **microservices architecture**, an application is divided into multiple independent services.

Example:

```text
User → API Gateway → Order Service → Payment Service
                         ↓
                    Database
```

If something fails, the problem may be:

- Service unavailable
- Network/timeout issue
- Database failure
- Authentication failure
- Incorrect configuration
- Dependency failure
- Service-to-service communication problem

### Key idea

Don't just ask:

> "Why is the application failing?"

Ask the AI to **trace the dependency chain** and isolate the failing service.

---

## How to Frame the Prompt

Use this structure:

> **Analyze service → trace dependencies → identify failing component → determine root cause → recommend fix**

Important words for assessment:

**service dependency, request flow, failure point, root cause, logs, configuration, timeout, dependency**

---

## Example 1

### Scenario:
Order creation is failing.

> **Act as a senior microservices engineer. Analyze the provided logs for the order creation failure. Trace the request flow across the API Gateway, Order Service, and Payment Service. Identify the first failing component, determine the root cause using only the available evidence, and suggest a practical fix. Return the result as a table with Service, Failure, Root Cause, and Fix.**

---

## Example 2

### Scenario:
Payment requests are timing out.

> **Analyze the microservices logs to troubleshoot payment request timeouts. Trace the communication between the Order Service, Payment Service, and external payment API. Identify where the timeout occurs, determine the likely cause based on the logs, and recommend the next troubleshooting action. Do not assume causes that are unsupported by the evidence.**

### Difference from normal log analysis

**Log Analysis:**  
Focus mainly on understanding the logs.

**Microservices Troubleshooting:**  
Focus on **relationships between services and the request/dependency flow**.

That distinction is important.



