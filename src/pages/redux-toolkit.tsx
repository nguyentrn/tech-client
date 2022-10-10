import App from '../layouts/App';
import Counter from '../redux/counter/Counter';
import Card from '../styles/components/Card';

const Index = () => (
  <App>
    <Card m={'auto'}>
      <Counter />
    </Card>
  </App>
);

export default Index;
