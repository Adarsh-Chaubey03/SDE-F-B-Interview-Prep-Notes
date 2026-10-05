# 9 — OpenTelemetry


OpenTelemetry (OTel) is a **vendor-neutral observability framework** used to instrument applications and generate, collect, process, and export telemetry. Its major signals are **traces, metrics, and logs**.

## 1. Core idea

A typical flow is:

**Application → Instrumentation → OTel SDK → Collector → Backend**

The Collector is optional, but commonly used.

Example:

```text
User Request
     ↓
Service A
     ↓
Service B
     ↓
Database
```

OTel can capture what happened across this entire path.

---

# 2. Telemetry Signals

### Traces
Used to understand **one request or transaction across multiple services**.

```text
Trace
 ├── Span: API Gateway
 ├── Span: User Service
 ├── Span: Database Query
 └── Span: Payment Service
```

A **span** represents an individual operation. A trace is composed of related spans. 
### Metrics

Numerical measurements collected over time.

Examples:

- CPU utilization
- Request rate
- Error rate
- Request latency
- Memory usage

Best for answering:

> "How is the system behaving overall?"

### Logs

Individual records/events describing something that happened.

Example:

```text
2026-10-05 23:10:04
ERROR Payment failed
order_id=1234
```

OTel can correlate logs with traces using trace/span context.
### Easy distinction

| Signal | Best for |
|---|---|
| **Trace** | Why did this particular request become slow? |
| **Metric** | Is latency increasing across the service? |
| **Log** | What specific event/error occurred? |

---

# 3. Instrumentation

Instrumentation means adding telemetry generation to an application.

### Automatic / Zero-code instrumentation

Automatically instruments supported frameworks/libraries with minimal application-code changes.

Useful when:

- You want quick adoption
- You need standard telemetry
- You don't want to manually modify many services

### Manual instrumentation

Developers explicitly create spans, attributes, events, etc.

Useful for:

- Custom business operations
- Domain-specific workflows
- Important operations not automatically instrumented

---

# 4. OTel API vs SDK

This is an important distinction.

### API

Defines the **interfaces used by application/instrumentation code** to create and interact with telemetry.

### SDK

Provides the **implementation and configuration**, including processing, sampling, and exporting.

Official OTel documentation explicitly distinguishes the API from the language-specific SDK implementation.

Think:

```text
API = "How instrumentation talks to OTel"

SDK = "How OTel actually handles that telemetry"
```

---

# 5. OpenTelemetry Collector

The Collector is a **vendor-neutral proxy** that can:

1. Receive telemetry
2. Process telemetry
3. Export telemetry


Typical architecture:

```text
Application
    ↓
OTel Collector
    ↓
 ┌───────────────┐
 ↓               ↓
Backend A     Backend B
```

This is useful when you don't want every application to communicate directly with every observability backend.

---

# 6. Collector Components

A Collector pipeline commonly contains:

```text
Receiver → Processor → Exporter
```

### Receiver

**Receives telemetry.**

Examples:

- OTLP receiver
- Prometheus receiver
- Jaeger receiver

### Processor

**Modifies, filters, batches, samples, or otherwise processes telemetry.**

Examples:

- Batch processor
- Memory limiter
- Filter processor
- Tail sampling processor

### Exporter

**Sends telemetry somewhere else.**

For example:

```text
Collector
   ↓
OTLP Exporter
   ↓
Observability Backend
```

---

# 7. OTLP

**OTLP = OpenTelemetry Protocol**

It is the vendor-neutral protocol used to transport telemetry.

Don't confuse:

- **OTel** → observability framework
- **OTLP** → protocol for transmitting OTel telemetry

---

# 8. Context Propagation

This is critical for distributed tracing.

Suppose:

```text
Frontend
   ↓
Order Service
   ↓
Payment Service
   ↓
Database
```

The tracing context must travel between these components so that their spans belong to the same trace.

Without propagation:

```text
Trace 1: Frontend
Trace 2: Order Service
Trace 3: Payment Service
```

With propagation:

```text
             ONE TRACE
                 │
       ┌─────────┼─────────┐
       ↓         ↓         ↓
   Frontend    Order    Payment
```

OTel uses context propagation mechanisms to enable distributed tracing.
---

# 9. Trace ID and Span ID

A **Trace ID** identifies the overall distributed request.

A **Span ID** identifies one operation within that trace.

Example:

```text
Trace ID: ABC123

    Span A → Span ID: 001
       ↓
    Span B → Span ID: 002
       ↓
    Span C → Span ID: 003
```

This allows individual operations to be connected to the complete request.

---

# 10. Resources

A **Resource** describes the entity producing telemetry.

For example:

```text
service.name = payment-service
service.version = 2.1
deployment.environment = production
```

This helps the backend understand **which service/environment produced the telemetry**.

---

# 11. Semantic Conventions

Different teams could describe the same thing differently:

```text
http_method
HTTPMethod
request_method
method
```

That creates interoperability problems.

OTel Semantic Conventions provide standardized names and meanings for telemetry attributes. 

This is particularly important in **polyglot environments**, where different services may use different programming languages. 
---

# 12. Sampling

Large systems can generate enormous numbers of traces.

Instead of storing everything, sampling determines **which traces should be retained**.

For example:

```text
1,000,000 requests
       ↓
    Sampling
       ↓
   100,000 traces
```

This reduces storage and processing overhead. [OpenTelemetry](https://opentelemetry.io/docs/specs/otel/trace/sdk/?utm_source=chatgpt.com)

### Head sampling

Decision is made **early**, usually when the trace begins.

Advantage:

- Low overhead

Limitation:

- You may not yet know whether the request eventually fails.

### Tail sampling

Decision can be made **after more/all of the trace is available**.

Example:

> Keep every trace containing an error, but keep only 1% of successful traces.

This is more powerful for intelligent trace selection but requires more infrastructure/state.

---

# 13. Cardinality

Cardinality means the number of **distinct values** for an attribute/dimension.

Consider:

```text
http.status_code = 200
```

Low cardinality.

But:

```text
user_id = 983472
```

Potentially millions of distinct values.

Using highly unique values as metric dimensions can dramatically increase the number of time series and associated cost.

### Rule

**High-cardinality data requires caution, especially in metrics.**

---

# 14. OTel Backend

OpenTelemetry is **not the observability backend itself**.

OTel can export telemetry to an observability backend where telemetry can be:

- stored
- queried
- visualized
- alerted on

Conceptually:

```text
Application
     ↓
OpenTelemetry
     ↓
Backend
     ↓
Dashboards / Queries / Alerts
```

OTel's vendor-neutral approach allows applications to avoid being tightly coupled to a particular vendor's instrumentation SDK. [OpenTelemetry](https://opentelemetry.io/docs/concepts/components/?utm_source=chatgpt.com)

---

# 15. Important Architecture to Remember

```text
                    APPLICATION
                         │
                 Instrumentation
                         │
                    OTel API
                         │
                    OTel SDK
                         │
                    OTLP / Other
                         │
                         ▼
                 OTel COLLECTOR
                         │
            ┌────────────┼────────────┐
            ↓            ↓            ↓
        Receiver     Processor     Exporter
                                      │
                                      ▼
                               OBSERVABILITY
                                  BACKEND
```


