'use client';

import React, { Suspense, useContext } from 'react';
import { ValuesType } from 'utility-types';
import { ParsedFormData } from '../../lib/form-parse';
import { ScreenSizeContext, screenSizes } from '../../services/screen-size';
import { Loading } from '../loading';
import CognitoPrefilled from './cognito-prefilled';
import style from './form.css';

const Form = ({ formData }: { formData: ValuesType<ParsedFormData> }) => {
  const screenSize = useContext(ScreenSizeContext);

  const smallScreen = screenSize < screenSizes['md'];

  return (
    <>
      {smallScreen ? null : <div className="spacer"></div>}
      <div className="container-sm back-card">
        <h1>{formData.title}</h1>
        <div className="container console overlap-up" id="registration-form">
          <Suspense>
            <CognitoPrefilled
              loading={
                <div className="spacer">
                  <Loading className={style.loading} prefix="Loading " />
                </div>
              }
              formId={formData.dataForm}
              accountId={formData.key}
              prefill={formData.prefillMappings}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Form;
