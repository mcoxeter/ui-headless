import { InlineLego } from '../../legos/inline/InlineLego';
export interface DialogBodyProps {}

export function DialogBody(
  props: React.PropsWithChildren<DialogBodyProps>
): JSX.Element | null {
  return <InlineLego minHeight={'150px'}>{props.children}</InlineLego>;
}
