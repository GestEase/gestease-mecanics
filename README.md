# Mecanics

**Free machining toolkit for machinists, CNC operators & mechanical engineers.**

Tap drill charts, speed & feed calculators, hydraulic/pneumatic references, unit conversions — all in one fast, offline-ready web app.

## Modules

| Module | Description |
|--------|-------------|
| **Imperial (UNC/UNF)** | Tap drill sizes, minor/major diameters, thread engagement |
| **Metric ISO (M)** | Coarse & fine pitch, tap drill mm, nearest fraction |
| **Pipe (NPT/BSP)** | Taper data, sealant requirements, engagement length |
| **Special** | ACME, Buttress, Whitworth, and other specialty threads |
| **Hydraulic** | Dash sizes, JIC/SAE/ORFS/BSP, pressure ratings, port depths |
| **API Drilling** | Drill pipe, casing, tubing connections per API specs |
| **Pneumatic** | Port sizes, G/R/NPT, pressure ratings, common fittings |
| **Conversions** | mm/in, bar/psi, Nm/ft-lb, temperature, hardness scales |
| **Milling** | Feeds & speeds by material, tool diameter, depth of cut |
| **Speed & Feed Calculator** | RPM, feed rate, chip load, MRR calculations |
| **Reference** | Material properties, drill bit charts, tolerance tables |

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Docker

```bash
docker compose -f docker-compose.example.yml up --build
```

Open `http://localhost:8080`

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- NGINX Alpine (production)
- Docker multi-stage build (64 MB limit)

## License

MIT — see [LICENSE](LICENSE)

---

**Built by [GestEase Technologie Inc.](https://gestease.ca)**
Industrial ERP, mechanical design & IoT monitoring for manufacturing SMBs.
