import React from 'react';
import './Loader.scss';
import { Oval } from 'react-loader-spinner';

type Props = {
  size?: number,
}

export const Loader: React.FC<Props> = ({ size }) => (
  <div className="loader__container">
    <Oval
      height={50 || size}
      width={50 || size}
      color="#F86800"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#cfd2d5"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);
