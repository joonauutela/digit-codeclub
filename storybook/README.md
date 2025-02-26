# Design system code task

## Description

Create an alert component in storybook which other applications can use.

Alert should be used

```
<Alert
  severity="error"
  title="Something went wrong"
  description="Try again later"
/>
```

Interface for alert properties:

```
export interface AlertProps {
  type: "error" | "warning" | "success";
  title: string;
  description: string;
}
```

## Development

Initialize storybook

` npm storybook create`

Cli asks to choose a project template

` Choose a project template -> React/Vite (TS)`

Dependencies are automatically installed and server is started at https://localhost:6006
