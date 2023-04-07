import { Stack } from "@shopify/polaris";

import { ReviewModule } from "./ReviewModule";
import SortByButton from "./SortByButton";

function TopSection() {
  return (
    <Stack alignment="center">
      <Stack.Item fill>
        <p>Showing of 5 of 5 reviews</p>
      </Stack.Item>
      <Stack.Item>
        <SortByButton />
      </Stack.Item>
    </Stack>
  );
}

export default TopSection;
