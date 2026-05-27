---
title: "Building an AI-RAN Digital Twin in ns-3"
date: "2026-03-15"
excerpt: "How topography-aware beamforming and PPO reinforcement learning come together in simulation."
---

## Overview

This post walks through my AI-RAN simulation work: a digital twin built in **ns-3** with terrain-aware line-of-sight, a reinforcement learning control loop, and an O-RAN-style policy interface.

## Why a digital twin?

Real RAN deployments are expensive to experiment on. A twin lets you test beamforming and handover policies before touching live hardware.

## Stack

- **ns-3** — network simulation
- **Python + Gym** — PPO training
- **FastAPI xApp** — policy endpoints

## What I learned

1. DEM-based LoS/NLoS changes handover timing dramatically in mountainous terrain.
2. Bridging ns-3 with Python RL requires careful step synchronization (100 ms control loop).
3. Exporting CSV + TensorBoard artifacts makes debugging much easier.

## Next steps

- Compare federated vs centralized policy training
- Add more realistic channel models
- Publish detailed benchmarks
