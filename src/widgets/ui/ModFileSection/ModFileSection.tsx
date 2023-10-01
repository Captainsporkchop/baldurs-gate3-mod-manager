import { Heading } from "shared/ui";

import css from "./ModFileSection.module.scss";
import { ModFileSectionProps } from "./ModFileSection.type";

const ModFileSection = ({ className }: ModFileSectionProps) => {
  const classNames = [css.ModFileSection, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} data-testid="ModFileSection">
      <Heading>Modification Files</Heading>
    </div>
  );
};

export { ModFileSection };
