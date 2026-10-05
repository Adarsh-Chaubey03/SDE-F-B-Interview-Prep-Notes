# 11 — AgentOps

**AgentOps** is the operational discipline for building, deploying, monitoring, evaluating, securing, and improving **AI agents in production**.


---

## 1. Why AgentOps?

A traditional application might look like:

```text
Input → Code → Output
```

An agent can look like:

```text
User
 ↓
Agent
 ↓
Plan
 ↓
Tool A
 ↓
Observation
 ↓
Tool B
 ↓
Observation
 ↓
Decision
 ↓
Tool C
 ↓
Final Answer
```

A failure can therefore happen at many points.

AgentOps provides mechanisms to:

- monitor agent executions
- trace decisions and tool calls
- evaluate quality
- control cost
- detect failures
- manage versions
- enforce safety
- debug production behavior
- improve agents continuously

---

# 2. AgentOps vs MLOps

### MLOps

Primarily focuses on the lifecycle of **machine-learning models**.

Examples:

- training
- model versioning
- deployment
- model monitoring
- data drift

### AgentOps

Focuses on the **operational lifecycle of agents**.

Examples:

- agent runs
- tool calls
- prompts
- workflows
- planning
- failures
- latency
- token usage
- cost
- safety
- evaluation

The two can overlap.

---

# 3. Agent Lifecycle

A simplified AgentOps lifecycle:

```text
Design
  ↓
Develop
  ↓
Evaluate
  ↓
Deploy
  ↓
Monitor
  ↓
Analyze
  ↓
Improve
  ↓
Redeploy
```

This creates a continuous feedback loop.

---

# 4. Agent Run / Execution

An **agent run** represents one execution of an agent for a particular task.

Example:

```text
Run ID: 87231

User:
"Find the cheapest flight and book it."

Agent:
1. Search flights
2. Compare results
3. Select flight
4. Request confirmation
5. Book flight
```

AgentOps should allow engineers to understand what happened during that run.

---

# 5. Tracing

Tracing records the sequence of operations performed during an agent run.

Example:

```text
Agent Run
│
├── LLM Call
│
├── Search Tool
│
├── LLM Call
│
├── Booking API
│
└── Final Response
```

This helps answer:

> **Where did the agent spend time, tokens, or fail?**

Tracing is particularly important for multi-step agents.

---

# 6. Observability

Agent observability combines signals such as:

- traces
- metrics
- logs
- events

Important agent-specific information can include:

- prompt
- model
- tool selected
- tool arguments
- tool result
- latency
- token usage
- errors
- final output

This gives visibility into the agent's execution rather than only its final answer.

---

# 7. AgentOps Metrics

Useful metrics include:

### Performance

- latency
- throughput
- success rate
- failure rate

### AI quality

- task success
- correctness
- groundedness
- tool-selection accuracy
- instruction adherence

### Cost

- input tokens
- output tokens
- model/API cost
- tool usage

### Reliability

- tool failures
- retries
- timeout rate
- fallback rate

### Safety

- policy violations
- blocked actions
- prompt-injection attempts

---

# 8. Cost Monitoring

Agents can become expensive because one user request may produce many model/tool calls.

Example:

```text
User Request
     ↓
LLM Call × 5
     ↓
Search × 3
     ↓
Database × 2
     ↓
LLM Call × 2
```

A system that looks inexpensive per individual LLM call may become expensive at the **workflow level**.

AgentOps therefore tracks cost per:

- request
- agent run
- workflow
- user
- team
- model
- tool

---

# 9. Token Monitoring

Token usage is an important cost and performance metric.

For example:

```text
Run A → 2,000 tokens
Run B → 20,000 tokens
```

If both accomplish the same task, Run B may indicate:

- excessive context
- unnecessary reasoning
- repeated tool results
- poor prompt design
- inefficient agent loop

Therefore, token usage can reveal optimization opportunities.

---

# 10. Tool Monitoring

Tool usage should be tracked separately.

Example:

```text
Agent
 ├── Search API → success
 ├── CRM API → timeout
 ├── Database → success
 └── Email API → rejected
```

This helps identify whether a failure originated from:

- the agent
- the model
- the tool
- network infrastructure
- authentication
- invalid arguments

---

# 11. Agent Evaluation

Evaluation asks:

> **Did the agent actually accomplish the task correctly?**

A response can be grammatically perfect but operationally wrong.

Example:

```text
Task:
Cancel order #1234.

Agent:
"I have cancelled your order."

Reality:
Cancellation API was never called.
```

A simple output-quality check may miss this.

Agent evaluation should therefore consider **actual task outcome**, not only textual quality.

---

# 12. Offline vs Online Evaluation

### Offline evaluation

Evaluate agents **before deployment** using predefined test cases.

```text
Test Dataset
     ↓
Agent
     ↓
Evaluation
     ↓
Score
```

Useful for:

- regression testing
- comparing models
- testing prompts
- validating changes

### Online evaluation

Evaluate agent behavior **during production**.

Useful for detecting:

- unexpected failures
- changing user behavior
- production-only issues
- performance degradation

---

# 13. Regression Testing

Suppose:

```text
Version 1 → 92% task success
```

You change the prompt/model:

```text
Version 2 → 84% task success
```

Even if Version 2 produces nicer-looking answers, it introduced a regression.

AgentOps should therefore maintain evaluation suites that can be rerun whenever you change:

- model
- prompt
- tools
- agent workflow
- guardrails
- retrieval system

---

# 14. Versioning

Production agents have multiple versioned components.

For example:

```text
Agent v3
 ├── Prompt v5
 ├── Model X
 ├── Tool definitions v2
 ├── Guardrails v4
 └── Retrieval configuration v3
```

When something breaks, knowing **exactly which versions were used** is critical.

---

# 15. Reproducibility

If a production failure occurred:

```text
Run #87432
```

you should ideally be able to determine:

- model version
- prompt version
- tools used
- tool arguments
- retrieved context
- configuration
- guardrail configuration
- relevant environment information

Without this information, reproducing the problem becomes difficult.

---

# 16. Human-in-the-Loop

Some actions should require human approval.

Examples:

- large financial transaction
- deleting critical data
- sending sensitive communication
- changing production infrastructure

Architecture:

```text
Agent
  ↓
High-risk Action
  ↓
Human Approval
  ↓
Execute
```

This is especially useful when the consequences of an incorrect action are high.

---

# 17. Incident Management

AgentOps also includes handling production incidents.

Example:

```text
Agent success rate suddenly drops
              ↓
          Alert
              ↓
          Investigate
              ↓
     Identify failing tool
              ↓
       Mitigate / rollback
              ↓
          Fix system
```

The important concept is not merely detecting the problem but having a **response and recovery process**.

---

# 18. Alerts

An AgentOps system can generate alerts when metrics cross defined thresholds.

Example:

```text
Tool failure rate > 10%
        ↓
      ALERT
```

Other examples:

- latency exceeds threshold
- cost per run increases sharply
- task-success rate drops
- error rate increases
- unsafe-action rate increases

---

# 19. Guardrails + AgentOps

These are related but different.

### Guardrails

Prevent or constrain undesirable behavior.

```text
"Do not transfer more than ₹50,000."
```

### AgentOps

Monitors and manages the system.

```text
"How many attempted transfers exceeded ₹50,000?"
```

So:

> **Guardrails enforce policy; AgentOps operationalizes and monitors the agent.**

---

# 20. AgentOps + Observability

Observability answers:

> **What is happening inside the system?**

AgentOps goes further into:

> **How do we operate, evaluate, control, troubleshoot, and continuously improve the agent?**

Observability is therefore an important **component of AgentOps**, not a complete replacement for it.

---

# 21. Agent Failure Taxonomy

A production agent can fail in several ways.

### Model failure

Incorrect reasoning or hallucination.

### Tool failure

API returns an error.

### Planning failure

Agent chooses an inappropriate sequence of actions.

### Retrieval failure

Relevant information isn't retrieved.

### Integration failure

Agent cannot communicate with another system.

### Policy failure

Agent attempts an unauthorized or unsafe action.

### Infrastructure failure

Network, service, or compute failure.

Classifying the failure correctly is essential for debugging.

---

# 22. Retry vs Rollback

These are different.

### Retry

Useful for temporary failures.

```text
API timeout
 ↓
Retry
 ↓
Success
```

### Rollback

Useful when a newly deployed version introduces problems.

```text
Agent v4
 ↓
Production failure
 ↓
Rollback
 ↓
Agent v3
```

Blindly retrying a fundamentally incorrect agent decision is not a good recovery strategy.

---

# 23. Idempotency

AgentOps becomes particularly important when agents perform external actions.

Suppose:

```text
Agent → Payment API
```

The API succeeds, but the response is lost because of a network timeout.

The agent retries.

Without idempotency:

```text
Payment 1 ✓
Payment 2 ✓
```

The customer may be charged twice.

Therefore, external actions should use mechanisms such as **idempotency keys or status checks** where appropriate.

---

# 24. Cost–Quality Trade-off

Increasing agent intelligence isn't always optimal.

Example:

```text
Model A
Cost = $0.01
Success = 85%

Model B
Cost = $0.10
Success = 87%
```

The 2% quality improvement may not justify the 10× cost depending on the application.

AgentOps should evaluate:

> **quality + latency + reliability + cost**

rather than optimizing only one metric.

---

# 25. AgentOps Dashboard

A useful production dashboard might contain:

```text
Agent Success Rate       94%
Average Latency          2.4s
Failure Rate             3%
Avg Tokens / Run         8,200
Cost / Run               $0.08
Tool Error Rate          1.2%
Human Escalations        4%
Safety Blocks            17
```

This gives operators a high-level view of system health.


The core mental model:

```text
        AGENTOPS
           │
 ┌─────────┼─────────┐
 ↓         ↓         ↓
Observe   Evaluate   Control
 ↓         ↓         ↓
Trace    Quality   Guardrails
Metrics  Tests     HITL
Logs     Regression Policies
 ↓         ↓         ↓
 └─────────┼─────────┘
           ↓
      Improve Agent
           ↓
        Redeploy
```
