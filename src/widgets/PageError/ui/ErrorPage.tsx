import { ROUTES } from "@src/shared/constants";
import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import type { IErrorBoundary } from "./interface";

export const ErrorPage = (props: IErrorBoundary) => {
  const { status, errorId, title } = props;

  const { t } = useTranslation();

  const history = useNavigate();

  return (
    <Result
      status={status}
      title={t(title ? title : errorId)}
      subTitle={t(errorId ? errorId : "default_error_message")}
      extra={
        <Button
          onClick={() => {
            history(ROUTES.HOME);
          }}
          type="primary"
        >
          {t("back_home_message")}
        </Button>
      }
    />
  );
};
