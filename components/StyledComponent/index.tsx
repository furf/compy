// NPM dependencies
import cx from 'classnames';
import { FunctionComponent } from 'react';

// Project dependencies
import BaseComponent from '../BaseComponent';
import BaseComponentStyles from '../BaseComponent/BaseComponent.module.css';

// Module dependencies
import styles from './StyledComponent.module.css';

// Interfaces & Types
interface StyledComponentProps {
  className?: string;
}
type StyledComponent = FunctionComponent<StyledComponentProps>;

/**
 * StyledComponent
 */
const StyledComponent: StyledComponent = (props) => {
  const { className, ...rest } = props;
  const cn =
    className || cx(BaseComponentStyles.BaseComponent, styles.StyledComponent);

  return (
    <BaseComponent className={cn} {...rest}>
      <span>Ciao, mondo!</span>
    </BaseComponent>
  );
};

export default StyledComponent;
