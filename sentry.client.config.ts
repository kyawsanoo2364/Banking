import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://11da01a9893d8a4bd3f721bb4f6973d7@o4508556509184000.ingest.us.sentry.io/4508668350693376",

  // Session Replay
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
