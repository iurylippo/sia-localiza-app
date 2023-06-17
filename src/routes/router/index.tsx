import { PrivateRoute } from '../private';

interface RouterProps {
  isPrivate?: boolean;
  page: React.ComponentType;
}

export function Router({
  isPrivate = true,
  page: Page,
  ...props
}: RouterProps) {
  return isPrivate ? (
    <PrivateRoute>
      <Page {...props} />
    </PrivateRoute>
  ) : (
    <Page {...props} />
  );
}
