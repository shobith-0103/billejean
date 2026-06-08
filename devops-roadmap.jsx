import { useState } from "react";

const roadmap = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Linux Advanced + Shell Scripting",
    duration: "Days 1–8",
    days: "8 days",
    color: "#f97316",
    icon: "🐧",
    accent: "#431407",
    bg: "#fff7ed",
    weeks: [
      {
        label: "Days 1–4 · Linux Deep Dive",
        theory: [
          "File permissions: chmod, chown, chgrp, SUID/SGID/sticky bit",
          "Process management: ps, top, htop, kill, nice, nohup, &",
          "User & group management: useradd, usermod, passwd, sudoers",
          "Networking basics: netstat, ss, curl, wget, ping, traceroute, iptables",
          "Systemd: systemctl, journalctl, service units, targets",
          "Disk & storage: df, du, lsblk, mount, umount, fdisk basics",
          "Cron jobs & scheduling: crontab syntax, at, anacron",
          "Log management: /var/log, tail -f, grep, awk, sed, cut",
        ],
        practical: [
          "Set up a Linux VM (Ubuntu 22.04) on VirtualBox or WSL2",
          "Create users/groups, set permissions on directories",
          "Write a cron job that logs disk usage every hour",
          "Monitor a running process, kill it, bring it back with nohup",
          "Parse /var/log/syslog with grep + awk to extract errors",
          "Set up a simple firewall rule with iptables or ufw",
        ],
      },
      {
        label: "Days 5–8 · Shell Scripting",
        theory: [
          "Bash scripting fundamentals: shebang, variables, $1/$2 args",
          "Conditionals: if/elif/else, test, [ ] vs [[ ]]",
          "Loops: for, while, until, break, continue",
          "Functions: defining, calling, return values, local scope",
          "Arrays and associative arrays",
          "String manipulation, regex with grep/sed/awk",
          "Error handling: exit codes, trap, set -e, set -u",
          "Input/output: read, echo, printf, redirects (>, >>, 2>&1, /dev/null)",
        ],
        practical: [
          "Write a script to back up a directory with timestamped filenames",
          "Script to monitor CPU/memory, alert if above threshold",
          "Script to parse a CSV file and output formatted table",
          "Automate user creation from a text file (bulk users)",
          "Write a menu-driven script with select/case",
          "Script to check if services are running, restart if not",
        ],
      },
    ],
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Git & GitHub (Advanced)",
    duration: "Days 9–13",
    days: "5 days",
    color: "#8b5cf6",
    icon: "🔀",
    accent: "#2e1065",
    bg: "#faf5ff",
    weeks: [
      {
        label: "Days 9–11 · Branching & Collaboration",
        theory: [
          "Branching strategies: Git Flow, trunk-based, feature branches",
          "Merging vs rebasing: merge commits, rebase, squash",
          "Resolving merge conflicts — manual and tool-based",
          "git stash, stash pop, stash list",
          "git cherry-pick, git bisect, git blame",
          "Pull Requests: reviews, approval workflows, branch protection rules",
          "git tags: lightweight vs annotated, semantic versioning",
          "GitHub Actions basics: triggers, jobs, steps, runners",
        ],
        practical: [
          "Create a repo with main + develop + feature branches",
          "Simulate a merge conflict and resolve it manually",
          "Rebase a feature branch onto main, squash commits",
          "Set up branch protection rules on GitHub (require PR + review)",
          "Tag a release with v1.0.0 and push to GitHub",
          "Cherry-pick a single commit from one branch to another",
        ],
      },
      {
        label: "Days 12–13 · GitHub Actions CI/CD",
        theory: [
          "GitHub Actions: workflow YAML structure (on, jobs, steps)",
          "Triggers: push, pull_request, schedule, workflow_dispatch",
          "Runners: ubuntu-latest, self-hosted",
          "Secrets and environment variables in Actions",
          "Artifacts and caching in workflows",
          "Build → Test → Deploy pipeline concept",
        ],
        practical: [
          "Create a workflow that runs on every push to main",
          "Add a step that lints and tests a simple Python/Node app",
          "Store secrets (API keys) and use them in a workflow",
          "Build a CI pipeline: checkout → install deps → test → notify",
          "Cache node_modules or pip packages to speed up builds",
        ],
      },
    ],
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Docker & Containerization",
    duration: "Days 14–21",
    days: "8 days",
    color: "#0ea5e9",
    icon: "🐳",
    accent: "#0c4a6e",
    bg: "#f0f9ff",
    weeks: [
      {
        label: "Days 14–17 · Docker Core",
        theory: [
          "Container vs VM: why containers, namespaces, cgroups",
          "Docker architecture: daemon, client, registry, images, containers",
          "Dockerfile: FROM, RUN, COPY, ADD, WORKDIR, EXPOSE, CMD, ENTRYPOINT",
          "Image layers and caching — build optimization",
          "Docker CLI: build, run, exec, logs, inspect, stop, rm, rmi",
          "Port mapping (-p), volume mounts (-v), environment vars (-e)",
          "Docker Hub: pull, push, tag, login",
          "docker ps, docker images, docker network ls",
        ],
        practical: [
          "Install Docker on your Linux VM",
          "Pull nginx/ubuntu/python images, run containers interactively",
          "Write a Dockerfile for a simple Node.js or Python app",
          "Build and tag an image, push to Docker Hub",
          "Run a container with port mapping, test in browser",
          "Mount a local volume into a container",
          "Run a MySQL container with env vars for root password/db name",
        ],
      },
      {
        label: "Days 18–21 · Docker Compose & Networking",
        theory: [
          "Docker Compose: docker-compose.yml structure, services, volumes, networks",
          "Multi-container apps: app + database + cache pattern",
          "Docker networking: bridge, host, none, custom networks",
          "Container communication by service name (DNS resolution)",
          "Health checks in Docker Compose",
          "Docker volumes: named volumes vs bind mounts",
          "docker-compose up/down/logs/exec/build",
          "Environment files (.env) with Docker Compose",
        ],
        practical: [
          "Write a docker-compose.yml for a web app + PostgreSQL + Redis",
          "Connect app container to DB container using service name",
          "Use a .env file for all secrets and ports",
          "Add health checks to DB service",
          "Build a multi-stage Dockerfile to reduce image size",
          "Project: Containerize a full-stack app (e.g. Flask + Postgres)",
        ],
      },
    ],
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "AWS (Cloud Practitioner → DevOps Level)",
    duration: "Days 22–36",
    days: "15 days",
    color: "#f59e0b",
    icon: "☁️",
    accent: "#451a03",
    bg: "#fffbeb",
    weeks: [
      {
        label: "Days 22–25 · Core Services Deep Dive",
        theory: [
          "EC2: instance types, AMIs, key pairs, security groups, user data",
          "VPC: subnets (public/private), route tables, internet gateway, NAT gateway",
          "S3: buckets, object storage, versioning, lifecycle policies, static website hosting",
          "IAM: users, groups, roles, policies (JSON), least privilege, MFA",
          "RDS: managed databases, multi-AZ, read replicas, snapshots",
          "ELB: ALB vs NLB, target groups, health checks, listeners",
          "Auto Scaling Groups: launch templates, scaling policies, cooldown",
          "CloudWatch: metrics, alarms, dashboards, log groups",
        ],
        practical: [
          "Launch an EC2 instance, SSH in, install nginx via user data script",
          "Create a VPC with public + private subnets, route tables",
          "Host a static website on S3 with public access",
          "Set up IAM roles, attach to EC2 to access S3 without keys",
          "Launch RDS (PostgreSQL), connect from EC2 in same VPC",
          "Create an ALB, attach two EC2 instances, test load balancing",
          "Set up an ASG with min 1 / max 3, trigger scale-out alarm in CloudWatch",
        ],
      },
      {
        label: "Days 26–29 · DevOps-Focused AWS Services",
        theory: [
          "AWS CodePipeline: stages (Source → Build → Deploy)",
          "AWS CodeBuild: buildspec.yml, build environments",
          "AWS CodeDeploy: deployment groups, appspec.yml, rolling/blue-green",
          "ECR (Elastic Container Registry): push/pull Docker images",
          "ECS (Elastic Container Service): task definitions, services, Fargate vs EC2",
          "Route 53: hosted zones, A/CNAME records, health checks",
          "CloudFormation basics: templates, stacks, resources (IaC intro)",
          "AWS CLI: configure, common commands for EC2/S3/IAM",
        ],
        practical: [
          "Push a Docker image to ECR",
          "Deploy a containerized app on ECS Fargate",
          "Build a CodePipeline: GitHub → CodeBuild → ECS deploy",
          "Write a buildspec.yml that builds a Docker image",
          "Create a CloudFormation stack that provisions EC2 + SG + S3",
          "Register a domain in Route 53, point it to an ALB",
          "Use AWS CLI to automate EC2 start/stop with a shell script",
        ],
      },
      {
        label: "Days 30–36 · Integration Week + AWS Project",
        theory: [
          "Secrets Manager vs Parameter Store: when to use which",
          "Lambda basics: serverless functions, triggers, use cases in DevOps pipelines",
          "SNS + SQS: event-driven architecture basics",
          "Cost management: AWS Cost Explorer, billing alerts, reserved vs spot instances",
          "AWS Well-Architected Framework: 6 pillars overview",
          "Security best practices: no root usage, SCPs, VPC flow logs, CloudTrail",
        ],
        practical: [
          "Store DB credentials in Secrets Manager, retrieve from app",
          "Create a Lambda triggered by S3 upload (e.g. resize image or log event)",
          "Set up billing alarm for $10 threshold",
          "Enable CloudTrail + VPC flow logs, query with Athena",
          "CAPSTONE: Deploy a 3-tier app (React + Node API + RDS) on AWS with ALB, ASG, and a CodePipeline for CI/CD",
        ],
      },
    ],
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Jenkins (CI/CD Server)",
    duration: "Days 37–42",
    days: "6 days",
    color: "#ef4444",
    icon: "⚙️",
    accent: "#450a0a",
    bg: "#fff1f2",
    weeks: [
      {
        label: "Days 37–39 · Jenkins Fundamentals",
        theory: [
          "Jenkins architecture: master, agents, executors, workspace",
          "Installing Jenkins on Linux (WAR or Docker)",
          "Freestyle jobs vs Pipeline jobs",
          "Jenkinsfile: declarative vs scripted pipeline syntax",
          "Pipeline stages: agent, stages, steps, post",
          "Jenkins plugins: Git, Docker, AWS, Slack notifications",
          "Credentials management in Jenkins (no hardcoded secrets)",
          "Build triggers: SCM polling, GitHub webhook, manual",
        ],
        practical: [
          "Install Jenkins on your Linux VM (Docker recommended)",
          "Create a Freestyle job that clones a GitHub repo and runs tests",
          "Write a Jenkinsfile with stages: Checkout → Build → Test → Archive",
          "Set up a GitHub webhook to auto-trigger Jenkins on push",
          "Configure Jenkins credentials for GitHub and Docker Hub",
          "Install and configure the Docker plugin in Jenkins",
        ],
      },
      {
        label: "Days 40–42 · Jenkins Pipelines + Integration",
        theory: [
          "Multi-stage pipelines: parallel stages, matrix builds",
          "Jenkins shared libraries: vars/, src/ structure",
          "Pipeline as Code: storing Jenkinsfile in repo",
          "Integrating Jenkins with Docker: build image in pipeline",
          "Jenkins + AWS: deploy to EC2 or push to ECR in pipeline",
          "Blue Ocean UI for pipeline visualization",
          "Jenkins backup, security hardening basics",
        ],
        practical: [
          "Build a full Jenkinsfile pipeline: Checkout → Test → Docker Build → Push to ECR → Deploy to ECS",
          "Add parallel stages (e.g. unit test + lint simultaneously)",
          "Set up Slack/email notifications on build failure",
          "Create a multi-branch pipeline that handles feature branches differently",
          "Project: Replace GitHub Actions pipeline with a Jenkins equivalent",
        ],
      },
    ],
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Kubernetes (K8s)",
    duration: "Days 43–53",
    days: "11 days",
    color: "#10b981",
    icon: "☸️",
    accent: "#022c22",
    bg: "#f0fdf4",
    weeks: [
      {
        label: "Days 43–46 · K8s Core Concepts",
        theory: [
          "Kubernetes architecture: control plane (API server, etcd, scheduler, controller manager) vs worker nodes (kubelet, kube-proxy, container runtime)",
          "Pods: smallest deployable unit, multi-container pods, lifecycle",
          "ReplicaSets, Deployments: rolling updates, rollbacks",
          "Services: ClusterIP, NodePort, LoadBalancer, ExternalName",
          "Namespaces: isolation, resource quotas",
          "ConfigMaps and Secrets: decoupling config from code",
          "Persistent Volumes (PV), Persistent Volume Claims (PVC), StorageClasses",
          "kubectl commands: apply, get, describe, logs, exec, delete, rollout",
        ],
        practical: [
          "Install minikube + kubectl locally",
          "Deploy a simple nginx pod, expose with NodePort service",
          "Write a Deployment YAML, scale to 3 replicas",
          "Perform a rolling update, then rollback to previous version",
          "Create a ConfigMap for app config, mount as env vars",
          "Create a Secret for DB password, use in deployment",
          "Set up a PVC and mount it to a pod",
          "Use kubectl exec to debug inside a running pod",
        ],
      },
      {
        label: "Days 47–50 · Advanced K8s",
        theory: [
          "Ingress: Ingress controller (nginx), rules, path-based routing, TLS",
          "HPA (Horizontal Pod Autoscaler): CPU/memory based scaling",
          "Resource requests and limits: CPU/memory, QoS classes",
          "Liveness and readiness probes",
          "DaemonSets, StatefulSets: when and why",
          "RBAC: roles, role bindings, service accounts",
          "Helm: package manager for K8s — charts, values.yaml, helm install/upgrade",
          "K8s on AWS: EKS overview, node groups, managed vs self-managed",
        ],
        practical: [
          "Deploy nginx Ingress controller, route /app1 and /app2 to different services",
          "Set up HPA, stress-test a pod and watch it scale",
          "Add liveness + readiness probes to your deployment",
          "Create RBAC role that allows read-only access to pods in a namespace",
          "Install a Helm chart (e.g. Prometheus + Grafana stack)",
          "Customize a Helm chart with your own values.yaml",
          "Deploy a StatefulSet for a database (e.g. MySQL with PVC)",
        ],
      },
      {
        label: "Days 51–53 · K8s + Jenkins + AWS Capstone",
        theory: [
          "EKS: creating clusters with eksctl, kubeconfig setup",
          "Deploying to EKS from Jenkins pipeline (kubectl in Jenkins)",
          "Image pull from ECR in K8s pods",
          "K8s monitoring: Prometheus metrics, Grafana dashboards",
          "K8s logging: fluentd/fluent-bit → CloudWatch",
          "GitOps concept: ArgoCD intro (deploy by syncing Git state)",
        ],
        practical: [
          "Create an EKS cluster with eksctl (2 node group)",
          "Deploy your containerized app to EKS, expose via Ingress + ALB",
          "Build a full Jenkins pipeline: Code Push → Build Docker → Push ECR → kubectl apply to EKS",
          "Set up Prometheus + Grafana on EKS, monitor pod CPU/memory",
          "FINAL CAPSTONE: End-to-end DevOps pipeline — GitHub push triggers Jenkins → builds Docker image → pushes to ECR → deploys to EKS via Helm chart → monitored in Grafana",
        ],
      },
    ],
  },
];

const weekColors = ["#e0f2fe", "#fef9c3", "#f3e8ff", "#dcfce7", "#ffe4e6", "#fff7ed"];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeWeek, setActiveWeek] = useState({});

  const togglePhase = (id) => {
    setActivePhase(activePhase === id ? null : id);
    setActiveWeek({});
  };

  const toggleWeek = (phaseId, weekIdx) => {
    const key = `${phaseId}-${weekIdx}`;
    setActiveWeek((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      padding: "32px 16px",
    }}>
      {/* Header */}
      <div style={{ maxWidth: 820, margin: "0 auto 36px" }}>
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: 20,
          padding: "28px 32px",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
            <span style={{ fontSize: 36 }}>🚀</span>
            <div>
              <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: 0, letterSpacing: -0.5 }}>
                Cloud DevOps Study Roadmap
              </h1>
              <p style={{ color: "#a5b4fc", margin: "4px 0 0", fontSize: 14 }}>
                53 Days · June 8 → July 31 · 90 mins/day · Cloud DevOps / Platform Engineer
              </p>
            </div>
          </div>

          {/* Phase pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
            {roadmap.map((p) => (
              <div key={p.id} style={{
                background: p.color + "22",
                border: `1px solid ${p.color}55`,
                borderRadius: 999,
                padding: "4px 12px",
                fontSize: 12,
                color: p.color,
                fontWeight: 600,
              }}>
                {p.icon} {p.phase}: {p.title.split(" ")[0]} {p.title.split(" ")[1]} — {p.days}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        {roadmap.map((phase) => {
          const isOpen = activePhase === phase.id;
          return (
            <div key={phase.id} style={{
              borderRadius: 16,
              overflow: "hidden",
              border: `1px solid ${phase.color}44`,
              boxShadow: isOpen ? `0 0 0 2px ${phase.color}66` : "none",
              transition: "box-shadow 0.2s",
            }}>
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 24px",
                  background: isOpen
                    ? `linear-gradient(90deg, ${phase.color}33, ${phase.color}11)`
                    : "rgba(255,255,255,0.05)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{
                    fontSize: 28,
                    background: phase.color + "22",
                    borderRadius: 12,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${phase.color}44`,
                  }}>{phase.icon}</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: phase.color, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                      {phase.phase} · {phase.duration}
                    </div>
                    <div style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginTop: 2 }}>
                      {phase.title}
                    </div>
                  </div>
                </div>
                <span style={{
                  color: phase.color,
                  fontSize: 20,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s",
                  display: "block",
                }}>▾</span>
              </button>

              {/* Phase Content */}
              {isOpen && (
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "0 20px 20px" }}>
                  {phase.weeks.map((week, wi) => {
                    const wKey = `${phase.id}-${wi}`;
                    const wOpen = activeWeek[wKey] !== false && activeWeek[wKey] !== undefined
                      ? activeWeek[wKey]
                      : true;
                    return (
                      <div key={wi} style={{ marginTop: 16 }}>
                        <button
                          onClick={() => toggleWeek(phase.id, wi)}
                          style={{
                            width: "100%",
                            textAlign: "left",
                            background: phase.color + "18",
                            border: `1px solid ${phase.color}33`,
                            borderRadius: 10,
                            padding: "10px 16px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ color: phase.color, fontWeight: 700, fontSize: 13 }}>
                            📅 {week.label}
                          </span>
                          <span style={{ color: phase.color, fontSize: 14 }}>{wOpen ? "▴" : "▾"}</span>
                        </button>

                        {wOpen && (
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 10 }}>
                            {/* Theory */}
                            <div style={{
                              background: "rgba(255,255,255,0.04)",
                              borderRadius: 10,
                              padding: 16,
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}>
                              <div style={{
                                color: "#fbbf24",
                                fontWeight: 700,
                                fontSize: 12,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                marginBottom: 10,
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              }}>
                                📚 Study (45 mins)
                              </div>
                              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                {week.theory.map((t, i) => (
                                  <li key={i} style={{
                                    color: "#e2e8f0",
                                    fontSize: 12.5,
                                    lineHeight: 1.6,
                                    paddingLeft: 14,
                                    position: "relative",
                                    marginBottom: 4,
                                  }}>
                                    <span style={{ position: "absolute", left: 0, color: "#fbbf24" }}>›</span>
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Practical */}
                            <div style={{
                              background: "rgba(255,255,255,0.04)",
                              borderRadius: 10,
                              padding: 16,
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}>
                              <div style={{
                                color: "#34d399",
                                fontWeight: 700,
                                fontSize: 12,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                marginBottom: 10,
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                              }}>
                                💻 Practicals (45 mins)
                              </div>
                              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                                {week.practical.map((p, i) => (
                                  <li key={i} style={{
                                    color: "#e2e8f0",
                                    fontSize: 12.5,
                                    lineHeight: 1.6,
                                    paddingLeft: 14,
                                    position: "relative",
                                    marginBottom: 4,
                                  }}>
                                    <span style={{ position: "absolute", left: 0, color: "#34d399" }}>›</span>
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer tip */}
        <div style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: 14,
          padding: "20px 24px",
          border: "1px solid rgba(255,255,255,0.1)",
          marginTop: 8,
        }}>
          <p style={{ color: "#a5b4fc", fontSize: 13, margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: "#fff" }}>💡 How to use this:</strong> Each evening — 45 mins on the <span style={{ color: "#fbbf24" }}>📚 Study</span> topics, then 45 mins on the <span style={{ color: "#34d399" }}>💻 Practicals</span>. Don't skip the practicals — interviewers test hands-on knowledge. The <strong style={{ color: "#fff" }}>Capstone projects</strong> at the end of AWS and K8s phases go directly on your resume and GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
