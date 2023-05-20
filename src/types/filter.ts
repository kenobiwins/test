export enum filterValues {
  showAll = "show all",
  follow = "follow",
  followings = "followings",
}

export type filterValuesType = `${filterValues}`

// show all - показати всі твіти.
// follow - показати твіти, у яких стан follow.
// followings - показати твіти, у яких стан following