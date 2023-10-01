import { ReactComponent as Bars } from "shared/assets/spinners/bars.svg";
import { ReactComponent as Oval } from "shared/assets/spinners/oval.svg";
import { ReactComponent as Puff } from "shared/assets/spinners/puff.svg";
import { ReactComponent as Rings } from "shared/assets/spinners/rings.svg";
import { ReactComponent as Ripple } from "shared/assets/spinners/ripple-1s-200px.svg";
import { ReactComponent as TailSpin } from "shared/assets/spinners/tail-spin.svg";
import { classNames } from "shared/lib/helpers";

import css from "./Spinner.module.scss";
import { SpinnerProps } from "./Spinner.type";

const Spinner = ({ className, type = "oval" }: SpinnerProps) => {
  const props = { className: classNames(css.Spinner, className) };

  switch (type) {
    case "bars":
      return <Bars {...props} />;
    case "oval":
      return <Oval {...props} />;
    case "puff":
      return <Puff {...props} />;
    case "rings":
      return <Rings {...props} />;
    case "ripple":
      return <Ripple {...props} />;
    case "tail-spin":
      return <TailSpin {...props} />;
    default:
      return <Oval {...props} />;
  }
};

export default Spinner;
