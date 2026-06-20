# Proyecto Final - Sistemas Operativos

## 📋 Información del Proyecto

| Campo | Detalle |
|-------|---------|
| **Curso** | Sistemas Operativos 750001C |
| **Semestre** | 1 - 2026 |
| **Docente** | Mg. José Alexander Castañeda Muñoz |
| **Valoración** | 25 puntos (25% de la nota final) |

---

## 👥 Equipo de Trabajo

| # | Integrante | Código | Correo |
|---|------------|--------|--------|
| 1 | Erika Arango | 2460438 | arango.erika@correounivalle.edu.co |
| 2 | Santiago Campaz | 2460382 | campaz.santiago@correounivalle.edu.co |
| 3 | Felipe Larrahondo | 2460299 | luis.larrahondo@correounivalle.edu.co |
| 4 | Michael Saa | 2478078 | michael.saa@correounivalle.edu.co |

---

## 🎯 Objetivo

Construir y documentar una infraestructura tecnológica que integre:

- **Máquinas virtuales Linux** (VirtualBox)
- **Contenedores Docker** (Frontend y Backend)
- **Orquestación con Kubernetes** (Minikube)

---

## 🖥️ Componente 1: Virtualización

- **VM Gráfica**: Ubuntu MATE 24.04 LTS
- **VM Consola**: Rocky Linux 9.8
- Particionamiento manual: `/`, `swap`, `/home`
- Red configurada y SSH funcional

---

## 🐳 Componente 2: Docker

- **Frontend**: Nginx (Puerto 80)
- **Backend**: Python HTTP Server (Puerto 5000)
- Orquestación con `docker-compose.yml`

---

## ☸️ Componente 3: Kubernetes

- **Minikube** instalado en VM Gráfica
- **Deployment**: Nginx con 2 réplicas
- **Service**: NodePort (Puerto 30080)
- Escalado demostrado a 3 réplicas

---

## 🌐 Sitio Web

- **URL**: https://arangoerika-cpu.github.io/proyecto-final-SO
- **Video Virtualización**: https://youtu.be/6CVwG-1lqLw
- **Video Docker**: https://youtu.be/aIa6l_VhDAc
- **Video Kubernetes**: https://youtu.be/vKIdvXFDCl4

---

## 📂 Estructura del Proyecto
proyecto-final-so/
├── README.md
├── index.html
├── assets/
│ ├── css/
│ ├── js/
│ └── img/
├── docker/
│ ├── Dockerfile.frontend
│ ├── Dockerfile.backend
│ └── docker-compose.yml
└── kubernetes/
├── deployment.yaml
└── service.yaml

---

## 📚 Recursos Utilizados

- [Docker Engine](https://docs.docker.com/engine/)
- [Kubernetes](https://kubernetes.io/docs/home/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [VirtualBox](https://docs.oracle.com/en/virtualization/virtualbox/)
- [GitHub Pages](https://docs.github.com/pages/quickstart)

---

**© 2026 - Proyecto Final Sistemas Operativos - Universidad del Valle**


