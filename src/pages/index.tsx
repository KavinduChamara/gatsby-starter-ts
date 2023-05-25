import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css';
import Header from '@/components/Header';
import LayerOne from '@/components/LayerOne';
import LayerTwo from '@/components/LayerTwo';
import LayerThree from '@/components/LayerThree';

export default function Home() {
  return (
    <main>
      <Header></Header>
      <LayerOne></LayerOne>
      <LayerTwo></LayerTwo>
      <LayerThree></LayerThree>
    </main>
  );
}
