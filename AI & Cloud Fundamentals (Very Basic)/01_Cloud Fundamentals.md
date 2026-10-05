
# 1 — Cloud Fundamentals

### What is Cloud Computing?

**Cloud computing** is the delivery of computing resources—such as **servers, storage, databases, networking and software—over the internet on demand**, usually with usage-based pricing.

### Core characteristics

Remember these:

- **On-demand self-service** → users can provision resources when needed.
- **Broad network access** → services are accessible over networks.
- **Resource pooling** → provider shares physical resources among multiple customers.
- **Rapid elasticity** → resources can quickly scale up/down.
- **Measured service** → usage is monitored and typically billed accordingly.

---

## 2. Cloud Service Models

| Model | You primarily manage | Example |
|---|---|---|
| **IaaS** | OS, applications, data | Azure Virtual Machines |
| **PaaS** | Application + data | Azure App Service |
| **SaaS** | Mainly usage/configuration | Microsoft 365 |

### Easy memory trick

**IaaS → Infrastructure**

**PaaS → Platform**

**SaaS → Software**

As you move:

**IaaS → PaaS → SaaS**

Provider manages **more**, while you manage **less**.

---

## 3. Deployment Models

### Public Cloud
Infrastructure is operated by a cloud provider and shared among multiple customers.

Examples:
- AWS
- Microsoft Azure
- Google Cloud

### Private Cloud
Cloud infrastructure dedicated to a single organization.

### Hybrid Cloud
Combination of **private infrastructure + public cloud**.

### Multi-cloud
Using services from **multiple cloud providers**, e.g. Azure + AWS + GCP.

**Hybrid ≠ Multi-cloud.**

---

## 4. Scalability vs Elasticity

### Scalability
Ability of a system to handle increased workload by adding resources.

### Elasticity
Ability to **automatically or dynamically increase AND decrease resources according to demand**.

Example:

Traffic suddenly increases → add servers.

Traffic decreases → remove servers.

That is **elasticity**.

---

## 5. Vertical vs Horizontal Scaling

### Vertical Scaling
Increase resources of an existing machine.

`4 CPU → 8 CPU`

Also called **scale up**.

### Horizontal Scaling
Add more machines.

`1 server → 5 servers`

Also called **scale out**.

For highly distributed cloud applications, horizontal scaling is generally important.

---

## 6. Availability and Reliability

### Availability
How often a service is operational and accessible.

### Reliability
Ability of a system to consistently perform correctly over time.

### High Availability

Use redundancy so failure of one component does not bring down the entire system.

---

## 7. Region and Availability Zone

A **Region** is a geographic cloud location.

An **Availability Zone (AZ)** is an isolated location/data-center grouping within a region.

Example concept:

`Region`
→ AZ1  
→ AZ2  
→ AZ3

Deploying across multiple AZs improves **fault tolerance and availability**.

---

## 8. Basic Cloud Resources

### Compute
Provides processing power.

Examples:
- Virtual machines
- Containers
- Serverless functions

### Storage

**Object storage**
- Stores objects/files.
- Example: Azure Blob Storage, Amazon S3.

**Block storage**
- Acts like disks attached to machines.

**File storage**
- Shared file-system style storage.

### Database

Managed databases allow the cloud provider to handle much of the underlying infrastructure and maintenance.

---

## 9. Serverless

Serverless does **not** mean there are no servers.

Servers still exist, but the cloud provider manages them.

You generally focus on:

**code/function → execution → result**

Benefits:
- Automatic scaling
- Pay-per-use models
- Less infrastructure management

Typical example: **Azure Functions / AWS Lambda / Google Cloud Functions**.

---

## 10. Shared Responsibility Model

This is a very common MCQ concept.

The cloud provider is responsible for **security of the cloud**.

The customer is responsible for appropriate aspects of **security in the cloud**, depending on the service model.

As you move from:

**IaaS → PaaS → SaaS**

the provider generally takes responsibility for more layers.
