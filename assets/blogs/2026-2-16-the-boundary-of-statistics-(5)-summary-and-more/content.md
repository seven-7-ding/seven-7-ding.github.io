<!-- The Boundary of Statistics (5): Summary and More -->

## Again, why do we need to interpretations of probability?
> Stipulating what a witch is does not suffice to show that witches exist.

Mathematically, we can define a self-consistent probability function based on the Kolmogorov's axioms. However, this mathematical definition does not tell us what probability actually is, so it remains questionable when we apply such a mathematical tool to real-world problems, physical domains, and other scientific theories.

In other words, we may ask "what does it mean to say that a quantum particle has a 50% chance of being in a certain state", and "why we can't say the quantum partical has a 80% chance of being A and 60% chance of being B", if we only have the mathematical definition of probability.

## What are the basic differences between different interpretations of probability?
In the previous articles, we generally categorized the interpretations of probability into three types:
* **Epistemic interpretations**, including the Classical Interpretation, and the Logical/Evidential Interpretation;
* **Subjective interpretations**, primarily the Subjective Bayesian Interpretation;
* **Objective interpretations**, including the Frequency Interpretation, the Propensity Interpretation, and the Best System Interpretation.

### Epistemic interpretations.
> We are actually learning about the relations between evidence and hypotheses.

In these interpretations, we use probability as a tool to represent how should a piece of evidence support a hypothesis. To achieve this, the Classical Interpretation proposes on the **Principle of Indifference** and the **Rule of Succession**. However, the Bertrand's Paradox draws a strict boundary, that any problems with incompatible repremeterizations are unthinkable. Besides, the Principle of Indifference itself is untestable, thus potentially metaphysical.

The Logical Interpretation, on the other hand, establishes itself upon a logical language and the corresponding assignment rules. But such a logical language only accepts **total evidence**, and struggles to tackle problems in the infinite universe.

The evidential interpretation then rejects any forms of synaptic formalization, and directly assumes the existence of an evidential probability function $P(h|e)$. This approach, nevertheless, can't answer the question "which $P$ is the right one?".

### Subjective interpretations.
> Probability is a measure of our subjective belief.

We call this interpretation "subjective" because it begins with a game, where we need to assign a consistent subjective value to an event in Dutch Book. But the problem is that not everyone wants to "win money" in the same way, and it is hard to define a rational agent. Furthermore, the subjective probability incorporates the "expert opinion" into the theorems to explain how an "ideal rational agent" should behave. The **Principal Principle** comes as one of the requirements, which assumes an objective chance/credence function in the world, transitioning the subjective probability to an objective one...

### Objective interpretations.
> Probability is an objective feature of the world.

The frequency interpretation measures probabilities as limits of relative frequencies in the finite/infinit universe. However, it faces the problem of **single-case problem** and **reference sequence problem**.

The propensity interpretation puts probability on a higher level, which is the built-in propensity of a physical system to produce certain outcomes. But different ways to interpret such a propensity all meet incompatible problems...

To take a step further, the best system interpretation views probability as a part of the "best system" that governs the evolution of our universe. However, it requires either subjective judgments or metaphysical assumptions to determine what is the "best system".

## Actually, they are not that different...

#### Principal Principle: subjective VS objective interpretations.

Well, as has been shown before, the ***Principal Principle*** states that 

> an ideal rational agent in subjective interpretation should set his subjective probability to match the objective chance/propensity in the world,

which matches the idea of objective interpretations. Moreover, the objective interpretations such as the Best System Interpretation require subjective judgments to help establish the theory, which also makes it close to the subjective interpretations.

#### Probabilistic Enkrasia: epistemic VS subjective interpretations.

Meanwhile, the subjective interpretation also includes "the degree of belief that a piece of evidence supports a hypothesis", which touches the core of epistemic interpretations. Formally, we use the language of ***Probabilistic Enkrasia*** to describe such a relationship,

> our credences should be beholden to our attitudes towards the evidential probabilities,

which acts much like the idea of Principal Principle.

#### The laws and principles: objective VS epistemic interpretations.

Finally, the epistemic interpretations rely on the basic ideas including "the Principle of Indifference", the logical language, or the evidential probability function. Should we treat them as the "laws of nature"?

## Why, in general, do we meet so many problems in understanding probability?
> Probability, by its very nature, can only be thought on a metaphysical level...🤔

From the previous discussions, we discover that whenever we try to define the concept of probability, we end up with metaphysical assuptions. In epistemic interpretations, we assume the principle of indifference, the logical probability assignment rules, or the existence of an evidential probability function. In subjective interpretations, we ended up with an objective chance function in the world, which leads to objective understandings. And in objective interpretations, the assumptions and definitions are either untestable, or require metaphysical assumptions on a higher level.

The question is, why we cannot make scientific progress just like we do in other physical domains like gravity and electromagnetism? The reason is straightforward: we can never say a coin is unfair simply because it tosses 10,000 heads consecutively. In other words, only extreme assumptions like "the coin only produces heads" or "the coin never produces heads" can be falsified. This feature drives probability interpretations away from scientific domains.

## Back to where we started with: can LLMs write *A Dream of Red Mansions*?
> Well, well, well...

### What are we doing?
To think about this question, though, we need to first clarify what are we humans doing when writing something. There are different views on this, so I make some intuitive assumptions here. Please note that these assumptions are not necessarily solid or consistent, but just for the sake of discussion.

I believe that **humans can not be thought about as biological machines**, such that a mathematical or physical model can only describe the presented behaviors of a human, but not "fit" the underlying essense of a human, i.e. the free will. To this end, imitating the human behaviors only leads to a neither fish nor fowl result, since LLMs cannot be a distinct creature as it is defined to mimic humans, but also cannot be real humans as their learning process is completely different.

I believe that **a human writes according to his/her own memory**. Such memory includes everything he/she has experienced, learned, and thought about, as well as him/herself as a whole. On the other side, the memory of a human could not be comprehensive, so that it only covers a tiny part of the knowledge corpus of human kind.

I believe that **humans are extremely complex**, so that any attempt to exactly replicate a single human being's behaviors shall fail. In other words, repeating the human in extreme detail, including copying every cell and molecule, reproducing the same environment and his memory, is impossible. On the other hand, if we can exactly replicate everything above, then we should consider that "machine" as a genuine human, not the LLMs we are talking about.

### What are LLMs doing?
We simplify the advanced LLMs as an abstract mathematical function here as

$$
f(\cdot;\theta),
$$

where $\theta$ represents the training algorithm and the model structure. The input of the function includes

$$
\begin{cases}
\mathcal{D}_{train}, \text{ the training data},\\
T, \text{ the context},
\end{cases}
$$

while the output of $f$ is the distribution of the next token. The function $f$'s behaviors are trained to maximize the likelihood of the training data $\mathcal{D}_{train}$, thus determined by them. Then, given a specific context $T$, $f(\cdot|\mathcal{D}_{train}, T;\theta)$ is the predicted distribution of the next token.

#### -> In straightforward words...

The above mathematical description may be difficult to understand, so I provide an intuitive example here.

* The `training data` $\mathcal{D}_{train}$ contains a large number of human written texts, such as novels, news, and scientific papers.

* Each time the `function` $f$ receives a `context` $T$ (e.g. "Hello, how are "), it will output the probability of the next token.

    | Probability | Candidate Token |
    | --- | --- |
    | 0.99 | "you?" |
    | 0.005 | "he?" |
    | 0.001 | "I?" |
    | ... | ... |

    Then, the next token is sampled according to the above distribution, so we almost always get "Hello, how are you?" as the output. In turn, we can also compute the predicted probability of the existence of a sentence, such as "how are you?", by multiplying the probabilities of each token in the sentence.

* And the `training process` is to adjust the the function $f$, so that the averaged probability of the sentences in the training data is maximized. I.e., if there is a writing machine just functioning like $f$s, the machine is "very likely" to produce the same sentences as the training data.

### How to understand the LLM mechanism given different interpretations of probability?

#### 1. Epistemic interpretations.

According to this interpretation, he LLM here is a function that fits the underlying mechanism of 

> ***how to decide a hypothesis $h$ is supported by the evidence $e$***,
 where $$\begin{cases}
h=\text{the next token choice}\\
e=\text{the training data and the context}
\end{cases}.$$

However, regarding the boundaries for the classical interpretation, a hypothesis like writing *A Dream of Red Mansions* must be detailed in order to avoid any incompatible reparameterization. So, it requires detailed context as the author, i.e. his life experiences, not the comprehensive training data. This is too much for the LLM to learn, though.

As for the logical interpretation, apart from its built-in problems, reasoning about "how to write a book" includes a lot of "partial evidence", which is not accepted by the logical language.

#### 2. Subjective interpretations.

From this view, an LLM is trained to take the training data as the ground truth "expert" for probability or credence assignment (refer to <a href="insights_and_ideas.html?id=2026-2-10-the-boundary-of-statistics-(3)-subjective-probability">this blog</a> for more details). In this way, the ideal "rational agent" required by the subjective interpretation is then the "statistical human" represented by the training data. 

> ***The LLM is mimicing the averaged human being.***

For example, if there are 33.3% humans saying "My favorate light color is red", 33.3% saying "My favorate light color is green", and 33.3% saying "My favorate light color is blue", then the LLM may either output them with equal probabilities, or output "My favorate light color is white", since "white" is a mixture of the three colors😅. This approach enables the LLM to learn the general writing skills, such as the basic grammer and the common phrases, but the question is "we are not the averaged man, we are personalized individuals".

#### 3. Objective interpretations.

If we leverage the objective interpretations, well, we shall exclude the frequency interpretations for the first hand, since writing a book is unrepeatable by its nature. So we may consider the LLM trained to learn an objective distribution of the next token, which is determined by the underlying mechanisms of natural language, or the laws of our universe. This is much like the idea of learning an engine to simulate the physical world.

> ***The LLM is simulating an objective token generation process in our universe.***

This intuition, nevertheless, considers we humans as predictable machines governed by those objective laws and principles. A natural tit-for-tat prespective is, therefore, the free will assumption we made before.

## Conclusions.

From the foregoing, we briefly learned about several possible ways to interpret probability, primarily including the epistemic interpretations, the subjective interpretations, and the objective probabilities. Those different schools, however, are tightly interlinked with each other, and suffer from problems for being established on metaphysical assumptions. This problem is rooted in the very nature of probability: `indeterminacy`.

When trying to learn about the initial question "can LLM write *A Dream of Red Mansions*", we find that the core differences between human writing and what LLMs are doing could be summarized as

* `Learning too much`, that the LLM has to obtain the writing skills from a comprehensive dataset. This is different from the human brain framework, which encodes basic abilities in its biological structures.

* `Learning too little`, that the LLM has trouble learning a whole human being's life-long memory, which is the basis of human writing. Such information is not only massive in quantity, but also multi-modal.

The above points can be summarized as <u>*the LLMs are not evolving like humans*</u>, because our brains are the result of a long evolutionary process, instead of a statistic-and-reward-driven training process. To this end, we are born with an elaborate brain structure, capable of learning to speak and write with our personal life trajectories. Our vision and insights are inherently limited, which, conversely, "brings" us free will, personalities, creativity, and thus dignity.

What if we are able to simulate the whole history of our universe, or maybe just everything a man may experience in his life? Can they write a book like *A Dream of Red Mansions*? Who knows... We'll just see.🐵

<h2 style="text-align: center;">Keep the dignity of being human!📖</h2>

---

1st version on 2026-2-16