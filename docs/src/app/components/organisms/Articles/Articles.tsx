import React from "react";
import { ArticleHeading } from "../../molecules/ArticleHeading";
import { ArticleCard } from "../../molecules/ArticleCard";
import ComponentProps from "@/core/interfaces/component-props";
import { twMerge } from "tailwind-merge";
import Footer from "../Footer/Footer";

const articles = [
  {
    title: "How Data Science Roles vary across the Tech Companies",
    desc: "More than a decade ago, an article was published in Harvard Business Review (HBR) titled as “Data Scientist: The Sexiest Job of the 21st Century” by DJ Patil and Thomas Davenport. At the time, the title Data Scientist was defined as “a high-ranking professional with the training and curiosity to make discoveries in the world of big data...",
    image: "/images/articles/picc1.jpg",
    link: "https://medium.com/@nirmal.budhathoki/how-data-science-roles-vary-across-the-tech-companies-cef1893a56a5",
  },
  {
    title: "Some of the Best Practices to follow in a Data Science Project",
    desc: "In this article, I will talk about some of the best and recommended practices to follow when it comes to a data science project. Before I present the best practices, it is importantto understand the general workflow of a data science project. There are many variations to it, but I always prefer to use the traditional (yet the most effective)...",
    image: "/images/articles/picc2.png",
    link: "https://pub.aimind.so/some-of-the-best-practices-to-follow-in-a-data-science-project-6c6923f6ad4a",
  },

  {
    title: "Data Bias vs. Model Bias in Machine Learning",
    desc: "Data Bias and Model Bias are two different things. Both of them can affect the performance of machine learning (ML) models. Before we jump into comparing these two biases, first let's try to understand- what is bias? Data Bias occurs when the data used for training the model is not the representative samples of the actual population...",
    image: "/images/articles/picc3.png",
    link: "https://pub.aimind.so/data-bias-vs-model-bias-in-machine-learning-75d62400a89b",
  },
  {
    title: "My 30-days journey towards learning PySpark",
    desc: "I am starting a new learning series on #30daysofPySparkLearning. This will be focused on learning PySpark. I also needed a refresher for myself on this topic, therefore I am doing a series will help me organize the content This blog is to organize all my linkedin posts into one place. I will keep appending on it, as we move along the journey....",
    image: "/images/articles/picc4.png",
    link: "https://medium.com/@nirmal.budhathoki/my-30-days-journey-towards-learning-pyspark-b346ad06e10a",
  },
  {
    title: "30 Days of Data Science Career Tips- Part 2",
    desc: "Let’s talk about Model Explainability and Interpretability, one of the areas that is always overlooked during the learning phase of DS. While the two concepts come together, there is some difference. Explainability deals with how well the model parameters can justify the result, while Interpretability deals with how accurately a model can...",
    image: "/images/articles/picc5.jpg",
    link: "https://medium.com/@nirmal.budhathoki/30-days-of-data-science-career-tips-part-2-418199d33536",
  },
  {
    title: "30 Days of Data Science Career Tips- Part 1",
    desc: "Recently, I did a 30 day series to talk about interview questions and answers asked in top tech companies. For the interview QnAs, I was maintaining the blog to have all questions in one article: 30 Days of DSML Interview Questions Back in 2021, I had similar series but it was focused on data science career tips. I had many folks responding...",
    image: "/images/articles/picc6.jpg",
    link: "https://medium.com/@nirmal.budhathoki/30-days-of-data-science-career-tips-part-1-a2ab998fbada",
  },

  {
    title: "30 days of Data Science and Machine Learning Interview Questions",
    desc: "I have started this article to keep track of all my linked-in posts on 30 days of data science and machine learning (DSML) interview questions. My goal is to cover the real interview questions asked by top companies like #google, #amazon, #meta and #microsoft. I have also shared my posts on how these companies define their data science roles...",
    image: "/images/articles/picc7.png",
    link: "https://medium.com/@nirmal.budhathoki/30-days-of-dsml-interview-questions-5b43a51e38c8",
  },
  {
    title: "Data Science for Cyber Security- Opportunities vs. Challenges",
    desc: "Lets cruise…The field of cybersecurity — both offensive and defensive security has come along a long way since the first computer virus called Creeper, created by Bob Thomas in 1971, that successfully disguised itself to move from one host to another within the intranet and leaving its trail on the hosts. The program was a research project, and...",
    image: "/images/articles/picc8.jpg",
    link: "https://medium.com/@nirmal.budhathoki/data-science-for-cyber-security-opportunities-vs-challenges-d516a8a01200",
  },
];

interface Props extends ComponentProps {}

export default function Articles({ className}: Props) {
  return (  
    <section className={twMerge(className, "")}>
      <hr />
      <div className="flex flex-col gap-4 mt-4 mb-6">
        {articles.map((article, i) => (
          <a href={article.link} key={i}>
            <ArticleCard
              title={article.title}
              description={article.desc}
              image={article.image}
              imageAlt={article.title}
            />
          </a>
        ))}
      </div>
      <Footer />
    </section>
  );
}
