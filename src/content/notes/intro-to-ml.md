---
title: "Understanding Gradient Descent in Machine Learning"
description: "A quick note on gradient descent, how it works, and its mathematical derivation."
pubDate: "2026-07-01"
topics: ["Machine Learning", "AI"]
draft: false
---

Gradient descent is an optimization algorithm used to minimize some function by iteratively moving in the direction of steepest descent.

### The Math

Given a cost function $J(\theta)$, the update rule is:

$$\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)$$

where $\alpha$ is the learning rate.
