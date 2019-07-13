// @flow

function add(a: number, b: number) {
    return a + b;
}

type User = {
    name: {
        first: string,
        last: string
    }
};
function getFullName(user: User): string {
    const {
        name: { first, last }
    } = user;

    return [first, last].filter(Boolean).join();
}

getFullName({ name: { first: "Cristian", last: "Bar" } });

add(1, 3);
