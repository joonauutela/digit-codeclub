export const getContextPath = () => {
  if (!process.env.CONTEXT_PATH) {
    throw new Error("Context path required");
  }
  return process.env.CONTEXT_PATH;
};
