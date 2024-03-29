import { EmptyState, Layout, Page, ResourcePicker } from '@shopify/polaris';
import store from 'store-js';
import ResourceList from '../components/ResourceList';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false };

  render() {
    const emptyState = !store.get('ids');

    return (
      <Page
        action={{
          content: 'Mint Assets',
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          allowMultiple={false}
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (

        <Layout>
          <EmptyState
            heading="Create your digital asset inventory"
            action={{
              content: 'Select products to mint assets for',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p></p>
          </EmptyState>
        </Layout>
        ) : (
        <ResourceList />
        ) }
      </Page>
    )
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log('product ids: ', idsFromResources)
    console.log(resources)
    store.set('ids', idsFromResources);
  };
}

export default Index;