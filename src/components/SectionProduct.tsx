import BasicCard from './BasicCard';

export default function SectionProduct(props: any) {
  return (
    <section
      className={`bg-black min-w-screen flex justify-center items-center mt-${props.mt}`}
    >
      <div>
        <BasicCard />
        <img
          className="mt-10 mb-24 w-56 mx-10 md:w-72"
          src="/interruptor.png"
          alt="interruptor inteligente"
        />
      </div>
    </section>
  );
}
