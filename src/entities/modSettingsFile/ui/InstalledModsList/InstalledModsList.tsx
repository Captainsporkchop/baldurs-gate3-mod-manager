import css from "./InstalledModsList.module.scss";
import { InstalledModsListProps } from "./InstalledModsList.type";

const InstalledModsList = ({ className }: InstalledModsListProps) => {
  const classNames = [css.InstalledModsList, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} data-testid="InstalledModsList">
      InstalledModsList works!!
    </div>
  );
};

export default InstalledModsList;
