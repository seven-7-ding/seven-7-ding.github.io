<!-- The Boundary of Statistics (2): Logical/Evidential Probability -->

## Logical Probability.

> I can compute and quantify how much a piece of evidence $e$ confirms a hypothesis $h$.

Now let's talk about the second interpretation of probability...

The ambition of this interpretation is to establish a logical formulation that can represent <u>***the degree of support or confirmantion that a piece of evidence $e$ provides to a hypothesis $h$***</u>.

It begins with a simple language that includes:

- A finite set of independent monadic `predicates`. For example, we only consider $1$ predicate $F$. (In the case of a coin, $F$ could represent "is head".)

- Countably many `individual` constants. For example, we can have $a, b, c$ representing $3$ coin-flips.

- The strongest `state descriptions` to describe the individuals are conjunctions of complete descriptions of each individual. In our coin example, they should be
    $$
    \begin{aligned}
    1. &F(a) \wedge F(b) \wedge F(c), \\
    2. &F(a) \wedge F(b) \wedge \neg F(c), \\
    3. &F(a) \wedge \neg F(b) \wedge F(c), \\
    4. &F(a) \wedge \neg F(b) \wedge \neg F(c), \\
    5. &\neg F(a) \wedge F(b) \wedge F(c), \\
    6. &\neg F(a) \wedge F(b) \wedge \neg F(c), \\
    7. &\neg F(a) \wedge \neg F(b) \wedge F(c), \\
    8. &\neg F(a) \wedge \neg F(b) \wedge \neg F(c).
    \end{aligned}
    $$

    Also, there are weaker state descriptions like $F(a) \wedge F(b)$.

- `Structure descriptions` are maximal sets of state descriptions, among which any state description could be derived from another by some permutation of the individuals. For example, we have structure descriptions

$$
\begin{aligned}
\{1\}, &\text{"Every individual is head"} \\
\{2, 3, 5\}, &\text{"Exactly two individuals are head"} \\
\{4, 6, 7\}, &\text{"Exactly one individual is head"} \\
\{8\}, &\text{"No individual is head"}.
\end{aligned}
$$

- Then, we asign `probability weights` to the structure descriptions. Importantly, every structure description is assigned an equal weight. After that, each state description belonging to a given structure description is assigned an equal part of the weight of that structure description as their `probability measure`. In our example, we have

    | *State description* | *Structure Description* | *Weight* | *Probability Measure* $m^*$ |
    |:---:|:---:|:---:|:---:|
    | $F(a) \wedge F(b) \wedge F(c)$ | I. Everything is $F$ | $1/4$ | $1/4$ |
    | $\neg F(a) \wedge F(b) \wedge F(c)$ | II. Two $F$, one $\neg F$ | $1/4$ | $1/12$ |
    | $F(a) \wedge \neg F(b) \wedge F(c)$ | | | $1/12$ |
    | $F(a) \wedge F(b) \wedge \neg F(c)$ | | | $1/12$ |
    | $\neg F(a) \wedge \neg F(b) \wedge F(c)$ |  III. One $F$, two $\neg F$ | $1/4$ | $1/12$ |
    | $\neg F(a) \wedge F(b) \wedge \neg F(c)$ | | | $1/12$ |
    | $F(a) \wedge \neg F(b) \wedge \neg F(c)$ | | | $1/12$ |
    | $\neg F(a) \wedge \neg F(b) \wedge \neg F(c)$ | IV. Everything is $\neg F$ | $1/4$ | $1/4$ |

- Now, we can define the `confirmation function` $c$ as follows:

    - The `evidence` $e=\text{(a is head)}=F(a).$ It has probability measure 
    $$
    m^*(e)=m^*(\{1, 2, 3, 4\})=\frac{1}{2};
    $$

    - The `hypothesis` $h=\text{(c is head)}=F(c)$, and 
    $$
    m^*(h\&e)=m^*(\{1, 3\})=\frac{1}{3};
    $$

    - So the confirmation is measured as 
    $$
    c(h,e)=\frac{m^*(h\&e)}{m^*(e)}=\frac{1/3}{1/2}=\frac{2}{3}.
    $$

#### This makes sense!

From the definition and the example, we spontaneously derive the intuitive idea that <u>we can learn from past experiences</u>. In the example, we have $c(h,e)=2/3>1/2=m^*(h)$, which means that the evidence $e$ confirms the hypothesis $h$.

On the other hand, if $e'=\text{(a is not head)}=\neg F(a)$, then we have $c(h,e')=\frac{1}{3}<\frac{1}{2}=m^*(h)$, which means that the evidence $e'$ disconfirms the hypothesis $h$.

#### 1. The relationship between our confirmation function and deductive/inductive logic.

- Deductive logic is a discrete system, which means that the confrimation function $c$ can only take values either $0$ or $1$. 
    
    > For example, suppose $e=\text{birds can fly; Tweety is a bird}$, and $h=\text{Tweety can fly}$. Then we have $c(h,e)=1$, which means that the evidence $e$ fully confirms the hypothesis $h$.

    And the confirmation system we derived above is a generalization of deductive logic, since it takes values between $0$ and $1$.

- On the other hand, inductive logic is one of the ways that our confirmation function can be applied. The coin example we used previously is an example of inductive reasoning.

#### 2. Generalize to a continuum of confirmation function $c_\lambda.$

To smooth the impact of inductive evidence, Carnap then proposed a $\lambda$-soft confirmation function $c_\lambda$ to measure how previous evidence confirms a future hypothesis.

For a family of predicates $\{F_1, F_2, \ldots F_k\},k>2$, we can define the $\lambda$-soft confirmation function as follows:

$$\begin{cases}
h=\text{the }(t+1)th \text{ individual has } F_j, \\
e=\text{among the first } t \text{ individuals, } n_j \text{ of them have } F_j, \\
c_\lambda(h,e)=\frac{n_j+\lambda/k}{t+\lambda}.
\end{cases}$$

The greater the $\lambda$, the less impact the evidence has on the confirmation.

### The boundary of such logical probability.

#### 1. Arbitrary assignment of the parameter $\lambda$.

Apparently, the choice of $\lambda$ is arbitrary. This means that we are not able to assign a specific probability/confirmation value to a given hypothesis based on the evidence.

#### 2. In infinite universe, finite evidence cannot confirm any hypothesis.

That is, if we have (nearly) infinite individuals, any finite evidence can only confirm a hypothesis to a degree of $\sim0$.

#### 3. When learning from experience, we can not get such "total evidence" required by the logical probability.

In the logical probability system above, we can find that the evidence $e$ is required to be arbitrary strong. For example, in the previous example, we have $e=\text{a has }F$, a.k.a. $e$ is a `total evidence` that fully determines whether ($a$ has $F$) or not.

However, in real life, we often deal with weaker evidence, such as $e'=(\text{a has }F \text{ with probability } 0.8)$. In this case, we cannot apply the confirmation function $c$ to measure how much $e'$ confirms $h$.

## Evidential Probability.

> Never formalize the evidential relation synaptically...

Now that the idea of formalizing the degree of confirmation yields some boundaries, Timothy Williamson believes that a new theory to explain probablistic *evidential relations* is needed, while they are not logically formalizable.

In **Evidential Probability**, the core idea is that there exists an initial probability distribution $P$, which measures the evidential probability of a hypothesis $h$ given total evidence $e$ as $P(h|e)$.

1. To reach the admissibility, Williamson claims that "$P$ will be assumed to satisfy a standard set of axioms for the probability calculus".

2. As for ascertainability, however, Williamson believes that "we should resist demands for an operational definition". The "best policy" to theorize and reason about evidential probability is to begin with original intuitive understandings, then refine them via a vague notion system. In short, evidential probability rejects ascertainability...

3. In terms of its rejection of ascertainability and logical formalization, one may spontaneously seek for other theortical concepts to reason about evidential probability. For example, Eder sees $P(h|e)$ as an **ideal subjective probability**, which, then, results in a subjective interpretation of probability. We shall discuss this in the next post...

<h2 style="text-align: center;">To be continued...📐</h2>

---

1st version on 2026-02-09