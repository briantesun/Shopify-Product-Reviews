import { Card, Layout } from "@shopify/polaris";

function ReviewModule(props) {
  return (
    <Layout>
      <Layout.Section>
        <Card title={props.title}>
          <Card.Section title="Rating">
            <p>{props.rating}</p>
          </Card.Section>

          <Card.Section title="Review">
            <p>{props.review}</p>
          </Card.Section>
          <Card.Section>
            <Card.Subsection> {props.context} </Card.Subsection>
          </Card.Section>
        </Card>
      </Layout.Section>
    </Layout>
  );
}

export default ReviewModule;
