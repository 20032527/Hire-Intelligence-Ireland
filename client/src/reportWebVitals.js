/* Collects performance metrics if a callback is provided */
/* Ref: https://create-react-app.dev/docs/measuring-performance/ */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {

    /* Loads web-vitals only when needed */
    /* Ref: https://web.dev/vitals/ */

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
