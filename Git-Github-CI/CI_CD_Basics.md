# CI/CD Basics

Simple interview notes and basic answers for a frontend SDE interview.

------------------------------------------------------------------------

## 1. What is the difference between Continuous Integration and Continuous Deployment?

### Continuous Integration (CI)

CI means developers frequently integrate their code into a shared
repository, and automated checks such as tests and builds run
automatically.

``` text
Code Push
   ↓
Build
   ↓
Test
   ↓
Result
```

### Continuous Deployment (CD)

Continuous Deployment means code that successfully passes the pipeline
can be automatically deployed to production.

``` text
Code Push
   ↓
Build
   ↓
Test
   ↓
Deploy
   ↓
Production
```

**Simple difference:**

-   CI → automatically build and test code.
-   Continuous Deployment → automatically deploy successful changes.

------------------------------------------------------------------------

## 2. If you had no prior CI/CD experience, how would you learn it quickly to apply it in a project?

A good interview answer:

> "I would first understand the basic CI/CD workflow, then implement a
> simple pipeline using GitHub Actions. I would start with installing
> dependencies, running tests, and building the frontend. Once that
> works, I would learn deployment and environment configuration and
> apply it to a small project."

Basic learning workflow:

``` text
Understand CI/CD
      ↓
Learn GitHub Actions
      ↓
Create simple pipeline
      ↓
Run tests
      ↓
Build frontend
      ↓
Add deployment
```

Be honest if you have not personally built a production pipeline.

------------------------------------------------------------------------

## 3. What are the key benefits of using CI/CD in a frontend development pipeline?

Main benefits:

-   Detect bugs early.
-   Automatically run tests.
-   Automatically build the application.
-   Reduce manual deployment work.
-   Maintain consistent build processes.
-   Make releases faster and more reliable.
-   Prevent broken code from reaching later stages.

**Simple answer:**

> "CI/CD helps automate testing, building, and deployment, so problems
> are detected earlier and releases become faster and more reliable."

------------------------------------------------------------------------

## 4. What are some common tools used to implement CI/CD pipelines?

Common tools include:

-   GitHub Actions
-   Jenkins
-   GitLab CI/CD
-   Azure DevOps Pipelines
-   CircleCI

For your resume, **GitHub Actions** is the most important one to
understand because you already use GitHub.

------------------------------------------------------------------------

## 5. How would you integrate automated testing into a CI/CD workflow?

A basic workflow is:

``` text
Developer pushes code
        ↓
CI pipeline starts
        ↓
Install dependencies
        ↓
Run tests
        ↓
If tests pass → Build
        ↓
If tests fail → Stop pipeline
```

Example:

``` yaml
steps:
  - uses: actions/checkout@v4

  - uses: actions/setup-node@v4
    with:
      node-version: 20

  - run: npm install
  - run: npm test
  - run: npm run build
```

**Simple answer:**

> "I would configure the CI pipeline to run automated tests after every
> relevant push or pull request. If the tests fail, the pipeline should
> stop and the code should not proceed to the next stage."

------------------------------------------------------------------------

## 6. What is a deployment pipeline, and how does it differ from a build pipeline?

### Build Pipeline

Focuses on creating and validating the application.

``` text
Code
 ↓
Install dependencies
 ↓
Test
 ↓
Build
```

### Deployment Pipeline

Takes the validated build and moves it to an environment.

``` text
Successful Build
      ↓
Deployment
      ↓
Staging / Production
```

**Simple difference:**

-   Build pipeline → creates and validates the application.
-   Deployment pipeline → delivers the application to an environment.

------------------------------------------------------------------------

## 7. What does a GitHub Action do in a CI/CD context?

A GitHub Action is an automated task or reusable component that runs
inside a GitHub Actions workflow.

It can perform tasks such as:

-   Checking out code.
-   Setting up Node.js.
-   Installing dependencies.
-   Running tests.
-   Building an application.
-   Deploying an application.

Example:

``` yaml
- uses: actions/checkout@v4
```

This checks out the repository code so the workflow can work with it.

Another example:

``` yaml
- uses: actions/setup-node@v4
```

This sets up Node.js in the workflow environment.

------------------------------------------------------------------------

## 8. How do you handle environment-specific configurations during deployment?

Different environments may need different values.

For example:

``` text
Development → development API
Staging     → staging API
Production  → production API
```

Sensitive values such as API keys should not be hardcoded in source
code.

Instead, use:

-   Environment variables.
-   GitHub Actions Secrets.
-   Environment-specific configuration.

Example concept:

``` text
Frontend
   ↓
Environment variable
   ↓
API URL
```

**Simple answer:**

> "I would keep environment-specific values outside the source code and
> use environment variables or CI/CD secrets. This allows the same
> codebase to be deployed to different environments safely."

------------------------------------------------------------------------

## 9. What is the difference between Continuous Delivery and Continuous Deployment?

### Continuous Delivery

The application is automatically built, tested, and kept ready for
deployment, but production deployment may require a manual approval.

``` text
Code
 ↓
Build
 ↓
Test
 ↓
Ready for Production
 ↓
Manual Approval
 ↓
Deploy
```

### Continuous Deployment

Successful changes are automatically deployed to production without a
manual deployment step.

``` text
Code
 ↓
Build
 ↓
Test
 ↓
Automatic Deploy
 ↓
Production
```

**Simple difference:**

-   Continuous Delivery → ready to deploy, deployment may require
    approval.
-   Continuous Deployment → automatically deploys successful changes.

------------------------------------------------------------------------

## 10. Can you describe a scenario where a CI/CD pipeline helped you catch a bug early?

If you have not personally experienced this, **do not claim that you
did**.

Use a hypothetical example:

> "Suppose a developer changes a frontend component and accidentally
> breaks an existing test. When the developer pushes the code or creates
> a pull request, the CI pipeline automatically runs the tests. The
> failed test immediately shows that the change introduced a problem, so
> the developer can fix it before the code is merged or deployed."

Flow:

``` text
Developer changes code
        ↓
Push / Pull Request
        ↓
CI runs tests
        ↓
Test fails
        ↓
Developer gets feedback
        ↓
Bug fixed before deployment
```

If you actually have a real example from your project, use that instead.

------------------------------------------------------------------------

# Basic GitHub Actions Workflow

A simple frontend CI workflow:

``` yaml
name: Frontend CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm test
      - run: npm run build
```

### What happens?

``` text
Push to main
     ↓
GitHub Actions starts
     ↓
Checkout code
     ↓
Setup Node.js
     ↓
Install dependencies
     ↓
Run tests
     ↓
Build frontend
```

------------------------------------------------------------------------

# Must-Know CI/CD Terms

  -----------------------------------------------------------------------
  Term                                Simple Meaning
  ----------------------------------- -----------------------------------
  CI                                  Automatically build and test code

  Continuous Delivery                 Keep code ready for deployment

  Continuous Deployment               Automatically deploy successful
                                      changes

  Pipeline                            Automated sequence of development
                                      tasks

  Build                               Convert source code into a
                                      deployable application

  Test                                Automatically verify application
                                      behavior

  Deployment                          Release application to an
                                      environment

  GitHub Actions                      GitHub's automation/CI/CD service

  Workflow                            YAML-defined automation process

  Action                              Reusable task used inside a
                                      workflow

  Environment Variable                Configuration value supplied
                                      outside source code

  Secret                              Sensitive value stored securely

  Staging                             Environment used before production

  Production                          Live environment used by users
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# 10 One-Line Interview Answers

1.  **CI vs Continuous Deployment:** CI automatically builds/tests code;
    Continuous Deployment automatically deploys successful changes.
2.  **No CI/CD experience:** Learn the workflow, build a GitHub Actions
    pipeline, then add testing, building, and deployment.
3.  **Benefits:** Earlier bug detection, automation, faster releases,
    and more reliable deployments.
4.  **Common tools:** GitHub Actions, Jenkins, GitLab CI/CD, Azure
    DevOps, and CircleCI.
5.  **Automated testing:** Run tests automatically during the CI
    pipeline and stop the pipeline if tests fail.
6.  **Build vs Deployment pipeline:** Build creates/validates the
    application; deployment delivers it to an environment.
7.  **GitHub Action:** An automated task that runs as part of a GitHub
    Actions workflow.
8.  **Environment configuration:** Use environment variables and secure
    secrets instead of hardcoding environment-specific values.
9.  **Delivery vs Deployment:** Delivery keeps software ready for
    deployment; Deployment automatically releases successful changes.
10. **Bug caught early:** CI runs tests after a code change and detects
    failures before the code is merged or deployed.

------------------------------------------------------------------------

# Must-Know Flow

Memorize this:

``` text
Developer writes code
        ↓
Git commit / push
        ↓
Pull Request
        ↓
CI pipeline
        ↓
Install dependencies
        ↓
Lint / Test
        ↓
Build
        ↓
Deployment
        ↓
Staging / Production
```

For your interview, understand the flow rather than memorizing the YAML.
