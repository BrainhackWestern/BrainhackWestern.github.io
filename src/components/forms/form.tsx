'use client';

import React, { Suspense, useContext } from 'react';
import { ValuesType } from 'utility-types';
import { ParsedFormData } from '../../lib/form-parse';
import { screenSizes, ScreenSizeContext } from '../../services/screen-size';
import style from '../../styles/pages/[form].css';
import { Loading } from '../loading';
import CognitoPrefilled from './cognito-prefilled';

const Form = ({ formData }: { formData: ValuesType<ParsedFormData> }) => {
  const screenSize = useContext(ScreenSizeContext);

  console.log(screenSize)
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
