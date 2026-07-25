<!-- RL, and to be mad -->

This blog comes after several wonderful discussions with Prof. Richard S. Sutton, together with the speech I gave at the end of Summer School 2026 in SII (which is one of the best manuscript I have ever written so far...).

## Ideas and Insights from Prof. Sutton

### 1. "Prior" to the Alberta Plan: design time.

The core concern here, is "how to design a good agent" that is able to perform continual learning as is expected in <a href="https://arxiv.org/pdf/2208.11173"> the Alberta Plan</a>. 

#### Q[1.1]: Why we can and should manually design the agent system?

Regarding "how to obtain an agent", Prof. Sutton implicitly chose the manual design approach. We have the OaK structure shown below. These methods inherently need prior knowledge about the underlying principles of how intelligence works.

<a href="..\blogs\2026-7-25-an-old-man-with-his-rl\1.png" target="_blank">
	<img src="..\blogs\2026-7-25-an-old-man-with-his-rl\1.png" alt="OaK structure" style="display: block; width: 33.33%; height: auto; margin: 10px auto;" />
</a>

On the contrary, there existing some different approaches, such as the "rule-based" approaches. The most representative one is the evolutionary algorithm based methods. They do not require prior knowledge about the intelligence principles, but only need to define a set of rules to guide the evolution process.

#### A[1.1]: the goal is to understand intelligence, not to build an intelligent agent.

The answer is simple: the very purpose of the Alberta Plan is to understand intelligence. Thus, we try to derive the principles of intelligence from psychology, neuroscience, and other related fields, and use computational tests to verify them.

Therefore, if we use the evolutionary algorithm based methods, we may be able to obtain an intelligent agent, but we cannot understand the principles of intelligence. I think this also responds to the concerns about LLMs and deep networks: they are not well understood and cannot be interpreted in detail.

On the other hand, the Alberta Plan doesn't care about the "starting point" of the agent, but rather "how does it learn and adapt to the environment". But as a matter of fact, since the solutions to the latter problem depend largely on the former (e.g., we have different learning algorithms for different function approximators), we still need to work on both the design time and the learning time.

> An intereating thing is that, we humans always "build" something even if we cannot "understand". For example, we drink Coke when we don't know how to make it. And we are actually building true intelligence all the time! We make children!😅

### 2. The transition model should be an "option model", and also an "expectation model".
The transition model should take an "option" and the "strating state" as input, and predict the "expected stopping state" and the "expected cumulative reward".

#### Q[2.1]: Why option model?

An option is made of a behavior policy and a termination condition, 

$$
\text{option} = (\pi_o, \gamma_o).
$$

<a href="..\blogs\2026-7-25-an-old-man-with-his-rl\1.png" target="_blank">
	<img src="..\blogs\2026-7-25-an-old-man-with-his-rl\2.png" alt="Option Model" style="display: block; width: 50%; height: auto; margin: 10px auto;" />
</a>

#### A[2.1]: learning the transitions at a higher level is more efficient and effective.

We don't need to understand the detailed transitions at the primitive level (e.g., the Newtonian mechanics of each atoms), but rather the transitions at a higher level (e.g., if I push the door, it will open).

However, a concern needs to be addressed here: ***how to learn such an option model?*** If we choose to learn the option model, the data efficiency will be a big problem. For example, if we take 100 steps to push the door, we can train the primitive transition model for 100 steps, but we can only train the option model for 1 step (if no additional updates are made). Therefore, we need to find a way to learn the option model more efficiently.

#### Q[2.2]: Why expectation model?

We can choose to learn a distribution model, which can predict the distribution of the stopping state and the cumulative reward. This is much stronger than the expectation model, but it is also much more difficult to learn. 

#### A[2.2]: linear function approximation works well with expectation model.

<a href="..\blogs\2026-7-25-an-old-man-with-his-rl\1.png" target="_blank">
	<img src="..\blogs\2026-7-25-an-old-man-with-his-rl\3.png" alt="Expectation Model" style="display: block; width: 50%; height: auto; margin: 10px auto;" />
</a>

The computation of the expected value can be simplified as follows if we use linear function approximation for the value function:

$$
\begin{aligned}
\sum_{s'} \hat{p}_\theta(s'\mid s,a)\,\hat{v}(s',\mathbf{w})
&= \sum_{s'} \hat{p}_\theta(s'\mid s,a)\,s'^\top \mathbf{w} \\
&= \left(\sum_{s'} \hat{p}_\theta(s'\mid s,a)\,s'\right)^\top \mathbf{w} \\
&= \mathbb{E}\left[S_{t+1}\mid S_t=s, A_t=a\right]^\top \mathbf{w} \\
&= \bar{s}(s,a)^\top \mathbf{w}.
\end{aligned}
$$

### 3. how to build new benchmarks and metrics for continual learning research?

We don't necessarily need a benchmark and some specific values to study continual learning (which may lead to crazy competitions helpless for understanding intelligence). Just see it as an issue in the field of Natural Science. We want to understand how does an agent learn continually, and we just set the environment we care about, and then observe the outcomes.

So the core issue here is to define the problem we really want to study, instead of making new "benchmarks" and "metrics".

### 4. why Prof. Sutton chooses the <a href="https://www.sciencedirect.com/science/article/pii/S0004370221000862"> "Reward Hypothesis" </a>?

The hypothesis that "intelligence, and its associated abilities, can be understood as subserving the maximisation of reward by an agent acting in its environment", is not an assertion, but a specific story to interpret intelligence. (The hypothesis is just: the "reward story" is sufficient to understand intelligence.)

Correspondingly, we can have different "stories" about intelligence, such as the story of mechanism.

> Take thermostat as an example. We users may only care about its ability to control the temperature in the room, so we try to understand it by saying "this machine has a goal of regulating the temperature". But for a thermostat repairing man, he could interpret the machine by understanding its mechanisms in detail. The machine doesn't "have a goal", but we choose to understand it from this view.

### 5. to find out how humans are different from other intelligence v.s. to find out the things in common.

Prof. Sutton emphasized the latter one, while the previous thoughts and analysis in <a href="insights_and_ideas.html?id=2026-2-7-the-boundary-of-statistics-(1)-classical-probability">the "Boundary of Statistics"</a> did the opposite.

## My speech manuscript.

<div style="
width:100%;
height:750px;
overflow-y:auto;
border:1px solid #d9d9d9;
border-radius:8px;
padding:20px;
box-sizing:border-box;
">


<table style="
width:100%;
table-layout:fixed;
border-collapse:collapse;
">


<tr>


<!-- =======================
     English
======================= -->

<td style="
width:50%;
vertical-align:top;
padding:20px;
border-right:1px solid #dddddd;
font-family:'Times New Roman',serif;
font-size:18px;
line-height:1.8;
">


<h2 style="
font-family:'Times New Roman',serif;
font-size:24px;
">
Summer School 2026 Closing Remarks
</h2>


<p>
Hello everyone, I’m Ding Jiale, a student in Summer School 2026.
</p>

<p>
I’m so privileged to be here to share some of my unforgettable memories and feelings about the wonderful weeks we have just enjoyed together.
</p>



<p>
First of all, I’d like to express my heartfelt gratitude to all the staff members and faculty members, professors and students, who devoted their time and efforts to this activity.
</p>

<p>
It is your wholehearted support and help that contributed to this impressive experience.
</p>



<p>
Among them, I firmly believe that Professor Sutton has left a deep impression on all of us. Professor Sutton, I have truly learned a lot from you.
</p>



<p>
In the past year, under the strong recommendation of my supervisor, I spent several months reading <i>Reinforcement Learning: An Introduction</i>, which left me with hundreds of pages of notes and a systematic understanding of the RL domain.
</p>



<p>
During the summer school, on the other hand, I was lucky enough to have valuable opportunities to discuss with Professor Sutton face-to-face and gain important insights from a higher level.
</p>



<p>
What impressed me even more, however, was Professor Sutton’s modesty and passion for understanding intelligence.
</p>



<p>
I still remember the opening ceremony, when Professor Sutton said:
</p>


<p>
"I’m just an ordinary person, just like you in the classroom."
</p>



<p>
I also remember all those talks and discussions.
</p>


<p>
His eyes were always sparkling with light while I was struggling with my poor English, trying hard to express myself.
</p>



<p>
I’m also grateful for meeting all those wonderful people here, talking with them, working with them, and playing with them.
</p>



<p>
I met researchers and fellows from FDU, SJTU, NUS, ZJU, SII, and many other research institutes around the world.
</p>


<p>
I made friends with people majoring in Robotics, Foundational RL, World Models, Control Theory, and Foundation Models, etc.
</p>



</td>





<!-- =======================
     Chinese
======================= -->

<td style="
width:50%;
vertical-align:top;
padding:20px;
font-family:'Microsoft YaHei','PingFang SC',sans-serif;
font-size:18px;
line-height:1.8;
">


<h2 style="
font-family:'Microsoft YaHei','PingFang SC',sans-serif;
font-size:24px;
">
2026 夏校结业感言
</h2>



<p>
大家好，我是2026年夏校的学生丁嘉乐。非常荣幸能在这里，与大家分享过去几周中那些难忘的经历。
</p>



<p>
首先，我想向所有为这次活动投入时间与精力的人们表达最诚挚的感谢。正是你们全心全意的支持与帮助，才共同创造了这段令人难忘的经历。在所有这些人中，我相信Sutton教授给我们每个人都留下了深刻的印象。感谢您，Sutton教授，我真的从您这里学到了很多。
</p>



<p>
在去年，在导师的大力推荐下，我花费数月时间阅读了《强化学习导论》（<i>Reinforcement Learning: An Introduction</i>）这本书除了为我留下了数百页的笔记，也帮助我建立了对强化学习领域更加系统的理解。而在这次夏校期间，我非常幸运地拥有了与Sutton教授面对面交流的机会，并获得了许多高屋建瓴的启发。
</p>



<p>
然而，更令我动容的是Sutton教授面对知识的谦逊和热情。我仍然记得开幕式上，Sutton教授说："我只是一个普通人，和你们一样。"我记得每一次讨论与Office Hour中，当我因为搜罗词句尝试表达自己的想法时，他的眼睛里闪烁着的光芒（当然大多数时候他会拿着一罐可乐）。
</p>



<p>
我也非常有幸，能够在这里遇见这么多优秀的人，与他们交流、合作，一起度过快乐的时光。
</p>



<p>
我认识了来自复旦大学、上海交通大学、新加坡国立大学、浙江大学、上海人工智能实验室以及世界各地其他研究机构的研究者。我也结识了从事具身智能、强化学习理论、世界模型、控制理论以及基础模型等不同方向的朋友。
</p>



</td>


</tr>




<!-- =======================
     English (continued)
======================= -->

<td style="
width:50%;
vertical-align:top;
padding:20px;
border-right:1px solid #dddddd;
font-family:'Times New Roman',serif;
font-size:18px;
line-height:1.8;
">


<p>
Thanks to the senior seminar, I had the opportunity to sit among and exchange ideas with brilliant researchers from different backgrounds.
</p>


<p>
I also met people with different dreams and beliefs. There are ambitious engineers who want to lead their own startups, work in companies, and help build useful tools and infrastructures to benefit humankind. There are also persistent researchers who devote their lives to understanding intelligence, forging forward on the endless path toward knowledge.
</p>



<p>
For me, as a junior follower who has just received my undergraduate diploma, I deeply admire such dedication and belief. Yet, as I continue exploring the road ahead, I still find myself uncertain about many things. I’m not sure which ideal I will dedicate myself to: building useful tools for people or understanding intelligence. I’m not sure whether intelligence can be understood simply as an RL program, pursuing the maximization of "reward" throughout the game. Nor am I sure whether we can use those concise algorithms and principles to fully comprehend ourselves, our society, and our long history filled with struggles and sacrifices for love, truth, goodness, and beauty.
</p>



<p>
However, I am pretty sure about one thing: In the past weeks, and right now, I have been working and studying with a group of people full of vitality, passion, and firm belief in the future, which I really enjoy.
</p>



<p>
Jack Kerouac wrote in his book, <i>On the Road</i>:
</p>



<p style="
font-style:italic;
font-weight:bold;
padding-left:20px;
border-left:4px solid #888;
">
"The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars..."
</p>



<p>
It is truly my honor to stand here with you, and to be counted among such "mad" ones, who pursue our dreams, hold firmly to our beliefs, and keep moving forward toward the unknown. Having such an experience at the beginning of my scientific journey means a lot to me.
</p>



<p>
Once again, please accept my sincere gratitude to everyone who made all these wonderful things happen.
</p>



<p>
Thank you.
</p>



</td>





<!-- =======================
     Chinese (continued)
======================= -->


<td style="
width:50%;
vertical-align:top;
padding:20px;
font-family:'Microsoft YaHei','PingFang SC',sans-serif;
font-size:18px;
line-height:1.8;
">


<p>
在高级研讨会上，我更是获得了无比宝贵的机会，与世界各地的资深研究者坐在一起，高谈阔论。
</p>



<p>
当然，我也遇到了拥有不同梦想与信念的人。有充满抱负的工程师，他们创办自己的公司，或是进入工业界，创造能够帮助人类的工具与基础设施。也有执着的研究者，他们将自己的生命和精力投入到"理解智能"这一深远的问题中，不断前行。
</p>



<p>
对于刚刚获得本科毕业证、仍处于探索道路上的我来说，我由衷敬佩这种坚定的信念与投入。因为扪心自问，我仍然对许多事情感到迷茫，也仍然在探索和寻找自己未来的道路。我不知道未来的自己会献身于创造实用的工具来发展生产力，还是成为在理解智能的漫漫征途上艰难跋涉的研究者之一。我并不认为智能能够被理解为一个强化学习程序，被解读成在整个过程中不断追求"奖励"的最大化的什么东西。我也并不清楚，我们是否能够仅仅依靠简洁的算法与原则来真正理解我们自己、我们的社会，以及我们那波澜壮阔的人类历史——那段曾有无数人们为了爱，为了真善美而奋斗、痛苦、牺牲的可歌可泣的历史。
</p>



<p>
不过，我无比确信，能够和充满活力、热情以及对未来的坚定信念的大家一起学习与探索，让我十分快乐和满足。
</p>



<p>
杰克·凯鲁亚克在《在路上》中写道：
</p>



<p style="
font-style:italic;
font-weight:bold;
padding-left:20px;
border-left:4px solid #888;
">
"我所喜欢的人，是那些疯狂的人——疯狂地热爱生活，疯狂地想要表达，疯狂地渴望被拯救，渴望拥有一切；他们从不无聊，也从不在平庸中得过且过，而是像灿烂的黄色罗马焰火一样燃烧，像蜘蛛一般在星空中绽放……"
</p>



<p>
能够与你们站在这里，并成为这些"疯狂的人"中的一员，是我莫大的荣幸。对我而言，能够在科研之路的开端结识大家，与大家一起追逐梦想，坚持自己的信念，并不断向未知前进，意义非凡。
</p>



<p>
再次感谢所有促成美好发生的人们！
</p>



<p>
谢谢大家。
</p>



</td>


</tr>


</table>


</div>

<h2 style="text-align: center;">Thanks for your madness!✒️</h2>

---

1st version on 2026-7-26