import type { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Article from '../components/article';
import Page from '../components/page';
import { inferRegistrationStatus, readConfig } from '../lib/data';

export const getStaticProps = async () => {
  const config = await inferRegistrationStatus(await readConfig());
  return {
    props: {
      config
    }
  };
};

const FaqPage = ({
  config
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page
      config={config}
      title={`FAQ - Brainhack Western ${config.event.year}`}
      description="Frequently asked Questions for Brainhack Western"
      registrationButton
    >
      <Article>
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
      </Article>
    </Page>
  );
};

export default FaqPage;
