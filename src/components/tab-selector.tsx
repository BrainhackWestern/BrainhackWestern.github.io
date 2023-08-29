import { toString } from 'lodash';
import { ChangeEventHandler, Dispatch, SetStateAction, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from '../styles/vanilla/radio-selector.css';
import { joinStyles } from '../utils/utils';

interface TabParams<T> {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  choices: T[];
}
export const TabSelector = function <T>({
  choices,
  state,
  setState
}: TabParams<T>) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState(choices[parseInt(e.target.value)]);
  };
  const Choice = ({
    value,
    children
  }: {
    value: number;
    children: React.ReactChild;
  }) => {
    const selected = state === choices[value];
    const nodeRef = useRef(null);
    const btnClass = 'button';
    return (
      <label className={style.choice}>
        <input
          type="radio"
          value={value}
          onChange={handleChange}
          checked={selected}
          style={{ display: 'none' }}
        />
        <CSSTransition
          nodeRef={nodeRef}
          in={true}
          mountOnEnter
          appear
          classNames={btnClass}
          timeout={200}
        >
          <div
            ref={nodeRef}
            key={value}
            className={joinStyles([btnClass, selected ? 'selected' : null])}
          >
            <div className="inner">
              <span>{children}</span>
            </div>
          </div>
        </CSSTransition>
      </label>
    );
  };
  return (
    <div className={style.selector}>
      {choices.map((choice, i) => (
        <Choice key={i} value={i}>
          {toString(choice)}
        </Choice>
      ))}
    </div>
  );
};
