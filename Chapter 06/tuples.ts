/* +--------------------Tuples--------------------+ */

// const category: [number, string, boolean] = [1, '1A', true];

// category[0] = '1'; // error
// category[3] = false; // error
// category.length = 4; // error
// category.push(1); // fine

// const category2: [id: number, subcategory: string, archived: boolean] = [1, '1A', true];
// const id = category2[0];

/* +--------------------Optional Elements--------------------+ */

// const category3: [number, string, boolean?] = [1, '1A', true];

/* +--------------------Rest Elements--------------------+ */

// let category4: [number, ...string[], boolean];
// category4 = [1, '1A', '1B', '1C', true];
// category4 = [1, true];

/* +--------------------Read-only Tuples--------------------+ */

// let category5: readonly [number, string, boolean] = [1, '1A', true];
// category5[0] = 5; // error
