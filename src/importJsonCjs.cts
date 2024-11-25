async function main() {
    // @ts-expect-error -- this will be a runtime error.
    const somethingDynamic = await import('./someThing.json');
    console.log('dynamically imported JSON:', somethingDynamic);
}

main();

export {}