# GridPulse-RESTORE — corrected engineering notes

**Project type:** low-voltage distribution-feeder protection and supervised restoration demonstrator  
**Design environment:** Proteus 8  
**Status in the supplied build record:** A1 and A2 populated; B1 partly populated; B2, C1 and C2 specified / designed but not yet drawn and integrated in the reported build  
**Validation boundary:** the full closed-loop simulation had not been run in the supplied record. Calculated fault values and expected trip behaviour are not measured results.

## 1. Purpose and system boundary

GridPulse-RESTORE models a small, isolated 24 Vrms, 50 Hz distribution plant with three radial feeders and a separate alternate source. The project investigates fault detection, feeder isolation, capacity-aware transfer and human-approved restoration. It is a simulation demonstrator and must never be connected to utility mains.

The controller split is intentional:

- **STM32F103C8T6:** local measurement, protection state, breaker commands and switching interlocks.
- **ESP32:** communications gateway, telemetry and forwarding of an operator's restoration request. It does not replace the STM32 protection authority.

The safe restoration concept is a dead transfer with break-before-make sequencing. The alternate source is not paralleled with the primary source. Breaker / tie position feedback must be checked before the next state is allowed.

## 2. Corrections that supersede earlier suggestions

These are the decisions to preserve when editing the schematic or describing the project:

1. **Main controller:** STM32F103C8T6, not STM32F407.
2. **TR1:** the selected transformer is the 2P5S transformer. The final arrangement uses **four tap-selection switches** to match the available terminal allocation. Do not reintroduce the fifth switch; the earlier suggestion to add a fifth was superseded after checking the available terminals.
3. **TR2:** a 100:1 current transformer in the **neutral-earthing path** for earth-current measurement. It is not a feeder load-current sensor.
4. **Surge clamp:** the specified back-to-back pair of 1N4755A zener diodes, with a nominal 43 V rating. Do not substitute the earlier 36 V part suggestion.
5. **F3 load:** the bridge-rectifier / capacitor feeder load uses the corrected **220 Ω** resistor, not 33 Ω.
6. **Architecture:** retain the original protection / restoration architecture. Do not silently replace it with a different driver or trip-gating topology. Any future change should be separately justified and versioned.
7. **Source transfer:** no source paralleling. Use dead transfer and break-before-make interlocking.

## 3. Schematic block organisation

| Block | Function | Status in supplied record |
|---|---|---|
| A1 | Primary source, TR1, earthing, surge clamp, alternate source and control power | Drawn / populated |
| A2 | Three feeder branches, line sections, loads, fault points, tie points and feedback | Drawn / populated |
| B1 | Voltage/current sensing, signal conditioning, comparator and latch protection | Partly built |
| B2 | STM32F103C8T6 control core, I/O expansion and switching logic | Design specified; not yet drawn in that record |
| C1 | ESP32 supervision, communications and operator approval | Design specified; not yet drawn in that record |
| C2 | Test bench, communications impairment, surge / load-step injection and test matrix | Design specified; not yet drawn in that record |

### A1 — Source and earthing

The documented sheet includes the primary AC source and source impedance, TR1 with the selected tap arrangement, a neutral-earthing resistor and TR2 earth-current measurement, the main breaker, the alternate source and its separate tie breaker, a 43 V back-to-back zener clamp, and low-voltage control supplies. TR2's physical position remains the neutral-earthing measurement path.

### A2 — Distribution network

The plant contains three radial feeder paths with line sections, sectionalising points, simulated fault points, representative loads, end tie points and breaker feedback. The documented loads include a resistive feeder, an R-L feeder with a switchable power-factor capacitor, and a rectifier / capacitor load whose corrected resistor is 220 Ω.

### B1 — Measurement and protection

The partial measurement / protection sheet documents voltage-divider and buffer paths, RC filtering and clamps, a feeder-current sensor channel, comparator channels and latch logic. Additional sensing and earth-fault / zero-cross functions remained to be completed in the supplied build status.

### B2 — STM32 control

The specified control core is STM32F103C8T6. The I/O expansion plan uses three 74HC595 serial-in / parallel-out devices and three 74HC165 parallel-in / serial-out devices on SPI2, providing 24 output and 24 input lines. The sheet is design-only in the supplied status record; it should not be described as a completed firmware-and-hardware implementation.

### C1 — ESP32 supervision

The ESP32 gateway is designed for telemetry and operator-supervised actions over Wi-Fi / MQTT, with a framed UART link to the STM32. Operator approval is a request, not a protection command that bypasses local interlocks. The ESP32 block remained design-only in the supplied status record.

### C2 — Verification and security test bench

The test concept includes communication drop / corruption cases, load-step and surge injection, protection and restoration cases, and event logging. The test matrix is a plan until the test cases have actually been run and results captured.

## 4. Restoration sequence

1. Monitor bus, feeder and source status.
2. Detect an abnormal condition using the local protection logic.
3. Trip and isolate the affected feeder.
4. Confirm breaker feedback and assess alternate-source capacity / eligibility.
5. If transfer is feasible, request human approval through the supervisory path.
6. Verify the feeder is isolated and perform dead transfer using break-before-make logic.
7. Confirm tie / breaker feedback and record the outcome.
8. Block restoration when measurements, interlocks, communications state or feedback do not satisfy the defined conditions.

## 5. Electrical safety and validation

This is a low-voltage simulation concept. Never connect it to utility mains. Confirm the Proteus device models, symbol pinouts, ratings and wiring before relying on a simulation. Keep calculated values, simulated outputs and physical measurements in separate tables. Do not report trip time, fault-current, selectivity, reliability or restoration-performance figures as measured until the corresponding tests have been performed and recorded.

## 6. Suggested evidence to publish next

- Revised Proteus project files and readable sheet exports.
- A block diagram showing the STM32 / ESP32 authority boundary.
- Bill of materials and pin / net schedule.
- Firmware source, UART frame definition and state-machine description.
- Test matrix with test inputs, expected states, captured results and pass / fail outcome.
- Explicitly labelled calculations, Proteus simulations and any future physical hardware tests.
