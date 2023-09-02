import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Article from '../../components/article';
import Page from '../../components/page';
import {
  getEventYear,
  readConfig
} from '../../lib/data';


export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Brainhack Western ${await getEventYear()}`,
    description: 'Frequently asked Questions for Brainhack Western'
  };
};

const FaqPage = async () => {
  const config = await readConfig();
  return (
    <Page config={config} registrationButton>
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
