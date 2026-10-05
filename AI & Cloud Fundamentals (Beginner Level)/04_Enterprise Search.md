# 4 — Enterprise Search

## 1. What is Enterprise Search?

**Enterprise Search** is a system that allows users to search and discover information across an organization's internal data sources.

Examples:

- Company documents
- Emails
- Slack/Teams messages
- Wikis
- CRM
- Jira tickets
- Code repositories
- Databases

The key difference from ordinary web search:

> **Enterprise search must respect organizational permissions.**

A user should only retrieve information they are authorized to access. [techinterview.org](https://www.techinterview.org/post/3233474458/system-design-design-slack-search-enterprise-search-nlp-query-understanding-faceted-search-index-permission-real-time/?utm_source=chatgpt.com)

---

# 2. Typical Enterprise Search Architecture

A simplified pipeline:

**Data Sources → Connectors → Processing → Index → Query → Retrieval → Ranking → Results**

With AI:

**Query → Search/Retrieval → Relevant Context → LLM → Grounded Answer + Citations**

---

# 3. Connectors

A **connector** connects the search system to an external data source.

Examples:

- Google Drive connector
- SharePoint connector
- Slack connector
- Jira connector
- GitHub connector

The connector retrieves:

- Content
- Metadata
- Updates
- Permissions

Connectors are important because enterprise information is usually distributed across many systems. [techinterview.org](https://www.techinterview.org/post/3233474458/system-design-design-slack-search-enterprise-search-nlp-query-understanding-faceted-search-index-permission-real-time/?utm_source=chatgpt.com)

---

# 4. Crawling / Ingestion

The system collects information from connected sources.

Two common approaches:

### Full crawl

Scan/index the entire source.

### Incremental sync

Only process content that has changed.

Incremental synchronization is generally more efficient after the initial indexing.

---

# 5. Indexing

An **index** is a data structure optimized for efficient searching.

Instead of scanning every document whenever someone searches, the search engine queries its index.

Common index types include:

- Inverted index → keyword search
- Vector index → semantic/vector search [IBM](https://www.ibm.com/think/topics/enterprise-search?utm_source=chatgpt.com)


---

# 6. Keyword Search

Keyword search looks for matching terms.

Example:

Query:

> `Razorpay payment failure`

A keyword search looks for documents containing terms such as:

`Razorpay`, `payment`, `failure`.

It is particularly useful for:

- Exact names
- IDs
- Error codes
- Product names
- Specific terms

---

# 7. Semantic Search

Semantic search focuses on **meaning rather than exact word matching**.

Query:

> "How can I get money back for a cancelled order?"

It may retrieve a document containing:

> "Refund policy for cancelled purchases."

Even though the exact words differ.

Semantic search commonly uses **embeddings/vector representations**. [IBM](https://www.ibm.com/think/topics/enterprise-search?utm_source=chatgpt.com)

---

# 8. Vector Search

Text is converted into vectors using an embedding model.

Then the search system finds vectors that are similar to the query vector.

Conceptually:

**Query → Embedding → Vector Search → Similar Documents**

---

# 9. Hybrid Search

This is important.

**Hybrid Search = Keyword Search + Vector/Semantic Search**

Why?

Keyword search is strong at:

> `"INC-48291"`

Semantic search is strong at:

> `"Why are customers unable to complete payments?"`

Combining them can improve retrieval quality. [Maywise](https://maywise.in/blog/enterprise-rag-interview-guide-2026?utm_source=chatgpt.com)

---

# 10. Metadata

Metadata describes a document.

Examples:

- Author
- Date
- Department
- File type
- Project
- Location
- Document title
- Access permissions

Metadata can be used for **filtering and ranking**.

Example:

> "Find HR policies from 2026."

The system can filter:

`department = HR`

and

`year = 2026`.

---

# 11. Ranking

Search may retrieve many candidate documents.

**Ranking** determines which results should appear first.

Factors may include:

- Relevance
- Keyword match
- Semantic similarity
- Recency
- Authority
- Metadata
- User context

The goal is to place the most useful results near the top. [Gartner](https://www.gartner.com/reviews/market/enterprise-ai-search?utm_source=chatgpt.com)

---

# 12. Security Trimming

This is one of the **highest-priority concepts**.

Suppose:

- Document A → public to employees
- Document B → accessible only to HR

A non-HR employee searches for:

> "Employee salary policy"

The search system must **not return Document B**.

This filtering based on user permissions is called **security trimming / permission-aware search**.

Enterprise search systems need to enforce access controls during retrieval, not simply rely on the LLM to "remember" permissions. [techinterview.org](https://www.techinterview.org/post/3233474458/system-design-design-slack-search-enterprise-search-nlp-query-understanding-faceted-search-index-permission-real-time/?utm_source=chatgpt.com)

---

# 13. Freshness

Enterprise data changes constantly.

Example:

Monday:

> Employee policy = Version 1

Wednesday:

> Employee policy = Version 2

The search index needs to receive the update.

**Freshness** refers to how current the indexed information is compared with the source.

Incremental updates/change events help maintain freshness. [techinterview.org](https://www.techinterview.org/post/3233474458/system-design-design-slack-search-enterprise-search-nlp-query-understanding-faceted-search-index-permission-real-time/?utm_source=chatgpt.com)

---

# 14. Enterprise Search + RAG

Enterprise search can provide the retrieval layer for a RAG system.

Example:

**Employee asks:**  
> "What is our current work-from-home policy?"

System:

1. Search company knowledge
2. Retrieve relevant authorized documents
3. Pass relevant passages to LLM
4. Generate answer
5. Provide citations

This produces a **grounded enterprise AI assistant**.

