import { isString } from 'lodash';
import React, { Fragment } from 'react';
import wordJoin from 'word-join';

type AllowedHeadings = 'Organizer' | 'Panelist';

interface NameListerProps {
  heading: AllowedHeadings;
  headingClassName?: string;
  names?: string | string[] | Person | Person[];
  bulletedList?: boolean;
}

const pluralize = (count: number, text: AllowedHeadings) => {
  return count === 1
    ? text
    : { Organizer: 'Organizers', Panelist: 'Panelists' }[text];
};

const formatHeader = (header: AllowedHeadings, count: number) =>
  `${pluralize(count, header)}: `;

const normalizeName = (name: string | Person): Person => {
  if (isString(name)) {
    return { name: name };
  }
  return name;
};

const normalizeNames = (
  names: string | string[] | Person | Person[]
): Person[] => {
  if (Array.isArray(names)) {
    return names.map((name) => {
      return normalizeName(name);
    });
  }
  return [normalizeName(names)];
};

const NameLister = ({
  heading,
  headingClassName,
  names,
  bulletedList
}: NameListerProps) => {
  if (!names) {
    return null;
  }
  const namesNormed = normalizeNames(names);
  const headerFormatted = formatHeader(heading, namesNormed.length);
  if (!bulletedList) {
    return (
      <div>
        <span className={headingClassName}>{headerFormatted}</span>
        <span>
          {wordJoin(
            namesNormed.map((s) => s.name),
            {
              oxford: true
            }
          )}
        </span>
      </div>
    );
  }
  return (
    <div>
      <span className={headingClassName}>{headerFormatted}</span>
      <br />
      {namesNormed.map((person) => (
        <div key={person.name} className='d-flex'>
          <span>&nbsp;&nbsp;-&nbsp;</span>
          <div>
            {person.name}
            {person.github ? (
              <>
                {' '}
                (
                <a href={`https://github.com/${person.github}`}>
                  @{person.github}
                </a>
                )
              </>
            ) : null}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default NameLister;
