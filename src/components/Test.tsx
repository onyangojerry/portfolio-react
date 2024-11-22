import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Test = ({ children }: Props) => {
  return <>{children}</>;
};

export default Test;
