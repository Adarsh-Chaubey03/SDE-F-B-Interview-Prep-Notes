# 3 — Agentic AI

## 1. What is Agentic AI?

**Agentic AI** refers to AI systems that can pursue a goal by **reasoning/planning, selecting actions, using tools, observing results, and continuing until a goal or stopping condition is reached.**

Simple idea:

**Goal → Plan → Act → Observe → Decide next action → Repeat**

The important word is **autonomy**.

---

## 2. LLM vs AI Agent

### Normal LLM

**Prompt → Response**

Example:

> "Explain DBMS."

It generates an answer.

### Agent

**Goal → Reason → Tool → Observe → Reason → Action → Result**

Example:

> "Find the cheapest flight, compare options and book it."

The agent may:

1. Search flights
2. Compare results
3. Select one
4. Ask for approval
5. Book it

An agent is therefore **a system built around an LLM**, not simply an LLM itself. [ClapAssist](https://clapassist.com/tools/interview-questions/agentic-ai/?utm_source=chatgpt.com)

---

# 3. Agent Loop

The most important architecture to remember:

### Observe → Think/Plan → Act → Observe

For example:

**User:** Find tomorrow's weather.

**Agent:**
1. Understand goal
2. Decide weather tool is needed
3. Call weather API
4. Observe result
5. Generate response

This loop can repeat for multi-step tasks.

---

# 4. Tools

An agent becomes much more useful when it can use **external tools**.

Examples:

- Web search
- Calculator
- Database
- API
- Code execution
- Email
- Calendar

The LLM decides **which tool to call and with what arguments**, while the actual tool performs the operation.

---

# 5. Function Calling / Tool Calling

Function calling allows an LLM to produce a structured request to invoke a predefined function/tool.

Example:

User:

> "What's the weather in Delhi?"

LLM may determine:

`get_weather(city="Delhi")`

The application executes the function and returns the result.

**Important trap:** The LLM generally **selects/request the function call**; it does not magically execute arbitrary external functions by itself.

---

# 6. Planning

Planning means breaking a complex goal into smaller steps.

Example:

> "Organize a trip to Delhi."

Possible plan:

1. Find flights
2. Find hotels
3. Compare prices
4. Check availability
5. Present options

An agent can either:

- Create a plan first → **Plan-and-Execute**
- Decide the next action dynamically → more dynamic agent loop

---

# 7. Agent vs Workflow

This is a **high-probability distinction**.

### Workflow

Developer defines the sequence.

`Step 1 → Step 2 → Step 3 → Step 4`

### Agent

The model/system can decide what to do next at runtime.

Use a **workflow** when the process is predictable.

Use an **agent** when the path depends on the situation and cannot easily be predetermined. [ClapAssist](https://clapassist.com/tools/interview-questions/agentic-ai/?utm_source=chatgpt.com)

---

# 8. Memory

Agents may need memory to maintain information across steps or sessions.

### Short-term / working memory

Current task/conversation context.

### Long-term memory

Information stored externally for future use.

Example:

> User's preferred programming language = Java.

The agent can retrieve that information later.

---

# 9. ReAct

**ReAct = Reason + Act**

The basic idea is to alternate between reasoning and actions.

Conceptually:

**Reason → Act → Observe → Reason → Act**

It is important because it allows an agent to use tool results to decide its next action. [Tarmac](https://gettarmac.com/interview-questions/ai-engineering-agents-interview-questions?utm_source=chatgpt.com)

---

# 10. Multi-Agent Systems

Instead of one agent doing everything, multiple specialized agents can collaborate.

Example:

**Manager Agent**

↓

- Research Agent
- Coding Agent
- Testing Agent
- Documentation Agent

Each agent has a specialized responsibility.

---

# 11. Guardrails

Guardrails are mechanisms that constrain or validate agent behavior.

Examples:

- Allowed tools
- Input validation
- Output validation
- Permission restrictions
- Spending limits
- Rate limits
- Human approval

For high-impact actions, **human-in-the-loop** approval may be required.

---

# 12. Agent Failure Modes

Know these:

- Hallucinated tool calls
- Incorrect tool arguments
- Infinite loops
- Wrong planning
- Tool failure
- Context overflow
- Unsafe actions
- Incorrect final result

Therefore production agents need:

**timeouts + limits + validation + monitoring + fallback + human approval where necessary.** 