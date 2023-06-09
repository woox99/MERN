const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const pkIdDiv3 = pokémon.filter( pk => pk.id % 3 == 0);
console.log(pkIdDiv3)

const pkFire = pokémon.filter( pk => pk.types.includes('fire'));
console.log(pkFire)

const pkMultiType = pokémon.filter( pk => pk.types.length > 1);
console.log(pkMultiType);

const pkName = pokémon.map (pk => pk.name)
console.log(pkName);

const pkName99 = pokémon.filter(pk => pk.id > 99).map( pk=>[pk.name, pk.id]);
console.log(pkName99);

const pkNamePoison = pokémon.filter(pk => pk.types == 'poison').map(pk => pk.name);
console.log(pkNamePoison);

const pkFirstSecondFlying = pokémon.filter(pk => pk.types[1] == 'flying').map(pk => pk.types[0]);
console.log(pkFirstSecondFlying);

const pkCountNormal = pokémon.filter( pk => pk.types.includes('normal'));
console.log(pkCountNormal.length);
