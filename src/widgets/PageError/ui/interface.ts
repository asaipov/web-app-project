import type { ResultStatusType } from "antd/es/result";

export interface IErrorBoundary {
  status?: ResultStatusType;
  errorId?: string;
  title?: string;
}
