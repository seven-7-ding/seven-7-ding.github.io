<!-- The Boundary of Statistics (4): Objective Interpretations -->

## Objective Interpretations.
> No, probabilities are objective "substances" that exist in the world.

Different from the subjective interpretations we discussed in the last article, here we will see several objective interpretations of probability. Generally speaking, objective interpretations consider probabilities as objective "substances" in the world. We focus on the following three prevalent objective interpretations: 

* **Frequency Interpretation**, which correlates probabilities with relative frequencies.

* **Propensity Interpretation**, which views probabilities as tendencies or propensities of physical systems to produce certain outcomes.

* **Best System Interpretation**, which esteems probabilities as part of the natural laws of the universe.

## Frequency Interpretation
> If we toss a fair coin many times, the relative frequency of heads will converge to 0.5.

### Finite Frequency Interpretation.
Intuitively, if we repeatedly toss a coin 100 times, and get 50 heads, we say the probability of getting heads is $\frac{50}{100} = \frac{1}{2}$. The $100$ tosses are called the **reference class**, and the probability of the attribute **heads** actually occurs with the **relative frequency** of $\frac{1}{2}$ in this reference class.

#### -> Problem of the single case.

1. Finite frequency interpretation faces the problem of the single case, which arises in various perspectives. Take the "fair" coin above as an example, what if we toss the coin only once? The relative frequency of heads is either $0$ or $1$, yielding $\text{Grain}=\frac{1}{n}$ given $n=1$ experiments. In this way, this coin is bound to be unfair. We call such problem **misleading frequency**.

2. The second perspective is that for those unrepeatable events, such as the probability of a specific atomic decay, the frequency interpretation seems to be inapplicable. Furthermore, ideally, nothing in the real world is perfectly repeatable. Thus, we question the applicability of the frequency interpretation in general.

3. What's more counterintuitive, let's see the following example:

    * Consider "myself" one of the objects among the universe;

    * Consider a specific class $\{\text{me, Mount Qomolangma, my laptop}\}$;

    * Someone asks: "what is the probability for you to be shorter than 2 meters?"

    Then, the relative frequency of the attribute "being shorter than 2 meters" in this reference class is $\frac{2}{3}$. Since I belong to this class, should I say that "my probability of being shorter than 2 meters is $\frac{2}{3}$"? It quickly draws the boundary of the finite frequency interpretation, whose aplicability should be evaluated depending on the case at hand, while asking the question "what is the probability for you to be shorter than 2 meters?" is just meaningless.

### Limit Frequency Interpretation.
To address the problem of "misleading frequency", we try to reframe the case of coin tossing w.r.t. an infinite reference sequence $\{HTHT\ldots\}$, and define the probability of heads as the limit of the relative frequency of heads in this infinite sequence.

#### -> Reference sequence problem.

Each limit frequency depends on a endless reference sequence, but different orders of the same sequence may yield different limits. For example, we have 

$$
\{H,T,H,T,H,T\dots\},
$$
yielding $P(H)=\lim_{n\to\infty}\frac{n}{2n}=\frac{1}{2}$. However, if we rearrange the sequence as

$$
\begin{cases}
\{H,H,T,H,H,T,\dots\} \Rightarrow P(H)=\frac{2}{3}, \\
\{H,T,T,H,H,H,T,T,T,T,\dots\}\Rightarrow ref.freq(H)\text{ oscillates between }\frac{1}{3}\text{ and }\frac{2}{3}.\end{cases}
$$

To this end, what kind of reference sequences are viable? Von Mises proposed the axioms to draw the scope of the limit frequency interpretation, including

* **Axiom of Convergence**: the limiting relative frequency of any attribute in the reference sequence must exist.

* **Axiom of Randomness**: the limiting relative frequency of each attribute must be invariant under any "place selection".

Here, **place selection** refers to certain kinds of subsequences identified by a rule deciding whether or not the $i$ th content should be chosen $f(s_1,s_2,\cdots,s_{i-1})\in\{True, False\}$. The decision can only depend on the previous contents $s_1,s_2,\cdots,s_{i-1}$, but not on the result of the $i$ th content $s_i$ and the future ones.

Importantly, place selection ensures **randomness**, such that we cannot manipulate the order of the sequence to alter the results. How to further interpret randomness? How can such selection rules ensure randomness? These questions also deserve further analysis.

#### Emm... But what is infinite in the real world?

Yes, there is no such "infinite reference sequence" in the real world. So in practice, we can never verify and apply the limit frequency interpretation!😅

Even worse, considering the Kolmogrov's law, we find that the limit frequency interpretation is incompatible with the additivity axiom. This is simply because if we have two infinite reference sequences $\{s_i\}$ and $\{t_i\}$ defining two probabilities $P(A)$ and $P(B)$, the union of these two sequences $\{s_i\}\cup\{t_i\}$ may not be a valid reference sequence, thus we cannot define $P(A\cup B)$. Thus, the additivity axiom is violated.
```
Indeed, the domain of definition of limiting relative frequency is not even a field, let alone a sigma field (de Finetti 1972, §5.8).
```

## Propensity Interpretation.
> The coin has the "habit" to produce a sequence of tosses with a nearly equal number of heads and tails.

As is stated above, the propensity interpretation views probabilities as a built-in tendency of the objective itself (i.e., **the propensity of the coin**), or the physical system (i.e., **the propensity of the coin tossing system**).

Following this view, we have two versions of the propensity interpretation, namely `long-run propensity interpretation` and `single-case propensity interpretation`.

### Long-run Propensity Interpretation.
The long-run propensity interpretation would say that 

* The coin has a strong tendency to toss heads with long-run relative frequency of $\frac{1}{2}$.

Here, the frequency $\frac{1}{2}$ **does not measure the propensity**, but rather is the outcome of such propensity. This undermines the meaningfulness and applicability of the long-run propensity interpretation. And the similar problems of the limit frequency interpretation arises as soon as we try to reason about a specific scenario via the long-run propensity interpretation.

### Single-case Propensity Interpretation.
The single-case version, on the other hand, would state that

* The "coin tossing game" has a fair tendency to result head, which could be valued as $\frac{1}{2}$.

Here, we measure the propensity with the value $\frac{1}{2}$, which is the built-in feature of the system. Nevertheless, the single-case interpretation gets rid of the correlation with reference sequences, at the cost of totally **untestable statements**. How can you really testify the proposition `this coin tosses head with propensity 0.5`? This is thus metaphysical rather than scientific.

### -> Let's switch our mind here...
Well, from the discussion above, we always find counterexamples and inherent problems when we follow the standard way of `firstly define what propensity is => then reason about the propensity in different scopes`. But what if we switch our mind here by leveraging the **Ramsey/Lewis/'Canberra Plan' Style**? That is, the propensity should play certian theoretical roles, which imposing a set of constraints on the way they must behave. Then, we can define the propensity as entities that satisfy these constraints.

However, we meet the problem of *overconstraining* here.

1. On one hand, in the scope of <u>**degrees of belief**</u>, propensities are supposed to constrain the degree of belief/credences of a rational agent. According to the **Principal Principle**, if an agent knows that the propensity of a coin tossing head is $\frac{1}{2}$, then the agent's degree of belief in the proposition `the coin tosses head` should also be $\frac{1}{2}$. (Refer to <a href="insights_and_ideas.html?id=2026-2-10-the-boundary-of-statistics-(3)-subjective-probability">the last article</a> for more details.)

    Since a rational agent's degree of belief should satisfy the probability calculus, the propensity should also satisfy the probability calculus. (Kolmogrov's axioms.)

    On the other hand, if propensities fit the probability calculus, they surely satisfy the Bayes' theorem, i.e.,

    $$
    P(A|B)=\frac{P(B|A)P(A)}{P(B)}.
    $$

    Such formula ensures that <u>*if $P(A|B)$ is a valid propensity, $P(B|A)$ is also a valid propensity*.</u> 
    
2. However, in the scope of <u>**causal relation**</u>, such reversible causality is apparently not always the case in the real world. For example, we can say `"he drives the car" has a propensity to cause an accident`, but we cannot say `"his having an accident" has a propensity to his driving the car`.

To this end, the new way of defining propensities via their theoretical roles also faces severe problems...🥲

## Best System Interpretation.
> From the begining of our universe, the law of probabilities has been governing the evolution of the universe, just like $e=mc^2$🕹️.

According to the best system interpretation, probabilities are part of the "best system" that has governed the evolution of the universe since the beginning, just like the Newton's law of motion, the Maxwell's equations, and the Einstein's field equations. Intuitively, this interpretation further lifts the level of abstraction by treating probabilities as part of the natural laws of the universe, rather than as tendencies or frequencies in different objectives.

But, how to judge a sytem as the "best" one?

Lewis proposed that the best system should be the one that best balances **simplicity** and **strength**. As for probabilities, they should additionally satisfy the **fit** constraint, that the actual history of our universe is highly probable according to the probabilities in the best system.

### 1. Intermediate chances VS determinism.
Standard laws for dynamical systems, such as Newton's law of motion, are deterministic, which seem imcompatible with the intermediate chances like $\frac{1}{2}$ for a coin toss. To address this conflict, Loewer assigned such intermediate chances to the **initial conditions**. This approach provides a substantial gain in strength with relatively little cost in simplicity.

Also, existing scientific theories, including standard quantum mechanics and statistical mechanics, have already incorporated in that way, and resulted in fruitful outcomes.

### 2. Best system VS relative frequency.
We have seen that one of the major concerns about the frequency interpretation is that determining the probability of an attribute according to a reference class may yield unstable results, and finite reference classes inherently yield only rational-valued probabilities. Then how does the best system interpretation address the issues?

Mathematically, when we think of the probability of a coin tossing head via the best system interpretation, we are supposed to consider a ***pervasive law*** that dominates its behaviors, which is the `essense of probability`. As continuous functions are more "simple and natural", irrational-valued probabilities make sense in that way.

On the contrary, any reference frequencies are not capable of describing such a natural law, because they only add little strength to the system at the cost of much complexity.

### 3. Problems: subjective judgment? And, how to "fit"?
Ironically, the best system interpretation claims that there is an objective "best system" that **balances** **simplicity**, **strength**, and <u>**fit**</u>, it does not provide an objective way to determine what is 

* simplicity,
* strength,
* balance, ...

For example, when we talk about "simplicity", we need a specific language. It is ture that the equation $e=mc^2$ is simple in our scientific language, but any complicated equation can be rewritten in a simple form given a specific language (you just refer to the law with a $T$!😅). Then, which language should we choose as the baseline?

Lewis argued that there exists a canonical language that only consists of **natural** predicates, i.e. we accept "green" and "red" as valid predicates, but not "happy" and "sad". But what is the criterion for being natural? Clearly, this remains a subjective judgment. And even worse, what is the difference between "the nature favors simple laws" and "the God exists"?  We finally reach a metaphysical assumption here again...😵

**The second concern here**, is how do we "fit" the actual history of our universe? For one thing, any natural law of probabilities that give intermediate chances is compatible with the actual history of our universe. For the other, however, if we try to compare or decide the probabilities for the universe history under specific laws, the actual historical sequence is very unlikly to happen, since it almost surely yields $\sim 0$ probabilities. The core of this problems is that, though the best system interpretation differs itself from the frequency interpretation, it still tries to "reason about outcomes of reference sequences".

**From a higher level, the essense of the above problems** is that the best system interpretation switches the question of "how to learn probabilities in an idealized world", which is an epistemological question, to the question of "what is probability". The latter one inevitably involves subjective judgments or metaphysical assumptions.

<h2 style="text-align: center;">To be continued...🪨</h2>

---

1st version on 2026-02-15