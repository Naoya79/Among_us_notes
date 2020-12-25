import React from "react";
import { useTranslation } from "react-i18next";

export default function TheSkeld(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 1366 768" {...props}>
      <title>{"TheSkeld"}</title>
      <image href="assets/images/TheSkeld.png" />
    </svg>
  );
}
