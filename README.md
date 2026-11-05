# Okoro Chukwueloka — Engineering & Research Portfolio

**Electronic Engineering · Embedded Systems · Edge Diagnostics · Cyber-Physical Power Systems**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Website-176b4b?style=flat-square)](https://okoroeloka5-hue.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-okoroeloka5--hue-172b27?style=flat-square&logo=github)](https://github.com/okoroeloka5-hue)

> **Making the invisible measurable, intelligible, and actionable.**

This repository contains the static engineering and research portfolio of **Okoro Chukwueloka Nnaemeka**, a final-year B.Eng. Electronic Engineering student at the **Federal University of Technology, Owerri (FUTO), Nigeria**. The portfolio is designed for postgraduate scholarship applications, prospective research supervisors, engineering collaborators, and technical reviewers.

The website documents the work behind a concise academic CV: project motivation, system architecture, hardware and firmware decisions, implementation evidence, photographs, schematics, current status, and the boundaries of what has—and has not—been validated.

## Research direction

My work is organised around a connected research question:

**How can resource-constrained embedded systems acquire physical data, interpret abnormal behaviour, and support dependable decisions for electrical and industrial assets?**

The portfolio connects four technical threads:

- **Instrumentation and acquisition:** analogue front ends, power conversion, sampling, measurement and waveform presentation.
- **Embedded signal processing:** sensor interfaces, feature extraction, threshold-based diagnostics and constrained computation.
- **Cyber-physical protection:** local protection authority, feeder isolation, communications and supervised service restoration.
- **Hardware-software integration:** STM32 and ESP32 platforms, PCB design, firmware, telemetry and technical visualisation.

## Featured engineering projects

### 01 — PowerScope
**Portable dual-channel digital oscilloscope and programmable DC power supply**  
*Undergraduate thesis / team project · 2025–2026 · FUTO*

PowerScope brings an adjustable laboratory DC source and a two-channel digital storage oscilloscope into one coordinated instrument. My role was **Lead Hardware & Firmware Designer** within the four-person final-year project team.

The documented design targets include a 1–15 V, up-to-2 A programmable supply and a dual-channel oscilloscope architecture using an AD9251-20 14-bit ADC, with 10 MS/s simultaneous sampling per channel. The design records an LM5176 buck-boost power stage, LTC4015 charger interface, FPGA acquisition logic, and an ESP32-S3 supervisory/display and wireless-streaming role.

The PowerScope case study includes the supplied, ordered development photographs: enclosure and internal electronics, bench assembly, prototype iterations, display checks, supply/waveform tests, front-panel views, final build and Wi-Fi streaming. Team and supervisor photographs are kept in a separate collaboration sequence.

**Evidence and validation boundary:** the site distinguishes documented design targets, photographs and reported implementation from calibration accuracy, effective number of bits, bandwidth, noise and other performance values that require a specific measurement protocol.

[PowerScope repository](https://github.com/okoroeloka5-hue/PowerScope-Final-Year-Project) · [PowerScope preprint, DOI 10.31224/8499](https://doi.org/10.31224/8499)

### 02 — GridPulse-RESTORE
**Fault-aware feeder isolation and human-approved service restoration**  
*In progress · Proteus 8 · STM32F103C8T6 + ESP32*

GridPulse-RESTORE is a scaled 24 V, 50 Hz distribution-feeder testbed with three radial feeders, source/earthing circuitry, measurement and protection paths, and a planned alternate-source restoration route. The STM32F103C8T6 retains local protection and switching authority. The ESP32 is a supervisory gateway: it forwards telemetry and operator requests but does not override local protection.

The current build record is explicit: **A1 source/earthing and A2 distribution are built; B1 measurement/protection is partly built; B2 STM32 control, C1 ESP32 supervision and C2 test/security blocks are design-only.** Full closed-loop simulation is pending. Calculated fault values and trip times are not described as measured results.

The corrected design record retains the actual decisions made during implementation: STM32F103C8T6 (not STM32F407), TR1 2P5S with four tap switches, TR2 100:1 CT in the neutral-earthing path, a back-to-back 43 V 1N4755A zener pair, and the corrected 220 Ω F3 load resistor. The demonstrator is for isolated, current-limited low-voltage simulation only—not utility mains.

[GridPulse engineering notes](docs/gridpulse-engineering-notes.md) · [Human-on-the-loop preprint, DOI 10.31224/8498](https://doi.org/10.31224/8498)

### 03 — VibeGuard
**STM32 vibration monitoring, statistical features and live dashboard**  
*Prototype · STM32F103 + ADXL345 · Proteus + Python*

VibeGuard reads an ADXL345 accelerometer over I²C, computes RMS and peak-to-peak vibration features on the STM32, and streams the results over UART to a Python dashboard. Its case study is arranged as a visual sequence: MCU/hardware view, firmware debugging, system overview, normal/warning/critical dashboard states, system block diagram, UART terminal, Proteus schematic and integrated system screen.

The page separates the documented baseline statistical/threshold path from future TinyML work. It does not claim industrial deployment or validated predictive-maintenance performance. The demonstration-video area is placed directly beneath the VibeGuard evidence sequence and is ready for the actual recording when supplied.

[VibeGuard repository](https://github.com/okoroeloka5-hue/VibeGuard)

### 04 — ESP32-C3 Environmental Logger
**PCB iteration, component planning and firmware test development**

This project records the ESP32-C3 environmental-logger hardware workflow, including the labelled prototype-improvement image. The repository evidence includes KiCad design material, BOM and test-sketch organisation. Sensor models, calibration, sampling interval and end-to-end logging behaviour are not invented where the available project record does not specify them.

[ESP32-C3 repository](https://github.com/okoroeloka5-hue/esp32-c3-env-logger-v1)

### 05 — STM32F103 Blue Pill Board
**KiCad schematic capture and PCB design study**

The portfolio includes the supplied STM32F103 Blue Pill schematic and PCBA/board visual. It is presented as a board-design study covering schematic-to-PCB translation, pin access, component placement and design preparation—not as a production-qualified board or a completed electrical validation campaign.

[STM32F103 Blue Pill repository](https://github.com/okoroeloka5-hue/stm32f103-bluepill)

## Research experience

### Undergraduate Research Assistant — FUTO
*October 2025–present · Department of Electronic Engineering*

**Tamper-proof cyber-physical IoT telemetry for regulatory drinking-water quality compliance (NAFDAC).** The research work concerns edge sensor acquisition, hardware-level anti-tamper detection and an end-to-end telemetry network with a supervisory dashboard. The current CV records contributions to the System Architecture, Hardware Security and Experimental Validation sections of a working paper, with Prof. G. Chukwudebe, Prof. U. Ezeh and Dr. C. Anyalewechi.


## Research funding development

**ACE-FUELS research-grant application — in progress (2026).** I am applying for research support from the African Center of Excellence in Future Energies and Electrochemical Systems (ACE-FUELS), domiciled at the Federal University of Technology Owerri, to further develop my first-author Human-on-the-Loop (HOTL) cyber-physical framework for fault-aware service restoration in Nigerian distribution feeders. The proposed continuation builds on the framework and GridPulse-RESTORE testbed, with emphasis on strengthening the restoration model and its staged simulation/validation protocol. **This is an application in progress; no grant award or funding decision is claimed.**

ACE-FUELS identifies Clean and Future Energy among its core areas. The potential research connection is that dependable distribution and fault-aware restoration can support wider clean-energy deployment; this is my proposed interdisciplinary positioning, not an existing centre partnership or endorsement. [ACE-FUELS official profile](https://acefuels-futo.org/about-us/) · [Human-on-the-Loop preprint](https://doi.org/10.31224/8498).

## Publications and preprints

1. **Okoro, C. N.** “A Human-on-the-Loop Cyber-Physical Framework for Fault-Aware Service Restoration in Nigerian Distribution Feeders: Requirements Derived from EEDC Industrial Training.” *Engineering Archive (engRxiv)*, preprint, October 2026. [https://doi.org/10.31224/8498](https://doi.org/10.31224/8498). The work is a framework and validation protocol; it has not been validated on a utility feeder.
2. **Chinonyerem, E. P., Chinazaekpere, O. D., Chinyere, C. S., & Okoro, C. N.** “PowerScope: Preliminary Design of a Portable Dual-Channel Digital Oscilloscope and Programmable DC Power Supply.” *Engineering Archive (engRxiv)*, preprint, October 2026. [https://doi.org/10.31224/8499](https://doi.org/10.31224/8499).

## Professional, field and community experience

- **Engineering Intern — Enugu Electricity Distribution Company (EEDC) / MainPower**, June–September 2025. Rotations across seven departments; exposure to field inspections, distribution asset records, load-profile calculations, transformer and earth-resistance testing, power-quality troubleshooting, line patrols and service restoration activities. The portfolio includes the labelled field photographs and the SIWES completion document.
- **Telecommunications Intern — Federal Radio Corporation of Nigeria (FRCN) / Tait Radio Academy**, July–November 2025, part-time. Exposure to VHF/UHF propagation, repeater and trunked-radio systems, transmitter maintenance and analogue/digital communication concepts.
- **MATLAB Software Engineer (SIWES Intern) — Center for Social Awareness, Advocacy and Ethics (CSAAE)**, May 2024. MATLAB scripting, numerical computing, data preparation, visualisation and mathematical modelling in a six-person team.
- **Academic Assistant — FUTO**, supporting first-year Petroleum Engineering assessments and confidential result records under faculty supervision.
- **Academic Coordinator & Organising Secretary — SU SchoolGroups, FUTO**, 2023–2025. Coordinated peer tutorials for more than 200 students and organised academic seminars and student activities. Seminar and service-recognition photographs are displayed in the community section.

## Awards and recognition

- **Winner — Skill-Up Imo, Cohort 2 (Web Application Development), 2022.** Awarded a laptop as the cohort prize. The portfolio includes the labelled Skill-Up Imo award photograph.
- **Academic / character commendation and service recognition — Electronic Engineering / SU Campus Fellowship and SchoolGroups, FUTO.** The portfolio keeps this institutional service recognition separate from the Skill-Up Imo award and includes the plaque/certificate presentation and supporting group photographs.

## Education

**B.Eng. Electronic Engineering — Federal University of Technology, Owerri (FUTO), Nigeria**  
Current CV record: **CGPA 3.0/4.0** · Expected completion: **5 December 2026** · English-medium instruction.

Relevant coursework includes Power Electronics, Control Systems, Digital Signal Processing, Microprocessor Systems, Semiconductor Physics, Circuit Analysis, Electromagnetic Fields, and Reliability & Quality Assurance.

## Certifications and technical learning

- Altium Designer curriculum and cumulative examination — Altium Education.
- Arm Cortex-M Processors Overview — Arm Education / Coursera, 6 July 2026. [Verification](https://coursera.org/verify/XN6QVOA7JFD3).
- Embedded C Programming for Beginners — Cursa, 17 h 08 min, 1–4 October 2026.
- Real-Time Operating Systems for Beginners — MindLuster, 1 hour, 13 June 2026.
- MATLAB and Simulink Onramp / MathWorks learning records.
- Basic Radio Awareness — Tait Radio Academy.
- Elementary Chinese-language course records included in the supplied archive.

Current technical learning programmes recorded in the CV include Renesas / Altium academic programmes, STMicroelectronics Ecosystem Academy and Texas Instruments Precision Labs. They are listed as current training, not completed certifications.

## Technical toolkit

| Area | Tools and topics |
|---|---|
| Embedded firmware | Embedded C/C++, ARM Cortex-M, STM32, ESP32 / ESP32-S3, ATmega328P, PIC, UART, SPI, I²C, ADC, DMA, RTOS concepts |
| Hardware and PCB | Altium Designer, KiCad, Proteus VSM, LTspice, schematic capture, PCB layout, analogue front ends, relay/driver circuits |
| Signal processing and control | Data acquisition, signal conditioning, RMS / peak-to-peak, FFT, DWT, filtering, power conversion, protection and control systems |
| Software and edge ML | Python, MATLAB / Simulink, PlatformIO, Git, LaTeX, Edge Impulse, baseline anomaly detection and constrained classification concepts |

## Visual evidence included in this repository

The website integrates **all 60 labelled visual items** supplied in the two combined evidence PDFs into the relevant page sections. The images are not placed in one undifferentiated dump:

- Personal profile and identity images appear in the profile section.
- PowerScope design, development and test photographs appear in chronological order in the PowerScope case study; team photographs have their own collaboration block.
- GridPulse schematic and blueprint evidence appear inside GridPulse.
- All ten labelled VibeGuard visuals appear together in the VibeGuard diagnostic story, immediately before its demonstration-video stage.
- ESP32-C3 and STM32 Blue Pill visuals appear in their respective project case studies.
- EEDC field photographs and FRCN / institutional marks appear with the professional experience timeline.
- SU SchoolGroups seminar and service photographs appear with community leadership and recognition.
- Skill-Up Imo award evidence and the separate SU award presentation appear in Awards & Recognition.
- Course certificates and course screenshots appear in Credentials.

For a complete asset-by-asset description and source index mapping, see [`docs/IMAGE-EVIDENCE-MAP.md`](docs/IMAGE-EVIDENCE-MAP.md).

## Application documents

- [Academic CV — PDF](assets/documents/Okoro_Chukwueloka_CSC_CV.pdf)
- [Academic CV — editable Word](assets/documents/Okoro_Chukwueloka_CSC_CV.docx)
- [EEDC SIWES completion letter](assets/documents/eedc-siwes-completion-letter.pdf)
- [Portfolio Information Dossier — Word](docs/Portfolio_Information_Dossier.docx)
- [GridPulse engineering correction notes](docs/gridpulse-engineering-notes.md)

## Repository contents

```text
.
├── index.html                 # Published portfolio homepage
├── preview.html               # Local visual preview
├── styles.css                 # Responsive light-sage / forest-green design system
├── script.js                  # Navigation, image lightbox, filters and interactions
├── assets/
│   ├── images/                # Portrait, WeChat QR and favicon
│   ├── evidence/              # 60 labelled image assets used by the site
│   │   ├── main-indexed/      # 41 items from the main labelled evidence PDF
│   │   └── powerscope-indexed/# 19 PowerScope photo/archive items
│   ├── projects/              # Additional schematic / project visuals
│   ├── awards/                # Award and service-recognition photographs
│   ├── certificates/         # Certificate image/PDF copies
│   ├── documents/             # CV versions and EEDC completion document
│   └── media/                 # Reserved for the VibeGuard demonstration recording
└── docs/                      # Detailed dossier, GridPulse notes and image evidence map
```

## Project integrity and status convention

This portfolio intentionally distinguishes **documented**, **built**, **partly built**, **designed**, **simulated**, **calculated** and **physically tested** work. A drawing is not described as a validated circuit; a planned controller block is not described as implemented; a calculated quantity is not described as a measurement; and a prototype is not described as an industrial deployment.

The GridPulse-RESTORE case study is an in-progress engineering testbed, with the build status and corrections stated above. The VibeGuard work is presented as a prototype with a documented sensor-to-dashboard path. PowerScope is identified as collaborative undergraduate thesis work, with my contribution stated separately from the wider team effort.

## Contact

- **Institutional email:** [okoro.chukwueloka.20211279873@futo.edu.ng](mailto:okoro.chukwueloka.20211279873@futo.edu.ng)
- **Personal email:** [okoro.eloka.researcher@outlook.com](mailto:okoro.eloka.researcher@outlook.com)
- **Phone:** +234 813 335 0773
- **LinkedIn:** [eloka-okoro](https://www.linkedin.com/in/eloka-okoro/)
- **GitHub:** [okoroeloka5-hue](https://github.com/okoroeloka5-hue)
- **Portfolio:** [https://okoroeloka5-hue.github.io/](https://okoroeloka5-hue.github.io/)
- **WeChat:** scan [`assets/images/wechat-qr.png`](assets/images/wechat-qr.png)

---

© 2026 Okoro Chukwueloka Nnaemeka. This portfolio is maintained as an evidence-led academic and engineering record.
