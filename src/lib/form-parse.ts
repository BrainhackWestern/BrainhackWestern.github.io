import { EmbeddedForm } from '../interfaces/form';

export declare type ParsedFormData = Awaited<ReturnType<typeof parseFormData>>

export const parseFormData = async (forms: { [key: string]: EmbeddedForm }) => {
  const parse = (await import('hypertag')).default;
  return Object.keys(forms).map((form) => {
    const data = forms[form];
    const tags = parse(data.embedTag || '', 'script');
    if (!tags.length) {
      throw Error(
        `embedTag in the form '${form}' could not be parsed. Please ensure ` +
          'the tag is copied exactly from the form creation website. (got: ' +
          `'${data.embedTag}')`
      );
    }
    const tag = tags[0];
    if (data.type !== 'cognito') {
      throw Error(
        `Unrecognized form type '${data.type}' in the form '${form}'. ` +
          "Currently only 'cognito' is supported"
      );
    }
    ['src', 'data-key', 'data-form'].forEach((attr) => {
      if (!(attr in tag)) {
        throw Error(
          `embedTag in the form '${form}' is missing the required attribute ` +
            `'${attr}' (has '${Object.keys(tag)}')`
        );
      }
    });

    return {
      src: tag.src,
      key: tag['data-key'],
      dataForm: tag['data-form'],
      id: form,
      ...forms[form]
    };
  });
};