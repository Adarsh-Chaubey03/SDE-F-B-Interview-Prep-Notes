# 2 — GenAI (Generative AI)

## 1. What is Generative AI?

**Generative AI (GenAI)** is AI that can **generate new content** based on patterns learned from training data.

It can generate:

- Text
- Images
- Audio
- Video
- Code

Examples:

- ChatGPT → text/code
- Image generation models → images
- Code-generation models → code

### Traditional AI vs GenAI

| Traditional AI | Generative AI |
|---|---|
| Usually predicts/classifies | Generates new content |
| Spam detection | Writing an email |
| Fraud detection | Generating code |
| Image classification | Creating an image |

---

# 2. LLM

**LLM = Large Language Model**

An LLM is a model trained on very large amounts of text to understand and generate language.

Examples:

- GPT
- Gemini
- Claude
- Llama

A fundamental idea:

> An LLM generates text by predicting the next token based on the preceding context.

It is **not simply searching a database of answers**. [coder000](https://www.coder000.com/post/ai-engineer-interview-llm-fundamentals?utm_source=chatgpt.com)

---

# 3. Token

A **token** is a unit of text processed by an LLM.

A token can be:

- A complete word
- Part of a word
- Punctuation
- Other pieces of text

Example:

`unbelievable`

could potentially be split into multiple tokens.

**Important:** Token ≠ necessarily word.

Tokens matter because they affect:

- Context limits
- Processing
- Cost
- Latency

---

# 4. Context Window

The **context window** is the maximum amount of tokenized information a model can consider within a request/conversation context.

It can include:

- Input prompt
- Previous conversation
- Retrieved documents
- Instructions
- Generated output, depending on the model/API accounting

If information exceeds the usable context, some information may need to be truncated or otherwise managed.

---

# 5. Transformer

Modern LLMs are largely based on the **Transformer architecture**.

The most important concept:

### Attention

Attention allows the model to determine which parts of the input are **more relevant to each other** when processing a sequence.

You do **not** need transformer mathematics for this assessment unless your actual test has deeper AI/ML questions.

---

# 6. Prompt

A **prompt** is the input/instruction provided to an AI model.

Example:

> "Summarize this article in 100 words."

A good prompt can specify:

- Role
- Task
- Context
- Constraints
- Output format

---

# 7. Temperature

Temperature controls the **randomness/variability of generated output**.

### Low temperature
→ More predictable/consistent output.

### High temperature
→ More diverse/creative output.

For structured extraction/classification, lower temperature is generally preferable. [Indian School of Skills](https://indianschoolofskills.org/blog/generative-ai-interview-questions/?utm_source=chatgpt.com)

**Trap:** Temperature does **not** automatically eliminate hallucinations.

---

# 8. Hallucination

An AI hallucination occurs when a model produces information that is **false, fabricated, or unsupported**, often with high confidence.

Example:

> An LLM invents a research paper that doesn't exist.

Possible mitigation:

- RAG
- Grounding
- Better prompts
- Citations
- Evaluation
- Human verification

---

# 9. Embeddings

An **embedding** represents data such as text as a numerical vector capturing semantic information.

Conceptually:

`"car"` → `[0.12, -0.44, 0.81, ...]`

Semantically similar texts tend to have vectors that are close according to an appropriate similarity measure.

Embeddings are heavily used in:

- Semantic search
- Recommendation
- RAG
- Clustering

---

# 10. RAG

**RAG = Retrieval-Augmented Generation**

Basic flow:

**User query → Retrieve relevant information → Give retrieved context to LLM → Generate answer**

RAG is useful when answers need information that is:

- Private
- Domain-specific
- Frequently changing
- External to the model's training knowledge

RAG is a particularly important GenAI fundamental. [Indian School of Skills](https://indianschoolofskills.org/blog/generative-ai-interview-questions/?utm_source=chatgpt.com)

---

# 11. Fine-Tuning vs RAG

### RAG

Provides external information **at inference time**.

Useful for:

> "Answer based on our company's latest policy."

### Fine-tuning

Updates/adapts model behavior using additional training data.

Useful when you want to change:

- Behavior
- Style
- Task-specific patterns
- Domain/task performance

A common assessment question is:

> "The company's documents change every week. Should we retrain the model?"

Usually **RAG**, not repeatedly fine-tuning the model.
