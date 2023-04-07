import { Card } from "@shopify/polaris";

import ReviewModule from "./ReviewModule";
import TopSection from "./TopSection";

function ReviewTable() {
  return (
    <Card>
      <Card.Section>
        <TopSection />
      </Card.Section>

      <Card.Section>
        <ReviewModule />
      </Card.Section>

      <Card.Section>
        <ReviewModule />
      </Card.Section>
    </Card>
  );
}

export default ReviewTable;
