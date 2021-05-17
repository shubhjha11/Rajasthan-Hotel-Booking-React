const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE='liwz2o0a1hd0',
  accessToken: process.env.REACT_APP_ACCESS_TOKEN='lrNDpmfD7K6nQZavt1HiIsxSFZpsbfcn_eQ2SinH_K0'
});
