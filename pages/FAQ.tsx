import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { NavBar } from "../components/navbar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { readConfig } from "../utils/data";
import Footer, { getFooterProps } from "../components/footer";

export const getStaticProps = async () => {
  const config = await readConfig();
  return {
    props: {
      config,
    },
  };
};

const FaqPage = ({
  config,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="app">
      <Head>
        <title>FAQ - Brainhack Western {config.event.year}</title>
        <meta
          name="description"
          content="Frequently asked Questions for Brainhack Western"
        />
      </Head>
      <NavBar displaySections={config.displaySections} />
      <article className="container-lg">
        <h1>FAQ</h1>
        {config.faq?.map((faq) => {
          return (
            <section key={faq.question}>
              <h3>{faq.question}</h3>
              <ReactMarkdown className="console" remarkPlugins={[remarkGfm]}>
                {faq.answer}
              </ReactMarkdown>
            </section>
          );
        })}
      </article>
      <Footer {...getFooterProps(config)}/>
    </div>

  );
};

export default FaqPage;
