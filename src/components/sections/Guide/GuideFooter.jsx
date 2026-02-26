import React from "react";
import { useTranslation } from "react-i18next";

const GuideFooter = () => {
  const { t } = useTranslation("guide");
  return (
    <footer className="pt-8 mb-12 border-t border-(--color-divider)/40 text-center text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) flex flex-col gap-2">
      <p>{t("footer.text")}</p>
      <p dangerouslySetInnerHTML={{ __html: t("footer.copyright") }} />
    </footer>
  );
};

export default GuideFooter;
