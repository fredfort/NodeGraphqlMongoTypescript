import { Config } from 'apollo-server-core';

export const apolloConfig: Config = {
  playground: {
    settings: {
      'general.betaUpdates': false,
      'editor.theme': 'light',
      'editor.reuseHeaders': true,
      'tracing.hideTracingResponse': true,
      'editor.fontSize': 14,
      'editor.fontFamily': 'Arial',
      'request.credentials': '',
    },
  },
};
