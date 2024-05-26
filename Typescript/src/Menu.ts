// import { Item, NoodleSoup, PAGE } from "./Item";
// import { menuTSV } from "./readfile";

// // const _menu: Item[] = [];

// // for (let data of menuTSV) {
// //     const info = data.split("\t");
// //     _menu.push(
// //         new Item(
// //             parseInt(info[1]),
// //             info[0] as PAGE,
// //             {
// //                 _chinese: info[2],
// //                 _english: info[3],
// //                 _vietnamese: info[4],
// //             },
// //             parseFloat(info[5])
// //         )
// //     );
// // }

// export function getItem(value: number) {
//     for (let itemTSV of menuTSV) {
//         const item = itemTSV.split("\t");
//         if (parseInt(item[1]) === value) {
//             return {
//                 id: parseInt(item[1]),
//                 _page: item[0] as PAGE,
//                 _name: {
//                     _chinese: item[2],
//                     _english: item[3],
//                     _vietnamese: item[4],
//                 },
//                 _price: parseFloat(item[5]),
//             };
//         }
//     }
//     throw new Error("No item with value found!");
// }
