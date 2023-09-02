import { useSearchParams } from 'next/navigation';
import CognitoForm from '@tylermenezes/cognitoforms-react';
import { merge, set } from 'lodash';
import React, { ReactNode } from 'react';

interface CognitoPrefilledProps {
  loading?: ReactNode;
  formId: string;
  accountId: string;
  prefill?: Record<string, any>;
}
const CognitoPrefilled = ({
  loading,
  formId,
  accountId,
  prefill: prefill_
}: CognitoPrefilledProps) => {
  const router = useSearchParams();
  const params = Object.fromEntries(router?.entries() || []);
  const prefillMappings = prefill_ ?? {};
  const prefill = merge(
    {},
    ...Object.keys(params).map((param) => {
      // if (! (param in params)) {
      //   return {};
      // }
      if (!prefillMappings[param]) {
        return {};
      }
      return set({}, prefillMappings[param], params[param]);
    })
  );

  return (
    <CognitoForm
      loading={loading}
      formId={formId}
      accountId={accountId}
      prefill={prefill}
    />
  );
};

export default CognitoPrefilled;
