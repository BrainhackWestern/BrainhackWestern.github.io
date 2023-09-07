import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { findIndex } from 'lodash';
import Page from '../../../components/page';
import Splash from '../../../components/splash';
import Window from '../../../components/window';
import { getEventYear, readConfig } from '../../../lib/data';
import { parseFormData } from '../../../lib/form-parse';

const Form = dynamic(() => import('../../../components/forms/form'), {
  ssr: false,
  loading: () => <Window half />
});

export const generateStaticParams = async () => {
  const config = await readConfig();
  return (Object.keys(config.forms || {}) || [])
    .filter((name) => {
      return !config.forms?.[name].hidden;
    })
    .map((name) => {
      return { form: name };
    });
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `Brainhack Western ${await getEventYear()}`,
    description: 'Forms for Western Brainhack'
  };
};
const GenericForm = async ({
  params: { form: formId }
}: {
  params: { form: string };
}) => {
  const config = await readConfig();
  const forms = await parseFormData(config.forms ?? {});
  const formIndex = findIndex(forms, (form) => formId === form.id);
  if (formIndex < 0) {
    notFound();
  }
  const formData = forms[formIndex];

  if (!formData) {
    notFound();
  }

  return (
    <Page config={config}>
      <Splash>
        <Form formData={formData} />
      </Splash>
    </Page>
  );
};

export default GenericForm;
