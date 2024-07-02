import { ReactElement } from "react";

type WelcomeProps = {
  userName: string
  welcomText : string
};

export default function Welcome(props: WelcomeProps): ReactElement {
  return (
    <>
      <div className="name">{props.userName}</div>
      <div className="welcomText" style={{color: 'red'}}>{props.welcomText}</div>
    </>
  );
}