Okoro Chukwueloka — Engineering & Research Portfolio
A signal is only data. Engineering makes it matter.

A research-oriented portfolio documenting my work in electronic engineering, embedded systems, cyber-physical power systems, instrumentation and edge-based fault diagnosis. It is intended for postgraduate scholarship reviewers, prospective research supervisors and engineering collaborators who want to look beyond a two-page CV and examine the reasoning, architecture and evidence behind my work.

Portfolio: https://okoroeloka5-hue.github.io/
GitHub: @okoroeloka5-hue
LinkedIn: [eloka-okoro](https://www.linkedin.com/in/eloka-okoro/)
Research profile 
I am a final-year B.Eng. Electronic Engineering student at the Federal University of Technology Owerri (FUTO), Nigeria, with a current reported CGPA of 3.0/4.0 and expected completion on 5 December 2026.

My central interest is in building embedded systems that can sense, interpret and respond to the behaviour of real-world electrical and industrial assets. I am particularly interested in the intersection of:
- Embedded firmware and ARM Cortex-M microcontrollers.
- Cyber-physical monitoring, protection and service restoration for power-distribution systems.
- Signal processing and edge-based fault diagnosis, including FFT, DWT and resource-aware TinyML.
- Electronic instrumentation, data acquisition, analogue front ends and power conversion.
- Trustworthy IoT telemetry and hardware-aware sensing.
The projects are presented as a connected research direction: measure a system, extract meaningful information from its signals, detect abnormal behaviour, and support a safe and explainable response.
Featured engineering projects
The portfolio concentrates on five projects. Each case study includes the available design context, personal contribution, visual evidence, implementation status and areas requiring further validation.
1. PowerScope — Portable oscilloscope and programmable DC supply
Role: Lead hardware and firmware designer · FUTO undergraduate thesis · 2025–2026
Focus: Electronic instrumentation, acquisition architecture, power conversion and embedded supervision.

PowerScope is a portable laboratory-instrument project combining a dual-channel digital oscilloscope concept with a programmable DC supply. The documented design specifies a dual-channel, 10 MS/s acquisition path using a 14-bit AD9251 ADC and a 1–15 V, up-to-2 A programmable buck-boost supply based on the LM5176, with LTC4015 charger-interface circuitry. An ESP32-S3 supervisory controller is specified for display, parameter control and wireless data streaming. The project also documents an Edge Impulse fault-classification direction using FFT and DWT feature representations.

The portfolio includes photographs of the instrument, front panel, electronics assembly, board details, final build and Wi-Fi streaming test, together with an initial Altium design image. Simulation and design evidence are distinguished from completed physical measurements.
- PowerScope GitHub repository
- View the PowerScope case study
2. GridPulse-RESTORE — Feeder protection and human-approved restoration
Role: Project designer · 2026 · In progress
Focus: Distribution-grid protection, embedded control, interlocking and supervisory communications.

GridPulse-RESTORE is a scaled 24 V, 50 Hz, three-feeder distribution-network testbed. Its architecture separates time-critical protection from supervisory communication: an STM32F103 protection controller is responsible for measurement, trip handling and switching interlocks, while an ESP32 forwards telemetry and operator restoration approvals. The STM32 re-verifies approval before a restoration action. The design includes hardware overcurrent trip latches, break-before-make dead transfer, a capacity check and an 11-state restoration sequence.

The source, earthing, feeder network and part of the measurement section have been built in Proteus. Fault-current and protection calculations have been documented; full closed-loop simulation remains pending. GridPulse is therefore presented as an in-progress engineering case study, not as a validated utility protection system.
- View the GridPulse case study
- [GridPulse engineering notes](docs/gridpulse-engineering-notes.md)
- [GridPulse engineering blueprint image](assets/projects/gridpulse/gridpulse-engineering-blueprint.png)
3. VibeGuard — STM32 vibration monitoring and live dashboard
Focus: Sensor interfacing, embedded signal processing, anomaly indication and telemetry.

VibeGuard uses an STM32F103 with an ADXL345 accelerometer. The documented pipeline reads acceleration over I²C, calculates RMS and peak-to-peak vibration measures on the microcontroller, and streams readings over UART to a Python dashboard. The supplied evidence includes the Proteus schematic, debugging view and dashboard states for normal, warning and critical conditions.

The case study explains the signal path and the implementation constraints. Simulation behaviour is not presented as proof of calibrated industrial vibration measurement. A dedicated demonstration-video area is included in the portfolio and can be populated as the recorded demonstration becomes available.
- VibeGuard GitHub repository
- View the VibeGuard case study
4. ESP32-C3 Environmental Logger
Focus: Connected embedded sensing, ESP32-C3 development and PCB prototyping.

This project documents an ESP32-C3 environmental-logging build, with supporting PCB prototype imagery. The portfolio treats the board and firmware evidence as a development record; sensor accuracy, long-duration reliability and deployment performance should only be added when supported by recorded tests.
- ESP32-C3 environmental logger repository
- View the project case study
5. STM32F103 Blue Pill — Board and schematic design
Focus: Microcontroller hardware, schematic capture and PCB implementation evidence.

This case study presents the STM32F103 Blue Pill schematic and PCBA images as evidence of board-level embedded-hardware work. It complements the firmware-oriented projects by showing attention to the physical design and integration side of microcontroller systems.
- STM32F103 Blue Pill repository
- View the project case study
Research experience
Undergraduate Research Assistant — FUTO Department of Electronic Engineering
October 2025–present · Working paper in preparation

Research on tamper-proof cyber-physical IoT telemetry for regulatory drinking-water quality compliance (NAFDAC), with Prof. G. Chukwudebe, Prof. U. Ezeh and Dr. C. Anyalewechi. My stated contributions include edge sensor acquisition, hardware-level anti-tamper detection routines, a supervisory telemetry dashboard, and co-drafting the system architecture, hardware security and experimental-validation sections.
Publications and preprints
- C. N. Okoro, “A Human-on-the-Loop Cyber-Physical Framework for Fault-Aware Service Restoration in Nigerian Distribution Feeders: Requirements Derived from EEDC Industrial Training,” engRxiv preprint, October 2026. DOI: 10.31224/8498. The work presents a framework and validation protocol; it is not yet validated on a utility feeder.
- E. P. Chinonyerem, O. D. Chinazaekpere, C. S. Chinyere and C. N. Okoro, “PowerScope: Preliminary Design of a Portable Dual-Channel Digital Oscilloscope and Programmable DC Power Supply,” engRxiv preprint, October 2026. DOI: 10.31224/8499.
Professional and teaching experience
- Engineering Intern — Enugu Electricity Distribution Company (EEDC) / MainPower, June–September 2025. Rotations across seven departments, including network operations, transformer and earth-resistance testing, power-quality troubleshooting, inventory and distribution field activities.
- Telecommunications Intern — Federal Radio Corporation of Nigeria (FRCN) / Tait Radio Academy, July–November 2025. Exposure to VHF/UHF propagation, repeater and trunked-radio systems, and FDMA/TDMA concepts.
- MATLAB Software Engineer (SIWES Intern) — Center for Social Awareness, Advocacy and Ethics (CSAAE), May 2024. MATLAB scripting, data preparation, visualisation and simulation work in a six-person team.
- Academic Assistant — FUTO, supporting assessment grading and confidential academic record keeping under faculty supervision.
- Academic Coordinator and Organizing Secretary — SU SchoolGroups, FUTO, 2023–2025. Coordinated peer tutorials for more than 200 students and organised student activities and workshops.
Awards, recognition and memberships
- Winner, Skill-Up Imo Cohort 2 — Web Application Development (2022). The award included a laptop prize. A photograph documenting the recognition is included in the portfolio's Awards section.
- Departmental Letter of Academic / Character Commendation, Electronic Engineering, FUTO.
- Student Member, IEEE and IEEE FUTO Student Branch.
- SU SchoolGroups, FUTO: service and leadership recognition, with supporting ceremony and team photographs.
Selected certifications and technical development
- Altium Designer curriculum and cumulative examination — Altium Education / Altium Certified.
- Arm Cortex-M Processors Overview — Arm Education via Coursera. Verify certificate.
- Real-Time Operating Systems for Beginners / RTOS concepts — MindLuster.
- Embedded C Programming for Beginners — Cursa course-completion certificate.
- MATLAB Onramp and Simulink Onramp — MathWorks.
- Cisco Networking Academy training.
- Tait Basic Radio Awareness — Tait Radio Academy.
The portfolio also records current technical learning activities in the Renesas Altium academic programmes, STMicroelectronics Ecosystem Academy and Texas Instruments Precision Labs. These are listed as ongoing training, not completed qualifications.
Technical toolkit
Embedded development: C, C++, ARM Cortex-M / STM32, ESP32 / ESP32-S3 / ESP32-C3, ATmega328P, PIC, UART, SPI, I²C, ADC and DMA concepts.
Hardware and EDA: Altium Designer, Proteus VSM, LTspice, schematic capture, PCB layout, analogue front ends, relay and driver circuits.
Signals and power: FFT, DWT, RMS and peak-to-peak measurement, sensor acquisition, power conversion, buck-boost supplies and protection concepts.
Software and research tools: Python, MATLAB, Simulink, PlatformIO, Git, LaTeX and Edge Impulse.
Evidence and supporting documents
The portfolio is designed to make evidence easy to inspect. It includes:
- The two-page CSC-aligned CV in [PDF](assets/documents/Okoro_Chukwueloka_CSC_CV.pdf) and [editable DOCX](assets/documents/Okoro_Chukwueloka_CSC_CV.docx) formats.
- Project photographs, schematic images, board/PCB images, debugging captures and dashboard states.
- Certificate images and supplied certificate documents.
- The EEDC SIWES completion letter and detailed project notes.
- A WeChat QR code in the website's contact section.
Repository contents
.
├── index.html                 # Main portfolio website
├── preview.html               # Self-contained visual preview
├── styles.css                 # Layout, responsive styling and visual theme
├── script.js                  # Navigation and interactive behaviour
├── content.js                 # Portfolio content configuration
├── assets/
│   ├── awards/                # Award and service-recognition photographs
│   ├── certificates/          # Certificate images and documents
│   ├── documents/             # CV files and supporting documents
│   ├── images/                # Portrait, WeChat QR and visual motifs
│   └── projects/              # Project-specific images and engineering evidence
└── docs/
    ├── Portfolio_Information_Dossier.docx
    ├── portfolio-dossier.md
    └── gridpulse-engineering-notes.md
Design and implementation
The site is a responsive, single-page static website built with plain HTML, CSS and JavaScript. It uses a light sage/cream reading palette with emerald and deep-green accents, dark technical panels, and faint engineering motifs. Navigation links jump to page sections; project cards support filtering and expanded technical details; CV and supporting files are linked from relevant sections.

No framework, database, server-side application or paid hosting dependency is required.
Technical integrity
The portfolio intentionally distinguishes between:
- physical builds and photographed hardware;
- circuit or firmware work performed in simulation;
- design specifications and architecture proposals;
- calculated values and measured results;
- completed milestones and planned validation.
No unmeasured model accuracy, calibration result, inference time, trip time or industrial performance figure should be inferred from a schematic or demonstration. In particular, GridPulse-RESTORE remains in progress, and its full closed-loop simulation is pending. The VibeGuard evidence describes the current STM32/ADXL345 measurement and UART dashboard pipeline, not a certified industrial condition-monitoring product.
Contact
For research supervision, postgraduate opportunities and technical collaboration, use the contact details and WeChat QR presented on the portfolio website.
© 2026 Okoro Chukwueloka. All rights reserved.
