// NPM dependencies
import { FunctionComponent } from 'react';

// Module dependencies
import styles from './BaseComponent.module.css';

// Interfaces & Types
interface BaseComponentProps {
  children?: JSX.Element;
  className?: string;
}
type BaseComponent = FunctionComponent<BaseComponentProps>;

/**
 * BaseComponent
 */
const BaseComponent: BaseComponent = (props) => {
  const { children, className, ...rest } = props;
  const cn = className || styles.BaseComponent;

  return (
    <div className={cn} {...rest}>
      {children || <span>Hello, world.</span>}
    </div>
  );
};

export default BaseComponent;
