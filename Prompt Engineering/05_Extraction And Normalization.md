# 5 — Extraction + Normalization

## Basic Concept

This is actually **two related tasks**.

### 1. Extraction

Extract specific information from unstructured text.

Example:

> `"Rahul Sharma, age 22, lives in Delhi, email rahul@gmail.com"`

Extract:

| Name | Age | City | Email |
|---|---:|---|---|
| Rahul Sharma | 22 | Delhi | rahul@gmail.com |

### 2. Normalization

Convert extracted information into a **consistent format**.

Example:

```text
"Delhi"
"delhi"
"DELHI"
```

Normalize all to:

```text
Delhi
```

Another example:

```text
01/10/2026
2026-10-01
Oct 1, 2026
```

Normalize to:

```text
2026-10-01
```

---

## How to Frame the Prompt

Think:

**Extract → Normalize → Validate → Structured output**

Specify:

1. What fields to extract
2. What format to normalize them into
3. What to do with missing information
4. Required output format

---

## Example 1 — Resume Extraction

> **Extract the candidate's name, email, phone number, skills, and years of experience from the provided resume. Normalize phone numbers to international format and represent missing fields as "Not Available". Return the result as JSON. Do not infer information that is not present in the resume.**

---

## Example 2 — Customer Data

Input:

> `"John Doe | john.doe@gmail.com | +91 98765 43210 | Mumbai"`

Prompt:

> **Extract the customer's name, email, phone number, and city. Normalize the phone number to +91XXXXXXXXXX and capitalize the city name consistently. If a field is missing, use "N/A". Return the result as a table with four columns: Name, Email, Phone, City.**

### Key distinction

**Extraction = finding the information.**

**Normalization = making the information consistent.**

---

