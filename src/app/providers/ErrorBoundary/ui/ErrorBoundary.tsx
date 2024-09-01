import { ErrorPage } from "@src/widgets/PageError";
import type { ResultStatusType } from "antd/es/result";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error: ResultStatusType | unknown = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error) {
      <ErrorPage
        status={error.status as ResultStatusType}
        errorId="default_error_message"
      />;
    }
  }

  return (
    <ErrorPage
      errorId="default_error_message"
      status={"warning"}
      title="error_text"
    />
  );
}

export default ErrorBoundary;
