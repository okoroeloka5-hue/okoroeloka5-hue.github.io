# Okoro Chukwueloka — detailed engineering portfolio dossier

**Purpose:** supplementary research portfolio for international MSc scholarship and prospective-supervisor applications.  
**Academic field:** Electronic Engineering  
**Institution:** Federal University of Technology, Owerri (FUTO), Nigeria  
**Current academic record:** B.Eng. Electronic Engineering, CGPA 3.0/4.0; expected completion 5 December 2026.

This dossier expands the project evidence beyond a short CV. It focuses on the five selected projects: PowerScope, GridPulse-RESTORE, VibeGuard, ESP32-C3 Environmental Logger and STM32F103 Blue Pill Board. The Arduino repository is deliberately excluded from the showcase.

## 1. Research identity and technical direction

My work is centred on embedded electronic systems that connect sensing, signal conditioning, computation and action. Across the projects, I am interested in the complete engineering path: how a physical quantity is acquired, conditioned, converted into digital information, interpreted under resource constraints, communicated to another device or operator, and used to support a reliable decision.

The five projects form a progression rather than five unrelated demonstrations:

- **PowerScope** explores instrumentation, mixed-signal measurement, data acquisition and power conversion.
- **VibeGuard** applies embedded sampling and signal features to equipment-condition monitoring.
- **GridPulse-RESTORE** moves from asset-level diagnostics to feeder-level protection and human-supervised restoration.
- **ESP32-C3 Environmental Logger** develops board-level and firmware-test experience for a connected sensing platform.
- **STM32F103 Blue Pill Board** develops a foundation in microcontroller PCB design and hardware integration.

The research direction that connects them is resource-aware embedded diagnostics and trustworthy telemetry for electrical and industrial assets. Relevant postgraduate interests include embedded systems, electronic engineering, intelligent systems, control, instrumentation, signal processing and edge intelligence.

## 2. PowerScope — portable digital oscilloscope and programmable DC supply

**Project context:** undergraduate final-year team project at FUTO, 2025–2026. The report identifies a four-person project team. My CV records my role as Lead Hardware & Firmware Designer; the project should therefore be presented as collaborative work, not as an individual solo project.

### Engineering problem

Electronic laboratory work often requires a controllable source and a measurement instrument as separate pieces of equipment. PowerScope is designed to combine a programmable low-voltage DC supply and a two-channel digital storage oscilloscope in one portable laboratory platform. This makes it possible to apply a supply to a circuit and observe its response within one coordinated instrument.

### Documented architecture

**Programmable supply:** the documented requirement is a 1–15 V output at up to 2 A. The power-conversion path is designed around an LM5176 buck-boost controller, with LTC4015 battery-management / charging circuitry.

**Oscilloscope acquisition:** the report documents a dual AD9251-20 14-bit ADC architecture, with simultaneous two-channel sampling at 10 MS/s per channel. Each channel's analog front end includes input protection, selectable attenuation and a THS4551 fully differential amplifier to drive the ADC. FPGA logic is used for acquisition timing, channel framing and capture handling.

**Supervision and presentation:** the CV records an ESP32-S3 as the supervisory controller for display telemetry, parameter adjustment and wireless data streaming. Wireless viewing supports access to the traces; it does not increase the ADC sampling rate or replace the analog front end.

**Signal-processing direction:** the CV records an Edge Impulse classification exploration using FFT and discrete wavelet transform feature representations. This is described as an exploratory pipeline, not a completed or industry-validated fault diagnosis product.

### My contribution and evidence

My CV identifies my role as Lead Hardware & Firmware Designer. The project report, design calculations, circuit diagrams and public repository are the primary evidence. The repository contains firmware and test folders relating to oscilloscope operation, display and ESP32 UART integration.

### Limits and next validation

Do not advertise calibrated bandwidth, effective ADC resolution, measurement accuracy, noise floor, transient error or TinyML accuracy unless an explicit test report is published. Strong next evidence would include a complete block diagram, subsystem schematics, calibration method, reference-instrument comparison, measured error table and a clearly identified boundary between simulated and physical results.

Repository: https://github.com/okoroeloka5-hue/PowerScope-Final-Year-Project

## 3. GridPulse-RESTORE — feeder protection and human-approved restoration

**Project context:** independent Proteus engineering design informed by distribution-network exposure during EEDC / MainPower industrial training. The supplied design record is a detailed blueprint / partial implementation record, not proof of a completed closed-loop system.

### Research question

How can a distribution feeder demonstrator combine local fault protection, feeder isolation, alternate-source eligibility checks and operator-approved restoration without transferring protection authority to a network gateway or paralleling sources?

### Architecture

The plant is a scaled 24 Vrms, 50 Hz low-voltage model with three radial feeders and a separate alternate source. The STM32F103C8T6 is the local protection controller. The ESP32 is a supervisory communications gateway that forwards status and operator requests but does not make the final protection decision.

The intended state sequence is monitor → detect → isolate → assess alternate source → request human approval → dead transfer / break-before-make → verify feedback → restore or block. A safe transfer cannot close the tie while the feeder remains connected to the original source. Source paralleling is not part of the design.

### Corrections that must be preserved

- The control MCU is **STM32F103C8T6**, not STM32F407.
- TR1 is the **2P5S transformer**. The corrected final arrangement uses **four tap-selection switches** because the available terminals are already allocated; do not add the previously suggested fifth switch.
- TR2 is a **100:1 CT in the neutral-earthing path** for earth-current measurement, not a feeder load-current sensor.
- The surge clamp is the **back-to-back 43 V 1N4755A zener pair**.
- The F3 rectifier / capacitor load uses the corrected **220 Ω resistor**, not 33 Ω.
- Retain the original architecture; do not silently substitute a different relay driver / hardware-trip design.
- Restoration is dead transfer with break-before-make interlocking; the alternate source is not paralleled with the primary.

### Build status in the supplied engineering page

| Sheet | Function | Status |
|---|---|---|
| A1 | Source, transformer, earthing, surge clamp and control power | Drawn / populated |
| A2 | Three feeder network, loads, faults and tie points | Drawn / populated |
| B1 | Measurement and protection analogues | Partly built |
| B2 | STM32 controller and I/O expansion | Designed, not yet integrated in the recorded build |
| C1 | ESP32 supervisory gateway and approval logic | Designed, not yet integrated in the recorded build |
| C2 | Test bench and security / degradation matrix | Designed, not yet integrated in the recorded build |

The supplied build record explicitly says the full closed-loop simulation had not been run. Calculated fault currents and trip times are not simulation outputs or measurements. The next research contribution is to complete the remaining blocks, implement firmware and run reproducible protection, communications-failure and interlock tests.

Expanded correction and design notes: `GRIDPULSE-ENGINEERING-NOTES.md`.

Repository: not yet public in the supplied GitHub profile; publish the corrected project before adding a repository link.

## 4. VibeGuard — STM32 vibration monitoring and anomaly-detection prototype

**Project context:** embedded condition-monitoring prototype built around an STM32F103-series target, an ADXL345 accelerometer, C firmware, serial telemetry and a Python dashboard.

### Signal path

The design reads accelerometer data, computes statistical features such as RMS and peak-to-peak values on the microcontroller, then streams measurements over UART. A Python dashboard using Streamlit and Pandas visualises the telemetry, indicates anomaly states and supports CSV logging. The Proteus environment uses a virtual COM-port bridge between the simulated circuit and the host dashboard.

### Schematic corrections preserved

- ADXL345 SDO must be disconnected from SDA and tied to GND for I²C address 0x53.
- Route ADXL345 SDA to STM32 PB9 and SCL to PB8; add 4.7 kΩ pull-ups to 3.3 V, while checking that any LCD backpack does not pull the bus to 5 V. Use appropriate level shifting if required.
- UART is crossed: PA9 / USART1_TX to terminal RXD, PA10 / USART1_RX to terminal TXD, with common ground.
- The external vibration signal is routed to PA0 only after conditioning to a safe 0–3.3 V range. A bipolar input needs biasing / conditioning; it must not be applied directly to the MCU ADC.
- Retain the 10 kΩ NRST pull-up, BOOT0 pull-down and local decoupling checks described in the schematic review.

### What the current prototype does and does not establish

The public repository describes a prototype, not an industrially validated condition-monitoring product. Its README records important simulation limitations: the Proteus ADXL345 model is driven from a control panel rather than a physical vibration source; the hardware I²C model did not respond; the ADC returned zero in the recorded Proteus 8.13 setup and is not used in that simulation; software I²C was used; the effective sampling rate is approximately 40 Hz, corresponding to vibration content below 20 Hz. The 29 mg / 46 mg warning and critical levels are a demonstration mapping and are not a standards-compliant ISO 20816 measurement.

### Next validation work

Move to a validated hardware acquisition path, use the sensor FIFO and a suitable sampling rate, test with known vibration inputs, add band-limited acceleration-to-velocity processing and FFT features, and measure false alarms, detection performance, inference latency and memory. Physical tests are required before making claims about real rotating machinery or standards compliance.

The website includes a video panel immediately under this project. The original demonstration recording was not included in the supplied files. When you provide it, it will be placed at `assets/media/vibeguard-demo.mp4` and integrated into the dedicated player below the VibeGuard gallery. No code editing is needed from you.

Repository: https://github.com/okoroeloka5-hue/VibeGuard

## 5. ESP32-C3 Environmental Logger — PCB and firmware test development

The public repository currently contains a KiCad project, test sketches, BOM.ods, BOM11.xlsx and an image describing improvements to PCB prototype 2. This provides evidence of board-level development, component planning and firmware-test organisation around an ESP32-C3 platform.

The currently visible repository README is empty. It does not establish the exact sensor part numbers, measured environmental quantities, calibration procedure, sample interval, data format or cloud / local logging destination. Those technical particulars must be added only after checking the actual design and firmware files.

Recommended next additions are a system block diagram, exact board variant, sensor BOM, pin map, power budget, firmware dependencies, logging format, PCB revision, bring-up tests and sample data.

Repository: https://github.com/okoroeloka5-hue/esp32-c3-env-logger-v1

## 6. STM32F103 Blue Pill Board — KiCad PCB design study

The public README describes a basic STM32 Blue Pill-based board design in KiCad, with reference to Phil's Lab STM32 PCB design tutorial. This is relevant to the portfolio as an entry in microcontroller board design and schematic-to-PCB workflow.

It should be described as a **PCB design study**, not as a manufactured or production-qualified board. The public repository does not currently provide detailed electrical testing or manufacturing-validation evidence. Next evidence should include readable schematic and PCB renders, BOM, design-rule-check report, board dimensions, assembly notes and power / clock / SWD bring-up tests where performed.

Repository: https://github.com/okoroeloka5-hue/stm32f103-bluepill

## 7. Research themes for MSc supervision

The five projects support the following prospective research directions:

1. **Resource-aware edge diagnostics:** comparison of threshold / statistical baselines with compact ML models under MCU timing, memory and energy constraints.
2. **Embedded measurement systems:** signal conditioning, ADC interfaces, synchronous sampling, calibration, uncertainty and hardware/software partitioning.
3. **Cyber-physical distribution systems:** local protection authority, feeder state estimation, safe switching interlocks, operator approval and dependable restoration.
4. **Sensor telemetry and data integrity:** traceable measurements, event logs, communication failure handling and edge-to-gateway architecture.
5. **Embedded hardware development:** schematic capture, PCB layout, BOM control, board bring-up and repeatable hardware tests.

A useful unifying proposal theme is: **Resource-aware embedded anomaly detection and trustworthy telemetry for electrical and industrial assets.** The exact research question should be adjusted to the prospective supervisor's group and facilities.

## 8. Publications and preprints

The academic CV records the following October 2026 Engineering Archive preprints. They should be called preprints, not peer-reviewed journal papers:

- Okoro, C. N. *A Human-on-the-Loop Cyber-Physical Framework for Fault-Aware Service Restoration in Nigerian Distribution Feeders: Requirements Derived from EEDC Industrial Training.* DOI: https://doi.org/10.31224/8498
- *PowerScope: Preliminary Design of a Portable Dual-Channel Digital Oscilloscope and Programmable DC Power Supply.* Collaborative preliminary design preprint. DOI: https://doi.org/10.31224/8499

## 9. Professional experience and supporting preparation

### EEDC / MainPower — Engineering SIWES

The uploaded completion letter confirms a six-month industrial attachment and identifies work areas including Operations, Safety and Administration (Stores). The academic CV records field exposure involving right-of-way / substation safety, asset inventory, network expansion support, load-profile work, transformer insulation and earth-resistance testing, power-quality troubleshooting and distribution maintenance. The portfolio links the original completion letter as supporting evidence.

### FRCN / Tait Radio Academy — Telecommunications internship

The CV records five months of exposure to RF and broadcast systems, VHF / UHF propagation, repeaters, analogue FM and digital trunked-radio concepts. It also records completion of Basic Radio Awareness learning through Tait Radio Academy.

### Departmental academic support and leadership

The current CV records Academic Assistant service in FUTO's Petroleum Engineering programme (100 Level, second semester), under class advisor Dr. Nnanna Okoli (a different department to avoid grading bias), supporting assessment grading and confidential result records. It also records service as Academic Coordinator and Organising Secretary of SU SchoolGroups, FUTO (2023–2025), coordinating peer tutorials for more than 200 students and organising academic seminars.

### UAV motor-monitoring team project

The CV records leadership of a nine-member team developing an embedded monitoring concept for UAV engine / motor parameters, including temperature, RPM, fuel-flow and piezoelectric vibration signals. It describes moving-average / Kalman filtering and an SVM classification approach. The portfolio does not repeat the CV's quantitative performance figures because the current public portfolio does not include the dataset, evaluation protocol or reproducible test results needed to substantiate them.

## 10. Credentials represented on the website

- Arm Cortex-M Processors Overview — Arm Education / Coursera; verification link: https://coursera.org/verify/XN6QVOA7JFD3
- Altium Designer Curriculum & Cumulative Examination — Altium Education (as listed in CV; no verification URL supplied)
- MATLAB Onramp and Simulink Onramp — MathWorks (as listed in CV)
- Embedded Systems Course Completion — SkillUp by Simplilearn (as listed in CV)
- Real-Time Operating Systems for Beginners — MindLuster; 1 hour; 13 June 2026; certificate no. 925934e4
- Embedded C Programming Course for Beginners — Cursa; 17 h 08 min; 1–4 October 2026; validation code 546269ede3e3a628628d3149435e1b0a
- Basic Radio Awareness — Tait Radio Academy (as listed in CV)

The uploaded certificate scans for Cursa and MindLuster are included in the website bundle. Where no direct verification link was supplied, the website does not invent one.

## 11. Technical toolkit

The project repositories, academic CV and project report support the following tool and topic list:

- **Embedded platforms:** STM32 / ARM Cortex-M, ESP32 / ESP32-S3 / ESP32-C3, ATmega / AVR and PIC families.
- **Firmware and interfaces:** Embedded C, C++, UART, I²C, SPI, GPIO, ADC and microcontroller peripheral integration.
- **Electronics and PCB:** KiCad, Altium Designer, Proteus VSM, LTspice, schematic capture, PCB layout and BOM preparation.
- **Signal processing and edge systems:** RMS and peak-to-peak measurement, FFT / DWT feature concepts, sensor acquisition, anomaly thresholds and Edge Impulse.
- **Software and modelling:** Python, Streamlit, Pandas, MATLAB, Simulink, PlatformIO, Visual Studio Code, Git / GitHub and LaTeX.

This is a summary of tools and methods appearing in the source materials, not a proficiency ranking or claim of professional mastery in every listed tool.

## 12. Evidence checklist for scholarship reviewers

For each project, maintain a small, reproducible evidence set:

- Repository link and dated version / commit.
- Problem statement, role and architecture diagram.
- Source files, schematic / PCB files and reproducible setup steps.
- Test procedure with units, test count, expected result and recorded outcome.
- Screenshots or short demonstration video, clearly labelled as simulation or physical hardware.
- Limitations, unresolved design issues and next experiment.

The strongest portfolio claims are the ones a prospective supervisor can reproduce, inspect or question technically. Clear limitations increase credibility when they distinguish present evidence from future research goals.


## Research funding development — ACE-FUELS application in progress

I am currently applying for research-grant support from ACE-FUELS at the Federal University of Technology Owerri to further develop the first-author Human-on-the-Loop cyber-physical framework for fault-aware service restoration in Nigerian distribution feeders. The proposed continuation builds on the existing framework and GridPulse-RESTORE testbed, with emphasis on strengthening the restoration model and staged simulation/validation protocol.

**Status:** application in progress; no grant award or funding decision is claimed.

ACE-FUELS is the African Center of Excellence in Future Energies and Electrochemical Systems, domiciled at FUTO. Its published core areas include Clean and Future Energy, Electrochemical Systems, Nanotechnology and Corrosion Technology. The potential connection presented here is that dependable distribution and fault-aware restoration can support the wider deployment of clean-energy systems. This is a proposed interdisciplinary research fit, not a claim of an existing ACE-FUELS partnership or endorsement. [Official centre profile](https://acefuels-futo.org/about-us/).
