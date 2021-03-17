import React from 'react';

export default (loadingMessage = '---') => WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return loadingMessage;
    }
    return (
      <WrappedComponent {...props} />
    );
  };
  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
};
