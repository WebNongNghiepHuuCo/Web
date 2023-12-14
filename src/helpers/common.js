import { CURRENT_YEAR } from "~/common/constants";

export const disabledYear = (current) => {
    return  current.year() > CURRENT_YEAR || current.year() < 2022
}

export const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}