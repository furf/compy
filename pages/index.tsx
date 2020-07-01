// NPM dependencies
import Head from 'next/head';

// Project dependencies
import BaseComponent from '../components/BaseComponent';
import StyledComponent from '../components/StyledComponent';

export default function Home() {
  return (
    <div>
      <BaseComponent />
      <StyledComponent />
    </div>
  );
}
