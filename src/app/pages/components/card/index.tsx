import Image from "next/image";

export default function Card() {
  return (
    <div>
      <Image src={""} width={20} height={20} alt={""} />
      <p>Pikachu</p>
      <span>{`XP:`}</span>
    </div>
  );
}
