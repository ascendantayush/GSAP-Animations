# 🚀 DevOps Implementation

This document describes the DevOps pipeline implemented for the GSAP Portfolio project.

---

# Objective

The goal of this implementation was to automate the build, deployment, orchestration, and monitoring of the application using modern DevOps tools.

---

# Technology Stack

- Git & GitHub
- Jenkins
- Docker
- Kubernetes (Minikube)
- Nagios
- Graphite
- Grafana

---

# DevOps Architecture

```
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ▼
Docker Image
    │
    ▼
Docker Container
    │
    ▼
Kubernetes Deployment
    │
    ▼
Nagios Monitoring
    │
    ▼
Graphite Metrics
    │
    ▼
Grafana Dashboard
```

---

# 1. Source Code Management

The complete application source code is maintained on GitHub.

Whenever the source code is updated, Jenkins can pull the latest version directly from the repository.

## Screenshot

> <img width="1917" height="1079" alt="Screenshot from 2026-06-30 19-10-24" src="https://github.com/user-attachments/assets/6e53313d-3cf9-4b51-af37-f69f5ab385b0" />


---

# 2. Continuous Integration using Jenkins

A Jenkins Declarative Pipeline was created to automate the complete build and deployment process.

Pipeline stages include:

- Checkout Source Code
- Build Docker Image
- Deploy Docker Container
- Verify Deployment

Whenever the pipeline is executed, Jenkins automatically builds and deploys the latest version of the application.

## Screenshot

> <img width="1917" height="501" alt="Screenshot from 2026-06-30 19-11-04" src="https://github.com/user-attachments/assets/6124c81e-4aeb-4ab5-86ac-78ed802bd048" />
> <img width="1917" height="922" alt="Screenshot from 2026-06-30 19-11-21" src="https://github.com/user-attachments/assets/0811b9cf-19be-486e-8975-55c8b0bcf958" />
> <img width="1917" height="1074" alt="Screenshot from 2026-06-30 19-11-43" src="https://github.com/user-attachments/assets/f33612c7-8f9c-43da-82ef-ac9cc0c68cf7" />


---

# 3. Docker Containerization

A Dockerfile was created using the official Nginx image.

The application is packaged into a Docker image which can be deployed consistently across environments.

Docker was also used to run:

- Jenkins
- Nagios
- Graphite
- Grafana
- Application Container

## Screenshot

> <img width="885" height="577" alt="Screenshot from 2026-06-30 19-15-18" src="https://github.com/user-attachments/assets/eac2d7ae-8259-4788-8e41-c70047b8d10d" />
> <img width="888" height="459" alt="Screenshot from 2026-06-30 19-15-56" src="https://github.com/user-attachments/assets/d6213c76-f17e-4c43-99b5-50f1284f538c" />
> <img width="1615" height="475" alt="Screenshot from 2026-06-30 19-17-07" src="https://github.com/user-attachments/assets/fe147986-5d1b-48d4-a8e0-ee1db716be89" />

---

# 4. Kubernetes Deployment

The Docker image was deployed to a local Kubernetes cluster using Minikube.

Resources created:

- Deployment
- Service (NodePort)

The application was successfully accessed using the Kubernetes NodePort service.

## Screenshots

> <img width="719" height="73" alt="Screenshot from 2026-06-30 19-20-33" src="https://github.com/user-attachments/assets/d40f05e8-9ec5-4ea5-9e33-7dde2788d213" />
> <img width="868" height="86" alt="Screenshot from 2026-06-30 19-22-11" src="https://github.com/user-attachments/assets/9ec5580b-837e-4ab6-b4d8-212a727e1247" />
> <img width="793" height="191" alt="Screenshot from 2026-06-30 19-22-35" src="https://github.com/user-attachments/assets/56c14d9a-f645-4d77-81fc-35ff0b821c06" />
> <img width="1920" height="1162" alt="Screenshot from 2026-06-30 19-22-50" src="https://github.com/user-attachments/assets/2ee85277-e1fa-4761-92d5-a3bc1082961b" />
> <img width="839" height="142" alt="Screenshot from 2026-06-30 19-23-19" src="https://github.com/user-attachments/assets/42d20844-22d4-4ec0-9670-73a66b2fcd79" />



---

# 5. Monitoring using Nagios

Nagios was configured to monitor the deployed web application.

The application host was successfully added to Nagios and verified as **UP**.

This confirms that the monitoring service is functioning correctly.

## Screenshot

> <img width="1668" height="460" alt="Screenshot from 2026-06-30 19-23-47" src="https://github.com/user-attachments/assets/0c5cd5f3-0c70-42d5-9f77-370e39aa07a9" />
> <img width="1417" height="838" alt="Screenshot from 2026-06-30 19-24-06" src="https://github.com/user-attachments/assets/01fde7a6-2b75-4559-b8f1-69ad41d4cfad" />
---

# 6. Metrics Collection using Graphite

Graphite was installed to collect application metrics.

A sample metric named:

```
demo.visitors
```

was continuously sent to Graphite for testing purposes.

Graphite successfully received and stored the incoming metrics.

## Screenshot!
> <img width="366" height="504" alt="Screenshot from 2026-06-30 19-29-53" src="https://github.com/user-attachments/assets/0804f532-02c1-45d9-8db9-34d5805ca27b" />

---

# 7. Visualization using Grafana

Grafana was connected to Graphite as a data source.

A dashboard was created to visualize the `demo.visitors` metric.

This confirms successful integration between Graphite and Grafana.

## Screenshot

> <img width="1924" height="1097" alt="Screenshot from 2026-06-30 19-26-33" src="https://github.com/user-attachments/assets/084b8f7b-a5c7-40e0-ad4e-8ae24aaef998" />
> <img width="1075" height="396" alt="Screenshot from 2026-06-30 19-27-18" src="https://github.com/user-attachments/assets/6aa1fa5d-edce-4ffb-88fa-283f9e655666" />



---

# Project Outcome

Successfully implemented a complete DevOps workflow consisting of:

- Source Code Management using GitHub
- Continuous Integration using Jenkins
- Containerization using Docker
- Container Orchestration using Kubernetes
- Infrastructure Monitoring using Nagios
- Metrics Collection using Graphite
- Metrics Visualization using Grafana

---

# Conclusion

The GSAP Portfolio project was successfully transformed into a production-style DevOps workflow.

The application can now be automatically built, deployed, monitored, and visualized using industry-standard DevOps tools.

This implementation demonstrates the practical integration of CI/CD, containerization, orchestration, monitoring, and observability in a single project.
