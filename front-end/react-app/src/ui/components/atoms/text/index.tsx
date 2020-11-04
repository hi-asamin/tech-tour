import React from 'react';

export interface TextProps {
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ children }) => (
  <p className='a-text'>{children}</p>
);