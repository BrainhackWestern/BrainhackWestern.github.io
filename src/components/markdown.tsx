import 'server-only';
import {
  ReactMarkdown,
  ReactMarkdownOptions
} from 'react-markdown/lib/react-markdown';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

const Markdown = (props: ReactMarkdownOptions) => {
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkGfm,
        [remarkEmoji, { accessible: true, emoticon: true }]
      ]}
      {...props}
    >
      {props.children}
    </ReactMarkdown>
  );
};

export default Markdown;
