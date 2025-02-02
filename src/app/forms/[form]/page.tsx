import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { findIndex } from 'lodash';
import Page from '../../../components/page';
import Splash from '../../../components/splash';
import { getEventYear, readConfig } from '../../../lib/data';
import { parseFormData } from '../../../lib/form-parse';

import FormClient from './form-client.component';
// const Form = dynamic(() => import('../../../components/forms/form'), {
//   ssr: false,
//   loading: () => <Window half />
// });
// const Form = import('../../../components/forms/form')

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
const GenericForm = async (
  props: {
    params: Promise<{ form: string }>;
  }
) => {
  const params = await props.params;

  const {
    form: formId
  } = params;

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
        <FormClient formData={formData} />
      </Splash>
    </Page>
  );
};

export default GenericForm;
