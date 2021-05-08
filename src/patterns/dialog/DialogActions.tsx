export interface DialogActionsProps {}
export function DialogActions(
  props: React.PropsWithChildren<DialogActionsProps>
): JSX.Element | null {
  return <>{props.children}</>;
}
