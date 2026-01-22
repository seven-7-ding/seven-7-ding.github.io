<!-- # Another way to understand ANN -->

> Artificial Neural Networks (ANN), literally means to mimic the way biological brains work. Here I focus on those prevalent ANNs mimicing the brain from a microcosmic perspective, such as FCN, CNN, RNN...

## Four key components of Neural Networks

Intuitively, neuron networks are made up of a bunch of neurons connected together, which could be seen as a directed graph. Each neuron receives inputs from other neurons, processes them, and sends outputs to other neurons.

From my understanding, every neural network has four key components:
* the rule for updating the neurons' states;
* the way neurons are connected;
* the way neurons perceive inputs and provide outputs;
* the way neuron connections are updated.

## How does biological version of these components work?

Although the biological version of these components is still not fully understood, we do have some basic knowledge about them.

**- The rule for updating the neurons' states.**

This is a complex process involving electrical and chemical signals, incorporating gene expression, ion channel dynamics, and synaptic transmission, etc. In a general sense, a neuron simply integrates incoming signals, processes them, and generates an output signal. <u>It is now widely accepted that a "thresholding" mechanism is involved.</u>

**- The way neurons are connected.**

Neurons are connected through *synapses*. As a natrual structure, <u>numerous synapses transmit signals in parallel</u>.

Besides, <u>the massive dynamic network is time-aware, meaning that the order and timing of signals matter.</u>

**- The way neurons perceive inputs and provide outputs.**

Creatures has different sensory organs to perceive different types of inputs, which are then converted into <u>"standard" neural signals</u>. To control "effectors", some neurons provide such signals as the ultimate outputs.

**- The way neuron connections are updated.**

It is widely recognized that the updating of neuronal connections constitutes the primary mechanism underlying learning. In particular, this process allows the network to incorporate past experiences into its adaptation.

In real neural networks, <u>synaptic connections are updated through complex biochemical processes</u>. Various types of cells, organs, and biological processes cooperate to achieve this.

## How does ANN implement these components?

Mathematically, treat a neural network as a directed graph $G=(V,E)$, where $V$ is the set of $N$ neurons (nodes), and $E$ is the set of connections (edges) among them.

Firstly, we represent the states of all neurons as a vector $h_t \in \mathbb{R}^N$ at time step $t$.

In the next time step, the neurons decide their outputs via an activation function $\delta_t$, resulting in an activation vector 

$$a_t = \delta_t(h_t).$$

Then, the outputs are transmitted through the connections, and incorporated using weighted sums. This process can be represented as 

$$h_{t+1} = A_t a_t=A_t \delta_t(h_t),$$

where $A_t \in \mathbb{R}^{N \times N}$ is the weighted adjacency matrix of the graph $G$ at time step $t$. This process will be repeated for several time steps, corresponding to multiple layers in FCN, or information passing in CNN/FCN, or time steps in RNN.

<a href="..\blogs\2026-1-22-another-way-to-interpret-ann/image_1.jpg" target="_blank">
    <img src="..\blogs\2026-1-22-another-way-to-interpret-ann/image_1.jpg" alt="ANN Interpretation" style="display: block; margin: 10px auto;" />
</a>

🌟Finally, the states of the neurons are updated based on the received inputs and possibly their previous states. A common update rule is given by backpropagation:

$$A_{t}' = A_t - \eta \frac{\partial L}{\partial A_t},\forall A_t$$

where $L$ is the loss function, and $\eta$ is the learning rate.

---

**In short, ANN mimics biological neural networks through the following formulations:**

$$
\text{Neuron state update via connections: } h_{t+1} = A_t \delta_t(h_t)
$$

$$
\text{Neuron connection update: } A_{t}' = A_t - \eta \frac{\partial L}{\partial A_t}
$$

## What are the differences?

As has been mentioned, ANNs simulate biological neural networks in a highly simplified manner. To this end, there are several key features of neural networks that haven't been captured by ANNs.

#### Over-simplified update rules for neural connections.

ANNs typically use <u>**gradient descent-based methods**</u> to update connection weights. This mechanism elgantly bridges the gap between past experiences and updates, and is computationally efficient.

But this approach severely narrows the scope of possible update rules. In biological neural networks, synaptic connection updates are not only influenced by the relation between the final output and the considered synapse, but also by the states of neurons, the "weights" of neighboring synapses, ... These factors form a complex non-linear relationship that is difficult to capture with a deterministic mathematical formula.

#### Biologically inspired "refreshing" mechanisms.

Maintaining the learnability and adaptability of ANNs is broadly recognized as a challenge. It seems tempting to introduce new mechanisms inspired by biological processes to address this issue. For example, we can 

- clean unnecessary connections periodically, which is represented by their <u>**relatively $\approx 0$ weights**</u> (existing methods includes <a href="https://arxiv.org/abs/2302.12902">ReDo</a>, which reset neurons with ~0 activations, and <a href="https://arxiv.org/abs/2505.24061">GraMa</a>, which reset connections with ~0 gradients);

- create new connections based on certain rules.

#### Time-aware encoding/decoding of signals.

Though ANNs like RNN and Transformer process sequential inputs, they rarely consider the possible time-based information within the neural signals.

In biological neural networks, on one hand, the timing and order of signals can carry significant information. Known mechanisms like Long-Term Potentiation (LTP) and Short-Term Potentiation (STP) demonstrate that the timing of pre- and post-synaptic spikes can influence synaptic strength. <u>**Such mechanisms effectively shift the complexity originally imposed on the network’s dimensionality into the temporal domain.**</u>🕜

On the other hand, the input and output signals of neural networks could also be encoded in a time-aware manner. It is worth mentioning that the idea of *patching pictures into sequences* in Vision Transformers somewhat resembles this concept.📈

#### Massive parallel computing.

In biological neural networks, massive processes occur in parallel. This parallelism ensures efficient information processing, and the feasibility of complex architectures.

## Okay, what can new networks be?

I'd like to propose some toy ideas🕹️ for network designs, which are now purely conceptual without experimental validation nor theoretical analysis.

* Using algorithms including evolutionary algorithms or RL to build a "Connection Update Module" that is responsible for updating the connections based on various factors.

* Designing time-aware schemes for neural signal interpretation and transmission. Existing works on <a href="https://zhuanlan.zhihu.com/p/416187474">Spiking Neural Networks (SNN)</a> may provide some insights.

* Maybe we do need novel hardware architectures to better support massive parallel computing...😇

<h2 style="text-align: center;">Anyway, I'm proud to be a natural creature!🪼</h2>

---

1st version on 2026-01-22