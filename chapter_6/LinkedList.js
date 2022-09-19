import { defaultEquals } from '../util';
import { Node } from '../javascript-datastructures-algorithms-main/src/js/data-structures/models/linked-list-models' // {1}
export default class LinkedList {
constructor(equalsFn = defaultEquals) {
this.count = 0; // {2}
this.head = undefined; // {3}
this.equalsFn = equalsFn; // {4}
}
}