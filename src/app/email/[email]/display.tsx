'use client'

import { ReactElement, useEffect, useRef } from "react";
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
// @ts-ignore
import mjml2html from "mjml-browser";

const EmailDisplay = ({ content }: { content: ReactElement }) => {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { html, errors } = mjml2html(renderToMjml(content))
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
    }
  });
  return <div ref={containerRef}></div>;
}

export default EmailDisplay