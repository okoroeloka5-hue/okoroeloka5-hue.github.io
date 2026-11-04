/*
  EDIT THIS FILE to update portfolio project descriptions, project links,
  experience items, credentials and the VibeGuard demo video.
  Keep status wording honest: distinguish implemented, simulated, designed and planned work.
*/
window.PORTFOLIO_CONTENT = {
  vibeGuardVideo: "", // Example: "assets/media/vibeguard-demo.mp4" OR a direct MP4 URL.
  projects: [
    {
      number: "01", id: "powerscope", category: "instrumentation", categoryLabel: "INSTRUMENTATION / DSP",
      title: "PowerScope", subtitle: "Portable dual-channel oscilloscope & programmable DC power supply",
      status: "FINAL-YEAR TEAM PROJECT", statusClass: "status-complete",
      summary: "A combined laboratory instrument designed to provide a programmable low-voltage DC source and a two-channel digital storage oscilloscope in one portable platform. It addresses the practical gap between powering a circuit and observing how that circuit responds.",
      role: "Lead Hardware & Firmware Designer within a four-person final-year project team, as recorded in my academic CV.",
      tags: ["AD9251-20", "FPGA acquisition", "ESP32-S3", "LM5176", "LTC4015", "Proteus / SPICE"],
      architecture: ["Input conditioning", "Dual ADC", "FPGA capture", "ESP32-S3 UI / Wi-Fi"],
      details: [
        ["Oscilloscope path", "The documented architecture uses a dual-channel AD9251-20 14-bit converter, with simultaneous sampling at 10 MS/s per channel. The analogue path includes input protection, selectable attenuation and a THS4551 fully differential driver before conversion. FPGA logic is used for predictable acquisition, channel framing and capture handling."],
        ["Programmable supply", "The power section is specified around a 1–15 V output with up to 2 A delivery, using an LM5176 buck-boost controller. The battery-management / charger interface is documented around the LTC4015."],
        ["Supervision and interface", "The project CV records an ESP32-S3 supervisory controller for display telemetry, parameter adjustment and wireless data streaming. The instrument is intended to support local interaction and remote waveform viewing; the wireless view is supplementary to the measurement chain, not a substitute for sampling performance."],
        ["Signal-processing direction", "The CV records an exploratory fault-classification pipeline using Edge Impulse and FFT / DWT feature representations. This is presented as a development direction in the project record, not as a claim of industrially validated fault classification."],
        ["My contribution", "The project was completed collaboratively. My listed role is Lead Hardware & Firmware Designer; the public case study should continue to identify it as team work rather than an individual solo build."]
      ],
      evidence: ["PowerScope final-year report and design documentation", "GitHub repository contains oscilloscope firmware, display tests and ESP32 UART test folders", "Proteus / circuit simulation work described in the report and CV"],
      limitations: "The design specification and architecture are documented. Do not advertise a measurement-accuracy figure, ADC effective resolution, calibrated bandwidth or completed TinyML performance metric unless the relevant test record is published alongside it.",
      next: ["Publish a clear system block diagram and subsystem schematics.", "Add a calibration procedure and measured error table with instrument references.", "Separate simulation evidence from physical hardware measurements.", "Document the acquisition / FPGA / ESP32 interface and the role of each processor."],
      github: "https://github.com/okoroeloka5-hue/PowerScope-Final-Year-Project", githubLabel: "View project repository"
    },
    {
      number: "02", id: "gridpulse", category: "edge", categoryLabel: "POWER SYSTEMS / CYBER-PHYSICAL CONTROL",
      title: "GridPulse-RESTORE", subtitle: "Fault-aware feeder isolation & human-approved service restoration",
      status: "IN PROGRESS · PROTEUS DESIGN", statusClass: "status-progress",
      summary: "A scaled low-voltage distribution-network demonstrator that explores how a protection controller can isolate a faulted feeder, assess an alternate supply path and request human approval before attempting a safe restoration sequence.",
      role: "Independent engineering design and Proteus implementation, informed by distribution-network exposure during EEDC industrial training.",
      tags: ["24 Vrms / 50 Hz model", "STM32F103C8T6", "ESP32", "Hardware trips", "UART / MQTT", "Protection interlocks"],
      architecture: ["Three-feeder plant", "STM32 protection", "ESP32 supervisor", "Human approval"],
      details: [
        ["Plant model", "The design scales a 24 Vrms, 50 Hz distribution plant with three radial feeders, line sections, sectionalising points, representative loads, fault-injection points and a separate alternate source. The demonstrator is isolated and low-voltage; it is not intended for connection to utility mains."],
        ["Protection authority", "The corrected controller is STM32F103C8T6, not STM32F407. The STM32 remains the local protection authority. Comparator / latch paths are intended to provide fast trip action independent of supervisory network messages."],
        ["I/O expansion", "The control-core design specifies three 74HC595 output registers and three 74HC165 input registers on SPI2, expanding the controller interface to 24 outputs and 24 inputs for breaker commands, feedback and status."],
        ["Supervisory gateway", "The ESP32 is a communications and supervision gateway. It forwards status and operator requests; it does not make the final protection decision. The documented concept includes Wi-Fi / MQTT telemetry and a framed UART link to the STM32."],
        ["Restoration sequence", "Monitor → detect → isolate → assess alternate-source capacity → request human approval → dead transfer (break-before-make) → verify position feedback → restore or block. The tie must not close while the feeder breaker is closed, and the two sources are never paralleled."],
        ["Transformer and tap corrections", "TR1 was corrected to the 2P5S transformer designation. The final choice uses four tap-selection switches to match the available transformer terminals; the earlier instruction to add a fifth switch is superseded."],
        ["Earth-current measurement", "TR2 is the 100:1 current transformer placed in the neutral-earthing path to sense earth current through its burden / measurement chain. It is not a feeder load-current transformer."],
        ["Surge clamp and feeder load", "The clamp is the specified back-to-back 43 V 1N4755A zener pair. The F3 rectifier / capacitor load uses the corrected 220 Ω load resistor, not the earlier 33 Ω value."]
      ],
      evidence: ["Uploaded GridPulse-RESTORE engineering page and A2 schematic record", "Corrected STM32F103C8T6 controller, SPI shift-register I/O plan and four-switch tap choice", "A1 source / earthing and A2 feeder plant documented as built; B1 measurement / protection documented as partly built"],
      limitations: "The project record states that A1 and A2 are drawn, B1 is partly built, and B2 / C1 / C2 remain design-only blocks. A complete closed-loop simulation had not yet been run in the supplied build record. Fault currents and trip times in that record are calculated design values, not measured simulation results.",
      next: ["Complete and verify the remaining B1 analogue protection and measurement channels.", "Draw and integrate the STM32 controller and ESP32 supervision sheets.", "Implement staged firmware and the restoration state machine.", "Run repeatable fault, communications-loss and interlock test cases; publish the results separately from calculations."],
      github: "", githubLabel: "Repository to be published", localDoc: "docs/gridpulse-engineering-notes.md"
    },
    {
      number: "03", id: "vibeguard", category: "edge", categoryLabel: "EDGE DIAGNOSTICS / CONDITION MONITORING",
      title: "VibeGuard", subtitle: "STM32 vibration monitoring & anomaly-detection prototype",
      status: "PROTOTYPE · PROTEUS + PYTHON DASHBOARD", statusClass: "status-progress",
      summary: "An embedded condition-monitoring prototype that reads an ADXL345 accelerometer, extracts statistical vibration features on an STM32 and streams compact telemetry to a live Python dashboard for visualisation and anomaly alerts.",
      role: "System design, STM32 firmware integration, Proteus simulation, serial telemetry and dashboard development.",
      tags: ["STM32F103 series", "ADXL345", "C firmware", "Software I²C", "UART", "Python / Streamlit"],
      architecture: ["ADXL345 input", "STM32 features", "UART bridge", "Python dashboard"],
      details: [
        ["Signal pipeline", "Sensor data is acquired at the MCU, then RMS and peak-to-peak features are computed locally before telemetry is forwarded over UART. The Python dashboard uses Streamlit / Pandas for plots, live status, anomaly indications and CSV logging."],
        ["Proteus implementation", "The repository README describes an STM32F103C6 target, ADXL345 model, firmware, a virtual COM-port bridge and a Python dashboard. A 555 timer and 74HC4017 counter provide a separate visual boot sequence before the STM32 takes over vibration-state monitoring."],
        ["I²C wiring correction", "The schematic correction separated ADXL345 SDO from SDA and tied SDO to GND for address 0x53; SDA is routed to PB9 and SCL to PB8. The shared bus uses 4.7 kΩ pull-ups to 3.3 V, subject to checking the LCD backpack does not pull the bus up to 5 V."],
        ["Other wiring checks", "The session correction notes specify UART crossing (PA9 TX → terminal RXD; PA10 RX ← terminal TXD), a safe 0–3.3 V vibration input at PA0, a 10 kΩ NRST pull-up, BOOT0 pull-down and local supply decoupling. A negative or bipolar signal must be biased / conditioned before it reaches the MCU ADC."],
        ["Dashboard", "The Python interface visualises streamed measurements and indicates normal / warning / critical states. The repository describes a VSPE virtual COM-port bridge between Proteus COMPIM and the dashboard application."],
        ["Demo video", "The portfolio reserves a dedicated video player directly below this project. The original VibeGuard demo video file or a direct public video URL was not included with the files available for this build; add the MP4 or link in content.js to activate playback."]
      ],
      evidence: ["Public VibeGuard GitHub repository and README", "Firmware, Hardware, Software and Media folders in the repository", "Session record containing schematic corrections and the recommended staged test sequence"],
      limitations: "The repository README labels the project a prototype. In the documented Proteus setup, the sensor is driven by a control panel rather than a physical vibration source; the hardware ADC is not used because it returned zero in Proteus 8.13; software I²C is used because the hardware I²C model did not respond; effective sampling is about 40 Hz (below 20 Hz vibration content). The 29 mg / 46 mg thresholds are a demonstration mapping and are not a standards-compliant ISO measurement.",
      next: ["Move to timer-driven hardware I²C / SPI and the sensor FIFO for higher-rate acquisition.", "Use longer analysis windows and validate the sampling chain with known signals.", "Add band-limited acceleration-to-velocity processing and FFT features.", "Evaluate false alarms, detection performance, latency and memory on repeatable labelled cases.", "Repeat key measurements on physical hardware before making real-machine or ISO-compliance claims."],
      github: "https://github.com/okoroeloka5-hue/VibeGuard", githubLabel: "View project repository", specialVideo: true
    },
    {
      number: "04", id: "envlogger", category: "hardware", categoryLabel: "ESP32-C3 / PCB DEVELOPMENT",
      title: "ESP32-C3 Environmental Logger", subtitle: "Environmental logging platform · PCB and firmware test work",
      status: "PCB / FIRMWARE DEVELOPMENT", statusClass: "status-progress",
      summary: "A compact environmental-logging project centred on the ESP32-C3. The public repository is currently strongest as hardware-development evidence: it contains a KiCad project, test sketches, bill-of-materials files and a PCB prototype revision / improvement image.",
      role: "Board-level design, component planning and firmware test development.",
      tags: ["ESP32-C3", "KiCad", "BOM", "Test sketches", "PCB revision"],
      architecture: ["ESP32-C3", "Sensor interfaces", "Firmware tests", "Log / telemetry"],
      details: [
        ["Hardware evidence", "The repository tree contains a KiCad project folder, two BOM spreadsheets, test sketches and an image documenting improvements to PCB prototype 2."],
        ["Engineering emphasis", "The portfolio presents this project as an iterative board-development exercise: organising the component set, maintaining a bill of materials, developing test sketches and recording board revisions."],
        ["Documentation boundary", "The repository README is currently empty, and the visible public repository view does not identify the exact environmental sensors, calibration method, sampling interval or logging destination. Those details are intentionally not guessed here."],
        ["Next evidence to publish", "Add a concise README listing the exact ESP32-C3 board variant, sensor part numbers, pin map, power budget, logging format, firmware dependencies, PCB revision and bring-up test results."]
      ],
      evidence: ["Public esp32-c3-env-logger-v1 repository", "KiCad project folder", "BOM.ods and BOM11.xlsx", "Test sketches folder and prototype-2 improvement image"],
      limitations: "The exact sensor models, measurement ranges, calibration procedure and end-to-end logging path are not described in the currently visible repository README. Keep those fields editable and add them only after confirming the project files.",
      next: ["Complete the README and system block diagram.", "Publish sensor part numbers, pin assignments and measurement units.", "Add firmware test outcomes and sample log data.", "Attach a board render / assembled-board photograph and PCB design-rule-check summary."],
      github: "https://github.com/okoroeloka5-hue/esp32-c3-env-logger-v1", githubLabel: "View project repository"
    },
    {
      number: "05", id: "bluepill", category: "hardware", categoryLabel: "STM32 / PCB DESIGN",
      title: "STM32F103 Blue Pill Board", subtitle: "KiCad-based microcontroller board design",
      status: "PCB DESIGN STUDY", statusClass: "status-study",
      summary: "A board-design project built around the STM32F103 Blue Pill platform. It provides a foundation for thinking about microcontroller pin access, schematic-to-board translation and manufacturing outputs.",
      role: "PCB design and project-file development.",
      tags: ["STM32F103", "KiCad", "Schematic capture", "PCB layout", "Manufacturing files"],
      architecture: ["STM32F103 core", "Power / clock", "I/O headers", "PCB outputs"],
      details: [
        ["Project definition", "The public README describes a basic STM32 Blue Pill-based board design in KiCad, developed with guidance from Phil's Lab STM32 PCB Design Tutorial."],
        ["What it demonstrates", "A practical board-design workflow around an established ARM Cortex-M microcontroller platform: schematic organisation, component placement, routing and preparation of project / manufacturing files."],
        ["Evidence boundary", "The public repository does not currently provide a detailed design narrative, electrical test report or manufacturing validation record. This is therefore described as a PCB design study, not a production-qualified board."],
        ["Next evidence to publish", "Add a readable schematic, PCB render, board dimensions, BOM, design-rule-check report, assembly notes and a documented power / clock / SWD bring-up test."]
      ],
      evidence: ["Public stm32f103-bluepill repository", "KiCad project and manufacturing folders", "Basic STM32 Blue Pill board README"],
      limitations: "No public evidence of a manufactured, electrically tested or production-released board is included in the current README. The website does not imply otherwise.",
      next: ["Publish schematic and front / back PCB renders.", "Add ERC / DRC reports and the complete BOM.", "Document power rails, clocking, SWD access and connector pinout.", "Record continuity, power-up and programming tests if performed."],
      github: "https://github.com/okoroeloka5-hue/stm32f103-bluepill", githubLabel: "View project repository"
    }
  ],
  experience: [
    {date:"2021–2026", role:"Academic Assistant", organisation:"Department of Electronic Engineering, FUTO", points:["Supported grading of lower-year examination scripts and continuous-assessment work under faculty supervision.","Maintained departmental score sheets and academic records with attention to numerical checking and confidentiality.","The CV records a departmental letter of academic commendation for service and grading precision."]},
    {date:"2023–2025", role:"Academic Coordinator & Organising Secretary", organisation:"Electronic Engineering Students’ Association (EESA), FUTO", points:["Coordinated peer tutorial sessions across core engineering subjects for more than 200 students.","Supported departmental technical workshops, student–faculty forums and event logistics."]},
    {date:"2025 · SIWES", role:"Engineering Intern", organisation:"Enugu Electricity Distribution Company (EEDC) / MainPower · Abakpa District", points:["Completed a six-month industrial training attachment; the uploaded EEDC completion letter confirms work across Operations, Safety and Administration (Stores).","Gained field exposure to right-of-way and substation safety inspections, transformer / switchgear inventory, distribution expansion support and line patrols.","CV records participation in load-profile calculations, transformer insulation / earth-resistance testing, power-quality troubleshooting and distribution maintenance activities."], document:"assets/documents/eedc-siwes-completion-letter.pdf", documentLabel:"View EEDC completion letter (PDF)"},
    {date:"5-month attachment", role:"Telecommunications Intern", organisation:"Federal Radio Corporation of Nigeria (FRCN) & Tait Radio Academy", points:["Studied RF network operation, VHF / UHF propagation, transmitter maintenance and repeater-based communications.","Completed the Basic Radio Awareness learning curriculum and examined analogue FM and digital trunked-radio concepts."]},
    {date:"June 2025", role:"Group Leader · UAV Engine / Motor Monitoring", organisation:"Nine-member undergraduate engineering team", points:["Coordinated development of a microcontroller-based monitoring concept combining temperature, RPM, fuel-flow and piezoelectric vibration sensing.","The CV records moving-average / Kalman-filter preprocessing and an SVM-based anomaly-classification approach. Performance figures are not repeated here because the evaluation dataset and reproducibility record are not linked in the current portfolio."]}
  ],
  credentials: [
    {title:"Arm Cortex-M Processors Overview", provider:"Arm Education / Coursera", note:"Certificate of completion", link:"https://coursera.org/verify/XN6QVOA7JFD3", linkLabel:"Verify certificate"},
    {title:"Altium Designer Curriculum & Cumulative Examination", provider:"Altium Education", note:"Listed as completed in the academic CV; verification URL not supplied."},
    {title:"MATLAB Onramp & Simulink Onramp", provider:"MathWorks", note:"MathWorks introductory learning credentials listed in the academic CV."},
    {title:"Embedded Systems Course Completion", provider:"SkillUp by Simplilearn", note:"Course completion listed in the academic CV and professional profile."},
    {title:"Real-Time Operating Systems for Beginners", provider:"MindLuster · 13 June 2026", note:"1-hour course · Certificate No. 925934e4", link:"assets/certificates/mindluster-rtos-certificate.pdf", linkLabel:"Open certificate PDF"},
    {title:"Embedded C Programming Course for Beginners", provider:"Cursa · 1–4 October 2026", note:"17 h 08 min workload · Validation code: 546269ede3e3a628628d3149435e1b0a", link:"assets/certificates/cursa-embedded-c-certificate.png", linkLabel:"View certificate"},
    {title:"Basic Radio Awareness", provider:"Tait Radio Academy", note:"Curriculum completion recorded in the academic CV."}
  ]
};
