{
  "matchscore": "72",
  "technicalQuestion": [
    {
      "question": "Can you explain the difference between REST and GraphQL, and when would you choose one over the other?",
      "intention": "To assess the candidate's understanding of API design paradigms and their ability to make architectural decisions.",
      "answer": "Start by defining both: REST uses fixed endpoints and HTTP methods, while GraphQL uses a single endpoint with flexible queries. Highlight trade-offs — REST is simpler and more cacheable; GraphQL reduces over-fetching/under-fetching. Mention real-world use cases: REST for simple CRUD APIs, GraphQL for complex, nested data needs like dashboards or mobile apps."
    },
    {
      "question": "How does the JavaScript event loop work, and what is the difference between microtasks and macrotasks?",
      "intention": "To evaluate deep understanding of JavaScript's asynchronous execution model.",
      "answer": "Explain the call stack, Web APIs, and the callback queue. Clarify that microtasks (Promises, queueMicrotask) are processed before macrotasks (setTimeout, setInterval) after each task completes. Use a code example showing Promise resolution order vs setTimeout to illustrate."
    },
    {
      "question": "Describe how you would design a scalable authentication system using JWT.",
      "intention": "To test knowledge of security, stateless auth, and system design fundamentals.",
      "answer": "Cover JWT structure (header, payload, signature), token signing with a secret/private key, and expiry. Discuss access vs refresh token strategy, secure storage (httpOnly cookies vs localStorage), token revocation challenges, and how to handle refresh token rotation for security."
    }
  ],
  "behavioralQuestion": [
    {
      "question": "Tell me about a time you had a disagreement with a team member. How did you handle it?",
      "intention": "To assess conflict resolution skills, emotional intelligence, and collaboration.",
      "answer": "Use the STAR method. Describe a specific situation, your role, the nature of the disagreement (technical or process-based). Focus on how you listened actively, sought common ground, and reached a resolution without escalating. End with the positive outcome and what you learned."
    },
    {
      "question": "Describe a project where you had to learn a new technology under a tight deadline.",
      "intention": "To gauge adaptability, self-learning ability, and performance under pressure.",
      "answer": "Pick a concrete example. Explain why the tech was needed, how you structured your learning (docs, tutorials, small POC), how you managed time, and how you delivered. Emphasize resourcefulness and the outcome — did the project succeed? What would you do differently?"
    },
    {
      "question": "Have you ever had to push back on a requirement from a stakeholder? What happened?",
      "intention": "To evaluate assertiveness, communication skills, and business awareness.",
      "answer": "Show that you can challenge decisions respectfully and with data. Describe the requirement, your concern (technical debt, feasibility, security), how you presented your case, and whether you reached a compromise. Demonstrate that you balance technical integrity with business needs."
    }
  ],
  "skillGap": [
    {
      "skill": "System Design",
      "severity": "high"
    },
    {
      "skill": "Docker & Kubernetes",
      "severity": "medium"
    },
    {
      "skill": "Data Structures & Algorithms",
      "severity": "medium"
    },
    {
      "skill": "TypeScript",
      "severity": "low"
    }
  ],
  "preparation": [
    {
      "day": 1,
      "focus": "Data Structures & Algorithms",
      "task": [
        "Solve 3 easy LeetCode problems on arrays and strings",
        "Revise Big-O notation and complexity analysis",
        "Watch a 30-minute video on sliding window technique"
      ]
    },
    {
      "day": 2,
      "focus": "Data Structures & Algorithms",
      "task": [
        "Solve 2 medium problems on linked lists",
        "Solve 1 problem on binary search",
        "Review recursion and write 2 recursive solutions"
      ]
    },
    {
      "day": 3,
      "focus": "System Design",
      "task": [
        "Read a case study on designing a URL shortener",
        "Study core concepts: load balancing, caching, CDN, and database sharding",
        "Sketch a high-level architecture diagram for a chat application"
      ]
    },
    {
      "day": 4,
      "focus": "System Design",
      "task": [
        "Read a case study on designing Twitter's feed system",
        "Study CAP theorem and consistency models",
        "Practice explaining a system design out loud for 15 minutes"
      ]
    },
    {
      "day": 5,
      "focus": "Docker & Kubernetes",
      "task": [
        "Complete a beginner Docker tutorial — build and run a containerized Node.js app",
        "Learn key Kubernetes concepts: pods, deployments, services, and ingress",
        "Deploy a simple app to a local Kubernetes cluster using Minikube"
      ]
    },
    {
      "day": 6,
      "focus": "Behavioral Questions",
      "task": [
        "Prepare STAR-format answers for 5 common behavioral questions",
        "Record yourself answering 2 questions and review for clarity",
        "Research the company's values and map your experiences to them"
      ]
    },
    {
      "day": 7,
      "focus": "Mock Interview & Review",
      "task": [
        "Do a full mock technical interview (45 mins) with a peer or on Pramp",
        "Revisit all weak areas flagged during the mock",
        "Review your resume and prepare a crisp 2-minute self-introduction"
      ]
    }
  ]
}