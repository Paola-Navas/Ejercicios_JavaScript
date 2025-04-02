function truthTable() {
    let X = false, Y = false;
    
    console.log("| X     | Y     | X AND Y |");
    console.log("|-------|-------|---------|");

    // Combinación A = false, B = false
    let AND1 = X && Y;
    console.log(`| ${X} | ${Y} |  ${AND1}  |`);

    // Combinación A = false, B = true
    Y = true;
    let AND2 = X && Y;
    console.log(`| ${X} | ${Y}  |  ${AND2}  |`);

    // Combinación A = true, B = false
    X = true;
    Y = false;
    let AND3 = X && Y;
    console.log(`| ${X}  | ${Y} |  ${AND3}  |`);

    // Combinación A = true, B = true
    Y = true;
    let AND4 = X && Y;
    console.log(`| ${X}  | ${Y}  |  ${AND4}   |`);
}

truthTable();
