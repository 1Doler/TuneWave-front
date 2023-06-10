import { withLayout } from "../layout/layout";
import { ProfileComponent } from "../page-components";

function User() {
  return (
    <>
      <ProfileComponent />
    </>
  );
}

export default withLayout(User);
