<!-- The Boundary of Statistics (3): Subjective Probability -->

## Yes, my belief matters — Subjective Probability.

> The coin will land head with a probability of 0.5, only because "I" believe so...

The subjective probability interprets probability as ***the degree of belief***. Generally, this interpretation includes two different versions.

### 1. Probability from betting analysis.

> I'm willing to exange 0.5 dollar for the 0-1 gamble of a coin toss.

The story begins with a simple scenario. Suppose there is a gamble that pays you 1 dollar if an event $F$ happens, and you get nothing otherwise. In your opinion, this gamble equals to $p$ determined dollars; in other words, you are willing to exchange $p$ dollar for this gamble. Then, we say that your degree of belief in event $F$ is $p$.

Accordingly, we introduce **Dutch Book** to examine the rationality of subjective probability, which is a series of such bets. Others can buy or sell you bets at your quoted "prices" $p$.

#### -> Admissible properties.

The subjective probability defined above seems quite arbitrary. For example, one may assign a subjective probability of 0.8 to event $F$, and assign a subjective probability of 0.9 to event $F'$ at the same time, while $F$ and $F'$ are disjoint. However, we can show that if a person's subjective probability does not satisfy the Kolmogorov's axioms, then this person is vulnerable to Dutch Book, i.e., others can design a series of bets to make this person suffer a certain loss no matter what the outcome is.

- If $P(F) < 0$, others can buy you the bet of event $F$ repeatedly to make you lose money indefinitely. Similarly, if $P(F) > 1$, others can sell you the bet of event $F$ repeatedly, while you can certainly not win more than 1 dollar in a bet.

- If $P(F_1 \cup F_2) < P(F_1) + P(F_2)$ for two mutually exclusive events $F_1$ and $F_2$, others can buy you the bet of event $F_1 \cup F_2$ and sell you the bets of events $F_1$ and $F_2$ respectively to make you lose money.

### 2. Probability from utilities (preferences).

> You assign 10 to rain tomorrow, and 1 to sunny tomorrow.

Another way to define subjective probability is based on your preferences (utilities) over different outcomes. Suppose there is an event $F$. You assign utility $u(F)$ to the outcome where $F$ happens, and assign utility $u(\neg F)$ to the outcome where $F$ does not happen. Now, consider an outcome $A$ that is indifferent to you compared to the gamble above, to which you also assign a utility $u(A)$. We can define the subjective probability of event $F$ as:$$P(F) = \frac{u(A) - u(\neg F)}{u(F) - u(\neg F)}, \text{ where }u(F)>u(\neg F).$$

#### Ethially neutral.

It is worth noting that the propositions here should be ***ethically neutral***, that is, the real outcomes have **no** or **symmetrical** inner values that can influence your utility assignment.

For example, the coin toss we commonly discuss is ethically neutral. However, if the coin landing head means a person's life will be saved, while the coin landing tail means the person's life will be lost, then the outcome is no longer ethically neutral. In such case, even if you know the coin is fair, you may still be unwilling to bet tail, because you care about the person's life. In other words, the utility function fails to fully reflect your desires in such case.

#### Representation theorem.

To maintain the consistency of our utility assignments, the possible utility functions should satisfy some admissible properties. Under the assumption that these properties are satisfied (we will not discuss them here), we can prove the **Representation Theorem**: all the possible utility functions of a certain agent consist a positive linear transformation family. That is, if $u_1$ and $u_2$ are two possible utility functions of the agent, then there exist two constants $a>0$ and $b$, such that for any outcome $X$, we have $$u_2(X) = a \cdot u_1(X) + b.$$

When the theorem holds, the probability defined above is unique for the agent.

### -> From Orthodox Bayesianism to Objective Bayesianism.

1. We find that the core of subjective probability is the choice of rational agent. Regarding to this, **Orthodox Bayesianism** holds the most relaxed attitude:

    > **i)** Conform to the probability calculus.

    > **ii)** Include a rule for updating probabilities in the light of new evidence. $P_2(F) = P_1(F|E)\text{ , where }P_1(E)>0$.

2. To further exclude irrational utility assignments, more constraints are proposed. The basic idea is that rational credences should track some objective features, including **relative frequencies in the long run**, a.k.a. *habit*.

    > For example, the credence should reflect the habit of proceeding from the opinion that a toadstool is yellow to the opinion that it is unwholesome.

    > -> But what is that "habit"? The answer is "it will in general be equal to the proportion of yellow toadstools which are in fact unwholesome".

3. Another interesting thing is that, we are usually guided by some "expert opinions". That is, 

    $$
    P(A|q(A)=x) = x,\forall A,x,
    $$ 
    where $q(A)$ is the expert's credence on event $A$. There are several special *experts* stemming from different perspective.
    - **Principal Principle**: as a rational agent, if you know that there is an objective chance function $ch$, which assigns $ch(A)=x$ for event $A$, then your credence in $A$ should also be $x$.
        $$
            C(A|ch(A)=x) = x,\forall A,x.
        $$
    - When we trust the relative frequency, we get
        $$
        P(A|rel.freq(A)=x) = x,\forall A,x,
        $$
        where $rel.freq(A)$ is the long-run relative frequency of event $A$.
    - On the other hand, if we trust the future assignments at $t$, we get
        $$
        P(A|P_t(A)=x) = x,\forall A,x,t.
        $$ 
        This encapsulates the demand for *diachronic coherence*, imposed by rationality.
    - If, ultimately, we choose the *truth function* as the expert, we get
        $$
        P(A|truth(A)=1\cap q(A)=x) = 1,\forall A,x,
        $$ 
        where $truth(A)=1$ indicates $A$ being true, and the equation holds for any expert $q$. The truth function, in this way, overrides all other experts. 
        
        **\*** Moreover, although we cannot obtain the truth function in practice, <u>it is shown that a rational credence assignment should conform to the probability calculus, which helps to lower the "distance" to the truth function.</u> This really offers a new perspective to understand the probability axioms.

4. With all those supplementary constraints, we gradually transition from Orthodox Bayesianism to **Objective Bayesianism**. In practice, however, neither extreme is fully adopted.

<h2 style="text-align: center;">To be continued...💤</h2>

---

2nd version on 2026-02-15

1st version on 2026-02-09
        