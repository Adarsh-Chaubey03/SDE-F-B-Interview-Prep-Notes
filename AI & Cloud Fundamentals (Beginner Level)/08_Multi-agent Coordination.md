# 8 — Multi-Agent Coordination


## 1. Why Multi-Agent Coordination?

A single agent may struggle when a task requires:

- Different expertise
- Different tools
- Independent subtasks
- Parallel execution
- Independent verification
- Different security boundaries

Example:

> "Research 20 companies, analyze their financials, compare them, and write a report."

Instead of one agent doing everything:

**Coordinator**
→ Research agents  
→ Financial-analysis agents  
→ Comparison agent  
→ Report agent

The important point:

> **Multiple agents should be introduced only when the decomposition provides a real benefit.**

Adding agents automatically increases:

- Latency
- Cost
- Coordination complexity
- Failure possibilities

This "start with one agent and split only when justified" principle is repeatedly emphasized in current interview material. [The Sheldon Wang Site](https://sheldonwangrjt.github.io/agent-interviews/concepts/multi-agent/?utm_source=chatgpt.com)

---

# 2. Orchestrator / Supervisor Pattern

A central **supervisor** coordinates worker agents.

```text
             Supervisor
            /     |     \
       Agent A  Agent B  Agent C
```

The supervisor can:

1. Understand the overall goal
2. Decompose it
3. Assign tasks
4. Collect results
5. Validate/aggregate them
6. Decide what happens next

This is one of the most common production-oriented patterns because centralized control makes the system easier to observe and debug. [Interview Coder](https://www.interviewcoder.co/blog/multi-agent-system-design-interview?utm_source=chatgpt.com)

---

# 3. Sequential Pipeline

Agents operate in a predetermined sequence:

```text
Research → Analysis → Writing → Review
```

Agent B depends on Agent A's output.

Useful when the task naturally follows a fixed sequence.

---

# 4. Parallel / Fan-Out-Fan-In

Independent tasks are executed simultaneously.

```text
              Coordinator
             /     |     \
          A        B       C
           \       |      /
              Aggregate
```

Example:

Research 10 companies.

Instead of:

`Company 1 → Company 2 → Company 3...`

research agents can work simultaneously.

Then their outputs are aggregated.

### Key benefit

**Lower wall-clock latency.**

---

# 5. Hierarchical Coordination

There can be multiple levels:

```text
              Master
             /      \
       Supervisor   Supervisor
        /    \       /    \
       A      B     C      D
```

Useful for large task trees.

A supervisor manages a group of agents while a higher-level supervisor coordinates the supervisors.

---

# 6. Peer-to-Peer / Decentralized Coordination

Agents communicate directly with each other instead of relying on one central supervisor.

```text
A ↔ B
↕   ↕
C ↔ D
```

Advantages:

- Flexible
- No single coordinator bottleneck

Disadvantages:

- Harder to debug
- More communication complexity
- Harder to control globally

Current interview material contrasts centralized supervisor architectures with decentralized/peer-to-peer coordination for exactly these tradeoffs.

---

# 7. Shared Blackboard / Shared State

Agents communicate through shared state.

```text
Agent A ─┐
Agent B ─┼→ Shared State ← Agent C
Agent D ─┘
```

Example:

All research agents write findings to a shared knowledge store.

Another agent reads the findings and synthesizes them.

### Main advantage

Agents don't necessarily need direct communication.

### Main risk

Concurrent writes can cause:

- Race conditions
- Conflicting updates
- Stale state
- Lost updates

Therefore, versioning/locking/transactions may be necessary. 
---

# 8. Agent Communication

Common mechanisms include:

### Direct message passing

A → B

Simple but can create tight coupling.

### Message queue

A publishes:

`task.completed`

B consumes it.

Useful for asynchronous and decoupled communication.

### Shared state

Agents read/write a common store.

### Event bus

Agents publish events that interested components consume.

---

# 9. Task Delegation

Good delegation requires a **bounded task**.

Bad:

> "Analyze the company."

Better:

> "Analyze Q3 revenue growth using the provided financial reports. Return revenue growth percentage, evidence, and source."

A useful task contract can specify:

- Objective
- Inputs
- Expected output
- Allowed tools
- Constraints
- Deadline
- Failure behavior

Current multi-agent guidance strongly emphasizes bounded worker tasks and explicit contracts.

---

# 10. Shared State vs Context

Do not confuse these.

### Context

Information passed into a model invocation.

### Shared state

Persistent system state accessible across agent steps.

Example:

```text
Task status = "research_complete"
Research artifact = report_123
Version = 4
Owner = Agent_B
```

Shared state should ideally exist outside the model's temporary context.

---

# 11. Synchronization

If multiple agents work concurrently, the system must determine:

> When is it safe to continue?

Example:

Three research agents must finish before the synthesis agent starts.

This is a **barrier / synchronization point**.

```text
A ──┐
B ──┼──→ Synthesis
C ──┘
```

---

# 12. Conflict Resolution

Suppose:

**Agent A:** Product price = ₹500

**Agent B:** Product price = ₹550

The system needs a conflict-resolution strategy.

Possible approaches:

- Verify against authoritative source
- Compare evidence
- Prefer newer data
- Ask another agent
- Human review

Never simply assume the first response is correct.

---

# 13. Validation Between Agents

Agent output should not automatically become trusted input for the next agent.

Example:

```text
Research Agent
      ↓
Validator
      ↓
Analysis Agent
```

Validation can check:

- Schema
- Completeness
- Evidence
- Constraints
- Correctness

This is particularly important before consequential actions. 

---

# 14. Failure Handling

Agents can fail independently.

Example:

- Research Agent A succeeds
- Research Agent B times out
- Research Agent C returns invalid output

The coordinator needs policies such as:

- Retry
- Fallback
- Skip
- Reassign
- Partial completion
- Human escalation

---

# 15. Idempotency

Very important for agent systems performing actions.

Suppose an agent sends:

> "Create payment."

The network times out.

The agent doesn't know whether payment succeeded.

If it blindly retries, it could create **two payments**.

An idempotent operation ensures repeating the same request does not create unintended duplicate effects.

---

# 16. Coordination Cost

More agents do **not** automatically mean better performance.

Suppose:

### Single agent

100 tokens + 1 model call

### Five-agent system

5 × context + communication + aggregation + additional calls

The multi-agent system may be:

- More expensive
- Slower
- Harder to debug

Use multi-agent architecture only when its benefits justify the additional cost.