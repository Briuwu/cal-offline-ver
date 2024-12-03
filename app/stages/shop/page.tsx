import Image from "next/image";
import { BuyButton } from "./components/buy-button";
import characters from "@/lib/constants/characters.json";
import users from "@/lib/constants/users.json";

async function ShopPage() {
  const profile = users[0];
  // const userId = handleAuth();

  // if (!userId) {
  //   redirect("/");
  // }

  // let characters = await getAllCharacters();
  // let profile = await getProfile();
  // let ownedCharacters = await getOwnedCharacters();

  // if (!characters || !profile || !ownedCharacters) {
  //   return <div>Loading...</div>;
  // }

  const details = [
    {
      price: 0,
      description: "A beginner male homeless character.",
      isPurchaseable: true,
    },
    {
      price: 0,
      description: "A beginner female homeless character.",
      isPurchaseable: true,
    },
    {
      price: 500,
      description: "A fighter that can fight for you.",
      isPurchaseable: true,
    },
    {
      price: "clear stage 5 to get for free",
      description: "A samurai that can fight for you.",
      isPurchaseable: false,
    },
    {
      price: "clear stage 3 to get for free",
      description: "A shinobi that can fight for you.",
      isPurchaseable: false,
    },
    {
      price: 1000,
      description: "A lightning mage that can cast spells.",
      isPurchaseable: true,
    },
    {
      price: 700,
      description: "A fire mage that can cast spells.",
      isPurchaseable: true,
    },
  ];

  const charactersWithDetails = characters.map((character, index) => {
    return {
      ...character,
      details: details[index],
      selected: profile.selectedCharacter === character.id,
      // owned: ownedCharacters.some(
      //   (ownedCharacter) => ownedCharacter.characterId === character.id,
      // ),
    };
  });

  console.log(characters);

  return (
    <main>
      <div className="mb-5">
        <h1 className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
          Shop
        </h1>
        <p className="opacity-70">
          Buy and unlock all different kind of characters you can use in the
          game.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        {charactersWithDetails.map((character) => (
          <div
            key={character.id}
            className="flex flex-col gap-1 border p-2 shadow"
          >
            <div className="h-full self-center justify-self-end">
              <Image
                src={character.characterSrc}
                alt={character.characterName}
                width={180}
                height={304}
                className="object-contain p-4"
              />
            </div>
            <div className="space-y-1">
              <>
                <p className="font-bold uppercase">
                  Cost:{" "}
                  <span className="text-yellow-400">
                    {character.details.price}
                  </span>
                </p>
                <p className="text-sm opacity-80">
                  {character.details.description}
                </p>
              </>
              <BuyButton
                isPurchaseable={character.details.isPurchaseable}
                selected={character.selected}
                characterId={character.id}
                coins={character.details.price}
                owned={false}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
export default ShopPage;
