import React from 'react';
import Select from 'react-select';
import { optionCSS } from 'react-select/dist/declarations/src/components/Option';
import { colors } from '../styles/variables.css';

const ProjectYearSelect = ({
  years,
  changeYear
}: {
  years: string[];
  changeYear: (year: string) => void;
}) => {
  const pageOptions = years
    .sort()
    .reverse()
    .map((year) => ({
      value: year,
      label: year
    }));
  return (
    <Select
      styles={{
        container: (base, state) => ({
          ...base,
          maxWidth: 250,
          marginBottom: '1em'
        }),
        control: (base, state) => ({
          ...base,
          borderColor: state.isDisabled
            ? colors.background[700]
            : base.borderColor
        }),
        singleValue: (base, state) => ({
          ...base,
          color: colors.fontLight
        }),
        indicatorSeparator: (base, state) => ({
          ...base,
          backgroundColor: '#2f2f2f',
          display: state.isDisabled ? 'none' : base.display
        }),
        dropdownIndicator: (base, state) => ({
          ...base,
          color: '#2f2f2f',
          display: state.isDisabled ? 'none' : base.display
        }),
        option: (base, state) => ({
          ...base,
          color: colors.fontLight
        })
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          neutral80: 'white', //text
          neutral0: '#0f0f0f', // background
          neutral5: colors.background[900],
          netural10: colors.background[800],
          neutral20: '#0b0b0b', // Border
          neutral90: 'pink',
          neutral60: colors.highlight,
          neutral50: 'purple',
          neutral40: colors.highlight,
          neutral30: colors.highlight,
          neutral100: 'white',
          primary: colors.primaryDark,
          primary25: colors.primaryDarker
        }
      })}
      options={pageOptions}
      defaultValue={pageOptions[0]}
      isSearchable={false}
      onChange={(args) => (args ? changeYear(args.value) : null)}
      isDisabled={pageOptions.length === 1}
    />
  );
};

export default ProjectYearSelect;
