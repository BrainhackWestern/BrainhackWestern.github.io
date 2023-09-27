import 'server-only';
import ReactMarkdown, { Options } from 'react-markdown'

import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';

const Markdown = (props: Options) => {
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
