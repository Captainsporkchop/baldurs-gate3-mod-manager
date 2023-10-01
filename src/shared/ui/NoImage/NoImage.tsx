import { memo } from "react";

import { ReactComponent as Cross } from "shared/assets/icons/cross-circle.svg";
import { classNames } from "shared/lib/helpers";

import css from "./NoImage.module.scss";
import { NoImageProps } from "./NoImage.type";

const NoImage = ({ className }: NoImageProps) => (
  <div className={classNames(css.NoImage, className)} data-testid="NoImage">
    <Cross className={css.cross} />
  </div>
);

export { NoImage };

export default memo(NoImage);
