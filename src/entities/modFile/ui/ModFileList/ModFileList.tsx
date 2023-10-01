import css from "./ModFileList.module.scss";
import { ModFileListProps } from "./ModFileList.type";

const ModFileList = ({ className }: ModFileListProps) => {
  const classNames = [css.ModFileList, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} data-testid="ModFileList">
      ModFileList works!!
    </div>
  );
};

export default ModFileList;
