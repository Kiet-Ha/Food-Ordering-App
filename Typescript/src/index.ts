import { Order } from "./Order";
// import { getItem } from "./Menu";
import { PAGE } from "./Item";
import { NoodleSoup, SOUP_NOODLE } from "./NoodleSoup";
const order1 = new Order(4);
const soup = new NoodleSoup(
    144,
    PAGE.NoodleSoup,
    { _english: "Noodle Soup" },
    17.5,
    SOUP_NOODLE.EggNoodle,
    { Dumpling: 4, Noodle: 1 }
);

order1.Add(soup);

console.log(order1.items[0].price);
