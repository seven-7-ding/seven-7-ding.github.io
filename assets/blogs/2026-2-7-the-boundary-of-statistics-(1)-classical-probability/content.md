<!-- The Boundary of Statistics (1): Classical Probability -->

## Why, suddenly, "probability" becomes not that naturally right?

> A coin has been tossed 10,000 times, and it has landed on heads 4,000 times. What does it mean to say that "the probability of heads is 0.4"?

In the example above, it is natural for us to think about a probability model that exists in the real world, which dictates the behavior of the coin toss. We assume its existence, use it to predict future outcomes, and always succeed in doing so (that is, the coin will "very likely" land on heads 40% of the time in the long run). But what, on earth, is this "probability model"? 

For one hand, if this model does exist, what are the right ways to study and understand it? Is the inductive reasoning we used above the only right way? On the other hand, what are the basic axioms and rules that produce and govern such a model? Is this simply a subjective belief, or are there objective principles behind it?

## Why think about it?

> Can ChatGPT produce *A Dream of Red Mansions*?

In this series of blogs, I'll

* summarize the prevalent interpretations of probability, including
    - Classical Probability,
    - Logical/Evidential Probability,
    - Subjective Probability,
    - Frequency Interpretation,
    - Propensity Interpretation,
    - Best-System Interpretation.

* discuss their pros and cons, and

* finally try to analyze the boundary of statistics and probability theory.

<p style="text-align:center;"><u>Please refer to <a href="https://plato.stanford.edu/entries/probability-interpret/">this article</a> for professional and detailed discussions about the interpretations of probability.</u></p>

**Importantly**, by discussing the boundary of statistics, I want to think about the future of AI technology that heavily relies on statistical knowledge. 

For example, I believe that `I'm not simply writing based on a predefined language distribution`, while we can `see LLMs as the approximation of natural language distribution`. Does my belief make sense? If so, how can such statistical models produce human writing art since we work very differently? To reason about this, we need to understand the boundary of statistics.

## Foudations and Classical Probability.

In this blog, I'll introduce the underlying ideas of an ideal interpretation of probability, then discuss the first well-known interpretation of probability.

### What should an ideal interpretation of probability look like?

#### 1. Kolmogorov's caculus.

Mathematically, Kolmogorov's axioms are widely accepted as the basic rules for any interpretation of probability. For short, we skip the detailed definitions and just list the three axioms.

- (Non-negativity) $P(A) \geq 0.$

- (Normalization) $P(\Omega) = 1.$

- **\*(Countable additivity)** For any countable sequence of mutually exclusive events $A_1, A_2, \ldots,$ we have $P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i).$

#### 2. Other desirable properties.

Apart from the axioms, we want the interpretation to be practical and useful. Thus, we propose

- (Admissibility) We can translate the theoreoms and axioms into real statements about the real world.

- (Ascertability) We can determine the probability of an event in practice. Otherwise, the interpretation is useless.

- (Applicability) By thinking about probability in this way, we can solve real problems.

### Classical Probability

> If we know nothing about the coin, we should assign equal probabilities to heads and tails.

#### 1. The Principle of Ascertainability.

The idea of Classical Probability lies on *the Principle of Indifference*.

> **The Principle of Indifference**: If there is no known reason for predicating of our subject one rather than another of several alternatives, then relatively to such knowledge the assertions of each of these alternatives have an equal probability. (*Keynes*)

However, the principle itself is problematic. Firstly, 'having no known reason' hardly holds in practice. Also, if we have a fund of evidences, how can we apply the principle? More importantly, if we want to apply the principle in such cases, we probably need to "weight" the evidences, which could lead to circular reasoning since the weights themselves may depend on the probabilities.

#### 2. It is contradictory! The Bertrand's Paradox.

Then we go to another problem, which is known as the *Bertrand's Paradox*.

> **Bertrand's Paradox**: A factory produces cubes with their lengths distributed between 0 and 1. We do not know anything more. What is the probability that a randomly selected cube has a length less than 1/2?

> -> If we consider the length directly, the probability is apaparently 1/2.

> -> However, if we consider the face-area, the problem becomes: what is the probability that a randomly selected cube has a face-area less than 1/4? Then the probability becomes 1/4.

> -> Similarly, if we consider the volume, the probability becomes 1/8.

In such cases, the principle of ascertainability fails since we cannot determine the probability for the problem. To fix it, Jaynes proposed the **Invariance Condition**, which draws a clear boundary for the application of the principle of indifference — the cases where the problems remain compatible under different parameterizations.

#### 3. How can we use Classical Probability?

To introduce practicability, Laplace proposed the *the Rule of Succession*.

$$
Pr(\text{success in } n+1 \text{ trials} | \text{success in } n \text{ trials}) = \frac{n+1}{n+2}.
$$

This rule explains how we can predict the next outcome based on previous observations. However, the problem is that whether this rule is compatible in different scenarios.

<h2 style="text-align: center;">To be continued...🧮</h2>

---

1st version on 2026-02-07