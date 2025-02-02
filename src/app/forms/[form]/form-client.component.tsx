"use client"

import dynamic from 'next/dynamic';
import Window from '../../../components/window';
import { parseFormData } from '../../../lib/form-parse';

type FormData = Awaited<ReturnType<typeof parseFormData>>[number]
const FormClient = ({formData}: {formData: FormData}) => {
  const Form = dynamic(() => import('../../../components/forms/form'), {
    ssr: false,
    loading: () => <Window half />
  });

  return <Form formData={formData} />
}

export default FormClient;