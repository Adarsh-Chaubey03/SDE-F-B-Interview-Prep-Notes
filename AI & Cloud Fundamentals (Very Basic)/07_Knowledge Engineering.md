# 7 — Knowledge Engineering

## 1. What is Knowledge Engineering?

**Knowledge Engineering (KE)** is the process of **acquiring, representing, organizing, validating, and maintaining knowledge so that a computer system can use it for reasoning or decision-making.**

Simple flow:

**Acquire knowledge → Represent → Store → Reason → Update**

Example:

A medical knowledge system may contain:

> Fever + cough → possible respiratory infection

The system stores this knowledge in a machine-usable form.

---

# 2. Knowledge Representation

**Knowledge Representation (KR)** is the way knowledge is formally represented so that an AI system can process and reason over it.

Common approaches:

- Logic
- Rules
- Semantic networks
- Frames
- Ontologies
- Knowledge graphs

### Simple distinction

**Knowledge Engineering** = the broader process.

**Knowledge Representation** = how knowledge is represented.

---

# 3. Knowledge Base

A **Knowledge Base (KB)** is a collection of information that an AI system can use.

It may contain:

- Facts
- Rules
- Relationships
- Definitions
- Domain knowledge

Example:

```text
Fact:
Delhi is in India.

Rule:
If a city is in India, then the city is in Asia.
```

The system can use the rule to infer:

> Delhi is in Asia.

---

# 4. Facts

A **fact** is information considered true within the knowledge base.

Example:

> "Aditya is a student."

or:

> `Student(Aditya)`

Facts represent **what is known**.

---

# 5. Rules

Rules represent logical relationships or conditions.

Typical structure:

**IF condition → THEN conclusion**

Example:

> IF temperature > 38°C  
> THEN fever = true

Rules represent knowledge about **how conditions lead to conclusions**.

---

# 6. Declarative vs Procedural Knowledge

### Declarative Knowledge

Knowledge about **what is true**.

Example:

> "Paris is the capital of France."

### Procedural Knowledge

Knowledge about **how to do something**.

Example:

> "To calculate average, add all values and divide by their count."

### Memory trick

**Declarative = WHAT**

**Procedural = HOW**

This distinction is a common knowledge-representation interview question. [Guvi](https://www.guvi.in/blog/what-is-knowledge-representation-in-ai/?utm_source=chatgpt.com)

---

# 7. Ontology

An **ontology** is a formal representation of:

- Concepts/entities
- Properties
- Relationships
- Constraints

within a particular domain.

Example:

```text
Person
 ├── Student
 └── Teacher

Student ── enrolledIn ── Course
Teacher ── teaches ── Course
```

Ontology defines what concepts exist and how they relate.

---

# 8. Knowledge Graph

A **Knowledge Graph** represents knowledge using entities and relationships.

Example:

```text
Adarsh ── studiesAt ── NIT Manipur
NIT Manipur ── locatedIn ── Manipur
Manipur ── locatedIn ── India
```

The nodes represent **entities**.

The edges represent **relationships**.

Knowledge graphs are increasingly relevant to AI because they can support **search, reasoning, entity relationships, and grounding of LLM applications**. [naildd.com](https://www.naildd.com/blog/knowledge-graph-data-science-interview?utm_source=chatgpt.com)

---

# 9. Entity

An **entity** is a distinct object/concept represented in the knowledge system.

Examples:

- Person
- Company
- University
- Product
- City

In:

> "Google acquired YouTube."

Entities include:

**Google** and **YouTube**.

---

# 10. Relationship

A relationship describes how two entities are connected.

Example:

```text
Google ── acquired ── YouTube
```

`acquired` is the relationship.

---

# 11. Triple

A common way to represent knowledge is:

**Subject → Predicate → Object**

Example:

```text
Google → acquired → YouTube
```

Therefore:

- Subject = Google
- Predicate = acquired
- Object = YouTube

This is often called an **RDF-style triple**.

---

# 12. Semantic Network

A **semantic network** represents concepts as nodes and relationships as links.

Example:

```text
Animal
   ↓
Mammal
   ↓
Dog
```

It represents relationships such as:

- is-a
- part-of
- owns
- located-in

Semantic networks are a classic knowledge-representation technique. [Guvi](https://www.guvi.in/blog/what-is-knowledge-representation-in-ai/?utm_source=chatgpt.com)

---

# 13. Frames

A **frame** represents an entity/concept using a collection of attributes or **slots**.

Example:

```text
Frame: Student

Name: Adarsh
University: NIT Manipur
Branch: CSE
Year: Final
```

Think:

> **Frame = structured description of an object/concept.**

---

# 14. Inference

**Inference** means deriving new knowledge from existing knowledge.

Example:

Facts:

> Ravi is a human.

Rule:

> All humans are mortal.

Inference:

> Ravi is mortal.

This is one of the central purposes of representing knowledge formally.

---

# 15. Knowledge Graph vs Relational Database

### Relational Database

Data is primarily organized in:

**Tables → Rows → Columns**

Relationships are commonly represented through keys and joins.

### Knowledge Graph

Data is naturally represented as:

**Entities → Relationships → Entities**

Knowledge graphs are particularly useful when relationships are central and highly connected.

This distinction is a common knowledge-graph interview topic.

# 16. Structured vs Unstructured Knowledge

### Structured

Clearly organized into a predefined schema.

Example:

```text
Employee_ID | Name | Department
```

### Unstructured

No fixed tabular structure.

Examples:

- PDFs
- Emails
- Documents
- Images
- Free-form text

Knowledge engineering often involves transforming unstructured information into a more structured, usable representation.

---

# 17. Knowledge Graph + RAG

A knowledge graph can complement RAG.

Example:

User asks:

> "Which employees work on Project X and report to managers in the Engineering department?"

A vector search system is good for retrieving relevant text.

A knowledge graph can be particularly useful for **explicit entity relationships and multi-hop connections**.

A modern AI system can use:

**Knowledge Graph + Vector Search + LLM**

rather than treating these as competing technologies. 